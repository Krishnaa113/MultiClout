import React, { useState, useEffect, useRef } from 'react';

const categories = [
  { name: 'Sarkari Kaam',    icon: '🏛️' },
  { name: 'Instagram',       icon: '📸' },
  { name: 'Business',        icon: '💼' },
  { name: 'English Speaking',icon: '🗣️' },
  { name: 'YouTube',         icon: '▶️' },
  { name: 'Online Earning',  icon: '💰' },
  { name: 'Astrology',       icon: '🔮' },
  { name: 'Career & Jobs',   icon: '🎯' },
  { name: 'Share Market',    icon: '📈' },
  { name: 'Finance',         icon: '🏦' },
  { name: 'Video Editing',   icon: '🎬' },
];

const videos = [
  { id: 1, category: 'Business',       title: 'Start a Business with 0 Code',  mentor: 'Ritesh Agarwal',    views: '1.2M', duration: '9:54',  img: 'photo-1556761175-b413da4baf72' },
  { id: 2, category: 'Finance',        title: 'Top 5 Stocks for 2026',          mentor: 'Ankur Warikoo',     views: '850K', duration: '12:30', img: 'photo-1611974789855-9c2a0a7236a3' },
  { id: 3, category: 'YouTube',        title: 'How to Get First 1000 Subs',     mentor: 'Sandeep Maheshwari',views: '2.1M', duration: '8:45',  img: 'photo-1611162617213-7d7a39e9b1d7' },
  { id: 4, category: 'Instagram',      title: 'Viral Reel Strategy 2026',       mentor: 'Digital Pratik',    views: '920K', duration: '11:20', img: 'photo-1607082349566-187342175e2f' },
  { id: 5, category: 'Career & Jobs',  title: 'High Paying Remote Jobs',        mentor: 'Ishan Sharma',      views: '640K', duration: '14:15', img: 'photo-1521737604893-d14cc237f11d' },
  { id: 6, category: 'Share Market',   title: 'Options Trading Masterclass',    mentor: 'Pranjal Kamra',     views: '1.5M', duration: '18:05', img: 'photo-1590283603385-17ffb3a7f29f' },
];

const STYLES = `


  @keyframes cg-fadeSlideUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cg-pillIn {
    from { opacity: 0; transform: translateY(16px) scale(0.92); }
    to   { opacity: 1; transform: translateY(0)   scale(1); }
  }
  @keyframes cg-marqueeFwd {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes cg-marqueeRev {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes cg-cardIn {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0)    scale(1); }
  }
  @keyframes cg-shimmer {
    0%   { left: -80%; }
    100% { left: 130%; }
  }
  @keyframes cg-pulse {
    0%, 100% { transform: scale(1);    opacity: 0.6; }
    50%       { transform: scale(1.12); opacity: 1; }
  }
  @keyframes cg-bgDrift {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(18px,-14px) scale(1.06); }
  }
  @keyframes cg-scanLine {
    0%   { top: 0%; }
    100% { top: 100%; }
  }
  @keyframes cg-playPop {
    0%   { transform: translate(-50%,-50%) scale(0.5); opacity: 0; }
    70%  { transform: translate(-50%,-50%) scale(1.1); opacity: 1; }
    100% { transform: translate(-50%,-50%) scale(1);   opacity: 1; }
  }
  @keyframes cg-underlineGrow {
    from { width: 0; }
    to   { width: 60px; }
  }
  @keyframes cg-floatBadge {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-4px); }
  }

  .cg-root {
    background: #ffffff;
    padding: 72px 0 80px;
    overflow: hidden;
    position: relative;
    font-family: Inter, system-ui, sans-serif;
  }

  /* --- ambient orbs --- */
  .cg-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    animation: cg-bgDrift 8s ease-in-out infinite;
  }

  /* --- heading --- */
  .cg-heading-wrap {
    text-align: center;
    margin-bottom: 56px;
    animation: cg-fadeSlideUp 0.75s ease both;
    position: relative;
  }
  .cg-eyebrow {
    display: inline-block;
    background: #00b8d9;
    color: #fff;
    font-family: Inter, system-ui, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 5px 16px;
    border-radius: 999px;
    margin-bottom: 18px;
    animation: cg-floatBadge 3s ease-in-out infinite;
  }
  .cg-heading {
    font-family: Inter, system-ui, sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
    color: #1e3a5f;
    line-height: 1.1;
    margin: 0 0 14px;
    letter-spacing: -1.5px;
  }
  .cg-heading .accent {
    color: #00b8d9;
    position: relative;
  }
  .cg-heading .accent::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 3px;
    background: #00b8d9;
    border-radius: 2px;
    animation: cg-underlineGrow 0.8s 0.6s ease both;
    width: 0;
  }
  .cg-sub {
    color: #6b8baa;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    animation: cg-fadeSlideUp 0.75s 0.2s ease both;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  /* --- marquee rows --- */
  .cg-marquee-outer {
    overflow: hidden;
    margin-bottom: 10px;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
    mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  }
  .cg-marquee-track {
    display: flex;
    width: max-content;
    gap: 12px;
  }
  .cg-marquee-track.fwd  { animation: cg-marqueeFwd 28s linear infinite; }
  .cg-marquee-track.rev  { animation: cg-marqueeRev 24s linear infinite; }
  .cg-marquee-track:hover { animation-play-state: paused; }

  .cg-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 999px;
    border: 1.5px solid #ddeaf4;
    background: #fff;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.22s, border-color 0.22s, transform 0.22s, box-shadow 0.22s;
    flex-shrink: 0;
  }
  .cg-pill:hover {
    background: #e8f9fd;
    border-color: #00b8d9;
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 6px 20px #00b8d922;
  }
  .cg-pill.active {
    background: #1e3a5f;
    border-color: #1e3a5f;
    color: #fff;
    box-shadow: 0 6px 20px #1e3a5f33;
  }
  .cg-pill-icon { font-size: 15px; line-height: 1; }
  .cg-pill-name {
    font-size: 13px;
    font-weight: 600;
    color: #1e3a5f;
    font-family: Inter, system-ui, sans-serif;
    letter-spacing: 0.01em;
  }
  .cg-pill.active .cg-pill-name { color: #fff; }

  /* --- section label --- */
  .cg-section-label {
    max-width: 1200px;
    margin: 44px auto 20px;
    padding: 0 32px;
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .cg-section-label-text {
    font-family: Inter, system-ui, sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: #1e3a5f;
    letter-spacing: -0.5px;
  }
  .cg-section-label-line {
    flex: 1;
    height: 1.5px;
    background: linear-gradient(to right, #00b8d966, transparent);
    border-radius: 2px;
  }
  .cg-section-label-count {
    font-size: 12px;
    font-weight: 600;
    color: #00b8d9;
    background: #e8f9fd;
    padding: 3px 10px;
    border-radius: 999px;
    font-family: Inter, system-ui, sans-serif;
  }

  /* --- video scroll strip --- */
  .cg-scroll-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
  }
  .cg-scroll-track {
    display: flex;
    gap: 18px;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .cg-scroll-track::-webkit-scrollbar { display: none; }

  /* --- video card --- */
  .cg-vcard {
    flex-shrink: 0;
    width: 210px;
    scroll-snap-align: start;
    cursor: pointer;
    position: relative;
  }
  .cg-vcard-thumb {
    position: relative;
    aspect-ratio: 9/16;
    border-radius: 20px;
    overflow: hidden;
    border: 1.5px solid #ddeaf4;
    transition: border-color 0.3s, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s;
    margin-bottom: 12px;
    background: #0f2240;
  }
  .cg-vcard:hover .cg-vcard-thumb {
    border-color: #00b8d9;
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 24px 48px #1e3a5f28, 0 0 0 3px #00b8d920;
  }
  .cg-vcard-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, opacity 0.3s;
    opacity: 0.88;
  }
  .cg-vcard:hover .cg-vcard-img {
    transform: scale(1.07);
    opacity: 1;
  }
  .cg-vcard-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0a1f3a 0%, #0a1f3a66 40%, transparent 70%);
  }
  .cg-vcard-scan {
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, #00b8d966, transparent);
    animation: cg-scanLine 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .cg-vcard:hover .cg-vcard-scan { opacity: 1; }
  .cg-vcard-shimmer {
    position: absolute;
    top: 0; bottom: 0;
    width: 50%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
    animation: cg-shimmer 2.4s ease-in-out infinite;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .cg-vcard:hover .cg-vcard-shimmer { opacity: 1; }

  .cg-vcard-top {
    position: absolute;
    top: 12px; left: 12px; right: 12px;
    display: flex;
    justify-content: flex-end;
    z-index: 3;
  }
  .cg-duration {
    background: rgba(10,31,58,0.85);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 8px;
    font-family: Inter, system-ui, sans-serif;
    letter-spacing: 0.04em;
    backdrop-filter: blur(4px);
  }
  .cg-vcard-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 14px 12px;
    z-index: 3;
  }
  .cg-cat-badge {
    display: inline-block;
    background: #00b8d9;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    font-family: Inter, system-ui, sans-serif;
  }
  .cg-views {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.75);
    font-family: Inter, system-ui, sans-serif;
  }
  .cg-views b { color: #fff; }

  .cg-play-btn {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%) scale(0.4);
    width: 48px; height: 48px;
    background: rgba(255,255,255,0.22);
    backdrop-filter: blur(8px);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
    z-index: 5;
    border: 1.5px solid rgba(255,255,255,0.35);
  }
  .cg-vcard:hover .cg-play-btn {
    opacity: 1;
    animation: cg-playPop 0.35s ease forwards;
  }

  .cg-vcard-title {
    font-family: Inter, system-ui, sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #1e3a5f;
    line-height: 1.35;
    margin-bottom: 5px;
    transition: color 0.2s;
    letter-spacing: -0.2px;
  }
  .cg-vcard:hover .cg-vcard-title { color: #00b8d9; }
  .cg-mentor {
    font-size: 12px;
    color: #8aacbf;
    font-family: Inter, system-ui, sans-serif;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .cg-mentor-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #00b8d9;
    display: inline-block;
    animation: cg-pulse 2s ease-in-out infinite;
  }

  /* card entrance stagger */
  .cg-vcard { animation: cg-cardIn 0.55s ease both; }
  .cg-vcard:nth-child(1) { animation-delay: 0.1s; }
  .cg-vcard:nth-child(2) { animation-delay: 0.2s; }
  .cg-vcard:nth-child(3) { animation-delay: 0.3s; }
  .cg-vcard:nth-child(4) { animation-delay: 0.4s; }
  .cg-vcard:nth-child(5) { animation-delay: 0.5s; }
  .cg-vcard:nth-child(6) { animation-delay: 0.6s; }

  /* scroll arrows */
  .cg-arrow {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    width: 38px; height: 38px;
    border-radius: 50%;
    border: 1.5px solid #ddeaf4;
    background: #fff;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    box-shadow: 0 4px 14px #1e3a5f14;
  }
  .cg-arrow:hover {
    background: #1e3a5f;
    border-color: #1e3a5f;
    transform: translateY(-50%) scale(1.1);
  }
  .cg-arrow:hover svg path { stroke: #fff; }
  .cg-arrow.left  { left: -4px; }
  .cg-arrow.right { right: -4px; }

  @media(max-width:768px){
    .cg-root { padding: 48px 0 64px; }
    .cg-heading { font-size: 32px; letter-spacing: -0.8px; }
    .cg-sub { font-size: 14px; padding: 0 20px; }
    .cg-section-label { margin-top: 32px; }
    .cg-section-label-text { font-size: 18px; }
    .cg-vcard { width: 160px; }
    .cg-scroll-wrap { padding: 0 16px; }
    .cg-arrow { display: none; }
  }
`;

const doubled = [...categories, ...categories];

export default function CategoriesGrid() {
  const [active, setActive]     = useState(null);
  const scrollRef               = useRef(null);

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: 'smooth' });
  };

  return (
    <>
      <style>{STYLES}</style>

      <section className="cg-root">
        {/* Ambient orbs */}
        <div className="cg-orb" style={{ width: 420, height: 420, top: -130, left: -100, background: '#00b8d90b', animationDelay: '0s' }} />
        <div className="cg-orb" style={{ width: 320, height: 320, bottom: -80, right: -80,  background: '#1e3a5f08', animationDelay: '4s' }} />
        <div className="cg-orb" style={{ width: 180, height: 180, top: '40%', left: '55%',  background: '#00b8d906', animationDelay: '2s' }} />

        {/* Heading */}
        <div className="cg-heading-wrap">
          <div className="cg-eyebrow">Explore Topics</div>
          <h2 className="cg-heading">
            What's waiting<br />for <span className="accent">you?</span>
          </h2>
          <p className="cg-sub">Pick a topic and start learning from India's top mentors</p>
        </div>

        {/* Marquee row 1 — forward */}
        <div className="cg-marquee-outer" style={{ marginBottom: 12 }}>
          <div className="cg-marquee-track fwd">
            {doubled.map((cat, i) => (
              <div
                key={i}
                className={`cg-pill${active === cat.name ? ' active' : ''}`}
                onClick={() => setActive(active === cat.name ? null : cat.name)}
              >
                <span className="cg-pill-icon">{cat.icon}</span>
                <span className="cg-pill-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee row 2 — reverse */}
        <div className="cg-marquee-outer">
          <div className="cg-marquee-track rev">
            {[...doubled].reverse().map((cat, i) => (
              <div
                key={i}
                className={`cg-pill${active === cat.name ? ' active' : ''}`}
                onClick={() => setActive(active === cat.name ? null : cat.name)}
              >
                <span className="cg-pill-icon">{cat.icon}</span>
                <span className="cg-pill-name">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section label */}
        <div className="cg-section-label">
          <span className="cg-section-label-text">Trending Videos</span>
          <div className="cg-section-label-line" />
          <span className="cg-section-label-count">{videos.length} videos</span>
        </div>

        {/* Video scroll */}
        <div className="cg-scroll-wrap">
          <button className="cg-arrow left" onClick={() => scrollBy(-1)} aria-label="scroll left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="cg-scroll-track" ref={scrollRef}>
            {videos.map((vid) => (
              <div key={vid.id} className="cg-vcard">
                <div className="cg-vcard-thumb">
                  <img
                    className="cg-vcard-img"
                    src={`https://images.unsplash.com/${vid.img}?auto=format&fit=crop&q=80&w=400&h=711`}
                    alt={vid.title}
                  />
                  <div className="cg-vcard-overlay" />
                  <div className="cg-vcard-shimmer" />
                  <div className="cg-vcard-scan" />

                  <div className="cg-vcard-top">
                    <span className="cg-duration">{vid.duration}</span>
                  </div>

                  <div className="cg-vcard-bottom">
                    <div className="cg-cat-badge">{vid.category}</div>
                    <div className="cg-views"><b>{vid.views}</b> Views</div>
                  </div>

                  <div className="cg-play-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>

                <div className="cg-vcard-title">{vid.title}</div>
                <div className="cg-mentor">
                  <span className="cg-mentor-dot" />
                  {vid.mentor}
                </div>
              </div>
            ))}
          </div>

          <button className="cg-arrow right" onClick={() => scrollBy(1)} aria-label="scroll right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#1e3a5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}