import React, { useState } from 'react';
import { macroLayerTopics, DetailedMacroTopic } from '../../data/macroData';
import { economicCalendarEvents } from '../../data/economicCalendar';
import { Radio, ChevronDown, ChevronUp, Landmark, Activity, AlertCircle, ArrowUpRight } from 'lucide-react';

export function MacroLayerSection() {
  const [expandedTopicId, setExpandedTopicId] = useState<string>(macroLayerTopics[0].id);

  const toggleTopic = (id: string) => {
    setExpandedTopicId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="macro" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none">
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
            Technical market structure locates timing; macroeconomic divergence dictates directional trend longevity. Institutional capital aligns with sovereign interest rate spreads.
          </p>
        </div>

        {/* 10 Expandable Macro Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {macroLayerTopics.map((topic) => {
            const isExpanded = expandedTopicId === topic.id;
            return (
              <div
                key={topic.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-obsidian-900/95 border-gold/50 shadow-2xl gold-glow-sm'
                    : 'bg-obsidian-900/50 border-obsidian-800 hover:border-obsidian-750'
                }`}
              >
                {/* Topic Header Toggle */}
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  aria-expanded={isExpanded}
                  data-cursor="OPEN"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-obsidian-950 border border-obsidian-800 text-gold">
                      {topic.category === 'CENTRAL_BANK' ? <Landmark size={16} /> : <Activity size={16} />}
                    </span>
                    <div>
                      <span className="font-mono text-[9px] text-stone-500 uppercase tracking-widest block">
                        {topic.tag}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-cream">
                        {topic.name}
                      </h3>
                    </div>
                  </div>

                  <div className="text-stone-400 p-1">
                    {isExpanded ? <ChevronUp size={18} className="text-gold" /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Expandable Breakdown: WHAT IT IS, WHY IT MATTERS, CURRENCIES AFFECTED */}
                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-obsidian-850 font-mono text-xs space-y-3.5 animate-fadeIn">
                    <div>
                      <span className="text-gold font-bold uppercase tracking-wider block text-[10px] mb-1">
                        WHAT IT IS:
                      </span>
                      <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
                        {topic.whatItIs}
                      </p>
                    </div>

                    <div>
                      <span className="text-emerald-market font-bold uppercase tracking-wider block text-[10px] mb-1">
                        WHY IT MATTERS:
                      </span>
                      <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed">
                        {topic.whyItMatters}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-obsidian-850">
                      <span className="text-stone-500 uppercase tracking-wider block text-[9px] mb-0.5">
                        CURRENCIES AFFECTED:
                      </span>
                      <span className="text-cream font-bold text-xs">
                        {topic.currenciesAffected}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
              STATUS: <span className="text-emerald-market font-bold">ACTIVE REGIME</span> • <span className="text-gold">SIMULATED DATA</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-obsidian-800 bg-obsidian-900/60 backdrop-blur-md shadow-2xl font-mono text-xs">
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
