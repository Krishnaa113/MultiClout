// import React from 'react';

// const videos = [
//   { id: 1, category: 'Business', title: 'Start a Business with 0 Code', mentor: 'Ritesh Agarwal', views: '1.2M', duration: '9:54' },
//   { id: 2, category: 'Finance', title: 'Top 5 Stocks for 2026', mentor: 'Ankur Warikoo', views: '850K', duration: '12:30' },
//   { id: 3, category: 'YouTube', title: 'How to get first 1000 Subs', mentor: 'Sandeep Maheshwari', views: '2.1M', duration: '08:45' },
//   { id: 4, category: 'Instagram', title: 'Viral Reel Strategy 2026', mentor: 'Digital Pratik', views: '920K', duration: '11:20' },
//   { id: 5, category: 'Career', title: 'High Paying Remote Jobs', mentor: 'Ishan Sharma', views: '640K', duration: '14:15' }
// ];

// const courses = [
//   { name: 'Marketing Mastery', price: '2550/-', type: 'LIFE TIME' },
//   { name: 'Branding Mastery', price: '5850/-', type: 'LIFE TIME' },
//   { name: 'Traffic Mastery', price: '10,850/-', type: 'LIFE TIME' },
//   { name: 'Business Mastery', price: '15,850/-', type: 'LIFE TIME' },
//   { name: 'Business Automation Mastery', price: '20,850/-', type: 'LIFE TIME' }
// ];

// const VideoGrid = () => {
//   return (
//     <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
//       <div className="flex flex-col md:flex-row justify-between items-end mb-12">
//         <div>
//           <h2 className="text-3xl md:text-5xl font-bold font-lexend mb-4 text-navy">Trending <span className="text-primary">Masterclasses</span></h2>
//           <p className="text-gray-600 text-lg">Learn from the best minds in bite-sized videos.</p>
//         </div>
//         <button className="hidden md:block bg-navy text-white font-bold px-8 py-3 rounded-full hover:bg-primary hover:shadow-lg shadow-primary/30 transition-all">
//           View All Courses
//         </button>
//       </div>
      
//       {/* Courses Section */}
//       <div className="mb-12">
//         <h3 className="text-2xl font-bold text-navy mb-6">Premium Courses</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course, idx) => (
//             <div key={idx} className="bg-gradient-to-br from-navy to-primary p-6 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
//               <div className="flex justify-between items-start mb-4">
//                 <h4 className="text-xl font-bold">{course.name}</h4>
//                 <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
//                   {course.type}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-3xl font-bold">{course.price}</span>
//                 <button className="bg-white text-navy px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button className="md:hidden mt-6 w-full bg-navy text-white font-bold px-6 py-4 rounded-full text-center hover:bg-primary transition-colors">
//         View All Courses
//       </button>
//     </section>
//   );
// };

// export default VideoGrid;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const videos = [
  { id: 1, category: 'Business',   title: 'Start a Business with 0 Code',  mentor: 'Ritesh Agarwal',     views: '1.2M', duration: '9:54',  img: 'photo-1556761175-b413da4baf72' },
  { id: 2, category: 'Finance',    title: 'Top 5 Stocks for 2026',          mentor: 'Ankur Warikoo',      views: '850K', duration: '12:30', img: 'photo-1611974789855-9c2a0a7236a3' },
  { id: 3, category: 'YouTube',    title: 'How to Get First 1000 Subs',     mentor: 'Sandeep Maheshwari', views: '2.1M', duration: '8:45',  img: 'photo-1611162617213-7d7a39e9b1d7' },
  { id: 4, category: 'Instagram',  title: 'Viral Reel Strategy 2026',       mentor: 'Digital Pratik',     views: '920K', duration: '11:20', img: 'photo-1607082349566-187342175e2f' },
  { id: 5, category: 'Career',     title: 'High Paying Remote Jobs',        mentor: 'Ishan Sharma',       views: '640K', duration: '14:15', img: 'photo-1521737604893-d14cc237f11d' },
];

const courses = [
  { name: 'Marketing Mastery',          price: '₹2,550',  tag: 'Bestseller', students: '12.4K', rating: '4.8' },
  { name: 'Branding Mastery',           price: '₹5,850',  tag: 'Popular',    students: '8.1K',  rating: '4.9' },
  { name: 'Traffic Mastery',            price: '₹10,850', tag: 'Hot',        students: '5.6K',  rating: '4.7' },
  { name: 'Business Mastery',           price: '₹15,850', tag: 'Advanced',   students: '3.2K',  rating: '4.9' },
  { name: 'Business Automation Mastery',price: '₹20,850', tag: 'Pro',        students: '1.8K',  rating: '5.0' },
];

const STYLES = `
@keyframes vg-fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
@keyframes vg-shimmer  { 0%{left:-70%} 100%{left:130%} }
@keyframes vg-scanLine { 0%{top:0%} 100%{top:100%} }
@keyframes vg-playPop  { 0%{transform:translate(-50%,-50%) scale(.5);opacity:0} 70%{transform:translate(-50%,-50%) scale(1.1);opacity:1} 100%{transform:translate(-50%,-50%) scale(1);opacity:1} }
@keyframes vg-pulse    { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.15);opacity:1} }
@keyframes vg-bgDrift  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(14px,-10px) scale(1.05)} }
@keyframes vg-starSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes vg-tagBounce{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
@keyframes vg-countUp  { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }

.vg-root{
  background:#fff;
  padding:72px 0 80px;
  overflow:hidden;
  position:relative;
  font-family:Inter,system-ui,sans-serif;
}
.vg-inner{ max-width:1200px; margin:0 auto; padding:0 32px; }

/* orbs */
.vg-orb{ position:absolute;border-radius:50%;pointer-events:none;animation:vg-bgDrift 8s ease-in-out infinite; }

/* ── header ── */
.vg-header{
  display:flex; align-items:flex-end; justify-content:space-between;
  margin-bottom:56px;
  animation:vg-fadeUp .7s ease both;
}
.vg-heading{ color:#1e3a5f; font-size:clamp(28px,4vw,48px); font-weight:800; line-height:1.1; letter-spacing:-1px; margin:0 0 10px; }
.vg-heading .hl{ color:#00b8d9; position:relative; display:inline-block; }
.vg-heading .hl::after{
  content:''; position:absolute; bottom:-3px; left:0; height:3px; width:100%;
  background:#00b8d9; border-radius:2px;
}
.vg-sub{ color:#6b8baa; font-size:16px; margin:0; }

.vg-view-btn{
  flex-shrink:0;
  background:#1e3a5f; color:#fff;
  font-size:14px; font-weight:700;
  padding:12px 28px; border-radius:999px; border:none; cursor:pointer;
  transition:background .2s, transform .2s, box-shadow .2s;
  font-family:Inter,system-ui,sans-serif;
  white-space:nowrap;
}
.vg-view-btn:hover{ background:#00b8d9; transform:translateY(-2px); box-shadow:0 8px 24px #00b8d933; }

/* ── courses ── */
.vg-courses-label{
  display:flex; align-items:center; gap:14px; margin-bottom:24px;
  animation:vg-fadeUp .7s .1s ease both; opacity:0; animation-fill-mode:forwards;
}
.vg-courses-label-text{ font-size:22px; font-weight:800; color:#1e3a5f; letter-spacing:-.4px; }
.vg-courses-label-line{ flex:1; height:1.5px; background:linear-gradient(to right,#00b8d966,transparent); border-radius:2px; }
.vg-lifetime-pill{
  font-size:11px; font-weight:700; color:#fff;
  background:#00b8d9; padding:3px 12px; border-radius:999px;
  letter-spacing:.06em; text-transform:uppercase;
}

.vg-courses-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(220px,1fr));
  gap:16px;
  margin-bottom:56px;
}

.vg-course-card{
  position:relative;
  background:#fff;
  border:1.5px solid #ddeaf4;
  border-radius:20px;
  padding:22px 20px 18px;
  cursor:pointer;
  overflow:hidden;
  transition:border-color .25s, transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
  animation:vg-fadeUp .6s ease both;
}
.vg-course-card:hover{
  border-color:#00b8d9;
  transform:translateY(-6px);
  box-shadow:0 20px 48px #1e3a5f18, 0 0 0 3px #00b8d920;
}
.vg-course-card::before{
  content:'';
  position:absolute; top:0; left:0; right:0; height:3px;
  background:#00b8d9;
  transform:scaleX(0); transform-origin:left;
  transition:transform .3s ease;
  border-radius:2px 2px 0 0;
}
.vg-course-card:hover::before{ transform:scaleX(1); }

/* shimmer on card */
.vg-course-shimmer{
  position:absolute; top:0; bottom:0; width:50%;
  background:linear-gradient(90deg,transparent,rgba(0,184,217,.05),transparent);
  animation:vg-shimmer 2.6s ease-in-out infinite;
  pointer-events:none; opacity:0; transition:opacity .3s;
}
.vg-course-card:hover .vg-course-shimmer{ opacity:1; }

.vg-course-tag{
  display:inline-flex; align-items:center; gap:5px;
  background:#e8f9fd; color:#00b8d9;
  font-size:10px; font-weight:700;
  padding:3px 10px; border-radius:999px;
  text-transform:uppercase; letter-spacing:.08em;
  margin-bottom:12px;
  animation:vg-tagBounce 3s ease-in-out infinite;
}
.vg-course-tag svg{ width:10px; height:10px; }

.vg-course-name{
  font-size:15px; font-weight:700; color:#1e3a5f;
  line-height:1.35; margin-bottom:14px;
  transition:color .2s;
}
.vg-course-card:hover .vg-course-name{ color:#00b8d9; }

.vg-course-meta{
  display:flex; align-items:center; gap:10px;
  margin-bottom:14px;
}
.vg-course-meta-item{ display:flex; align-items:center; gap:4px; font-size:11px; color:#8aacbf; }
.vg-course-meta-dot{ width:4px; height:4px; border-radius:50%; background:#c8dcea; }

.vg-course-footer{
  display:flex; align-items:center; justify-content:space-between;
  border-top:1px solid #eef4f8; padding-top:14px;
}
.vg-course-price{
  font-size:20px; font-weight:800; color:#1e3a5f; letter-spacing:-.5px;
}
.vg-enroll-btn{
  background:#1e3a5f; color:#fff;
  font-size:12px; font-weight:700;
  padding:7px 16px; border-radius:999px; border:none; cursor:pointer;
  font-family:Inter,system-ui,sans-serif;
  transition:background .2s, transform .15s;
}
.vg-enroll-btn:hover{ background:#00b8d9; transform:scale(1.05); }

/* ── featured badge on first card ── */
.vg-featured-ribbon{
  position:absolute; top:14px; right:-1px;
  background:#1e3a5f; color:#fff;
  font-size:9px; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
  padding:4px 12px 4px 10px;
  border-radius:4px 0 0 4px;
}

/* ── video section ── */
.vg-vid-label{
  display:flex; align-items:center; gap:14px; margin-bottom:24px;
  animation:vg-fadeUp .7s .2s ease both; opacity:0; animation-fill-mode:forwards;
}
.vg-vid-label-text{ font-size:22px; font-weight:800; color:#1e3a5f; letter-spacing:-.4px; }
.vg-vid-label-line{ flex:1; height:1.5px; background:linear-gradient(to right,#00b8d966,transparent); border-radius:2px; }
.vg-vid-count{ font-size:12px; font-weight:600; color:#00b8d9; background:#e8f9fd; padding:3px 10px; border-radius:999px; }

.vg-videos-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(180px,1fr));
  gap:20px;
}

.vg-vcard{ cursor:pointer; animation:vg-countUp .6s ease both; }
.vg-vcard:nth-child(1){ animation-delay:.1s }
.vg-vcard:nth-child(2){ animation-delay:.18s }
.vg-vcard:nth-child(3){ animation-delay:.26s }
.vg-vcard:nth-child(4){ animation-delay:.34s }
.vg-vcard:nth-child(5){ animation-delay:.42s }

.vg-thumb{
  position:relative;
  aspect-ratio:9/16;
  border-radius:18px;
  overflow:hidden;
  border:1.5px solid #ddeaf4;
  margin-bottom:12px;
  background:#0a1f3a;
  transition:border-color .3s, transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
}
.vg-vcard:hover .vg-thumb{
  border-color:#00b8d9;
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 24px 48px #1e3a5f28, 0 0 0 3px #00b8d920;
}

.vg-thumb-img{
  width:100%; height:100%; object-fit:cover;
  transition:transform .5s ease, opacity .3s;
  opacity:.88;
}
.vg-vcard:hover .vg-thumb-img{ transform:scale(1.07); opacity:1; }

.vg-thumb-overlay{
  position:absolute; inset:0;
  background:linear-gradient(to top,#0a1f3a 0%,#0a1f3a55 40%,transparent 70%);
}
.vg-scan{
  position:absolute; left:0; right:0; height:2px;
  background:linear-gradient(to right,transparent,#00b8d966,transparent);
  animation:vg-scanLine 3s linear infinite;
  opacity:0; transition:opacity .3s; pointer-events:none;
}
.vg-vcard:hover .vg-scan{ opacity:1; }
.vg-card-shimmer{
  position:absolute; top:0; bottom:0; width:50%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);
  animation:vg-shimmer 2.4s ease-in-out infinite;
  pointer-events:none; opacity:0; transition:opacity .3s;
}
.vg-vcard:hover .vg-card-shimmer{ opacity:1; }

.vg-duration{
  position:absolute; top:10px; right:10px;
  background:rgba(10,31,58,.85); color:#fff;
  font-size:11px; font-weight:700;
  padding:3px 8px; border-radius:7px; z-index:3;
  backdrop-filter:blur(4px);
}
.vg-bottom{ position:absolute; bottom:0; left:0; right:0; padding:12px 10px; z-index:3; }
.vg-cat{ display:inline-block; background:#00b8d9; color:#fff; font-size:9px; font-weight:700; padding:2px 8px; border-radius:999px; text-transform:uppercase; letter-spacing:.1em; margin-bottom:4px; }
.vg-views{ font-size:11px; font-weight:600; color:rgba(255,255,255,.75); }
.vg-views b{ color:#fff; }

.vg-play{
  position:absolute; top:50%; left:50%;
  transform:translate(-50%,-50%) scale(.4);
  width:44px; height:44px;
  background:rgba(255,255,255,.22); backdrop-filter:blur(8px);
  border-radius:50%; display:flex; align-items:center; justify-content:center;
  opacity:0; transition:opacity .25s; z-index:5;
  border:1.5px solid rgba(255,255,255,.35);
}
.vg-vcard:hover .vg-play{ opacity:1; animation:vg-playPop .35s ease forwards; }

.vg-vtitle{
  font-size:14px; font-weight:700; color:#1e3a5f;
  line-height:1.35; margin-bottom:5px;
  transition:color .2s;
}
.vg-vcard:hover .vg-vtitle{ color:#00b8d9; }
.vg-mentor{ font-size:12px; color:#8aacbf; display:flex; align-items:center; gap:5px; }
.vg-mentor-dot{ width:5px; height:5px; border-radius:50%; background:#00b8d9; display:inline-block; animation:vg-pulse 2s ease-in-out infinite; }

/* mobile view-all */
.vg-mobile-btn{
  display:none;
  width:100%; margin-top:28px;
  background:#1e3a5f; color:#fff;
  font-size:15px; font-weight:700;
  padding:16px; border-radius:999px; border:none; cursor:pointer;
  font-family:Inter,system-ui,sans-serif;
  transition:background .2s;
}
.vg-mobile-btn:hover{ background:#00b8d9; }
@media(max-width:768px){
  .vg-header{ flex-direction:column; align-items:flex-start; gap:18px; }
  .vg-desktop-btn{ display:none; }
  .vg-mobile-btn{ display:block; }
  .vg-courses-grid{ grid-template-columns:1fr 1fr; gap:12px; }
  .vg-videos-grid{ grid-template-columns:repeat(2,1fr); gap:12px; }
  .vg-course-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
  .vg-enroll-btn { width: 100%; text-align: center; }
}
@media(max-width:480px){
  .vg-courses-grid{ grid-template-columns:1fr; }
  .vg-videos-grid{ grid-template-columns:repeat(2,1fr); }
}
`;

const StarIcon = () => (
  <svg viewBox="0 0 12 12" fill="#00b8d9" style={{width:10,height:10,animation:'vg-starSpin 6s linear infinite'}}>
    <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9 2.25 12l1.5-4.5L0 4.5h4.5z"/>
  </svg>
);

export default function VideoGrid() {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const navigate = useNavigate();

  const handleCourseClick = (idx) => {
    navigate(`/course/${idx + 1}`);
  };

  return (
    <>
      <style>{STYLES}</style>

      <section id="video-grid" className="vg-root mt-[-80px]">
        {/* ambient orbs */}
        <div className="vg-orb" style={{width:380,height:380,top:-120,right:-80,background:'#00b8d90b',animationDelay:'0s'}}/>
        <div className="vg-orb" style={{width:280,height:280,bottom:-60,left:-60,background:'#1e3a5f08',animationDelay:'4s'}}/>

        <div className="vg-inner">

          {/* ── Header ── */}
          <div className="vg-header">
            <div>
              <h2 className="vg-heading">
                Trending <span className="hl">Masterclasses</span>
              </h2>
              <p className="vg-sub">Learn from the best minds in bite-sized videos.</p>
            </div>
            <button className="vg-view-btn vg-desktop-btn">View All Courses →</button>
          </div>

          {/* ── Courses ── */}
          <div className="vg-courses-label">
            <span className="vg-courses-label-text">Premium Courses</span>
            <div className="vg-courses-label-line"/>
            <span className="vg-lifetime-pill">Lifetime Access</span>
          </div>

          <div className="vg-courses-grid">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="vg-course-card"
                style={{animationDelay:`${idx * 0.08}s`}}
                onMouseEnter={() => setHoveredCourse(idx)}
                onMouseLeave={() => setHoveredCourse(null)}
                onClick={() => handleCourseClick(idx)}
              >
                <div className="vg-course-shimmer"/>
                {idx === 0 && <div className="vg-featured-ribbon">Featured</div>}

                <div className="vg-course-tag">
                  <StarIcon/>
                  {course.tag}
                </div>

                <div className="vg-course-name">{course.name}</div>

                <div className="vg-course-meta">
                  <span className="vg-course-meta-item">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    {course.students}
                  </span>
                  <span className="vg-course-meta-dot"/>
                  <span className="vg-course-meta-item">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    {course.rating}
                  </span>
                </div>

                <div className="vg-course-footer">
                  <span className="vg-course-price">{course.price}</span>
                  <button 
                    className="vg-enroll-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(idx);
                    }}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="vg-mobile-btn">View All Courses →</button>
        </div>
      </section>
    </>
  );
}