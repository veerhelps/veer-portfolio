import React from 'react';
import { ArrowUp, ShieldAlert, ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="conclusion" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] text-center relative overflow-hidden select-none">
      {/* Subtle Atmospheric Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(214, 180, 90, 0.08) 0%, rgba(26, 10, 15, 0.12) 55%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center">
        {/* Large Typography: READ THE MARKET. BUILD THE PROCESS. */}
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-display text-cream tracking-tight leading-[0.92] mb-8 break-words">
          READ THE MARKET.<br />
          <span className="text-gold-gradient">BUILD THE PROCESS.</span>
        </h2>

        {/* Subtitle Identity */}
        <div className="mb-10 font-mono">
          <div className="text-xs sm:text-sm text-gold font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>DHARAM VEER SINGH KIRAR</span>
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={scrollToTop}
          className="px-8 py-4 rounded-full bg-cream text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-200 shadow-2xl flex items-center gap-3 mb-16 sm:mb-20 group cursor-pointer"
          data-cursor="OPEN"
        >
          <span>EXPLORE THE OBSERVATORY</span>
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Forex Risk Disclosure */}
        <div className="w-full max-w-3xl bg-obsidian-900/60 border border-white/[0.08] p-5 sm:p-7 rounded-2xl text-left font-mono text-[11px] text-stone-400 leading-relaxed shadow-xl">
          <div className="flex items-center gap-2 text-stone-300 font-bold mb-2">
            <ShieldAlert size={15} className="text-gold shrink-0" />
            <span>EDUCATIONAL & FOREX RISK DISCLOSURE</span>
          </div>
          Educational and research documentation only. Nothing on this platform constitutes investment, trading or financial advice. Spot Foreign Exchange (Forex) and contract-for-difference (CFD) trading involves substantial risk of loss and is not suitable for all investors. Leverage can magnify losses as well as gains. Past performance does not guarantee future results.
        </div>
      </div>
    </section>
  );
}
