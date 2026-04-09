const express = require('express');
const router = express.Router();
const HeroContent = require('../models/HeroContent');
const Course = require('../models/Course');
const MembershipPlan = require('../models/MembershipPlan');

// GET all home page data in one call (more efficient)
router.get('/', async (req, res) => {
  try {
    const [hero, courses, plans] = await Promise.all([
      HeroContent.findOne().sort({ updatedAt: -1 }),
      Course.find({ isActive: true }).sort({ order: 1 }),
      MembershipPlan.find({ isActive: true }).sort({ order: 1 }),
    ]);
    res.json({ hero, courses, plans });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Individual endpoints (optional, for granular control)
router.get('/hero', async (req, res) => {
  try {
    const hero = await HeroContent.findOne().sort({ updatedAt: -1 });
    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find({ isActive: true }).sort({ order: 1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/plans', async (req, res) => {
  try {
    const plans = await MembershipPlan.find({ isActive: true }).sort({ order: 1 });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;