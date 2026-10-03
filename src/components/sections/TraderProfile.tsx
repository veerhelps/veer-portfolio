import React from 'react';
import { Compass, Target, Terminal, Shield, ArrowUpRight } from 'lucide-react';

export function TraderProfile() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index */}
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-4">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 01 — IDENTITY & DISCIPLINE</span>
        </div>

        {/* Large Editorial Headline: DHARAM VEER SINGH KIRAR */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-black font-display text-cream tracking-tight leading-none select-none break-words">
            DHARAM VEER <span className="text-gold-gradient">SINGH KIRAR</span>
          </h2>
          <div className="font-mono text-xs sm:text-sm text-stone-400 mt-2 tracking-widest uppercase flex flex-wrap items-center gap-2">
            <span>FOUNDER & CHIEF OPERATOR</span>
            <span className="text-gold">•</span>
            <span className="text-gold">VEER FOREX OBSERVATORY</span>
          </div>
        </div>

        {/* Editorial Layout: Statement & Structured Operational Thesis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-cream leading-relaxed border-l-2 border-gold pl-6 font-sans">
              "Master the reality of trading. The global currency market is an institutionally driven liquidity engine. My mission with VEER is to strip away retail noise and deliver pure market reality."
            </p>

            <p className="text-stone-300 font-sans text-sm sm:text-base font-light leading-relaxed">
              Operating across global Forex sessions (London & New York Overlaps), focusing on higher timeframe market structure, liquidity sweeps, and disciplined risk allocation across G8 majors and spot gold.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-5 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="text-gold font-bold mb-1.5 flex items-center gap-2">
                  <Compass size={15} /> INSTRUMENTS
                </div>
                <div className="text-stone-300">EUR/USD, GBP/USD, USD/JPY, GBP/JPY & XAU/USD (Spot Gold)</div>
              </div>

              <div className="p-5 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="text-gold font-bold mb-1.5 flex items-center gap-2">
                  <Target size={15} /> EXECUTION WINDOW
                </div>
                <div className="text-stone-300">London Open (07:00 UTC) & NY Overlap (12:00 UTC)</div>
              </div>
            </div>
          </div>

          {/* Institutional Operator Sheet with Opal Moonstone Silver Frosted Glass */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-8 rounded-3xl card-specimen-glass-opal opal-glow-md relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Terminal size={15} className="text-opal-silver shrink-0" />
                  <span className="font-bold truncate">OPERATOR PROFILE // VR-001</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-emerald-market font-bold flex items-center gap-1.5 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
                    ONLINE
                  </span>
                  <div className="specimen-pill-inset px-2.5 py-0.5 rounded-full text-[9px] text-stone-400">
                    veer.specimen
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2.5 gap-1">
                  <span className="text-stone-500">OPERATOR:</span>
                  <span className="text-cream font-bold">DHARAM VEER SINGH KIRAR</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2.5 gap-1">
                  <span className="text-stone-500">BRAND:</span>
                  <span className="text-gold font-bold">VEER</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2.5 gap-1">
                  <span className="text-stone-500">DOMAIN:</span>
                  <span className="text-stone-200">GLOBAL FOREX & SPOT METALS</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2.5 gap-1">
                  <span className="text-stone-500">MAX RISK / TRADE:</span>
                  <span className="text-crimson font-bold">1.0% FIXED</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-2.5 gap-1">
                  <span className="text-stone-500">PHILOSOPHY:</span>
                  <span className="text-emerald-market font-bold">REALITY &gt; ILLUSION</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 text-[10px] text-stone-500 gap-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-opal-silver shrink-0" />
                    <span className="text-opal-silver font-semibold">OPAL MOONSTONE SILVER</span>
                  </span>
                  <span>HEX #D9DDE2 • CMYK 5, 2, 0, 11</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
