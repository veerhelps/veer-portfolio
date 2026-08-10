import React, { useState } from 'react';
import { forexPairs } from '../../data/forexPairs';
import { ForexPair } from '../../types';
import { Globe, ArrowUpRight, TrendingUp, TrendingDown } from 'lucide-react';

export function GlobalForexMarket() {
  const [filter, setFilter] = useState<'ALL' | 'MAJOR' | 'CROSS' | 'METAL'>('ALL');

  const filteredPairs = forexPairs.filter(p => filter === 'ALL' || p.category === filter);

  return (
    <section id="forex-market" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 02 — CURRENCY UNIVERSE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              THE GLOBAL <span className="text-gold-gradient">FOREX MARKET</span>
            </h2>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex bg-obsidian-900 p-1 rounded-xl border border-obsidian-800 font-mono text-xs">
            {(['ALL', 'MAJOR', 'CROSS', 'METAL'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition ${
                  filter === cat ? 'bg-gold-gradient text-obsidian-950 font-bold' : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Currency Pairs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPairs.map((pair) => {
            const isBullish = pair.trend === 'BULLISH';
            return (
              <div
                key={pair.id}
                className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-stone-500 mb-2">
                    <span className="text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-bold">{pair.category}</span>
                    <span>SPREAD: {pair.spreadPips} PIPS</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-stone-100 group-hover:text-gold transition">
                    {pair.symbol}
                  </h3>
                  <div className="text-xs text-stone-400 mb-3 font-sans">{pair.name}</div>

                  <div className="font-mono text-2xl font-black text-stone-100 my-2">
                    {pair.price}
                    <span className={`text-xs ml-2 font-normal ${isBullish ? 'text-emerald-market' : 'text-coral-market'}`}>
                      {isBullish ? `+${pair.changePct}%` : `${pair.changePct}%`}
                    </span>
                  </div>

                  <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-850 mt-4 text-[11px] font-mono space-y-1.5">
                    <div className="flex justify-between text-stone-400">
                      <span>STRUCTURE:</span>
                      <span className="text-stone-200">{pair.structure}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>SUPPORT:</span>
                      <span className="text-emerald-market font-semibold">{pair.support}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span>RESISTANCE:</span>
                      <span className="text-coral-market font-semibold">{pair.resistance}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-obsidian-850 flex items-center justify-between text-[10px] font-mono text-stone-500">
                  <span>TREND: {pair.trend}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition flex items-center gap-1">
                    INSPECT <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
