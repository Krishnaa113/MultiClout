const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Video title is required']
  },
  slug: {
    type: String,
    unique: false,
    required: false
  },
  description: {
    type: String,
    required: [true, 'Video description is required']
  },
  thumbnail: {
    type: String,
    required: [true, 'Video thumbnail URL is required']
  },
  videoUrl: {
    type: String,
    required: [true, 'Video URL is required']
  },
  duration: {
    type: String,
    required: [true, 'Video duration is required']
  },
  category: {
    type: String,
    required: [true, 'Video category is required'],
    enum: ['Digital Marketing', 'Business & Startup', 'Communication', 'Technology', 'Finance', 'Productivity', 'AI Tools', 'All']
  },
  language: {
    type: String,
    required: [true, 'Video language is required'],
    enum: ['Hindi', 'English', 'Hinglish']
  },
  views: {
    type: String,
    required: [true, 'View count is required']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 0,
    max: 5
  },
  author: {
    type: String,
    required: [true, 'Author name is required']
  },
  date: {
    type: String,
    required: [true, 'Publish date is required']
  },
  tags: [{
    type: String
  }],
  section: {
    type: String,
    required: [true, 'Section is required']
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Index for efficient queries
videoSchema.index({ category: 1 });
videoSchema.index({ isActive: 1 });
videoSchema.index({ section: 1 });
videoSchema.index({ order: 1 });
videoSchema.index({ featured: -1 });
videoSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Video', videoSchema);
