import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';

const features = [
  {
    title: "Personal Branding",
    desc: "Build a magnetic online presence and establish yourself as an authority in your niche.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    )
  },
  {
    title: "Sales Improvement",
    desc: "Master high-ticket closing and psychological strategies to rapidly scale your conversions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
    )
  },
  {
    title: "Brand Launching",
    desc: "Deploy go-to-market strategies that capture immediate attention and market share.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
    )
  },
  {
    title: "Product Innovation",
    desc: "Learn to identify gaps in the market and design products that sell themselves.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    )
  },
  {
    title: "Revenue Growth",
    desc: "Unlock scalable financial structures tailored for freelance and modern digital agencies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    )
  },
  {
    title: "Creating Future Leaders",
    desc: "Develop impressive communication, critical thinking, and time-management skills.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
    )
  },
  {
    title: "Viral Marketing",
    desc: "Execute campaigns designed for algorithmic growth across modern social networks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
    )
  }
];

export default function About() {
  const [content, setContent] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await axios.get('/api/home-content/about');
      const apiContent = response.data.data.content;
      
      // Hardcoded default content
      const defaultContent = {
        hero: {
          title: "India's No.1\nBusiness Hub.",
          subtitle: '"We work as a ray of light in darkness so that you can choose the right career path with absolute clarity."',
          badge: 'Legacy of Excellence'
        },
        story: {
          title: 'Earn and Learn\nAt The Same Time.',
          subtitle: 'Multiclout is a premier organization providing unparalleled information on education and network marketing.',
          description1: 'We believe in total financial independence through practical skill development. In this rapidly transforming digital era, you just need to know how to start a company or how to build a lucrative career as a freelancer.',
          description2: 'By making yourself a highly-skilled professional, we ensure you stay ahead of the curve.',
          stats: [
            { label: 'Module Courses', value: '70+' },
            { label: 'Practical Focus', value: '100%' }
          ]
        },
        features: [
          {
            title: "Personal Branding",
            desc: "Build a magnetic online presence and establish yourself as an authority in your niche.",
            icon: "user"
          },
          {
            title: "Sales Improvement",
            desc: "Master high-ticket closing and psychological strategies to rapidly scale your conversions.",
            icon: "trending"
          },
          {
            title: "Brand Launching",
            desc: "Deploy go-to-market strategies that capture immediate attention and market share.",
            icon: "rocket"
          },
          {
            title: "Product Innovation",
            desc: "Learn to identify gaps in the market and design products that sell themselves.",
            icon: "lightbulb"
          },
          {
            title: "Revenue Growth",
            desc: "Unlock scalable financial structures tailored for freelance and modern digital agencies.",
            icon: "dollar"
          },
          {
            title: "Creating Future Leaders",
            desc: "Develop impressive communication, critical thinking, and time-management skills.",
            icon: "star"
          },
          {
            title: "Viral Marketing",
            desc: "Execute campaigns designed for algorithmic growth across modern social networks.",
            icon: "share"
          }
        ],
        skills: [
          { title: 'Personality', desc: 'Build an impressive and magnetic personality.', icon: 'trophy', color: 'white' },
          { title: 'Speaking', desc: 'Master the art of high-impact communication.', icon: 'mic', color: 'dark' },
          { title: 'Time Mgt.', desc: 'Optimize routines for maximum productivity.', icon: 'clock', color: 'primary' },
          { title: 'Growth', desc: 'Step consistently into high-earning environments.', icon: 'rocket', color: 'white' }
        ]
      };
      
      // Use database content if available, otherwise use default content
      const mergedContent = {
        hero: apiContent.hero || defaultContent.hero,
        story: apiContent.story || defaultContent.story,
        features: apiContent.features || defaultContent.features,
        skills: apiContent.skills || defaultContent.skills
      };
      
      setContent(mergedContent);
    } catch (error) {
      console.error('Error fetching about content:', error);
      // Fallback to default content only
      setContent({
        hero: {
          title: "India's No.1\nBusiness Hub.",
          subtitle: '"We work as a ray of light in darkness so that you can choose the right career path with absolute clarity."',
          badge: 'Legacy of Excellence'
        },
        story: {
          title: 'Earn and Learn\nAt The Same Time.',
          subtitle: 'Multiclout is a premier organization providing unparalleled information on education and network marketing.',
          description1: 'We believe in total financial independence through practical skill development. In this rapidly transforming digital era, you just need to know how to start a company or how to build a lucrative career as a freelancer.',
          description2: 'By making yourself a highly-skilled professional, we ensure you stay ahead of the curve.',
          stats: [
            { label: 'Module Courses', value: '70+' },
            { label: 'Practical Focus', value: '100%' }
          ]
        },
        features: [
          {
            title: "Personal Branding",
            desc: "Build a magnetic online presence and establish yourself as an authority in your niche.",
            icon: "user"
          },
          {
            title: "Sales Improvement",
            desc: "Master high-ticket closing and psychological strategies to rapidly scale your conversions.",
            icon: "trending"
          },
          {
            title: "Brand Launching",
            desc: "Deploy go-to-market strategies that capture immediate attention and market share.",
            icon: "rocket"
          },
          {
            title: "Product Innovation",
            desc: "Learn to identify gaps in the market and design products that sell themselves.",
            icon: "lightbulb"
          },
          {
            title: "Revenue Growth",
            desc: "Unlock scalable financial structures tailored for freelance and modern digital agencies.",
            icon: "dollar"
          },
          {
            title: "Creating Future Leaders",
            desc: "Develop impressive communication, critical thinking, and time-management skills.",
            icon: "star"
          },
          {
            title: "Viral Marketing",
            desc: "Execute campaigns designed for algorithmic growth across modern social networks.",
            icon: "share"
          }
        ],
        skills: [
          { title: 'Personality', desc: 'Build an impressive and magnetic personality.', icon: 'trophy', color: 'white' },
          { title: 'Speaking', desc: 'Master the art of high-impact communication.', icon: 'mic', color: 'dark' },
          { title: 'Time Mgt.', desc: 'Optimize routines for maximum productivity.', icon: 'clock', color: 'primary' },
          { title: 'Growth', desc: 'Step consistently into high-earning environments.', icon: 'rocket', color: 'white' }
        ]
      });
    }
  };

  // Expose global refresh
  window.refreshAboutContent = fetchContent;

  return (
    <>
      <style>
        {`
        @keyframes driftOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -15px) scale(1.03); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .abt-hero {
          background-color: #0b1628;
          position: relative;
          overflow: hidden;
          padding: 120px 20px 80px;
          border-top: 3px solid #00b8d9;
        }
        @media (min-width: 768px) {
          .abt-hero { padding: 140px 20px 100px; }
        }
        .abt-bg-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(40px);
        }
        .abt-orb-1 { width: 450px; height: 450px; top: -150px; right: -100px; background: rgba(0, 184, 217, 0.08); animation: driftOrb 12s ease-in-out infinite; }
        .abt-orb-2 { width: 350px; height: 350px; bottom: -50px; left: -100px; background: rgba(0, 184, 217, 0.05); animation: driftOrb 15s ease-in-out infinite reverse; }
        
        .abt-feature-card {
          background: #ffffff;
          border: 1px solid rgba(30, 58, 95, 0.08);
          border-radius: 20px;
          padding: 32px 24px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.03);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .abt-feature-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 0;
          background: linear-gradient(180deg, rgba(0, 184, 217, 0.05) 0%, transparent 100%);
          transition: height 0.3s ease;
          z-index: -1;
        }
        .abt-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(30, 58, 95, 0.08);
          border-color: rgba(0, 184, 217, 0.3);
        }
        .abt-feature-card:hover::before {
          height: 100%;
        }
        .abt-icon-wrap {
          width: 56px; height: 56px;
          background: #f0f7fc;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #00b8d9;
          margin-bottom: 20px;
          transition: background 0.3s, color 0.3s;
        }
        .abt-feature-card:hover .abt-icon-wrap {
          background: #00b8d9;
          color: #ffffff;
        }
        `}
      </style>

      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        .serif { font-family: 'Playfair Display', serif; }

        @keyframes xFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .anim-fade-up {
          animation: xFadeUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }

        .image-mask {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-item {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .feature-item:hover {
          transform: translateY(-10px);
          background: #0b1628;
          color: white;
        }

        .feature-item:hover p {
          color: rgba(255, 255, 255, 0.5);
        }
        `}
      </style>

      <main className="text-[#1e3a5f] bg-[#fcfdfd]">

        {/* ─── Hero Section ─── */}
        {/* <section className="abt-hero text-center text-white">
          <div className="abt-bg-orb abt-orb-1" />
          <div className="abt-bg-orb abt-orb-2" />

          <div className="max-w-4xl mx-auto relative z-10 px-4">
            <div className="inline-flex items-center justify-center text-sm font-bold tracking-widest text-[#00b8d9] uppercase mb-6 bg-[#00b8d9]/10 px-5 py-2 rounded-full">
              Building Future Leaders
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              India's No.1 Business <br className="hidden md:block" /> Education Network
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              We work as a ray of light in darkness so that you can choose the right career. Open the door to high-earning opportunities with Multiclout.
            </p>
          </div>
        </section> */}
        <section className="relative overflow-hidden bg-[#0b1628] pt-40 pb-32 px-6 text-center">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00b8d9]/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00b8d9]/5 blur-[120px] rounded-full" />

          <div className="max-w-5xl mx-auto relative z-10 anim-fade-up">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
              <span className="text-[#00b8d9] text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                {content.hero?.badge || 'Legacy of Excellence'}
              </span>
            </div>

            <h1 className="text-6xl md:text-[100px] font-black text-white leading-[0.85] mb-12 tracking-tighter">
              {(() => {
                const title = content.hero?.title || "India's No.1\nBusiness Hub.";
                const lines = title.split('\n');
                return (
                  <>
                    {lines[0]} <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>
                      {lines[1] || 'Business Hub.'}
                    </span>
                  </>
                );
              })()}
            </h1>

            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium serif italic">
              {content.hero?.subtitle || '"We work as a ray of light in darkness so that you can choose the right career path with absolute clarity."'}
            </p>
          </div>
        </section>
        {/* ─── Story / Narrative Section ─── */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1e3a5f] leading-tight">
              {(() => {
                const title = content.story?.title || 'Earn and Learn\nAt The Same Time.';
                const lines = title.split('\n');
                return (
                  <>
                    {lines[0]} <br />
                    <span className="text-[#00b8d9]">{lines[1] || 'At The Same Time.'}</span>
                  </>
                );
              })()}
            </h2>
            <p className="text-base md:text-lg text-[#1e3a5f]/80 leading-relaxed mb-6">
              {content.story?.subtitle || 'Multiclout is a premier organization providing unparalleled information on education and network marketing. We believe in total financial independence through practical skill development.'}
            </p>
            <p className="text-base md:text-lg text-[#1e3a5f]/80 leading-relaxed mb-8">
              {content.story?.description1 || 'In this rapidly transforming digital era, you just need to know how to start a company or how to build a lucrative career as a freelancer.'}
            </p>
            <p className="text-base md:text-lg text-[#1e3a5f]/80 leading-relaxed mb-8">
              {content.story?.description2 || 'By making yourself a highly-skilled professional, we ensure you stay ahead of the curve.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 border-l-4 border-[#00b8d9] pl-6 py-2">
              {content.story?.stats?.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-extrabold text-[#1e3a5f] mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider">{stat.label}</div>
                </div>
              )) || (
                <>
                  <div>
                    <div className="text-3xl font-extrabold text-[#1e3a5f] mb-1">70+</div>
                    <div className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider">Module Courses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-[#1e3a5f] mb-1">100%</div>
                    <div className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider">Practical Focus</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="relative">
            {/* Visual Abstract Layout */}
            <div className="aspect-[4/5] md:aspect-square bg-gradient-to-tr from-[#e8f5fb] to-[#ffffff] rounded-[40px] drop-shadow-xl border border-[#00b8d9]/10 relative overflow-hidden flex items-center justify-center p-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b8d9]/5 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4 w-full" style={{ animation: 'floatCard 8s ease-in-out infinite' }}>
                {content.skills?.map((skill, index) => {
                  const getCardClass = (color) => {
                    switch(color) {
                      case 'dark': return 'bg-[#0b1628] p-6 rounded-3xl shadow-xl shadow-[#0b1628]/20 border border-white/10';
                      case 'primary': return 'bg-[#00b8d9] p-6 rounded-3xl shadow-xl shadow-[#00b8d9]/20 border border-white/20';
                      default: return 'bg-white p-6 rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/5';
                    }
                  };
                  
                  const getIconClass = (color) => {
                    switch(color) {
                      case 'dark': return 'w-10 h-10 rounded-full bg-white/10 mb-4 flex items-center justify-center text-[#00b8d9]';
                      case 'primary': return 'w-10 h-10 rounded-full bg-white/20 mb-4 flex items-center justify-center text-white';
                      default: return 'w-10 h-10 rounded-full bg-[#e0f7f9] mb-4 flex items-center justify-center text-[#00b8d9]';
                    }
                  };
                  
                  const getTextClass = (color) => {
                    switch(color) {
                      case 'dark': return 'font-bold text-white mb-2';
                      case 'primary': return 'font-bold text-white mb-2';
                      default: return 'font-bold text-[#1e3a5f] mb-2';
                    }
                  };
                  
                  const getDescClass = (color) => {
                    switch(color) {
                      case 'dark': return 'text-xs text-white/70 leading-relaxed';
                      case 'primary': return 'text-xs text-white/90 leading-relaxed';
                      default: return 'text-xs text-[#1e3a5f]/60 leading-relaxed';
                    }
                  };
                  
                  return (
                    <div key={index} className={`${getCardClass(skill.color)} ${index % 2 === 0 ? 'mt-10' : '-mt-10'}`}>
                      <div className={getIconClass(skill.color)}>
                        {skill.icon}
                      </div>
                      <h4 className={getTextClass(skill.color)}>{skill.title}</h4>
                      <p className={getDescClass(skill.color)}>{skill.desc}</p>
                    </div>
                  );
                }) || [
                  <div key="default1" className="bg-white p-6 rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/5 mt-10">
                    <div className="w-10 h-10 rounded-full bg-[#e0f7f9] mb-4 flex items-center justify-center text-[#00b8d9]"> </div>
                    <h4 className="font-bold text-[#1e3a5f] mb-2">Personality</h4>
                    <p className="text-xs text-[#1e3a5f]/60 leading-relaxed">Build an impressive and magnetic personality.</p>
                  </div>,
                  <div key="default2" className="bg-[#0b1628] p-6 rounded-3xl shadow-xl shadow-[#0b1628]/20 border border-white/10 -mt-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 mb-4 flex items-center justify-center text-[#00b8d9]"> </div>
                    <h4 className="font-bold text-white mb-2">Speaking</h4>
                    <p className="text-xs text-white/70 leading-relaxed">Master the art of high-impact communication.</p>
                  </div>,
                  <div key="default3" className="bg-[#00b8d9] p-6 rounded-3xl shadow-xl shadow-[#00b8d9]/20 border border-white/20 mt-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 mb-4 flex items-center justify-center text-white"> </div>
                    <h4 className="font-bold text-white mb-2">Time Mgt.</h4>
                    <p className="text-xs text-white/90 leading-relaxed">Optimize routines for maximum productivity.</p>
                  </div>,
                  <div key="default4" className="bg-white p-6 rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/5 -mt-10">
                    <div className="w-10 h-10 rounded-full bg-[#f0f7fc] mb-4 flex items-center justify-center text-[#00b8d9]"> </div>
                    <h4 className="font-bold text-[#1e3a5f] mb-2">Growth</h4>
                    <p className="text-xs text-[#1e3a5f]/60 leading-relaxed">Step consistently into high-earning environments.</p>
                  </div>
                ]}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Grid Features ─── */}
        <section className="bg-white py-24 border-t border-[#f0f4f8]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-extrabold text-[#1e3a5f] mb-4">Master Digital Marketing</h2>
              <p className="text-lg text-[#1e3a5f]/70">
                You cover absolutely all topics required to dominate in today's economy. Here is what our platform helps you achieve in the field:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {content.features?.map((item, idx) => (
                <div key={idx} className="abt-feature-card">
                  <div className="abt-icon-wrap">
                    {item.icon === 'user' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    )}
                    {item.icon === 'trending' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                    )}
                    {item.icon === 'rocket' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                    )}
                    {item.icon === 'lightbulb' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    )}
                    {item.icon === 'dollar' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    )}
                    {item.icon === 'star' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    )}
                    {item.icon === 'share' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                    )}
                    {!['user', 'trending', 'rocket', 'lightbulb', 'dollar', 'star', 'share'].includes(item.icon) && (
                      <span className="text-2xl">{item.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#8aacbf]">{item.desc}</p>
                </div>
              ))}

              {/* Extra CTA Card for the grid */}
              <div className="abt-feature-card bg-gradient-to-br from-[#0b1628] to-[#1e3a5f] !border-none !text-white flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#00b8d9] mb-4 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,184,217,0.4)]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Start Learning</h3>
                <p className="text-sm text-white/70">Join thousands of students building their future.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
