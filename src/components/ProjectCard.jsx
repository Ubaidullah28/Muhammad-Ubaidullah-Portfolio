import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Database, 
  Layers, 
  Sparkles, 
  Workflow, 
  ShieldCheck, 
  Users, 
  Eye
} from 'lucide-react';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl bg-[#090d16]/90 border border-white/[0.08] hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:bg-[#0c1220] shadow-xl flex flex-col justify-between"
    >
      <div className="space-y-4">
        
        {/* Top Header: Category Tag & Links */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
              {project.category}
            </span>
            {project.isCollaborative && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-purple-300 bg-purple-950/50 border border-purple-500/30">
                <Users className="w-3 h-3" />
                Collaborative
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {project.projectPage && (
              <a
                href={project.projectPage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Project Details"
                className="p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-900/60 hover:border-cyan-400 transition-colors shadow-sm"
                title="Project Details / Research Page"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Repository"
                className="p-2 rounded-xl bg-slate-900 border border-white/[0.08] text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-xs font-mono text-cyan-400/80 mt-1">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Collaborative Note if applicable */}
        {project.collaboratorNote && (
          <div className="px-3 py-1.5 rounded-lg bg-purple-950/30 border border-purple-500/20 text-[11px] font-mono text-purple-300">
            Note: {project.collaboratorNote}
          </div>
        )}

        {/* Short Description */}
        <p className="text-slate-300/90 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Visual Pipeline Flow if available */}
        {project.flowPipeline && (
          <div className="p-3 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Pipeline Flow:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-cyan-300">
              {project.flowPipeline.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-white/[0.06]">
                    {step}
                  </span>
                  {idx < project.flowPipeline.length - 1 && (
                    <span className="text-slate-500">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Expandable Key Features */}
        <div>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 py-1"
          >
            <span>{expanded ? 'Hide Technical Highlights' : 'View Technical Highlights'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="pt-3 overflow-hidden"
              >
                <ul className="space-y-2 border-t border-white/[0.06] pt-3">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="pt-5 mt-5 border-t border-white/[0.06] space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900 border border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          {project.projectPage ? (
            <a
              href={project.projectPage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Project Details</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500">
              Systems & Production Ready
            </span>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300 hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

