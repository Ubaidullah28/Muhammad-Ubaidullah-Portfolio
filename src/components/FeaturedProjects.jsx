import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Filter, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';
import FlagshipProjectCard from './FlagshipProjectCard';
import ProjectCard from './ProjectCard';

const categories = [
  "All",
  "AI / ML",
  "Backend",
  "Computer Vision",
  "Automation",
  "Blockchain",
  "Full Stack",
  "Systems"
];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const flagshipProject = useMemo(() => {
    return projects.find((p) => p.isFlagship);
  }, []);

  const otherProjects = useMemo(() => {
    return projects.filter((p) => !p.isFlagship);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return otherProjects;
    }
    return otherProjects.filter((p) => 
      p.allCategories ? p.allCategories.includes(activeCategory) : p.category === activeCategory
    );
  }, [activeCategory, otherProjects]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 self-start">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-cyan-300">Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Systems & <span className="text-gradient-cyan">AI Architectures</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Production-grade applications spanning LLM semantic evaluation, low-resource computer vision inference, blockchain AML monitoring, and automated data workflows.
          </p>
        </div>

        {/* Flagship Project Showcase (AI Resume Analyzer) */}
        {flagshipProject && (
          <div className="mb-16">
            <FlagshipProjectCard project={flagshipProject} />
          </div>
        )}

        {/* Category Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Filter Systems by Domain:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-900/60 text-slate-400 border border-white/[0.06] hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-white/[0.08]">
            <p className="text-slate-400 font-mono text-sm">
              No projects found for category "{activeCategory}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

