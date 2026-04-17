const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean), // This removes undefined/null values
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
}).catch((error) => {
  console.error('Database connection error:', error);
  process.exit(1);
});

// Import Models
const User = require('./models/User');
const DashboardContent = require('./models/DashboardContent');
const HomePageContent = require('./models/HomePageContent');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
app.post('/api/auth/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').notEmpty().withMessage('Phone number is required')
], async (req, res) => {
  try {
    console.log('Registration request received:', req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, username, email, password, phone } = req.body;
    console.log('Extracted data:', { name, username, email, phone });

    // SECURITY: Prevent admin creation through registration
    if (email.toLowerCase().includes('admin') || 
        username.toLowerCase().includes('admin') ||
        name.toLowerCase().includes('admin')) {
      console.log('SECURITY ALERT: Attempted admin creation through registration');
      return res.status(403).json({
        success: false,
        message: 'Admin accounts cannot be created through registration'
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      });
    }

    // Create user - ALWAYS set as regular user
    const user = await User.create({
      name,
      username,
      email,
      password,
      phone,
      user_type: 'user', // Force to regular user
      verification_code: Math.random().toString(36).substring(2, 15)
    });

    // Generate token
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          user_type: user.user_type,
          is_verified: user.is_verified
        }
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
app.post('/api/auth/login', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').exists().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if account is locked due to too many attempts
    if (user.login_attempts >= 5 && user.last_login_attempt) {
      const lockTime = 30 * 60 * 1000; // 30 minutes
      const timeSinceLastAttempt = Date.now() - user.last_login_attempt;

      if (timeSinceLastAttempt < lockTime) {
        return res.status(423).json({
          success: false,
          message: 'Account locked. Try again later.'
        });
      }
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      // Update login attempts
      user.login_attempts += 1;
      user.last_login_attempt = Date.now();
      await user.save();

      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Reset login attempts on successful login
    user.login_attempts = 0;
    user.last_login_attempt = null;
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          user_type: user.user_type,
          is_verified: user.is_verified
        }
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Create admin user (SECURE - Manual Only)
// @route   POST /api/auth/create-admin
// @access  Private (with secret key)
app.post('/api/auth/create-admin', [
  body('name').notEmpty().withMessage('Name is required'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('secret').notEmpty().withMessage('Admin secret key is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, username, email, password, phone, secret } = req.body;

    // SECURITY: Verify secret key
    const ADMIN_SECRET = process.env.ADMIN_SECRET || 'krishna14-admin-2024';
    if (secret !== ADMIN_SECRET) {
      console.log('SECURITY ALERT: Invalid admin creation attempt with wrong secret');
      return res.status(403).json({
        success: false,
        message: 'Invalid admin secret key'
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email or username already exists'
      });
    }

    // Create admin user
    const admin = await User.create({
      name,
      username,
      email,
      password,
      phone,
      user_type: 'admin',
      verification_code: Math.random().toString(36).substring(2, 15)
    });

    // Generate token
    const token = generateToken(admin._id);

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: {
        token,
        user: {
          id: admin._id,
          name: admin.name,
          username: admin.username,
          email: admin.email,
          phone: admin.phone,
          user_type: admin.user_type,
          is_verified: admin.is_verified
        }
      }
    });
  } catch (error) {
    console.error('Admin creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @desc    Get logged in user
// @route   GET /api/auth/me
// @access  Private
app.get('/api/auth/me', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token, authorization denied'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token is not valid'
      });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          user_type: user.user_type,
          is_verified: user.is_verified
        }
      }
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(401).json({
      success: false,
      message: 'Token is not valid'
    });
  }
});

// @desc    Get dashboard content for users
// @route   GET /api/dashboard/content
// @access  Public
app.get('/api/dashboard/content', async (req, res) => {
  try {
    const content = await DashboardContent.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .select('title description icon link');

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get dashboard content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Import admin routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// Import home page content routes
const homePageContentRoutes = require('./routes/homePageContent');
app.use('/api/home-content', homePageContentRoutes);

// --- SERVE FRONTEND ---
// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, '../dist')));

// Handle any routes that aren't API routes by serving index.html
app.get('*', (req, res) => {
  // Check if the request is not an API call
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
