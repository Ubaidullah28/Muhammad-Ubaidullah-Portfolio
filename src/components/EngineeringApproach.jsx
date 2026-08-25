import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Sparkles, 
  Rocket, 
  Workflow,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { engineeringApproach } from '../data/portfolioData';

const iconMap = {
  Compass: Compass,
  Layers: Layers,
  Sparkles: Sparkles,
  Rocket: Rocket
};

export default function EngineeringApproach() {
  return (
    <section className="py-20 relative z-10 border-t border-white/[0.04] bg-[#06080d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 self-center">
            <Workflow className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-mono font-medium text-purple-300">Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I <span className="text-gradient-cyan">Build Software Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A disciplined, production-first approach that bridges low-level system design with modern AI models and resilient automation.
          </p>
        </div>

        {/* 4 Step Sequential Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringApproach.map((item, idx) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl bg-[#090d16]/90 border border-white/[0.08] p-6 hover:border-cyan-500/40 hover:bg-[#0c1220] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Top Step Number & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center group-hover:border-cyan-500/30 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom line indicator */}
                <div className="pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">Stage {item.step}</span>
                  <div className="h-1 w-12 rounded-full bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

