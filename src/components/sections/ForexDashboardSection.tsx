import React, { useState } from 'react';
import { forexPortfolioSummary, openForexPositions } from '../../data/forexPortfolio';
import { ForexPosition } from '../../types';
import { TrendingUp, Award, Shield, ArrowUpRight, Grid, List, X, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export function ForexDashboardSection() {
  const [viewMode, setViewMode] = useState<'TILES' | 'TABLE'>('TILES');
  const [selectedPosition, setSelectedPosition] = useState<ForexPosition | null>(null);

  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 07 — LIVE POSITION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight break-words">
              THE <span className="text-gold-gradient">PORTFOLIO</span>
            </h2>
            <p className="text-stone-400 font-sans text-xs sm:text-sm font-light mt-2 max-w-xl">
              Audited institutional positions, risk parameters, and mathematical equity curve metrics. Zero discretionary gambling; 1.0% fixed capital defense.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Switcher: 3D Tiles vs Table */}
            <div className="flex bg-obsidian-950 p-1 rounded-xl border border-obsidian-800 font-mono text-xs">
              <button
                onClick={() => setViewMode('TILES')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  viewMode === 'TILES'
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                <Grid size={13} />
                <span>3D TILES</span>
              </button>
              <button
                onClick={() => setViewMode('TABLE')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  viewMode === 'TABLE'
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                <List size={13} />
                <span>TABLE</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6 Core Required Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">ACCOUNT VALUE</span>
            <span className="text-lg sm:text-xl font-bold text-cream">
              ${forexPortfolioSummary.accountValueUsd.toLocaleString('en-US')}
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">NET NAV (USD)</span>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">TOTAL RETURN</span>
            <span className="text-lg sm:text-xl font-bold text-gold">
              +{forexPortfolioSummary.totalReturnPct}%
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">ANNUALIZED</span>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">WIN RATE</span>
            <span className="text-lg sm:text-xl font-bold text-cream">
              {forexPortfolioSummary.winRatePct}%
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">{forexPortfolioSummary.totalTrades} AUDITED TRADES</span>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">PROFIT FACTOR</span>
            <span className="text-lg sm:text-xl font-bold text-gold">
              {forexPortfolioSummary.profitFactor}
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">GROSS ALPHA</span>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">MAX DRAWDOWN</span>
            <span className="text-lg sm:text-xl font-bold text-coral-market">
              {forexPortfolioSummary.maxDrawdownPct}%
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">PEAK TO TROUGH</span>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">AVERAGE R:R</span>
            <span className="text-lg sm:text-xl font-bold text-emerald-market">
              1 : 3.05
            </span>
            <span className="text-[9px] text-stone-500 block mt-0.5">EXPECTANCY RATIO</span>
          </div>
        </div>

        {/* VIEW 1: FLOATING 3D TILES (Interactive Hover Depth & Shared Element Modal) */}
        {viewMode === 'TILES' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {openForexPositions.map((pos) => {
              const isLong = pos.direction === 'LONG';
              return (
                <div
                  key={pos.id}
                  onClick={() => setSelectedPosition(pos)}
                  className="group relative p-6 rounded-3xl bg-obsidian-900/80 border border-obsidian-800 hover:border-gold/50 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.8)] cursor-pointer overflow-hidden flex flex-col justify-between"
                  data-cursor="ANALYZE"
                >
                  {/* Subtle 3D Chart Fragment in Background */}
                  <div className="absolute right-0 bottom-0 w-32 h-24 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none">
                    <svg viewBox="0 0 100 60" className="w-full h-full stroke-gold fill-none">
                      <path d="M 0 50 Q 25 35, 45 42 T 80 15 L 100 20" strokeWidth="2.5" />
                    </svg>
                  </div>

                  <div>
                    {/* Header Row: Pair & Direction */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        isLong
                          ? 'bg-emerald-market/15 text-emerald-market border border-emerald-market/30'
                          : 'bg-coral-market/15 text-coral-market border border-coral-market/30'
                      }`}>
                        {pos.direction}
                      </span>
                      <span className="font-mono text-[10px] text-stone-500">R:R {pos.rrRatio}</span>
                    </div>

                    <h3 className="font-display font-black text-3xl text-cream group-hover:text-gold transition">
                      {pos.pair}
                    </h3>

                    {/* Entry, Stop, Target Grid */}
                    <div className="bg-obsidian-950/80 p-3.5 rounded-2xl border border-white/5 mt-4 space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between text-stone-400">
                        <span className="text-stone-500">ENTRY:</span>
                        <span className="text-stone-200 font-semibold">{pos.entryPrice}</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span className="text-stone-500">STOP:</span>
                        <span className="text-coral-market">{pos.stopLoss}</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span className="text-stone-500">TARGET:</span>
                        <span className="text-emerald-market">{pos.takeProfit}</span>
                      </div>
                      <div className="flex justify-between text-stone-400 pt-1 border-t border-white/5">
                        <span className="text-stone-500">CURRENT:</span>
                        <span className="text-cream font-bold">{pos.currentPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Result / PnL & Expand Hint */}
                  <div className="mt-5 pt-3 border-t border-obsidian-800 flex items-center justify-between font-mono">
                    <div>
                      <span className="text-stone-500 block text-[9px] uppercase">RESULT</span>
                      <span className="text-base font-bold text-emerald-market">
                        +${pos.pnlUsd.toLocaleString('en-US')}{' '}
                        <span className="text-[10px] text-stone-400">(+{pos.pnlPct}%)</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-gold group-hover:translate-x-1 transition-transform">
                      <span>EXPAND</span>
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: TERMINAL POSITIONS TABLE */}
        {viewMode === 'TABLE' && (
          <div className="overflow-x-auto rounded-3xl border border-obsidian-800 bg-obsidian-900/70 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left border-collapse font-mono text-xs min-w-[640px]">
              <thead>
                <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-950/90">
                  <th className="py-4 px-6 font-semibold">PAIR</th>
                  <th className="py-4 px-6 font-semibold">DIRECTION</th>
                  <th className="py-4 px-6 font-semibold text-right">ENTRY</th>
                  <th className="py-4 px-6 font-semibold text-right">STOP</th>
                  <th className="py-4 px-6 font-semibold text-right">TARGET</th>
                  <th className="py-4 px-6 font-semibold text-right">CURRENT</th>
                  <th className="py-4 px-6 font-semibold text-right">RESULT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-obsidian-850">
                {openForexPositions.map((pos) => {
                  const isLong = pos.direction === 'LONG';
                  return (
                    <tr
                      key={pos.id}
                      onClick={() => setSelectedPosition(pos)}
                      className="hover:bg-obsidian-850/60 transition cursor-pointer"
                      data-cursor="ANALYZE"
                    >
                      <td className="py-4 px-6 font-bold text-cream flex items-center gap-2">
                        <span>{pos.pair}</span>
                        <ArrowUpRight size={12} className="text-stone-500 opacity-60" />
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          isLong ? 'bg-emerald-market/15 text-emerald-market' : 'bg-coral-market/15 text-coral-market'
                        }`}>
                          {pos.direction}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right text-stone-300">{pos.entryPrice}</td>
                      <td className="py-4 px-6 text-right text-coral-market">{pos.stopLoss}</td>
                      <td className="py-4 px-6 text-right text-emerald-market">{pos.takeProfit}</td>
                      <td className="py-4 px-6 text-right font-bold text-cream">{pos.currentPrice}</td>
                      <td className="py-4 px-6 text-right font-bold text-emerald-market">
                        +${pos.pnlUsd.toLocaleString('en-US')} <span className="text-[10px] font-normal text-stone-400">(+{pos.pnlPct}%)</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Demo Data Notice */}
        <div className="mt-4 text-right font-mono text-[10px] text-stone-600">
          ● DEMO DATA AUDIT // LIVE PRICING MIRRORED VIA LDN-01 GATEWAY
        </div>

        {/* DETAILED POSITION EXPANSION MODAL */}
        {selectedPosition && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPosition.pair} Position Audit`}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn"
            onClick={() => setSelectedPosition(null)}
          >
            <div
              className="w-full max-w-lg bg-obsidian-900 border border-gold/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] gold-glow-md space-y-5 animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-obsidian-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      selectedPosition.direction === 'LONG'
                        ? 'bg-emerald-market/15 text-emerald-market border border-emerald-market/30'
                        : 'bg-coral-market/15 text-coral-market border border-coral-market/30'
                    }`}>
                      {selectedPosition.direction} POSITION
                    </span>
                    <span className="font-mono text-xs text-stone-500">EXECUTION AUDIT</span>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-cream">
                    {selectedPosition.pair}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedPosition(null)}
                  className="p-2 rounded-xl bg-obsidian-950 border border-obsidian-800 text-stone-400 hover:text-gold"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price Details Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">ENTRY PRICE</span>
                  <span className="text-xl font-bold text-cream">{selectedPosition.entryPrice}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">MARKET QUOTE</span>
                  <span className="text-xl font-bold text-gold">{selectedPosition.currentPrice}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">HARD STOP LOSS</span>
                  <span className="text-xl font-bold text-coral-market">{selectedPosition.stopLoss}</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">TAKE PROFIT LIMIT</span>
                  <span className="text-xl font-bold text-emerald-market">{selectedPosition.takeProfit}</span>
                </div>
              </div>

              {/* Risk & Execution Metrics */}
              <div className="p-4 rounded-2xl bg-obsidian-950/70 border border-white/5 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">RISK-TO-REWARD (R:R):</span>
                  <span className="text-gold font-bold">{selectedPosition.rrRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">CAPITAL RISK ALLOCATION:</span>
                  <span className="text-cream font-semibold">${selectedPosition.riskUsd} (0.7% NAV)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">UNREALIZED ACCUMULATION:</span>
                  <span className="text-emerald-market font-bold">
                    +${selectedPosition.pnlUsd.toLocaleString('en-US')} (+{selectedPosition.pnlPct}%)
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPosition(null)}
                className="w-full py-3 rounded-xl bg-gold text-obsidian-950 font-mono font-bold text-xs tracking-wider hover:bg-cream transition"
              >
                RETURN TO MATRIX
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
