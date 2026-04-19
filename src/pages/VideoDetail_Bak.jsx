// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import {
//   Play,
//   Pause,
//   Download,
//   Share2,
//   Star,
//   Clock,
//   Eye,
//   ChevronRight,
//   ChevronLeft,
//   Smartphone,
//   CheckCircle2,
//   Info
// } from 'lucide-react';
// import axios from 'axios';
// import Footer from '../components/Footer';

// // // Use same dummy data generator for consistency or simulation
// // const generateRelatedVideos = (count) => {
// //   return Array.from({ length: count }).map((_, i) => ({
// //     id: `related-${i}`,
// //     title: `Related Masterclass: Advanced Techniques ${i + 1}`,
// //     thumbnail: `https://picsum.photos/seed/related${i}/400/700`,

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchVideoData();
//   }, [id]);

//   const fetchVideoData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`/api/videos/${id}`);
//       setVideo(response.data.data);
//       setRelatedVideos(response.data.relatedVideos || []);
//     } catch (error) {
//       console.error('Error fetching video data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading || !video) {
//     return (
//       <div className="min-h-screen bg-black text-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#03060D] text-white pt-[64px] font-sans selection:bg-[#00c6d7] selection:text-black">
      
//       {/* ─── Breadcrumbs ─── */}
//       <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-xs md:text-sm text-gray-400">
//         <Link to="/" className="hover:text-white transition-colors">Home</Link>
//         <ChevronRight size={14} />
//         <Link to="/watch-videos" className="hover:text-white transition-colors">Videos</Link>
//         <ChevronRight size={14} />
//         <span className="text-[#00c6d7] font-medium truncate max-w-[150px] md:max-w-xs">{video.title}</span>
//       </nav>

//       {/* ─── Video Player & Info ─── */}
//       <div className="max-w-7xl mx-auto md:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
//           {/* Left Column - Video Player */}
//           <div className="lg:col-span-2">
//             <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
//               <video
//                 className="w-full h-full object-cover"
//                 poster={video.thumbnail}
//                 controls
//                 onPlay={() => setIsPlaying(true)}
//                 onPause={() => setIsPlaying(false)}
//               >
//                 <source src={video.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
              
//               {/* Play/Pause Overlay */}
//               {!isPlaying && (
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
//                       <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
//                         <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                           <div className="w-6 h-6 bg-red-700 rounded-full flex items-center justify-center">
//                             <div className="w-4 h-4 bg-red-800 rounded-full"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Right Column - Video Info */}
//           <div className="space-y-6">
//             <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
//               {video.title}
//             </h1>
            
//             <div className="flex flex-wrap gap-3 mb-6">
//               <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-medium">
//                 {video.category}
//               </span>
//               <span className="flex items-center gap-1 text-white/80">
//                 <Eye size={16} />
//                 <span>{video.views} views</span>
//               </span>
//               <span className="flex items-center gap-1 text-white/80">
//                 <Star size={16} className="text-yellow-400 fill-current" />
//                 <span>{video.rating}</span>
//               </span>
//               <span className="flex items-center gap-1 text-white/80">
//                 <Clock size={16} />
//                 <span>{video.duration}</span>
//               </span>
//               <span className="flex items-center gap-1 text-white/80">
//                 <Smartphone size={16} />
//                 <span>{video.language}</span>
//               </span>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
//                 <p className="text-white/90 leading-relaxed">
//                   {video.description}
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-white mb-3">Details</h3>
//                 <div className="space-y-3 text-white/80">
//                   <div className="flex justify-between">
//                     <span>Author:</span>
//                     <span>{video.author}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Published:</span>
//                     <span>{video.date}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Language:</span>
//                     <span>{video.language}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Duration:</span>
//                     <span>{video.duration}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <button className="flex-1 bg-[#00c6d7] hover:bg-[#0e7fa8] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
//                   <Download size={20} />
//                   Download Video
//                 </button>
//                 <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
//                   <Share2 size={20} />
//                   Share
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ─── Related Videos ─── */}
//       <div className="max-w-7xl mx-auto md:px-8 mt-12">
//         <h2 className="text-2xl md:text-2xl font-bold text-white mb-8">Related Videos</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {relatedVideos.map((video, idx) => (
//             <Link key={idx} to={`/video/${video._id}`} className="group block">
//               <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20">
//                 <div className="aspect-[9/16] relative">
//                   <img
//                     src={video.thumbnail}
//                     alt={video.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <div className="flex items-start justify-between h-full">
//                       <div className="flex-1">
//                         <p className="text-white font-semibold text-sm line-clamp-2 leading-tight">
//                           {video.title}
//                         </p>
//                         <div className="flex items-center gap-2 mt-1">
//                           <span className="text-white/80 text-xs">{video.views} views</span>
//                           <span className="text-white/80 text-xs">{video.duration}</span>
//                           <span className="text-white/80 text-xs">{video.language}</span>
//                           <span className="text-white/80 text-xs">★ {video.rating}</span>
//                         </div>
//                       </div>
//                       <div className="w-8 h-8 flex items-center justify-center">
//                         <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
//                           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
//                             <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
//                               <div className="w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
//                                 <div className="w-3 h-3 bg-red-700 rounded-full flex items-center justify-center">
//                                   <div className="w-2 h-2 bg-red-800 rounded-full"></div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         /* Hide scrollbar for Chrome, Safari and Opera */
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         /* Hide scrollbar for IE, Edge and Firefox */
//         .no-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//       `}</style>
//     </div>
//   );
// //                     {videoData.author}
// //                     <CheckCircle2 size={14} className="text-[#00c6d7]" fill="currentColor" />
// //                   </p>
// //                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{videoData.date}</p>
// //                 </div>
// //                 <button className="ml-auto px-6 py-2 bg-[#00c6d7]/20 text-[#00c6d7] border border-[#00c6d7]/40 rounded-full text-xs font-bold hover:bg-[#00c6d7] hover:text-[#03060D] transition-all">
// //                   Follow
// //                 </button>
// //               </div>
// //             </section>

// //             {/* 2. Description */}
// //             <section className="space-y-4">
// //               <div className="flex items-center gap-2 border-b border-white/5 pb-2">
// //                 <Info size={16} className="text-[#00c6d7]" />
// //                 <h3 className="text-lg font-bold">About this Masterclass</h3>
// //               </div>
// //               <p className="text-gray-300 leading-relaxed text-sm md:text-base">
// //                 {videoData.description}
// //               </p>
// //               <div className="flex flex-wrap gap-2 pt-2">
// //                 {['Agency', 'Scaling', 'Marketing', 'Business Strategy', 'Sales'].map(tag => (
// //                   <span key={tag} className="text-[10px] font-bold text-gray-500 hover:text-[#00c6d7] cursor-pointer transition-colors uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
// //                     #{tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             </section>

// //             {/* 3. App CTA Banner */}
// //             <section className="relative p-6 md:p-10 rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#00c6d7]/20 to-[#0e7fa8]/10 border border-[#00c6d7]/20 group">
// //               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
// //                 <div className="space-y-4 flex-1 text-center md:text-left">
// //                   <h3 className="text-2xl font-bold">Watch offline on the app</h3>
// //                   <p className="text-sm text-gray-300 max-w-sm">
// //                     Download lessons and watch them anytime, anywhere. Get exclusive content only on our Android application.
// //                   </p>
// //                   <button className="flex items-center gap-3 bg-white text-[#03060D] px-8 py-4 rounded-full font-black hover:bg-[#00c6d7] transition-all duration-300 shadow-xl group-hover:scale-105 active:scale-95">
// //                     <Smartphone size={20} />
// //                     Download Now
// //                   </button>
// //                 </div>
// //                 <div className="relative w-40 h-40 md:w-56 md:h-56">
// //                   <div className="absolute inset-0 bg-[#00c6d7] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
// //                   {/* Mock Phone Visual */}
// //                   <div className="w-full h-full bg-[#03060D] rounded-3xl border border-white/10 p-2 transform rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
// //                     <div className="w-full h-full bg-gradient-to-b from-[#111] to-[#222] rounded-2xl overflow-hidden relative">
// //                       <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#00c6d7]/20" size={60} />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </section>

// //             {/* 4. Related Videos Grid */}
// //             <section className="space-y-6">
// //               <div className="flex items-center justify-between">
// //                 <h3 className="text-xl font-bold flex items-center gap-2">
// //                   <div className="w-1.5 h-6 bg-[#00c6d7] rounded-full"></div>
// //                   Recommended for You
// //                 </h3>
// //                 <Link to="/watch-videos" className="text-xs font-bold text-gray-500 hover:text-[#00c6d7] flex items-center gap-1 transition-colors">
// //                   VIEW ALL <ChevronRight size={14} />
// //                 </Link>
// //               </div>

// //               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
// //                 {relatedVideos.map((vid) => (
// //                   <Link
// //                     key={vid.id}
// //                     to={`/video/${vid.id}`}
// //                     className="group space-y-3 block"
// //                   >
// //                     <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-[#111A28]">
// //                       <img
// //                         src={vid.thumbnail}
// //                         alt={vid.title}
// //                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
// //                       />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                       <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-bold border border-white/10">
// //                         {vid.duration}
// //                       </div>
// //                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100">
// //                         <div className="w-10 h-10 rounded-full bg-[#00c6d7] flex items-center justify-center shadow-lg">
// //                           <Play size={16} fill="currentColor" className="text-[#03060D] ml-0.5" />
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="space-y-1">
// //                       <h4 className="text-xs md:text-sm font-bold line-clamp-2 group-hover:text-[#00c6d7] transition-colors leading-tight">
// //                         {vid.title}
// //                       </h4>
// //                       <div className="flex items-center justify-between text-[10px] text-gray-500 font-medium">
// //                         <span className="flex items-center gap-1">
// //                           <Star size={10} className="text-yellow-400" fill="currentColor" />
// //                           {vid.rating}
// //                         </span>
// //                         <span>{vid.views}</span>
// //                       </div>
// //                     </div>
// //                   </Link>
// //                 ))}
// //               </div>
// //             </section>

// //           </div>
// //         </div>
// //       </main>

// //       <Footer />

// //       <style jsx>{`
// //         .line-clamp-2 {
// //           display: -webkit-box;
// //           -webkit-line-clamp: 2;
// //           -webkit-box-orient: vertical;
// //           overflow: hidden;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default VideoDetail;



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import {
//   Play,
//   Pause,
//   Download,
//   Share2,
//   Star,
//   Clock,
//   Eye,
//   ChevronRight,
//   ChevronLeft,
//   Smartphone,
//   CheckCircle2,
//   Info,
//   BookOpen,
//   TrendingUp,
//   Users,
//   Zap
// } from 'lucide-react';


// const VideoDetail = () => {
//   const { id } = useParams();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [video, setVideo] = useState(null);
//   const [relatedVideos, setRelatedVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchVideoData();
//   }, [id]);

//   const fetchVideoData = async () => {
//     try {
//       const response = await fetch(`https://example.com/video/${id}`);
//       const data = await response.json();
//       setVideo(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const stats = [
//     { icon: Users, label: "Students", value: "24.6K" },
//     { icon: BookOpen, label: "Lessons", value: "18" },
//     { icon: TrendingUp, label: "Success Rate", value: "96%" },
//     { icon: Zap, label: "Avg. Result", value: "30d" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#03060D] text-white pt-[64px] font-sans selection:bg-[#00c6d7] selection:text-black">

//       {/* ─── Hero Ambient Glow ─── */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.04]"
//           style={{ background: 'radial-gradient(circle, #00c6d7 0%, transparent 70%)' }} />
//         <div className="absolute top-20 right-1/4 w-[400px] h-[300px] rounded-full opacity-[0.03]"
//           style={{ background: 'radial-gradient(circle, #0e7fa8 0%, transparent 70%)' }} />
//       </div>

//       {/* ─── Breadcrumbs ─── */}
//       <nav className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-xs md:text-sm text-gray-500">
//         <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
//         <ChevronRight size={13} className="text-gray-700" />
//         <Link to="/watch-videos" className="hover:text-white transition-colors duration-200">Videos</Link>
//         <ChevronRight size={13} className="text-gray-700" />
//         <span className="text-[#00c6d7] font-medium truncate max-w-[150px] md:max-w-xs">{videoData.title}</span>
//       </nav>

//       <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

//           {/* ─── Left Column: Video Player ─── */}
//           <div className="lg:col-span-4 xl:col-span-4 order-1">
//             <div className="sticky top-[100px] space-y-5">

//               {/* Phone Frame */}
//               <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto group">
//                 {/* Outer glow ring */}
//                 <div className="absolute -inset-[1px] rounded-[2.8rem] opacity-40 group-hover:opacity-70 transition-opacity duration-500"
//                   style={{ background: 'linear-gradient(135deg, #00c6d7 0%, #0e7fa8 50%, transparent 100%)' }} />

//                 <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-black">
//                   {/* Notch */}
//                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-30 flex items-center justify-center">
//                     <div className="w-10 h-1.5 bg-white/10 rounded-full" />
//                   </div>

//                   <img
//                     src={videoData.thumbnail}
//                     alt={videoData.title}
//                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'opacity-20 scale-105 blur-sm' : 'opacity-100 scale-100'}`}
//                   />

//                   {/* Gradient vignette */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

//                   {/* Center play control */}
//                   <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
//                     {!isPlaying ? (
//                       <button
//                         onClick={() => setIsPlaying(true)}
//                         className="relative group/btn"
//                       >
//                         <div className="absolute inset-0 rounded-full bg-[#00c6d7] opacity-20 scale-150 group-hover/btn:opacity-30 group-hover/btn:scale-[1.7] transition-all duration-500" />
//                         <div className="w-16 h-16 rounded-full border-2 border-[#00c6d7] bg-[#00c6d7]/10 backdrop-blur-md flex items-center justify-center hover:bg-[#00c6d7] hover:border-transparent active:scale-95 transition-all duration-300 group-hover/btn:scale-110">
//                           <Play className="text-[#00c6d7] group-hover/btn:text-[#03060D] ml-1 transition-colors" size={26} fill="currentColor" />
//                         </div>
//                       </button>
//                     ) : (
//                       <div className="text-center p-5 bg-[#03060D]/70 backdrop-blur-md rounded-2xl border border-[#00c6d7]/20 m-6">
//                         <div className="w-8 h-8 rounded-full bg-[#00c6d7]/10 border border-[#00c6d7]/30 flex items-center justify-center mx-auto mb-3">
//                           <Pause size={14} className="text-[#00c6d7]" />
//                         </div>
//                         <p className="text-xs font-semibold text-white/80 mb-3 leading-snug">You're watching a preview</p>
//                         <button
//                           onClick={() => setIsPlaying(false)}
//                           className="bg-[#00c6d7]/10 hover:bg-[#00c6d7]/20 border border-[#00c6d7]/20 px-4 py-1.5 rounded-full text-[11px] text-[#00c6d7] transition-colors font-medium"
//                         >
//                           Reset Demo
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   {/* Bottom info overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="bg-[#00c6d7] text-[#03060D] text-[9px] font-black px-2 py-0.5 rounded-sm tracking-widest uppercase">Series</span>
//                       <span className="text-white/50 text-[10px] font-medium">{videoData.duration} min</span>
//                     </div>
//                     <h2 className="text-base font-bold leading-snug mb-4 text-white">{videoData.title}</h2>

//                     {/* Progress */}
//                     <div className="space-y-1.5">
//                       <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
//                         <div className="w-1/3 h-full bg-[#00c6d7] rounded-full" style={{ boxShadow: '0 0 8px #00c6d7' }} />
//                       </div>
//                       <div className="flex justify-between text-[9px] text-white/30 font-bold uppercase tracking-widest">
//                         <span>In progress</span>
//                         <span>33% done</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex justify-center gap-3">
//                 {[
//                   { icon: Share2, label: 'Share' },
//                   { icon: Download, label: 'Save' },
//                 ].map(({ icon: Icon, label }) => (
//                   <button key={label} className="flex flex-col items-center gap-1.5 group">
//                     <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-[#00c6d7]/10 group-hover:border-[#00c6d7]/30 transition-all duration-200">
//                       <Icon size={17} className="text-gray-400 group-hover:text-[#00c6d7] transition-colors" />
//                     </div>
//                     <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover:text-[#00c6d7] transition-colors">{label}</span>
//                   </button>
//                 ))}
//               </div>

//               {/* Quick Stats Strip */}
//               <div className="grid grid-cols-4 gap-2 max-w-[320px] mx-auto">
//                 {stats.map(({ icon: Icon, label, value }) => (
//                   <div key={label} className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
//                     <Icon size={13} className="text-[#00c6d7]" />
//                     <span className="text-xs font-bold text-white">{value}</span>
//                     <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ─── Right Column ─── */}
//           <div className="lg:col-span-8 xl:col-span-8 order-2 space-y-10">

//             {/* 1. Primary Info */}
//             <section className="space-y-6">
//               <div className="flex flex-wrap items-center gap-2.5">
//                 <span className="px-3 py-1 bg-[#00c6d7]/10 text-[#00c6d7] text-[11px] font-bold rounded-full border border-[#00c6d7]/20 uppercase tracking-widest">
//                   {videoData.category}
//                 </span>
//                 <div className="flex items-center gap-1 text-yellow-400 bg-yellow-400/5 px-2 py-1 rounded-lg border border-yellow-400/10">
//                   <Star size={12} fill="currentColor" />
//                   <span className="text-[11px] font-bold">{videoData.rating}</span>
//                 </div>
//                 <div className="flex items-center gap-1.5 text-gray-500 text-[11px] bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
//                   <Eye size={12} />
//                   <span>{videoData.views} views</span>
//                 </div>
//                 <div className="flex items-center gap-1.5 text-gray-500 text-[11px] bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
//                   <Clock size={12} />
//                   <span>{videoData.duration}</span>
//                 </div>
//               </div>

//               <div>
//                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-2">
//                   Master the Art of{' '}
//                   <span className="relative inline-block">
//                     <span className="text-transparent bg-clip-text"
//                       style={{ backgroundImage: 'linear-gradient(90deg, #00c6d7, #0e7fa8)' }}>
//                       {videoData.title.split(' ').slice(-1)}
//                     </span>
//                   </span>
//                 </h1>
//                 <p className="text-gray-500 text-sm">A complete masterclass on scaling your agency to six figures</p>
//               </div>
//             </section>

//             {/* 2. Description */}
//             <section className="space-y-4">
//               <div className="flex items-center gap-2 pb-3 border-b border-white/[0.05]">
//                 <div className="w-1 h-4 rounded-full bg-[#00c6d7]" />
//                 <h3 className="text-base font-bold text-white">About this Masterclass</h3>
//               </div>
//               <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">
//                 {videoData.description}
//               </p>
//               <div className="flex flex-wrap gap-2 pt-1">
//                 {['Agency', 'Scaling', 'Marketing', 'Business Strategy', 'Sales'].map(tag => (
//                   <span
//                     key={tag}
//                     className="text-[10px] font-bold text-gray-500 hover:text-[#00c6d7] cursor-pointer transition-colors uppercase tracking-widest bg-white/[0.04] hover:bg-[#00c6d7]/5 border border-white/[0.06] hover:border-[#00c6d7]/20 px-2.5 py-1 rounded-lg"
//                   >
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             </section>



//             {/* 4. Related Videos Grid */}
//             <section className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-base font-bold flex items-center gap-2.5">
//                   <div className="w-1 h-5 bg-[#00c6d7] rounded-full" />
//                   Recommended for You
//                 </h3>
//                 <Link
//                   to="/watch-videos"
//                   className="text-[11px] font-bold text-gray-500 hover:text-[#00c6d7] flex items-center gap-1 transition-colors uppercase tracking-widest"
//                 >
//                   View all <ChevronRight size={13} />
//                 </Link>
//               </div>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
//                 {relatedVideos.map((vid) => (
//                   <Link key={vid.id} to={`/video/${vid.id}`} className="group space-y-3 block">
//                     <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0d1520]">
//                       <img
//                         src={vid.thumbnail}
//                         alt={vid.title}
//                         className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
//                       />
//                       {/* Bottom gradient */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

//                       {/* Duration badge */}
//                       <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-md text-[9px] font-bold border border-white/10 text-white/70">
//                         {vid.duration}
//                       </div>

//                       {/* Hover play */}
//                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
//                         <div className="w-10 h-10 rounded-full border border-[#00c6d7]/60 bg-[#00c6d7]/10 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
//                           <Play size={15} fill="currentColor" className="text-[#00c6d7] ml-0.5" />
//                         </div>
//                       </div>

//                       {/* Bottom rating stripe */}
//                       <div className="absolute bottom-0 left-0 right-0 p-2.5">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-white/10">
//                             <Star size={9} className="text-yellow-400" fill="currentColor" />
//                             <span className="text-[9px] font-bold text-white">{vid.rating}</span>
//                           </div>
//                           <span className="text-[9px] text-white/40 font-medium">{vid.views}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-1 px-0.5">
//                       <h4 className="text-xs md:text-[13px] font-bold group-hover:text-[#00c6d7] transition-colors leading-snug line-clamp-2">
//                         {vid.title}
//                       </h4>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </section>

//           </div>
//         </div>
//       </main>

//       <Footer />

//       <style jsx>{`
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default VideoDetail;
