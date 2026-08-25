import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Server, 
  Layout, 
  Database, 
  Layers, 
  Zap, 
  Terminal, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Brain: Brain,
  Server: Server,
  Zap: Zap,
  Database: Database,
  Layers: Layers,
  Layout: Layout,
  Terminal: Terminal
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 self-start">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-300">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-cyan">Skill Architecture</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A battle-tested stack spanning low-level system languages, modern AI frameworks, scalable backends, and robust automation tooling.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code;
            const isHovered = activeCategory === category.category;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveCategory(category.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`rounded-2xl bg-[#090d16]/90 border p-6 transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-cyan-500/40 bg-[#0c1220] shadow-xl shadow-cyan-500/5'
                    : 'border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List as Clean Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-slate-900/80 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.04] text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-500/60">● verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

