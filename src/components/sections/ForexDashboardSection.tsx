import React from 'react';
import { forexPortfolioSummary, openForexPositions } from '../../data/forexPortfolio';
import { TrendingUp, Award, Shield, ArrowUpRight } from 'lucide-react';

export function ForexDashboardSection() {
  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 07 — LIVE POSITION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight">
              THE <span className="text-gold-gradient">PORTFOLIO</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-left sm:text-right text-stone-400">
            BASE DENOMINATION: <span className="text-cream font-bold">USD ($)</span> • <span className="text-gold">DEMO AUDIT</span>
          </div>
        </div>

        {/* Compact Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 font-mono text-xs">
          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">ACCOUNT VALUE</span>
            <span className="text-lg sm:text-xl font-bold text-cream">${forexPortfolioSummary.accountValueUsd.toLocaleString('en-US')}</span>
            <span className="text-[9px] text-stone-500 block mt-0.5">NET NAV</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">TODAY'S P&L</span>
            <span className="text-lg sm:text-xl font-bold text-emerald-market">+${forexPortfolioSummary.todayPnlUsd.toLocaleString('en-US')}</span>
            <span className="text-[9px] text-emerald-market/80 block mt-0.5">+{forexPortfolioSummary.todayPnlPct}%</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">TOTAL RETURN</span>
            <span className="text-lg sm:text-xl font-bold text-gold">+{forexPortfolioSummary.totalReturnPct}%</span>
            <span className="text-[9px] text-stone-500 block mt-0.5">ANNUALIZED</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">WIN RATE</span>
            <span className="text-lg sm:text-xl font-bold text-cream">{forexPortfolioSummary.winRatePct}%</span>
            <span className="text-[9px] text-stone-500 block mt-0.5">{forexPortfolioSummary.totalTrades} TRADES</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">PROFIT FACTOR</span>
            <span className="text-lg sm:text-xl font-bold text-gold">{forexPortfolioSummary.profitFactor}</span>
            <span className="text-[9px] text-stone-500 block mt-0.5">GROSS RATIO</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">MAX DRAWDOWN</span>
            <span className="text-lg sm:text-xl font-bold text-coral-market">{forexPortfolioSummary.maxDrawdownPct}%</span>
            <span className="text-[9px] text-stone-500 block mt-0.5">PEAK TO TROUGH</span>
          </div>
        </div>

        {/* Compact Positions Table */}
        <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse font-mono text-xs min-w-[640px]">
            <thead>
              <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-950/80">
                <th className="py-3.5 px-6 font-semibold">PAIR</th>
                <th className="py-3.5 px-6 font-semibold">DIRECTION</th>
                <th className="py-3.5 px-6 font-semibold text-right">ENTRY</th>
                <th className="py-3.5 px-6 font-semibold text-right">STOP</th>
                <th className="py-3.5 px-6 font-semibold text-right">TARGET</th>
                <th className="py-3.5 px-6 font-semibold text-right">CURRENT</th>
                <th className="py-3.5 px-6 font-semibold text-right">P&L (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-850">
              {openForexPositions.map((pos) => {
                const isLong = pos.direction === 'LONG';
                return (
                  <tr key={pos.id} className="hover:bg-obsidian-850/60 transition">
                    <td className="py-4 px-6 font-bold text-cream">{pos.pair}</td>
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

        {/* Demo Data Notice */}
        <div className="mt-4 text-right font-mono text-[10px] text-stone-600">
          ● DEMO DATA AUDIT // LIVE PRICING MIRRORED VIA LDN-01 GATEWAY
        </div>
      </div>
    </section>
  );
}
