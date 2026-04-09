const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  line1: { type: String, default: "India's No.1" },
  line2: { type: String, default: "Best Business Education" },
  line3: { type: String, default: "Affiliate Marketing" },
  line4: { type: String, default: "Network Company" },
  description: String,
  satisfactionRate: { type: Number, default: 98 },
}, { timestamps: true });

module.exports = mongoose.model('HeroContent', heroSchema);