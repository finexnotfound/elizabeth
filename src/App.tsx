import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatIsElizabeth } from './components/WhatIsElizabeth';
import { HowItWorks } from './components/HowItWorks';
import { TestPractice } from './components/TestPractice';
import { WhyElizabeth } from './components/WhyElizabeth';
import { InteractiveRecallDemo } from './components/InteractiveRecallDemo';
import { CreatorSection } from './components/CreatorSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToDemo = () => {
    const el = document.getElementById('recall-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhatIs = () => {
    const el = document.getElementById('what-is-elizabeth');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] flex flex-col font-apple-body selection:bg-[#111111] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenDemo={scrollToDemo} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <HeroSection onExploreClick={scrollToWhatIs} />

        {/* What Is Elizabeth */}
        <WhatIsElizabeth />

        {/* How It Works (01 - 05 Protocol) */}
        <HowItWorks />

        {/* Interactive 5-Step Recall Runtime Simulator */}
        <InteractiveRecallDemo />

        {/* Test Practice */}
        <TestPractice />

        {/* Why Elizabeth */}
        <WhyElizabeth />

        {/* Creator Section */}
        <CreatorSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
