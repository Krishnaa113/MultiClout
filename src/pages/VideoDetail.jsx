import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Download, 
  Share2, 
  Star, 
  Clock, 
  Eye, 
  ChevronRight, 
  ChevronLeft,
  Smartphone,
  CheckCircle2,
  Info
} from 'lucide-react';
import Footer from '../components/Footer';

// Use same dummy data generator for consistency or simulation
const generateRelatedVideos = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `related-${i}`,
    title: `Related Masterclass: Advanced Techniques ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/related${i}/400/700`,
    views: Math.floor(Math.random() * 50) + 5 + 'K',
    duration: `${Math.floor(Math.random() * 5) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    rating: (Math.random() * (5 - 4.5) + 4.5).toFixed(1)
  }));
};

const VideoDetail = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [relatedVideos] = useState(generateRelatedVideos(6));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock data for the current video
  const videoData = {
    title: "How to Build a High-Ticket Agency in 2026",
    category: "Business",
    views: "128K",
    rating: "4.9",
    duration: "12:45",
    language: "Hindi",
    description: "Learn the specific frameworks and systems used to build and scale a high-ticket agency from scratch. We cover everything from lead generation and sales to fulfillment and client retention. This masterclass is designed for entrepreneurs who want to reach $100k/month without losing their sanity.",
    author: "Krishna Kumar",
    date: "A Pril 12, 2026",
    thumbnail: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div className="min-h-screen bg-[#03060D] text-white pt-[64px] font-sans selection:bg-[#00c6d7] selection:text-black">
      
      {/* ─── Breadcrumbs ─── */}
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight size={14} />
        <Link to="/watch-videos" className="hover:text-white transition-colors">Videos</Link>
        <ChevronRight size={14} />
        <span className="text-[#00c6d7] font-medium truncate max-w-[150px] md:max-w-xs">{videoData.title}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* ─── Left Column: Video Player ─── */}
          <div className="lg:col-span-4 xl:col-span-4 order-1">
            <div className="sticky top-[100px]">
              <div className="relative aspect-[9/16] w-full max-w-[350px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(0,198,215,0.1)] group bg-black">
                <img 
                  src={videoData.thumbnail} 
                  alt={videoData.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-20 blur-sm' : 'opacity-100'}`}
                />
                
                {/* Visual Player Controls Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {!isPlaying ? (
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-[0_0_40px_rgba(0,198,215,0.6)] hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                      <Play className="text-[#03060D] ml-1" size={32} fill="currentColor" />
                    </button>
                  ) : (
                    <div className="text-center p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 m-4">
                      <p className="text-sm font-medium mb-3">You're watching a preview</p>
                      <button 
                        onClick={() => setIsPlaying(false)}
                        className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-xs transition-colors"
                      >
                        Reset Demo
                      </button>
                    </div>
                  )}
                </div>

                {/* Video Info Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                   <div className="flex items-center gap-3 mb-4">
                     <span className="bg-[#00c6d7] text-[#03060D] text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">Series</span>
                     <span className="text-gray-400 text-xs">{videoData.duration} Mins</span>
                   </div>
                   <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4">{videoData.title}</h2>
                   <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                     <div className="w-1/3 h-full bg-[#00c6d7] shadow-[0_0_10px_#00c6d7]"></div>
                   </div>
                   <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                     <span>Watching</span>
                     <span>33% Completed</span>
                   </div>
                </div>
              </div>

              {/* Mobile Interaction Bar */}
              <div className="flex justify-center gap-4 mt-6 lg:hidden">
                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00c6d7]/10 group-hover:border-[#00c6d7]/30 transition-all">
                    <Share2 size={20} className="group-hover:text-[#00c6d7]" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Share</span>
                </button>
                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00c6d7]/10 group-hover:border-[#00c6d7]/30 transition-all">
                    <Download size={20} className="group-hover:text-[#00c6d7]" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Download</span>
                </button>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Details & Related ─── */}
          <div className="lg:col-span-8 xl:col-span-8 order-2 space-y-10">
            
            {/* 1. Primary Info */}
            <section className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-[#00c6d7]/10 text-[#00c6d7] text-xs font-bold rounded-full border border-[#00c6d7]/20">
                  {videoData.category}
                </span>
                <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/5 px-2 py-1 rounded-md border border-yellow-400/10">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold">{videoData.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Eye size={14} />
                  <span>{videoData.views} views</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Clock size={14} />
                  <span>{videoData.duration}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
                Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c6d7] to-[#0e7fa8]">{videoData.title.split(' ').slice(-1)}</span>
              </h1>

              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00c6d7] to-[#0e7fa8] flex items-center justify-center font-bold text-[#03060D]">
                  KK
                </div>
                <div>
                  <p className="text-sm font-bold flex items-center gap-1.5">
                    {videoData.author}
                    <CheckCircle2 size={14} className="text-[#00c6d7]" fill="currentColor" />
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{videoData.date}</p>
                </div>
                <button className="ml-auto px-6 py-2 bg-[#00c6d7]/20 text-[#00c6d7] border border-[#00c6d7]/40 rounded-full text-xs font-bold hover:bg-[#00c6d7] hover:text-[#03060D] transition-all">
                  Follow
                </button>
              </div>
            </section>

            {/* 2. Description */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                <Info size={16} className="text-[#00c6d7]" />
                <h3 className="text-lg font-bold">About this Masterclass</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {videoData.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Agency', 'Scaling', 'Marketing', 'Business Strategy', 'Sales'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-500 hover:text-[#00c6d7] cursor-pointer transition-colors uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </section>

            {/* 3. App CTA Banner */}
            <section className="relative p-6 md:p-10 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#00c6d7]/20 to-[#0e7fa8]/10 border border-[#00c6d7]/20 group">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="space-y-4 flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Watch offline on the app</h3>
                  <p className="text-sm text-gray-300 max-w-sm">
                    Download lessons and watch them anytime, anywhere. Get exclusive content only on our Android application.
                  </p>
                  <button className="flex items-center gap-3 bg-white text-[#03060D] px-8 py-4 rounded-full font-black hover:bg-[#00c6d7] transition-all duration-300 shadow-xl group-hover:scale-105 active:scale-95">
                    <Smartphone size={20} />
                    Download Now
                  </button>
                </div>
                <div className="relative w-40 h-40 md:w-56 md:h-56">
                  <div className="absolute inset-0 bg-[#00c6d7] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  {/* Mock Phone Visual */}
                  <div className="w-full h-full bg-[#03060D] rounded-3xl border border-white/10 p-2 transform rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-b from-[#111] to-[#222] rounded-2xl overflow-hidden relative">
                       <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00c6d7]/20" size={60} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Related Videos Grid */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-[#00c6d7] rounded-full"></div>
                  Recommended for You
                </h3>
                <Link to="/watch-videos" className="text-xs font-bold text-gray-500 hover:text-[#00c6d7] flex items-center gap-1 transition-colors">
                  VIEW ALL <ChevronRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {relatedVideos.map((vid) => (
                  <Link 
                    key={vid.id} 
                    to={`/video/${vid.id}`} 
                    className="group space-y-3 block"
                  >
                    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-[#111A28]">
                      <img 
                        src={vid.thumbnail} 
                        alt={vid.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-bold border border-white/10">
                        {vid.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
                        <div className="w-10 h-10 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-lg">
                          <Play size={16} fill="currentColor" className="text-[#03060D] ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs md:text-sm font-bold line-clamp-2 group-hover:text-[#00c6d7] transition-colors leading-tight">
                        {vid.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium">
                         <span className="flex items-center gap-1">
                           <Star size={10} className="text-yellow-400" fill="currentColor" />
                           {vid.rating}
                         </span>
                         <span>{vid.views}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VideoDetail;
