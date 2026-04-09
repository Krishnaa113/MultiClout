const DashboardContent = require('../models/DashboardContent');
const AdminSettings = require('../models/AdminSettings');
const User = require('../models/User');

// @desc    Get all dashboard content
// @route   GET /api/admin/dashboard-content
// @access  Private (Admin only)
exports.getDashboardContent = async (req, res) => {
  try {
    const content = await DashboardContent.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .populate('createdBy', 'name username');

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
};

// @desc    Create dashboard content
// @route   POST /api/admin/dashboard-content
// @access  Private (Admin only)
exports.createDashboardContent = async (req, res) => {
  try {
    const { title, description, icon, order, link } = req.body;

    const content = await DashboardContent.create({
      title,
      description,
      icon: icon || '📊',
      order: order || 0,
      link: link || '#',
      createdBy: req.user.id
    });

    res.status(201).json({
      success: true,
      message: 'Dashboard content created successfully',
      data: content
    });
  } catch (error) {
    console.error('Create dashboard content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update dashboard content
// @route   PUT /api/admin/dashboard-content/:id
// @access  Private (Admin only)
exports.updateDashboardContent = async (req, res) => {
  try {
    const { title, description, icon, order, link, isActive } = req.body;

    const content = await DashboardContent.findByIdAndUpdate(
      req.params.id,
      { title, description, icon, order, link, isActive },
      { new: true, runValidators: true }
    );

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Dashboard content not found'
      });
    }

    res.json({
      success: true,
      message: 'Dashboard content updated successfully',
      data: content
    });
  } catch (error) {
    console.error('Update dashboard content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete dashboard content
// @route   DELETE /api/admin/dashboard-content/:id
// @access  Private (Admin only)
exports.deleteDashboardContent = async (req, res) => {
  try {
    const content = await DashboardContent.findByIdAndDelete(req.params.id);

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Dashboard content not found'
      });
    }

    res.json({
      success: true,
      message: 'Dashboard content deleted successfully'
    });
  } catch (error) {
    console.error('Delete dashboard content error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get admin settings
// @route   GET /api/admin/settings
// @access  Private (Admin only)
exports.getAdminSettings = async (req, res) => {
  try {
    let settings = await AdminSettings.findOne();
    
    if (!settings) {
      settings = await AdminSettings.create({
        siteName: 'MultiClout',
        updatedBy: req.user.id
      });
    }

    res.json({
      success: true,
      data: settings
    });
  } catch (error) {
    console.error('Get admin settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update admin settings
// @route   PUT /api/admin/settings
// @access  Private (Admin only)
exports.updateAdminSettings = async (req, res) => {
  try {
    const updates = req.body;
    updates.updatedBy = req.user.id;

    let settings = await AdminSettings.findOne();
    
    if (!settings) {
      settings = await AdminSettings.create(updates);
    } else {
      settings = await AdminSettings.findByIdAndUpdate(
        settings._id,
        updates,
        { new: true, runValidators: true }
      );
    }

    res.json({
      success: true,
      message: 'Settings updated successfully',
      data: settings
    });
  } catch (error) {
    console.error('Update admin settings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get all users (admin management)
// @route   GET /api/admin/users
// @access  Private (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private (Admin only)
exports.updateUserRole = async (req, res) => {
  try {
    const { user_type } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { user_type },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User role updated successfully',
      data: user
    });
  } catch (error) {
    console.error('Update user role error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};
