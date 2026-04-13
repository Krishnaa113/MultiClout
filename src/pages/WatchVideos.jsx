import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy Categories
const CATEGORIES = [
  "All",
  "Youtube",
  "Instagram",
  "Business",
  "Share Market",
  "Finance",
  "Productivity",
  "AI Tools"
];

// Dummy Video Data Generator
const generateVideos = (seedPrefix, count, topic) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${seedPrefix}-${i}`,
    title: `Masterclass ${topic}: Episode ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${seedPrefix}${i}/400/700`,
    views: Math.floor(Math.random() * 500) + 10 + 'K',
    duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    language: ['Hindi', 'English', 'Hinglish'][Math.floor(Math.random() * 3)],
    rating: (Math.random() * (5 - 4) + 4).toFixed(1)
  }));
};

const SECTIONS = [
  { title: "Trending Now", topic: "Trending", videos: generateVideos('trend', 8, 'Trending') },
  { title: "Youtube Growth", topic: "Youtube", videos: generateVideos('yt', 8, 'Youtube') },
  { title: "Instagram Mastery", topic: "Instagram", videos: generateVideos('ig', 8, 'Instagram') },
  { title: "Business Strategies", topic: "Business", videos: generateVideos('biz', 8, 'Business') },
  { title: "Share Market Essentials", topic: "Stocks", videos: generateVideos('stock', 8, 'Stocks') }
];

const WatchVideos = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-[#03060D] text-white pt-[64px] pb-12 font-sans overflow-x-hidden selection:bg-[#00c6d7] selection:text-black">
      
      {/* Featured Hero Banner */}
      <div className="px-4 py-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative w-full h-[380px] md:h-[480px] rounded-[2rem] overflow-hidden group border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img 
            src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop" 
            alt="Featured Masterclass" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradients for depth and text readability */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#03060D] via-[#03060D]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-6 md:p-12 md:max-w-3xl text-left z-10 w-full">
            <div className="flex flex-wrap gap-2 items-center mb-4">
               <span className="px-3 py-1 text-[10px] md:text-xs font-bold bg-[#00c6d7]/20 text-[#00c6d7] border border-[#00c6d7]/30 rounded-full backdrop-blur-md uppercase tracking-wider">
                 New Release
               </span>
               <span className="px-3 py-1 text-[10px] md:text-xs font-bold bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md uppercase tracking-wider">
                 Hindi
               </span>
               <span className="px-3 py-1 text-[10px] md:text-xs font-bold bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-md flex items-center gap-1">
                 <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
                 4.9
               </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8]">Digital Marketing</span><br className="hidden md:block" /> in 2026
            </h1>
            <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 line-clamp-2 md:line-clamp-none max-w-2xl font-medium">
              Learn the exact framework used to scale businesses to $10M+ using modern organic and paid acquisition channels.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-[#00c6d7] text-[#03060D] px-6 py-3.5 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,198,215,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Trailer
              </button>
              <button className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 group/save" title="Save to list">
                <svg className="w-5 h-5 group-hover/save:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full">
        {/* Sticky Header & Search Area */}
        <div className="sticky top-[64px] z-40 bg-[#03060D]/90 backdrop-blur-xl border-b border-white/5 py-4 px-4 md:px-8 mb-8 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Explore <span className="text-gray-400">Categories</span>
            </h2>
            <div className="relative w-full md:max-w-xs group">
              <input 
                type="text" 
                placeholder="Search masterclasses..." 
                className="w-full bg-[#111A28]/60 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-[#00c6d7] text-white placeholder-gray-500 transition-all duration-300 focus:bg-[#111A28] focus:shadow-[0_0_15px_rgba(0,198,215,0.1)]"
              />
              <svg className="w-4 h-4 absolute left-4 top-3 text-gray-500 transition-colors group-focus-within:text-[#00c6d7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-3 pt-5 pb-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 mask-image-fade">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#00c6d7]/15 border-[#00c6d7]/50 text-[#00c6d7] shadow-[0_0_20px_rgba(0,198,215,0.15)] scale-105' 
                    : 'bg-white/5 border-transparent text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Sections */}
        <div className="space-y-12 md:space-y-16 px-4 md:px-8">
          {SECTIONS.filter(section => activeCategory === "All" || CATEGORIES.includes(activeCategory)).map((section, idx) => (
            <div key={idx} className="relative group/section">
              <div className="flex items-end justify-between mb-5 md:mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#00c6d7] shadow-[0_0_8px_rgba(0,198,215,0.8)] animate-pulse"></div>
                    <span className="text-xs font-bold text-[#00c6d7] tracking-wider uppercase">{section.topic}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <button className="text-sm font-medium text-gray-400 hover:text-[#00c6d7] transition-colors flex items-center gap-1 group/btn pb-1">
                  View All 
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Horizontal Scrollable Video Row */}
              <div className="flex overflow-x-auto gap-4 md:gap-5 pb-8 pt-2 no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
                {section.videos.map((vid) => {
                  const progress = Math.random() > 0.5 ? Math.floor(Math.random() * 80) + 10 : 0;
                  return (
                    <Link 
                      key={vid.id} 
                      to={`/video/${vid.id}`}
                      className="relative flex-none w-[160px] sm:w-[190px] md:w-[250px] aspect-[9/16] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer snap-start bg-[#111A28] border border-white/5 shadow-lg hover:shadow-[0_15px_35px_rgba(0,198,215,0.15)] hover:border-[#00c6d7]/30 transition-all duration-500 hover:-translate-y-2 block"
                      title={vid.title}
                    >
                      {/* Thumbnail Image */}
                      <img 
                        src={vid.thumbnail} 
                        alt={vid.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
                        loading="lazy"
                      />

                      {/* Gradient Overlays */}
                      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03060D]/80 to-transparent opacity-60"></div>
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#03060D] via-[#03060D]/80 to-transparent opacity-95 transition-all duration-300 group-hover:h-[60%]"></div>

                      {/* Top Right Badges */}
                      <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <span className="bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] md:text-xs font-bold text-white border border-white/10 shadow-sm">
                          {vid.duration}
                        </span>
                      </div>

                      {/* Top Left Badge (Language) */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#00c6d7] px-2 py-1 rounded-md text-[9px] md:text-[10px] font-extrabold text-[#03060D] uppercase tracking-wider shadow-sm">
                          {vid.language}
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10 transform transition-transform duration-300">
                        <h4 className="text-[15px] md:text-lg font-bold text-white leading-tight mb-2.5 line-clamp-2 shadow-sm group-hover:text-[#00c6d7] transition-colors">
                          {vid.title}
                        </h4>
                        
                        <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-400 font-medium w-full">
                          <span className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded backdrop-blur-sm border border-white/5">
                            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {vid.rating}
                          </span>
                          <span>{vid.views} views</span>
                        </div>
                      </div>

                      {/* Play Button Overlay on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[1px] z-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-[0_0_30px_rgba(0,198,215,0.6)] transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-50 ease-out-back">
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-[#03060D] ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Progress Bar Demo */}
                      {progress > 0 && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
                           <div className="h-full bg-[#00c6d7] shadow-[0_0_10px_#00c6d7]" style={{ width: `${progress}%` }}></div>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          /* Hide scrollbar */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          /* Custom cubic-bezier for snappy animations */
          .ease-out-back {
             transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .mask-image-fade {
            mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15px, black calc(100% - 15px), transparent);
          }
        `}</style>
      </div>
    </div>
  );
};

export default WatchVideos;
