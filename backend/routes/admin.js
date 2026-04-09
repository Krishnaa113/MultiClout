const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const {
  getDashboardContent,
  createDashboardContent,
  updateDashboardContent,
  deleteDashboardContent,
  getAdminSettings,
  updateAdminSettings,
  getAllUsers,
  updateUserRole
} = require('../controllers/adminController');

// Dashboard Content Management
router.get('/dashboard-content', auth, adminAuth, getDashboardContent);
router.post('/dashboard-content', [
  auth,
  adminAuth,
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('icon').optional().isString().withMessage('Icon must be a string'),
  body('order').optional().isNumeric().withMessage('Order must be a number'),
  body('link').optional().isURL().withMessage('Link must be a valid URL')
], createDashboardContent);
router.put('/dashboard-content/:id', [
  auth,
  adminAuth,
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
  body('icon').optional().isString().withMessage('Icon must be a string'),
  body('order').optional().isNumeric().withMessage('Order must be a number'),
  body('link').optional().isURL().withMessage('Link must be a valid URL'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean')
], updateDashboardContent);
router.delete('/dashboard-content/:id', auth, adminAuth, deleteDashboardContent);

// Admin Settings
router.get('/settings', auth, adminAuth, getAdminSettings);
router.put('/settings', [
  auth,
  adminAuth,
  body('siteName').optional().notEmpty().withMessage('Site name cannot be empty'),
  body('siteDescription').optional().notEmpty().withMessage('Site description cannot be empty'),
  body('primaryColor').optional().isHexColor().withMessage('Primary color must be a valid hex color'),
  body('secondaryColor').optional().isHexColor().withMessage('Secondary color must be a valid hex color'),
  body('contactEmail').optional().isEmail().withMessage('Contact email must be valid'),
  body('maintenanceMode').optional().isBoolean().withMessage('Maintenance mode must be a boolean')
], updateAdminSettings);

// User Management
router.get('/users', auth, adminAuth, getAllUsers);
router.put('/users/:id/role', [
  auth,
  adminAuth,
  body('user_type').isIn(['user', 'admin']).withMessage('User type must be either user or admin')
], updateUserRole);

module.exports = router;
