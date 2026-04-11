import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
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
              <span className="text-[#fff]/80">Terms and Conditions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              Terms & Conditions
            </h1>
            <p className="text-[#fff]/60 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our service.
            </p>
          </div>
        </div>

        {/* ─── Main Content ─── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 -mt-10">
          <div className="bg-[#fff] rounded-3xl shadow-xl shadow-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-8 md:p-14">
            
            <div className="prose-section">
              <p>
                <strong>Welcome to Multi Clout Private Limited (“Company”, “we”, “our”, “us”)!</strong><br /><br />
                These Terms and Conditions (“Terms”, “Terms of Service”) govern your enrollment in our courses via the MultiClout.com website. By using our website and services, you agree to comply with and be bound by these Terms.<br /><br />
                Our Privacy Policy also governs your use of our Service and explains how we collect, protect, and disclose information resulting from your use of our website. (Data Protection Laws)
              </p>
            </div>

            <div className="prose-section">
              <h2>Privacy Policy</h2>
              <p><strong>Collection of Personal Information:</strong> Multi Clout Private Limited is committed to safeguarding your privacy. In the course of using our Service, we may collect personal information such as your name, contact details, photos, payment information, and other relevant data.</p>
              <p><strong>Use of Personal Information:</strong> We use the collected information for various purposes, including processing purchases, providing customer support, improving our services, and sending relevant communications. By using our Service, you consent to the collection and use of your personal information as described in this Privacy Policy.</p>
              <p><strong>Data Security:</strong> We prioritize the security of your data and take reasonable measures to protect it from unauthorized access, disclosure, alteration, and destruction. However, please note that no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              <p><strong>Third-Party Services:</strong> We may use third-party services to facilitate our Service and enhance user experience. These third parties may access your personal information but are obligated not to disclose or use it for any other purpose.</p>
              <p><strong>Cookies:</strong> We may use cookies to enhance your experience and collect information regarding your usage of our Service. You may disable cookies in your browser settings; however, certain features of the Service may not function properly without cookies.</p>
              <p><strong>Your Rights:</strong> You have the right to review, update, or delete your personal information. If you have concerns about the data we hold or wish to exercise your rights, please contact us at <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>.</p>
              <p><strong>Changes to the Privacy Policy:</strong> We reserve the right to update or modify our Privacy Policy at any time. Any changes will take effect immediately upon posting on this page. It is your responsibility to periodically review this Privacy Policy for updates.</p>
              <p>By using our Service, you agree to the terms outlined in this Privacy Policy.</p>
            </div>

            <div className="prose-section">
              <h2>Agreements</h2>
              <p>Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). By using our Service, you acknowledge that you have read, understood, and agree to be bound by the Agreements.</p>
            </div>

            <div className="prose-section">
              <h2>Legal Compliance</h2>
              <p>Multi Clout affirms its commitment to legal and regulatory compliance, including adherence to the Information Technology Act. We ensure that our operations and services comply with the provisions outlined in the IT Act, demonstrating our dedication to maintaining a secure and lawful online environment.</p>
              <p>If you disagree with any part of the Agreements or cannot comply with them, you may not use the Service. Please contact us at <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a> to discuss possible solutions.</p>
            </div>

            <div className="prose-section">
              <h2>Communications</h2>
              <p>By using our Service, you agree to receive newsletters, marketing, promotional materials, and other information from us. You may opt out of these communications by following the unsubscribe link or by emailing us at <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>.</p>
            </div>

            <div className="prose-section">
              <h2>Purchases</h2>
              <p>If you wish to purchase any product or service through the Service (“Purchase”), you may be asked to provide certain payment information, including but not limited to your credit or debit card number, expiration date, billing address, and shipping details.</p>
              <p>You represent and warrant that: (i) you have the legal right to use any payment method in connection with the Purchase, and (ii) the information you provide to us is true, accurate, and complete.</p>
              <p>We may employ third-party services to facilitate payment processing and the completion of Purchases. By submitting your payment information, you authorize us to provide such details to these third parties, subject to our Privacy Policy.</p>
              <p><strong>Order Refusal and Cancellation:</strong> We reserve the right to refuse or cancel any order at our discretion, including but not limited to reasons such as product or service availability, errors in the product description or pricing, issues with your order, or suspected fraudulent or unauthorized transactions.</p>
              <p><strong>Changes to Offers:</strong> Please note that any offers provided are subject to change, and the Company reserves the right to modify or revoke such offers at any time.</p>
            </div>

            <div className="prose-section">
              <h2>Consumer Protection</h2>
              <p>At MultiClout, we prioritize customer rights and adhere to consumer protection laws. In line with this commitment, we offer the first two modules of every course as demo videos on our website. This allows consumers to evaluate the content and make informed decisions before making a purchase.</p>
            </div>

            <div className="prose-section">
              <h2>Course Participation</h2>
              <p>MultiClout is committed to ethical practices and ensures that no individual is coerced, manipulated, or pressured into enrolling in any course offered on our website. Participation in our courses is entirely voluntary, made with the full consent and free will of the individual.</p>
              <p>We maintain transparency, integrity, and respect for personal choices. We value the autonomy of our customers and learners and ensure that the decision to enroll in any course is made with full understanding and informed consent.</p>
            </div>

            <div className="prose-section">
              <h2>Course Materials</h2>
              <p>MultiClout provides pre-recorded video content as part of our course materials. These videos are designed to enhance your learning experience, offering comprehensive, accessible content that can be viewed at your convenience. Our goal is to deliver high-quality, engaging educational materials for a seamless learning experience.</p>
            </div>

            <div className="prose-section">
              <h2>Contests, Sweepstakes, and Promotions</h2>
              <p>Any contests, sweepstakes, or other promotions (collectively referred to as “Promotions”) available through our Service may have separate rules distinct from these Terms of Service. If you participate in any Promotions, we recommend reviewing the applicable rules and our Privacy Policy. In the event of a conflict between the rules of a Promotion and these Terms of Service, the Promotion rules shall prevail.</p>
            </div>

            <div className="prose-section">
              <h2>Subscriptions</h2>
              <p>Certain portions of our Service are billed on a subscription basis ("Subscription(s)"). You will be charged in advance on a recurring basis, with the billing cycle determined by the subscription plan you select at the time of purchase.</p>
              <p>At the end of each billing cycle, your subscription will automatically renew under the same terms unless you cancel it or MultiClout Private Limited cancels it. You can cancel your subscription renewal through your online account management page or by contacting our customer support team at <a href="mailto:refunds@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">refunds@MultiClout.com</a>.</p>
              <p>A valid payment method is required to process your subscription payment. You agree to provide accurate and complete billing information, including your full name, address, state, postal or zip code, telephone number, and payment method. By submitting your payment information, you authorize MultiClout Private Limited to charge all subscription fees incurred through your account to your designated payment method.</p>
              <p>If automatic billing fails for any reason, MultiClout Private Limited reserves the right to suspend or terminate your access to the Service immediately.</p>
            </div>

            <div className="prose-section">
              <h2>Content</h2>
              <p>Our Service allows you to post, link, store, share, and make available certain information, text, graphics, videos, or other materials ("Content"). You are responsible for the content you post or share on or through the Service, including its legality, reliability, and appropriateness.</p>
              <p>By posting content, you represent and warrant that: (i) You either own the content or have the necessary rights to use and grant us the rights to it as outlined in these Terms, and (ii) Posting your content does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any individual or entity. We reserve the right to terminate the account of any user found to be infringing on copyrights.</p>
              <p>You retain all rights to your content and are responsible for protecting those rights. We assume no liability for content posted by you or any third parties. However, by posting content through our Service, you grant MultiClout Private Limited the right and license to use, modify, publicly perform, display, reproduce, and distribute the content within the Service. This license extends to our ability to make your content available to other users of the Service, who may use it in accordance with these Terms.</p>
              <p>MultiClout Private Limited reserves the right, but is not obligated, to monitor and edit all user-generated content.</p>
              <p>Additionally, content available through the Service is the property of MultiClout Private Limited or used with permission. You are prohibited from distributing, modifying, transmitting, reusing, downloading, reposting, copying, or using such content for commercial purposes or personal gain without express written permission from us.</p>
            </div>

            <div className="prose-section">
              <h2>Prohibited Uses</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. Specifically, you must not:</p>
              <ul>
                <li>Violate any applicable national or international law or regulation.</li>
                <li>Exploit, harm, or attempt to exploit or harm minors by exposing them to inappropriate content or other means.</li>
                <li>Transmit or procure the transmission of any unsolicited advertising, promotional materials, spam, or similar solicitations.</li>
                <li>Impersonate or attempt to impersonate the Company, its employees, another user, or any other individual or entity.</li>
                <li>Engage in any activity that infringes upon the rights of others, or conduct that is illegal, threatening, fraudulent, or harmful.</li>
                <li>Engage in behavior that restricts or inhibits others from using the Service, or that may harm or offend the Company or its users.</li>
              </ul>
              <p>Additionally, you agree not to:</p>
              <ul>
                <li>Use the Service in a manner that could disable, overburden, damage, or impair its functionality.</li>
                <li>Use any automated device, process, or means to access the Service, including for the purpose of monitoring or copying material.</li>
                <li>Use any manual process to monitor or copy material from the Service without prior written consent.</li>
                <li>Introduce harmful software or material, including viruses, trojan horses, worms, or logic bombs.</li>
                <li>Attempt to gain unauthorized access to any part of the Service or interfere with its operation.</li>
                <li>Engage in a denial-of-service or distributed denial-of-service attack against the Service.</li>
                <li>Take any action that may damage the Company's reputation or its ratings.</li>
              </ul>
            </div>

            <div className="prose-section">
              <h2>Analytics</h2>
              <p>We may use third-party service providers to monitor and analyze how you use our Service.</p>
            </div>

            <div className="prose-section">
              <h2>Accounts</h2>
              <p>By creating an account, you affirm that you are over the age of 18, and that the information provided is accurate, complete, and up to date. Failure to provide accurate information may result in the termination of your account. You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately if you suspect any unauthorized access to your account.</p>
              <p>You are prohibited from using a username that is impersonating someone else, violating intellectual property rights, or that is offensive in nature.</p>
              <p>We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.</p>
            </div>

            <div className="prose-section">
              <h2>Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are the exclusive property of Multi Clout Private Limited and its licensors. All rights to the Service are protected by copyright, trademark, and other laws. Our trademarks may not be used without prior written consent.</p>
            </div>

            <div className="prose-section">
              <h2>Copyright Policy</h2>
              <p>We respect intellectual property rights. If you believe your content has been infringed upon, please submit a claim via email to <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>. For further details, please refer to our DMCA procedure for reporting infringement.</p>
            </div>

            <div className="prose-section">
              <h2>Refund Policy</h2>
              <p>For information on refunds, please refer to our refund procedure.</p>
            </div>

            <div className="prose-section">
              <h2>Error Reporting and Feedback</h2>
              <p>You may provide feedback or report errors to us at <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>. By submitting feedback, you grant us a perpetual, irrevocable right to use that feedback in any way, including modifications, without any obligation to you.</p>
            </div>

            <div className="prose-section">
              <h2>Links to Third-Party Websites</h2>
              <p>Our Service may contain links to third-party websites. We do not control or assume responsibility for the content, privacy policies, or practices of these websites.</p>
            </div>

            <div className="prose-section">
              <h2>Disclaimer of Warranty</h2>
              <p>The Service is provided "as is" without any warranty of any kind. We make no representations or warranties regarding the reliability, availability, or accuracy of the Service.</p>
            </div>

            <div className="prose-section">
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, the Company will not be liable for any indirect, punitive, incidental, or consequential damages arising out of or in connection with your use of the Service.</p>
            </div>

            <div className="prose-section">
              <h2>Termination</h2>
              <p>We may suspend or terminate your account for any reason, at our sole discretion, including a breach of these Terms. You may discontinue using the Service at any time.</p>
            </div>

            <div className="prose-section">
              <h2>Fraudulent Activities</h2>
              <p>Beware of fraudulent activities. Our official communication comes from emails with the domain "@MultiClout.com" or MultiCloutofficial@gmail.com. We will never ask for passwords, OTPs, or money for training. For customer queries, contact +91-7206123452 or email <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>.</p>
            </div>

            <div className="prose-section">
              <h2>Governing Law</h2>
              <p>These Terms will be governed by the laws of Delhi, India, without regard to conflict of law principles.</p>
            </div>

            <div className="prose-section">
              <h2>Changes to the Service</h2>
              <p>We reserve the right to modify or discontinue the Service without notice. We will not be liable for any unavailability of the Service.</p>
            </div>

            <div className="prose-section">
              <h2>Amendments to Terms</h2>
              <p>We may update these Terms at any time by posting the revised version on the site. By continuing to use the Service, you agree to the changes.</p>
            </div>

            <div className="prose-section">
              <h2>Waiver and Severability</h2>
              <p>Any failure to enforce a provision of these Terms will not be considered a waiver of such rights. If any provision is held invalid, the remaining provisions will remain in effect.</p>
            </div>

            <div className="prose-section">
              <h2>Acknowledgment</h2>
              <p>By using the Service, you acknowledge that you have read and agree to be bound by these Terms of Service.</p>
            </div>

            <div className="prose-section">
              <h2>Compliance Officer and Grievance Resolution</h2>
              <p>We have appointed a Compliance Officer to ensure adherence to legal requirements. If you have any grievances, please reach out to <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>, and we will address them within 3-5 days.</p>
            </div>

            <div className="prose-section">
              <h2>Contact Us</h2>
              <p>For feedback, complaints, or technical support, contact us at <a href="mailto:support@MultiClout.com" className="text-[#00b8d9] font-semibold hover:underline">support@MultiClout.com</a>. For enrollment and refund queries, reach out to our dedicated support teams.</p>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
