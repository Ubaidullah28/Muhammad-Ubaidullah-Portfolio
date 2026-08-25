import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Database, 
  FileSearch, 
  Layers, 
  Zap,
  BarChart3,
  Flame,
  Award
} from 'lucide-react';

export default function FlagshipProjectCard({ project }) {
  const [activePipelineStage, setActivePipelineStage] = useState(3);

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1424] via-[#090d18] to-[#070a12] border-2 border-cyan-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-cyan-500/10 overflow-hidden">
      
      {/* Flagship ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner / Flagship Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.1] mb-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wide uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20">
            <Flame className="w-4 h-4 fill-slate-950" />
            Flagship Project Showcase
          </span>
          <span className="text-xs font-mono text-cyan-300/80 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            Production AI Platform
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-white/[0.15] hover:border-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Grid: Content Left, Interactive Architecture Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Col: Project Details & Features */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-cyan-300/90 font-medium mt-2">
              Full-Stack ATS Semantic Analysis & Resume Optimization Platform
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Feature Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Key System Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/[0.08]">
            <h4 className="text-xs font-mono text-slate-400 mb-3">Core Technology Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-200 bg-slate-900/90 border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: AI Architecture & ATS Scoring Flow Representation */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Visual AI Pipeline Diagram */}
          <div className="rounded-2xl bg-[#070b14] border border-cyan-500/30 p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  AI Processing Architecture
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                Groq AI Powered
              </span>
            </div>

            {/* Pipeline Flow Steps */}
            <div className="space-y-2">
              {project.flowPipeline.map((step, sIdx) => {
                const isSelected = activePipelineStage === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setActivePipelineStage(sIdx)}
                    className={`cursor-pointer px-3.5 py-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/40 border-white/[0.06] text-slate-300 hover:bg-slate-900/80 hover:border-white/[0.12]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] ${
                        isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                      }`}>
                        0{sIdx + 1}
                      </span>
                      <span className="text-xs font-mono font-medium">{step}</span>
                    </div>

                    {sIdx < project.flowPipeline.length - 1 && (
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Simulated ATS Output Panel */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                  ATS Match Score
                </span>
                <span className="text-emerald-400 font-bold text-sm">94.8% Match</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[94.8%] bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Keywords: 18/19 Matched</span>
                <span>FastAPI Ingestion: 84ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

