const mongoose = require('mongoose');

const adminSettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    default: 'MultiClout',
    required: true
  },
  siteDescription: {
    type: String,
    default: 'Your Digital Marketing Platform'
  },
  primaryColor: {
    type: String,
    default: '#1e3a5f'
  },
  secondaryColor: {
    type: String,
    default: '#00bcd4'
  },
  logo: {
    type: String,
    default: ''
  },
  favicon: {
    type: String,
    default: ''
  },
  contactEmail: {
    type: String,
    default: 'contact@multiclout.com'
  },
  contactPhone: {
    type: String,
    default: '+1234567890'
  },
  socialLinks: {
    facebook: { type: String, default: '' },
    twitter: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' }
  },
  maintenanceMode: {
    type: Boolean,
    default: false
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

adminSettingsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('AdminSettings', adminSettingsSchema);
