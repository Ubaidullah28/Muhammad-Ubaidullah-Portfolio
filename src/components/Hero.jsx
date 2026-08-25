import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.rotatingRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.08] backdrop-blur-md self-start shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Software & AI Systems Engineer
              </span>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Muhammad <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Ubaidullah</span>
              </h1>
              
              <h2 className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight flex flex-wrap items-center gap-1.5 pt-1">
                <span>Software Engineer</span>
                <span className="text-cyan-500">•</span>
                <span>AI/ML Engineer</span>
                <span className="text-cyan-500">•</span>
                <span className="text-purple-400 font-medium">Backend & AI Automation</span>
              </h2>
            </div>

            {/* Animated Rotating Specialty Bar */}
            <div className="h-9 sm:h-10 flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-cyan-300 font-mono text-xs sm:text-sm shadow-inner shadow-cyan-500/10 w-fit">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="font-medium truncate"
                  >
                    {personalInfo.rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {personalInfo.shortBio}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/80 hover:bg-slate-800 border border-white/[0.12] hover:border-cyan-500/40 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let's Connect</span>
              </a>

              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.2] transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono text-slate-500">Links:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.08] text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Muhammad Ubaidullah"
                  className="p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.08] text-slate-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-slate-800 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive AI Engineering System Architecture */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-600 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

