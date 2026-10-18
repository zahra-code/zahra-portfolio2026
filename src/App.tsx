import React from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-cornflower text-black select-text overflow-x-hidden">
      {/* Background Video with Mouse-Scrubbing */}
      <BackgroundVideo />

      {/* Fixed Navbar (z-index: 50) */}
      <Navbar />

      <main id="main">
      <h1 className="sr-only">
        Zahra Shahid: Web Developer, Data Analyst, Software Engineer and Data Scraper
      </h1>

      {/* Hero Content Section (z-index: 10) */}
      <Hero />

      {/* Solid Opaque Container for Lower Sections */}
      <div className="relative z-20 w-full bg-cornflower border-t-2 border-black">
        {/* Ticker Ribbon */}
        <MarqueeTicker />

        {/* 01 / About Section */}
        <AboutSection />

        {/* 02 / Projects */}
        <ProjectsSection />

        {/* 03 / Services */}
        <ServicesSection />

        {/* 04 / Education & Experience */}
        <ExperienceSection />

        {/* Secondary Ticker, runs the opposite way in a different palette */}
        <MarqueeTicker
          reverse
          items={[
            'LET\'S BUILD SOMETHING USEFUL',
            'WEB DEVELOPER',
            'DATA ANALYST',
            'SOFTWARE ENGINEER',
            'DATA SCRAPER',
          ]}
          bgClass="bg-chartreuse border-y-2 border-black"
          colors={['text-black', 'text-rust-dark', 'text-black', 'text-rust-dark']}
          starClass="text-black"
        />

      </div>
      </main>

      {/* Functional Footer with Black Background */}
      <div className="relative z-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
