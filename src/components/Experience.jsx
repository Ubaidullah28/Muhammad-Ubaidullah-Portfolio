import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Database,
  Workflow
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 self-start">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-300">Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Engineering Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Hands-on industry experience designing production data pipelines, automating complex collection workflows, and integrating AI microservices.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-white/[0.12] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/40 group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#090d16]/90 border border-white/[0.08] p-6 sm:p-8 hover:border-cyan-500/40 hover:bg-[#0c1220] transition-all duration-300 shadow-2xl space-y-6">
                
                {/* Role, Company & Period Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-white/[0.08]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-300">
                      <span className="font-semibold text-slate-100 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-cyan-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-white/[0.08] self-start sm:self-auto">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono font-medium text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Key Deliverables & Achievements */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-cyan-400" />
                    Key Responsibilities & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 border border-white/[0.08]"
                    >
                      {t}
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

