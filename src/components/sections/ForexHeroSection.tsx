import React from 'react';
import { ForexMarketCore } from '../3d/ForexMarketCore';
import { ThreeDChartScene } from '../3d/ThreeDChartScene';
import { StatusBadge } from '../ui/StatusBadge';
import { ChevronDown, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function ForexHeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen pt-28 pb-20 overflow-hidden bg-obsidian-950 flex flex-col justify-between">
      {/* 3D Forex Globe Background */}
      <ForexMarketCore />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="mb-4">
          <StatusBadge label="VAXSA FOREX OBSERVATORY ● SYSTEM ONLINE" />
        </div>

        {/* Preserved Vaxsa Quote */}
        <div className="font-mono text-xs sm:text-sm text-gold tracking-widest uppercase mb-2">
          "While others sell illusions,"
        </div>

        {/* Enormous Editorial Name Typography */}
        <div className="my-2 transition-all duration-700">
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display text-stone-100 tracking-tighter leading-none select-none">
            DHARAM VEER<br />
            <span className="text-gold-gradient">SINGH KIRAR</span>
          </h1>
        </div>

        <div className="text-xs sm:text-sm font-mono text-gold/90 tracking-widest uppercase mb-4 mt-2">
          VAXSA • TRADING REALITY
        </div>

        {/* Preserved Subheading */}
        <p className="max-w-3xl text-stone-400 text-sm sm:text-base font-sans font-light leading-relaxed mb-8">
          Stop learning useless topics. Vaxsa focuses on what is needed to understand the Forex market with deep clarity, disciplined execution and reality-based concepts.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#portfolio"
            className="px-7 py-4 rounded-xl bg-gold-gradient text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:brightness-110 transition shadow-2xl gold-glow-md flex items-center gap-2"
          >
            <span>EXPLORE FOREX PORTFOLIO</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#curriculum"
            className="px-7 py-4 rounded-xl bg-obsidian-900 border border-gold/40 text-gold font-mono font-semibold text-xs sm:text-sm tracking-wider hover:bg-gold/10 transition gold-glow-sm flex items-center gap-2"
          >
            <span>VIEW CURRICULUM</span>
          </a>
        </div>

        {/* Real Interactive 3D Forex Chart Component */}
        <div className="w-full max-w-5xl my-4">
          <ThreeDChartScene />
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-[10px] font-mono text-stone-500 animate-bounce">
        <span>SCROLL TO ENTER OBSERVATORY</span>
        <ChevronDown size={14} className="text-gold" />
      </div>
    </section>
  );
}
