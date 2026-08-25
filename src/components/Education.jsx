import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04] bg-[#06080d]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 self-start">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-300">Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Foundations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Formal Computer Science and Engineering education combining deep theoretical rigor with applied software systems and AI algorithms.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl bg-[#090d16]/90 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-8 hover:bg-[#0c1220] transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/[0.08]">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-xs font-mono text-slate-300">{edu.period}</span>
                  </div>
                </div>

                {/* Degree & School */}
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300/90 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </div>

              {/* Coursework & Focus Areas */}
              <div className="pt-5 mt-5 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Core Areas & Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-900/90 border border-white/[0.06]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

