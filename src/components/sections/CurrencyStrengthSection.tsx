import React from 'react';
import { CurrencyStrength3D } from '../3d/CurrencyStrength3D';
import { currencyStrengthMatrix } from '../../data/currencyStrength';
import { Activity, ShieldCheck } from 'lucide-react';

export function CurrencyStrengthSection() {
  return (
    <section id="strength" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 03 — RELATIVE MOMENTUM</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          CURRENCY STRENGTH <span className="text-gold-gradient">MATRIX</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-10">
          Real-time relative strength index measuring institutional momentum differentials across G8 fiat currencies.
        </p>

        {/* 3D Pillars Visualization */}
        <CurrencyStrength3D />

        {/* Heatmap Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 font-mono text-xs">
          {currencyStrengthMatrix.map((item) => {
            const isLong = item.bias === 'LONG';
            const isShort = item.bias === 'SHORT';
            return (
              <div key={item.code} className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
                <div className="flex items-center justify-between text-stone-500 mb-1">
                  <span>{item.code} ({item.name})</span>
                  <span className={`font-bold ${isLong ? 'text-emerald-market' : isShort ? 'text-coral-market' : 'text-gold'}`}>
                    {item.bias}
                  </span>
                </div>
                <div className="text-2xl font-black text-stone-100">{item.strengthScore}%</div>
                <div className="text-[10px] text-stone-400 mt-1">TREND: {item.trend}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
