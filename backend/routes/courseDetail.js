const express = require('express');
const router = express.Router();
const CourseDetail = require('../models/CourseDetail');
const adminAuth = require('../middleware/adminAuth');
const { body, validationResult } = require('express-validator');

// Get course detail by training program ID (Public route)
router.get('/:trainingProgramId', async (req, res) => {
  try {
    const { trainingProgramId } = req.params;
    
    const courseDetail = await CourseDetail.findOne({ 
      trainingProgramId: parseInt(trainingProgramId),
      isActive: true 
    });
    
    if (!courseDetail) {
      return res.status(404).json({
        success: false,
        message: 'Course detail not found'
      });
    }
    
    res.json({
      success: true,
      data: courseDetail
    });
  } catch (error) {
    console.error('Get course detail error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all course details (Admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const courseDetails = await CourseDetail.find()
      .sort({ order: 1, trainingProgramId: 1 });
    
    res.json({
      success: true,
      data: courseDetails
    });
  } catch (error) {
    console.error('Get all course details error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Create new course detail (Admin only)
router.post('/', [
  adminAuth,
  body('trainingProgramId').isInt({ min: 1 }).withMessage('Training program ID must be a positive integer'),
  body('programName').notEmpty().withMessage('Program name is required'),
  body('hero.title').notEmpty().withMessage('Hero title is required'),
  body('hero.subtitle').notEmpty().withMessage('Hero subtitle is required'),
  body('hero.description').notEmpty().withMessage('Hero description is required'),
  body('pricing.currentPrice').notEmpty().withMessage('Current price is required'),
  body('pricing.originalPrice').notEmpty().withMessage('Original price is required'),
  body('learningPoints').isArray({ min: 1 }).withMessage('At least one learning point is required'),
  body('requirements').isArray({ min: 1 }).withMessage('At least one requirement is required'),
  body('description').notEmpty().withMessage('Description is required')
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

    const courseDetail = new CourseDetail(req.body);
    courseDetail.lastModifiedBy = req.user.id;
    
    await courseDetail.save();
    
    res.status(201).json({
      success: true,
      message: 'Course detail created successfully',
      data: courseDetail
    });
  } catch (error) {
    console.error('Create course detail error:', error);
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Training program ID already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Update course detail (Admin only)
router.put('/:id', [
  adminAuth,
  body('trainingProgramId').optional().isInt({ min: 1 }).withMessage('Training program ID must be a positive integer'),
  body('programName').optional().notEmpty().withMessage('Program name cannot be empty'),
  body('hero.title').optional().notEmpty().withMessage('Hero title cannot be empty'),
  body('hero.subtitle').optional().notEmpty().withMessage('Hero subtitle cannot be empty'),
  body('hero.description').optional().notEmpty().withMessage('Hero description cannot be empty'),
  body('pricing.currentPrice').optional().notEmpty().withMessage('Current price cannot be empty'),
  body('pricing.originalPrice').optional().notEmpty().withMessage('Original price cannot be empty'),
  body('learningPoints').optional().isArray().withMessage('Learning points must be an array'),
  body('requirements').optional().isArray().withMessage('Requirements must be an array'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
  body('order').optional().isInt({ min: 0 }).withMessage('Order must be a non-negative integer')
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

    const courseDetail = await CourseDetail.findByIdAndUpdate(
      req.params.id,
      { 
        ...req.body, 
        lastModifiedBy: req.user.id 
      },
      { new: true, runValidators: true }
    );
    
    if (!courseDetail) {
      return res.status(404).json({
        success: false,
        message: 'Course detail not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Course detail updated successfully',
      data: courseDetail
    });
  } catch (error) {
    console.error('Update course detail error:', error);
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Training program ID already exists'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Delete course detail (Admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const courseDetail = await CourseDetail.findByIdAndDelete(req.params.id);
    
    if (!courseDetail) {
      return res.status(404).json({
        success: false,
        message: 'Course detail not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Course detail deleted successfully'
    });
  } catch (error) {
    console.error('Delete course detail error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Duplicate course detail (Admin only)
router.post('/:id/duplicate', adminAuth, async (req, res) => {
  try {
    const originalCourse = await CourseDetail.findById(req.params.id);
    
    if (!originalCourse) {
      return res.status(404).json({
        success: false,
        message: 'Course detail not found'
      });
    }
    
    // Find the highest trainingProgramId to create a new unique one
    const maxProgram = await CourseDetail.findOne().sort('-trainingProgramId');
    const newProgramId = maxProgram ? maxProgram.trainingProgramId + 1 : 1;
    
    const duplicatedCourse = new CourseDetail({
      ...originalCourse.toObject(),
      _id: undefined,
      trainingProgramId: newProgramId,
      programName: `${originalCourse.programName} (Copy)`,
      lastModifiedBy: req.user.id
    });
    
    await duplicatedCourse.save();
    
    res.status(201).json({
      success: true,
      message: 'Course detail duplicated successfully',
      data: duplicatedCourse
    });
  } catch (error) {
    console.error('Duplicate course detail error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
