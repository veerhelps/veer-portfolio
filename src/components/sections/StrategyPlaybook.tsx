import React, { useState } from 'react';
import { strategyPlaybook } from '../../data/strategyData';
import { ChevronDown, ChevronUp, Layers, ShieldCheck, Activity, RefreshCw } from 'lucide-react';

export function StrategyPlaybook() {
  const [expandedId, setExpandedId] = useState<string>(strategyPlaybook[0].id);

  return (
    <section id="strategy" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 08 — EXECUTION PROTOCOLS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          THE STRATEGY <span className="text-gold-gradient">PLAYBOOK</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-12">
          Systematic rulebooks governing entry triggers, risk limits, structure alignment, and position management.
        </p>

        {/* Playbook Accordion List */}
        <div className="space-y-4">
          {strategyPlaybook.map((cat) => {
            const isExpanded = expandedId === cat.id;
            return (
              <div
                key={cat.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-obsidian-900 border-gold/40 shadow-xl gold-glow-sm'
                    : 'bg-obsidian-900/50 border-obsidian-800 hover:border-obsidian-700'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : cat.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-gold/30 flex items-center justify-center text-gold">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-stone-100">{cat.title}</h3>
                      <p className="text-xs text-stone-400 font-mono mt-0.5">{cat.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-stone-400 hover:text-gold transition">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-obsidian-850 font-mono text-xs text-stone-300 space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800">
                        <span className="text-gold font-bold block mb-1">01. CONTEXT</span>
                        <p className="text-stone-400 leading-relaxed text-xs">{cat.context}</p>
                      </div>

                      <div className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800">
                        <span className="text-emerald-market font-bold block mb-1">02. CONFIRMATION</span>
                        <p className="text-stone-400 leading-relaxed text-xs">{cat.confirmation}</p>
                      </div>

                      <div className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800">
                        <span className="text-gold font-bold block mb-1">03. TRIGGER</span>
                        <p className="text-stone-400 leading-relaxed text-xs">{cat.trigger}</p>
                      </div>

                      <div className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800">
                        <span className="text-coral-market font-bold block mb-1">04. RISK RULES</span>
                        <p className="text-stone-400 leading-relaxed text-xs">{cat.riskRules}</p>
                      </div>
                    </div>

                    {/* Step-by-Step Execution Sequence */}
                    <div className="bg-obsidian-950 p-5 rounded-xl border border-obsidian-800">
                      <span className="text-stone-200 font-bold tracking-wider block mb-3">EXECUTION SEQUENCE</span>
                      <ol className="space-y-2 text-stone-400 list-decimal list-inside text-xs">
                        {cat.executionSteps.map((step, idx) => (
                          <li key={idx} className="leading-relaxed">
                            <span className="text-stone-200">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
