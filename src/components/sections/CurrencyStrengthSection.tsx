import React from 'react';
import { CurrencyStrength3D } from '../3d/CurrencyStrength3D';
import { currencyStrengthMatrix } from '../../data/currencyStrength';
import { Activity, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function CurrencyStrengthSection() {
  return (
    <section id="strength" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 04 — RELATIVE MOMENTUM</span>
        </div>

        {/* Visual Statement */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight max-w-4xl">
          ONE CURRENCY RISES.<br />
          <span className="text-gold-gradient">ANOTHER PAYS THE PRICE.</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mt-3 mb-10 leading-relaxed font-sans">
          Currencies never trade in isolation. Institutional order flow rotates capital from weak macro sovereign balance sheets into resilient yield-bearing assets.
        </p>

        {/* 3D Pillars Visualization */}
        <CurrencyStrength3D />

        {/* Heatmap Grid Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 font-mono text-xs">
          {currencyStrengthMatrix.map((item) => {
            const isLong = item.bias === 'LONG';
            const isShort = item.bias === 'SHORT';
            return (
              <div key={item.code} className="p-3 sm:p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span className="font-bold text-cream text-xs sm:text-sm">{item.code}</span>
                  <span className={`font-bold text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded ${
                    isLong ? 'bg-emerald-market/15 text-emerald-market' : isShort ? 'bg-coral-market/15 text-coral-market' : 'bg-gold/15 text-gold'
                  }`}>
                    {item.bias}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-cream my-1">{item.strengthScore}%</div>
                <div className="text-[9px] sm:text-[10px] text-stone-400 mt-1 flex justify-between">
                  <span className="truncate pr-1">{item.name}</span>
                  <span className="text-stone-500 shrink-0">{item.trend}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
