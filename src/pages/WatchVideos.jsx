import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy Categories
const CATEGORIES = [
  "All",
  "Digital Marketing",
  "Business & Startup",
  "Communication",
  "Technology",
  "Finance",
  "Productivity",
  "AI Tools"
];

// Dummy Video Data Generator
const generateVideos = (seedPrefix, count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${seedPrefix}-${i}`,
    title: `Masterclass ${seedPrefix}: Episode ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${seedPrefix}${i}/400/700`,
    views: Math.floor(Math.random() * 500) + 10 + 'K',
    duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    language: ['Hindi', 'English', 'Hinglish'][Math.floor(Math.random() * 3)],
    rating: (Math.random() * (5 - 4) + 4).toFixed(1)
  }));
};

const SECTIONS = [
  { title: "Trending Now", videos: generateVideos('trend', 8) },
  { title: "Marketing Mastery", videos: generateVideos('mkt', 8) },
  { title: "Business Ideas 2026", videos: generateVideos('biz', 8) },
  { title: "Top Rated Courses", videos: generateVideos('top', 8) }
];

const WatchVideos = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#050A13] text-white pt-[64px] pb-12 font-sans overflow-x-hidden">

      {/* Search Header Area (Mobile-focused like seekho app) */}
      <div className="px-4 py-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8]">
            MultiClout Top 10
          </h1>
          <div className="relative flex-1 max-w-sm hidden md:block">
            <input
              type="text"
              placeholder="Search for courses, skills..."
              className="w-full bg-[#111A28] border border-gray-800 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#00c6d7] text-white placeholder-gray-500"
            />
            <svg className="w-4 h-4 absolute left-3.5 top-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                ? 'bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8] text-white shadow-lg shadow-cyan-500/20'
                : 'bg-[#111A28] text-gray-400 hover:text-white hover:bg-[#1a2638]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video Sections */}
      <div className="space-y-10 md:space-y-12 max-w-7xl mx-auto md:px-8">
        {SECTIONS.map((section, idx) => (
          <div key={idx} className="relative">
            <div className="flex items-center justify-between px-4 md:px-0 mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {section.title}
              </h2>
              <button className="text-sm font-medium text-[#00c6d7] hover:text-white transition-colors">
                View All
              </button>
            </div>

            {/* Horizontal Scrollable Video Row */}
            <div className="flex overflow-x-auto gap-4 px-4 md:px-0 pb-6 no-scrollbar snap-x snap-mandatory">
              {section.videos.map((vid) => (
                <Link
                  key={vid.id}
                  to={`/video/${vid.id}`}
                  className="relative flex-none w-[160px] sm:w-[180px] md:w-[220px] aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer snap-start bg-[#111A28] border border-gray-800/50"
                  title={vid.title}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay (Darkens the bottom for text readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A13] via-[#050A13]/40 to-transparent opacity-90 transition-opacity duration-300"></div>

                  {/* Top Right Badges */}
                  <div className="absolute top-2 right-2 flex flex-col items-end gap-1.5">
                    <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-semibold text-white">
                      {vid.duration}
                    </span>
                  </div>

                  {/* Top Left Badge (Language) */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-[#00c6d7]/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-[#050A13] uppercase tracking-wider">
                      {vid.language}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 pb-4">
                    <h3 className="text-sm md:text-base font-bold text-white leading-snug mb-1 line-clamp-2 shadow-sm">
                      {vid.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {vid.rating}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                      <span>{vid.views} views</span>
                    </div>
                  </div>

                  {/* Play Button Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-[0_0_20px_rgba(0,198,215,0.4)] transform scale-75 group-hover:scale-100 transition-transform duration-300 delay-75">
                      <svg className="w-5 h-5 text-[#050A13] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default WatchVideos;
