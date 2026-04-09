

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const STYLES = `
// @keyframes ft-fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
// @keyframes ft-bgDrift  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(14px,-10px) scale(1.05)} }
// @keyframes ft-pulse    { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.25);opacity:1} }
// @keyframes ft-shimmer  { 0%{left:-80%} 100%{left:130%} }
// @keyframes ft-glow     { 0%,100%{opacity:.12} 50%{opacity:.22} }
// @keyframes ft-spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
// @keyframes ft-linkIn   { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
// @keyframes ft-socialPop{ 0%{transform:scale(0.6);opacity:0} 70%{transform:scale(1.12)} 100%{transform:scale(1);opacity:1} }
// @keyframes ft-dotBlink { 0%,100%{opacity:1} 50%{opacity:.3} }

// .ft-root{
//   background: #1e3a5f;
//   position: relative;
//   overflow: hidden;
//   font-family: Inter, system-ui, -apple-system, sans-serif;
// }

// /* top cyan stripe */
// .ft-top-stripe{
//   height: 3px;
//   background: #00b8d9;
//   width: 100%;
// }

// /* ambient orbs */
// .ft-orb{
//   position: absolute; border-radius:50%; pointer-events:none;
//   animation: ft-bgDrift 10s ease-in-out infinite;
// }

// .ft-inner{
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 64px 32px 0;
//   position: relative;
//   z-index: 2;
// }

// /* ── brand column ── */
// .ft-brand-desc{
//   font-size: 15px;
//   line-height: 1.6;
//   color: rgba(255,255,255,.55);
//   margin: 16px 0 24px;
//   font-weight: 500;
// }

// .ft-social-row{ display:flex; gap:12px; }
// .ft-social-btn{
//   width:44px; height:44px; border-radius:50%;
//   background: rgba(255,255,255,.08);
//   border: 1px solid rgba(255,255,255,.15);
//   display:flex; align-items:center; justify-content:center;
//   color: rgba(255,255,255,.7);
//   cursor:pointer;
//   transition: all .22s ease;
//   animation: ft-socialPop .5s ease both;
// }
// .ft-social-btn:hover{
//   background: #00b8d9;
//   border-color: #00b8d9;
//   color: #fff;
//   transform: translateY(-3px) scale(1.08);
// }

// /* ── columns ── */
// .ft-grid{
//   display: grid;
//   grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
//   gap: 40px;
//   padding-bottom: 56px;
// }
// @media(max-width:1024px){ .ft-grid{ grid-template-columns: 1.2fr 1fr 1fr; } }
// @media(max-width:768px){ 
//   .ft-grid{ grid-template-columns: 1fr 1fr; gap: 32px; }
//   .ft-root { padding: 56px 0 24px; }
//   .ft-inner { padding: 0 24px; }
// }
// @media(max-width:480px){ 
//   .ft-grid{ grid-template-columns: 1fr; gap: 40px; }
//   .ft-bottom { justify-content: center; text-align: center; }
// }

// .ft-col-heading{
//   font-size: 13px;
//   font-weight: 800;
//   color: #fff;
//   letter-spacing: .1em;
//   text-transform: uppercase;
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
//   gap: 8px;
// }
// .ft-col-heading::before{
//   content:'';
//   display:inline-block;
//   width:14px; height:2px;
//   background:#00b8d9;
//   border-radius:2px;
//   flex-shrink:0;
// }

// .ft-links{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
// .ft-link{
//   font-size: 14px;
//   font-weight: 500;
//   color: rgba(255,255,255,.55);
//   text-decoration: none;
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   transition: color .2s, transform .2s;
//   animation: ft-linkIn .4s ease both;
// }
// .ft-link:hover{ color:#00b8d9; transform:translateX(4px); }
// .ft-link-arrow{
//   opacity:0;
//   font-size:12px;
//   transition:opacity .2s, transform .2s;
// }
// .ft-link:hover .ft-link-arrow{ opacity:1; transform:translateX(2px); }

// /* contact items */
// .ft-contact-item{
//   display:flex; align-items:flex-start; gap:12px;
//   margin-bottom:16px;
//   text-decoration: none;
// }
// .ft-contact-icon{
//   width:36px; height:36px; border-radius:12px;
//   background: rgba(0,184,217,.12);
//   border:1px solid rgba(0,184,217,.25);
//   display:flex; align-items:center; justify-content:center;
//   flex-shrink:0;
//   transition:all .2s ease;
// }
// .ft-contact-item:hover .ft-contact-icon{
//   background:#00b8d9; border-color:#00b8d9; transform:scale(1.08);
// }
// .ft-contact-item:hover .ft-contact-icon svg{ stroke:#fff; }
// .ft-contact-text{
//   font-size: 14px;
//   font-weight: 500;
//   color: rgba(255,255,255,.55);
//   line-height: 1.5;
//   transition:color .2s;
// }
// .ft-contact-item:hover .ft-contact-text{ color:#00b8d9; }

// /* live dot */
// .ft-live-dot{
//   display:inline-block; width:8px; height:8px; border-radius:50%;
//   background:#00b8d9; margin-right:8px;
//   animation:ft-dotBlink 2s ease-in-out infinite;
// }

// /* ── divider ── */
// .ft-divider{
//   border:none;
//   border-top:1px solid rgba(255,255,255,.1);
//   margin:0;
// }

// /* ── bottom bar ── */
// .ft-bottom{
//   max-width:1200px; margin:0 auto;
//   padding:20px 32px;
//   display:flex; align-items:center; justify-content:space-between;
//   flex-wrap:wrap; gap:12px;
//   position:relative; z-index:2;
// }
// .ft-copy{
//   font-size: 13px;
//   font-weight: 500;
//   color: rgba(255,255,255,.4);
// }
// .ft-copy b{ color: rgba(255,255,255,.7); font-weight:700; }

// .ft-made-by{
//   display:flex; align-items:center; gap:7px;
//   font-size: 12px;
//   font-weight: 800;
//   color: rgba(255,255,255,.4);
//   letter-spacing:.08em; text-transform:uppercase;
//   cursor:pointer; text-decoration:none;
//   transition:color .2s;
// }
// .ft-made-by:hover{ color:#00b8d9; }
// .ft-made-by-dot{
//   width:6px; height:6px; border-radius:50%; background:#00b8d9;
//   animation:ft-pulse 2s ease-in-out infinite;
// }

// /* newsletter badge */
// .ft-newsletter{
//   background: rgba(0,184,217,.1);
//   border:1px solid rgba(0,184,217,.2);
//   border-radius:20px;
//   padding:20px;
//   margin-top:4px;
// }
// .ft-newsletter-label{
//   font-size: 11px;
//   font-weight: 800;
//   color: #00b8d9;
//   text-transform: uppercase;
//   letter-spacing: .1em;
//   margin-bottom: 12px;
//   display: flex;
//   align-items: center;
// }
// .ft-newsletter-row{ display:flex; gap:10px; }
// .ft-newsletter-input{
//   flex:1;
//   background: rgba(255,255,255,.08);
//   border:1px solid rgba(255,255,255,.12);
//   border-radius:999px;
//   padding: 12px 16px;
//   font-size: 13px;
//   font-weight: 500;
//   color: #fff;
//   font-family: Inter, system-ui, sans-serif;
//   outline:none;
//   transition: border-color .2s;
//   min-width:0;
// }
// .ft-newsletter-input::placeholder{ color: rgba(255,255,255,.35); font-weight:400; }
// .ft-newsletter-input:focus{ border-color:#00b8d9; }
// .ft-newsletter-btn{
//   background:#00b8d9;
//   color:#fff;
//   font-size: 13px;
//   font-weight: 800;
//   padding: 12px 22px;
//   border-radius:999px;
//   border:none;
//   cursor:pointer;
//   font-family: Inter, system-ui, sans-serif;
//   white-space:nowrap;
//   transition: background .2s, transform .15s;
// }
// .ft-newsletter-btn:hover{ background:#fff; color:#1e3a5f; transform:scale(1.04); }

// /* badge row */
// .ft-badges{ display:flex; gap:10px; flex-wrap:wrap; margin-top:20px; }
// .ft-badge{
//   display:flex; align-items:center; gap:6px;
//   background: rgba(255,255,255,.06);
//   border:1px solid rgba(255,255,255,.1);
//   border-radius:999px;
//   padding: 6px 14px;
//   font-size: 12px;
//   font-weight: 600;
//   color: rgba(255,255,255,.55);
// }
// .ft-badge span{ font-size:13px; }
// `;

// const topLinks = ['Become An Affiliate', 'End User License Agreement', 'Refund Policy', 'Disclaimer', 'Payment Transfer Terms and Conditions'];
// const company = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'];

// export default function Footer() {
//   const [email, setEmail] = useState('');
//   const [sent, setSent] = useState(false);

//   const handleSend = () => {
//     if (email.trim()) { setSent(true); setEmail(''); }
//   };

//   return (
//     <>
//       <style>{STYLES}</style>
//       <footer className="ft-root">
//         <div className="ft-top-stripe" />

//         {/* orbs */}
//         <div className="ft-orb" style={{ width: 380, height: 380, top: -140, right: -80, background: '#00b8d90d', animationDelay: '0s' }} />
//         <div className="ft-orb" style={{ width: 260, height: 260, bottom: -60, left: -60, background: '#00b8d908', animationDelay: '5s' }} />

//         <div className="ft-inner">
//           <div className="ft-grid">

//             {/* ── Brand ── */}
//             <div style={{ animation: 'ft-fadeUp .6s ease both' }}>
//               <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
//                 <div >
//                   <img src="/logo.png" alt="Multiclout" />
//                 </div>
//               </Link>

//               <p className="ft-brand-desc">
//                 India's No.1 Edutainment platform. Learn from thousands of short videos across 50+ categories curated by top experts.
//               </p>

//               <div className="ft-social-row">
//                 {[
//                   { label: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', delay: '0s' },
//                   { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z', delay: '.08s' },
//                   { label: 'YouTube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', delay: '.16s' },
//                 ].map((s, i) => (
//                   <a key={i} href="#" className="ft-social-btn" style={{ animationDelay: s.delay }} aria-label={s.label}>
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
//                   </a>
//                 ))}
//               </div>

//               {/* trust badges */}
//               <div className="ft-badges" style={{ marginTop: 20 }}>
//                 {[
//                   { icon: '🔒', text: 'Secure Payments' },
//                   { icon: '✅', text: 'ISO Certified' },
//                 ].map((b, i) => (
//                   <div key={i} className="ft-badge">
//                     <span>{b.icon}</span>
//                     {b.text}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ── Top Links ── */}
//             <div style={{ animation: 'ft-fadeUp .6s .08s ease both', opacity: 0, animationFillMode: 'forwards' }}>
//               <div className="ft-col-heading">Top Links</div>
//               <ul className="ft-links">
//                 {topLinks.map((c, i) => (
//                   <li key={i}>
//                     {c === 'Become An Affiliate' ? (
//                       <a href="/#video-grid" className="ft-link" style={{ animationDelay: `${i * 0.05}s` }}>
//                         {c}
//                         <span className="ft-link-arrow">→</span>
//                       </a>
//                     ) : (
//                       <Link to={c === 'Terms & Conditions' ? '/terms-and-conditions' : c === 'End User License Agreement' ? '/eula' : c === 'Refund Policy' ? '/refund-policy' : c === 'Disclaimer' ? '/disclaimer' : c === 'Payment Transfer Terms and Conditions' ? '/payment-transfer-tc' : '#'} className="ft-link" style={{ animationDelay: `${i * 0.05}s` }}>
//                         {c}
//                         <span className="ft-link-arrow">→</span>
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ── Company ── */}
//             <div style={{ animation: 'ft-fadeUp .6s .16s ease both', opacity: 0, animationFillMode: 'forwards' }}>
//               <div className="ft-col-heading">Company</div>
//               <ul className="ft-links">
//                 {company.map((c, i) => (
//                   <li key={i}>
//                     <Link to={c === 'Terms & Conditions' ? '/terms-and-conditions' : c === 'About Us' ? '/about' : c === 'Contact Us' ? '/contact' : '#'} className="ft-link" style={{ animationDelay: `${i * 0.05}s` }}>
//                       {c}
//                       <span className="ft-link-arrow">→</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* ── Contact + Newsletter ── */}
//             <div style={{ animation: 'ft-fadeUp .6s .24s ease both', opacity: 0, animationFillMode: 'forwards' }}>
//               <div className="ft-col-heading">Get in touch</div>

//               {[
//                 {
//                   href: 'mailto:support@multiclout.com',
//                   text: 'support@multiclout.com',
//                   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
//                 },
//                 {
//                   href: 'tel:+917206123452',
//                   text: '+91-7206123452',
//                   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.6 19.79 19.79 0 01.01 1.02 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
//                 },
//                 {
//                   href: '#',
//                   text: 'Office No : 466 - Dwarka Sector 7, Delhi - 110075',
//                   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
//                 },
//               ].map((item, i) => (
//                 <a key={i} href={item.href} className="ft-contact-item">
//                   <div className="ft-contact-icon">{item.icon}</div>
//                   <span className="ft-contact-text">{item.text}</span>
//                 </a>
//               ))}

//               {/* Newsletter */}
//               <div className="ft-newsletter" style={{ marginTop: 20 }}>
//                 <div className="ft-newsletter-label">
//                   <span className="ft-live-dot" />
//                   Stay Updated
//                 </div>
//                 {sent ? (
//                   <div style={{ fontSize: 14, color: '#00b8d9', fontWeight: 700 }}>✓ You're in! Thanks for subscribing.</div>
//                 ) : (
//                   <div className="ft-newsletter-row">
//                     <input
//                       className="ft-newsletter-input"
//                       placeholder="Your email..."
//                       value={email}
//                       onChange={e => setEmail(e.target.value)}
//                       onKeyDown={e => e.key === 'Enter' && handleSend()}
//                     />
//                     <button className="ft-newsletter-btn" onClick={handleSend}>Join</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="ft-divider" />

//         <div className="ft-bottom">
//           <p className="ft-copy">© 2026 <b>Multiclout Edutech Pvt Ltd.</b> All rights reserved.</p>
//           <a href="#" className="ft-made-by">
//             <span className="ft-made-by-dot" />
//             Made by Webmok
//           </a>
//         </div>
//       </footer>
//     </>
//   );
// }





import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STYLES = `
@keyframes ft-fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
@keyframes ft-bgDrift  { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(14px,-10px) scale(1.05)} }
@keyframes ft-pulse    { 0%,100%{transform:scale(1);opacity:.5} 50%{transform:scale(1.25);opacity:1} }
@keyframes ft-shimmer  { 0%{left:-80%} 100%{left:130%} }
@keyframes ft-glow     { 0%,100%{opacity:.12} 50%{opacity:.22} }
@keyframes ft-spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes ft-linkIn   { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
@keyframes ft-socialPop{ 0%{transform:scale(0.6);opacity:0} 70%{transform:scale(1.12)} 100%{transform:scale(1);opacity:1} }
@keyframes ft-dotBlink { 0%,100%{opacity:1} 50%{opacity:.3} }

.ft-root{
  background: #1e3a5f;
  position: relative;
  overflow: hidden;
  font-family: Inter, system-ui, -apple-system, sans-serif;
}

/* top cyan stripe */
.ft-top-stripe{
  height: 3px;
  background: #00b8d9;
  width: 100%;
}

/* ambient orbs */
.ft-orb{
  position: absolute; border-radius:50%; pointer-events:none;
  animation: ft-bgDrift 10s ease-in-out infinite;
}

.ft-inner{
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 32px 0;
  position: relative;
  z-index: 2;
}

/* ── brand column ── */
.ft-logo-wrap {
  margin-bottom: 20px;
  display: block;
}
.ft-logo-img {
  height: 48px;
  width: auto;
  display: block;
}
@media (max-width: 768px) {
  .ft-logo-img { height: 40px; }
}

.ft-brand-desc{
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255,255,255,.55);
  margin: 16px 0 24px;
  font-weight: 500;
}

.ft-social-row{ display:flex; gap:12px; }
.ft-social-btn{
  width:44px; height:44px; border-radius:50%;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.15);
  display:flex; align-items:center; justify-content:center;
  color: rgba(255,255,255,.7);
  cursor:pointer;
  transition: all .22s ease;
  animation: ft-socialPop .5s ease both;
}
.ft-social-btn:hover{
  background: #00b8d9;
  border-color: #00b8d9;
  color: #fff;
  transform: translateY(-3px) scale(1.08);
}

/* ── columns ── */
.ft-grid{
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
  gap: 40px;
  padding-bottom: 56px;
}

/* ── MOBILE RESPONSIVE ── */
@media(max-width:1024px){
  .ft-grid{ grid-template-columns: 1.2fr 1fr 1fr; }
}

@media(max-width:768px){
  .ft-inner{
    padding: 40px 20px 0;
  }
  .ft-grid{
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    padding-bottom: 40px;
  }
  /* Brand column spans full width on tablet */
  .ft-grid > div:first-child {
    grid-column: 1 / -1;
  }
  /* Contact column spans full width on tablet */
  .ft-grid > div:last-child {
    grid-column: 1 / -1;
  }
  .ft-newsletter-row{
    flex-direction: column;
    gap: 10px;
  }
  .ft-newsletter-btn{
    width: 100%;
    padding: 13px 22px;
  }
  .ft-newsletter-input{
    width: 100%;
  }
  .ft-bottom{
    padding: 16px 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
}

@media(max-width:480px){
  .ft-inner{
    padding: 32px 16px 0;
  }
  .ft-grid{
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }
  /* All columns full width on mobile */
  .ft-grid > div {
    grid-column: 1 / -1 !important;
  }
  .ft-brand-desc{
    font-size: 14px;
  }
  .ft-social-row{
    gap: 10px;
  }
  .ft-social-btn{
    width: 40px;
    height: 40px;
  }
  .ft-badges{
    gap: 8px;
  }
  .ft-badge{
    font-size: 11px;
    padding: 5px 12px;
  }
  .ft-col-heading{
    font-size: 12px;
    margin-bottom: 16px;
  }
  .ft-links{
    gap: 14px;
  }
  .ft-link{
    font-size: 14px;
    padding: 2px 0;
  }
  .ft-contact-item{
    margin-bottom: 14px;
  }
  .ft-contact-text{
    font-size: 13px;
  }
  .ft-newsletter{
    border-radius: 16px;
    padding: 16px;
  }
  .ft-newsletter-row{
    flex-direction: column;
    gap: 10px;
  }
  .ft-newsletter-btn{
    width: 100%;
    padding: 13px 22px;
  }
  .ft-newsletter-input{
    width: 100%;
  }
  .ft-bottom{
    padding: 16px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
  }
  .ft-copy{
    font-size: 12px;
  }
  .ft-made-by{
    font-size: 11px;
  }
}

/* ── Shared styles (unchanged) ── */
.ft-col-heading{
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ft-col-heading::before{
  content:'';
  display:inline-block;
  width:14px; height:2px;
  background:#00b8d9;
  border-radius:2px;
  flex-shrink:0;
}

.ft-links{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
.ft-link{
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: color .2s, transform .2s;
  animation: ft-linkIn .4s ease both;
}
.ft-link:hover{ color:#00b8d9; transform:translateX(4px); }
.ft-link-arrow{
  opacity:0;
  font-size:12px;
  transition:opacity .2s, transform .2s;
}
.ft-link:hover .ft-link-arrow{ opacity:1; transform:translateX(2px); }

/* contact items */
.ft-contact-item{
  display:flex; align-items:flex-start; gap:12px;
  margin-bottom:16px;
  text-decoration: none;
}
.ft-contact-icon{
  width:36px; height:36px; border-radius:12px;
  background: rgba(0,184,217,.12);
  border:1px solid rgba(0,184,217,.25);
  display:flex; align-items:center; justify-content:center;
  flex-shrink:0;
  transition:all .2s ease;
}
.ft-contact-item:hover .ft-contact-icon{
  background:#00b8d9; border-color:#00b8d9; transform:scale(1.08);
}
.ft-contact-item:hover .ft-contact-icon svg{ stroke:#fff; }
.ft-contact-text{
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  line-height: 1.5;
  transition:color .2s;
}
.ft-contact-item:hover .ft-contact-text{ color:#00b8d9; }

/* live dot */
.ft-live-dot{
  display:inline-block; width:8px; height:8px; border-radius:50%;
  background:#00b8d9; margin-right:8px;
  animation:ft-dotBlink 2s ease-in-out infinite;
}

/* ── divider ── */
.ft-divider{
  border:none;
  border-top:1px solid rgba(255,255,255,.1);
  margin:0;
}

/* ── bottom bar ── */
.ft-bottom{
  max-width:1200px; margin:0 auto;
  padding:20px 32px;
  display:flex; align-items:center; justify-content:space-between;
  flex-wrap:wrap; gap:12px;
  position:relative; z-index:2;
}
.ft-copy{
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,.4);
}
.ft-copy b{ color: rgba(255,255,255,.7); font-weight:700; }

.ft-made-by{
  display:flex; align-items:center; gap:7px;
  font-size: 12px;
  font-weight: 800;
  color: rgba(255,255,255,.4);
  letter-spacing:.08em; text-transform:uppercase;
  cursor:pointer; text-decoration:none;
  transition:color .2s;
}
.ft-made-by:hover{ color:#00b8d9; }
.ft-made-by-dot{
  width:6px; height:6px; border-radius:50%; background:#00b8d9;
  animation:ft-pulse 2s ease-in-out infinite;
}

/* newsletter badge */
.ft-newsletter{
  background: rgba(0,184,217,.1);
  border:1px solid rgba(0,184,217,.2);
  border-radius:20px;
  padding:20px;
  margin-top:4px;
}
.ft-newsletter-label{
  font-size: 11px;
  font-weight: 800;
  color: #00b8d9;
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}
.ft-newsletter-row{ display:flex; gap:10px; }
.ft-newsletter-input{
  flex:1;
  background: rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  border-radius:999px;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
  outline:none;
  transition: border-color .2s;
  min-width:0;
}
.ft-newsletter-input::placeholder{ color: rgba(255,255,255,.35); font-weight:400; }
.ft-newsletter-input:focus{ border-color:#00b8d9; }
.ft-newsletter-btn{
  background:#00b8d9;
  color:#fff;
  font-size: 13px;
  font-weight: 800;
  padding: 12px 22px;
  border-radius:999px;
  border:none;
  cursor:pointer;
  font-family: Inter, system-ui, sans-serif;
  white-space:nowrap;
  transition: background .2s, transform .15s;
}
.ft-newsletter-btn:hover{ background:#fff; color:#1e3a5f; transform:scale(1.04); }

/* badge row */
.ft-badges{ display:flex; gap:10px; flex-wrap:wrap; margin-top:20px; }
.ft-badge{
  display:flex; align-items:center; gap:6px;
  background: rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.1);
  border-radius:999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,.55);
}
.ft-badge span{ font-size:13px; }
`;

const topLinks = ['Become An Affiliate', 'End User License Agreement', 'Refund Policy', 'Disclaimer', 'Payment Transfer Terms and Conditions'];
const company = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (email.trim()) { setSent(true); setEmail(''); }
  };

  return (
    <>
      <style>{STYLES}</style>
      <footer className="ft-root">
        <div className="ft-top-stripe" />

        {/* orbs */}
        <div className="ft-orb" style={{ width: 380, height: 380, top: -140, right: -80, background: '#00b8d90d', animationDelay: '0s' }} />
        <div className="ft-orb" style={{ width: 260, height: 260, bottom: -60, left: -60, background: '#00b8d908', animationDelay: '5s' }} />

        <div className="ft-inner">
          <div className="ft-grid">

            {/* ── Brand ── */}
            <div style={{ animation: 'ft-fadeUp .6s ease both' }}>
              <Link to="/" className="ft-logo-wrap">
                <img src="/logo.png" alt="Multiclout" className="ft-logo-img" />
              </Link>

              <p className="ft-brand-desc">
                India's No.1 Edutainment platform. Learn from thousands of short videos across 50+ categories curated by top experts.
              </p>

              <div className="ft-social-row">
                {[
                  { label: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z', delay: '0s' },
                  { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z', delay: '.08s' },
                  { label: 'YouTube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', delay: '.16s' },
                ].map((s, i) => (
                  <a key={i} href="#" className="ft-social-btn" style={{ animationDelay: s.delay }} aria-label={s.label}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>

              {/* trust badges */}
              <div className="ft-badges" style={{ marginTop: 20 }}>
                {[
                  { icon: '🔒', text: 'Secure Payments' },
                  { icon: '✅', text: 'ISO Certified' },
                ].map((b, i) => (
                  <div key={i} className="ft-badge">
                    <span>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Top Links ── */}
            <div style={{ animation: 'ft-fadeUp .6s .08s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="ft-col-heading">Top Links</div>
              <ul className="ft-links">
                {topLinks.map((c, i) => (
                  <li key={i}>
                    {c === 'Become An Affiliate' ? (
                      <a href="/#video-grid" className="ft-link" style={{ animationDelay: `${i * 0.05}s` }}>
                        {c}
                        <span className="ft-link-arrow">→</span>
                      </a>
                    ) : (
                      <Link
                        to={
                          c === 'Terms & Conditions' ? '/terms-and-conditions' :
                            c === 'End User License Agreement' ? '/eula' :
                              c === 'Refund Policy' ? '/refund-policy' :
                                c === 'Disclaimer' ? '/disclaimer' :
                                  c === 'Payment Transfer Terms and Conditions' ? '/payment-transfer-tc' : '#'
                        }
                        className="ft-link"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        {c}
                        <span className="ft-link-arrow">→</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company ── */}
            <div style={{ animation: 'ft-fadeUp .6s .16s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="ft-col-heading">Company</div>
              <ul className="ft-links">
                {company.map((c, i) => (
                  <li key={i}>
                    <Link
                      to={
                        c === 'Terms & Conditions' ? '/terms-and-conditions' :
                          c === 'About Us' ? '/about' :
                            c === 'Contact Us' ? '/contact' : '#'
                      }
                      className="ft-link"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {c}
                      <span className="ft-link-arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact + Newsletter ── */}
            <div style={{ animation: 'ft-fadeUp .6s .24s ease both', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="ft-col-heading">Get in touch</div>

              {[
                {
                  href: 'mailto:support@multiclout.com',
                  text: 'support@multiclout.com',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                },
                {
                  href: 'tel:+917206123452',
                  text: '+91-7206123452',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.6 19.79 19.79 0 01.01 1.02 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                },
                {
                  href: '#',
                  text: 'Office No : 466 - Dwarka Sector 7, Delhi - 110075',
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00b8d9" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                },
              ].map((item, i) => (
                <a key={i} href={item.href} className="ft-contact-item">
                  <div className="ft-contact-icon">{item.icon}</div>
                  <span className="ft-contact-text">{item.text}</span>
                </a>
              ))}

              {/* Newsletter */}
              <div className="ft-newsletter" style={{ marginTop: 20 }}>
                <div className="ft-newsletter-label">
                  <span className="ft-live-dot" />
                  Stay Updated
                </div>
                {sent ? (
                  <div style={{ fontSize: 14, color: '#00b8d9', fontWeight: 700 }}>✓ You're in! Thanks for subscribing.</div>
                ) : (
                  <div className="ft-newsletter-row">
                    <input
                      className="ft-newsletter-input"
                      placeholder="Your email..."
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSend()}
                    />
                    <button className="ft-newsletter-btn" onClick={handleSend}>Join</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr className="ft-divider" />

        <div className="ft-bottom">
          <p className="ft-copy">© 2026 <b>Multiclout Edutech Pvt Ltd.</b> All rights reserved.</p>
          <a href="#" className="ft-made-by">
            <span className="ft-made-by-dot" />
            Made by Webmok
          </a>
        </div>
      </footer>
    </>
  );
}