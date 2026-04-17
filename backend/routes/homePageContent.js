const express = require('express');
const router = express.Router();
const HomePageContent = require('../models/HomePageContent');
const adminAuth = require('../middleware/adminAuth');
const { body, validationResult } = require('express-validator');

// Get all home page content sections
router.get('/', async (req, res) => {
  try {
    const content = await HomePageContent.find({ isActive: true })
      .sort({ order: 1, section: 1 });
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get home content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get specific section content
router.get('/:section', async (req, res) => {
  try {
    const { section } = req.params;
    
    const content = await HomePageContent.findOne({ 
      section, 
      isActive: true 
    });
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Section not found'
      });
    }
    
    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get section content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Create or update section content (Admin only)
router.post('/:section', adminAuth, [
  body('content').notEmpty().withMessage('Content is required')
], async (req, res) => {
  try {
    console.log('=== SAVE REQUEST START ===');
    console.log('Section:', req.params.section);
    console.log('Request body keys:', Object.keys(req.body));
    console.log('Content type:', typeof req.body.content);
    console.log('User:', req.user ? req.user._id : 'No user');
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { section } = req.params;
    const { content, order = 0 } = req.body;
    
    console.log('Saving content for section:', section);
    console.log('Content preview:', JSON.stringify(content).substring(0, 200) + '...');

    // Check if section exists
    const validSections = ['hero', 'stats', 'categories', 'testimonials', 'seekho_gurus', 'video_grid', 'franchise', 'about'];
    if (!validSections.includes(section)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid section'
      });
    }

    // Update or create content
    console.log('Attempting to save to database...');
    const homeContent = await HomePageContent.findOneAndUpdate(
      { section },
      { 
        content,
        order,
        lastModifiedBy: req.user._id,
        isActive: true
      },
      { 
        new: true, 
        upsert: true,
        runValidators: true 
      }
    );
    
    console.log('Database save result:', homeContent ? 'SUCCESS' : 'FAILED');
    console.log('Saved content ID:', homeContent._id);
    console.log('=== SAVE REQUEST END ===');

    res.json({
      success: true,
      message: 'Content updated successfully',
      data: homeContent
    });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Delete section content (Admin only)
router.delete('/:section', adminAuth, async (req, res) => {
  try {
    const { section } = req.params;
    
    const content = await HomePageContent.findOneAndDelete({ section });
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Section not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Toggle section active status (Admin only)
router.patch('/:section/toggle', adminAuth, async (req, res) => {
  try {
    const { section } = req.params;
    
    const content = await HomePageContent.findOne({ section });
    
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Section not found'
      });
    }
    
    content.isActive = !content.isActive;
    content.lastModifiedBy = req.user._id;
    await content.save();
    
    res.json({
      success: true,
      message: `Section ${content.isActive ? 'activated' : 'deactivated'} successfully`,
      data: content
    });
  } catch (error) {
    console.error('Toggle content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
