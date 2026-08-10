import React from 'react';
import { portfolioSummary } from '../../data/portfolioData';
import { TrendingUp, Award, Shield, BarChart3, ArrowUpRight, Percent } from 'lucide-react';

export function PortfolioDashboard() {
  return (
    <section id="portfolio" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 03 — CAPITAL OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              PORTFOLIO <span className="text-gold-gradient">DASHBOARD</span>
            </h2>
          </div>

          <div className="hidden sm:block font-mono text-xs text-right text-stone-400">
            <span className="text-stone-500 block">BASE CURRENCY</span>
            <span className="text-gold font-bold">INR (₹) • LIVE SIMULATED</span>
          </div>
        </div>

        {/* Top Summary Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Main Portfolio Value Card */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-obsidian-950 border border-gold/40 gold-glow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                <span>TOTAL AGGREGATE CAPITAL</span>
                <span className="text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">LIVE NAV</span>
              </div>
              <div className="text-4xl sm:text-6xl font-black font-mono text-stone-100 tracking-tight mb-4">
                ₹8,475,200
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-obsidian-850 font-mono text-xs">
              <div>
                <span className="text-stone-500 block text-[10px]">TODAY'S P&L</span>
                <span className="text-emerald-market font-bold text-lg sm:text-xl flex items-center gap-1">
                  +₹142,800 <span className="text-xs font-normal">(+1.71%)</span>
                </span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">CUMULATIVE RETURN</span>
                <span className="text-gold font-bold text-lg sm:text-xl flex items-center gap-1">
                  +34.60% <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Metric Highlight */}
          <div className="p-8 rounded-2xl bg-obsidian-950 border border-obsidian-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-4">
                <span className="flex items-center gap-2 text-gold"><Award size={16} /> SYSTEM METRICS</span>
                <span className="text-stone-500">AUDITED</span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center border-b border-obsidian-850 pb-3">
                  <span className="text-stone-400 text-xs">WIN RATE</span>
                  <span className="text-stone-100 font-bold text-lg">{portfolioSummary.winRatePct}%</span>
                </div>
                <div className="flex justify-between items-center border-b border-obsidian-850 pb-3">
                  <span className="text-stone-400 text-xs">PROFIT FACTOR</span>
                  <span className="text-gold font-bold text-lg">{portfolioSummary.profitFactor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-xs">MAX DRAWDOWN</span>
                  <span className="text-coral-market font-bold text-lg">{portfolioSummary.maxDrawdownPct}%</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-obsidian-850 text-[10px] font-mono text-stone-500">
              RESTORATION REGIME: REGULAR ALPHA
            </div>
          </div>
        </div>

        {/* 4 Quantitative Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-xs mb-1 flex items-center justify-between">
              <span>ACTIVE ALLOCATION</span>
              <BarChart3 size={14} className="text-gold" />
            </div>
            <div className="text-xl font-bold text-stone-100">86.0%</div>
            <div className="text-[10px] text-stone-400 mt-1">14.0% Cash / ETF Hedge</div>
          </div>

          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-xs mb-1 flex items-center justify-between">
              <span>AVERAGE R:R</span>
              <TrendingUp size={14} className="text-emerald-market" />
            </div>
            <div className="text-xl font-bold text-emerald-market">1 : 3.12</div>
            <div className="text-[10px] text-stone-400 mt-1">Asymmetric Risk Profile</div>
          </div>

          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-xs mb-1 flex items-center justify-between">
              <span>CLOSED TRADES</span>
              <Award size={14} className="text-gold" />
            </div>
            <div className="text-xl font-bold text-stone-100">42</div>
            <div className="text-[10px] text-stone-400 mt-1">29 Wins / 13 Losses</div>
          </div>

          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-xs mb-1 flex items-center justify-between">
              <span>RISK EXPOSURE</span>
              <Shield size={14} className="text-coral-market" />
            </div>
            <div className="text-xl font-bold text-stone-100">0.95%</div>
            <div className="text-[10px] text-stone-400 mt-1">Strict Capital Protection</div>
          </div>
        </div>
      </div>
    </section>
  );
}
