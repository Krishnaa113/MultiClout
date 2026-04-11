import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesGrid from '../components/CategoriesGrid';
import VideoGrid from '../components/VideoGrid';
import StatsAndReviews from '../components/StatsAndReviews';
import Footer from '../components/Footer';
import SeekhoGurus from '../components/SeekhoGurus';

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-navy font-inter pt-4">
      {/* 
        Navbar is assumed to be rendered in App.jsx and wraps this page.
        However, ensure body padding is handled since navbar is fixed.
      */}
      <HeroSection />
      <CategoriesGrid />
      <VideoGrid />
      <StatsAndReviews />
      <SeekhoGurus />
      <Footer />
    </div>
  );
};

export default Home;