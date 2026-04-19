const express = require('express');
const router = express.Router();
const Video = require('../models/Video');
const adminAuth = require('../middleware/adminAuth');
const { body, validationResult } = require('express-validator');

// Get videos by category (Public route)
router.get('/', async (req, res) => {
  try {
    const { category = 'All', limit = 50, page = 1 } = req.query;
    
    let query = { isActive: true };
    if (category !== 'All') {
      query.category = category;
    }
    
    const skip = (page - 1) * limit;
    
    const videos = await Video.find(query)
      .sort({ featured: -1, order: 1, createdAt: -1 })
      .limit(limit * 1)
      .skip(skip);
    
    const total = await Video.countDocuments(query);
    
    res.json({
      success: true,
      data: videos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get videos error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get single video by ID (Public route)
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findOne({ 
      _id: req.params.id, 
      isActive: true 
    });
    
    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found'
      });
    }
    
    // Get related videos (same category, exclude current)
    const relatedVideos = await Video.find({
      _id: { $ne: video._id },
      category: video.category,
      isActive: true
    })
    .sort({ featured: -1, order: 1, createdAt: -1 })
    .limit(6);
    
    res.json({
      success: true,
      data: video,
      relatedVideos
    });
  } catch (error) {
    console.error('Get video error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all videos (Admin only)
router.get('/admin/all', adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 20, category, search } = req.query;
    
    let query = {};
    if (category && category !== 'All') {
      query.category = category;
    }
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (page - 1) * limit;
    
    const videos = await Video.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip(skip);
    
    const total = await Video.countDocuments(query);
    
    res.json({
      success: true,
      data: videos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get all videos error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Create new video (Admin only)
router.post('/', [
  adminAuth,
  body('title').notEmpty().withMessage('Video title is required'),
  body('description').notEmpty().withMessage('Video description is required'),
  body('thumbnail').isURL().withMessage('Valid thumbnail URL is required'),
  body('videoUrl').isURL().withMessage('Valid video URL is required'),
  body('duration').notEmpty().withMessage('Video duration is required'),
  body('category').isIn(['Digital Marketing', 'Business & Startup', 'Communication', 'Technology', 'Finance', 'Productivity', 'AI Tools', 'All']).withMessage('Invalid category'),
  body('language').isIn(['Hindi', 'English', 'Hinglish']).withMessage('Invalid language'),
  body('views').notEmpty().withMessage('View count is required'),
  body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
  body('author').notEmpty().withMessage('Author name is required'),
  body('date').notEmpty().withMessage('Publish date is required'),
  body('section').notEmpty().withMessage('Section is required'),
  body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer'),
  body('featured').optional().isBoolean().withMessage('Featured must be a boolean'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const video = new Video(req.body);
    video.lastModifiedBy = req.user.id;
    
    await video.save();
    
    res.status(201).json({
      success: true,
      message: 'Video created successfully',
      data: video
    });
  } catch (error) {
    console.error('Create video error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Update video (Admin only)
router.put('/:id', [
  adminAuth,
  body('title').optional().notEmpty().withMessage('Video title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Video description cannot be empty'),
  body('thumbnail').optional().isURL().withMessage('Valid thumbnail URL is required'),
  body('videoUrl').optional().isURL().withMessage('Valid video URL is required'),
  body('duration').optional().notEmpty().withMessage('Video duration cannot be empty'),
  body('category').optional().isIn(['Digital Marketing', 'Business & Startup', 'Communication', 'Technology', 'Finance', 'Productivity', 'AI Tools', 'All']).withMessage('Invalid category'),
  body('language').optional().isIn(['Hindi', 'English', 'Hinglish']).withMessage('Invalid language'),
  body('views').optional().notEmpty().withMessage('View count cannot be empty'),
  body('rating').optional().isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
  body('author').optional().notEmpty().withMessage('Author name cannot be empty'),
  body('date').optional().notEmpty().withMessage('Publish date cannot be empty'),
  body('section').optional().notEmpty().withMessage('Section cannot be empty'),
  body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer'),
  body('featured').optional().isBoolean().withMessage('Featured must be a boolean'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { 
        ...req.body, 
        lastModifiedBy: req.user.id 
      },
      { new: true, runValidators: true }
    );
    
    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Video updated successfully',
      data: video
    });
  } catch (error) {
    console.error('Update video error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Delete video (Admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    
    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Video deleted successfully'
    });
  } catch (error) {
    console.error('Delete video error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Toggle featured status (Admin only)
router.patch('/:id/featured', adminAuth, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    
    if (!video) {
      return res.status(404).json({
        success: false,
        message: 'Video not found'
      });
    }
    
    video.featured = !video.featured;
    video.lastModifiedBy = req.user.id;
    await video.save();
    
    res.json({
      success: true,
      message: `Video ${video.featured ? 'unfeatured' : 'featured'} successfully`,
      data: video
    });
  } catch (error) {
    console.error('Toggle featured error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get video statistics (Admin only)
router.get('/admin/stats', adminAuth, async (req, res) => {
  try {
    const stats = await Video.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          avgRating: { $avg: '$rating' },
          featuredCount: {
            $sum: { $cond: [{ $eq: ['$featured', true] }, 1, 0] }
          }
        }
      },
      {
        $group: {
          _id: null,
          totalVideos: { $sum: '$count' },
          avgRating: { $avg: '$avgRating' },
          totalFeatured: { $sum: '$featuredCount' },
          categories: { $push: { category: '$_id', count: '$count', avgRating: '$avgRating' } }
        }
      }
    ]);
    
    res.json({
      success: true,
      data: stats[0] || {
        totalVideos: 0,
        avgRating: 0,
        totalFeatured: 0,
        categories: []
      }
    });
  } catch (error) {
    console.error('Get video stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
