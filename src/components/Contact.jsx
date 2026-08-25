import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Copy, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  Sparkles,
  Send,
  MessageSquareCode
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative z-10 border-t border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1424] via-[#090d18] to-[#070a12] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">
          
          {/* Ambient Glows */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Open for Software, AI/ML & Automation Roles</span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Build Something <span className="text-gradient-cyan">Intelligent</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Have an idea, product, automation workflow, or engineering problem? Let's connect.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-white/[0.12] hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
          </div>

          {/* Social & Reference Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/[0.08] max-w-2xl mx-auto">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col items-center gap-2 group"
            >
              <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">LinkedIn</span>
              <span className="text-[11px] font-mono text-slate-400">/in/mubaidullah28</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col items-center gap-2 group"
            >
              <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">GitHub</span>
              <span className="text-[11px] font-mono text-slate-400">@Ubaidullah28</span>
            </a>

            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:bg-slate-900 transition-all flex flex-col items-center gap-2 group"
            >
              <FileText className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-white">Resume</span>
              <span className="text-[11px] font-mono text-slate-400">Google Drive Document</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

