import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Check, PlayCircle, Monitor, FileText, Download, Infinity, Trophy, ChevronRight, Globe, AlertCircle, Share2 } from 'lucide-react';
import axios from 'axios';
import Footer from '../components/Footer';

export default function CourseDetail() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCourseData();
  }, [id]);

  const fetchCourseData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/course-detail/${id}`);
      setCourseData(response.data.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching course data:', err);
      setError('Failed to load course content');
    } finally {
      setLoading(false);
    }
  };

  // Default fallback data
  const defaultData = {
    hero: {
      title: "Marketing Mastery: The Complete Guide 2026",
      subtitle: "Learn advanced marketing strategies, branding techniques, and how to scale your business exponentially with proven step-by-step methods.",
      description: "Welcome to Marketing Mastery, the most comprehensive and up-to-date marketing course on the internet.",
      badge: "Bestseller",
      rating: 4.8,
      ratingsCount: "12,450",
      studentsCount: "64,892",
      instructor: "Multiclout Master",
      lastUpdated: "11/2025",
      language: "English",
      previewImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    pricing: {
      currentPrice: "₹2,550",
      originalPrice: "₹8,999",
      discountText: "71% off! Limited time offer",
      guaranteeText: "30-Day Money-Back Guarantee"
    },
    learningPoints: [
      "Build an advanced marketing funnel from scratch",
      "Master brand positioning & storytelling",
      "Generate high-converting organic traffic",
      "Optimize paid ad campaigns on Meta & Google",
      "Understand consumer psychology and buying behavior",
      "Automate your sales processes for passive growth"
    ],
    courseContent: {
      totalSections: "15",
      totalLectures: "142",
      totalLength: "22h 15m",
      sections: [
        {
          title: "M1: Introduction to Marketing",
          lectures: "5",
          duration: "45 min",
          isExpanded: true,
          lectureItems: [
            { type: "video", title: "Welcome to the Course", duration: "03:12", isPreview: true },
            { type: "video", title: "Understanding the Modern Consumer", duration: "12:45" },
            { type: "article", title: "Worksheet: Goal Setting", duration: "2 pages" }
          ]
        },
        {
          title: "M2: Advanced Branding Strategies",
          lectures: "12",
          duration: "2h 10m",
          isExpanded: false,
          lectureItems: []
        },
        {
          title: "M3: Social Media Domination",
          lectures: "18",
          duration: "3h 45m",
          isExpanded: false,
          lectureItems: []
        }
      ]
    },
    requirements: [
      "No prior marketing or business experience required.",
      "A computer or smartphone with an internet connection.",
      "A willingness to learn and apply the strategies discussed."
    ],
    description: "Welcome to Marketing Mastery, the most comprehensive and up-to-date marketing course on the internet. Are you struggling to get eyes on your business? Do you feel like you have a great product but nobody knows about it? In this course, we will break down the exact strategies used by multi-million dollar corporations and apply them to your business.",
    courseIncludes: {
      videoHours: "22.5",
      articles: "14",
      downloadableResources: "84",
      accessOnDevices: true,
      lifetimeAccess: true,
      certificate: true
    }
  };

  const data = courseData || defaultData;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fff] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00b8d9] mx-auto mb-4"></div>
          <p className="text-[#1e3a5f]">Loading course content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#fff] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <p className="text-[#1e3a5f] mb-4">{error}</p>
          <button 
            onClick={fetchCourseData}
            className="bg-[#00b8d9] text-white px-6 py-2 rounded-lg hover:bg-[#1e3a5f] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
        @keyframes cd-bgDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(14px, -10px) scale(1.05); }
        }
        `}
      </style>
      <div className="cd-root bg-[#fff] min-h-screen text-[#1e3a5f] pb-20">
      
      {/* ─── Hero Banner ─── */}
      <div className="bg-[#0b1628] text-[#fff] pt-24 md:pt-28 pb-12 relative w-full overflow-hidden border-t-[3px] border-[#00b8d9]">
        {/* Decorative Orbs to match Footer */}
        <div style={{ position: 'absolute', pointerEvents: 'none', borderRadius: '50%', width: 380, height: 380, top: -140, right: -80, background: '#00b8d90d', animation: 'cd-bgDrift 10s ease-in-out infinite 0s' }} />
        <div style={{ position: 'absolute', pointerEvents: 'none', borderRadius: '50%', width: 260, height: 260, bottom: -60, left: -60, background: '#00b8d908', animation: 'cd-bgDrift 10s ease-in-out infinite 5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-[#00b8d9] font-bold mb-6 gap-2">
              <Link to="/" className="hover:text-[#fff] transition-colors">Business</Link>
              <ChevronRight size={14} className="text-[#00b8d9]/60" />
              <Link to="/" className="hover:text-[#fff] transition-colors">Entrepreneurship</Link>
              <ChevronRight size={14} className="text-[#00b8d9]/60" />
              <span className="text-[#fff]/80">Business Strategy</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fff]">
              {data.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-[#fff]/80 mb-6 max-w-3xl">
              {data.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm md:text-base">
              <span className="bg-[#00b8d9] text-[#fff] font-bold px-2 py-1 rounded text-xs uppercase tracking-wider">
                {data.hero.badge}
              </span>
              <span className="text-[#00b8d9] font-bold flex items-center gap-1 ml-2">
                {data.hero.rating} <Star size={16} fill="#00b8d9" stroke="none" />
                <Star size={16} fill="#00b8d9" stroke="none" />
                <Star size={16} fill="#00b8d9" stroke="none" />
                <Star size={16} fill="#00b8d9" stroke="none" />
                <Star size={16} fill="#00b8d9" stroke="none" />
              </span>
              <a href="#reviews" className="text-[#00b8d9] hover:text-[#fff] hover:underline underline-offset-2 ml-1">
                ({data.hero.ratingsCount} ratings)
              </a>
              <span className="text-[#fff]/70 ml-2">{data.hero.studentsCount} students</span>
            </div>

            <div className="text-sm mb-4 text-[#fff]/70">
              Created by <a href="#" className="text-[#00b8d9] hover:underline font-bold">{data.hero.instructor}</a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[#fff]/80">
              <div className="flex items-center gap-2"><AlertCircle size={16} /> Last updated {data.hero.lastUpdated}</div>
              <div className="flex items-center gap-2"><Globe size={16} /> {data.hero.language}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Content Area ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Main Left Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            
            {/* Mobile Preview & Price (Hidden on Desktop) */}
            <div className="lg:hidden bg-[#fff] rounded-2xl overflow-hidden border border-[#1e3a5f]/10 shadow-md mb-2">
              <div className="relative border-b-[3px] border-[#00b8d9]">
                <img 
                  src={data.hero.previewImage} 
                  alt="Course Preview" 
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/20">
                  <div className="bg-[#fff]/20 backdrop-blur-md rounded-full p-4 border border-[#fff]/40">
                    <PlayCircle size={32} className="text-[#fff]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-extrabold text-[#1e3a5f] mb-1 flex items-end gap-3">
                  {data.pricing.currentPrice}
                  <span className="text-[#1e3a5f]/40 font-medium text-base line-through mb-1">{data.pricing.originalPrice}</span>
                </div>
                <div className="text-[#00b8d9] font-bold text-[13px] mb-5 flex items-center gap-1.5">
                  <AlertCircle size={14} /> {data.pricing.discountText}
                </div>
                <button className="w-full bg-[#1e3a5f] hover:bg-[#00b8d9] text-[#fff] font-bold py-3.5 rounded-xl mb-3 shadow-lg transition-colors">
                  Add to cart
                </button>
                <div className="text-center text-[11px] font-bold text-[#1e3a5f]/40 uppercase tracking-tighter">
                  {data.pricing.guaranteeText} • Full Lifetime Access
                </div>
              </div>
            </div>
            
            {/* What you'll learn (Box) */}
            <div className="border border-[#1e3a5f]/10 p-6 md:p-8 rounded-2xl bg-[#00b8d9]/[0.02]">
              <h2 className="text-2xl font-extrabold mb-6 text-[#1e3a5f]">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm md:text-base text-[#1e3a5f]/80">
                {data.learningPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-0.5 bg-[#00b8d9]/10 p-1 rounded-full"><Check size={16} className="text-[#00b8d9] flex-shrink-0" strokeWidth={3} /></div>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Content Accordion Dummy */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-[#1e3a5f]">Course content</h2>
              <div className="flex justify-between items-center text-sm mb-4 text-[#1e3a5f]/60">
                <span>{data.courseContent.totalSections} sections • {data.courseContent.totalLectures} lectures • {data.courseContent.totalLength} total length</span>
                <button className="text-[#00b8d9] font-bold hover:text-[#1e3a5f] transition-colors">Expand all sections</button>
              </div>
              
              <div className="border border-[#1e3a5f]/10 rounded-xl overflow-hidden shadow-sm">
                {data.courseContent.sections.map((section, index) => (
                  <div key={index}>
                    <div className="bg-[#1e3a5f]/[0.03] border-b border-[#1e3a5f]/10 p-4 flex justify-between items-center cursor-pointer hover:bg-[#1e3a5f]/[0.06] transition-colors">
                      <div className="flex items-center gap-3 font-bold text-lg text-[#1e3a5f]">
                        <span>{section.title}</span>
                      </div>
                      <span className="text-sm text-[#1e3a5f]/60">{section.lectures} lectures • {section.duration}</span>
                    </div>
                    {section.isExpanded && section.lectureItems && section.lectureItems.length > 0 && (
                      <div className="bg-[#fff] p-4 text-[#1e3a5f]/80">
                        <ul className="space-y-4 text-sm pl-4">
                          {section.lectureItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex justify-between items-center hover:bg-[#1e3a5f]/5 p-1 -mx-1 rounded">
                              <div className="flex items-center gap-3">
                                {item.type === 'video' && (
                                  <PlayCircle size={16} className={item.isPreview ? "text-[#00b8d9]" : "text-[#1e3a5f]/40"} />
                                )}
                                {item.type === 'article' && (
                                  <FileText size={16} className="text-[#1e3a5f]/40" />
                                )}
                                {item.type === 'quiz' && (
                                  <FileText size={16} className="text-[#1e3a5f]/40" />
                                )}
                                <span className={item.isPreview ? "text-[#00b8d9] font-medium hover:underline cursor-pointer" : ""}>
                                  {item.title}
                                </span>
                              </div>
                              <span className="text-[#1e3a5f]/60">{item.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-[#1e3a5f]">Requirements</h2>
              <ul className="pl-2 space-y-3 text-[#1e3a5f]/80">
                {data.requirements.map((requirement, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-[#00b8d9] rounded-full"></div>
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-[#1e3a5f]">Description</h2>
              <div className="text-[#1e3a5f]/80 space-y-4 leading-relaxed">
                <p>{data.description}</p>
              </div>
            </div>

            {/* Mobile "Course Includes" (Hidden on Desktop) */}
            <div className="lg:hidden border border-[#1e3a5f]/10 rounded-2xl p-6 bg-[#fff] shadow-sm">
              <h3 className="font-extrabold text-lg mb-4 text-[#1e3a5f] uppercase tracking-wider">This course includes:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-[#1e3a5f]/80">
                <li className="flex items-center gap-3"><Monitor size={16} className="text-[#00b8d9]" /> {data.courseIncludes.videoHours} hours on-demand video</li>
                <li className="flex items-center gap-3"><FileText size={16} className="text-[#00b8d9]" /> {data.courseIncludes.articles} articles</li>
                <li className="flex items-center gap-3"><Download size={16} className="text-[#00b8d9]" /> {data.courseIncludes.downloadableResources} downloadable resources</li>
                {data.courseIncludes.accessOnDevices && (
                  <li className="flex items-center gap-3"><Monitor size={16} className="text-[#00b8d9]" /> Access on mobile and TV</li>
                )}
                {data.courseIncludes.lifetimeAccess && (
                  <li className="flex items-center gap-3"><Infinity size={16} className="text-[#00b8d9]" /> Full lifetime access</li>
                )}
                {data.courseIncludes.certificate && (
                  <li className="flex items-center gap-3"><Trophy size={16} className="text-[#00b8d9]" /> Certificate of completion</li>
                )}
              </ul>
            </div>

          </div>

          {/* ─── Right Floating Card (Desktop) ─── */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 bg-[#fff] border-[1.5px] border-[#1e3a5f]/10 rounded-2xl shadow-xl shadow-[#1e3a5f]/5 mb-10 pb-6 w-full -mt-[380px] z-10 transition-transform overflow-hidden hover:-translate-y-2 hover:border-[#00b8d9]/50 hover:shadow-2xl hover:shadow-[#1e3a5f]/10 duration-300">
              {/* Preview Image/Video */}
              <div className="relative group cursor-pointer border-b-[3px] border-[#00b8d9]">
                <img 
                  src={data.hero.previewImage} 
                  alt="Course Demo" 
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#1e3a5f]/30 group-hover:bg-[#1e3a5f]/20 transition-colors">
                  <div className="bg-[#fff]/20 backdrop-blur-md rounded-full p-4 flex items-center justify-center relative border border-[#fff]/40 shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle size={36} className="text-[#fff]" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#00b8d9] text-[#fff] text-[10px] font-bold px-2 py-1 uppercase rounded tracking-wider shadow-sm">
                  Preview video
                </div>
              </div>

              {/* Purchase Section */}
              <div className="px-6 pt-6 relative">
                <div className="text-4xl font-extrabold text-[#1e3a5f] mb-1 tracking-tight flex items-end gap-3">
                  {data.pricing.currentPrice}
                  <span className="text-[#1e3a5f]/40 font-medium text-lg line-through mb-1">{data.pricing.originalPrice}</span>
                </div>
                <div className="text-[#00b8d9] font-bold text-sm mb-6 flex items-center gap-1.5">
                  <AlertCircle size={14} /> {data.pricing.discountText}
                </div>

                <button className="w-full bg-[#1e3a5f] hover:bg-[#00b8d9] text-[#fff] font-bold py-3.5 px-4 rounded-xl mb-3 transition-colors duration-300 shadow-md flex items-center justify-center">
                  Add to cart
                </button>
                <button className="w-full bg-[#fff] hover:bg-[#1e3a5f]/5 border-2 border-[#1e3a5f]/20 text-[#1e3a5f] font-bold py-3.5 px-4 rounded-xl mb-5 transition-colors duration-300">
                  Buy now
                </button>
                
                <p className="text-center text-xs font-semibold text-[#1e3a5f]/50 mb-6 flex items-center justify-center gap-1">
                  {data.pricing.guaranteeText}
                </p>

                {/* Course Includes */}
                <div>
                  <h4 className="font-bold text-sm mb-4 text-[#1e3a5f] uppercase tracking-wider">This course includes:</h4>
                  <ul className="space-y-3.5 text-sm text-[#1e3a5f]/80">
                    <li className="flex items-center gap-3"><Monitor size={16} className="text-[#00b8d9]" /> {data.courseIncludes.videoHours} hours on-demand video</li>
                    <li className="flex items-center gap-3"><FileText size={16} className="text-[#00b8d9]" /> {data.courseIncludes.articles} articles</li>
                    <li className="flex items-center gap-3"><Download size={16} className="text-[#00b8d9]" /> {data.courseIncludes.downloadableResources} downloadable resources</li>
                    {data.courseIncludes.accessOnDevices && (
                      <li className="flex items-center gap-3"><Monitor size={16} className="text-[#00b8d9]" /> Access on mobile and TV</li>
                    )}
                    {data.courseIncludes.lifetimeAccess && (
                      <li className="flex items-center gap-3"><Infinity size={16} className="text-[#00b8d9]" /> Full lifetime access</li>
                    )}
                    {data.courseIncludes.certificate && (
                      <li className="flex items-center gap-3"><Trophy size={16} className="text-[#00b8d9]" /> Certificate of completion</li>
                    )}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-xs font-bold text-[#1e3a5f]/70 mt-8 pt-5 border-t border-[#1e3a5f]/10">
                  <button className="hover:text-[#00b8d9] flex gap-1 items-center transition-colors">Share <Share2 size={13}/></button>
                  <button className="hover:text-[#00b8d9] flex gap-1 items-center transition-colors">Gift course</button>
                  <button className="hover:text-[#00b8d9] flex gap-1 items-center transition-colors">Apply Coupon</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* ─── Mobile Sticky Bottom CTA ─── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#fff] border-t border-[#1e3a5f]/10 p-4 flex justify-between items-center shadow-[0_-4px_16px_rgba(30,58,95,0.08)] z-50">
        <div>
          <div className="text-2xl font-extrabold tracking-tight text-[#1e3a5f]">{data.pricing.currentPrice}</div>
          <div className="text-[10px] uppercase font-bold tracking-wider text-[#00b8d9]">{data.pricing.discountText}</div>
        </div>
        <button className="bg-[#1e3a5f] text-[#fff] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#00b8d9] transition-colors flex-shrink-0">
          Buy now
        </button>
      </div>

      </div>

      <Footer />
    </>
  );
}