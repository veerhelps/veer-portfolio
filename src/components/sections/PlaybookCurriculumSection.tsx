import React, { useState } from 'react';
import { vaxsaCurriculumModules } from '../../data/forexStrategy';
import { Layers, ShieldCheck, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

export function PlaybookCurriculumSection() {
  const [expandedId, setExpandedId] = useState<string>(vaxsaCurriculumModules[0].id);

  return (
    <section id="curriculum" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 10 — VAXSA CURRICULUM</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-2 tracking-tight">
          MASTER THE REALITY <span className="text-gold-gradient">OF TRADING</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-12 border-l-2 border-gold pl-4">
          "The curriculum is designed to strip away the noise. Learn institutional Forex market structure, liquidity architecture, and repeatable risk frameworks."
        </p>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {vaxsaCurriculumModules.map((mod) => {
            const isExpanded = expandedId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-obsidian-900 border-gold/40 shadow-xl gold-glow-sm'
                    : 'bg-obsidian-900/40 border-obsidian-800 hover:border-obsidian-700'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : mod.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sans"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-mono text-2xl font-black text-gold/40">
                      {mod.number}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-stone-100">{mod.title}</h3>
                      <p className="text-xs text-stone-400 font-mono mt-0.5">{mod.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-stone-400 hover:text-gold transition">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-obsidian-850 font-mono text-xs text-stone-300 space-y-3 animate-fadeIn">
                    <span className="text-gold font-bold block mb-2">CURRICULUM TOPICS COVERED:</span>
                    <ul className="space-y-2 list-disc list-inside text-stone-400">
                      {mod.topics.map((t, idx) => (
                        <li key={idx} className="leading-relaxed">
                          <span className="text-stone-200">{t}</span>
                        </li>
                      ))}
                    </ul>
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
