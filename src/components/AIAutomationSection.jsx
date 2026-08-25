import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Globe, 
  Workflow, 
  Sparkles, 
  Database, 
  Server, 
  ArrowRight, 
  Play, 
  Pause, 
  CheckCircle2, 
  Terminal, 
  Zap,
  Activity,
  Layers
} from 'lucide-react';
import { automationArchitecture } from '../data/portfolioData';

const workflowSteps = [
  {
    title: "Web / Data Sources",
    tech: "Target Portals • Unstructured HTML • APIs",
    description: "Multi-threaded scheduled polling of external platforms, documents, and web services.",
    icon: Globe,
    color: "text-cyan-400",
    bg: "bg-cyan-950/40",
    border: "border-cyan-500/40"
  },
  {
    title: "Selenium & BeautifulSoup",
    tech: "Headless Drivers • Dynamic DOM • Parser",
    description: "Automated browser interaction, anti-detection handling, and structured text/attribute extraction.",
    icon: Cpu,
    color: "text-amber-400",
    bg: "bg-amber-950/40",
    border: "border-amber-500/40"
  },
  {
    title: "Structured Data Pipeline",
    tech: "Validation • Raw/Silver Layers • Cleaning",
    description: "Normalization, JSON schema validation, deduplication, and staging for workflow triggers.",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-950/40",
    border: "border-blue-500/40"
  },
  {
    title: "n8n Workflow Engine",
    tech: "Webhook Triggers • Conditional Logic • Retries",
    description: "Orchestrated node execution, automated decision trees, rate-limiting, and error fallback handlers.",
    icon: Workflow,
    color: "text-purple-400",
    bg: "bg-purple-950/40",
    border: "border-purple-500/40"
  },
  {
    title: "AI / ML Intelligence",
    tech: "Groq LLMs • Semantic Scoring • Classification",
    description: "Autonomous reasoning, entity extraction, sentiment analysis, and intelligent synthesis.",
    icon: Sparkles,
    color: "text-pink-400",
    bg: "bg-pink-950/40",
    border: "border-pink-500/40"
  },
  {
    title: "API / Backend & Delivery",
    tech: "FastAPI • Django • PostgreSQL • Webhooks",
    description: "Real-time database persistence, client API exposure, and instant push notification dispatch.",
    icon: Server,
    color: "text-emerald-400",
    bg: "bg-emerald-950/40",
    border: "border-emerald-500/40"
  }
];

const autoTechs = [
  "n8n Orchestration",
  "Selenium Automation",
  "BeautifulSoup Parsing",
  "Python Scripting",
  "REST APIs & Webhooks",
  "FastAPI Backends",
  "Django Microservices",
  "AI / LLM Ingestion",
  "Multi-Layer ETL Pipelines"
];

export default function AIAutomationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="automation" className="py-20 lg:py-28 relative z-10 border-t border-white/[0.04] bg-[#06080d]/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col space-y-3 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 self-start">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-medium text-amber-300">AI Automation Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Automation & <span className="text-gradient-cyan">Workflow Engineering</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            "I build automated workflows that connect data collection, APIs, AI models, business logic, and downstream systems."
          </p>
        </div>

        {/* Interactive Automation Pipeline Visualizer */}
        <div className="rounded-3xl bg-[#090d16]/95 border border-white/[0.1] p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8">
          
          {/* Top Simulation Controls & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08]">
                <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Autonomous Pipeline Simulation
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Active Stage: <span className="text-cyan-300 font-semibold">{workflowSteps[activeStep].title}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-200 bg-slate-900 border border-white/[0.1] hover:border-cyan-500/40 transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isPlaying ? 'Pause Loop' : 'Resume Loop'}</span>
              </button>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Pipeline Active
              </span>
            </div>
          </div>

          {/* Sequential Animated Step Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between relative ${
                    isCurrent
                      ? `bg-slate-800/90 ${step.border} shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30`
                      : 'bg-slate-900/40 border-white/[0.06] hover:bg-slate-900/80 hover:border-white/[0.12]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${step.bg} ${step.border} border`}>
                        <Icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-cyan-400' : 'text-slate-600'}`}>
                        Step 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className={`text-base font-bold tracking-tight ${isCurrent ? 'text-white' : 'text-slate-200'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {step.tech}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300/80 leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Node Bottom Status */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                    <span className={isCurrent ? 'text-cyan-300 font-semibold' : 'text-slate-500'}>
                      {isCurrent ? '● Processing...' : 'Standby'}
                    </span>
                    {isCurrent && (
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technology Badges Matrix */}
          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Integrated Automation & Engineering Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {autoTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

