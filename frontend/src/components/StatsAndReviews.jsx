
import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, suffix: ' Lakh+', label: 'Learners',   icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { value: 10, suffix: ',000+', label: 'Videos',      icon: 'M15 10l4.553-2.277A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.898L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' },
  { value: 250, suffix: '+',    label: 'Mentors',     icon: 'M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
  { value: 50,  suffix: '+',    label: 'Categories',  icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
];

const reviews = [
  { text: "MultiClout se mujhe Rs 8000 ka fayda hua hai, jo meine Share market ki series se seekha.", name: "Dr. Baijnath Jaiswal", location: "Gorakhpur", img: 30, rating: 5 },
  { text: "MultiClout se investing seekh ke 30% ka profit kamaya hai. YouTube pe sab kuch hai par MultiClout me to-the-point hai.", name: "Sandeep Kumar", location: "Haryana", img: 31, rating: 5 },
  { text: "MultiClout se maine video editing seekha. Aaj jo kuch bhi hu MultiClout ki wajah se hu. No time waste.", name: "Shivam", location: "Delhi", img: 32, rating: 5 },
];

const STYLES = `
@keyframes sr-fadeUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes sr-bgDrift  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(16px,-12px) scale(1.06)} }
@keyframes sr-pulse    { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.18);opacity:1} }
@keyframes sr-shimmer  { 0%{left:-80%} 100%{left:130%} }
@keyframes sr-countUp  { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
@keyframes sr-starPop  { 0%{transform:scale(0) rotate(-20deg);opacity:0} 70%{transform:scale(1.2) rotate(4deg)} 100%{transform:scale(1) rotate(0deg);opacity:1} }
@keyframes sr-quoteFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
@keyframes sr-ringPulse { 0%{transform:translate(-50%,-50%) scale(1);opacity:.5} 100%{transform:translate(-50%,-50%) scale(1.7);opacity:0} }
@keyframes sr-scan     { 0%{top:0%} 100%{top:100%} }
@keyframes sr-glowMove { 0%,100%{opacity:.18} 50%{opacity:.32} }
@keyframes sr-badgeIn  { from{opacity:0;transform:translateY(-8px) scale(.9)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes sr-plusGlow { 0%,100%{text-shadow:0 0 0 transparent} 50%{text-shadow:0 0 28px #00b8d977} }

.sr-root{
  background:#fff;
  padding:80px 0 88px;
  position:relative;
  overflow:hidden;
  font-family:Inter,system-ui,sans-serif;
}
.sr-inner{ max-width:1200px; margin:0 auto; padding:0 32px; position:relative; z-index:2; }

/* orbs */
.sr-orb{ position:absolute; border-radius:50%; pointer-events:none; animation:sr-bgDrift 9s ease-in-out infinite; }

/* ── stats ── */
.sr-stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  margin-bottom:80px;
}
@media(max-width:768px){ .sr-stats-grid{ grid-template-columns:repeat(2,1fr); } }

.sr-stat-card{
  background:#fff;
  border:1.5px solid #ddeaf4;
  border-radius:24px;
  padding:28px 20px;
  text-align:center;
  position:relative;
  overflow:hidden;
  cursor:default;
  transition:border-color .25s, transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s;
  animation:sr-fadeUp .6s ease both;
}
.sr-stat-card:hover{
  border-color:#00b8d9;
  transform:translateY(-6px);
  box-shadow:0 20px 48px #1e3a5f18, 0 0 0 3px #00b8d918;
}
.sr-stat-card::before{
  content:'';
  position:absolute; top:0; left:0; right:0; height:3px;
  background:#00b8d9;
  transform:scaleX(0); transform-origin:left;
  transition:transform .35s ease;
  border-radius:2px 2px 0 0;
}
.sr-stat-card:hover::before{ transform:scaleX(1); }

.sr-stat-shimmer{
  position:absolute; top:0; bottom:0; width:55%;
  background:linear-gradient(90deg,transparent,rgba(0,184,217,.06),transparent);
  animation:sr-shimmer 2.8s ease-in-out infinite;
  pointer-events:none; opacity:0; transition:opacity .3s;
}
.sr-stat-card:hover .sr-stat-shimmer{ opacity:1; }

.sr-stat-icon-wrap{
  width:48px; height:48px; border-radius:14px;
  background:#e8f9fd; display:flex; align-items:center; justify-content:center;
  margin:0 auto 14px;
  transition:background .2s, transform .2s;
}
.sr-stat-card:hover .sr-stat-icon-wrap{ background:#00b8d9; transform:scale(1.1) rotate(-4deg); }
.sr-stat-card:hover .sr-stat-icon-wrap svg{ stroke:#fff; }

.sr-stat-value{
  font-size:clamp(26px,3.5vw,36px);
  font-weight:800;
  color:#1e3a5f;
  letter-spacing:-1px;
  line-height:1;
  margin-bottom:6px;
  transition:color .2s;
}
.sr-stat-card:hover .sr-stat-value{ color:#00b8d9; }
.sr-stat-label{ font-size:13px; font-weight:600; color:#8aacbf; letter-spacing:.04em; text-transform:uppercase; }

/* ── heading block ── */
.sr-heading-wrap{
  text-align:center;
  margin-bottom:56px;
  animation:sr-fadeUp .7s .1s ease both; opacity:0; animation-fill-mode:forwards;
}
.sr-eyebrow{
  display:inline-flex; align-items:center; gap:7px;
  background:#e8f9fd; color:#00b8d9;
  font-size:11px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
  padding:5px 14px; border-radius:999px; margin-bottom:18px;
  animation:sr-badgeIn .5s .3s ease both; opacity:0; animation-fill-mode:forwards;
}
.sr-eyebrow-dot{ width:6px; height:6px; border-radius:50%; background:#00b8d9; animation:sr-pulse 2s ease-in-out infinite; }
.sr-heading{
  font-size:clamp(28px,4vw,48px);
  font-weight:800; color:#1e3a5f;
  line-height:1.1; letter-spacing:-1.2px; margin:0 0 12px;
}
.sr-heading .hl{
  color:#00b8d9; position:relative; display:inline-block;
}
.sr-heading .hl::after{
  content:''; position:absolute; bottom:-3px; left:0; height:3px; width:100%;
  background:#00b8d9; border-radius:2px;
}
.sr-rating{
  display:inline-flex; align-items:center; gap:8px;
  background:#fff; border:1.5px solid #ddeaf4;
  padding:7px 18px; border-radius:999px;
  font-size:14px; font-weight:700; color:#1e3a5f;
}
.sr-stars{ color:#f59e0b; font-size:16px; letter-spacing:1px; }

/* ── review cards ── */
.sr-reviews-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
}
@media(max-width:900px){ .sr-reviews-grid{ grid-template-columns:1fr; max-width:480px; margin:0 auto; } }

.sr-review-card{
  background:#fff;
  border:1.5px solid #ddeaf4;
  border-radius:26px;
  padding:28px 24px 24px;
  position:relative;
  overflow:visible;
  margin-top:44px;
  transition:border-color .25s, transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s;
  animation:sr-fadeUp .6s ease both;
}
.sr-review-card:hover{
  border-color:#00b8d9;
  transform:translateY(-8px);
  box-shadow:0 24px 56px #1e3a5f1a, 0 0 0 3px #00b8d918;
}
.sr-review-shimmer{
  position:absolute; top:0; bottom:0; width:50%;
  background:linear-gradient(90deg,transparent,rgba(0,184,217,.05),transparent);
  animation:sr-shimmer 2.6s ease-in-out infinite;
  pointer-events:none; opacity:0; transition:opacity .3s;
}
.sr-review-card:hover .sr-review-shimmer{ opacity:1; }

.sr-avatar-wrap{
  position:absolute;
  top:-40px; left:24px;
  width:90px; height:90px;
  border-radius:50%;
  border:3px solid #fff;
  box-shadow:0 4px 16px #1e3a5f20;
  overflow:visible;
  background:#e8f9fd;
  transition:transform .3s, box-shadow .3s;
}
.sr-review-card:hover .sr-avatar-wrap{
  transform:scale(1.08);
  box-shadow:0 6px 24px #00b8d933;
}
.sr-avatar-ring{
  position:absolute; top:50%; left:50%;
  width:100%; height:100%;
  border:2px solid #00b8d9;
  border-radius:50%;
  animation:sr-ringPulse 2.2s ease-out infinite;
  pointer-events:none;
}
.sr-avatar-wrap img{ width:100%; height:100%; object-fit:cover; object-position:center; display:block; }

.sr-quote-icon{
  position:absolute; top:16px; right:20px;
  font-size:52px; line-height:1;
  color:#00b8d9; opacity:.12; font-family:Georgia,serif;
  pointer-events:none;
  animation:sr-quoteFloat 4s ease-in-out infinite;
}

.sr-review-stars{
  display:flex; gap:3px; margin-bottom:12px; margin-top:44px;
}
.sr-star{
  color:#f59e0b; font-size:16px;
  animation:sr-starPop .4s ease both;
}
.sr-review-text{
  font-size:14px; line-height:1.7; color:#4a6380;
  font-style:italic; margin-bottom:18px;
  border-left:3px solid #00b8d9;
  padding-left:12px;
}
.sr-review-name{ font-size:15px; font-weight:700; color:#1e3a5f; margin-bottom:2px; }
.sr-review-location{
  font-size:12px; color:#8aacbf;
  display:flex; align-items:center; gap:5px;
}
.sr-location-dot{ width:4px; height:4px; border-radius:50%; background:#00b8d9; display:inline-block; animation:sr-pulse 2s ease-in-out infinite; }

/* ── PRO banner ── */
.sr-pro-wrap{
  margin-top:88px;
  border-radius:32px;
  background:#1e3a5f;
  overflow:hidden;
  position:relative;
  animation:sr-fadeUp .7s .3s ease both; opacity:0; animation-fill-mode:forwards;
  transition:transform .3s, box-shadow .3s;
}
.sr-pro-wrap:hover{ transform:translateY(-4px); box-shadow:0 32px 80px #1e3a5f33; }

/* top accent stripe */
.sr-pro-stripe{
  position:absolute; top:0; left:0; right:0; height:3px;
  background:#00b8d9; z-index:3;
}
/* scan line */
.sr-pro-scan{
  position:absolute; left:0; right:0; height:2px;
  background:linear-gradient(to right,transparent,#00b8d944,transparent);
  animation:sr-scan 4s linear infinite; pointer-events:none; z-index:2;
}
/* glow orbs inside banner */
.sr-pro-orb{ position:absolute; border-radius:50%; pointer-events:none; animation:sr-glowMove 5s ease-in-out infinite; }

.sr-pro-inner{
  position:relative; z-index:4;
  display:flex; align-items:center; justify-content:space-between;
  padding:52px 56px;
  gap:32px;
}
@media(max-width:768px){ .sr-pro-inner{ flex-direction:column; align-items:flex-start; padding:36px 28px; } }

.sr-pro-title{
  font-size:clamp(28px,4vw,48px);
  font-weight:800; color:#fff;
  letter-spacing:-1px; margin-bottom:20px; line-height:1.1;
}
.sr-pro-title .plus{
  color:#00b8d9;
  animation:sr-plusGlow 2.5s ease-in-out infinite;
  display:inline-block;
}

.sr-pro-features{ display:flex; flex-wrap:wrap; gap:14px 28px; }
.sr-pro-feature{
  display:flex; align-items:center; gap:8px;
  font-size:14px; font-weight:500; color:rgba(255,255,255,.85);
}
.sr-feature-check{
  width:22px; height:22px; border-radius:50%;
  background:#00b8d9; display:flex; align-items:center; justify-content:center;
  flex-shrink:0;
}

.sr-pro-cta{ flex-shrink:0; }
.sr-pro-cta-sub{
  font-size:12px; color:rgba(255,255,255,.5);
  text-align:center; margin-top:10px;
  font-weight:500;
}
.sr-pro-btn{
  display:block;
  background:#fff; color:#1e3a5f;
  font-size:16px; font-weight:800;
  padding:18px 44px; border-radius:999px; border:none; cursor:pointer;
  font-family:Inter,system-ui,sans-serif;
  white-space:nowrap;
  transition:background .2s, color .2s, transform .2s, box-shadow .2s;
  box-shadow:0 0 40px rgba(255,255,255,.18);
  letter-spacing:-.2px;
}
.sr-pro-btn:hover{
  background:#00b8d9; color:#fff;
  transform:scale(1.06);
  box-shadow:0 8px 32px #00b8d955;
}

@media(max-width:768px){ 
  .sr-root { padding: 48px 0 0 !important; margin-top: 0 !important; }
  .sr-inner { padding: 0 24px; }
  .sr-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .sr-pro-inner { flex-direction: column; align-items: center; padding: 40px 24px; text-align: center; }
  .sr-pro-cta { width: 100%; }
  .sr-pro-btn { width: 100%; text-align: center; }
  .sr-pro-cta-sub { text-align: center; font-size: 11px; margin-top: 12px; opacity: 0.7; }
  .sr-pro-features { justify-content: center; margin-top: 16px; }
  .sr-heading { font-size: 28px; }
  .sr-rating { font-size: 12px; padding: 5px 14px; }
}
@media(max-width:480px){
  .sr-stats-grid { grid-template-columns: 1fr; }
  .sr-pro-title { font-size: 32px; }
}
`;

function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
}

function StatCard({ stat, idx, visible }) {
  const num = useCountUp(stat.value, 1600, visible);
  return (
    <div className="sr-stat-card" style={{ animationDelay: `${idx * 0.1}s` }}>
      <div className="sr-stat-shimmer" />
      <div className="sr-stat-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {stat.icon.split('M').filter(Boolean).map((d, i) => (
            <path key={i} d={'M' + d} />
          ))}
        </svg>
      </div>
      <div className="sr-stat-value">{visible ? num : 0}{stat.suffix}</div>
      <div className="sr-stat-label">{stat.label}</div>
    </div>
  );
}

export default function StatsAndReviews() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section className="sr-root mt-[-136px]" ref={rootRef}>

        {/* ambient orbs */}
        <div className="sr-orb" style={{ width: 440, height: 440, top: -140, right: -100, background: '#00b8d90a', animationDelay: '0s' }} />
        <div className="sr-orb" style={{ width: 300, height: 300, bottom: -80, left: -80, background: '#1e3a5f07', animationDelay: '4.5s' }} />

        <div className="sr-inner">

          {/* ── Stats ── */}
          {/* <div className="sr-stats-grid">
            {stats.map((s, i) => <StatCard key={i} stat={s} idx={i} visible={visible} />)}
          </div> */}

          {/* ── Heading ── */}
          <div className="sr-heading-wrap">
            <div className="sr-eyebrow">
              <span className="sr-eyebrow-dot" />
              Trusted by millions
            </div>
            <h2 className="sr-heading">
              Why 10 Lakh+ Learners<br />
              <span className="hl">Trust Multiclout?</span>
            </h2>
            <div className="sr-rating">
              <span className="sr-stars">★★★★★</span>
              Rated 4.5 by 10 Lakh+ users
            </div>
          </div>

          {/* ── Reviews ── */}
          <div className="sr-reviews-grid">
            {reviews.map((rev, i) => (
              <div key={i} className="sr-review-card" style={{ animationDelay: `${0.15 + i * 0.1}s` }}>
                <div className="sr-review-shimmer" />
                <div className="sr-quote-icon">"</div>

                <div className="sr-avatar-wrap">
                  <div className="sr-avatar-ring" />
                  <img src={`https://i.pravatar.cc/150?img=${rev.img}`} alt={rev.name} />
                </div>

                <div className="sr-review-stars">
                  {Array.from({ length: rev.rating }).map((_, si) => (
                    <span key={si} className="sr-star" style={{ animationDelay: `${si * 0.07}s` }}>★</span>
                  ))}
                </div>

                <p className="sr-review-text">"{rev.text}"</p>

                <div className="sr-review-name">{rev.name}</div>
                <div className="sr-review-location">
                  <span className="sr-location-dot" />
                  {rev.location}
                </div>
                
              </div>
              
            ))}
          </div>

          {/* ── PRO Banner ── */}
          <div className="sr-pro-wrap">
            <div className="sr-pro-stripe" />
            <div className="sr-pro-scan" />
            <div className="sr-pro-orb" style={{ width: 340, height: 340, top: -100, right: -80, background: '#00b8d914', animationDelay: '0s' }} />
            <div className="sr-pro-orb" style={{ width: 240, height: 240, bottom: -80, left: -60, background: '#00b8d910', animationDelay: '2.5s' }} />

            <div className="sr-pro-inner">
              <div>
                <div className="sr-pro-title">
                  Unlock <span className="plus">PLUS</span>
                </div>
                <div className="sr-pro-features">
                  {['Unlimited Videos', 'Daily New Videos', 'Ad-Free Experience'].map((f, i) => (
                    <div key={i} className="sr-pro-feature">
                      <div className="sr-feature-check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="sr-pro-cta">
                <button className="sr-pro-btn">Get PLUS Now →</button>
                <div className="sr-pro-cta-sub">No hidden charges · Cancel anytime</div>
              </div>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="sr-stats-grid mt-16">
            {stats.map((s, i) => <StatCard key={i} stat={s} idx={i} visible={visible} />)}
          </div>

        </div>
      </section>
    </>
  );
}