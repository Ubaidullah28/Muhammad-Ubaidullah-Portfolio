import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const bootLogs = [
  { text: "INITIALIZING_SYSTEM: Muhammad Ubaidullah Portfolio v2026.1", tag: "SYS", color: "text-cyan-400" },
  { text: "Loading Core Modules: [React 19, Vite, Tailwind, Framer Motion]... OK", tag: "CORE", color: "text-blue-400" },
  { text: "Connecting AI Engines: [Groq LLMs, ArcFace, RetinaFace, ONNX]... OK", tag: "AI/ML", color: "text-purple-400" },
  { text: "Mounting Automation: [n8n Webhooks, Selenium, BS4 Pipelines]... OK", tag: "AUTO", color: "text-amber-400" },
  { text: "Verifying Backend Services: [FastAPI, Django, PostgreSQL]... OK", tag: "BACKEND", color: "text-emerald-400" },
  { text: "SYSTEM ALLOCATION COMPLETE. Launching Interface...", tag: "READY", color: "text-cyan-300" }
];

export default function LoadingScreen({ onComplete }) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Increment progress and logs sequentially
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);
        
        // Match logs with progress
        const logStep = Math.min(
          Math.floor((next / 100) * bootLogs.length),
          bootLogs.length - 1
        );
        setCurrentLogIndex(logStep);

        return next;
      });
    }, 90);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#06080d] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none"
        >
          {/* Ambient Background Grid & Glows */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

          {/* Central Programmer Terminal Window */}
          <div className="relative w-full max-w-xl rounded-2xl bg-[#090d16]/95 border border-cyan-500/30 p-5 sm:p-7 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
            
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  boot-sequence.sh
                </span>
              </div>

              <button
                type="button"
                onClick={handleSkip}
                className="text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded border border-white/[0.08] hover:border-cyan-500/40"
              >
                Skip [ESC]
              </button>
            </div>

            {/* Terminal Output Stream */}
            <div className="space-y-2.5 min-h-[170px] font-mono text-xs">
              {bootLogs.slice(0, currentLogIndex + 1).map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-slate-600 shrink-0">[{log.tag}]</span>
                  <span className={`${log.color} break-all`}>{log.text}</span>
                  {idx === currentLogIndex && idx === bootLogs.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse shrink-0" />
                  )}
                </motion.div>
              ))}

              {currentLogIndex < bootLogs.length - 1 && (
                <div className="flex items-center gap-2 text-slate-500 animate-pulse">
                  <span>&gt;</span>
                  <span>Executing module initialization...</span>
                  <span className="inline-block w-2 h-3.5 bg-cyan-400" />
                </div>
              )}
            </div>

            {/* Progress Bar & Status Footer */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                  INITIALIZING WORKSPACE
                </span>
                <span className="text-cyan-400 font-bold tracking-wider">{progress}%</span>
              </div>

              {/* Glowing Progress Track */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-white/[0.08] overflow-hidden p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-sm shadow-cyan-400"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.1 }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1">
                <span>Muhammad Ubaidullah • Systems Engineer</span>
                <span>STATUS: {progress === 100 ? "READY" : "BOOTING"}</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
