require('dotenv').config();
const mongoose = require('mongoose');
const CourseDetail = require('../models/CourseDetail');

// const sampleCourses = [
//   {
//     trainingProgramId: 1,
//     programName: 'Digital Marketing Mastery',
//     hero: {
//       title: 'Digital Marketing Mastery: The Complete Guide 2026',
//       subtitle: 'Learn advanced digital marketing strategies, SEO techniques, and social media marketing with proven step-by-step methods.',
//       description: 'Welcome to Digital Marketing Mastery, the most comprehensive digital marketing course available online.',
//       badge: 'Bestseller',
//       rating: 4.8,
//       ratingsCount: '15,230',
//       studentsCount: '78,450',
//       instructor: 'Marketing Expert',
//       lastUpdated: '11/2025',
//       language: 'English',
//       previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//     },
//     pricing: {
//       currentPrice: '₹3,250',
//       originalPrice: '₹9,999',
//       discountText: '67% off! Limited time offer',
//       guaranteeText: '30-Day Money-Back Guarantee'
//     },
//     learningPoints: [
//       'Master SEO strategies and techniques',
//       'Create effective social media campaigns',
//       'Understand Google Analytics and metrics',
//       'Build profitable email marketing funnels',
//       'Learn content marketing strategies',
//       'Optimize paid advertising campaigns'
//     ],
//     courseContent: {
//       totalSections: '12',
//       totalLectures: '156',
//       totalLength: '28h 30m',
//       sections: [
//         {
//           title: 'M1: Introduction to Digital Marketing',
//           lectures: '8',
//           duration: '1h 15m',
//           isExpanded: true,
//           lectureItems: [
//             { type: 'video', title: 'Welcome to Digital Marketing', duration: '05:20', isPreview: true },
//             { type: 'video', title: 'Understanding the Digital Landscape', duration: '15:30' },
//             { type: 'article', title: 'Course Resources and Materials', duration: '3 pages' }
//           ]
//         },
//         {
//           title: 'M2: Search Engine Optimization (SEO)',
//           lectures: '18',
//           duration: '4h 20m',
//           isExpanded: false,
//           lectureItems: []
//         },
//         {
//           title: 'M3: Social Media Marketing',
//           lectures: '22',
//           duration: '5h 45m',
//           isExpanded: false,
//           lectureItems: []
//         }
//       ]
//     },
//     requirements: [
//       'Basic computer skills and internet access',
//       'No prior marketing experience required',
//       'Willingness to learn and implement strategies'
//     ],
//     description: 'Digital Marketing Mastery is your complete guide to becoming a successful digital marketer. This comprehensive course covers everything from basic concepts to advanced strategies used by top marketing professionals.',
//     courseIncludes: {
//       videoHours: '28.5',
//       articles: '25',
//       downloadableResources: '120',
//       accessOnDevices: true,
//       lifetimeAccess: true,
//       certificate: true
//     }
//   },
//   {
//     trainingProgramId: 2,
//     programName: 'Web Development Bootcamp',
//     hero: {
//       title: 'Web Development Bootcamp: Build Modern Websites 2026',
//       subtitle: 'Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive web development course.',
//       description: 'Welcome to the most comprehensive web development course available online.',
//       badge: 'Hot & New',
//       rating: 4.9,
//       ratingsCount: '22,150',
//       studentsCount: '125,890',
//       instructor: 'Web Dev Pro',
//       lastUpdated: '10/2025',
//       language: 'English',
//       previewImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//     },
//     pricing: {
//       currentPrice: '₹4,550',
//       originalPrice: '₹12,999',
//       discountText: '65% off! Early bird special',
//       guaranteeText: '30-Day Money-Back Guarantee'
//     },
//     learningPoints: [
//       'Build responsive websites with HTML5 and CSS3',
//       'Master JavaScript programming fundamentals',
//       'Create dynamic web applications with React',
//       'Build backend APIs with Node.js and Express',
//       'Work with databases (SQL and NoSQL)',
//       'Deploy applications to production'
//     ],
//     courseContent: {
//       totalSections: '18',
//       totalLectures: '245',
//       totalLength: '45h 20m',
//       sections: [
//         {
//           title: 'M1: HTML & CSS Fundamentals',
//           lectures: '25',
//           duration: '6h 30m',
//           isExpanded: true,
//           lectureItems: [
//             { type: 'video', title: 'Introduction to Web Development', duration: '08:15', isPreview: true },
//             { type: 'video', title: 'HTML5 Semantic Elements', duration: '22:30' },
//             { type: 'video', title: 'CSS3 Layouts and Flexbox', duration: '35:45' },
//             { type: 'article', title: 'HTML & CSS Cheat Sheet', duration: '5 pages' }
//           ]
//         },
//         {
//           title: 'M2: JavaScript Programming',
//           lectures: '35',
//           duration: '8h 45m',
//           isExpanded: false,
//           lectureItems: []
//         },
//         {
//           title: 'M3: React.js Development',
//           lectures: '40',
//           duration: '10h 20m',
//           isExpanded: false,
//           lectureItems: []
//         }
//       ]
//     },
//     requirements: [
//       'Basic computer skills',
//       'No programming experience required',
//       'A computer with internet connection',
//       'Dedication to learning'
//     ],
//     description: 'The Web Development Bootcamp is designed to take you from beginner to professional web developer. You will learn modern web technologies through hands-on projects and real-world applications.',
//     courseIncludes: {
//       videoHours: '45.3',
//       articles: '45',
//       downloadableResources: '200',
//       accessOnDevices: true,
//       lifetimeAccess: true,
//       certificate: true
//     }
//   },
//   {
//     trainingProgramId: 3,
//     programName: 'Data Science Fundamentals',
//     hero: {
//       title: 'Data Science Fundamentals: From Zero to Hero 2026',
//       subtitle: 'Master Python, machine learning, data analysis, and visualization in this comprehensive data science course.',
//       description: 'Welcome to Data Science Fundamentals, your gateway to the exciting world of data science.',
//       badge: 'Trending',
//       rating: 4.7,
//       ratingsCount: '18,760',
//       studentsCount: '92,340',
//       instructor: 'Data Science Expert',
//       lastUpdated: '09/2025',
//       language: 'English',
//       previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//     },
//     pricing: {
//       currentPrice: '₹5,250',
//       originalPrice: '₹14,999',
//       discountText: '65% off! Limited seats available',
//       guaranteeText: '30-Day Money-Back Guarantee'
//     },
//     learningPoints: [
//       'Master Python programming for data science',
//       'Learn data analysis with Pandas and NumPy',
//       'Create stunning data visualizations',
//       'Understand machine learning algorithms',
//       'Build predictive models',
//       'Work with real-world datasets'
//     ],
//     courseContent: {
//       totalSections: '15',
//       totalLectures: '189',
//       totalLength: '38h 15m',
//       sections: [
//         {
//           title: 'M1: Introduction to Data Science',
//           lectures: '12',
//           duration: '2h 30m',
//           isExpanded: true,
//           lectureItems: [
//             { type: 'video', title: 'What is Data Science?', duration: '12:45', isPreview: true },
//             { type: 'video', title: 'Data Science Workflow', duration: '18:20' },
//             { type: 'article', title: 'Data Science Tools and Setup', duration: '4 pages' }
//           ]
//         },
//         {
//           title: 'M2: Python for Data Science',
//           lectures: '30',
//           duration: '8h 15m',
//           isExpanded: false,
//           lectureItems: []
//         },
//         {
//           title: 'M3: Data Analysis with Pandas',
//           lectures: '28',
//           duration: '7h 45m',
//           isExpanded: false,
//           lectureItems: []
//         }
//       ]
//     },
//     requirements: [
//       'Basic math and statistics knowledge',
//       'No programming experience required',
//       'Computer with internet access',
//       'Willingness to learn complex concepts'
//     ],
//     description: 'Data Science Fundamentals is your comprehensive introduction to the field of data science. Learn Python programming, data analysis techniques, and machine learning fundamentals.',
//     courseIncludes: {
//       videoHours: '38.2',
//       articles: '35',
//       downloadableResources: '150',
//       accessOnDevices: true,
//       lifetimeAccess: true,
//       certificate: true
//     }
//   },
//   {
//     trainingProgramId: 4,
//     programName: 'Mobile App Development',
//     hero: {
//       title: 'Mobile App Development: Build iOS & Android Apps 2026',
//       subtitle: 'Learn React Native, Flutter, and native development to create stunning mobile applications.',
//       description: 'Welcome to Mobile App Development, your complete guide to building mobile applications.',
//       badge: 'Popular',
//       rating: 4.6,
//       ratingsCount: '12,450',
//       studentsCount: '68,920',
//       instructor: 'Mobile Dev Master',
//       lastUpdated: '08/2025',
//       language: 'English',
//       previewImage: 'https://images.unsplash.com/photo-1512941937309-2a427be36bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//     },
//     pricing: {
//       currentPrice: '₹4,750',
//       originalPrice: '₹11,999',
//       discountText: '60% off! Launch discount',
//       guaranteeText: '30-Day Money-Back Guarantee'
//     },
//     learningPoints: [
//       'Build cross-platform apps with React Native',
//       'Create beautiful UIs with Flutter',
//       'Understand mobile app architecture',
//       'Work with APIs and databases',
//       'Publish apps to App Store and Play Store',
//       'Implement push notifications and analytics'
//     ],
//     courseContent: {
//       totalSections: '14',
//       totalLectures: '167',
//       totalLength: '32h 45m',
//       sections: [
//         {
//           title: 'M1: Mobile Development Basics',
//           lectures: '15',
//           duration: '3h 20m',
//           isExpanded: true,
//           lectureItems: [
//             { type: 'video', title: 'Introduction to Mobile Development', duration: '10:30', isPreview: true },
//             { type: 'video', title: 'Setting Up Development Environment', duration: '25:15' },
//             { type: 'article', title: 'Mobile Development Resources', duration: '3 pages' }
//           ]
//         },
//         {
//           title: 'M2: React Native Fundamentals',
//           lectures: '28',
//           duration: '7h 30m',
//           isExpanded: false,
//           lectureItems: []
//         },
//         {
//           title: 'M3: Flutter Development',
//           lectures: '32',
//           duration: '8h 45m',
//           isExpanded: false,
//           lectureItems: []
//         }
//       ]
//     },
//     requirements: [
//       'Basic programming knowledge helpful',
//       'Computer with internet access',
//       'Mobile device for testing (optional)',
//       'Passion for creating apps'
//     ],
//     description: 'Mobile App Development course teaches you how to build professional mobile applications for both iOS and Android platforms using modern frameworks and tools.',
//     courseIncludes: {
//       videoHours: '32.7',
//       articles: '28',
//       downloadableResources: '180',
//       accessOnDevices: true,
//       lifetimeAccess: true,
//       certificate: true
//     }
//   },
//   {
//     trainingProgramId: 5,
//     programName: 'Business Strategy Excellence',
//     hero: {
//       title: 'Business Strategy Excellence: Lead with Confidence 2026',
//       subtitle: 'Master strategic planning, leadership skills, and business management to drive organizational success.',
//       description: 'Welcome to Business Strategy Excellence, your comprehensive guide to strategic business leadership.',
//       badge: 'Premium',
//       rating: 4.8,
//       ratingsCount: '9,870',
//       studentsCount: '45,680',
//       instructor: 'Business Strategist',
//       lastUpdated: '07/2025',
//       language: 'English',
//       previewImage: 'https://images.unsplash.com/photo-1556761175-5943-0f5e5eb6e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//     },
//     pricing: {
//       currentPrice: '₹6,250',
//       originalPrice: '₹15,999',
//       discountText: '61% off! Executive offer',
//       guaranteeText: '30-Day Money-Back Guarantee'
//     },
//     learningPoints: [
//       'Develop effective business strategies',
//       'Master leadership and management skills',
//       'Understand financial analysis and planning',
//       'Build high-performing teams',
//       'Navigate organizational change',
//       'Make data-driven business decisions'
//     ],
//     courseContent: {
//       totalSections: '16',
//       totalLectures: '134',
//       totalLength: '26h 30m',
//       sections: [
//         {
//           title: 'M1: Strategic Planning Fundamentals',
//           lectures: '10',
//           duration: '2h 45m',
//           isExpanded: true,
//           lectureItems: [
//             { type: 'video', title: 'Introduction to Business Strategy', duration: '15:20', isPreview: true },
//             { type: 'video', title: 'Strategic Analysis Tools', duration: '28:30' },
//             { type: 'article', title: 'Strategy Planning Templates', duration: '6 pages' }
//           ]
//         },
//         {
//           title: 'M2: Leadership Excellence',
//           lectures: '20',
//           duration: '5h 15m',
//           isExpanded: false,
//           lectureItems: []
//         },
//         {
//           title: 'M3: Financial Management',
//           lectures: '18',
//           duration: '4h 30m',
//           isExpanded: false,
//           lectureItems: []
//         }
//       ]
//     },
//     requirements: [
//       'Business experience helpful but not required',
//       'Basic understanding of business concepts',
//       'Computer with internet access',
//       'Commitment to professional growth'
//     ],
//     description: 'Business Strategy Excellence provides you with the tools and knowledge to become an effective business leader and strategist.',
//     courseIncludes: {
//       videoHours: '26.5',
//       articles: '22',
//       downloadableResources: '95',
//       accessOnDevices: true,
//       lifetimeAccess: true,
//       certificate: true
//     }
//   }
// ];

async function seedCourseDetails() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing course details
    await CourseDetail.deleteMany({});
    console.log('Cleared existing course details');

    // Insert sample courses
    await CourseDetail.insertMany(sampleCourses);
    console.log('Sample course details seeded successfully');

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding course details:', error);
    process.exit(1);
  }
}

// Run the seed function
seedCourseDetails();
