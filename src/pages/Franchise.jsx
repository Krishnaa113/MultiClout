import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const franchiseBenefits = [
  {
    title: "Global Search & Social",
    desc: "Offer premium SEO, Meta Ads, and Performance Marketing services powered by the Multiclout global fulfillment engine.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )
  },
  {
    title: "Agency Operations",
    desc: "Comprehensive training on running a high-ticket Digital Marketing agency, from client acquisition to retention.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
    )
  },
  {
    title: "Recurring Revenue",
    desc: "Built-in subscription models for Digital Marketing retainers ensuring stable, predictable monthly cash flow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
    )
  },
  {
    title: "Direct Lead Access",
    desc: "Access to our proprietary lead generation engines that deliver verified Digital Marketing inquiries in your region.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    )
  }
];

const steps = [
  { id: "01", title: "Apply Online", desc: "Fill out the inquiry form with your professional background and location." },
  { id: "02", title: "Discovery Call", desc: "Our franchise consultants will reach out to discuss the opportunity and align goals." },
  { id: "03", title: "Verification", desc: "Formal review of qualifications, financial capability, and territory availability." },
  { id: "04", title: "Launch", desc: "Complete training, sign documents, and launch your Multiclout franchise." }
];

export default function Franchise() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', city: '', experience: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Franchise Opportunity | Multiclout - Build Your Digital Agency";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        .fran-root {
          font-family: 'Inter', sans-serif;
          scroll-behavior: smooth;
        }

        .serif {
          font-family: 'Playfair Display', serif;
        }

        @keyframes xTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-wrap {
          overflow: hidden;
          background: #0b1628;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .ticker {
          display: flex;
          width: fit-content;
          animation: xTicker 30s linear infinite;
        }

        .ticker-item {
          color: white;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          padding: 0 40px;
          opacity: 0.3;
          white-space: nowrap;
        }

        .hero-img-mask {
          clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
        }

        .custom-cursor-area:hover {
          cursor: crosshair;
        }

        .glass-btn {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s;
        }

        .glass-btn:hover {
          background: #00b8d9;
          border-color: #00b8d9;
          color: #0b1628;
        }

        .diagonal-bg {
          background: linear-gradient(17deg, #0b1628 0%, #0b1628 50%, #fcfdfd 50.1%, #fcfdfd 100%);
        }

        .image-reveal {
          transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .group:hover .image-reveal {
          transform: scale(1.05);
        }
        `}
      </style>

      <main className="fran-root bg-[#fcfdfd] text-[#0b1628] overflow-hidden">
        {/* ─── Editorial Hero ─── */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 anim-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#00b8d9]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00b8d9]">Selective Partnerships Open</span>
              </div>
              <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-8">
                Ownership <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #0b1628' }}>Simplified.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-medium mb-12">
                Join India's most aggressive <span className="text-[#0b1628] font-bold">Digital Marketing</span> distribution network. We provide the infrastructure, you own the market.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <a href="#apply" className="px-12 py-6 bg-[#0b1628] text-white font-black rounded-full hover:bg-[#00b8d9] hover:text-[#0b1628] transition-all transform hover:-rotate-2">
                  Request Prospectus
                </a>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Partner" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-[#00b8d9] flex items-center justify-center text-[10px] font-black text-white">50+</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative anim-scale-in delay-1">
              <div className="hero-img-mask overflow-hidden rounded-[40px] shadow-3xl bg-gray-100">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 anim-fade-up delay-2">
                <div className="text-4xl font-black text-[#0b1628]">₹8.4L</div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Avg. First Year Net</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Trust Marquee ─── */}
        <div className="ticker-wrap mt-20">
          <div className="ticker">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="ticker-item">Validated Model • Exclusive Territories • Full Tech Stack • Local Fulfillment • 50+ Cities</span>
            ))}
          </div>
        </div>

        {/* ─── The Asset-Light Advantage ─── */}
        <section className="py-40 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center mb-40">
              <div className="anim-fade-up">
                <h2 className="serif text-5xl md:text-7xl mb-12 italic">We built the machine, you drive it.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Unlike traditional franchises that require heavy operational expertise, Multiclout is an <span className="font-bold text-[#0b1628]">Asset-Light</span> model. We handle product development, fulfillment, and complex lead-gen tech.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-[#00b8d9] mb-2">0%</div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Inventory Cost</p>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#00b8d9] mb-2">24h</div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Activation Time</p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-[60px] anim-scale-in delay-1 bg-gray-100">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Map" className="w-full h-full object-cover image-reveal" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1628]/80 to-transparent flex items-end p-12">
                  <div className="text-white">
                    <h4 className="text-2xl font-black mb-2">Prime Territories Still Open</h4>
                    <p className="text-white/60 text-sm">Targeting Tier 1 and Tier 2 hubs for Q3 2026 expansion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
              {franchiseBenefits.map((benefit, idx) => (
                <div key={idx} className="p-12 border border-gray-100 hover:bg-gray-50 transition-colors group">
                  <div className="text-[#00b8d9] mb-8 transform group-hover:-translate-y-2 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── The Roadmap Section ─── */}
        <section className="py-40 bg-[#0b1628] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-32 anim-fade-up">
              <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">12-Month <br /> Roadmap</h2>
              <p className="text-white/40 max-w-xl mx-auto">From day 1 to market dominance. This is exactly what your first year looks like.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block" />
              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 bg-[#0b1628] p-8 border border-white/10 rounded-3xl group hover:border-[#00b8d9] transition-all anim-fade-up">
                  <div className="text-7xl font-black text-white/5 mb-8 group-hover:text-[#00b8d9]/20 transition-all">{step.id}</div>
                  <h3 className="text-xl font-black mb-4">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Partner Success ─── */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
            <div className="rounded-[80px] overflow-hidden shadow-3xl anim-scale-in bg-gray-100 h-[600px]">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Partner" className="w-full h-full object-cover" />
            </div>
            <div className="anim-fade-up">
              <div className="serif text-4xl md:text-5xl border-l-4 border-[#00b8d9] pl-12 mb-12 italic leading-tight">
                "Scaling a standalone agency was a nightmare. Moving to the Multiclout ecosystem gave me the fulfillment engine I needed to finally focus purely on client relationships."
              </div>
              <div className="pl-12">
                <h4 className="text-2xl font-black">Rahish Kumar</h4>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Multiclout</p>
              </div>
            </div>
          </div>
        </section>
        {/* ─── Investment Framework ─── */}
        <section className="py-40 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 anim-fade-up">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Investment <br /> Framework</h2>
              <div className="h-2 w-20 bg-[#00b8d9]" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { tier: "Tier 3 Cities", range: "₹5L - ₹7L", focus: "Local brokerage and individual client management." },
                { tier: "Tier 2 Cities", range: "₹8L - ₹12L", focus: "Regional hub setup with a team of up to 5 executives." },
                { tier: "Metro Cities", range: "₹15L+", focus: "Full-scale corporate distribution with exclusive region rights." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{item.tier}</h4>
                  <div className="text-4xl font-black mb-8 group-hover:text-[#00b8d9] transition-colors">{item.range}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Handcrafted FAQ ─── */}
        <section className="py-40 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-24 anim-fade-up">
              <h2 className="serif text-4xl md:text-6xl italic">Crucial Details.</h2>
            </div>

            <div className="space-y-12">
              {[
                { q: "Is prior marketing experience mandatory?", a: "While helpful, it is not mandatory. We look for sales DNA. Our training ecosystem covers everything from product fulfillment to CRM operations." },
                { q: "What is the typical break-even period?", a: "Based on historical partner data, most hubs achieve operational break-even within 4 to 7 months of full-scale launch." },
                { q: "Do you offer financing options?", a: "We have tied up with specific NBFCs to provide business loans to qualified applicants who pass our discovery phase." }
              ].map((faq, idx) => (
                <div key={idx} className="anim-fade-up">
                  <h4 className="text-xl font-black mb-4 flex gap-4">
                    <span className="text-[#00b8d9]">0{idx + 1}</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-500 text-sm pl-10 leading-relaxed max-w-2xl">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── The Closer / Form ─── */}
        <section id="apply" className="py-40 diagonal-bg relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-3xl text-[#0b1628] relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Begin Discovery</h2>
                <p className="text-gray-400 font-medium">Limited availability by region. Priority given to sales-oriented backgrounds.</p>
              </div>

              {submitted ? (
                <div className="py-24 text-center anim-fade-up">
                  <h4 className="text-4xl font-black mb-4">Request Received</h4>
                  <p className="text-gray-500">Your profile is currently under review by our expansion team.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#00b8d9]">Legal Name</label>
                      <input required type="text" className="form-input" placeholder="Aditya Kumar" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#00b8d9]">Phone</label>
                      <input required type="tel" className="form-input" placeholder="+91" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#00b8d9]">Email Address</label>
                    <input required type="email" className="form-input" placeholder="name@domain.com" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#00b8d9]">Target City</label>
                    <input required type="text" className="form-input" placeholder="Delhi (NCR)" value={formState.city} onChange={e => setFormState({ ...formState, city: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#00b8d9]">Professional Experience</label>
                    <textarea rows="4" className="form-input resize-none" placeholder="Tell us about your sales or marketing background..." value={formState.experience} onChange={e => setFormState({ ...formState, experience: e.target.value })}></textarea>
                  </div>

                  <button type="submit" className="w-full py-8 bg-[#0b1628] text-white font-black text-xl rounded-2xl hover:bg-[#00b8d9] transition-all transform hover:scale-[1.02] shadow-2xl">
                    Submit Interest
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>

  );
}
