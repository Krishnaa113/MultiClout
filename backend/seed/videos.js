require('dotenv').config();
const mongoose = require('mongoose');
const Video = require('../models/Video');

const sampleVideos = [
  {
    title: "Digital Marketing Mastery 2026",
    description: "Learn the latest digital marketing strategies and techniques for 2026. This comprehensive masterclass covers everything from SEO fundamentals to advanced social media marketing automation.",
    thumbnail: "https://picsum.photos/seed/digital-marketing/400/700",
    videoUrl: "https://example.com/videos/digital-marketing-2026.mp4",
    duration: "45:30",
    category: "Digital Marketing",
    language: "English",
    views: "125K",
    rating: 4.8,
    author: "Marketing Expert",
    date: "Apr 15, 2026",
    tags: ["digital marketing", "SEO", "social media", "automation"],
    section: "Trending Now",
    order: 1,
    featured: true,
    isActive: true
  },
  {
    title: "Business Growth Strategies",
    description: "Discover proven business growth strategies that successful entrepreneurs use to scale their businesses in 2026.",
    thumbnail: "https://picsum.photos/seed/business-growth/400/700",
    videoUrl: "https://example.com/videos/business-growth-2026.mp4",
    duration: "38:15",
    category: "Business & Startup",
    language: "Hindi",
    views: "89K",
    rating: 4.6,
    author: "Business Coach",
    date: "Apr 14, 2026",
    tags: ["business", "growth", "strategy", "scaling"],
    section: "Marketing Mastery",
    order: 2,
    featured: true,
    isActive: true
  },
  {
    title: "AI Tools for Productivity",
    description: "Explore cutting-edge AI tools that can revolutionize your productivity and workflow in 2026.",
    thumbnail: "https://picsum.photos/seed/ai-tools/400/700",
    videoUrl: "https://example.com/videos/ai-tools-2026.mp4",
    duration: "25:45",
    category: "AI Tools",
    language: "English",
    views: "156K",
    rating: 4.9,
    author: "Tech Expert",
    date: "Apr 13, 2026",
    tags: ["AI", "productivity", "tools", "automation"],
    section: "Trending Now",
    order: 3,
    featured: false,
    isActive: true
  },
  {
    title: "Financial Planning Guide",
    description: "Complete guide to financial planning and investment strategies for beginners and advanced investors alike.",
    thumbnail: "https://picsum.photos/seed/finance-planning/400/700",
    videoUrl: "https://example.com/videos/finance-planning-2026.mp4",
    duration: "52:20",
    category: "Finance",
    language: "Hinglish",
    views: "67K",
    rating: 4.7,
    author: "Finance Guru",
    date: "Apr 12, 2026",
    tags: ["finance", "planning", "investment", "wealth"],
    section: "Business Ideas 2026",
    order: 4,
    featured: false,
    isActive: true
  },
  {
    title: "Communication Skills Masterclass",
    description: "Master essential communication skills for professional and personal success in the modern workplace.",
    thumbnail: "https://picsum.photos/seed/communication/400/700",
    videoUrl: "https://example.com/videos/communication-skills-2026.mp4",
    duration: "32:10",
    category: "Communication",
    language: "English",
    views: "94K",
    rating: 4.5,
    author: "Communication Expert",
    date: "Apr 11, 2026",
    tags: ["communication", "skills", "professional", "workplace"],
    section: "Top Rated Courses",
    order: 5,
    featured: true,
    isActive: true
  },
  {
    title: "Technology Trends 2026",
    description: "Stay ahead with the latest technology trends and innovations shaping the future in 2026.",
    thumbnail: "https://picsum.photos/seed/technology-trends/400/700",
    videoUrl: "https://example.com/videos/technology-trends-2026.mp4",
    duration: "41:30",
    category: "Technology",
    language: "English",
    views: "203K",
    rating: 4.8,
    author: "Tech Insider",
    date: "Apr 10, 2026",
    tags: ["technology", "trends", "innovation", "future"],
    section: "Top Rated Courses",
    order: 6,
    featured: false,
    isActive: true
  },
  {
    title: "Productivity Hacks 2026",
    description: "Boost your productivity with these proven hacks and strategies for maximum efficiency in 2026.",
    thumbnail: "https://picsum.photos/seed/productivity-hacks/400/700",
    videoUrl: "https://example.com/videos/productivity-hacks-2026.mp4",
    duration: "28:15",
    category: "Productivity",
    language: "Hindi",
    views: "178K",
    rating: 4.6,
    author: "Productivity Coach",
    date: "Apr 9, 2026",
    tags: ["productivity", "hacks", "efficiency", "time management"],
    section: "Top Rated Courses",
    order: 7,
    featured: true,
    isActive: true
  },
  {
    title: "Advanced SEO Techniques",
    description: "Learn advanced SEO techniques that top marketers use to dominate search rankings in 2026.",
    thumbnail: "https://picsum.photos/seed/advanced-seo/400/700",
    videoUrl: "https://example.com/videos/advanced-seo-2026.mp4",
    duration: "55:20",
    category: "Digital Marketing",
    language: "English",
    views: "142K",
    rating: 4.9,
    author: "SEO Specialist",
    date: "Apr 8, 2026",
    tags: ["SEO", "search engine", "ranking", "marketing"],
    section: "Marketing Mastery",
    order: 8,
    featured: false,
    isActive: true
  }
];

async function seedVideos() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Drop the collection to remove all indexes and documents
    const db = mongoose.connection.db;
    try {
      await db.collection('videos').drop();
      console.log('Videos collection dropped');
    } catch (error) {
      console.log('Collection might not exist, continuing...');
    }

    // Insert sample videos
    await Video.insertMany(sampleVideos);
    console.log('Sample videos seeded successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding videos:', error);
    process.exit(1);
  }
}

// Run the seed function
seedVideos();
