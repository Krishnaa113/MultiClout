// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CATEGORIES = [
//   "All",
//   "Digital Marketing",
//   "Business & Startup", 
//   "Communication",
//   "Technology",
//   "Finance",
//   "Productivity",
//   "AI Tools"
// ];

// const WatchVideos = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     fetchVideos();
//   }, [activeCategory]);

//   const fetchVideos = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos?category=${activeCategory}&limit=50`);
//       const fetchedVideos = response.data.data;
      
//       const groupedSections = [
//         {
//           title: "Trending Now",
//           videos: fetchedVideos.filter(v => v.section === "Trending Now").slice(0, 8)
//         },
//         {
//           title: "Marketing Mastery",
//           videos: fetchedVideos.filter(v => v.section === "Marketing Mastery").slice(0, 8)
//         },
//         {
//           title: "Business Ideas 2026",
//           videos: fetchedVideos.filter(v => v.section === "Business Ideas 2026").slice(0, 8)
//         },
//         {
//           title: "Top Rated Courses",
//           videos: fetchedVideos.filter(v => v.rating >= 4.5).slice(0, 8)
//         }
//       ];
      
//       setVideos(fetchedVideos);
//       setSections(groupedSections);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#050A13] text-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#050A13] text-white pt-[64px] pb-12 font-sans overflow-x-hidden">
      
//       {/* Search Header Area */}
//       <div className="px-4 py-6 md:px-8 max-w-7xl mx-auto">
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8]">
//             MultiClout Top 10
//           </h1>
//           <div className="relative flex-1 max-w-sm hidden md:block">
//             <input
//               type="text"
//               placeholder="Search for courses, skills..."
//               className="w-full bg-[#111A28] border border-gray-800 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#00c6d7] text-white placeholder-gray-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Categories Horizontal Scroll */}
//       <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar -mx-4 px-4 md:mx-0">
//         {CATEGORIES.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
//               activeCategory === cat
//                 ? 'bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8] text-white shadow-lg shadow-[0_0_20px_rgba(0,198,215,0.4)]'
//                 : 'bg-[#111A28] text-gray-400 hover:text-white hover:bg-[#1a2638]'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Video Sections */}
//       <div className="space-y-10 md:space-y-12 max-w-7xl mx-auto md:px-8">
//         {sections.map((section, idx) => (
//           <div key={idx} className="relative">
//             <div className="flex items-center justify-between px-4 md:px-0 mb-4">
//               <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
//                 {section.title}
//               </h2>

//               {/* Play Button Overlay on Hover */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="w-12 h-12 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-[0_0_20px_rgba(0,198,215,0.4)] transform scale-75 group-hover:scale-100 transition-transform duration-300 delay-75">
//                   <svg className="w-5 h-5 text-[#050A13] ml-1" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {section.videos.map((video, videoIdx) => (
//                 <Link key={videoIdx} to={`/video/${video._id}`} className="group block">
//                   <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
//                     <div className="aspect-[9/16] relative">
//                       <img
//                         src={video.thumbnail}
//                         alt={video.title}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
//                       <div className="absolute bottom-0 left-0 right-0 p-3">
//                         <div className="flex items-start justify-between h-full">
//                           <div className="flex-1">
//                             <p className="text-white font-semibold text-sm line-clamp-2 leading-tight">
//                               {video.title}
//                             </p>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-white/80 text-xs">{video.views} views</span>
//                               <span className="text-white/80 text-xs">{video.duration}</span>
//                               <span className="text-white/80 text-xs">{video.language}</span>
//                               <span className="text-white/80 text-xs">★ {video.rating}</span>
//                             </div>
//                           </div>
//                           <div className="w-8 h-8 flex items-center justify-center">
//                             <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
//                               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                                 <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//                                   <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
//                                     <div className="w-3 h-3 bg-red-700 rounded-full flex items-center justify-center">
//                                       <div className="w-2 h-2 bg-red-800 rounded-full"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         /* Hide scrollbar for Chrome, Safari and Opera */
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         /* Hide scrollbar for IE, Edge and Firefox */
//         .no-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WatchVideos;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const WatchVideos = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, [activeCategory]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/videos?category=${activeCategory}&limit=50`);
      const fetchedVideos = response.data.data;

      const groupedSections = [
        {
          title: "Trending Now",
          videos: fetchedVideos.filter(v => v.section === "Trending Now").slice(0, 10)
        },
        {
          title: "Marketing Mastery",
          videos: fetchedVideos.filter(v => v.section === "Marketing Mastery").slice(0, 10)
        },
        {
          title: "Business Ideas 2026",
          videos: fetchedVideos.filter(v => v.section === "Business Ideas 2026").slice(0, 10)
        },
        {
          title: "Top Rated Courses",
          videos: fetchedVideos.filter(v => v.rating >= 4.5).slice(0, 10)
        }
      ];

      setVideos(fetchedVideos);
      setSections(groupedSections.filter(s => s.videos.length > 0));
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatViews = (views) => {
    if (!views) return '0 views';
    if (typeof views === 'string') return views;
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M views`;
    if (views >= 1000) return `${(views / 1000).toFixed(0)}K views`;
    return `${views} views`;
  };

  const getLanguageColor = (lang) => {
    if (!lang) return '#00c6d7';
    const l = lang.toUpperCase();
    if (l === 'HINDI') return '#00c6d7';
    if (l === 'ENGLISH') return '#6366f1';
    if (l === 'HINGLISH') return '#0ea5e9';
    return '#00c6d7';
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#050A13',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: 44,
          height: 44,
          border: '3px solid #1a2638',
          borderTop: '3px solid #00c6d7',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050A13',
      color: '#fff',
      paddingTop: 64,
      paddingBottom: 48,
      fontFamily: "'DM Sans', sans-serif",
      overflowX: 'hidden'
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ padding: '24px 32px 16px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00c6d7, #0e7fa8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            letterSpacing: '-0.5px'
          }}>
            MultiClout Top 10
          </h1>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 320, flex: 1 }}>
            <svg style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }}
              width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search for courses, skills..."
              style={{
                width: '100%',
                background: '#111A28',
                border: '1px solid #1e2d42',
                borderRadius: 999,
                padding: '10px 16px 10px 40px',
                fontSize: 13,
                color: '#fff',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s'
              }}
              onFocus={e => e.target.style.borderColor = '#00c6d7'}
              onBlur={e => e.target.style.borderColor = '#1e2d42'}
            />
          </div>
        </div>

        {/* Categories */}
        <div style={{
          display: 'flex',
          gap: 10,
          overflowX: 'auto',
          paddingBottom: 8,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                whiteSpace: 'nowrap',
                padding: '9px 20px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: activeCategory === cat
                  ? 'linear-gradient(90deg, #00c6d7, #0e7fa8)'
                  : '#111A28',
                color: activeCategory === cat ? '#fff' : '#9ca3af',
                boxShadow: activeCategory === cat ? '0 0 20px rgba(0,198,215,0.35)' : 'none',
                fontFamily: 'inherit'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video Sections */}
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: 48 }}>

            {/* Section Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 32px',
              marginBottom: 16
            }}>
              <h2 style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#fff',
                margin: 0,
                letterSpacing: '-0.3px'
              }}>
                {section.title}
              </h2>
              <Link
                to={`/videos?section=${encodeURIComponent(section.title)}`}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#00c6d7',
                  textDecoration: 'none',
                  letterSpacing: '0.2px',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={e => e.target.style.opacity = 0.7}
                onMouseLeave={e => e.target.style.opacity = 1}
              >
                View All
              </Link>
            </div>

            {/* Horizontal Scroll Row */}
            <div style={{
              display: 'flex',
              gap: 14,
              overflowX: 'auto',
              paddingLeft: 32,
              paddingRight: 32,
              paddingBottom: 8,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {section.videos.map((video, videoIdx) => (
                <VideoCard
                  key={videoIdx}
                  video={video}
                  hoveredVideo={hoveredVideo}
                  setHoveredVideo={setHoveredVideo}
                  formatViews={formatViews}
                  getLanguageColor={getLanguageColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        *::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

const VideoCard = ({ video, hoveredVideo, setHoveredVideo, formatViews, getLanguageColor }) => {
  const isHovered = hoveredVideo === video._id;
  const langColor = getLanguageColor(video.language);

  return (
    <Link
      to={`/video/${video._id}`}
      style={{ textDecoration: 'none', flexShrink: 0 }}
      onMouseEnter={() => setHoveredVideo(video._id)}
      onMouseLeave={() => setHoveredVideo(null)}
    >
      <div style={{
        width: 200,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#0d1623',
        border: '1px solid #1e2d42',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        transform: isHovered ? 'scale(1.04)' : 'scale(1)',
        borderColor: isHovered ? '#00c6d7' : '#1e2d42',
        boxShadow: isHovered ? '0 8px 32px rgba(0,198,215,0.2)' : '0 2px 8px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        position: 'relative'
      }}>
        {/* Thumbnail container — portrait 9:16 */}
        <div style={{ position: 'relative', aspectRatio: '9/16', overflow: 'hidden' }}>
          <img
            src={video.thumbnail}
            alt={video.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.35s ease',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)'
            }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,10,19,0.92) 30%, rgba(5,10,19,0.2) 65%, transparent 100%)',
            pointerEvents: 'none'
          }} />

          {/* Language Badge — top left */}
          {video.language && (
            <div style={{
              position: 'absolute',
              top: 10,
              left: 10,
              background: langColor,
              color: '#fff',
              fontSize: 10,
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: 4,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              fontFamily: 'inherit'
            }}>
              {video.language.toUpperCase()}
            </div>
          )}

          {/* Duration Badge — top right */}
          {video.duration && (
            <div style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'rgba(0,0,0,0.75)',
              color: '#fff',
              fontSize: 11,
              fontWeight: 600,
              padding: '3px 7px',
              borderRadius: 5,
              backdropFilter: 'blur(6px)',
              fontFamily: 'inherit'
            }}>
              {video.duration}
            </div>
          )}

          {/* Play button + Tooltip on hover */}
          {isHovered && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              animation: 'fadeIn 0.2s ease'
            }}>
              {/* Tooltip */}
              <div style={{
                background: 'rgba(20,30,48,0.92)',
                border: '1px solid #2a3d5a',
                borderRadius: 8,
                padding: '6px 12px',
                fontSize: 12,
                fontWeight: 500,
                color: '#e2e8f0',
                maxWidth: 160,
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
                lineHeight: 1.4
              }}>
                {video.title}
              </div>

              {/* Play circle */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#00c6d7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 24px rgba(0,198,215,0.5)',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#050A13" style={{ marginLeft: 3 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Bottom info overlay */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 10px 10px',
            pointerEvents: 'none'
          }}>
            <p style={{
              margin: '0 0 6px',
              fontSize: 13,
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.35,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {video.title}
            </p>

            {/* Meta row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              flexWrap: 'wrap'
            }}>
              {video.rating && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: '#facc15', fontWeight: 600 }}>
                  ★ {typeof video.rating === 'number' ? video.rating.toFixed(1) : video.rating}
                </span>
              )}
              <span style={{ color: '#475569', fontSize: 11 }}>•</span>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>{formatViews(video.views)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WatchVideos;