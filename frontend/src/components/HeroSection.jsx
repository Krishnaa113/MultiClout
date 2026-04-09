import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={styles.section}  >
      {/* ── VIDEO BACKGROUND ── */}
      <div style={styles.videoBg} >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6774545/6774545-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div style={styles.fallbackBg} />
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div style={styles.overlayTop} />
      <div style={styles.overlayBottom} />
      <div style={styles.overlayLeft} />

      {/* ── GRAIN TEXTURE ── */}
      <div style={styles.grain} />

      {/* ── FLOATING ACCENT ORBS ── */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      {/* ── CONTENT ── */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 w-full max-w-5xl mx-auto"
        style={{ 
          opacity: loaded ? 1 : 0, 
          transform: loaded ? 'translateY(0)' : 'translateY(28px)', 
          transition: 'opacity 0.9s ease, transform 0.9s ease' 
        }}
      >
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/40 backdrop-blur-md rounded-full px-4 py-2 mb-8 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-widest">India's No.1 Edutainment App</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Best Business
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Education</span>
          {' '}& Marketing
        </h1>

        {/* Sub */}
        <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl font-light">
          10,000+ short videos from{' '}
          <span className="text-white/90 font-medium">trusted creators</span>
          {' '}— learn at your own pace, anytime.
        </p>

        {/* CTA */}
        <Link to="/register" 
          className="group inline-flex items-center gap-3 bg-gradient-to-br from-cyan-500 to-[#0e7fa8] text-white font-bold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full shadow-[0_8px_32px_rgba(0,184,217,0.25)] hover:shadow-[0_16px_48px_rgba(0,184,217,0.45)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 mb-14"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="stroke-[2.5px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download App
        </Link>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xl md:text-2xl font-bold text-white mb-1">
              4.5
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20" className="text-yellow-400">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">12L+ Reviews</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white mb-1">10 Cr+</div>
            <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">Downloads</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-white mb-1">500+</div>
            <div className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-widest">Expert Creators</div>
          </div>
        </div>
      </div>

      {/* ── SCROLL HINT ── */}
      <div style={styles.scroll}>
        <div style={styles.scrollLine} />
        <span style={styles.scrollText}>scroll</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @keyframes orbFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.04); }
        }
        @keyframes scrollBob {
          0%,100% { transform: scaleY(1); opacity:0.5; }
          50% { transform: scaleY(1.6); opacity:1; }
        }
        @keyframes grainMove {
          0% { transform: translate(0,0); }
          20% { transform: translate(-3px,2px); }
          40% { transform: translate(3px,-2px); }
          60% { transform: translate(-2px,3px); }
          80% { transform: translate(2px,-3px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </section>
  );
};

const C = {
  cyan: '#00c6d7',
  navy: '#0b1628',
  navyMid: '#0e2040',
};

const styles = {
  section: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: C.navy,
    fontFamily: "Inter, system-ui, sans-serif",
    marginTop: 0,
    paddingTop: 0,
  },
  videoBg: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: 0.35,
    filter: 'saturate(0.6) brightness(0.6)',
    objectFit: 'cover',
  },
  fallbackBg: {
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse 80% 80% at 60% 40%, #0e2a4a 0%, ${C.navy} 70%)`,
    zIndex: -1,
  },
  overlayTop: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: `linear-gradient(to bottom, ${C.navy}cc 0%, ${C.navy}55 40%, ${C.navy}88 80%, ${C.navy} 100%)`,
    pointerEvents: 'none',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '35%',
    zIndex: 1,
    background: `linear-gradient(to top, ${C.navy} 0%, transparent 100%)`,
    pointerEvents: 'none',
  },
  overlayLeft: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: `radial-gradient(ellipse 60% 100% at 50% 50%, transparent 0%, ${C.navy}99 100%)`,
    pointerEvents: 'none',
  },
  grain: {
    position: 'absolute',
    inset: '-50%',
    zIndex: 2,
    width: '200%',
    height: '200%',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    opacity: 0.5,
    pointerEvents: 'none',
    animation: 'grainMove 0.5s steps(1) infinite',
  },
  orb1: {
    position: 'absolute',
    top: '10%',
    right: '12%',
    width: 380,
    height: 380,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${C.cyan}22 0%, transparent 70%)`,
    zIndex: 2,
    animation: 'orbFloat 7s ease-in-out infinite',
    pointerEvents: 'none',
  },
  orb2: {
    position: 'absolute',
    bottom: '5%',
    left: '8%',
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: `radial-gradient(circle, #3b82f622 0%, transparent 70%)`,
    zIndex: 2,
    animation: 'orbFloat 9s ease-in-out infinite reverse',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: 820,
    padding: '6rem 2rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(0,198,215,0.35)',
    backdropFilter: 'blur(12px)',
    borderRadius: 999,
    padding: '6px 18px',
    marginBottom: 28,
  },
  pillDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: C.cyan,
    boxShadow: `0 0 8px ${C.cyan}`,
    display: 'inline-block',
  },
  pillText: {
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },
  h1: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: 800,
    lineHeight: 1.05,
    color: '#ffffff',
    margin: '0 0 24px',
    letterSpacing: '-0.02em',
  },
  h1Accent: {
    background: `linear-gradient(90deg, ${C.cyan}, #60a5fa)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  sub: {
    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
    color: 'rgba(255,255,255,0.6)',
    lineHeight: 1.7,
    margin: '0 0 40px',
    fontWeight: 300,
  },
  subAccent: {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 500,
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    background: `linear-gradient(135deg, ${C.cyan}, #0e7fa8)`,
    color: '#fff',
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    letterSpacing: '0.02em',
    padding: '16px 36px',
    borderRadius: 999,
    textDecoration: 'none',
    boxShadow: '0 8px 32px rgba(0,184,217,0.25)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    marginBottom: 48,
  },
  statsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  statItem: {
    textAlign: 'center',
  },
  statNum: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: 700,
    fontSize: '1.4rem',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  divider: {
    width: 1,
    height: 36,
    background: 'rgba(255,255,255,0.12)',
  },
  scroll: {
    position: 'absolute',
    bottom: 28,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  scrollLine: {
    width: 1.5,
    height: 32,
    background: `linear-gradient(to bottom, ${C.cyan}, transparent)`,
    borderRadius: 4,
    animation: 'scrollBob 1.8s ease-in-out infinite',
  },
  scrollText: {
    fontSize: 10,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)',
  },
};

export default HeroSection;