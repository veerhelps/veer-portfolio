import React from 'react';
import { macroLayerItems } from '../../data/macroData';
import { economicCalendarEvents } from '../../data/economicCalendar';
import { Radio, ArrowUpRight, AlertTriangle } from 'lucide-react';

export function MacroLayerSection() {
  return (
    <section id="macro" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Macro Layer Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">SECTION 10 — MACRO FUNDAMENTALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight break-words">
            THE MACRO <span className="text-gold-gradient">LAYER</span>
          </h2>

          <p className="text-stone-400 font-sans text-sm sm:text-base font-light mt-3 leading-relaxed">
            Technical analysis locates timing; macroeconomic divergence dictates directional trend longevity. Institutional capital aligns with central bank sovereign interest rate differentials.
          </p>
        </div>

        {/* 8 Macro Topics Editorial Cards (Headline, One-Sentence, Currency Impact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {macroLayerItems.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-obsidian-900/60 border border-obsidian-800/80 hover:border-gold/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] text-gold tracking-widest uppercase block mb-2">
                  {item.tag}
                </span>

                <h3 className="font-display font-bold text-xl text-cream mb-2 leading-snug">
                  {item.headline}
                </h3>

                <p className="text-xs text-stone-300 font-sans font-light leading-relaxed mb-4">
                  {item.oneSentence}
                </p>
              </div>

              <div className="pt-3 border-t border-obsidian-850">
                <span className="text-[9px] font-mono text-stone-500 uppercase block mb-1">CURRENCY IMPACT:</span>
                <p className="text-[11px] font-sans text-stone-400 leading-normal">
                  {item.currencyImpact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Economic Calendar: EVENT RADAR */}
        <div className="border-t border-obsidian-850 pt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-market mb-2">
                <Radio size={14} className="animate-pulse" />
                <span className="tracking-widest uppercase font-semibold">SCHEDULED MONETARY CATALYSTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-cream tracking-tight break-words">
                EVENT <span className="text-gold-gradient">RADAR</span>
              </h3>
            </div>

            <div className="font-mono text-[10px] text-stone-500 uppercase">
              STATUS: <span className="text-emerald-market font-bold">MONITORED</span> • <span className="text-gold">DEMO DATA</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md shadow-2xl font-mono text-xs">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-950/90">
                  <th className="py-4 px-6 font-semibold">TIME (UTC)</th>
                  <th className="py-4 px-6 font-semibold">CURRENCY</th>
                  <th className="py-4 px-6 font-semibold">IMPORTANCE</th>
                  <th className="py-4 px-6 font-semibold">EVENT</th>
                  <th className="py-4 px-6 font-semibold text-right">PREV</th>
                  <th className="py-4 px-6 font-semibold text-right">FORECAST</th>
                  <th className="py-4 px-6 font-semibold text-right">ACTUAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-obsidian-850">
                {economicCalendarEvents.map((evt) => {
                  const isHigh = evt.importance === 'HIGH';
                  return (
                    <tr key={evt.id} className="hover:bg-obsidian-850/60 transition">
                      <td className="py-4 px-6 text-gold font-bold">
                        {evt.timeUtc}
                      </td>
                      <td className="py-4 px-6 font-bold text-cream">{evt.currency}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                          isHigh ? 'bg-crimson/15 text-crimson border border-crimson/30' : 'bg-gold/15 text-gold'
                        }`}>
                          {evt.importance}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-semibold text-cream">{evt.title}</td>
                      <td className="py-4 px-6 text-right text-stone-400">{evt.previous}</td>
                      <td className="py-4 px-6 text-right text-stone-400">{evt.forecast}</td>
                      <td className="py-4 px-6 text-right font-bold text-emerald-market">{evt.actual}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
