import React from 'react';
import { Target, Compass, Terminal, Shield } from 'lucide-react';

export function AboutOperator() {
  return (
    <section id="about" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 01 — OPERATOR PROFILE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-12 tracking-tight">
          THE OPERATOR <span className="text-gold font-normal">/ ARCHITECTURE</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 font-sans leading-relaxed">
            <p className="text-lg sm:text-xl font-light text-stone-200 leading-normal border-l-2 border-gold pl-4">
              "Trading is not a game of market forecasts. It is a systematic process of managing risk, recognizing institutional order flow, and executing high-probability setups with zero emotional attachment."
            </p>

            <p className="text-sm text-stone-400">
              Welcome to my private market observatory. My approach combines macro market structure, liquidity analysis, and quantitative risk management to generate consistent alpha across Indian equity and derivative markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="card-dark-surface p-4 rounded-xl border border-obsidian-700">
                <div className="text-gold font-semibold mb-1 flex items-center gap-2">
                  <Compass size={16} /> CORE FOCUS
                </div>
                <div className="text-stone-400">Nifty 50, Bank Nifty Futures & Indian Large-Cap Momentum Equities</div>
              </div>

              <div className="card-dark-surface p-4 rounded-xl border border-obsidian-700">
                <div className="text-gold font-semibold mb-1 flex items-center gap-2">
                  <Target size={16} /> PRIMARY TIME-HORIZON
                </div>
                <div className="text-stone-400">Swing Positioning (3-15 days) & Intraday Liquidity Sweeps</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-obsidian-950 border border-gold/30 gold-glow-sm">
              <div className="flex items-center justify-between border-b border-obsidian-800 pb-4 mb-6 font-mono text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-gold" />
                  <span>OPERATOR TERMINAL</span>
                </div>
                <span className="text-emerald-market">● ACTIVE</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">TRADER NAME:</span>
                  <span className="text-stone-200 font-semibold">VEER</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">PRIMARY MARKETS:</span>
                  <span className="text-gold">NSE / BSE (INDIA)</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">METHODOLOGY:</span>
                  <span className="text-stone-200">PRICE ACTION + LIQUIDITY</span>
                </div>
                <div className="flex justify-between border-b border-obsidian-850 pb-2">
                  <span className="text-stone-500">MAX RISK PER TRADE:</span>
                  <span className="text-coral-market font-bold">1.0% MAXIMUM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">DECISION METRIC:</span>
                  <span className="text-emerald-market font-bold">PROCESS &gt; OUTCOME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
