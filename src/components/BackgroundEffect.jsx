import React from 'react';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle grid layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mask-radial" />
      
      {/* Ambient gradient glow 1 - Cyan Top Left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      
      {/* Ambient gradient glow 2 - Purple / Indigo Center Right */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 md:w-[700px] md:h-[700px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Ambient gradient glow 3 - Blue Bottom Left */}
      <div className="absolute -bottom-40 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[130px]" />

      {/* Subtle vignette border gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#06080d]/40 to-[#06080d]" />
    </div>
  );
}

