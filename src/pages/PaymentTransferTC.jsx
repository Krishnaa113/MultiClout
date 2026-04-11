import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function PaymentTransferTC() {
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
              <span className="text-[#fff]/80">Payment Transfer T&C</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              Payment Transfer Terms
            </h1>
            <p className="text-[#fff]/60 max-w-2xl mx-auto">
              Please read our binding policies relating to rewards, withdrawals, framing, and obligations.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 -mt-10">
          <div className="bg-[#fff] rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-8 md:p-14">
            
            <div className="prose-section">
              <h2>Minimum Withdrawal</h2>
              <p>₹1000 is the minimum amount required for withdrawal.</p>
            </div>

            <div className="prose-section">
              <h2>Withdrawal Requirements</h2>
              <p>Users must have a minimum of 3 direct referrals to be eligible for withdrawals.</p>
            </div>

            <div className="prose-section">
              <h2>Circulating Rewards</h2>
              <p>All rewards and income are provided in the form of MultiClout Services Pvt. Ltd. services.</p>
            </div>

            <div className="prose-section">
              <h2>Staking Packages</h2>
              <p>Once a staking package is chosen, it cannot be canceled or transferred to another person.</p>
            </div>

            <div className="prose-section">
              <h2>Daily Rewards & Income</h2>
              <p>All rewards and income are calculated and closed on a daily basis.</p>
            </div>

            <div className="prose-section">
              <h2>Admin Charges</h2>
              <p>A 10% charge is applied to every withdrawal.</p>
            </div>

            <div className="prose-section">
              <h2>Wallet Transfers</h2>
              <p>To transfer funds from the wallet, users must place a request through the admin.</p>
            </div>

            <div className="prose-section">
              <h2>Income Plans</h2>
              <p>MultiClout Services Pvt. Ltd. offers various income plans, including multi-level marketing, direct sales income, bonus income, and monthly scheme income. These plans are subject to change at the company's discretion without prior notice.</p>
            </div>

            <div className="prose-section">
              <h2>Withdrawal Conditions</h2>
              <p>Users may request withdrawals once their wallet balance reaches a minimum of ₹1000. The company reserves the right to adjust withdrawal limits and processing times.</p>
            </div>

            <div className="prose-section">
              <h2>Additional Incentives</h2>
              <p>Based on team performance, users may qualify for additional incentives, such as gifts or cash prizes, which the company may adjust or discontinue as needed.</p>
            </div>

            <div className="prose-section">
              <h2>User Obligations</h2>
              <p>Users must follow the company's policies and guidelines. Misuse, fraud, or terms violations may result in immediate account suspension or termination.</p>
            </div>

            <div className="prose-section">
              <h2>Compliance with Laws</h2>
              <p>Users must comply with all applicable laws and regulations while participating in company programs. The company is not liable for any legal issues arising from user actions.</p>
            </div>

            <div className="prose-section">
              <h2>Communication</h2>
              <p>Important updates, changes, and notices will be communicated through official channels. Users are responsible for staying informed about such communications.</p>
            </div>

            <div className="prose-section">
              <h2>Acceptance of Terms</h2>
              <p>By participating in MultiClout Services Pvt. Ltd. programs, users acknowledge and accept these terms and conditions. Users should review the T&C regularly as they are binding.</p>
            </div>

            <div className="prose-section">
              <h2>Termination of Services</h2>
              <p>The company reserves the right to terminate or suspend user accounts for violations of terms and conditions, unethical, or fraudulent activities.</p>
            </div>

            <div className="prose-section">
              <h2>Indemnity</h2>
              <p>Users agree to indemnify MultiClout Services Pvt. Ltd., its affiliates, and representatives from any claims, losses, liabilities, or expenses resulting from their use of company services.</p>
            </div>

            <div className="prose-section">
              <h2>Governing Law</h2>
              <p>These terms and conditions are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of the courts in [Jurisdiction].</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
