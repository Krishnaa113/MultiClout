import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', plan: '', message: '' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes contactDrift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .bg-contact-hero {
          background: linear-gradient(135deg, #0b1628 0%, #112240 100%);
          position: relative;
          overflow: hidden;
        }
        .contact-glass-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(11, 22, 40, 0.25);
        }
        .ct-icon-box {
          background: linear-gradient(135deg, #f0f7fc 0%, #ffffff 100%);
          box-shadow: 0 10px 20px rgba(0, 184, 217, 0.05), inset 0 2px 5px rgba(255,255,255,1);
          border: 1px solid rgba(0, 184, 217, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ct-info-row:hover .ct-icon-box {
          background: #00b8d9;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 30px rgba(0, 184, 217, 0.3);
        }
        .ct-info-row:hover .ct-icon-box svg {
          stroke: #ffffff;
        }
        
        .ct-input-fancy {
          width: 100%;
          background: #f8fafc;
          border: 2px solid transparent;
          color: #1e3a5f;
          padding: 18px 24px;
          border-radius: 16px;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }
        .ct-input-fancy:focus {
          background: #ffffff;
          border-color: #00b8d9;
          box-shadow: 0 0 0 4px rgba(0, 184, 217, 0.15), inset 0 2px 4px rgba(0,0,0,0);
          outline: none;
        }
        
        /* Ambient Background Elements */
        .ct-ambient-1 {
          position: absolute; width: 600px; height: 600px;
          border-radius: 50%; background: radial-gradient(circle, rgba(0,184,217,0.15) 0%, rgba(0,184,217,0) 70%);
          top: -200px; right: -200px; animation: pulseGlow 8s infinite alternate; pointer-events: none;
        }
        .ct-ambient-2 {
          position: absolute; width: 800px; height: 800px;
          border-radius: 50%; background: radial-gradient(circle, rgba(11,22,40,0.8) 0%, rgba(11,22,40,0) 70%);
          bottom: -400px; left: -300px; pointer-events: none; mix-blend-mode: multiply;
        }
        `}
      </style>

      <main className="text-[#1e3a5f] bg-[#f4f7f9] relative">

        {/* ─── Hero Section ─── */}
        <section className="bg-contact-hero pt-28 md:pt-36 pb-32 md:pb-48 text-center px-4 relative">
          <div className="ct-ambient-1" />
          <div className="ct-ambient-2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00b8d9] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-[#00b8d9] uppercase">We Are Online</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Get in <span className="text-[#00b8d9]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed">
              Through education, we foster long-term, mutually beneficial relationships. Ready to start your journey? Drop us a line.
            </p>
          </div>
        </section>

        {/* ─── Contact Form & Details Section ─── */}
        <section className="max-w-7xl mx-auto px-6 relative z-20 -mt-32 pb-24">
          <div className="contact-glass-card rounded-[40px] p-6 md:p-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start relative overflow-hidden">

            {/* Background Map Graphic (Decorative) */}
            <div className="absolute right-0 top-0 w-2/3 h-full opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#1e3a5f 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-10 lg:pr-8 relative z-10 w-full h-full justify-center">

              <div className="mb-4">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1e3a5f] mb-4">How can we help you?</h2>
                <p className="text-[#8aacbf] leading-relaxed">
                  Whether you have questions about our modules, payments, or need direct career counseling, our elite support team is ready to respond.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                {/* Item 1 */}
                <div className="ct-info-row flex items-center gap-6 group cursor-default">
                  <div className="ct-icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-[#00b8d9]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider mb-1">HQ Address</h4>
                    <p className="text-[#1e3a5f] font-bold text-lg leading-snug">
                      Office No : 466 - Dwarka <br /> Sector 7, Delhi - 110075
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="ct-info-row flex items-center gap-6 group cursor-default">
                  <div className="ct-icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-[#00b8d9]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider mb-1">Direct Call</h4>
                    <p className="text-[#1e3a5f] font-bold text-lg">
                      +91-7206123452
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="ct-info-row flex items-center gap-6 group cursor-default">
                  <div className="ct-icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-[#00b8d9]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#8aacbf] uppercase tracking-wider mb-1">Email Us</h4>
                    <p className="text-[#1e3a5f] font-bold text-lg">
                      support@multiclout.com
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-10 shadow-xl shadow-[#0b1628]/5 border border-[#1e3a5f]/5 relative z-10 w-full"
              style={{ animation: 'contactDrift 8s ease-in-out infinite' }}>

              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-2">Send a Message</h3>
                <p className="text-sm text-[#8aacbf]">Requested fields are marked with an asterisk (*).</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-200 pointer-events-none ${formData.name || focused === 'name' ? 'top-2 text-xs font-bold text-[#00b8d9]' : 'top-4 text-[15px] font-medium text-[#8aacbf]'}`}>Full Name *</label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      className="ct-input-fancy pt-6 pb-2"
                    />
                  </div>
                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-200 pointer-events-none ${formData.email || focused === 'email' ? 'top-2 text-xs font-bold text-[#00b8d9]' : 'top-4 text-[15px] font-medium text-[#8aacbf]'}`}>Email Address *</label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      className="ct-input-fancy pt-6 pb-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-200 pointer-events-none ${formData.phone || focused === 'phone' ? 'top-2 text-xs font-bold text-[#00b8d9]' : 'top-4 text-[15px] font-medium text-[#8aacbf]'}`}>Phone Number *</label>
                    <input
                      type="tel" name="phone" required
                      value={formData.phone} onChange={handleChange}
                      onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                      className="ct-input-fancy pt-6 pb-2"
                    />
                  </div>

                  <div className="relative">
                    <label className={`absolute left-5 transition-all duration-200 pointer-events-none ${formData.plan || focused === 'plan' ? 'top-2 text-xs font-bold text-[#00b8d9]' : 'top-4 text-[15px] font-medium text-[#8aacbf]'}`}>Inquiry Subject *</label>
                    <select
                      name="plan" required
                      value={formData.plan} onChange={handleChange}
                      onFocus={() => setFocused('plan')} onBlur={() => setFocused('')}
                      className="ct-input-fancy pt-6 pb-2 appearance-none bg-transparent relative z-10"
                    >
                      <option value="" disabled hidden></option>
                      <option value="marketing_mastery">Marketing Mastery Plan</option>
                      <option value="branding_mastery">Branding Mastery Plan</option>
                      <option value="general_inquiry">General Inquiry & Support</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8aacbf]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label className={`absolute left-5 transition-all duration-200 pointer-events-none ${formData.message || focused === 'message' ? 'top-3 text-xs font-bold text-[#00b8d9]' : 'top-5 text-[15px] font-medium text-[#8aacbf]'}`}>Your Message *</label>
                  <textarea
                    name="message" required
                    value={formData.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    className="ct-input-fancy pt-8 pb-4 min-h-[140px] resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0b1628] to-[#1e3a5f] hover:from-[#00b8d9] hover:to-[#0096b3] text-white font-extrabold text-lg py-5 rounded-[16px] transition-all duration-500 shadow-[0_10px_30px_rgba(11,22,40,0.2)] hover:shadow-[0_15px_40px_rgba(0,184,217,0.3)] transform hover:-translate-y-1"
                >
                  Send
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
