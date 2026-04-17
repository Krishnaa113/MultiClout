const mongoose = require('mongoose');

const homePageContentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: [true, 'Section is required'],
    enum: ['hero', 'stats', 'categories', 'testimonials', 'seekho_gurus', 'video_grid'],
    unique: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, 'Content is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for efficient queries
homePageContentSchema.index({ section: 1 });
homePageContentSchema.index({ isActive: 1 });

module.exports = mongoose.model('HomePageContent', homePageContentSchema);
