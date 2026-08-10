import React from 'react';
import { LiquidityMap3D } from '../3d/LiquidityMap3D';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export function LiquiditySection() {
  return (
    <section id="liquidity" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 05 — INSTITUTIONAL MAP</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          LIQUIDITY IS <span className="text-gold-gradient">THE MAP.</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-10">
          Institutional market participants require vast pools of counter-party orders to enter position size. Price moves from one liquidity pool to the next.
        </p>

        {/* 3D Liquidity Canvas Component */}
        <LiquidityMap3D />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 font-mono text-xs">
          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <span className="text-coral-market font-bold block mb-1">BUY-SIDE LIQUIDITY (BSL)</span>
            <p className="text-stone-400 text-xs font-sans leading-relaxed">
              Stop loss buy orders accumulated above equal highs or previous daily highs. Target for institutional short entries.
            </p>
          </div>

          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <span className="text-emerald-market font-bold block mb-1">SELL-SIDE LIQUIDITY (SSL)</span>
            <p className="text-stone-400 text-xs font-sans leading-relaxed">
              Stop loss sell orders accumulated below equal lows or previous daily lows. Target for institutional long accumulation.
            </p>
          </div>

          <div className="card-dark-surface p-5 rounded-xl border border-obsidian-800">
            <span className="text-gold font-bold block mb-1">FAIR VALUE GAPS (FVG)</span>
            <p className="text-stone-400 text-xs font-sans leading-relaxed">
              Imbalances created during rapid displacement. Re-tested as high-probability entry mitigation zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
