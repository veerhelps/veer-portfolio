import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export function FinalCTASection() {
  const scrollToHero = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-obsidian-900 border-t border-obsidian-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="font-mono text-xs text-gold tracking-widest uppercase mb-4">
          VAXSA • FOREX OBSERVATORY
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold font-display text-stone-100 mb-4 tracking-tight leading-tight">
          WHILE OTHERS SELL ILLUSIONS,<br />
          <span className="text-gold-gradient">MASTER THE REALITY OF TRADING.</span>
        </h2>

        <div className="font-mono text-sm text-gold font-bold mb-8">
          DHARAM VEER SINGH KIRAR
        </div>

        <button
          onClick={scrollToHero}
          className="px-8 py-4 rounded-xl bg-gold-gradient text-obsidian-950 font-mono font-bold text-sm tracking-wider hover:brightness-110 transition shadow-2xl gold-glow-md flex items-center gap-3 mb-16"
        >
          <span>RE-ENTER FOREX OBSERVATORY</span>
          <ArrowUp size={16} />
        </button>

        {/* Forex Financial Risk Disclaimer */}
        <div className="w-full bg-obsidian-950/80 border border-obsidian-800 p-6 rounded-2xl text-left font-mono text-[11px] text-stone-500 leading-relaxed">
          <div className="flex items-center gap-2 text-stone-400 font-bold mb-2">
            <ShieldAlert size={16} className="text-gold" />
            <span>EDUCATIONAL & FOREX RISK DISCLOSURE</span>
          </div>
          Educational and informational purposes only. Nothing on this website constitutes investment, trading or financial advice. Forex trading involves substantial risk and may not be suitable for every investor. Past performance does not guarantee future results. Conduct your own research and consider consulting a qualified financial professional.
        </div>
      </div>
    </section>
  );
}
