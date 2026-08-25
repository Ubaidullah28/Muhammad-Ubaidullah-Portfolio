import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Server, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Workflow, 
  ArrowRight,
  ShieldCheck,
  Activity
} from 'lucide-react';

const pipelineNodes = [
  {
    id: 'input',
    label: 'RAW DATA / INPUT',
    subtext: 'Resumes • Streams • APIs • Web',
    icon: Database,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-950/20',
    activeBadge: 'Payload 2.4 MB'
  },
  {
    id: 'ai-model',
    label: 'AI / ML ENGINE',
    subtext: 'Groq LLMs • ArcFace • Whisper',
    icon: Sparkles,
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-950/20',
    activeBadge: 'Latency <120ms'
  },
  {
    id: 'backend',
    label: 'FASTAPI / DJANGO BACKEND',
    subtext: 'REST APIs • ORM • Auth & Business Logic',
    icon: Server,
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-950/20',
    activeBadge: '99.99% Uptime'
  },
  {
    id: 'automation',
    label: 'AUTOMATION & PIPELINES',
    subtext: 'n8n • Selenium • Webhook Dispatch',
    icon: Workflow,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-950/20',
    activeBadge: 'Auto-Triggered'
  },
  {
    id: 'production',
    label: 'PRODUCTION SYSTEM',
    subtext: 'PostgreSQL • Client UI • Verified Alerts',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-950/20',
    activeBadge: 'Live Verified'
  }
];

export default function HeroVisual() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipelineNodes.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />

      {/* Main Glassmorphic System Card */}
      <div className="relative rounded-2xl bg-[#090d16]/90 border border-white/[0.12] p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
            <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              system-architecture.engine
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
              <Activity className="w-3 h-3 animate-pulse" />
              RUNNING
            </span>
          </div>
        </div>

        {/* Title & Micro badge */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              AI ENGINEERING SYSTEM
            </h3>
            <p className="text-sm font-semibold text-white tracking-tight">
              Autonomous Intelligence Pipeline
            </p>
          </div>
          <div className="text-right font-mono text-[11px] text-cyan-400/80">
            Node {activeStep + 1} of {pipelineNodes.length}
          </div>
        </div>

        {/* Pipeline Nodes Flow */}
        <div className="space-y-2.5">
          {pipelineNodes.map((node, index) => {
            const Icon = node.icon;
            const isCurrent = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div key={node.id} className="relative">
                {/* Connecting arrow line */}
                {index > 0 && (
                  <div className="flex justify-center -my-1.5 py-0.5">
                    <div className="h-2.5 w-0.5 bg-gradient-to-b from-white/20 to-white/10" />
                  </div>
                )}

                <motion.div
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-xl p-3 border transition-all duration-300 flex items-center justify-between ${
                    isCurrent
                      ? `bg-slate-800/80 ${node.border} shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-500/20`
                      : `bg-slate-900/40 border-white/[0.06] hover:bg-slate-900/70 hover:border-white/[0.12]`
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${node.bg} ${node.border} border shrink-0`}>
                      <Icon className={`w-4 h-4 ${node.color}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs font-semibold tracking-wide ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                          {node.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">
                        {node.subtext}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 ml-2">
                    {isCurrent ? (
                      <span className={`inline-flex items-center text-[10px] font-mono px-2 py-0.5 rounded-md ${node.bg} ${node.color} border ${node.border}`}>
                        {node.activeBadge}
                      </span>
                    ) : (
                      <span className="text-slate-600 font-mono text-[10px]">
                        0{index + 1}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Live Diagnostics Footer in Card */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] text-slate-300">Throughput: 1,450 req/min</span>
          </div>
          <span className="text-[11px] text-slate-500">FastAPI • n8n • Groq</span>
        </div>
      </div>
    </div>
  );
}

