import React from 'react';
import { MarketCoreScene } from '../3d/MarketCoreScene';
import { StatusBadge } from '../ui/StatusBadge';
import { ChevronDown, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-obsidian-950">
      {/* 3D WebGL Background Scene */}
      <MarketCoreScene />

      {/* Hero Foreground Overlay Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Indicator */}
        <div className="mb-6 animate-fadeIn">
          <StatusBadge label="MARKET OBSERVATORY ● SYSTEM ONLINE" />
        </div>

        {/* Large Editorial Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display text-stone-100 tracking-tight leading-[1.08] mb-6">
          READ THE MARKET.<br />
          <span className="text-gold-gradient">TRADE WITH INTENT.</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-stone-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light mb-10">
          An evolving institutional trading portfolio, research journal and market laboratory built around risk discipline, process and repeatable decision-making.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="px-6 py-3.5 rounded-xl bg-gold-gradient text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:brightness-110 transition shadow-2xl gold-glow-md flex items-center gap-2"
          >
            <span>EXPLORE THE PORTFOLIO</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#journal"
            className="px-6 py-3.5 rounded-xl bg-obsidian-900 border border-gold/40 text-gold font-mono font-semibold text-xs sm:text-sm tracking-wider hover:bg-gold/10 transition gold-glow-sm flex items-center gap-2"
          >
            <span>ENTER THE JOURNAL</span>
          </a>
        </div>

        {/* Micro Ticker Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl font-mono text-xs">
          <div className="card-dark-surface p-3 rounded-lg border border-obsidian-800 backdrop-blur-md">
            <div className="text-stone-500 text-[10px] uppercase">NIFTY 50</div>
            <div className="text-stone-200 font-bold mt-0.5">23,842.50 <span className="text-emerald-market text-[10px]">+0.60%</span></div>
          </div>
          <div className="card-dark-surface p-3 rounded-lg border border-obsidian-800 backdrop-blur-md">
            <div className="text-stone-500 text-[10px] uppercase">BANK NIFTY</div>
            <div className="text-stone-200 font-bold mt-0.5">51,240.80 <span className="text-emerald-market text-[10px]">+0.76%</span></div>
          </div>
          <div className="card-dark-surface p-3 rounded-lg border border-obsidian-800 backdrop-blur-md">
            <div className="text-stone-500 text-[10px] uppercase">PORTFOLIO NAV</div>
            <div className="text-gold font-bold mt-0.5">₹8,475,200</div>
          </div>
          <div className="card-dark-surface p-3 rounded-lg border border-obsidian-800 backdrop-blur-md">
            <div className="text-stone-500 text-[10px] uppercase">WIN RATE</div>
            <div className="text-stone-200 font-bold mt-0.5">68.4%</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[10px] font-mono text-stone-500 animate-bounce">
        <span>SCROLL TO DISCOVER</span>
        <ChevronDown size={14} className="text-gold" />
      </div>
    </section>
  );
}
