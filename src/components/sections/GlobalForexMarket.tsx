import React, { useState } from 'react';
import { forexPairs } from '../../data/forexPairs';
import { ForexPair } from '../../types';
import { ArrowUpRight, TrendingUp, TrendingDown, Layers, Share2, Grid, X, Shield, Activity, Zap } from 'lucide-react';

export function GlobalForexMarket() {
  const [viewMode, setViewMode] = useState<'NETWORK' | 'GRID'>('NETWORK');
  const [filter, setFilter] = useState<'ALL' | 'MAJOR' | 'CROSS' | 'METAL'>('ALL');
  const [selectedPair, setSelectedPair] = useState<ForexPair | null>(null);
  const [hoveredPair, setHoveredPair] = useState<ForexPair | null>(null);

  const filteredPairs = forexPairs.filter(p => filter === 'ALL' || p.category === filter);

  // Constellation coordinate mapping for visual node network
  const constellationNodes = [
    { id: 'fp-1', x: 28, y: 35, category: 'MAJOR' },
    { id: 'fp-2', x: 42, y: 22, category: 'MAJOR' },
    { id: 'fp-3', x: 68, y: 30, category: 'MAJOR' },
    { id: 'fp-7', x: 74, y: 48, category: 'MAJOR' },
    { id: 'fp-5', x: 72, y: 68, category: 'MAJOR' },
    { id: 'fp-6', x: 50, y: 78, category: 'MAJOR' },
    { id: 'fp-9', x: 26, y: 65, category: 'MAJOR' },
    { id: 'fp-10', x: 34, y: 15, category: 'CROSS' },
    { id: 'fp-11', x: 48, y: 45, category: 'CROSS' },
    { id: 'fp-8', x: 58, y: 18, category: 'CROSS' },
    { id: 'fp-4', x: 84, y: 24, category: 'METAL' },
    { id: 'fp-12', x: 88, y: 42, category: 'METAL' },
  ];

  return (
    <section id="universe" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none">
      <span id="forex-market" className="absolute -top-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 03 — INSTRUMENT UNIVERSE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight break-words">
              THE FOREX <span className="text-gold-gradient">UNIVERSE</span>
            </h2>
            <p className="text-stone-400 font-sans text-xs sm:text-sm font-light mt-2 max-w-xl">
              Interactive constellation map of G8 fiat majors, cross volatility corridors, and sovereign spot precious metals. Avoid static tables; trace liquidity relationships directly.
            </p>
          </div>

          {/* View Mode & Filter Switchers */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Network vs Grid Toggle */}
            <div className="flex bg-obsidian-950 p-1 rounded-xl border border-obsidian-800 font-mono text-xs">
              <button
                onClick={() => setViewMode('NETWORK')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  viewMode === 'NETWORK'
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                <Share2 size={13} />
                <span>NODE NETWORK</span>
              </button>
              <button
                onClick={() => setViewMode('GRID')}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  viewMode === 'GRID'
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                <Grid size={13} />
                <span>CARDS</span>
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex bg-obsidian-900 p-1 rounded-xl border border-obsidian-800 font-mono text-xs overflow-x-auto no-scrollbar">
              {(['ALL', 'MAJOR', 'CROSS', 'METAL'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    filter === cat
                      ? 'bg-cream text-obsidian-950 font-bold shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  data-cursor="OPEN"
                >
                  {cat === 'ALL' ? 'ALL' : cat === 'MAJOR' ? 'MAJORS' : cat === 'CROSS' ? 'CROSSES' : 'METALS'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VIEW 1: VISUAL NODE NETWORK / CONSTELLATION MAP */}
        {viewMode === 'NETWORK' && (
          <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl bg-obsidian-950/80 border border-obsidian-800 shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
            {/* Constellation Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,180,90,0.06),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Central Gravitational Anchor: USD LIQUIDITY CORE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-obsidian-900/90 border border-gold/50 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(214,180,90,0.25)]">
                <span className="font-display font-black text-gold text-sm sm:text-base">USD</span>
                <span className="font-mono text-[8px] text-stone-400">NEXUS</span>
              </div>
              <span className="font-mono text-[9px] text-stone-500 uppercase mt-2 tracking-widest">
                G8 RESERVE EQUILIBRIUM
              </span>
            </div>

            {/* Interconnecting SVG Network Vectors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {constellationNodes.map((n) => {
                const isHovered = hoveredPair?.id === n.id;
                return (
                  <line
                    key={n.id}
                    x1="50%"
                    y1="50%"
                    x2={`${n.x}%`}
                    y2={`${n.y}%`}
                    stroke={isHovered ? '#D6B45A' : '#ffffff12'}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeDasharray={n.category === 'CROSS' ? '3 3' : 'none'}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Node Items */}
            <div className="relative w-full h-full">
              {forexPairs.map((pair) => {
                const nodePos = constellationNodes.find((n) => n.id === pair.id);
                if (!nodePos) return null;
                const isMatch = filter === 'ALL' || pair.category === filter;
                const isHovered = hoveredPair?.id === pair.id;
                const isBullish = pair.trend === 'BULLISH';

                return (
                  <div
                    key={pair.id}
                    style={{ left: `${nodePos.x}%`, top: `${nodePos.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-20 ${
                      isMatch ? 'opacity-100 scale-100' : 'opacity-20 scale-90 pointer-events-none'
                    }`}
                  >
                    <button
                      onClick={() => setSelectedPair(pair)}
                      onMouseEnter={() => setHoveredPair(pair)}
                      onMouseLeave={() => setHoveredPair(null)}
                      className={`group px-3 py-2 rounded-2xl border backdrop-blur-xl transition-all duration-200 flex flex-col items-center ${
                        isHovered
                          ? 'bg-obsidian-900 border-gold shadow-[0_0_25px_rgba(214,180,90,0.4)] scale-110 -translate-y-1'
                          : 'bg-obsidian-950/90 border-obsidian-750 hover:border-gold/40'
                      }`}
                      data-cursor="ANALYZE"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          pair.category === 'METAL'
                            ? 'bg-white shadow-[0_0_6px_#ffffff]'
                            : isBullish
                            ? 'bg-emerald-market shadow-[0_0_6px_#36D39A]'
                            : 'bg-coral-market shadow-[0_0_6px_#D52B32]'
                        }`} />
                        <span className="font-display font-bold text-xs sm:text-sm text-cream group-hover:text-gold transition">
                          {pair.symbol}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-[9px] mt-0.5">
                        <span className="text-stone-300">{pair.price}</span>
                        <span className={isBullish ? 'text-emerald-market' : 'text-coral-market'}>
                          {isBullish ? `+${pair.changePct}%` : `${pair.changePct}%`}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Bottom Meta Cue */}
            <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-stone-500 border-t border-obsidian-850 pt-3">
              <span>● CLICK NODE TO OPEN COMPACT PAIR PANEL</span>
              <span className="text-gold">12 LIQUIDITY CHANNELS MONITORED</span>
            </div>
          </div>
        )}

        {/* VIEW 2: TRADITIONAL / COMPACT SPECIMEN CARDS */}
        {viewMode === 'GRID' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredPairs.map((pair) => {
              const isBullish = pair.trend === 'BULLISH';
              const isBearish = pair.trend === 'BEARISH';
              return (
                <div
                  key={pair.id}
                  onClick={() => setSelectedPair(pair)}
                  className="p-5 sm:p-6 rounded-3xl card-specimen-glass hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] group flex flex-col justify-between cursor-pointer transition-all duration-200"
                  data-cursor="ANALYZE"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-stone-400 mb-3">
                      <span className="px-2 py-0.5 rounded-full border border-white/10 font-bold uppercase tracking-wider text-cream">
                        {pair.category}
                      </span>
                      <span className="text-stone-500 font-mono">SPR: {pair.spreadPips}P</span>
                    </div>

                    <div className="flex items-baseline justify-between mt-2">
                      <h3 className="font-display font-bold text-2xl text-cream group-hover:text-gold transition-colors">
                        {pair.symbol}
                      </h3>
                      <div className="font-mono text-xs font-bold">
                        <span className={isBullish ? 'text-emerald-market' : isBearish ? 'text-coral-market' : 'text-gold'}>
                          {isBullish ? `+${pair.changePct}%` : `${pair.changePct}%`}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-400 mb-2 font-sans">{pair.name}</div>
                    <div className="font-mono text-2xl font-black text-cream tracking-tight my-1">
                      {pair.price}
                    </div>

                    <div className="bg-obsidian-950/70 p-3 rounded-2xl border border-white/5 mt-3 text-[10px] font-mono space-y-1 backdrop-blur-md">
                      <div className="flex justify-between text-stone-400">
                        <span className="text-stone-500">STRUCTURE:</span>
                        <span className="text-stone-300 font-semibold truncate ml-2">{pair.structure}</span>
                      </div>
                      <div className="flex justify-between text-stone-400">
                        <span className="text-stone-500">CONFIDENCE:</span>
                        <span className="text-gold font-bold">{pair.confidencePct}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gold group-hover:translate-x-0.5 transition-transform">
                    <span>INSPECT PAIR</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* COMPACT PAIR PANEL MODAL (Opened on click) */}
        {selectedPair && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPair.symbol} Inspection Panel`}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn"
            onClick={() => setSelectedPair(null)}
          >
            <div
              className="w-full max-w-lg bg-obsidian-900 border border-gold/50 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] gold-glow-md space-y-5 animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-obsidian-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold/15 border border-gold/30 text-gold uppercase font-bold">
                      {selectedPair.category} SPECIMEN
                    </span>
                    <span className="font-mono text-xs text-stone-400">VEER OBSERVATORY</span>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-cream">
                    {selectedPair.symbol}
                  </h3>
                  <div className="text-xs text-stone-400 font-sans">{selectedPair.name}</div>
                </div>

                <button
                  onClick={() => setSelectedPair(null)}
                  className="p-2 rounded-xl bg-obsidian-950 border border-obsidian-800 text-stone-400 hover:text-gold"
                  aria-label="Close pair panel"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price & Trend Summary */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">MID QUOTE</span>
                  <span className="text-2xl font-black text-cream">{selectedPair.price}</span>
                  <span className={`text-[10px] font-bold block mt-0.5 ${
                    selectedPair.trend === 'BULLISH' ? 'text-emerald-market' : 'text-coral-market'
                  }`}>
                    {selectedPair.changePips > 0 ? `+${selectedPair.changePips} PIPS` : `${selectedPair.changePips} PIPS`} ({selectedPair.changePct}%)
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-obsidian-950 border border-obsidian-850">
                  <span className="text-stone-500 block text-[9px] uppercase">OPERATOR BIAS</span>
                  <span className="text-xl font-black text-gold">{selectedPair.trend}</span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">
                    CONFIDENCE: <span className="text-cream font-bold">{selectedPair.confidencePct}%</span>
                  </span>
                </div>
              </div>

              {/* Structure and Liquidity Depth */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-obsidian-950/70 border border-white/5 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-500">STRUCTURAL REGIME:</span>
                    <span className="text-cream font-semibold text-right">{selectedPair.structure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">INTERBANK SPREAD:</span>
                    <span className="text-gold font-bold">{selectedPair.spreadPips} PIPS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">SUPPORT BARRIER:</span>
                    <span className="text-emerald-market font-bold">{selectedPair.support}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">RESISTANCE SWEEP:</span>
                    <span className="text-coral-market font-bold">{selectedPair.resistance}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#portfolio"
                  onClick={() => setSelectedPair(null)}
                  className="w-full py-3 rounded-xl bg-gold text-obsidian-950 font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-cream transition"
                >
                  <span>VIEW EXECUTION IN PORTFOLIO</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
