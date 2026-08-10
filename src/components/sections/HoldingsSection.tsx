import React, { useState } from 'react';
import { sampleHoldings } from '../../data/portfolioData';
import { Holding } from '../../types';
import { ArrowUpRight, ChevronRight, Layers, PieChart } from 'lucide-react';

export function HoldingsSection() {
  const [selectedHolding, setSelectedHolding] = useState<Holding | null>(null);

  return (
    <section id="holdings" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 04 — ACTIVE POSITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              PORTFOLIO <span className="text-gold-gradient">HOLDINGS</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400">
            TOTAL POSITIONS: <span className="text-gold font-bold">{sampleHoldings.length}</span>
          </div>
        </div>

        {/* Holdings Table */}
        <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-950/80">
                <th className="py-4 px-6 font-semibold">ASSET</th>
                <th className="py-4 px-6 font-semibold">SECTOR</th>
                <th className="py-4 px-6 font-semibold">TYPE</th>
                <th className="py-4 px-6 font-semibold text-right">AVG PRICE</th>
                <th className="py-4 px-6 font-semibold text-right">CMP</th>
                <th className="py-4 px-6 font-semibold text-right">ALLOCATION</th>
                <th className="py-4 px-6 font-semibold text-right">UNREALIZED P&L</th>
                <th className="py-4 px-6 font-semibold text-center">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-850">
              {sampleHoldings.map((h) => (
                <tr
                  key={h.id}
                  onClick={() => setSelectedHolding(h)}
                  className="hover:bg-obsidian-850/80 transition cursor-pointer group"
                >
                  <td className="py-4 px-6">
                    <div className="font-bold text-stone-100 group-hover:text-gold transition flex items-center gap-2">
                      <span>{h.symbol}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition text-gold" />
                    </div>
                    <div className="text-[10px] text-stone-500">{h.name}</div>
                  </td>
                  <td className="py-4 px-6 text-stone-300">{h.sector}</td>
                  <td className="py-4 px-6 text-stone-400">{h.position}</td>
                  <td className="py-4 px-6 text-right text-stone-300">₹{h.avgPrice.toLocaleString('en-IN')}</td>
                  <td className="py-4 px-6 text-right font-semibold text-stone-100">₹{h.currentPrice.toLocaleString('en-IN')}</td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-gold font-semibold">{h.allocationPct}%</span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-emerald-market">
                    +₹{h.pnl.toLocaleString('en-IN')}
                    <div className="text-[10px] font-normal text-emerald-market/80">+{h.pnlPct}%</div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-gold/30 bg-gold/10 text-gold">
                      {h.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Holding Drawer Detail */}
        {selectedHolding && (
          <div className="mt-8 p-6 rounded-2xl bg-obsidian-900 border border-gold/40 text-xs font-mono animate-fadeIn">
            <div className="flex items-center justify-between border-b border-obsidian-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-gold">{selectedHolding.symbol}</span>
                <span className="text-stone-400">{selectedHolding.name}</span>
              </div>
              <button
                onClick={() => setSelectedHolding(null)}
                className="text-stone-500 hover:text-gold"
              >
                CLOSE [✕]
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="text-stone-500 block">SECTOR ALLOCATION</span>
                <span className="text-stone-200 font-bold">{selectedHolding.sector} ({selectedHolding.allocationPct}%)</span>
              </div>
              <div>
                <span className="text-stone-500 block">UNREALIZED PROFIT</span>
                <span className="text-emerald-market font-bold">+₹{selectedHolding.pnl.toLocaleString('en-IN')} (+{selectedHolding.pnlPct}%)</span>
              </div>
              <div>
                <span className="text-stone-500 block">AVERAGE ENTRY</span>
                <span className="text-stone-200 font-bold">₹{selectedHolding.avgPrice}</span>
              </div>
              <div>
                <span className="text-stone-500 block">STRATEGY REGIME</span>
                <span className="text-gold font-bold">{selectedHolding.position}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
