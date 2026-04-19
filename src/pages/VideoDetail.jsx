
// import React, { useEffect, useState, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Download, Share2, Star, Eye, Clock, ChevronRight, Play } from 'lucide-react';
// import axios from 'axios';
// import Footer from '../components/Footer';

// const VideoDetail = () => {
//   const { id } = useParams();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(33);
//   const [video, setVideo] = useState(null);
//   const [relatedVideos, setRelatedVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchVideoData();
//   }, [id]);

//   const fetchVideoData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos/${id}`);
//       setVideo(response.data.data);
//       setRelatedVideos(response.data.relatedVideos || []);
//     } catch (error) {
//       console.error('Error fetching video data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTimeUpdate = () => {
//     const v = videoRef.current;
//     if (v && v.duration) setProgress(Math.round((v.currentTime / v.duration) * 100));
//   };

//   const formatViews = (v) => {
//     if (!v) return '0';
//     if (typeof v === 'string') return v;
//     if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
//     if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
//     return `${v}`;
//   };

//   if (loading || !video) {
//     return (
//       <div className="min-h-screen bg-[#03060D] flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00c6d7]" />
//       </div>
//     );
//   }

//   const tags = video.tags || ['#Agency', '#Scaling', '#Marketing', '#Business Strategy', '#Sales'];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

//         * { box-sizing: border-box; }

//         .vd-root {
//           min-height: 100vh;
//           background: #03060D;
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           padding-top: 64px;
//         }

//         /* ── Breadcrumb ── */
//         .vd-breadcrumb {
//           max-width: 1280px; margin: 0 auto;
//           padding: 16px 32px;
//           display: flex; align-items: center; gap: 8px;
//           font-size: 13px; color: rgba(255,255,255,0.45);
//         }
//         .vd-breadcrumb a { color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
//         .vd-breadcrumb a:hover { color: #fff; }
//         .vd-breadcrumb .active { color: #00c6d7; font-weight: 600; }

//         /* ── Main grid ── */
//         .vd-main {
//           max-width: 1280px; margin: 0 auto;
//           padding: 8px 32px 60px;
//           display: grid;
//           grid-template-columns: 380px 1fr;
//           gap: 56px;
//           align-items: start;
//         }

//         /* ── Phone mockup ── */
//         .vd-phone-wrap {
//           position: sticky; top: 80px;
//           display: flex; flex-direction: column; align-items: center; gap: 20px;
//         }
//         .vd-phone {
//           position: relative;
//           width: 320px;
//           background: #0d0d0f;
//           border-radius: 48px;
//           padding: 14px;
//           box-shadow:
//             0 0 0 2px #2a2a2e,
//             0 0 0 4px #111114,
//             0 32px 80px rgba(0,0,0,0.7),
//             0 0 60px rgba(0,198,215,0.06);
//         }
//         /* notch */
//         .vd-phone::before {
//           content: '';
//           position: absolute;
//           top: 14px; left: 50%; transform: translateX(-50%);
//           width: 90px; height: 26px;
//           background: #0d0d0f;
//           border-radius: 0 0 18px 18px;
//           z-index: 10;
//         }
//         .vd-phone-inner {
//           position: relative;
//           border-radius: 36px;
//           overflow: hidden;
//           aspect-ratio: 9/16;
//           background: #000;
//         }
//         .vd-phone-inner video {
//           width: 100%; height: 100%;
//           object-fit: cover; display: block;
//         }
//         .vd-phone-overlay {
//           position: absolute; inset: 0; pointer-events: none;
//           background: linear-gradient(
//             to top,
//             rgba(3,6,13,0.95) 0%,
//             rgba(3,6,13,0.5) 35%,
//             transparent 60%
//           );
//         }

//         /* play button */
//         .vd-play-btn {
//           position: absolute; top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           width: 64px; height: 64px; border-radius: 50%;
//           background: rgba(0,198,215,0.25);
//           backdrop-filter: blur(8px);
//           border: 2px solid rgba(0,198,215,0.6);
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; z-index: 5;
//           transition: transform 0.2s, background 0.2s;
//         }
//         .vd-play-btn:hover { transform: translate(-50%,-50%) scale(1.1); background: rgba(0,198,215,0.4); }

//         /* bottom info inside phone */
//         .vd-phone-bottom {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           padding: 16px; z-index: 6;
//         }
//         .vd-phone-series-row {
//           display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
//         }
//         .vd-series-badge {
//           background: #00c6d7; color: #000;
//           font-size: 9px; font-weight: 800; letter-spacing: 0.12em;
//           text-transform: uppercase; padding: 3px 10px; border-radius: 4px;
//         }
//         .vd-phone-dur {
//           font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 500;
//         }
//         .vd-phone-title {
//           font-family: 'Syne', sans-serif;
//           font-size: 15px; font-weight: 800; color: #fff;
//           line-height: 1.3; margin-bottom: 12px;
//           display: -webkit-box; -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical; overflow: hidden;
//         }
//         /* progress bar */
//         .vd-progress-wrap { margin-top: 2px; }
//         .vd-progress-bar-bg {
//           width: 100%; height: 3px;
//           background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden;
//           margin-bottom: 6px;
//         }
//         .vd-progress-bar-fill {
//           height: 100%; background: #00c6d7; border-radius: 2px;
//           transition: width 0.3s;
//         }
//         .vd-progress-labels {
//           display: flex; justify-content: space-between;
//           font-size: 10px; color: rgba(255,255,255,0.5); font-weight: 600;
//           letter-spacing: 0.08em; text-transform: uppercase;
//         }
//         .vd-progress-labels .done { color: rgba(255,255,255,0.4); }

//         /* action buttons below phone */
//         .vd-phone-actions {
//           display: flex; gap: 12px;
//         }
//         .vd-action-btn {
//           width: 48px; height: 48px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           border: 1.5px solid rgba(255,255,255,0.15);
//           background: rgba(255,255,255,0.05);
//           cursor: pointer; color: #fff;
//           transition: background 0.2s, border-color 0.2s, transform 0.2s;
//         }
//         .vd-action-btn:hover {
//           background: rgba(0,198,215,0.15);
//           border-color: rgba(0,198,215,0.5);
//           transform: scale(1.08);
//         }

//         /* ── Right panel ── */
//         .vd-right { display: flex; flex-direction: column; gap: 28px; }

//         /* meta pills row */
//         .vd-meta-row {
//           display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
//         }
//         .vd-cat-pill {
//           background: #00c6d7; color: #000;
//           font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
//           text-transform: uppercase; padding: 5px 14px; border-radius: 6px;
//         }
//         .vd-meta-pill {
//           display: flex; align-items: center; gap: 6px;
//           background: rgba(255,255,255,0.07);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 999px; padding: 5px 14px;
//           font-size: 13px; color: rgba(255,255,255,0.8);
//         }
//         .vd-meta-pill svg { color: rgba(255,255,255,0.5); }

//         /* main title */
//         .vd-main-title {
//           font-family: 'Syne', sans-serif;
//           font-size: clamp(32px, 3.5vw, 52px);
//           font-weight: 800; line-height: 1.05;
//           color: #fff; letter-spacing: -1.5px; margin: 0;
//         }
//         .vd-main-title .accent { color: #00c6d7; }
//         .vd-subtitle {
//           font-size: 15px; color: rgba(255,255,255,0.45);
//           margin-top: 8px; font-weight: 400; line-height: 1.6;
//         }

//         /* section heading with left bar */
//         .vd-section-head {
//           display: flex; align-items: center; gap: 10px;
//           font-family: 'Syne', sans-serif;
//           font-size: 17px; font-weight: 700; color: #fff;
//           margin-bottom: 14px;
//         }
//         .vd-section-head::before {
//           content: '';
//           display: block; width: 3px; height: 20px;
//           background: #00c6d7; border-radius: 2px;
//         }

//         /* description */
//         .vd-description {
//           font-size: 14px; color: rgba(255,255,255,0.65);
//           line-height: 1.75;
//         }

//         /* tags */
//         .vd-tags { display: flex; flex-wrap: wrap; gap: 8px; }
//         .vd-tag {
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,255,255,0.1);
//           color: rgba(255,255,255,0.6);
//           font-size: 12px; font-weight: 500;
//           padding: 5px 14px; border-radius: 999px;
//           cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s;
//           text-transform: uppercase; letter-spacing: 0.05em;
//         }
//         .vd-tag:hover {
//           background: rgba(0,198,215,0.12);
//           border-color: rgba(0,198,215,0.4);
//           color: #00c6d7;
//         }

//         /* ── Recommended ── */
//         .vd-rec-header {
//           display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px;
//         }
//         .vd-rec-viewall {
//           font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.4);
//           letter-spacing: 0.08em; text-transform: uppercase;
//           text-decoration: none; display: flex; align-items: center; gap-4px;
//           transition: color 0.2s;
//         }
//         .vd-rec-viewall:hover { color: #00c6d7; }

//         .vd-rec-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 14px;
//         }
//         .vd-rec-card {
//           display: block; text-decoration: none;
//           border-radius: 14px; overflow: hidden;
//           position: relative; aspect-ratio: 16/10;
//           background: #111;
//           transition: transform 0.25s, box-shadow 0.25s;
//           border: 1px solid rgba(255,255,255,0.07);
//         }
//         .vd-rec-card:hover {
//           transform: translateY(-4px) scale(1.01);
//           box-shadow: 0 16px 40px rgba(0,0,0,0.5);
//           border-color: rgba(0,198,215,0.25);
//         }
//         .vd-rec-card img {
//           width: 100%; height: 100%; object-fit: cover;
//           transition: transform 0.4s;
//         }
//         .vd-rec-card:hover img { transform: scale(1.06); }
//         .vd-rec-card-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to top, rgba(3,6,13,0.85) 0%, transparent 55%);
//         }
//         .vd-rec-dur {
//           position: absolute; top: 10px; right: 10px;
//           background: rgba(3,6,13,0.75); backdrop-filter: blur(4px);
//           color: #fff; font-size: 11px; font-weight: 700;
//           padding: 3px 8px; border-radius: 6px; letter-spacing: 0.04em;
//         }
//         .vd-rec-info {
//           position: absolute; bottom: 0; left: 0; right: 0; padding: 12px;
//         }
//         .vd-rec-title {
//           font-family: 'Syne', sans-serif;
//           font-size: 13px; font-weight: 700; color: #fff;
//           line-height: 1.3; margin-bottom: 4px;
//           display: -webkit-box; -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical; overflow: hidden;
//         }
//         .vd-rec-meta { font-size: 11px; color: rgba(255,255,255,0.5); }

//         /* ── Responsive ── */
//         @media (max-width: 900px) {
//           .vd-main {
//             grid-template-columns: 1fr;
//             gap: 32px; padding: 8px 16px 60px;
//           }
//           .vd-phone-wrap { position: static; }
//           .vd-phone { width: 100%; max-width: 320px; }
//           .vd-rec-grid { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (max-width: 480px) {
//           .vd-breadcrumb { padding: 12px 16px; }
//           .vd-rec-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
//           .vd-main-title { font-size: 28px; }
//         }
//       `}</style>

//       <div className="vd-root">

//         {/* Breadcrumb */}
//         <nav className="vd-breadcrumb">
//           <Link to="/">Home</Link>
//           <ChevronRight size={13} />
//           <Link to="/watch-videos">Videos</Link>
//           <ChevronRight size={13} />
//           <span className="active">{video?.title || '...'}</span>
//         </nav>

//         {/* Main Grid */}
//         <div className="vd-main">

//           {/* ── LEFT: Phone Mockup ── */}
//           <div className="vd-phone-wrap">
//             <div className="vd-phone">
//               <div className="vd-phone-inner">
//                 {/* Video */}
//                 <video
//                   ref={videoRef}
//                   poster={video?.thumbnail || ''}
//                   controls
//                   onPlay={() => setIsPlaying(true)}
//                   onPause={() => setIsPlaying(false)}
//                   onTimeUpdate={handleTimeUpdate}
//                 >
//                   <source src={video?.videoUrl || ''} type="video/mp4" />
//                 </video>

//                 <div className="vd-phone-overlay" />

//                 {/* Play button (shown before play) */}
//                 {!isPlaying && (
//                   <div className="vd-play-btn">
//                     <Play size={24} fill="white" color="white" style={{ marginLeft: 3 }} />
//                   </div>
//                 )}

//                 {/* Bottom overlay */}
//                 <div className="vd-phone-bottom">
//                   <div className="vd-phone-series-row">
//                     <span className="vd-series-badge">
//                       {video?.section || video?.category || 'Series'}
//                     </span>
//                     <span className="vd-phone-dur">{video?.duration || '0:00'} min</span>
//                   </div>
//                   <div className="vd-phone-title">{video?.title}</div>
//                   <div className="vd-progress-wrap">
//                     <div className="vd-progress-bar-bg">
//                       <div className="vd-progress-bar-fill" style={{ width: `${progress}%` }} />
//                     </div>
//                     <div className="vd-progress-labels">
//                       <span>In Progress</span>
//                       <span className="done">{progress}% Done</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Share / Download */}
//             <div className="vd-phone-actions">
//               <button className="vd-action-btn" title="Share">
//                 <Share2 size={18} />
//               </button>
//               <button className="vd-action-btn" title="Download">
//                 <Download size={18} />
//               </button>
//             </div>
//           </div>

//           {/* ── RIGHT: Info Panel ── */}
//           <div className="vd-right">

//             {/* Meta pills */}
//             <div className="vd-meta-row">
//               <span className="vd-cat-pill">{video?.category || 'General'}</span>
//               <span className="vd-meta-pill">
//                 <Star size={13} style={{ color: '#facc15', fill: '#facc15' }} />
//                 {video?.rating || '4.9'}
//               </span>
//               <span className="vd-meta-pill">
//                 <Eye size={13} />
//                 {formatViews(video?.views)} views
//               </span>
//               <span className="vd-meta-pill">
//                 <Clock size={13} />
//                 {video?.duration || '0:00'}
//               </span>
//             </div>

//             {/* Title */}
//             <div>
//               <h1 className="vd-main-title"
//                 dangerouslySetInnerHTML={{
//                   __html: video?.title
//                     ? video.title.replace(/(\d{4})/g, "<span class='accent'>$1</span>")
//                     : "Master the Art of <span class='accent'>2026</span>"
//                 }}
//               />
//               {video?.subtitle && <p className="vd-subtitle">{video.subtitle}</p>}
//               {!video?.subtitle && video?.description && (
//                 <p className="vd-subtitle">
//                   {video.description.slice(0, 90)}{video.description.length > 90 ? '…' : ''}
//                 </p>
//               )}
//             </div>

//             {/* About */}
//             <div>
//               <div className="vd-section-head">About this Masterclass</div>
//               <p className="vd-description">{video?.description || 'No description available.'}</p>
//             </div>

//             {/* Tags */}
//             <div className="vd-tags">
//               {tags.map((tag, i) => (
//                 <span key={i} className="vd-tag">
//                   {tag.startsWith('#') ? tag : `#${tag}`}
//                 </span>
//               ))}
//             </div>

//             {/* Recommended for You */}
//             {relatedVideos.length > 0 && (
//               <div>
//                 <div className="vd-rec-header">
//                   <div className="vd-section-head" style={{ margin: 0 }}>Recommended for You</div>
//                   <Link to="/watch-videos" className="vd-rec-viewall">
//                     View All &nbsp;›
//                   </Link>
//                 </div>
//                 <div className="vd-rec-grid">
//                   {relatedVideos.slice(0, 3).map((rv, idx) => (
//                     <Link key={idx} to={`/video/${rv._id}`} className="vd-rec-card">
//                       <img src={rv.thumbnail} alt={rv.title} />
//                       <div className="vd-rec-card-overlay" />
//                       {rv.duration && <span className="vd-rec-dur">{rv.duration}</span>}
//                       <div className="vd-rec-info">
//                         <div className="vd-rec-title">{rv.title}</div>
//                         <div className="vd-rec-meta">
//                           {formatViews(rv.views)} views · {rv.language || ''}
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default VideoDetail;







import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Share2, Star, Eye, Clock, ChevronRight, Play } from 'lucide-react';
import axios from 'axios';
import Footer from '../components/Footer';

const VideoDetail = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVideoData();
  }, [id]);

  const fetchVideoData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/videos/${id}`);
      setVideo(response.data.data);

      let related = response.data.relatedVideos || [];

      // Top up to 6 from general videos if needed
      if (related.length < 6) {
        const all = await axios.get('/api/videos?limit=20');
        const extras = (all.data.data || [])
          .filter(v => v._id !== id && !related.find(r => r._id === v._id));
        related = [...related, ...extras].slice(0, 6);
      }

      setRelatedVideos(related);
    } catch (error) {
      console.error('Error fetching video data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress(Math.round((v.currentTime / v.duration) * 100));
  };

  const formatViews = (v) => {
    if (!v) return '0';
    if (typeof v === 'string') return v;
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
    return `${v}`;
  };

  if (loading || !video) {
    return (
      <div className="min-h-screen bg-[#03060D] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00c6d7]" />
      </div>
    );
  }

  const tags = video.tags?.length
    ? video.tags
    : ['AI', 'Productivity', 'Tools', 'Automation'];

  return (
    <>
      <style>{`
       

        * { box-sizing: border-box; }

        .vd-root {
          min-height: 100vh;
          background: #03060D;
          color: #fff;
          font-family: Inter, system-ui, sans-serif;
          padding-top: 64px;
        }

        /* ── Breadcrumb ── */
        .vd-breadcrumb {
          max-width: 1280px; margin: 0 auto;
          padding: 16px 32px;
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: rgba(255,255,255,0.45);
        }
        .vd-breadcrumb a {
          color: rgba(255,255,255,0.45); text-decoration: none;
          transition: color 0.2s;
        }
        .vd-breadcrumb a:hover { color: #fff; }
        .vd-breadcrumb .active { color: #00c6d7; font-weight: 600; }

        /* ── Main grid ── */
        .vd-main {
          max-width: 1280px; margin: 0 auto;
          padding: 8px 32px 60px;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 56px;
          align-items: start;
        }

        /* ── Phone mockup ── */
        .vd-phone-wrap {
          position: sticky; top: 80px;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
        }
        .vd-phone {
          position: relative;
          width: 320px;
          background: #0d0d0f;
          border-radius: 48px;
          padding: 14px;
          box-shadow:
            0 0 0 2px #2a2a2e,
            0 0 0 4px #111114,
            0 32px 80px rgba(0,0,0,0.7),
            0 0 60px rgba(0,198,215,0.06);
        }
        .vd-phone::before {
          content: '';
          position: absolute;
          top: 14px; left: 50%; transform: translateX(-50%);
          width: 90px; height: 26px;
          background: #0d0d0f;
          border-radius: 0 0 18px 18px;
          z-index: 10;
        }
        .vd-phone-inner {
          position: relative;
          border-radius: 36px;
          overflow: hidden;
          aspect-ratio: 9/16;
          background: #000;
        }
        .vd-phone-inner video {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .vd-phone-overlay {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(
            to top,
            rgba(3,6,13,0.95) 0%,
            rgba(3,6,13,0.5) 35%,
            transparent 60%
          );
        }
        .vd-play-btn {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(0,198,215,0.25);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(0,198,215,0.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; z-index: 5;
          transition: transform 0.2s, background 0.2s;
        }
        .vd-play-btn:hover {
          transform: translate(-50%,-50%) scale(1.1);
          background: rgba(0,198,215,0.4);
        }
        .vd-phone-bottom {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 16px; z-index: 6;
        }
        .vd-phone-series-row {
          display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
        }
        .vd-series-badge {
          background: #00c6d7; color: #000;
          font-size: 9px; font-weight: 800; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 3px 10px; border-radius: 4px;
        }
        .vd-phone-dur {
          font-size: 12px; color: rgba(255,255,255,0.7); font-weight: 500;
        }
        .vd-phone-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 800; color: #fff;
          line-height: 1.3; margin-bottom: 12px;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .vd-progress-bar-bg {
          width: 100%; height: 3px;
          background: rgba(255,255,255,0.15); border-radius: 2px;
          overflow: hidden; margin-bottom: 6px;
        }
        .vd-progress-bar-fill {
          height: 100%; background: #00c6d7; border-radius: 2px;
          transition: width 0.3s;
        }
        .vd-progress-labels {
          display: flex; justify-content: space-between;
          font-size: 10px; color: rgba(255,255,255,0.5);
          font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .vd-progress-labels .done { color: rgba(255,255,255,0.4); }

        /* action buttons below phone */
        .vd-phone-actions {
          display: flex; gap: 12px;
        }
        .vd-action-btn {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.05);
          cursor: pointer; color: #fff;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .vd-action-btn:hover {
          background: rgba(0,198,215,0.15);
          border-color: rgba(0,198,215,0.5);
          transform: scale(1.08);
        }

        /* ── Right panel ── */
        .vd-right { display: flex; flex-direction: column; gap: 28px; }

        /* meta pills */
        .vd-meta-row {
          display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
        }
        .vd-cat-pill {
          background: #00c6d7; color: #000;
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 6px;
        }
        .vd-meta-pill {
          display: flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px; padding: 5px 14px;
          font-size: 13px; color: rgba(255,255,255,0.8);
        }

        /* title */
        .vd-main-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 3.5vw, 52px);
          font-weight: 800; line-height: 1.05;
          color: #fff; letter-spacing: -1.5px; margin: 0;
        }
        .vd-main-title .accent { color: #00c6d7; }
        .vd-subtitle {
          font-size: 15px; color: rgba(255,255,255,0.45);
          margin-top: 8px; font-weight: 400; line-height: 1.6;
        }

        /* section heading */
        .vd-section-head {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 700; color: #fff;
          margin-bottom: 14px;
        }
        .vd-section-head::before {
          content: '';
          display: block; width: 3px; height: 20px;
          background: #00c6d7; border-radius: 2px; flex-shrink: 0;
        }

        /* description */
        .vd-description {
          font-size: 14px; color: rgba(255,255,255,0.65);
          line-height: 1.75;
        }

        /* tags */
        .vd-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .vd-tag {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          font-size: 12px; font-weight: 500;
          padding: 5px 14px; border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .vd-tag:hover {
          background: rgba(0,198,215,0.12);
          border-color: rgba(0,198,215,0.4);
          color: #00c6d7;
        }

        /* ── Recommended ── */
        .vd-rec-header {
          display: flex; align-items: center;
          justify-content: space-between; margin-bottom: 18px;
        }
        .vd-rec-viewall {
          font-size: 12px; font-weight: 600;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
        }
        .vd-rec-viewall:hover { color: #00c6d7; }

        .vd-rec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .vd-rec-card {
          display: block; text-decoration: none;
          border-radius: 14px; overflow: hidden;
          position: relative; aspect-ratio: 16/10;
          background: #111;
          transition: transform 0.25s, box-shadow 0.25s;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .vd-rec-card:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          border-color: rgba(0,198,215,0.25);
        }
        .vd-rec-card img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.4s;
        }
        .vd-rec-card:hover img { transform: scale(1.06); }
        .vd-rec-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(3,6,13,0.85) 0%, transparent 55%);
        }
        .vd-rec-dur {
          position: absolute; top: 10px; right: 10px;
          background: rgba(3,6,13,0.75); backdrop-filter: blur(4px);
          color: #fff; font-size: 11px; font-weight: 700;
          padding: 3px 8px; border-radius: 6px; letter-spacing: 0.04em;
        }
        .vd-rec-info {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 12px;
        }
        .vd-rec-title {
          font-family: 'Syne', sans-serif;
          font-size: 13px; font-weight: 700; color: #fff;
          line-height: 1.3; margin-bottom: 4px;
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .vd-rec-meta { font-size: 11px; color: rgba(255,255,255,0.5); }

        /* skeleton */
        @keyframes vd-skelPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        .vd-skel {
          aspect-ratio: 16/10; border-radius: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          animation: vd-skelPulse 1.5s ease-in-out infinite;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .vd-main {
            grid-template-columns: 1fr;
            gap: 32px; padding: 8px 16px 60px;
          }
          .vd-phone-wrap { position: static; }
          .vd-phone { width: 100%; max-width: 320px; }
          .vd-rec-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .vd-breadcrumb { padding: 12px 16px; }
          .vd-main-title { font-size: 26px; letter-spacing: -0.8px; }
          .vd-rec-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
      `}</style>

      <div className="vd-root">

        {/* Breadcrumb */}
        <nav className="vd-breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={13} />
          <Link to="/watch-videos">Videos</Link>
          <ChevronRight size={13} />
          <span className="active">{video?.title || '...'}</span>
        </nav>

        {/* Main Grid */}
        <div className="vd-main">

          {/* ── LEFT: Phone Mockup ── */}
          <div className="vd-phone-wrap">
            <div className="vd-phone">
              <div className="vd-phone-inner">
                <video
                  ref={videoRef}
                  poster={video?.thumbnail || ''}
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={handleTimeUpdate}
                >
                  <source src={video?.videoUrl || ''} type="video/mp4" />
                </video>

                <div className="vd-phone-overlay" />

                {!isPlaying && (
                  <div className="vd-play-btn">
                    <Play size={24} fill="white" color="white" style={{ marginLeft: 3 }} />
                  </div>
                )}

                <div className="vd-phone-bottom">
                  <div className="vd-phone-series-row">
                    <span className="vd-series-badge">
                      {video?.section || video?.category || 'Series'}
                    </span>
                    <span className="vd-phone-dur">{video?.duration || '0:00'} min</span>
                  </div>
                  <div className="vd-phone-title">{video?.title}</div>
                  <div>
                    <div className="vd-progress-bar-bg">
                      <div className="vd-progress-bar-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="vd-progress-labels">
                      <span>In Progress</span>
                      <span className="done">{progress}% Done</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="vd-phone-actions">
              <button className="vd-action-btn" title="Share">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Info Panel ── */}
          <div className="vd-right">

            {/* Meta pills */}
            <div className="vd-meta-row">
              <span className="vd-cat-pill">{video?.category || 'General'}</span>
              <span className="vd-meta-pill">
                <Star size={13} style={{ color: '#facc15', fill: '#facc15' }} />
                {video?.rating || '4.9'}
              </span>
              <span className="vd-meta-pill">
                <Eye size={13} />
                {formatViews(video?.views)} views
              </span>
              <span className="vd-meta-pill">
                <Clock size={13} />
                {video?.duration || '0:00'}
              </span>
            </div>

            {/* Title */}
            <div>
              <h1
                className="vd-main-title"
                dangerouslySetInnerHTML={{
                  __html: video?.title
                    ? video.title.replace(/(\d{4})/g, "<span class='accent'>$1</span>")
                    : "Master the Art of <span class='accent'>2026</span>"
                }}
              />
              {video?.description && (
                <p className="vd-subtitle">
                  {video.description.slice(0, 100)}{video.description.length > 100 ? '…' : ''}
                </p>
              )}
            </div>

            {/* About */}
            <div>
              <div className="vd-section-head">About this Masterclass</div>
              <p className="vd-description">{video?.description || 'No description available.'}</p>
            </div>

            {/* Tags */}
            <div className="vd-tags">
              {tags.map((tag, i) => (
                <span key={i} className="vd-tag">
                  {String(tag).startsWith('#') ? tag : `#${tag}`}
                </span>
              ))}
            </div>

            {/* ── Recommended for You ── */}
            <div>
              <div className="vd-rec-header">
                <div className="vd-section-head" style={{ margin: 0 }}>
                  Recommended for You
                </div>
                <Link to="/watch-videos" className="vd-rec-viewall">
                  View All &nbsp;›
                </Link>
              </div>

              {relatedVideos.length > 0 ? (
                <>
                  {/* Row 1 */}
                  <div className="vd-rec-grid" style={{ marginBottom: 14 }}>
                    {relatedVideos.slice(0, 3).map((rv, idx) => (
                      <Link key={idx} to={`/video/${rv._id}`} className="vd-rec-card">
                        <img src={rv.thumbnail} alt={rv.title} />
                        <div className="vd-rec-card-overlay" />
                        {rv.duration && <span className="vd-rec-dur">{rv.duration}</span>}
                        <div className="vd-rec-info">
                          <div className="vd-rec-title">{rv.title}</div>
                          <div className="vd-rec-meta">
                            {formatViews(rv.views)} views{rv.language ? ` · ${rv.language}` : ''}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Row 2 */}
                  {relatedVideos.length > 3 && (
                    <div className="vd-rec-grid">
                      {relatedVideos.slice(3, 6).map((rv, idx) => (
                        <Link key={idx} to={`/video/${rv._id}`} className="vd-rec-card">
                          <img src={rv.thumbnail} alt={rv.title} />
                          <div className="vd-rec-card-overlay" />
                          {rv.duration && <span className="vd-rec-dur">{rv.duration}</span>}
                          <div className="vd-rec-info">
                            <div className="vd-rec-title">{rv.title}</div>
                            <div className="vd-rec-meta">
                              {formatViews(rv.views)} views{rv.language ? ` · ${rv.language}` : ''}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* Skeleton placeholders */
                <>
                  <div className="vd-rec-grid" style={{ marginBottom: 14 }}>
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="vd-skel"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                  <div className="vd-rec-grid">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="vd-skel"
                        style={{ animationDelay: `${(i + 3) * 0.15}s` }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>{/* end vd-right */}
        </div>{/* end vd-main */}

        <Footer />
      </div>
    </>
  );
};

export default VideoDetail;