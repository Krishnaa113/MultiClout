import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>
        {`
        @keyframes cd-bgDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(14px, -10px) scale(1.05); }
        }
        .prose-section {
          margin-bottom: 2rem;
        }
        .prose-section h2 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e3a5f;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(30, 58, 95, 0.1);
        }
        .prose-section h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e3a5f;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-section p {
          color: rgba(30, 58, 95, 0.8);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .prose-section ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: rgba(30, 58, 95, 0.8);
        }
        .prose-section li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        `}
      </style>
      <div className="bg-[#fcfdfd] min-h-screen text-[#1e3a5f] pb-20">
      
        {/* ─── Hero Banner ─── */}
        <div className="bg-[#0b1628] text-[#fff] pt-32 md:pt-40 pb-20 relative w-full overflow-hidden border-t-[3px] border-[#00b8d9]">
          <div style={{ position: 'absolute', pointerEvents: 'none', borderRadius: '50%', width: 380, height: 380, top: -140, right: -80, background: '#00b8d90d', animation: 'cd-bgDrift 10s ease-in-out infinite 0s' }} />
          <div style={{ position: 'absolute', pointerEvents: 'none', borderRadius: '50%', width: 260, height: 260, bottom: -60, left: -60, background: '#00b8d908', animation: 'cd-bgDrift 10s ease-in-out infinite 5s' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="flex items-center justify-center text-sm text-[#00b8d9] font-bold mb-4 gap-2 uppercase tracking-wide">
              <Link to="/" className="hover:text-[#fff] transition-colors">Home</Link>
              <span className="text-[#00b8d9]/50">/</span>
              <span className="text-[#fff]/80">Disclaimer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              Disclaimer
            </h1>
            <p className="text-[#fff]/60 max-w-2xl mx-auto">
              Please review our official disclaimers regarding the use of our services.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 -mt-10">
          <div className="bg-[#fff] rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-8 md:p-14">
            
            <div className="prose-section">
              <p><strong>MultiClout Disclaimer</strong></p>
            </div>

            <div className="prose-section">
              <h2>General Information</h2>
              <p>The information provided by Multi Clout Private Limited (“Company,” “we,” “our,” “us”) on MultiClout.com (the “Site”) is intended for general informational purposes only. While we make every effort to ensure the information is provided in good faith, we make no representations or warranties about the accuracy, adequacy, validity, reliability, availability, or completeness of the information on the Site.</p>
              <p><strong>Disclaimer:</strong> UNDER NO CIRCUMSTANCES SHALL WE BE LIABLE FOR ANY LOSS OR DAMAGE ARISING FROM THE USE OF THE SITE OR RELIANCE ON INFORMATION PROVIDED ON THE SITE. USE AT YOUR OWN RISK.</p>
            </div>

            <div className="prose-section">
              <h2>External Links Disclaimer</h2>
              <p>The Site may include links to third-party websites. These links are not monitored by Multi Clout for accuracy or reliability. WE DO NOT GUARANTEE OR ENDORSE INFORMATION ON THIRD-PARTY SITES.</p>
            </div>

            <div className="prose-section">
              <h2>Professional Disclaimer</h2>
              <p>The Site does not provide financial advice and is intended only for informational purposes. We recommend consulting professionals before making financial decisions based on information from this Site.</p>
            </div>

            <div className="prose-section">
              <h2>Affiliates Disclaimer</h2>
              <p>The Site may contain affiliate links, and we may receive commissions for purchases or actions made through these links.</p>
            </div>

            <div className="prose-section">
              <h2>Payment Disclaimer</h2>
              <p>Multi Clout authorizes payments only through our website. Contact our support team on WhatsApp at 7206123452 for payment-related issues.</p>
            </div>

            <div className="prose-section">
              <h2>Purchase Disclaimer</h2>
              <p>Payments made on www.MultiClout.com are solely for purchasing online courses. Becoming an affiliate is optional and free. Purchases do not guarantee commissions or financial returns.</p>
            </div>

            <div className="prose-section">
              <h2>Testimonials Disclaimer</h2>
              <p>Testimonials reflect individual experiences and may not represent every user's experience. Results vary based on effort, skills, and circumstances.</p>
            </div>

            <div className="prose-section">
              <h2>Earnings and Results Disclaimer</h2>
              <p>While we strive to represent our products and services accurately, income or success is not guaranteed. Results depend on personal effort, expertise, and other factors beyond our control.</p>
            </div>

            <div className="prose-section">
              <h2>Errors and Omissions Disclaimer</h2>
              <p>Information is provided “as is” without warranties. We are not responsible for any errors, omissions, or results from using this information.</p>
            </div>

            <div className="prose-section">
              <h2>Guest Contributors Disclaimer</h2>
              <p>Content by guest authors represents their personal opinions and not necessarily those of Multi Clout Private Limited.</p>
            </div>

            <div className="prose-section">
              <h2>Logos and Trademarks Disclaimer</h2>
              <p>All logos and trademarks on the Site are the property of their respective owners, and their inclusion does not imply endorsement by Multi Clout Private Limited.</p>
            </div>

            <div className="prose-section">
              <h2>Contact Us</h2>
              <p>For feedback or inquiries, please contact us at <a href="mailto:info@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">info@MultiClout.com</a>.</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
