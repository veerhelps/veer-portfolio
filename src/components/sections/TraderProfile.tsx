import React from 'react';
import { Compass, Target, Terminal, ShieldCheck } from 'lucide-react';

export function TraderProfile() {
  return (
    <section id="about" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 01 — OPERATOR PROFILE</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-extrabold font-display text-stone-100 mb-2 tracking-tight">
          DHARAM VEER <span className="text-gold-gradient">SINGH KIRAR</span>
        </h2>
        <div className="font-mono text-xs text-stone-400 mb-12 tracking-widest uppercase">
          FOUNDER & CHIEF OPERATOR • VAXSA FOREX OBSERVATORY
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-sans leading-relaxed">
            <p className="text-lg sm:text-xl font-light text-stone-200 leading-normal border-l-2 border-gold pl-4">
              "Master the reality of trading. The global currency market is an institutionally driven liquidity engine. My mission with Vaxsa is to strip away retail noise and deliver pure market reality."
            </p>

            <p className="text-sm text-stone-400">
              Operating across global Forex sessions (London & New York Overlaps), focusing on higher timeframe market structure, liquidity sweeps, and disciplined risk allocation across G8 majors and spot gold.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="card-dark-surface p-4 rounded-xl border border-obsidian-700">
                <div className="text-gold font-semibold mb-1 flex items-center gap-2">
                  <Compass size={16} /> FOREX PAIRS FOCUS
                </div>
                <div className="text-stone-400">EUR/USD, GBP/USD, USD/JPY, GBP/JPY & XAU/USD (Gold)</div>
              </div>

              <div className="card-dark-surface p-4 rounded-xl border border-obsidian-700">
                <div className="text-gold font-semibold mb-1 flex items-center gap-2">
                  <Target size={16} /> SESSION REGIME
                </div>
                <div className="text-stone-400">London Open (07:00 UTC) & NY Overlap (12:00 UTC)</div>
              </div>
            </div>
          </div>

          {/* Operator Terminal Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-obsidian-950 border border-gold/30 gold-glow-sm">
              <div className="flex items-center justify-between border-b border-obsidian-800 pb-4 mb-6 font-mono text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-gold" />
                  <span>VAXSA OPERATOR CARD</span>
                </div>
                <span className="text-emerald-market">● ONLINE</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">OPERATOR:</span>
                  <span className="text-stone-100 font-bold">DHARAM VEER SINGH KIRAR</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">BRAND:</span>
                  <span className="text-gold font-bold">VAXSA</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">MARKET DOMAIN:</span>
                  <span className="text-stone-200">GLOBAL FOREX & METALS</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">MAX RISK / TRADE:</span>
                  <span className="text-coral-market font-bold">1.0% FIXED</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">PHILOSOPHY:</span>
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
