// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const CategoriesGrid = () => {
//   const [content, setContent]   = useState({ title: '', categories: [] });
//   const [loading, setLoading]   = useState(true);
//   const [active, setActive]     = useState(null);
//   const [videos, setVideos]     = useState([]);
//   const [vLoading, setVLoading] = useState(true);
//   const scrollRef               = useRef(null);

//   useEffect(() => {
//     fetchContent();
//     fetchVideos();
//   }, []);

//   const fetchContent = async () => {
//     try {
//       const response   = await axios.get('/api/home-content/categories');
//       const apiContent = response.data.data.content;
//       const defaultCategories = [
//         { name: 'Sarkari Kaam',     icon: '🏛️️' },
//         { name: 'Instagram',        icon: '📷'  },
//         { name: 'Business',         icon: '💼'  },
//         { name: 'English Speaking', icon: '🗣️'  },
//         { name: 'YouTube',          icon: '📺'  },
//         { name: 'Online Earning',   icon: '💰'  },
//       ];
//       setContent({
//         title:      apiContent.title || "What's waiting for you?",
//         categories: [...defaultCategories, ...(apiContent.categories || [])]
//       });
//     } catch {
//       setContent({
//         title: "What's waiting for you?",
//         categories: [
//           { name: 'Sarkari Kaam',     icon: '🏛️️' },
//           { name: 'Instagram',        icon: '📷'  },
//           { name: 'Business',         icon: '💼'  },
//           { name: 'English Speaking', icon: '🗣️'  },
//           { name: 'YouTube',          icon: '📺'  },
//           { name: 'Online Earning',   icon: '💰'  },
//         ]
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchVideos = async () => {
//     try {
//       const res = await axios.get('/api/videos?limit=20');
//       const all = res.data.data || [];
//       const trending = all.filter(v => v.section === 'Trending Now').slice(0, 6);
//       setVideos(trending.length >= 3 ? trending : all.slice(0, 6));
//     } catch (err) {
//       console.error('Video fetch error:', err);
//     } finally {
//       setVLoading(false);
//     }
//   };

//   window.refreshCategoriesContent = fetchContent;

//   const scrollBy = (dir) => scrollRef.current?.scrollBy({ left: dir * 250, behavior: 'smooth' });

//   const formatViews = (v) => {
//     if (!v) return '0';
//     if (typeof v === 'string') return v;
//     if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
//     if (v >= 1000)    return `${(v / 1000).toFixed(0)}K`;
//     return `${v}`;
//   };

//   const STYLES = `
//     @keyframes cg-fadeSlideUp {
//       from { opacity: 0; transform: translateY(32px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes cg-marqueeFwd {
//       0%   { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//     @keyframes cg-marqueeRev {
//       0%   { transform: translateX(-50%); }
//       100% { transform: translateX(0); }
//     }
//     @keyframes cg-bgDrift {
//       0%,100% { transform: translate(0,0) scale(1); }
//       50%      { transform: translate(18px,-14px) scale(1.06); }
//     }
//     @keyframes cg-underlineGrow { from { width: 0; } to { width: 60px; } }
//     @keyframes cg-floatBadge {
//       0%,100% { transform: translateY(0px); }
//       50%      { transform: translateY(-4px); }
//     }
//     @keyframes cg-cardIn {
//       from { opacity: 0; transform: translateY(32px) scale(0.96); }
//       to   { opacity: 1; transform: translateY(0) scale(1); }
//     }
//     @keyframes cg-shimmer { 0% { left: -80%; } 100% { left: 130%; } }
//     @keyframes cg-playPop {
//       0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0; }
//       70%  { transform: translate(-50%,-50%) scale(1.12); opacity: 1; }
//       100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
//     }
//     @keyframes cg-pulse {
//       0%,100% { transform: scale(1); opacity: 0.6; }
//       50%      { transform: scale(1.12); opacity: 1; }
//     }
//     @keyframes cg-skeletonPulse {
//       0%,100% { opacity: 1; } 50% { opacity: 0.35; }
//     }

//     .cg-root {
//       background: #ffffff;
//       padding: 72px 0 80px;
//       overflow: hidden;
//       position: relative;
//       font-family: Inter, system-ui, sans-serif;
//     }
//     .cg-orb {
//       position: absolute; border-radius: 50%;
//       pointer-events: none;
//       animation: cg-bgDrift 8s ease-in-out infinite;
//     }

//     /* heading */
//     .cg-heading-wrap {
//       text-align: center; margin-bottom: 56px;
//       animation: cg-fadeSlideUp 0.75s ease both; position: relative;
//     }
//     .cg-eyebrow {
//       display: inline-block; background: #00b8d9; color: #fff;
//       font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
//       text-transform: uppercase; padding: 5px 16px; border-radius: 999px;
//       margin-bottom: 18px; animation: cg-floatBadge 3s ease-in-out infinite;
//     }
//     .cg-heading {
//       font-size: clamp(32px, 5vw, 52px); font-weight: 800;
//       color: #1e3a5f; line-height: 1.1; margin: 0 0 14px; letter-spacing: -1.5px;
//     }
//     .cg-heading .accent { color: #00b8d9; position: relative; }
//     .cg-heading .accent::after {
//       content: ''; position: absolute; bottom: -4px; left: 0;
//       height: 3px; background: #00b8d9; border-radius: 2px;
//       animation: cg-underlineGrow 0.8s 0.6s ease both; width: 0;
//     }
//     .cg-sub {
//       color: #6b8baa; font-size: 16px; font-weight: 400; margin: 0;
//       animation: cg-fadeSlideUp 0.75s 0.2s ease both;
//       opacity: 0; animation-fill-mode: forwards;
//     }

//     /* marquee */
//     .cg-marquee-outer {
//       overflow: hidden; margin-bottom: 10px;
//       -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
//       mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
//     }
//     .cg-marquee-track { display: flex; width: max-content; gap: 12px; }
//     .cg-marquee-track.fwd { animation: cg-marqueeFwd 28s linear infinite; }
//     .cg-marquee-track.rev { animation: cg-marqueeRev 24s linear infinite; }
//     .cg-marquee-track:hover { animation-play-state: paused; }
//     .cg-pill {
//       display: flex; align-items: center; gap: 8px;
//       padding: 10px 22px; border-radius: 999px;
//       border: 1.5px solid #ddeaf4; background: #fff;
//       cursor: pointer; white-space: nowrap; flex-shrink: 0;
//       transition: background 0.22s, border-color 0.22s, transform 0.22s, box-shadow 0.22s;
//     }
//     .cg-pill:hover {
//       background: #e8f9fd; border-color: #00b8d9;
//       transform: translateY(-3px) scale(1.04); box-shadow: 0 6px 20px #00b8d922;
//     }
//     .cg-pill.active { background: #00b8d9; border-color: #00b8d9; box-shadow: 0 6px 20px #00b8d933; }
//     .cg-pill-icon { font-size: 15px; line-height: 1; }
//     .cg-pill-name { font-size: 13px; font-weight: 600; color: #1e3a5f; letter-spacing: 0.01em; }
//     .cg-pill.active .cg-pill-name { color: #fff; }

//     /* section label */
//     .cg-section-label {
//       max-width: 1200px; margin: 52px auto 20px;
//       padding: 0 48px; display: flex; align-items: center; gap: 14px;
//     }
//     .cg-section-label-text {
//       font-size: 22px; font-weight: 800; color: #1e3a5f;
//       letter-spacing: -0.5px; white-space: nowrap;
//     }
//     .cg-section-label-line {
//       flex: 1; height: 1.5px;
//       background: linear-gradient(to right, #00b8d966, transparent); border-radius: 2px;
//     }
//     .cg-section-label-count {
//       font-size: 12px; font-weight: 600; color: #00b8d9;
//       background: #e8f9fd; padding: 3px 12px; border-radius: 999px; white-space: nowrap;
//     }

//     /* scroll strip */
//     .cg-scroll-wrap {
//       max-width: 1200px; margin: 0 auto; padding: 0 48px; position: relative;
//     }
//     .cg-scroll-track {
//       display: flex; gap: 18px; overflow-x: auto; padding-bottom: 12px;
//       scroll-snap-type: x mandatory; scrollbar-width: none;
//     }
//     .cg-scroll-track::-webkit-scrollbar { display: none; }

//     /* arrows */
//     .cg-arrow {
//       position: absolute; top: 38%; transform: translateY(-50%);
//       width: 38px; height: 38px; border-radius: 50%;
//       border: 1.5px solid #ddeaf4; background: #fff;
//       display: flex; align-items: center; justify-content: center;
//       cursor: pointer; z-index: 10;
//       box-shadow: 0 4px 14px rgba(30,58,95,0.1);
//       transition: background 0.2s, border-color 0.2s, transform 0.2s;
//     }
//     .cg-arrow:hover { background: #1e3a5f; border-color: #1e3a5f; transform: translateY(-50%) scale(1.1); }
//     .cg-arrow:hover svg path { stroke: #fff; }
//     .cg-arrow.left  { left: 8px; }
//     .cg-arrow.right { right: 8px; }

//     /* video card */
//     .cg-vcard {
//       flex-shrink: 0; width: 210px; scroll-snap-align: start;
//       cursor: pointer; text-decoration: none;
//       animation: cg-cardIn 0.5s ease both;
//     }
//     .cg-vcard:nth-child(1) { animation-delay: 0.05s; }
//     .cg-vcard:nth-child(2) { animation-delay: 0.12s; }
//     .cg-vcard:nth-child(3) { animation-delay: 0.19s; }
//     .cg-vcard:nth-child(4) { animation-delay: 0.26s; }
//     .cg-vcard:nth-child(5) { animation-delay: 0.33s; }
//     .cg-vcard:nth-child(6) { animation-delay: 0.40s; }

//     .cg-vcard-thumb {
//       position: relative; aspect-ratio: 9/16; border-radius: 20px;
//       overflow: hidden; border: 1.5px solid #ddeaf4;
//       background: #0f2240; margin-bottom: 12px;
//       transition: border-color 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s;
//     }
//     .cg-vcard:hover .cg-vcard-thumb {
//       border-color: #00b8d9;
//       transform: translateY(-8px) scale(1.02);
//       box-shadow: 0 24px 48px rgba(30,58,95,0.18), 0 0 0 3px rgba(0,184,217,0.15);
//     }
//     .cg-vcard-img {
//       width: 100%; height: 100%; object-fit: cover;
//       transition: transform 0.5s ease, opacity 0.3s; opacity: 0.88;
//     }
//     .cg-vcard:hover .cg-vcard-img { transform: scale(1.07); opacity: 1; }
//     .cg-vcard-overlay {
//       position: absolute; inset: 0;
//       background: linear-gradient(to top, #0a1f3a 0%, rgba(10,31,58,0.55) 40%, transparent 70%);
//     }
//     .cg-vcard-shimmer {
//       position: absolute; top: 0; bottom: 0; width: 50%;
//       background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
//       animation: cg-shimmer 2.4s ease-in-out infinite;
//       pointer-events: none; opacity: 0; transition: opacity 0.3s;
//     }
//     .cg-vcard:hover .cg-vcard-shimmer { opacity: 1; }

//     .cg-duration {
//       position: absolute; top: 12px; right: 12px;
//       background: rgba(10,31,58,0.85); color: #fff;
//       font-size: 11px; font-weight: 700; padding: 4px 10px;
//       border-radius: 8px; backdrop-filter: blur(4px); z-index: 3; letter-spacing: 0.04em;
//     }
//     .cg-vcard-bottom { position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 12px; z-index: 3; }
//     .cg-cat-badge {
//       display: inline-block; background: #00b8d9; color: #fff;
//       font-size: 9px; font-weight: 700; padding: 4px 10px; border-radius: 999px;
//       text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;
//     }
//     .cg-views { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); }
//     .cg-views b { color: #fff; font-weight: 800; }

//     .cg-play-btn {
//       position: absolute; top: 50%; left: 50%;
//       transform: translate(-50%,-50%) scale(0.4);
//       width: 52px; height: 52px;
//       background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
//       border-radius: 50%; display: flex; align-items: center; justify-content: center;
//       opacity: 0; transition: opacity 0.25s; z-index: 5;
//       border: 1.5px solid rgba(255,255,255,0.35);
//     }
//     .cg-vcard:hover .cg-play-btn { opacity: 1; animation: cg-playPop 0.35s ease forwards; }

//     .cg-vcard-title {
//       font-size: 14px; font-weight: 700; color: #1e3a5f;
//       line-height: 1.35; margin: 0 0 6px; letter-spacing: -0.2px;
//       transition: color 0.2s;
//       display: -webkit-box; -webkit-line-clamp: 2;
//       -webkit-box-orient: vertical; overflow: hidden;
//     }
//     .cg-vcard:hover .cg-vcard-title { color: #00b8d9; }
//     .cg-mentor { font-size: 12px; color: #8aacbf; display: flex; align-items: center; gap: 6px; }
//     .cg-mentor-dot {
//       width: 5px; height: 5px; border-radius: 50%; background: #00b8d9;
//       flex-shrink: 0; animation: cg-pulse 2s ease-in-out infinite;
//     }

//     /* skeleton */
//     .cg-skel {
//       flex-shrink: 0; width: 210px; border-radius: 20px; aspect-ratio: 9/16;
//       background: #e2eaf2; animation: cg-skeletonPulse 1.4s ease-in-out infinite;
//     }

//     /* view all */
//     .cg-view-all {
//       max-width: 1200px; margin: 20px auto 0; padding: 0 48px; text-align: right;
//     }
//     .cg-view-all a {
//       display: inline-flex; align-items: center; gap: 6px;
//       font-size: 13px; font-weight: 600; color: #00b8d9;
//       text-decoration: none; transition: opacity 0.2s;
//     }
//     .cg-view-all a:hover { opacity: 0.7; }

//     @media(max-width: 768px) {
//       .cg-root { padding: 48px 0 56px; }
//       .cg-heading { font-size: 32px; letter-spacing: -0.8px; }
//       .cg-sub { font-size: 14px; padding: 0 20px; }
//       .cg-section-label, .cg-scroll-wrap, .cg-view-all { padding: 0 16px; }
//       .cg-vcard, .cg-skel { width: 160px; }
//       .cg-arrow { display: none; }
//     }
//   `;

//   if (loading) return <div className="flex justify-center items-center py-20">Loading...</div>;

//   const doubled = [...content.categories, ...content.categories];

//   return (
//     <>
//       <style>{STYLES}</style>

//       <section className="cg-root">
//         <div className="cg-orb" style={{ width: 420, height: 420, top: -130, left: -100, background: '#00b8d90b', animationDelay: '0s' }} />
//         <div className="cg-orb" style={{ width: 320, height: 320, bottom: -80, right: -80,  background: '#1e3a5f08', animationDelay: '4s' }} />
//         <div className="cg-orb" style={{ width: 180, height: 180, top: '40%', left: '55%',  background: '#00b8d906', animationDelay: '2s' }} />

//         {/* Heading */}
//         <div className="cg-heading-wrap">
//           <div className="cg-eyebrow">Explore Topics</div>
//           <h2 className="cg-heading"
//             dangerouslySetInnerHTML={{ __html: content.title || "What's waiting<br />for <span class='accent'>you?</span>" }}
//           />
//           <p className="cg-sub">Pick a topic and start learning from India's top mentors</p>
//         </div>

//         {/* Marquee row 1 */}
//         <div className="cg-marquee-outer" style={{ marginBottom: 12 }}>
//           <div className="cg-marquee-track fwd">
//             {doubled.map((cat, i) => (
//               <div key={i} className={`cg-pill${active === cat.name ? ' active' : ''}`}
//                 onClick={() => setActive(active === cat.name ? null : cat.name)}>
//                 <span className="cg-pill-icon">{cat.icon}</span>
//                 <span className="cg-pill-name">{cat.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Marquee row 2 */}
//         <div className="cg-marquee-outer">
//           <div className="cg-marquee-track rev">
//             {[...doubled].reverse().map((cat, i) => (
//               <div key={i} className={`cg-pill${active === cat.name ? ' active' : ''}`}
//                 onClick={() => setActive(active === cat.name ? null : cat.name)}>
//                 <span className="cg-pill-icon">{cat.icon}</span>
//                 <span className="cg-pill-name">{cat.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trending Videos label */}
//         <div className="cg-section-label">
//           <span className="cg-section-label-text">Trending Videos</span>
//           <div className="cg-section-label-line" />
//           <span className="cg-section-label-count">{vLoading ? '...' : `${videos.length} videos`}</span>
//         </div>

//         {/* Video scroll strip */}
//         <div className="cg-scroll-wrap">
//           <button className="cg-arrow left" onClick={() => scrollBy(-1)} aria-label="scroll left">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//               <path d="M15 18l-6-6 6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>

//           <div className="cg-scroll-track" ref={scrollRef}>
//             {vLoading
//               ? Array.from({ length: 5 }).map((_, i) => (
//                   <div key={i} className="cg-skel" style={{ animationDelay: `${i * 0.1}s` }} />
//                 ))
//               : videos.map((vid) => {
//                   const category = vid.category || vid.section || '';
//                   const mentor   = vid.mentor || vid.instructor || vid.author || '';
//                   return (
//                     <Link key={vid._id} to={`/video/${vid._id}`} className="cg-vcard">
//                       <div className="cg-vcard-thumb">
//                         <img className="cg-vcard-img" src={vid.thumbnail} alt={vid.title} />
//                         <div className="cg-vcard-overlay" />
//                         <div className="cg-vcard-shimmer" />
//                         {vid.duration && <div className="cg-duration">{vid.duration}</div>}
//                         <div className="cg-vcard-bottom">
//                           {category && <div className="cg-cat-badge">{category}</div>}
//                           <div className="cg-views"><b>{formatViews(vid.views)}</b> Views</div>
//                         </div>
//                         <div className="cg-play-btn">
//                           <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//                             <path d="M8 5v14l11-7z" />
//                           </svg>
//                         </div>
//                       </div>
//                       <div className="cg-vcard-title">{vid.title}</div>
//                       {mentor && (
//                         <div className="cg-mentor">
//                           <span className="cg-mentor-dot" />
//                           {mentor}
//                         </div>
//                       )}
//                     </Link>
//                   );
//                 })
//             }
//           </div>

//           <button className="cg-arrow right" onClick={() => scrollBy(1)} aria-label="scroll right">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//               <path d="M9 18l6-6-6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>

//         {/* View all */}
//         <div className="cg-view-all">
//           <Link to="/watch">
//             View All Videos
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
//               <path d="M9 18l6-6-6-6" />
//             </svg>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CategoriesGrid;







import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoriesGrid = () => {
  const [content, setContent]   = useState({ title: '', categories: [] });
  const [loading, setLoading]   = useState(true);
  const [active, setActive]     = useState(null);
  const [videos, setVideos]     = useState([]);
  const [vLoading, setVLoading] = useState(true);
  const scrollRef               = useRef(null);

  useEffect(() => {
    fetchContent();
    fetchVideos();
  }, []);

  const fetchContent = async () => {
    try {
      const response   = await axios.get('/api/home-content/categories');
      const apiContent = response.data.data.content;
      const defaultCategories = [
        { name: 'Sarkari Kaam',     icon: '🏛️️' },
        { name: 'Instagram',        icon: '📷'  },
        { name: 'Business',         icon: '💼'  },
        { name: 'English Speaking', icon: '🗣️'  },
        { name: 'YouTube',          icon: '📺'  },
        { name: 'Online Earning',   icon: '💰'  },
      ];
      setContent({
        title:      apiContent.title || "What's waiting for you?",
        categories: [...defaultCategories, ...(apiContent.categories || [])]
      });
    } catch {
      setContent({
        title: "What's waiting for you?",
        categories: [
          { name: 'Sarkari Kaam',     icon: '🏛️️' },
          { name: 'Instagram',        icon: '📷'  },
          { name: 'Business',         icon: '💼'  },
          { name: 'English Speaking', icon: '🗣️'  },
          { name: 'YouTube',          icon: '📺'  },
          { name: 'Online Earning',   icon: '💰'  },
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async () => {
    try {
      const res = await axios.get('/api/videos?limit=50');
      const all = res.data.data || [];
      const trending = all.filter(v => v.section === 'Trending Now').slice(0, 10);
      setVideos(trending.length >= 3 ? trending : all.slice(0, 10));
    } catch (err) {
      console.error('Video fetch error:', err);
    } finally {
      setVLoading(false);
    }
  };

  window.refreshCategoriesContent = fetchContent;

  const scrollBy = (dir) => scrollRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });

  const formatViews = (v) => {
    if (!v) return '0';
    if (typeof v === 'string') return v;
    if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
    if (v >= 1000)    return `${(v / 1000).toFixed(0)}K`;
    return `${v}`;
  };

  const STYLES = `
    @keyframes cg-fadeSlideUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes cg-marqueeFwd {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes cg-marqueeRev {
      0%   { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes cg-bgDrift {
      0%,100% { transform: translate(0,0) scale(1); }
      50%      { transform: translate(18px,-14px) scale(1.06); }
    }
    @keyframes cg-underlineGrow { from { width: 0; } to { width: 60px; } }
    @keyframes cg-floatBadge {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-4px); }
    }
    @keyframes cg-cardIn {
      from { opacity: 0; transform: translateY(32px) scale(0.96); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes cg-shimmer { 0% { left: -80%; } 100% { left: 130%; } }
    @keyframes cg-playPop {
      0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0; }
      70%  { transform: translate(-50%,-50%) scale(1.12); opacity: 1; }
      100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
    }
    @keyframes cg-pulse {
      0%,100% { transform: scale(1); opacity: 0.6; }
      50%      { transform: scale(1.12); opacity: 1; }
    }
    @keyframes cg-skeletonPulse {
      0%,100% { opacity: 1; } 50% { opacity: 0.35; }
    }

    .cg-root {
      background: #ffffff;
      padding: 72px 0 80px;
      overflow: hidden;
      position: relative;
      font-family: Inter, system-ui, sans-serif;
    }
    .cg-orb {
      position: absolute; border-radius: 50%;
      pointer-events: none;
      animation: cg-bgDrift 8s ease-in-out infinite;
    }

    /* heading */
    .cg-heading-wrap {
      text-align: center; margin-bottom: 56px;
      animation: cg-fadeSlideUp 0.75s ease both; position: relative;
    }
    .cg-eyebrow {
      display: inline-block; background: #00b8d9; color: #fff;
      font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
      text-transform: uppercase; padding: 5px 16px; border-radius: 999px;
      margin-bottom: 18px; animation: cg-floatBadge 3s ease-in-out infinite;
    }
    .cg-heading {
      font-size: clamp(32px, 5vw, 52px); font-weight: 800;
      color: #1e3a5f; line-height: 1.1; margin: 0 0 14px; letter-spacing: -1.5px;
    }
    .cg-heading .accent { color: #00b8d9; position: relative; }
    .cg-heading .accent::after {
      content: ''; position: absolute; bottom: -4px; left: 0;
      height: 3px; background: #00b8d9; border-radius: 2px;
      animation: cg-underlineGrow 0.8s 0.6s ease both; width: 0;
    }
    .cg-sub {
      color: #6b8baa; font-size: 16px; font-weight: 400; margin: 0;
      animation: cg-fadeSlideUp 0.75s 0.2s ease both;
      opacity: 0; animation-fill-mode: forwards;
    }

    /* marquee */
    .cg-marquee-outer {
      overflow: hidden; margin-bottom: 10px;
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
      mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    }
    .cg-marquee-track { display: flex; width: max-content; gap: 12px; }
    .cg-marquee-track.fwd { animation: cg-marqueeFwd 28s linear infinite; }
    .cg-marquee-track.rev { animation: cg-marqueeRev 24s linear infinite; }
    .cg-marquee-track:hover { animation-play-state: paused; }
    .cg-pill {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 22px; border-radius: 999px;
      border: 1.5px solid #ddeaf4; background: #fff;
      cursor: pointer; white-space: nowrap; flex-shrink: 0;
      transition: background 0.22s, border-color 0.22s, transform 0.22s, box-shadow 0.22s;
    }
    .cg-pill:hover {
      background: #e8f9fd; border-color: #00b8d9;
      transform: translateY(-3px) scale(1.04); box-shadow: 0 6px 20px #00b8d922;
    }
    .cg-pill.active { background: #00b8d9; border-color: #00b8d9; box-shadow: 0 6px 20px #00b8d933; }
    .cg-pill-icon { font-size: 15px; line-height: 1; }
    .cg-pill-name { font-size: 13px; font-weight: 600; color: #1e3a5f; letter-spacing: 0.01em; }
    .cg-pill.active .cg-pill-name { color: #fff; }

    /* section label */
    .cg-section-label {
      max-width: 1200px; margin: 52px auto 20px;
      padding: 0 48px; display: flex; align-items: center; gap: 14px;
    }
    .cg-section-label-text {
      font-size: 22px; font-weight: 800; color: #1e3a5f;
      letter-spacing: -0.5px; white-space: nowrap;
    }
    .cg-section-label-line {
      flex: 1; height: 1.5px;
      background: linear-gradient(to right, #00b8d966, transparent); border-radius: 2px;
    }
    .cg-section-label-count {
      font-size: 12px; font-weight: 600; color: #00b8d9;
      background: #e8f9fd; padding: 3px 12px; border-radius: 999px; white-space: nowrap;
    }

    /* scroll strip */
    .cg-scroll-wrap {
      max-width: 1200px; margin: 0 auto; padding: 0 48px; position: relative;
    }
    .cg-scroll-track {
      display: flex; gap: 18px; overflow-x: auto; padding-bottom: 12px;
      scroll-snap-type: x mandatory; scrollbar-width: none;
    }
    .cg-scroll-track::-webkit-scrollbar { display: none; }

    /* arrows */
    .cg-arrow {
      position: absolute; top: 38%; transform: translateY(-50%);
      width: 38px; height: 38px; border-radius: 50%;
      border: 1.5px solid #ddeaf4; background: #fff;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; z-index: 10;
      box-shadow: 0 4px 14px rgba(30,58,95,0.1);
      transition: background 0.2s, border-color 0.2s, transform 0.2s;
    }
    .cg-arrow:hover { background: #1e3a5f; border-color: #1e3a5f; transform: translateY(-50%) scale(1.1); }
    .cg-arrow:hover svg path { stroke: #fff; }
    .cg-arrow.left  { left: 8px; }
    .cg-arrow.right { right: 8px; }

    /* video card */
    .cg-vcard {
      flex-shrink: 0; width: 240px; scroll-snap-align: start;
      cursor: pointer; text-decoration: none;
      animation: cg-cardIn 0.5s ease both;
    }
    .cg-vcard:nth-child(1)  { animation-delay: 0.05s; }
    .cg-vcard:nth-child(2)  { animation-delay: 0.10s; }
    .cg-vcard:nth-child(3)  { animation-delay: 0.15s; }
    .cg-vcard:nth-child(4)  { animation-delay: 0.20s; }
    .cg-vcard:nth-child(5)  { animation-delay: 0.25s; }
    .cg-vcard:nth-child(6)  { animation-delay: 0.30s; }
    .cg-vcard:nth-child(7)  { animation-delay: 0.35s; }
    .cg-vcard:nth-child(8)  { animation-delay: 0.40s; }
    .cg-vcard:nth-child(9)  { animation-delay: 0.45s; }
    .cg-vcard:nth-child(10) { animation-delay: 0.50s; }

    .cg-vcard-thumb {
      position: relative; aspect-ratio: 9/16; border-radius: 20px;
      overflow: hidden; border: 1.5px solid #ddeaf4;
      background: #0f2240; margin-bottom: 12px;
      transition: border-color 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s;
    }
    .cg-vcard:hover .cg-vcard-thumb {
      border-color: #00b8d9;
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 24px 48px rgba(30,58,95,0.18), 0 0 0 3px rgba(0,184,217,0.15);
    }
    .cg-vcard-img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.5s ease, opacity 0.3s; opacity: 0.88;
    }
    .cg-vcard:hover .cg-vcard-img { transform: scale(1.07); opacity: 1; }
    .cg-vcard-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, #0a1f3a 0%, rgba(10,31,58,0.55) 40%, transparent 70%);
    }
    .cg-vcard-shimmer {
      position: absolute; top: 0; bottom: 0; width: 50%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
      animation: cg-shimmer 2.4s ease-in-out infinite;
      pointer-events: none; opacity: 0; transition: opacity 0.3s;
    }
    .cg-vcard:hover .cg-vcard-shimmer { opacity: 1; }

    .cg-duration {
      position: absolute; top: 12px; right: 12px;
      background: rgba(10,31,58,0.85); color: #fff;
      font-size: 11px; font-weight: 700; padding: 4px 10px;
      border-radius: 8px; backdrop-filter: blur(4px); z-index: 3; letter-spacing: 0.04em;
    }
    .cg-vcard-bottom { position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 12px; z-index: 3; }
    .cg-cat-badge {
      display: inline-block; background: #00b8d9; color: #fff;
      font-size: 9px; font-weight: 700; padding: 4px 10px; border-radius: 999px;
      text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;
    }
    .cg-views { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); }
    .cg-views b { color: #fff; font-weight: 800; }

    .cg-play-btn {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%,-50%) scale(0.4);
      width: 52px; height: 52px;
      background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.25s; z-index: 5;
      border: 1.5px solid rgba(255,255,255,0.35);
    }
    .cg-vcard:hover .cg-play-btn { opacity: 1; animation: cg-playPop 0.35s ease forwards; }

    .cg-vcard-title {
      font-size: 14px; font-weight: 700; color: #1e3a5f;
      line-height: 1.35; margin: 0 0 6px; letter-spacing: -0.2px;
      transition: color 0.2s;
      display: -webkit-box; -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; overflow: hidden;
    }
    .cg-vcard:hover .cg-vcard-title { color: #00b8d9; }
    .cg-mentor { font-size: 12px; color: #8aacbf; display: flex; align-items: center; gap: 6px; }
    .cg-mentor-dot {
      width: 5px; height: 5px; border-radius: 50%; background: #00b8d9;
      flex-shrink: 0; animation: cg-pulse 2s ease-in-out infinite;
    }

    /* skeleton */
    .cg-skel {
      flex-shrink: 0; width: 240px; border-radius: 20px; aspect-ratio: 9/16;
      background: #e2eaf2; animation: cg-skeletonPulse 1.4s ease-in-out infinite;
    }

    /* view all */
    .cg-view-all {
      max-width: 1200px; margin: 20px auto 0; padding: 0 48px; text-align: right;
    }
    .cg-view-all a {
      display: inline-flex; align-items: center; gap: 6px;
      font-size: 13px; font-weight: 600; color: #00b8d9;
      text-decoration: none; transition: opacity 0.2s;
    }
    .cg-view-all a:hover { opacity: 0.7; }

    @media(max-width: 768px) {
      .cg-root { padding: 48px 0 56px; }
      .cg-heading { font-size: 32px; letter-spacing: -0.8px; }
      .cg-sub { font-size: 14px; padding: 0 20px; }
      .cg-section-label, .cg-scroll-wrap, .cg-view-all { padding: 0 16px; }
      .cg-vcard, .cg-skel { width: 160px; }
      .cg-arrow { display: none; }
    }
  `;

  if (loading) return <div className="flex justify-center items-center py-20">Loading...</div>;

  const doubled = [...content.categories, ...content.categories];

  return (
    <>
      <style>{STYLES}</style>

      <section className="cg-root">
        <div className="cg-orb" style={{ width: 420, height: 420, top: -130, left: -100, background: '#00b8d90b', animationDelay: '0s' }} />
        <div className="cg-orb" style={{ width: 320, height: 320, bottom: -80, right: -80,  background: '#1e3a5f08', animationDelay: '4s' }} />
        <div className="cg-orb" style={{ width: 180, height: 180, top: '40%', left: '55%',  background: '#00b8d906', animationDelay: '2s' }} />

        {/* Heading */}
        <div className="cg-heading-wrap">
          <div className="cg-eyebrow">Explore Topics</div>
          <h2 className="cg-heading"
            dangerouslySetInnerHTML={{ __html: content.title || "What's waiting<br />for <span class='accent'>you?</span>" }}
          />
          <p className="cg-sub">Pick a topic and start learning from India's top mentors</p>
        </div>

        {/* Marquee row 1 */}
        <div className="cg-marquee-outer" style={{ marginBottom: 12 }}>
          <div className="cg-marquee-track fwd">
            {doubled.map((cat, i) => (
              <div key={i} className={`cg-pill${active === cat.name ? ' active' : ''}`}
                onClick={() => setActive(active === cat.name ? null : cat.name)}>
                <span className="cg-pill-icon">{cat.icon}</span>
                <span className="cg-pill-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 */}
        <div className="cg-marquee-outer">
          <div className="cg-marquee-track rev">
            {[...doubled].reverse().map((cat, i) => (
              <div key={i} className={`cg-pill${active === cat.name ? ' active' : ''}`}
                onClick={() => setActive(active === cat.name ? null : cat.name)}>
                <span className="cg-pill-icon">{cat.icon}</span>
                <span className="cg-pill-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Videos label */}
        <div className="cg-section-label">
          <span className="cg-section-label-text">Trending Videos</span>
          <div className="cg-section-label-line" />
          <span className="cg-section-label-count">{vLoading ? '...' : `${videos.length} videos`}</span>
        </div>

        {/* View all */}
        <div className="cg-view-all">
          <Link to="/watch">
            View All Videos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Video scroll strip */}
        <div className="cg-scroll-wrap">
          <button className="cg-arrow left" onClick={() => scrollBy(-1)} aria-label="scroll left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="cg-scroll-track" ref={scrollRef}>
            {vLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="cg-skel" style={{ animationDelay: `${i * 0.1}s` }} />
                ))
              : videos.map((vid) => {
                  const category = vid.category || vid.section || '';
                  const mentor   = vid.mentor || vid.instructor || vid.author || '';
                  return (
                    <Link key={vid._id} to={`/video/${vid._id}`} className="cg-vcard">
                      <div className="cg-vcard-thumb">
                        <img className="cg-vcard-img" src={vid.thumbnail} alt={vid.title} />
                        <div className="cg-vcard-overlay" />
                        <div className="cg-vcard-shimmer" />
                        {vid.duration && <div className="cg-duration">{vid.duration}</div>}
                        <div className="cg-vcard-bottom">
                          {category && <div className="cg-cat-badge">{category}</div>}
                          <div className="cg-views"><b>{formatViews(vid.views)}</b> Views</div>
                        </div>
                        <div className="cg-play-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="cg-vcard-title">{vid.title}</div>
                      {mentor && (
                        <div className="cg-mentor">
                          <span className="cg-mentor-dot" />
                          {mentor}
                        </div>
                      )}
                    </Link>
                  );
                })
            }
          </div>

          <button className="cg-arrow right" onClick={() => scrollBy(1)} aria-label="scroll right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
      </section>
    </>
  );
};

export default CategoriesGrid;