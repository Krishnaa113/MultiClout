import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function RefundPolicy() {
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
              <span className="text-[#fff]/80">Refund Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              Refund Policy
            </h1>
            <p className="text-[#fff]/60 max-w-2xl mx-auto">
              Please take a moment to understand our refund process, eligibility, and timelines.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 -mt-10">
          <div className="bg-[#fff] rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-8 md:p-14">
            
            <div className="prose-section">
              <p><strong>MultiClout Refund Policy</strong></p>
            </div>

            <div className="prose-section">
              <h2>1. General Information</h2>
              <p>Eligible refunds may take 7-10 business days to appear in your account, depending on the processing times of our third-party payment providers. We strive for efficient processing, though occasional delays may occur due to bank processing times. We maintain communication with payment gateways to resolve any delays. Thank you for your patience.</p>
            </div>

            <div className="prose-section">
              <h2>2. Refundable Products & Services</h2>
              <p>Customers may request a refund within <strong>24 hours</strong> of the original transaction. Please note, refund requests after 24 hours will not be entertained.</p>
              
              <h3>Fees:</h3>
              <ul>
                <li><strong>Payment Gateway Fee:</strong> 2.75% of the paid amount</li>
                <li><strong>Processing Fee:</strong> 10% of the paid amount</li>
              </ul>
              
              <h3>How to Request a Refund</h3>
              <p>Email <a href="mailto:refunds@multiclout.com" className="text-[#00b8d9] font-semibold hover:underline">refunds@multiclout.com</a> using your registered email ID. Include:</p>
              <ul>
                <li>Full Name</li>
                <li>Registered Email ID</li>
                <li>Registration Date</li>
                <li>Payment Invoice Screenshot (with date and time)</li>
                <li>Reason for Refund</li>
              </ul>
              <p><em>Note: Refund requests will only be processed if sent to refunds@multiclout.com.</em></p>
              
              <h3>Specific Programs</h3>
              <ul>
                <li><strong>Content Creation Mastery:</strong> Full refund available within 24 hours of enrollment. Contact support in writing.</li>
                <li><strong>Monetization Series:</strong> Refund requests accepted within 48 hours of purchase. No refunds available after this period.</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2>3. Non-Refundable Products & Services</h2>
              <p>Refunds are not available for any products purchased directly from the MultiClout website or via affiliate links after 24 hours.</p>
              <ul>
                <li>MultiClout Prime</li>
                <li>MultiClout Upskilling</li>
                <li>MultiClout In-Demand</li>
                <li>Add-Ons (only active with active packages)</li>
                <li>Content Creation Webinar</li>
                <li>One-on-One Consultation</li>
                <li>Sunday Special Training Powered by MultiClout</li>
                <li>MultiClout Cafe Connect</li>
                <li>Humans of MultiClout (HOB)</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2>4. Contact Information</h2>
              <p>For inquiries:</p>
              <ul>
                <li><strong>Feedback, Complaints & Technical Support:</strong> <a href="mailto:support@multiclout.com" className="text-[#00b8d9] font-semibold hover:underline">support@multiclout.com</a></li>
                <li><strong>General Inquiries:</strong> <a href="mailto:info@multiclout.com" className="text-[#00b8d9] font-semibold hover:underline">info@multiclout.com</a></li>
                <li><strong>Refunds:</strong> <a href="mailto:refunds@multiclout.com" className="text-[#00b8d9] font-semibold hover:underline">refunds@multiclout.com</a></li>
                <li><strong>Enrollment & Payment Queries:</strong> WhatsApp 7206123452</li>
                <li><strong>Customer Support Number:</strong> +91-7206123452 (Monday to Sunday, 10:30 AM to 6:00 PM)</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
