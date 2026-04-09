const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  emoji: String,
  title: String,
  price: String,       // e.g. "₹2550/-"
  dark: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('MembershipPlan', planSchema);