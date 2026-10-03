import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';
import { FinancialArtifact3D } from '../3d/FinancialArtifact3D';

export function FinalCTASection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-32 sm:py-44 bg-transparent border-t border-white/[0.08] text-center relative overflow-hidden select-none">
      {/* 3D Financial Artifact Slowly Returning in the Center */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none scale-90 sm:scale-100 flex items-center justify-center">
        <FinancialArtifact3D scrollProgress={0.5} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="font-mono text-xs text-gold tracking-widest uppercase mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span>VEER OBSERVATORY // SYSTEM LOG-OFF</span>
        </div>

        {/* Large Typography: READ THE MARKET. BUILD THE PROCESS. */}
        <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-display text-cream tracking-tight leading-[0.92] mb-8 break-words">
          READ THE MARKET.<br />
          <span className="text-gold-gradient">BUILD THE PROCESS.</span>
        </h2>

        {/* Subtitle Identity */}
        <div className="space-y-1 mb-10 font-mono">
          <div className="text-sm sm:text-base font-bold text-cream tracking-widest uppercase">
            VEER FOREX OBSERVATORY
          </div>
          <div className="text-xs sm:text-sm text-gold font-semibold tracking-widest uppercase">
            DHARAM VEER SINGH KIRAR
          </div>
        </div>

        {/* Re-enter Button */}
        <button
          onClick={scrollToTop}
          className="px-8 py-4 rounded-xl bg-cream text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-200 shadow-2xl gold-glow-md flex items-center gap-3 mb-20 group"
        >
          <span>RE-ENTER OBSERVATORY</span>
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Small Forex Disclaimer as instructed */}
        <div className="w-full max-w-3xl bg-obsidian-900/60 border border-obsidian-800/80 p-4 sm:p-6 rounded-2xl text-left font-mono text-[11px] text-stone-500 leading-relaxed">
          <div className="flex items-center gap-2 text-stone-400 font-bold mb-2">
            <ShieldAlert size={15} className="text-gold shrink-0" />
            <span>EDUCATIONAL & FOREX RISK DISCLOSURE</span>
          </div>
          Educational and research documentation only. Nothing on this platform constitutes investment, trading or financial advice. Spot Foreign Exchange (Forex) and contract-for-difference (CFD) trading involves substantial risk of loss and is not suitable for all investors. Leverage can magnify losses as well as gains. Past performance does not guarantee future results.
        </div>
      </div>
    </section>
  );
}
