import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function EULA() {
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
              <span className="text-[#fff]/80">End User License Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              End User License Agreement
            </h1>
            <p className="text-[#fff]/60 max-w-2xl mx-auto">
              Please review the terms binding your usage of Multi Clout applications and services.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 -mt-10">
          <div className="bg-[#fff] rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-8 md:p-14">
            
            <div className="prose-section">
              <p>
                <strong>This End User License Agreement ("Agreement") is a legally binding contract between you ("User") and Multi Clout ("Company," "we," "us," or "our").</strong>
              </p>
              <p>
                By selecting the "Accept" button, installing, or using the Multi Clout application, website, or any associated services, you confirm that you have read, understood, and agree to be bound by all terms and conditions of this Agreement. If you do not agree, please do not proceed with registration or usage, and uninstall any application copies in your possession.
              </p>
            </div>

            <div className="prose-section">
              <h2>1. License Grant</h2>
              <p>Multi Clout grants you a non-transferable, non-exclusive license to use the application and its services for personal, non-commercial use. This license is limited to your own devices within territories where Multi Clout has launched commercially.</p>
              <p>You may not:</p>
              <ul>
                <li>Use or share the application outside authorized methods without written consent.</li>
                <li>Disassemble, modify, or create derivative works of the application, including its content, except where required by law.</li>
                <li>Copy, distribute, or transfer the application to third parties.</li>
                <li>Use the application for any unauthorized commercial purpose, or any illegal activities.</li>
                <li>Access restricted areas of the application or use automation tools without authorization.</li>
              </ul>
              <p>Violation of these restrictions may lead to termination of your account and other legal consequences.</p>
            </div>

            <div className="prose-section">
              <h2>2. Subscription Terms</h2>
              <p>To access subscription-based features, you must pay the applicable fee and agree to additional service terms. Free trial periods are provided at Multi Clout's discretion and are not guaranteed.</p>
            </div>

            <div className="prose-section">
              <h2>3. Updates and Modifications</h2>
              <p>You agree that Multi Clout may automatically update or modify the application to improve functionality. It is your responsibility to maintain compatible hardware and software. We reserve the right to discontinue support for outdated platforms without prior notice.</p>
            </div>

            <div className="prose-section">
              <h2>4. Intellectual Property</h2>
              <p>All rights, title, and interest in the application, content, and related intellectual property remain with Multi Clout. This Agreement does not grant any ownership rights or licenses beyond those expressly stated here.</p>
              <p><strong>Use of Content:</strong> Content provided by Multi Clout is protected by copyright and may not be used for unauthorized purposes. You are solely responsible for ensuring your use does not violate any third-party rights or applicable laws.</p>
            </div>

            <div className="prose-section">
              <h2>5. Hyperlinks and Third-Party Content</h2>
              <p>The application may include links to external websites or advertisements ("Linked Sites"). Multi Clout is not responsible for the content or privacy practices of Linked Sites. Your interactions with third-party sites are governed by their respective terms of use.</p>
            </div>

            <div className="prose-section">
              <h2>6. Registration and Account Security</h2>
              <p>You agree to provide accurate, complete information during registration and to update your account details as needed. You are responsible for all activities under your account and agree to keep your login credentials secure.</p>
            </div>

            <div className="prose-section">
              <h2>7. Payment Terms</h2>
              <p>Payments for services must be made to the designated Multi Clout account. Multi Clout is not liable for any payments made outside of authorized channels.</p>
            </div>

            <div className="prose-section">
              <h2>8. Disclaimer of Warranties</h2>
              <p>Your use of the application is at your own risk. Multi Clout makes no warranty that the application will meet your requirements or that it will be uninterrupted or error-free. We are not liable for any issues that may arise from its use.</p>
            </div>

            <div className="prose-section">
              <h2>9. Limitation of Liability</h2>
              <p>Multi Clout and its affiliates are not liable for any indirect, incidental, or consequential damages related to your use of the application. Our liability, if any, is limited to the amount paid by you for the application or service giving rise to the claim.</p>
            </div>

            <div className="prose-section">
              <h2>10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Multi Clout, its affiliates, and employees from any claims, damages, or expenses arising from your violation of this Agreement or any applicable laws.</p>
            </div>

            <div className="prose-section">
              <h2>11. Termination</h2>
              <p>Multi Clout reserves the right to terminate this Agreement and your access to the application at any time for any reason. Upon termination, you must discontinue all use and destroy any copies of the application in your possession.</p>
            </div>

            <div className="prose-section">
              <h2>12. Modifications to this Agreement</h2>
              <p>Multi Clout may modify this Agreement at any time. Continued use of the application after modifications indicates acceptance. Users are encouraged to review this Agreement periodically for updates.</p>
            </div>

            <div className="prose-section">
              <h2>13. Export Restrictions</h2>
              <p>By using the application, you confirm you are not in a location where use of the application is restricted or prohibited by law.</p>
            </div>

            <div className="prose-section">
              <h2>14. Governing Law</h2>
              <p>This Agreement is governed by the laws of New Delhi, India, without regard to conflict of law principles. Any disputes shall be resolved in the courts of New Delhi.</p>
              <p>If any part of this Agreement is deemed invalid, the remaining sections will continue to apply. This Agreement constitutes the complete agreement between you and Multi Clout concerning the use of the application and supersedes any prior agreements.</p>
            </div>

            <div className="prose-section">
              <h2>Contact Information</h2>
              <p>For inquiries, please reach out to Customer Support via the official contact methods listed on our website.</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
