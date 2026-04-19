const mongoose = require('mongoose');

const courseDetailSchema = new mongoose.Schema({
  trainingProgramId: {
    type: Number,
    required: [true, 'Training program ID is required'],
    unique: true
  },
  programName: {
    type: String,
    required: [true, 'Program name is required']
  },
  // Hero Section
  hero: {
    title: {
      type: String,
      required: [true, 'Hero title is required']
    },
    subtitle: {
      type: String,
      required: [true, 'Hero subtitle is required']
    },
    description: {
      type: String,
      required: [true, 'Hero description is required']
    },
    badge: {
      type: String,
      default: 'Bestseller'
    },
    rating: {
      type: Number,
      default: 4.8,
      min: 0,
      max: 5
    },
    ratingsCount: {
      type: String,
      default: '12,450'
    },
    studentsCount: {
      type: String,
      default: '64,892'
    },
    instructor: {
      type: String,
      default: 'Multiclout Master'
    },
    lastUpdated: {
      type: String,
      default: '11/2025'
    },
    language: {
      type: String,
      default: 'English'
    },
    previewImage: {
      type: String,
      default: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  },
  // Pricing
  pricing: {
    currentPrice: {
      type: String,
      required: [true, 'Current price is required']
    },
    originalPrice: {
      type: String,
      required: [true, 'Original price is required']
    },
    discountText: {
      type: String,
      default: '71% off! Limited time offer'
    },
    guaranteeText: {
      type: String,
      default: '30-Day Money-Back Guarantee'
    }
  },
  // What you'll learn
  learningPoints: [{
    type: String,
    required: true
  }],
  // Course Content
  courseContent: {
    totalSections: {
      type: String,
      default: '15'
    },
    totalLectures: {
      type: String,
      default: '142'
    },
    totalLength: {
      type: String,
      default: '22h 15m'
    },
    sections: [{
      title: {
        type: String,
        required: true
      },
      lectures: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      isExpanded: {
        type: Boolean,
        default: false
      },
      lectureItems: [{
        type: {
          type: String,
          enum: ['video', 'article', 'quiz'],
          default: 'video'
        },
        title: {
          type: String,
          required: true
        },
        duration: {
          type: String
        },
        isPreview: {
          type: Boolean,
          default: false
        }
      }]
    }]
  },
  // Requirements
  requirements: [{
    type: String,
    required: true
  }],
  // Description
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  // Course Includes
  courseIncludes: {
    videoHours: {
      type: String,
      default: '22.5'
    },
    articles: {
      type: String,
      default: '14'
    },
    downloadableResources: {
      type: String,
      default: '84'
    },
    accessOnDevices: {
      type: Boolean,
      default: true
    },
    lifetimeAccess: {
      type: Boolean,
      default: true
    },
    certificate: {
      type: Boolean,
      default: true
    }
  },
  // Metadata
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
courseDetailSchema.index({ trainingProgramId: 1 });
courseDetailSchema.index({ isActive: 1 });
courseDetailSchema.index({ order: 1 });

module.exports = mongoose.model('CourseDetail', courseDetailSchema);
