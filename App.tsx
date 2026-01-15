
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Specialties from './components/Specialties';
import FeaturedDoctors from './components/FeaturedDoctors';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSteps from './components/ProcessSteps';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQSection from './components/FAQSection';
import AppDownload from './components/AppDownload';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickLinks />
        <Specialties />
        <FeaturedDoctors />
        <WhyChooseUs />
        <ProcessSteps />
        <Testimonials />
        <Partners />
        <FAQSection />
        <AppDownload />
        <BlogSection />
      </main>
      <Footer />
      {/* Floating AI Assistant leveraging Gemini API */}
      <AIAssistant />
      {/* Vercel Web Analytics tracking */}
      <Analytics />
    </div>
  );
};

export default App;
