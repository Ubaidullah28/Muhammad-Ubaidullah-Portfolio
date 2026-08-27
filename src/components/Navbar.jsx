import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Automation', href: '#automation' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Close the mobile menu drawer
    setMobileMenuOpen(false);

    const targetId = href.substring(1);

    // Timeout allows touch events and menu collapse animation to yield without blocking scroll gestures on mobile
    setTimeout(() => {
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }

      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }, 120);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#06080d]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-inner shadow-cyan-500/20">
              <span className="text-cyan-400 font-mono font-bold text-base tracking-tighter">MU</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Muhammad Ubaidullah
              </span>
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons: Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ExternalLink className="w-3 h-3 text-cyan-400/80" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-white/[0.1] focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              style={{ touchAction: 'manipulation' }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-[#070b14]/98 backdrop-blur-2xl border-b border-white/[0.12] px-4 pt-3 pb-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer active:scale-[0.98] ${
                      isActive 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10' 
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white active:bg-white/[0.08]'
                    }`}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="font-mono text-xs uppercase tracking-wider">{item.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400 animate-pulse" />
                    ) : (
                      <span className="text-slate-600 font-mono text-[10px]">→</span>
                    )}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 hover:bg-cyan-900/60 shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Official Resume</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
