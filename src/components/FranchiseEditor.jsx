import React, { useState, useEffect } from 'react';

const FranchiseEditor = ({ content, onSave, saving }) => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    ctaText: '',
    heroImage: ''
  });
  
  const [benefits, setBenefits] = useState([]);
  const [steps, setSteps] = useState([]);
  const [investment, setInvestment] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);

  // Initialize with content when component mounts
  useEffect(() => {
    if (content) {
      setHeroContent(content.hero || {
        title: 'Ownership\nSimplified.',
        subtitle: 'Join India\'s most aggressive Digital Marketing distribution network. We provide the infrastructure, you own the market.',
        ctaText: 'Request Prospectus',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
      });
      
      setBenefits(content.benefits || [
        {
          title: "Global Search & Social",
          desc: "Offer premium SEO, Meta Ads, and Performance Marketing services powered by the Multiclout global fulfillment engine.",
          icon: "shield"
        },
        {
          title: "Agency Operations",
          desc: "Comprehensive training on running a high-ticket Digital Marketing agency, from client acquisition to retention.",
          icon: "box"
        },
        {
          title: "Recurring Revenue",
          desc: "Built-in subscription models for Digital Marketing retainers ensuring stable, predictable monthly cash flow.",
          icon: "dollar"
        },
        {
          title: "Direct Lead Access",
          desc: "Access to our proprietary lead generation engines that deliver verified Digital Marketing inquiries in your region.",
          icon: "check"
        }
      ]);
      
      setSteps(content.steps || [
        { id: "01", title: "Apply Online", desc: "Fill out the inquiry form with your professional background and location." },
        { id: "02", title: "Discovery Call", desc: "Our franchise consultants will reach out to discuss the opportunity and align goals." },
        { id: "03", title: "Verification", desc: "Formal review of qualifications, financial capability, and territory availability." },
        { id: "04", title: "Launch", desc: "Complete training, sign documents, and launch your Multiclout franchise." }
      ]);
      
      setInvestment(content.investment || [
        { tier: "Tier 3 Cities", range: "5L - 7L", focus: "Local brokerage and individual client management." },
        { tier: "Tier 2 Cities", range: "8L - 12L", focus: "Regional hub setup with a team of up to 5 executives." },
        { tier: "Metro Cities", range: "15L+", focus: "Full-scale corporate distribution with exclusive region rights." }
      ]);
      
      setTestimonials(content.testimonials || [
        {
          quote: "Scaling a standalone agency was a nightmare. Moving to the Multiclout ecosystem gave me the fulfillment engine I needed to finally focus purely on client relationships.",
          author: "Rahish Kumar",
          role: "Multiclout Partner",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        }
      ]);
      
      setFaqs(content.faqs || [
        { q: "Is prior marketing experience mandatory?", a: "While helpful, it is not mandatory. We look for sales DNA. Our training ecosystem covers everything from product fulfillment to CRM operations." },
        { q: "What is the typical break-even period?", a: "Based on historical partner data, most hubs achieve operational break-even within 4 to 7 months of full-scale launch." },
        { q: "Do you offer financing options?", a: "We have tied up with specific NBFCs to provide business loans to qualified applicants who pass our discovery phase." }
      ]);
    }
  }, [content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      hero: heroContent,
      benefits,
      steps,
      investment,
      testimonials,
      faqs
    });
  };

  const updateBenefit = (index, field, value) => {
    const newBenefits = [...benefits];
    newBenefits[index][field] = value;
    setBenefits(newBenefits);
  };

  const updateStep = (index, field, value) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const updateInvestment = (index, field, value) => {
    const newInvestment = [...investment];
    newInvestment[index][field] = value;
    setInvestment(newInvestment);
  };

  const updateTestimonial = (index, field, value) => {
    const newTestimonials = [...testimonials];
    newTestimonials[index][field] = value;
    setTestimonials(newTestimonials);
  };

  const updateFaq = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addBenefit = () => {
    setBenefits([...benefits, { title: '', desc: '', icon: 'star' }]);
  };

  const removeBenefit = (index) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const addStep = () => {
    setSteps([...steps, { id: '05', title: '', desc: '' }]);
  };

  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
  };

  const addInvestment = () => {
    setInvestment([...investment, { tier: '', range: '', focus: '' }]);
  };

  const removeInvestment = (index) => {
    setInvestment(investment.filter((_, i) => i !== index));
  };

  const addTestimonial = () => {
    setTestimonials([...testimonials, { quote: '', author: '', role: '', image: '' }]);
  };

  const removeTestimonial = (index) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  const addFaq = () => {
    setFaqs([...faqs, { q: '', a: '' }]);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Franchise Page Editor</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <textarea
                value={heroContent.title}
                onChange={(e) => setHeroContent({...heroContent, title: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Ownership\nSimplified."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <textarea
                value={heroContent.subtitle}
                onChange={(e) => setHeroContent({...heroContent, subtitle: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Join India's most aggressive Digital Marketing distribution network..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
              <input
                type="text"
                value={heroContent.ctaText}
                onChange={(e) => setHeroContent({...heroContent, ctaText: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Request Prospectus"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image URL</label>
              <input
                type="text"
                value={heroContent.heroImage}
                onChange={(e) => setHeroContent({...heroContent, heroImage: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="https://images.unsplash.com/photo-..."
              />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Benefits</h3>
            <button
              type="button"
              onClick={addBenefit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Benefit
            </button>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={benefit.title}
                      onChange={(e) => updateBenefit(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Benefit title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Icon (emoji)</label>
                    <input
                      type="text"
                      value={benefit.icon}
                      onChange={(e) => updateBenefit(index, 'icon', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="shield, box, dollar, check"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={benefit.desc}
                      onChange={(e) => updateBenefit(index, 'desc', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Benefit description"
                    />
                  </div>
                </div>
                {benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeBenefit(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Steps</h3>
            <button
              type="button"
              onClick={addStep}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Step
            </button>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Step ID</label>
                    <input
                      type="text"
                      value={step.id}
                      onChange={(e) => updateStep(index, 'id', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="01, 02, 03..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      value={step.title}
                      onChange={(e) => updateStep(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Step title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={step.desc}
                      onChange={(e) => updateStep(index, 'desc', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Step description"
                    />
                  </div>
                </div>
                {steps.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeStep(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Investment Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Investment Tiers</h3>
            <button
              type="button"
              onClick={addInvestment}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Tier
            </button>
          </div>
          <div className="space-y-4">
            {investment.map((tier, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tier Name</label>
                    <input
                      type="text"
                      value={tier.tier}
                      onChange={(e) => updateInvestment(index, 'tier', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Tier 3 Cities"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <input
                      type="text"
                      value={tier.range}
                      onChange={(e) => updateInvestment(index, 'range', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="5L - 7L"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Focus</label>
                    <input
                      type="text"
                      value={tier.focus}
                      onChange={(e) => updateInvestment(index, 'focus', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Focus description"
                    />
                  </div>
                </div>
                {investment.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeInvestment(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Testimonials</h3>
            <button
              type="button"
              onClick={addTestimonial}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Testimonial
            </button>
          </div>
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quote</label>
                    <textarea
                      value={testimonial.quote}
                      onChange={(e) => updateTestimonial(index, 'quote', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      placeholder="Customer testimonial..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                    <input
                      type="text"
                      value={testimonial.author}
                      onChange={(e) => updateTestimonial(index, 'author', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Author name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                    <input
                      type="text"
                      value={testimonial.role}
                      onChange={(e) => updateTestimonial(index, 'role', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Author role"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="text"
                      value={testimonial.image}
                      onChange={(e) => updateTestimonial(index, 'image', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://images.unsplash.com/photo-..."
                    />
                  </div>
                </div>
                {testimonials.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTestimonial(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">FAQs</h3>
            <button
              type="button"
              onClick={addFaq}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add FAQ
            </button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => updateFaq(index, 'q', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="FAQ question..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                    <textarea
                      value={faq.a}
                      onChange={(e) => updateFaq(index, 'a', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={2}
                      placeholder="FAQ answer..."
                    />
                  </div>
                </div>
                {faqs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFaq(index)}
                    className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FranchiseEditor;
