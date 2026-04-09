const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  sub: String,
  bg: String,       // CSS gradient string
  emoji: String,
  textDark: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);