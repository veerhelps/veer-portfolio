import React from 'react';
import { CurrencyWatching3D } from '../3d/CurrencyWatching3D';
import { ShieldCheck, Eye, ArrowUpRight } from 'lucide-react';

export function CurrencyWatchingSection() {
  return (
    <section id="watching" className="py-28 bg-transparent border-t border-white/[0.08] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-12 right-12 font-mono text-[10px] text-stone-700 tracking-widest uppercase hidden lg:block select-none">
        SOVEREIGN FIAT OBSERVER // LATENCY: 8MS // REGIME: ACTIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Headline Column (5 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-crimson mb-2">
              <Eye size={14} className="animate-pulse text-crimson" />
              <span className="tracking-widest uppercase font-bold">SECTION 02 — THE OBSERVATORY EYE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-cream tracking-tighter leading-none break-words">
              THE CURRENCY<br />
              <span className="text-crimson">IS ALWAYS</span><br />
              <span className="text-gold-gradient">WATCHING.</span>
            </h2>

            <div className="w-16 h-[2px] bg-gold/40 my-4" />

            <p className="text-stone-300 font-sans text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Fiat currency is not passive paper. It is an algorithmic surveillance engine of global sovereign credit, central bank balance sheets, and inter-dealer order book pressure.
            </p>

            <p className="text-stone-500 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg">
              Every bid and offer leaves an irreversible fingerprint on the liquidity ledger. The retail trader looks for patterns; the disciplined institutional operator tracks the structural footprint.
            </p>

            {/* Micro Editorial Callout Strip with Frosted Glass Specimen Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-2xl card-specimen-glass border border-white/10 hover:border-cyan-highlight/40 transition group">
                <span className="text-stone-500 block text-[9px] uppercase tracking-wider">G8 INTERACTION</span>
                <span className="text-cream font-bold text-sm group-hover:text-cyan-electric transition">$7.5 TRILLION</span>
                <span className="text-[9px] text-stone-500 block mt-0.5">DAILY TURNOVER</span>
              </div>

              <div className="p-4 rounded-2xl card-specimen-glass border border-white/10 hover:border-cyan-highlight/40 transition group">
                <span className="text-stone-500 block text-[9px] uppercase tracking-wider">EXECUTION EDGE</span>
                <span className="text-cyan-electric font-bold text-sm">ZERO NOISE</span>
                <span className="text-[9px] text-stone-500 block mt-0.5">REALITY DRIVEN</span>
              </div>

              <div className="p-4 rounded-2xl card-specimen-glass border border-white/10 hover:border-crimson/40 transition group col-span-2 sm:col-span-1">
                <span className="text-stone-500 block text-[9px] uppercase tracking-wider">RISK TOLERANCE</span>
                <span className="text-crimson font-bold text-sm">1.0% STRICT</span>
                <span className="text-[9px] text-stone-500 block mt-0.5">FIXED DRAWDOWN</span>
              </div>
            </div>

            {/* Specimen Technical Readout (Reference Image 1: Deep Navy & Cyan) */}
            <div className="p-4 rounded-2xl card-specimen-glass border border-cyan-500/25 cyan-glow-md flex items-center justify-between font-mono text-[10px] text-stone-300">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#1C1C28] border border-cyan-electric/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1EC1CB] shadow-[0_0_8px_#1EC1CB]" />
                </div>
                <div>
                  <div className="font-bold text-cream tracking-wider flex items-center gap-1.5">
                    <span>DEEP NAVY // CYAN</span>
                    <span className="text-[8px] px-1.5 py-0.2 rounded bg-cyan-electric/15 text-cyan-highlight border border-cyan-electric/30">
                      PALETTE 01
                    </span>
                  </div>
                  <span className="text-stone-500 text-[9px]">HEX #1C1C28 • #1EC1CB</span>
                </div>
              </div>
              <div className="text-right font-mono text-[9px]">
                <span className="text-stone-500 block">CMYK 85, 5, 0, 20</span>
                <span className="text-cyan-electric font-semibold">SOVEREIGN FLOW</span>
              </div>
            </div>
          </div>

          {/* 3D Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* 3D Canvas with Luminous Cyan Ambient Halo */}
            <div className="relative w-full">
              <div className="absolute inset-0 bg-cyan-electric/10 rounded-full blur-3xl pointer-events-none" />
              <CurrencyWatching3D />
            </div>

            {/* Editorial Caption Tag with Frosted Glass Pill */}
            <div className="mt-4 specimen-pill-inset px-3 sm:px-4 py-1.5 rounded-full font-mono text-[9px] sm:text-[10px] text-stone-400 tracking-wider flex items-center justify-center text-center gap-2 sm:gap-3 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric shadow-[0_0_6px_#1EC1CB] shrink-0" />
              <span className="truncate">3D CURRENCY OCULUS // REAL-TIME G8 EQUILIBRIUM CO-ORDINATES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
