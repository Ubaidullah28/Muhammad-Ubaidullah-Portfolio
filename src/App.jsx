import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200 antialiased">
      {/* Programmer / Developer Initial Boot Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Portfolio Application */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-x-clip"
      >
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
      </motion.div>
    </div>
  );
}
