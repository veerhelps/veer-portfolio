import React, { useState } from 'react';
import { forexPairs } from '../../data/forexPairs';
import { ForexPair } from '../../types';
import { ArrowUpRight, TrendingUp, TrendingDown, Layers } from 'lucide-react';

export function GlobalForexMarket() {
  const [filter, setFilter] = useState<'ALL' | 'MAJOR' | 'CROSS' | 'METAL'>('ALL');

  const filteredPairs = forexPairs.filter(p => filter === 'ALL' || p.category === filter);

  return (
    <section id="forex-market" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 03 — INSTRUMENT UNIVERSE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight">
              THE FOREX <span className="text-gold-gradient">UNIVERSE</span>
            </h2>
            <p className="text-stone-400 font-sans text-xs sm:text-sm font-light mt-2 max-w-xl">
              Curated selection of G8 fiat majors, high-volatility crosses, and spot precious metals monitored for institutional imbalance and session liquidity sweeps.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex bg-obsidian-900 p-1 rounded-xl border border-obsidian-800 font-mono text-xs overflow-x-auto no-scrollbar max-w-full">
            {(['ALL', 'MAJOR', 'CROSS', 'METAL'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                  filter === cat
                    ? 'bg-cream text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat === 'ALL' ? 'ALL' : cat === 'MAJOR' ? 'MAJORS' : cat === 'CROSS' ? 'CROSSES' : 'METALS'}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Editorial Currency Grid with Liquid Frosted Glass Specimen Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPairs.map((pair) => {
            const isBullish = pair.trend === 'BULLISH';
            const isBearish = pair.trend === 'BEARISH';
            const isMetal = pair.category === 'METAL';
            const isCross = pair.category === 'CROSS';

            const chromaticTag = isMetal
              ? { name: 'Opal Moonstone', hex: '#D9DDE2', cmyk: '5, 2, 0, 11', badgeBg: 'bg-white/10 text-cream border-white/20' }
              : isCross
              ? { name: 'Royal Violet', hex: '#D2C3F6', cmyk: '41, 60, 0, 64', badgeBg: 'bg-violet-900/30 text-lavender-ethereal border-violet-700/40' }
              : { name: 'Electric Cyan', hex: '#1EC1CB', cmyk: '85, 5, 0, 20', badgeBg: 'bg-cyan-900/25 text-cyan-highlight border-cyan-700/40' };

            return (
              <div
                key={pair.id}
                className="p-5 sm:p-6 rounded-3xl card-specimen-glass hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle Chromatic Specimen Glow Behind Card */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-opacity pointer-events-none"
                  style={{ backgroundColor: chromaticTag.hex }}
                />

                <div>
                  {/* Top Row: Category Tag & Inset Pill (dyslove.design style) */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone-400 mb-3">
                    <span className={`px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${chromaticTag.badgeBg}`}>
                      {pair.category}
                    </span>
                    <div className="specimen-pill-inset px-2.5 py-0.5 rounded-full text-[9px] text-stone-400 group-hover:text-gold transition">
                      vaxsa.specimen
                    </div>
                  </div>

                  <div className="flex items-baseline justify-between mt-3">
                    <h3 className="font-display font-bold text-2xl text-cream group-hover:text-gold transition-colors">
                      {pair.symbol}
                    </h3>
                    <div className="font-mono text-xs font-bold">
                      <span className={isBullish ? 'text-emerald-market' : isBearish ? 'text-coral-market' : 'text-gold'}>
                        {isBullish ? `+${pair.changePct}%` : `${pair.changePct}%`}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-400 mb-3 font-sans">{pair.name}</div>

                  <div className="font-mono text-2xl font-black text-cream tracking-tight my-1">
                    {pair.price}
                  </div>

                  {/* Micro Specimen Color Technical Readout */}
                  <div className="flex items-center gap-2 font-mono text-[9px] text-stone-500 my-2 pt-1 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: chromaticTag.hex }} />
                    <span className="text-stone-400 uppercase">{chromaticTag.name}</span>
                    <span>•</span>
                    <span>HEX {chromaticTag.hex}</span>
                    <span className="hidden sm:inline">• CMYK {chromaticTag.cmyk}</span>
                  </div>

                  {/* Micro Structure Spec Box */}
                  <div className="bg-obsidian-950/70 p-3 rounded-2xl border border-white/5 mt-3 text-[10px] font-mono space-y-1.5 backdrop-blur-md">
                    <div className="flex justify-between text-stone-400">
                      <span className="text-stone-500">STRUCTURE:</span>
                      <span className="text-stone-300 font-semibold truncate ml-2">{pair.structure}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span className="text-stone-500">SUPPORT:</span>
                      <span className="text-emerald-market">{pair.support}</span>
                    </div>
                    <div className="flex justify-between text-stone-400">
                      <span className="text-stone-500">RESISTANCE:</span>
                      <span className="text-coral-market">{pair.resistance}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5">
                    {isBullish ? <TrendingUp size={12} className="text-emerald-market" /> : <TrendingDown size={12} className="text-coral-market" />}
                    <span>{pair.trend}</span>
                  </span>
                  <span className="text-gold font-bold">CONFIDENCE {pair.confidencePct}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
