import React from 'react';
import { Compass, Target, Shield, BookOpen } from 'lucide-react';

export function TraderProfile() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Index */}
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">02 — IDENTITY & PHILOSOPHY</span>
        </div>

        {/* Large Editorial Headline: DHARAM VEER SINGH KIRAR */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-cream tracking-tight leading-none select-none break-words">
            DHARAM VEER <span className="text-gold-gradient">SINGH KIRAR</span>
          </h2>
          <div className="font-mono text-xs sm:text-sm text-stone-400 mt-3 tracking-widest uppercase flex flex-wrap items-center gap-2">
            <span>FOUNDER & CHIEF OPERATOR</span>
            <span className="text-gold">·</span>
            <span className="text-gold font-semibold">VEER FOREX OBSERVATORY</span>
          </div>
        </div>

        {/* Editorial Layout: Statement & Structured Operational Thesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-cream leading-relaxed border-l-2 border-gold pl-6 font-sans">
              "Master the reality of trading. The global currency market is an institutionally driven liquidity engine. My mission with VEER is to strip away retail noise and deliver pure market reality."
            </p>

            <p className="text-stone-300 font-sans text-sm sm:text-base font-light leading-relaxed">
              Operating across global Forex sessions (London & New York Overlaps), focusing on higher timeframe market structure, liquidity sweeps, and disciplined risk allocation across sovereign currency pairs and spot gold.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/[0.08] backdrop-blur-md">
                <div className="text-gold font-bold mb-2 flex items-center gap-2">
                  <Compass size={16} />
                  <span>INSTRUMENTS</span>
                </div>
                <div className="text-stone-300 leading-relaxed font-sans text-xs">
                  EUR/USD, GBP/USD, USD/JPY, AUD/USD & XAU/USD (Spot Gold)
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-white/[0.08] backdrop-blur-md">
                <div className="text-gold font-bold mb-2 flex items-center gap-2">
                  <Target size={16} />
                  <span>SESSION WINDOWS</span>
                </div>
                <div className="text-stone-300 leading-relaxed font-sans text-xs">
                  London Open (07:00 UTC) & NY Overlap (17:00 UTC)
                </div>
              </div>
            </div>
          </div>

          {/* Clean Institutional Operator Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.1] shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Shield size={16} className="text-gold shrink-0" />
                  <span className="font-bold tracking-wider">OPERATOR PROFILE</span>
                </div>
                <span className="text-gold text-[10px] font-semibold tracking-widest uppercase">
                  VERIFIED DESK
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-3 gap-1">
                  <span className="text-stone-500">OPERATOR:</span>
                  <span className="text-cream font-bold">DHARAM VEER SINGH KIRAR</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-3 gap-1">
                  <span className="text-stone-500">BRAND:</span>
                  <span className="text-gold font-bold">VEER</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-3 gap-1">
                  <span className="text-stone-500">FOCUS:</span>
                  <span className="text-stone-200">SOVEREIGN FOREX & METALS</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/[0.05] pb-3 gap-1">
                  <span className="text-stone-500">METHODOLOGY:</span>
                  <span className="text-stone-200">INSTITUTIONAL MARKET STRUCTURE</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-1">
                  <span className="text-stone-500">CORE ETHOS:</span>
                  <span className="text-emerald-market font-bold">REALITY &gt; ILLUSION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
