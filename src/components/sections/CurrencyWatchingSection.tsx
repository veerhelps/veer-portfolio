import React, { useState } from 'react';
import { CurrencyWatching3D, currencyStories } from '../3d/CurrencyWatching3D';
import { Eye, ShieldCheck, ArrowRight, Globe, Landmark } from 'lucide-react';

export function CurrencyWatchingSection() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');

  const current = currencyStories.find((c) => c.code === selectedCurrency) || currencyStories[0];

  return (
    <section id="watching" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative overflow-hidden select-none">
      {/* Background Graphic Accent */}
      <div className="absolute top-12 right-12 font-mono text-[9px] text-stone-700 tracking-widest uppercase hidden lg:block select-none pointer-events-none">
        SOVEREIGN FIAT OBSERVER // LATENCY: 8MS // REGIME: ACTIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Headline Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-crimson mb-2">
              <Eye size={14} className="animate-pulse text-crimson" />
              <span className="tracking-widest uppercase font-bold">SECTION 02 — THE CURRENCY ARTIFACT</span>
            </div>

            {/* Required Headline: EVERY CURRENCY HAS A STORY */}
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-cream tracking-tight leading-none break-words">
              EVERY CURRENCY<br />
              <span className="text-gold-gradient">HAS A STORY.</span>
            </h2>

            <div className="w-16 h-[2px] bg-gold/40 my-4" />

            <p className="text-stone-300 font-sans text-base sm:text-lg font-light leading-relaxed max-w-lg">
              Fiat currency is not abstract numbers on a screen. It is the living ledger of sovereign credit, central bank interest rate decisions, and geopolitical liquidity imbalances.
            </p>

            {/* Interactive Currency Selector Tabs (USD, EUR, GBP, JPY, CHF) */}
            <div>
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-widest block mb-2.5">
                SELECT CURRENCY TO FOCUS OCULUS:
              </span>
              <div className="flex flex-wrap gap-2">
                {currencyStories.map((c) => {
                  const isSelected = c.code === selectedCurrency;
                  return (
                    <button
                      key={c.code}
                      onClick={() => setSelectedCurrency(c.code)}
                      className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-gold text-obsidian-950 shadow-[0_0_15px_rgba(214,180,90,0.4)] scale-105'
                          : 'bg-obsidian-900 border border-obsidian-750 text-stone-300 hover:border-gold/40'
                      }`}
                      data-cursor="OPEN"
                    >
                      <span>{c.code}</span>
                      <span className={`text-[9px] ${isSelected ? 'text-obsidian-950/80' : 'text-stone-500'}`}>
                        {c.bias}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Currency Detail Card */}
            <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-gold/30 shadow-2xl backdrop-blur-xl animate-fadeIn font-mono text-xs space-y-3">
              <div className="flex items-center justify-between border-b border-obsidian-800 pb-2">
                <div className="flex items-center gap-2">
                  <Landmark size={15} className="text-gold" />
                  <span className="font-bold text-cream text-sm">{current.name}</span>
                  <span className="text-stone-500">({current.code})</span>
                </div>
                <span className="text-gold font-bold">{current.label}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <span className="text-stone-500 block text-[9px] uppercase">SOVEREIGN ROLE:</span>
                  <span className="text-stone-300 font-semibold">{current.role}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[9px] uppercase">CENTRAL BANK:</span>
                  <span className="text-stone-300 font-semibold">{current.centralBank}</span>
                </div>
              </div>

              <p className="text-stone-400 font-sans text-xs font-light leading-relaxed pt-1">
                {current.story}
              </p>
            </div>

            {/* Micro Editorial Callout Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5">
                <span className="text-stone-500 block text-[9px] uppercase">G8 TURNOVER</span>
                <span className="text-cream font-bold text-sm">$7.5 TRILLION</span>
                <span className="text-[8px] text-stone-500 block mt-0.5">DAILY VOLUME</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5">
                <span className="text-stone-500 block text-[9px] uppercase">EXECUTION EDGE</span>
                <span className="text-gold font-bold text-sm">REALITY DRIVEN</span>
                <span className="text-[8px] text-stone-500 block mt-0.5">ZERO ILLUSION</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-obsidian-900/60 border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-stone-500 block text-[9px] uppercase">RISK PER TRADE</span>
                <span className="text-crimson font-bold text-sm">1.0% STRICT</span>
                <span className="text-[8px] text-stone-500 block mt-0.5">CAPITAL DEFENSE</span>
              </div>
            </div>
          </div>

          {/* 3D Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Luminous Ambient Halo */}
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
              <CurrencyWatching3D
                selectedCurrency={selectedCurrency}
                onSelectCurrency={setSelectedCurrency}
              />
            </div>

            {/* Editorial Caption Tag */}
            <div className="mt-4 specimen-pill-inset px-4 py-1.5 rounded-full font-mono text-[9px] sm:text-[10px] text-stone-400 tracking-wider flex items-center justify-center text-center gap-2 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#D6B45A] shrink-0" />
              <span className="truncate">INTERACTIVE SOVEREIGN CORE // CLICK CURRENCY NODE TO ROTATE FOCUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
