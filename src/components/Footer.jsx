import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#040609] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-base">
                Muhammad Ubaidullah
              </span>
              <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                v2026.1
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Software Engineer • AI/ML • Backend & AI Automation
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#automation" className="hover:text-cyan-300 transition-colors">AI Automation</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-900/60 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Muhammad Ubaidullah. Built for production systems.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>React • Vite • Tailwind CSS • Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

