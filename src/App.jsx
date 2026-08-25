import React from 'react';
import BackgroundEffect from './components/BackgroundEffect';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EngineeringApproach from './components/EngineeringApproach';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import AIAutomationSection from './components/AIAutomationSection';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 antialiased overflow-x-hidden">
      {/* Background ambient lighting and grid */}
      <BackgroundEffect />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EngineeringApproach />
        <Experience />
        <FeaturedProjects />
        <AIAutomationSection />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

