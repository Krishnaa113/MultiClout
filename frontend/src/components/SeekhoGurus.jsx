import React, { useState, useEffect, useRef } from 'react';

const gurus = [
  {
    id: 1,
    name: 'Tejas Morya',
    label: 'Share Market Guru',
    videos: '85',
    views: '229K',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 2,
    name: 'Vikas Sharma',
    label: 'Share Market Guru',
    videos: '317',
    views: '1.1M',
    avatar: 'https://i.pravatar.cc/150?img=52',
  },
  {
    id: 3,
    name: 'Kartik Dhiman',
    label: 'Business Guru',
    videos: '97',
    views: '621K',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 4,
    name: 'Rahul Jadhav',
    label: 'Share Market Guru',
    videos: '120',
    views: '357K',
    avatar: 'https://i.pravatar.cc/150?img=60',
  },
  {
    id: 5,
    name: 'Pou Daman Handa',
    label: 'Culinary Guru',
    videos: '74',
    views: '329K',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    id: 6,
    name: 'Faiz Alam',
    label: 'Coding Guru',
    videos: '210',
    views: '4.5M',
    avatar: 'https://i.pravatar.cc/150?img=57',
  },
];

const N = gurus.length;

const STYLES = `
@keyframes floatUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulseRing {
  0%   { transform: translate(-50%,-50%) scale(1);    opacity: 0.7; }
  70%  { transform: translate(-50%,-50%) scale(1.65); opacity: 0; }
  100% { transform: translate(-50%,-50%) scale(1.65); opacity: 0; }
}
@keyframes shimmer {
  0%   { left: -70%; }
  100% { left: 130%;  }
}
@keyframes badgeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
@keyframes particleFloat {
  0%,100% { transform: translateY(0)   scale(1);    opacity: 0.55; }
  50%      { transform: translateY(-16px) scale(1.25); opacity: 1;    }
}
@keyframes spinSlow {
  from { transform: rotate(0deg);    }
  to   { transform: rotate(360deg);  }
}
@keyframes spinRev {
  from { transform: rotate(0deg);    }
  to   { transform: rotate(-360deg); }
}
@keyframes titleGlow {
  0%,100% { text-shadow: 0 0 0px transparent; }
  50%      { text-shadow: 0 0 22px #00b8d955; }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes dotPulse {
  0%,100% { transform: scale(1); }
  50%      { transform: scale(1.4); }
}
@keyframes bgOrb {
  0%,100% { transform: scale(1) translateY(0px);   }
  50%      { transform: scale(1.08) translateY(-12px); }
}

.sg-root * { box-sizing: border-box; }

.sg-root {
  background: #fff;
  padding: 56px 0 64px;
  text-align: center;
  font-family: Inter, system-ui, sans-serif;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.sg-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: bgOrb 6s ease-in-out infinite;
}

.sg-heading {
  color: #1e3a5f;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.5px;
  animation: floatUp 0.7s ease both, titleGlow 3s ease-in-out 1s infinite;
}

.sg-sub {
  font-size: 18px;
  color: #00b8d9;
  font-weight: 500;
  margin-top: 6px;
  animation: floatUp 0.7s 0.18s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
}

.sg-carousel {
  position: relative;
  height: 400px;
  max-width: 980px;
  margin: 28px auto 0;
}

.sg-card-shell {
  position: absolute;
  left: 50%;
  top: 50%;
  transition: transform 0.5s cubic-bezier(0.4,0,0.2,1),
              opacity  0.5s ease,
              width    0.5s ease;
}

.sg-card {
  border-radius: 24px;
  overflow: visible;
  position: relative;
}

.sg-card-inner {
  border-radius: 24px;
  overflow: hidden;
  border: 1.5px solid #ddeaf5;
  background: #fff;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.sg-card-shell.is-center .sg-card-inner {
  border: 2px solid #00b8d9;
  box-shadow: 0 0 0 6px #00b8d918;
}

.sg-card-shell.is-center .sg-card-inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px #00b8d922, 0 0 0 6px #00b8d918;
}

.sg-top {
  position: relative;
  background: #1e3a5f;
  overflow: hidden;
}

.sg-top-stripe {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: #00b8d9;
  z-index: 4;
}

.sg-shimmer {
  position: absolute;
  top: 0; bottom: 0;
  width: 55%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
  animation: shimmer 2.6s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
}

.sg-avatar {
  display: block;
  border-radius: 50% 50% 0 0;
  object-fit: cover;
  object-position: top;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.sg-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #00b8d9;
  color: #fff;
  font-weight: 700;
  border-radius: 999px;
  white-space: nowrap;
  z-index: 10;
  animation: badgeIn 0.4s 0.25s ease both;
  letter-spacing: 0.02em;
}

.sg-pulse-ring {
  position: absolute;
  border-radius: 50%;
  border: 2.5px solid #00b8d9;
  animation: pulseRing 2.2s ease-out infinite;
  pointer-events: none;
  top: 50%; left: 50%;
}

.sg-orbit-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed #00b8d955;
  pointer-events: none;
}

.sg-body {
  padding: 14px 20px 20px;
  text-align: center;
}

.sg-name {
  color: #1e3a5f;
  font-weight: 700;
  margin-bottom: 14px;
  animation: countUp 0.4s ease both;
}

.sg-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.sg-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.sg-stat-icon {
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf5fb;
  transition: transform 0.2s, background 0.2s;
}

.sg-card-shell.is-center .sg-stat-icon:hover {
  background: #00b8d9;
  transform: scale(1.12);
}

.sg-card-shell.is-center .sg-stat-icon:hover svg path,
.sg-card-shell.is-center .sg-stat-icon:hover svg rect,
.sg-card-shell.is-center .sg-stat-icon:hover svg circle,
.sg-card-shell.is-center .sg-stat-icon:hover svg ellipse {
  fill: #fff !important;
  stroke: #fff !important;
}

.sg-stat-label {
  color: #1e3a5f;
}

.sg-divider {
  width: 1px;
  background: #c8dcea;
}

.sg-nav-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 26px;
}

.sg-nav-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid #c8dcea;
  background: #fff;
  color: #1e3a5f;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s, transform 0.15s;
  line-height: 1;
}

.sg-nav-btn:hover {
  background: #eaf5fb;
  border-color: #00b8d9;
  transform: scale(1.1);
}

.sg-nav-btn:active {
  transform: scale(0.95);
}

.sg-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sg-dot {
  height: 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.3s, width 0.3s;
  padding: 0;
}

.sg-particle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: particleFloat linear infinite;
}

.sg-orbit-dot {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00b8d9;
  pointer-events: none;
}
`;

function getOffset(i, active) {
  let off = ((i - active) % N + N) % N;
  if (off > N / 2) off -= N;
  return off;
}

const PARTICLES = [
  { size: 8,  top: '18%', left: '8%',  delay: '0s',   dur: '3.2s' },
  { size: 6,  top: '72%', left: '5%',  delay: '0.8s', dur: '4s'   },
  { size: 10, top: '30%', left: '92%', delay: '0.3s', dur: '3.6s' },
  { size: 5,  top: '80%', left: '88%', delay: '1.2s', dur: '2.9s' },
  { size: 7,  top: '55%', left: '3%',  delay: '1.8s', dur: '4.4s' },
  { size: 6,  top: '12%', left: '78%', delay: '0.5s', dur: '3.8s' },
];

function GuruCard({ guru, offset, onClick, style }) {
  const isCenter = offset === 0;
  const absOff   = Math.abs(offset);

  if (absOff > 2) return null;

  const scale   = isCenter ? 1.14 : absOff === 1 ? 0.87 : 0.70;
  const tx      = offset * (absOff === 0 ? 0 : 275);
  const ty      = absOff === 1 ? 40 : absOff === 2 ? 72 : 0;
  const zIndex  = isCenter ? 10 : absOff === 1 ? 6 : 2;
  const opacity = absOff === 2 ? 0.42 : 1;
  const width   = isCenter ? 300 : 238;
  const avatarH = isCenter ? 152 : 110;
  const topH    = isCenter ? 168 : 124;
  const nameSz  = isCenter ? 20 : 14;
  const statSz  = isCenter ? 12 : 10;
  const iconSz  = isCenter ? 36 : 27;
  const badgeSz = isCenter ? 12 : 10;
  const badgePad = isCenter ? '5px 18px' : '4px 12px';

  const orbitSize = 220;

  return (
    <div
      className={`sg-card-shell${isCenter ? ' is-center' : ''}`}
      style={{
        width:     width,
        transform: `translate(-50%,-50%) translateX(${tx}px) translateY(${ty}px) scale(${scale})`,
        zIndex,
        opacity,
        cursor: isCenter ? 'default' : 'pointer',
        ...style
      }}
      onClick={onClick}
    >
      <div className="sg-card">

        {isCenter && (
          <>
            <div
              className="sg-orbit-ring"
              style={{
                width: orbitSize, height: orbitSize,
                top: '50%', left: '50%',
                marginTop: -orbitSize / 2, marginLeft: -orbitSize / 2,
                animation: 'spinSlow 10s linear infinite',
                zIndex: -1,
              }}
            />
            <div
              className="sg-orbit-ring"
              style={{
                width: orbitSize + 40, height: orbitSize + 40,
                top: '50%', left: '50%',
                marginTop: -(orbitSize + 40) / 2, marginLeft: -(orbitSize + 40) / 2,
                animation: 'spinRev 14s linear infinite',
                zIndex: -1,
              }}
            />
            <div className="sg-pulse-ring" style={{ width: 90, height: 90, marginTop: -45, marginLeft: -45 }} />
            <div className="sg-pulse-ring" style={{ width: 90, height: 90, marginTop: -45, marginLeft: -45, animationDelay: '1.1s' }} />
          </>
        )}

        <div className="sg-card-inner">
          <span className="sg-badge" style={{ fontSize: badgeSz, padding: badgePad }}>
            {guru.label}
          </span>

          <div className="sg-top" style={{ height: topH }}>
            <div className="sg-top-stripe" />
            {isCenter && <div className="sg-shimmer" />}

            <svg
              viewBox="0 0 300 36"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: -1, left: 0, right: 0, width: '100%', height: 36, zIndex: 3 }}
            >
              <path d="M0,36 Q75,0 150,20 Q225,36 300,10 L300,36 Z" fill="#fff" />
            </svg>

            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: '#00b8d9', opacity: 0.18, borderRadius: '50% 50% 0 0', zIndex: 2 }} />

            <img
              className="sg-avatar"
              src={guru.avatar}
              alt={guru.name}
              style={{ height: avatarH, width: avatarH }}
            />
          </div>

          <div className="sg-body">
            <div className="sg-name" style={{ fontSize: nameSz }}>{guru.name}</div>
            <div className="sg-stats">
              <div className="sg-stat">
                <div className="sg-stat-icon" style={{ width: iconSz, height: iconSz }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="14" height="16" rx="3" fill="#1e3a5f" />
                    <path d="M16 9l6-3v12l-6-3V9z" fill="#00b8d9" />
                  </svg>
                </div>
                <span className="sg-stat-label" style={{ fontSize: statSz }}>
                  <b>{guru.videos}</b> Videos
                </span>
              </div>

              <div className="sg-divider" style={{ height: isCenter ? 36 : 28 }} />

              <div className="sg-stat">
                <div className="sg-stat-icon" style={{ width: iconSz, height: iconSz }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="12" rx="10" ry="6" stroke="#1e3a5f" strokeWidth="1.8" fill="none" />
                    <circle cx="12" cy="12" r="3" fill="#00b8d9" />
                  </svg>
                </div>
                <span className="sg-stat-label" style={{ fontSize: statSz }}>
                  <b>{guru.views}</b> Views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SeekhoGurus() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [key, setKey]             = useState(0);
  const [isMobile, setIsMobile]   = useState(window.innerWidth < 768);
  const timerRef = useRef(null);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx(p => (p + 1) % N);
    }, 3200);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const go = (idx) => {
    setActiveIdx(idx);
    setKey(k => k + 1);
    resetTimer();
  };

  const positions = gurus.map((_, i) => getOffset(i, activeIdx));

  return (
    <>
      <style>{`
        ${STYLES}
        @media (max-width: 767px) {
          .sg-root { padding: 0 0 40px; }
          .sg-carousel { height: 340px; }
          .sg-heading { font-size: 28px; }
          .sg-sub { font-size: 15px; }
        }
      `}</style>

      <section className="sg-root mt-0 md:mt-[-100px]">
        {/* Background orbs */}
        <div className="sg-orb" style={{ width: 340, height: 340, top: -100, left: -80, background: '#00b8d90d', animationDelay: '0s' }} />
        <div className="sg-orb" style={{ width: 260, height: 260, bottom: -80, right: -60, background: '#1e3a5f0a', animationDelay: '3s' }} />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="sg-particle"
            style={{
              width: p.size, height: p.size,
              top: p.top, left: p.left,
              background: i % 2 === 0 ? '#00b8d9' : '#1e3a5f',
              opacity: 0.4,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}

        <h2 className="sg-heading">MultiClout Gurus</h2>
        <p className="sg-sub">Learn from the best</p>

        <div className="sg-carousel">
          {gurus.map((guru, i) => {
            const offset = positions[i];
            const isCenter = offset === 0;
            const absOff   = Math.abs(offset);
            
            // mobile logic: reduce width and spacing
            let txMultiplier = isMobile ? 120 : 275;
            let txScale      = isMobile ? (isCenter ? 1 : 0.7) : (isCenter ? 1.14 : absOff === 1 ? 0.87 : 0.7);

            return (
              <GuruCard
                key={`${guru.id}-${i === activeIdx ? key : 0}`}
                guru={guru}
                offset={offset}
                onClick={() => positions[i] !== 0 && go(i)}
                // we override styles for mobile inside GuruCard or here
                style={{
                  width: isMobile ? (isCenter ? 240 : 180) : undefined,
                  transform: `translate(-50%,-50%) translateX(${offset * txMultiplier}px) translateY(${absOff === 1 ? 40 : absOff === 2 ? 72 : 0}px) scale(${txScale})`,
                }}
              />
            );
          })}
        </div>

        <div className="sg-nav-row">
          <button className="sg-nav-btn" onClick={() => go((activeIdx - 1 + N) % N)}>&#8249;</button>

          <div className="sg-dots">
            {gurus.map((_, i) => (
              <button
                key={i}
                className="sg-dot"
                onClick={() => go(i)}
                style={{
                  width: i === activeIdx ? 24 : 8,
                  background: i === activeIdx ? '#00b8d9' : '#c8dcea',
                  animation: i === activeIdx ? 'dotPulse 1.5s ease-in-out infinite' : 'none',
                }}
              />
            ))}
          </div>

          <button className="sg-nav-btn" onClick={() => go((activeIdx + 1) % N)}>&#8250;</button>
        </div>
      </section>
    </>
  );
}