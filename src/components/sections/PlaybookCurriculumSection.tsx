import React, { useState } from 'react';
import { veerCurriculumModules } from '../../data/forexStrategy';
import { ChevronDown, ChevronUp, BookOpen, Check } from 'lucide-react';

export function PlaybookCurriculumSection() {
  const [expandedId, setExpandedId] = useState<string>(veerCurriculumModules[0].id);

  return (
    <section id="curriculum" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 12 — CURRICULUM ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4 break-words">
          MASTER THE REALITY <span className="text-gold-gradient">OF TRADING</span>
        </h2>

        <p className="max-w-2xl text-stone-300 text-sm sm:text-base font-light mb-12 border-l-2 border-gold pl-4 font-sans leading-relaxed">
          "The curriculum is designed to strip away the noise. Learn institutional Forex market structure, liquidity architecture, and repeatable risk frameworks without retail illusions."
        </p>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {veerCurriculumModules.map((mod) => {
            const isExpanded = expandedId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-obsidian-900/90 border-gold/40 shadow-xl gold-glow-sm'
                    : 'bg-obsidian-900/40 border-obsidian-850 hover:border-obsidian-750'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : mod.id)}
                  className="w-full p-4 sm:p-6 md:p-8 text-left flex items-center justify-between gap-3 sm:gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
                    <div className="font-mono text-xl sm:text-2xl md:text-3xl font-black text-gold/50 shrink-0">
                      {mod.number}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold font-display text-cream">{mod.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-400 font-sans mt-1">{mod.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-stone-400 hover:text-gold transition shrink-0 p-1 sm:p-2">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-2 border-t border-obsidian-850 font-mono text-xs text-stone-300 space-y-4 animate-fadeIn">
                    <span className="text-gold font-bold tracking-wider block">CURRICULUM SPECIFICATIONS COVERED:</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                      {mod.topics.map((t, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-stone-300 text-xs sm:text-sm">
                          <Check size={14} className="text-gold shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </div>
                      ))}
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
