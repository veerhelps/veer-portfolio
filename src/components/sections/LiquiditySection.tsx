import React from 'react';
import { ForexFlowField } from '../3d/ForexFlowField';
import { Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

export function LiquiditySection() {
  return (
    <section
      id="liquidity"
      className="py-28 sm:py-36 bg-transparent border-t border-crimson/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-crimson mb-3">
          <Activity size={14} className="text-crimson animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 06 — INSTITUTIONAL ORDER FLOW</span>
        </div>

        {/* Dramatic Editorial Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-cream tracking-tight mb-4 break-words">
          LIQUIDITY <span className="text-crimson">LEAVES A TRAIL.</span>
        </h2>

        <p className="max-w-2xl text-stone-300 text-xs sm:text-base font-light mb-10 leading-relaxed font-sans">
          Institutional market participants require massive counter-party orders to fill size. Price does not move randomly; it travels systematically from one liquidity pool to the next.
        </p>

        {/* Signature Interactive 3D Flow Field with mouse repulsion */}
        <div className="mb-10">
          <ForexFlowField />
        </div>

        {/* Liquidity Concepts Editorial Grid with Frosted Glass Specimen Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 font-mono text-xs">
          <div className="p-5 sm:p-7 rounded-3xl card-specimen-glass-burgundy burgundy-glow-md flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 text-[10px] text-stone-400">
                <span className="text-crimson font-bold uppercase tracking-wider">POOL 01 // BSL</span>
                <div className="specimen-pill-inset px-2.5 py-0.5 rounded-full text-[9px] text-stone-400">
                  veer.specimen
                </div>
              </div>
              <span className="text-crimson font-black text-lg block mb-2 font-display">BUY-SIDE LIQUIDITY</span>
              <p className="text-stone-300 text-xs font-sans font-light leading-relaxed">
                Resting buy stop loss orders accumulated above previous session swing highs. Institutional smart money sweeps these pools to generate liquidity for short distribution.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-stone-500">
              <span>BURGUNDY #1A0A0F</span>
              <span className="text-crimson font-bold">CMYK 0, 64, 57, 90</span>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-3xl card-specimen-glass flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 text-[10px] text-stone-400">
                <span className="text-emerald-market font-bold uppercase tracking-wider">POOL 02 // SSL</span>
                <div className="specimen-pill-inset px-2.5 py-0.5 rounded-full text-[9px] text-stone-400">
                  veer.specimen
                </div>
              </div>
              <span className="text-emerald-market font-black text-lg block mb-2 font-display">SELL-SIDE LIQUIDITY</span>
              <p className="text-stone-300 text-xs font-sans font-light leading-relaxed">
                Stop loss sell orders resting beneath swing lows or Asian consolidation boundaries. Targeted for institutional accumulation before systematic expansion.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-stone-500">
              <span>EMERALD #36D39A</span>
              <span className="text-emerald-market font-bold">ACCUMULATION</span>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-3xl card-specimen-glass flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 text-[10px] text-stone-400">
                <span className="text-gold font-bold uppercase tracking-wider">IMBALANCE // FVG</span>
                <div className="specimen-pill-inset px-2.5 py-0.5 rounded-full text-[9px] text-stone-400">
                  veer.specimen
                </div>
              </div>
              <span className="text-gold font-black text-lg block mb-2 font-display">FAIR VALUE GAPS</span>
              <p className="text-stone-300 text-xs font-sans font-light leading-relaxed">
                Three-candle displacement imbalances caused by aggressive one-sided orders. Once liquidity is swept, price seeks mitigation back into these institutional inefficiencies.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-stone-500">
              <span>BLUSH ROSE #F6E6EA</span>
              <span className="text-gold font-bold">CMYK 0, 7, 5, 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
