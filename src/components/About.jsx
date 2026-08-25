import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Server, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowRight,
  GitBranch,
  ShieldCheck
} from 'lucide-react';
import { personalInfo, focusCards } from '../data/portfolioData';

const highlightPills = [
  "Backend Engineering",
  "AI / ML",
  "Computer Vision",
  "LLM Applications",
  "AI Automation",
  "Data Engineering",
  "Workflow Automation",
  "Full-Stack Development"
];

const iconMap = {
  Brain: Brain,
  Server: Server,
  Cpu: Cpu,
  Database: Database
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 self-start">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-300">About My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Systems Where <span className="text-gradient-cyan">AI Meets Infrastructure</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {personalInfo.aboutNarrative}
          </p>
        </div>

        {/* 4 Elegant Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {focusCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Server;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl bg-[#090d16]/80 border border-white/[0.08] p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0c1220] shadow-lg flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.06]">
                  <p className="text-xs font-mono text-slate-300/80 leading-relaxed">
                    {card.tech}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Domain Expertise Badges & Highlights */}
        <div className="rounded-2xl bg-gradient-to-r from-[#090d16] via-[#0d1322] to-[#090d16] border border-white/[0.08] p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Technical Competencies
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Core engineering domains spanning distributed backend services, computer vision pipelines, and automated execution workflows.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-wrap gap-2.5">
              {highlightPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

