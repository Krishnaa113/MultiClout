
// // //hero and navbar same 

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth.jsx';

// const NAV_LINKS = [
//   { to: '/',           label: 'Home' },
//   { to: '/features',   label: 'Features' },
//   { to: '/categories', label: 'Categories' },
//   { to: '/about',      label: 'About Us' },
// ];

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [isScrolled, setIsScrolled]         = useState(false);
//   const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
//   const [activeLink, setActiveLink]         = useState('/');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 24);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // close mobile on resize
//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   const handleLogout = () => { logout(); navigate('/login'); };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

//         .mc-nav * { box-sizing: border-box; font-family: Inter, system-ui, sans-serif; }

//         /* ── header states ── */
//         .mc-nav {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 50;
//           transition: background 0.35s ease, box-shadow 0.35s ease, padding 0.35s ease;
//           padding: 20px 0;
//           background: transparent;
//         }
//         .mc-nav.scrolled {
//           padding: 10px 0;
//           background: rgba(11, 22, 40, 0.82);
//           backdrop-filter: blur(20px) saturate(180%);
//           -webkit-backdrop-filter: blur(20px) saturate(180%);
//           box-shadow: 0 1px 0 rgba(0,198,215,0.12), 0 8px 32px rgba(0,0,0,0.28);
//         }
//         .mc-nav.light {
//           background: #ffffff;
//           box-shadow: 0 1px 0 #e8eef4, 0 4px 16px rgba(30,58,95,0.06);
//           padding: 12px 0;
//         }

//         /* ── inner ── */
//         .mc-inner {
//           max-width: 1200px; margin: 0 auto;
//           padding: 0 32px;
//           display: flex; align-items: center; justify-content: space-between;
//           gap: 24px;
//         }

//         /* ── logo ── */
//         .mc-logo {
//           display: flex; align-items: center; gap: 10px;
//           text-decoration: none; flex-shrink: 0;
//           transition: opacity 0.2s;
//         }
//         .mc-logo:hover { opacity: 0.85; }
//         .mc-logo img { height: 40px; width: auto; object-fit: contain; }

//         /* ── desktop nav links ── */
//         .mc-links {
//           display: flex; align-items: center; gap: 4px;
//           list-style: none; margin: 0; padding: 0;
//         }
//         .mc-link {
//           position: relative;
//           text-decoration: none;
//           font-size: 14px; font-weight: 500;
//           padding: 8px 14px; border-radius: 10px;
//           transition: color 0.2s, background 0.2s;
//           letter-spacing: 0.01em;
//           white-space: nowrap;
//         }
//         /* on transparent/dark nav */
//         .mc-nav:not(.light) .mc-link         { color: rgba(255,255,255,0.7); }
//         .mc-nav:not(.light) .mc-link:hover   { color: #fff; background: rgba(255,255,255,0.08); }
//         .mc-nav:not(.light) .mc-link.active  { color: #00c6d7; background: rgba(0,198,215,0.1); }
//         /* on light nav */
//         .mc-nav.light .mc-link               { color: #4a6580; }
//         .mc-nav.light .mc-link:hover         { color: #1e3a5f; background: #f0f5fa; }
//         .mc-nav.light .mc-link.active        { color: #00b8d9; background: #e6f9fc; }

//         /* active dot indicator */
//         .mc-link.active::after {
//           content: '';
//           position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
//           width: 4px; height: 4px; border-radius: 50%;
//           background: #00c6d7;
//         }
//         .mc-nav.light .mc-link.active::after { background: #00b8d9; }

//         /* ── actions ── */
//         .mc-actions {
//           display: flex; align-items: center; gap: 10px; flex-shrink: 0;
//         }

//         /* ghost login button */
//         .mc-btn-ghost {
//           text-decoration: none; font-size: 14px; font-weight: 500;
//           padding: 8px 16px; border-radius: 10px;
//           transition: background 0.2s, color 0.2s;
//           white-space: nowrap;
//           border: none; background: none; cursor: pointer;
//         }
//         .mc-nav:not(.light) .mc-btn-ghost         { color: rgba(255,255,255,0.75); }
//         .mc-nav:not(.light) .mc-btn-ghost:hover   { color: #fff; background: rgba(255,255,255,0.08); }
//         .mc-nav.light .mc-btn-ghost               { color: #4a6580; }
//         .mc-nav.light .mc-btn-ghost:hover         { color: #1e3a5f; background: #f0f5fa; }

//         /* primary CTA */
//         .mc-btn-primary {
//           display: inline-flex; align-items: center; gap: 8px;
//           text-decoration: none; font-size: 14px; font-weight: 700;
//           padding: 10px 22px; border-radius: 999px;
//           background: linear-gradient(135deg, #00c6d7, #0e7fa8);
//           color: #fff; border: none; cursor: pointer;
//           box-shadow: 0 4px 18px rgba(0,198,215,0.3);
//           transition: transform 0.22s ease, box-shadow 0.22s ease;
//           white-space: nowrap; letter-spacing: 0.01em;
//         }
//         .mc-btn-primary:hover {
//           transform: translateY(-2px) scale(1.03);
//           box-shadow: 0 8px 28px rgba(0,198,215,0.45);
//         }
//         .mc-btn-primary:active { transform: scale(0.98); }

//         /* logout */
//         .mc-btn-logout {
//           display: inline-flex; align-items: center; gap: 6px;
//           font-size: 14px; font-weight: 600;
//           padding: 10px 20px; border-radius: 999px;
//           border: 1.5px solid rgba(0,198,215,0.4);
//           background: rgba(0,198,215,0.08);
//           color: #00c6d7; cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, transform 0.2s;
//           white-space: nowrap;
//         }
//         .mc-btn-logout:hover {
//           background: rgba(0,198,215,0.16);
//           border-color: rgba(0,198,215,0.7);
//           transform: translateY(-1px);
//         }
//         .mc-nav.light .mc-btn-logout {
//           border-color: rgba(0,184,217,0.35);
//           background: rgba(0,184,217,0.06);
//           color: #0099bb;
//         }

//         /* dashboard link */
//         .mc-btn-dashboard {
//           text-decoration: none; font-size: 14px; font-weight: 500;
//           padding: 8px 14px; border-radius: 10px;
//           transition: background 0.2s, color 0.2s;
//         }
//         .mc-nav:not(.light) .mc-btn-dashboard       { color: rgba(255,255,255,0.7); }
//         .mc-nav:not(.light) .mc-btn-dashboard:hover { color: #fff; background: rgba(255,255,255,0.08); }
//         .mc-nav.light .mc-btn-dashboard             { color: #4a6580; }
//         .mc-nav.light .mc-btn-dashboard:hover       { color: #1e3a5f; background: #f0f5fa; }

//         /* ── hamburger ── */
//         .mc-hamburger {
//           display: none; flex-direction: column; gap: 5px;
//           background: none; border: none; padding: 8px;
//           border-radius: 10px; cursor: pointer;
//           transition: background 0.2s;
//         }
//         .mc-hamburger:hover { background: rgba(255,255,255,0.08); }
//         .mc-nav.light .mc-hamburger:hover { background: #f0f5fa; }
//         .mc-bar {
//           width: 22px; height: 2px; border-radius: 2px;
//           transition: transform 0.28s ease, opacity 0.28s ease, width 0.28s ease;
//         }
//         .mc-nav:not(.light) .mc-bar { background: rgba(255,255,255,0.85); }
//         .mc-nav.light .mc-bar { background: #1e3a5f; }
//         .mc-hamburger.open .mc-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
//         .mc-hamburger.open .mc-bar:nth-child(2) { opacity: 0; width: 0; }
//         .mc-hamburger.open .mc-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

//         @media (max-width: 767px) {
//           .mc-hamburger { display: flex; }
//           .mc-links     { display: none; }
//           .mc-btn-ghost.desktop-only { display: none; }
//           .mc-btn-dashboard.desktop-only { display: none; }
//         }

//         /* ── mobile drawer ── */
//         .mc-drawer {
//           position: absolute; top: 100%; left: 0; right: 0;
//           background: rgba(10, 20, 38, 0.97);
//           backdrop-filter: blur(24px);
//           -webkit-backdrop-filter: blur(24px);
//           border-top: 1px solid rgba(0,198,215,0.12);
//           padding: 16px 24px 24px;
//           display: flex; flex-direction: column; gap: 4px;
//           box-shadow: 0 24px 48px rgba(0,0,0,0.4);
//           transform-origin: top;
//           animation: drawerIn 0.25s ease both;
//         }
//         .mc-nav.light .mc-drawer {
//           background: rgba(255,255,255,0.98);
//           border-top: 1px solid #e8eef4;
//           box-shadow: 0 16px 32px rgba(30,58,95,0.1);
//         }
//         @keyframes drawerIn {
//           from { opacity: 0; transform: translateY(-8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .mc-drawer-link {
//           display: flex; align-items: center; gap: 10px;
//           text-decoration: none; font-size: 15px; font-weight: 500;
//           padding: 12px 14px; border-radius: 12px;
//           transition: background 0.18s, color 0.18s;
//         }
//         .mc-nav:not(.light) .mc-drawer-link       { color: rgba(255,255,255,0.75); }
//         .mc-nav:not(.light) .mc-drawer-link:hover { color: #fff; background: rgba(255,255,255,0.07); }
//         .mc-nav.light .mc-drawer-link             { color: #374151; }
//         .mc-nav.light .mc-drawer-link:hover       { color: #1e3a5f; background: #f0f5fa; }
//         .mc-drawer-divider {
//           height: 1px; margin: 8px 0;
//           background: rgba(255,255,255,0.08);
//         }
//         .mc-nav.light .mc-drawer-divider { background: #e8eef4; }
//         .mc-drawer-cta {
//           margin-top: 8px;
//           background: linear-gradient(135deg, #00c6d7, #0e7fa8);
//           color: #fff; font-weight: 700; font-size: 15px;
//           padding: 13px 20px; border-radius: 14px;
//           text-decoration: none; text-align: center;
//           box-shadow: 0 4px 18px rgba(0,198,215,0.3);
//         }
//       `}</style>

//       <header className={`mc-nav${isScrolled ? ' scrolled' : ''}`}>
//         <div className="mc-inner">

//           {/* LOGO */}
//           <Link to="/" className="mc-logo" onClick={() => setActiveLink('/')}>
//             <img src="/logo.png" alt="Multiclout" />
//           </Link>

//           {/* DESKTOP NAV */}
//           <ul className="mc-links">
//             {NAV_LINKS.map(({ to, label }) => (
//               <li key={to}>
//                 <Link
//                   to={to}
//                   className={`mc-link${activeLink === to ? ' active' : ''}`}
//                   onClick={() => setActiveLink(to)}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* ACTIONS */}
//           <div className="mc-actions">
//             {user ? (
//               <>
//                 <Link to="/dashboard" className="mc-btn-dashboard desktop-only" onClick={() => setActiveLink('/dashboard')}>
//                   Dashboard
//                 </Link>
//                 <button onClick={handleLogout} className="mc-btn-logout">
//                   <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                   </svg>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="mc-btn-ghost desktop-only" onClick={() => setActiveLink('/login')}>
//                   Login
//                 </Link>
//                 <Link to="/register" className="mc-btn-primary">
//                   <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                   </svg>
//                   Download App
//                 </Link>
//               </>
//             )}

//             {/* HAMBURGER */}
//             <button
//               className={`mc-hamburger${isMobileMenuOpen ? ' open' : ''}`}
//               onClick={() => setIsMobileOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <span className="mc-bar" />
//               <span className="mc-bar" />
//               <span className="mc-bar" />
//             </button>
//           </div>
//         </div>

//         {/* MOBILE DRAWER */}
//         {isMobileMenuOpen && (
//           <div className="mc-drawer">
//             {NAV_LINKS.map(({ to, label }) => (
//               <Link
//                 key={to}
//                 to={to}
//                 className="mc-drawer-link"
//                 onClick={() => { setActiveLink(to); setIsMobileOpen(false); }}
//               >
//                 {label}
//               </Link>
//             ))}
//             <div className="mc-drawer-divider" />
//             {user ? (
//               <>
//                 <Link to="/dashboard" className="mc-drawer-link" onClick={() => setIsMobileOpen(false)}>Dashboard</Link>
//                 <button onClick={() => { handleLogout(); setIsMobileOpen(false); }} className="mc-drawer-link" style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%' }}>Logout</button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="mc-drawer-link" onClick={() => { setActiveLink('/login'); setIsMobileOpen(false); }}>Login</Link>
//                 <Link to="/register" className="mc-drawer-cta" onClick={() => setIsMobileOpen(false)}>
//                   Download Multiclout App
//                 </Link>
//               </>
//             )}
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Navbar;














import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const NAV_LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/franchise',  label: 'Franchise' },
  { to: '/categories', label: 'Training Program', isDropdown: true },
  { to: '/about',      label: 'About Us' },
];

const Navbar = () => {
  const { user, logout }            = useAuth();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLogout = () => { logout(); navigate('/login'); };
  const active       = (to) => location.pathname === to;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .xnb * { box-sizing: border-box; font-family: Inter, system-ui, sans-serif; }

        /* ── wrapper: full width navbar ── */
        .xnb {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; justify-content: center;
          padding: 0;
          margin-top: 0;
          pointer-events: none;
          transition: all 0.4s ease;
        }
        .xnb.scrolled { margin-top: 0; }

        /* ── full width navbar bar ── */
        .xnb-island {
          pointer-events: all;
          width: 100%;
          height: 64px;
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          border-radius: 0;
          background: rgba(255,255,255,0.95);
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .xnb.scrolled .xnb-island {
          background: rgba(10, 18, 35, 0.88);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        /* ── logo ── */
        .xnb-logo {
          display: flex; align-items: center;
          text-decoration: none; flex-shrink: 0;
          transition: opacity 0.2s;
          font-size: 20px;
          font-weight: 700;
          color: #1e3a5f;
        }
        .xnb-logo:hover { opacity: 0.8; }
        .xnb-logo img { height: 48px; width: auto; object-fit: contain; margin-right: 8px; }

        /* ── links ── */
        .xnb-links {
          display: flex; align-items: center; gap: 8px;
          list-style: none; margin: 0; padding: 0;
          flex: 1; justify-content: center;
        }
        .xnb-link {
          position: relative;
          text-decoration: none;
          font-size: 15px; font-weight: 500;
          color: #4a5568;
          padding: 8px 16px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .xnb-link:hover {
          color: #1e3a5f;
          background: rgba(30, 58, 95, 0.1);
        }
        .xnb-link.active {
          color: #00c6d7;
          background: rgba(0, 198, 215, 0.1);
        }
        
        /* ── dropdown ── */
        .xnb-dropdown-wrap { position: relative; }
        .xnb-dropdown-btn { cursor: pointer; display: flex; align-items: center; gap: 4px; border:none; background:transparent;}
        .caret { font-size: 10px; transition: transform 0.2s; margin-left: 2px;}
        .xnb-dropdown-wrap:hover .caret { transform: rotate(180deg); }
        .xnb-dropdown-menu {
          position: absolute; top: calc(100% + 4px); left: 50%; transform: translateX(-50%) translateY(8px);
          opacity: 0; visibility: hidden; pointer-events: none;
          background: #fff; border: 1px solid rgba(0,0,0,0.06);
          border-radius: 12px; padding: 8px 0; min-width: 220px;
          box-shadow: 0 12px 32px rgba(30,58,95,0.12);
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          display: flex; flex-direction: column;
        }
        .xnb-dropdown-wrap:hover .xnb-dropdown-menu {
          opacity: 1; visibility: visible; pointer-events: auto; transform: translateX(-50%) translateY(0);
        }
        .xnb.scrolled .xnb-dropdown-menu {
          background: rgba(15, 23, 42, 0.98); border-color: rgba(255,255,255,0.1); box-shadow: 0 12px 32px rgba(0,0,0,0.4);
        }
        .xnb-dropdown-item {
          padding: 10px 20px; text-decoration: none; font-size: 15px;
          font-weight: 500; color: #1e3a5f; transition: background 0.15s, color 0.15s;
        }
        .xnb.scrolled .xnb-dropdown-item { color: rgba(255,255,255,0.8); }
        .xnb-dropdown-item:hover { background: rgba(0,198,215,0.08); color: #00c6d7; }

        /* Scrolled state hover effects for nav links */
        .xnb.scrolled .xnb-link:hover {
          color: #00c6d7;
          background: rgba(0, 198, 215, 0.1);
        }

        /* ── actions ── */
        .xnb-actions {
          display: flex; align-items: center; gap: 6px; flex-shrink: 0;
        }

        .xnb-ghost {
          text-decoration: none; font-size: 14px; font-weight: 500;
          color: #4a5568; padding: 8px 16px; border-radius: 8px;
          border: none; background: none; cursor: pointer;
          transition: color 0.2s, background 0.2s; white-space: nowrap;
        }
        .xnb-ghost:hover { color: #1e3a5f; background: rgba(30, 58, 95, 0.1); }
        
        /* Scrolled state hover effects */
        .xnb.scrolled .xnb-ghost:hover { color: #00c6d7; background: rgba(0, 198, 215, 0.1); }

        /* CTA — outlined style, clean */
        .xnb-cta {
          display: inline-flex; align-items: center; gap: 7px;
          text-decoration: none; font-size: 13px; font-weight: 600;
          letter-spacing: 0.02em; padding: 8px 18px; border-radius: 10px;
          border: 1.5px solid rgba(0,198,215,0.7);
          background: transparent; color: #00c6d7;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.2s ease;
          white-space: nowrap;
        }
        .xnb-cta:hover {
          background: #00c6d7;
          color: #0b1628;
          border-color: #00c6d7;
          transform: translateY(-1px);
        }
        .xnb-cta:active { transform: scale(0.97); }

        .xnb-dashboard {
          text-decoration: none; font-size: 14px; font-weight: 500;
          color: #4a5568; padding: 8px 16px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .xnb-dashboard:hover { color: #1e3a5f; background: rgba(30, 58, 95, 0.1); }

        .xnb-logout {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 14px; font-weight: 500; padding: 8px 16px; border-radius: 8px;
          border: 1.5px solid rgba(0,198,215,0.4); background: transparent;
          color: #00c6d7; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .xnb-logout:hover { border-color: rgba(0,198,215,0.7); color: #00a8b8; background: rgba(0,198,215,0.08); }

        /* ── burger ── */
        .xnb-burger {
          display: none; flex-direction: column;
          justify-content: center; gap: 4.5px;
          width: 36px; height: 36px;
          background: none; border: none; cursor: pointer;
          border-radius: 10px; padding: 8px;
          transition: background 0.2s; flex-shrink: 0;
        }
        .xnb-burger:hover { background: rgba(30, 58, 95, 0.05); }
        .xnb.scrolled .xnb-burger:hover { background: rgba(255,255,255,0.1); }
        
        .xnb-bar {
          height: 1.8px; border-radius: 2px; background: #1e3a5f;
          transition: transform 0.26s ease, opacity 0.2s ease, width 0.26s ease;
        }
        .xnb.scrolled .xnb-bar { background: rgba(255,255,255,0.85); }
        
        .xnb-bar:nth-child(2) { width: 65%; }
        .xnb-burger.open .xnb-bar { background: #00c6d7 !important; }
        .xnb-burger.open .xnb-bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .xnb-burger.open .xnb-bar:nth-child(2) { opacity: 0; width: 0; }
        .xnb-burger.open .xnb-bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        @media (max-width: 767px) {
          .xnb-burger { display: flex; }
          .xnb-links  { display: none; }
          .xnb-ghost.d, .xnb-dashboard.d { display: none; }
          .xnb { padding: 0; }
          .xnb-island { padding: 0 16px; height: 60px; border-radius: 0; width: 100%; border-bottom: 1px solid rgba(0,0,0,0.08); }
          .xnb-logo img { height: 36px; max-width: 150px; margin-right: 2px; }
          .xnb-logo { font-size: 17px; }
          .xnb-cta { display: none; }
        }

        /* ── mobile overlay ── */
        .xnb-overlay {
          position: fixed; inset: 0; z-index: 49;
          background: rgba(5, 10, 22, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: xFadeIn 0.35s ease both;
        }
        @keyframes xFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }

        /* ── mobile drawer — slides from top ── */
        .xnb-drawer {
          position: fixed; top: 0; left: 12px; right: 12px; z-index: 50;
          background: #0d1e36;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 16px 16px 20px;
          animation: xDrawerDrop 0.28s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes xDrawerDrop {
          from { opacity: 0; transform: translateY(-20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* drawer header */
        .xnb-dhead {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 4px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 8px;
        }
        .xnb-dlogo img { height: 32px; object-fit: contain; }
        .xnb-dclose {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,0.07); border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); transition: background 0.2s, color 0.2s;
        }
        .xnb-dclose:hover { background: rgba(255,255,255,0.12); color: #fff; }

        .xnb-dlink {
          display: flex; align-items: center; justify-content: space-between;
          text-decoration: none; font-size: 15px; font-weight: 500;
          color: rgba(255,255,255,0.6);
          padding: 13px 8px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.18s;
        }
        .xnb-dlink:last-of-type { border-bottom: none; }
        .xnb-dlink:hover { color: #fff; }
        .xnb-dlink.active { color: #00c6d7; }
        .xnb-dlink .arrow {
          font-size: 11px; color: rgba(255,255,255,0.2);
          transition: transform 0.2s, color 0.2s;
        }
        .xnb-dlink:hover .arrow, .xnb-dlink.active .arrow {
          transform: translateX(3px); color: #00c6d7;
        }
        .xnb-dsublink {
          display: block; text-decoration: none; font-size: 14px; font-weight: 500;
          color: rgba(255,255,255,0.45); padding: 8px 8px 8px 24px;
          transition: color 0.2s; border-left: 1px solid rgba(255,255,255,0.1); margin-left: 14px;
        }
        .xnb-dsublink:hover { color: #00c6d7; }
        .xnb-ddivider { height: 1px; background: rgba(255,255,255,0.07); margin: 10px 0; }
        .xnb-dcta {
          display: block; text-align: center; text-decoration: none;
          font-size: 14px; font-weight: 600; letter-spacing: 0.02em;
          padding: 14px; border-radius: 12px;
          border: 1.5px solid rgba(0,198,215,0.6);
          color: #00c6d7; background: transparent;
          margin-top: 8px; transition: background 0.2s, color 0.2s;
        }
        .xnb-dcta:hover { background: #00c6d7; color: #0b1628; }
      `}</style>

      {/* overlay behind drawer */}
      {mobileOpen && (
        <div className="xnb-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* mobile drawer — separate from island */}
      {mobileOpen && (
        <div className="xnb-drawer">
          <div className="xnb-dhead">
            <Link to="/" className="xnb-dlogo" onClick={() => setMobileOpen(false)}>
              <img src="/logo.png" alt="Multiclout" />
            </Link>
            <button className="xnb-dclose" onClick={() => setMobileOpen(false)}>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {NAV_LINKS.map(({ to, label, isDropdown }) => (
            <React.Fragment key={to}>
              <Link to={to} className={`xnb-dlink${active(to) ? ' active' : ''}`} onClick={() => setMobileOpen(false)}>
                {label}
                <span className="arrow">{isDropdown ? '▼' : '›'}</span>
              </Link>
              {isDropdown && (
                <div style={{ marginBottom: 12 }}>
                  <Link to="/course/1" className="xnb-dsublink" onClick={() => setMobileOpen(false)}>Marketing Mastery</Link>
                  <Link to="/course/2" className="xnb-dsublink" onClick={() => setMobileOpen(false)}>Branding Mastery</Link>
                  <Link to="/course/3" className="xnb-dsublink" onClick={() => setMobileOpen(false)}>Traffic Mastery</Link>
                  <Link to="/course/4" className="xnb-dsublink" onClick={() => setMobileOpen(false)}>Business Mastery</Link>
                  <Link to="/course/5" className="xnb-dsublink" onClick={() => setMobileOpen(false)}>Automation Mastery</Link>
                </div>
              )}
            </React.Fragment>
          ))}

          <div className="xnb-ddivider" />
          {user ? (
            <>
              <Link to="/dashboard" className="xnb-dlink" onClick={() => setMobileOpen(false)}>
                Dashboard <span className="arrow">›</span>
              </Link>
              <button
                onClick={() => { handleLogout(); setMobileOpen(false); }}
                style={{ background:'none', border:'none', width:'100%', textAlign:'left',
                  cursor:'pointer', color:'rgba(255,255,255,0.55)', fontSize:15, fontWeight:500,
                  padding:'13px 8px', fontFamily:'Inter,system-ui,sans-serif' }}
              >Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="xnb-dlink" onClick={() => setMobileOpen(false)}>
                Login <span className="arrow">›</span>
              </Link>
              <Link to="/register" className="xnb-dcta" onClick={() => setMobileOpen(false)}>
                Download Multiclout App
              </Link>
            </>
          )}
        </div>
      )}

      {/* floating island */}
      <div className={`xnb${scrolled ? ' scrolled' : ''}`}>
        <div className="xnb-island">

          <Link to="/" className="xnb-logo">
            <img src="/logo.png" alt="Multiclout" />
          </Link>

          <ul className="xnb-links">
            {NAV_LINKS.map(({ to, label, isDropdown }) => (
              <li key={to} className={isDropdown ? "xnb-dropdown-wrap" : ""}>
                {isDropdown ? (
                  <>
                    <div className={`xnb-link xnb-dropdown-btn${active(to) ? ' active' : ''}`}>
                      {label} <span className="caret">▼</span>
                    </div>
                    <div className="xnb-dropdown-menu">
                      <Link to="/course/1" className="xnb-dropdown-item">Marketing Mastery</Link>
                      <Link to="/course/2" className="xnb-dropdown-item">Branding Mastery</Link>
                      <Link to="/course/3" className="xnb-dropdown-item">Traffic Mastery</Link>
                      <Link to="/course/4" className="xnb-dropdown-item">Business Mastery</Link>
                      <Link to="/course/5" className="xnb-dropdown-item">Automation Mastery</Link>
                    </div>
                  </>
                ) : (
                  <Link to={to} className={`xnb-link${active(to) ? ' active' : ''}`}>{label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="xnb-actions">
            {user ? (
              <>
                <Link to="/dashboard" className="xnb-dashboard d">Dashboard</Link>
                <button onClick={handleLogout} className="xnb-logout">
                  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="xnb-ghost d">Login</Link>
                <Link to="/register" className="xnb-cta">
                  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download App</span>
                </Link>
              </>
            )}
            <button
              className={`xnb-burger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className="xnb-bar" />
              <span className="xnb-bar" />
              <span className="xnb-bar" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;


