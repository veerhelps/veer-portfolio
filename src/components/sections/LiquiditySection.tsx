import React from 'react';
import { ForexFlowField } from '../3d/ForexFlowField';
import { Layers, ArrowDownRight, ArrowUpRight, SplitSquareVertical } from 'lucide-react';

export function LiquiditySection() {
  return (
    <section
      id="liquidity"
      className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-crimson mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">SECTION 04 — LIQUIDITY CONCEPTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4">
            LIQUIDITY <span className="text-crimson">LEAVES A TRAIL.</span>
          </h2>

          <p className="max-w-2xl text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed font-sans">
            Institutional market participants require massive counter-party orders to fill size. Price does not move randomly; it travels systematically from one liquidity pool to the next.
          </p>
        </div>

        {/* Interactive Subtle Flow Field */}
        <div className="mb-12">
          <ForexFlowField />
        </div>

        {/* Clean Educational Liquidity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {/* Card 1: Buy-Side Liquidity */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-crimson/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-crimson font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ArrowUpRight size={15} />
                  <span>BSL POOL</span>
                </span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">BUY STOPS</span>
              </div>
              <h3 className="text-cream font-black text-xl mb-3 font-display tracking-tight">
                BUY-SIDE LIQUIDITY
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Resting buy stop-loss orders accumulated above previous session swing highs and key resistance levels. Institutional algorithms systematically sweep these pools to pair large short distribution orders.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-stone-500">MECHANISM:</span>
              <span className="text-crimson font-bold">DISTRIBUTION LIQUIDITY</span>
            </div>
          </div>

          {/* Card 2: Sell-Side Liquidity */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-emerald-market/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-market font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ArrowDownRight size={15} />
                  <span>SSL POOL</span>
                </span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">SELL STOPS</span>
              </div>
              <h3 className="text-cream font-black text-xl mb-3 font-display tracking-tight">
                SELL-SIDE LIQUIDITY
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Sell stop orders resting beneath swing lows and Asian session range boundaries. Institutional buyers sweep beneath these levels to absorb selling pressure and accumulate long positions at deep discount pricing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-stone-500">MECHANISM:</span>
              <span className="text-emerald-market font-bold">ACCUMULATION LIQUIDITY</span>
            </div>
          </div>

          {/* Card 3: Fair Value / Imbalance */}
          <div className="p-7 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <SplitSquareVertical size={15} />
                  <span>FVG INEFFICIENCY</span>
                </span>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">DISPLACEMENT</span>
              </div>
              <h3 className="text-cream font-black text-xl mb-3 font-display tracking-tight">
                FAIR VALUE / IMBALANCE
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
                Three-candle displacement gaps where aggressive volume created one-sided price delivery. Once external liquidity is cleared, algorithmic delivery systematically seeks mitigation back into these inefficiencies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
              <span className="text-stone-500">MECHANISM:</span>
              <span className="text-gold font-bold">PRICE REBALANCING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
