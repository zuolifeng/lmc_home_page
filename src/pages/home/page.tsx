import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickRegistration from './components/QuickRegistration';
import CoursesSection from './components/CoursesSection';
import AchievementsSection from './components/AchievementsSection';
import LearningOutcomes from './components/LearningOutcomes';
import VideoShowcase from './components/VideoShowcase';
import ParentReviews from './components/ParentReviews';
import WeChatSection from './components/WeChatSection';
import Footer from './components/Footer';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <QuickRegistration />
      <CoursesSection />
      <AchievementsSection />
      <LearningOutcomes />
      <VideoShowcase />
      <ParentReviews />
      <WeChatSection />
      <Footer />
    </div>
  );
}
