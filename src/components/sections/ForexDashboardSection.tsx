import React from 'react';
import { forexPortfolioSummary, openForexPositions } from '../../data/forexPortfolio';
import { TrendingUp, Award, Shield, ArrowUpRight } from 'lucide-react';

export function ForexDashboardSection() {
  return (
    <section id="portfolio" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 06 — ACCOUNT CAPITAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              FOREX PORTFOLIO <span className="text-gold-gradient">DASHBOARD</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-right text-stone-400">
            BASE CURRENCY: <span className="text-gold font-bold">USD ($) • AUDITED AUDIT</span>
          </div>
        </div>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 p-8 rounded-2xl bg-obsidian-900 border border-gold/40 gold-glow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
                <span>TOTAL CAPITAL EQUITY</span>
                <span className="text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-bold">ACCOUNT NAV</span>
              </div>
              <div className="text-4xl sm:text-6xl font-black font-mono text-stone-100 tracking-tight mb-4">
                ${forexPortfolioSummary.accountValueUsd.toLocaleString('en-US')}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-obsidian-850 font-mono text-xs">
              <div>
                <span className="text-stone-500 block text-[10px]">TODAY'S P&L</span>
                <span className="text-emerald-market font-bold text-lg sm:text-xl flex items-center gap-1">
                  +${forexPortfolioSummary.todayPnlUsd.toLocaleString('en-US')} <span className="text-xs font-normal">(+{forexPortfolioSummary.todayPnlPct}%)</span>
                </span>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">CUMULATIVE RETURN</span>
                <span className="text-gold font-bold text-lg sm:text-xl flex items-center gap-1">
                  +{forexPortfolioSummary.totalReturnPct}% <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="p-8 rounded-2xl bg-obsidian-900 border border-obsidian-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-4">
                <span className="flex items-center gap-2 text-gold"><Award size={16} /> AUDITED STATS</span>
                <span className="text-stone-500">LIVE DEMO</span>
              </div>

              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center border-b border-obsidian-850 pb-3">
                  <span className="text-stone-400 text-xs">WIN RATE</span>
                  <span className="text-stone-100 font-bold text-lg">{forexPortfolioSummary.winRatePct}%</span>
                </div>
                <div className="flex justify-between items-center border-b border-obsidian-850 pb-3">
                  <span className="text-stone-400 text-xs">PROFIT FACTOR</span>
                  <span className="text-gold font-bold text-lg">{forexPortfolioSummary.profitFactor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 text-xs">MAX DRAWDOWN</span>
                  <span className="text-coral-market font-bold text-lg">{forexPortfolioSummary.maxDrawdownPct}%</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-obsidian-850 text-[10px] font-mono text-stone-500">
              TOTAL TRADES EXECUTED: {forexPortfolioSummary.totalTrades}
            </div>
          </div>
        </div>

        {/* Open Forex Positions Table */}
        <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-950/80">
                <th className="py-4 px-6 font-semibold">PAIR</th>
                <th className="py-4 px-6 font-semibold">DIRECTION</th>
                <th className="py-4 px-6 font-semibold text-right">ENTRY</th>
                <th className="py-4 px-6 font-semibold text-right">STOP LOSS</th>
                <th className="py-4 px-6 font-semibold text-right">TAKE PROFIT</th>
                <th className="py-4 px-6 font-semibold text-right">CURRENT</th>
                <th className="py-4 px-6 font-semibold text-right">LOT SIZE</th>
                <th className="py-4 px-6 font-semibold text-right">RISK / REWARD</th>
                <th className="py-4 px-6 font-semibold text-right">P&L (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-850">
              {openForexPositions.map((pos) => (
                <tr key={pos.id} className="hover:bg-obsidian-850/80 transition">
                  <td className="py-4 px-6 font-bold text-stone-100">{pos.pair}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      pos.direction === 'LONG' ? 'bg-emerald-market/20 text-emerald-market' : 'bg-coral-market/20 text-coral-market'
                    }`}>
                      {pos.direction}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right text-stone-300">{pos.entryPrice}</td>
                  <td className="py-4 px-6 text-right text-coral-market">{pos.stopLoss}</td>
                  <td className="py-4 px-6 text-right text-emerald-market">{pos.takeProfit}</td>
                  <td className="py-4 px-6 text-right font-bold text-stone-100">{pos.currentPrice}</td>
                  <td className="py-4 px-6 text-right text-stone-300">{pos.lotSize} LOTS</td>
                  <td className="py-4 px-6 text-right text-gold font-semibold">{pos.rrRatio}</td>
                  <td className="py-4 px-6 text-right font-bold text-emerald-market">
                    +${pos.pnlUsd.toLocaleString('en-US')} (+{pos.pnlPct}%)
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
