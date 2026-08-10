import React from 'react';
import { ArrowUp } from 'lucide-react';

export function FinalCTA() {
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
          SYSTEM CLOSING CYCLE
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold font-display text-stone-100 mb-4 tracking-tight leading-tight">
          THE MARKET DOESN'T OWE YOU A TRADE.<br />
          <span className="text-gold-gradient">BUILD THE PROCESS.</span>
        </h2>

        <p className="max-w-xl text-stone-400 text-sm font-sans font-light mb-10">
          Discipline is non-negotiable. Re-enter the observatory and review your execution parameters.
        </p>

        <button
          onClick={scrollToHero}
          className="px-8 py-4 rounded-xl bg-gold-gradient text-obsidian-950 font-mono font-bold text-sm tracking-wider hover:brightness-110 transition shadow-2xl gold-glow-md flex items-center gap-3"
        >
          <span>ENTER THE OBSERVATORY</span>
          <ArrowUp size={16} />
        </button>
      </div>
    </section>
  );
}
