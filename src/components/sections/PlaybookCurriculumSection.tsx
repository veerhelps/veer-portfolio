import React, { useState } from 'react';
import { beginnerGuideModules, BeginnerGuideModule } from '../../data/forexStrategy';
import { BookOpen, CheckCircle2, ChevronRight, Compass, Shield } from 'lucide-react';

export function PlaybookCurriculumSection() {
  const [activeModuleId, setActiveModuleId] = useState<string>(beginnerGuideModules[0].id);

  const activeModule =
    beginnerGuideModules.find((m) => m.id === activeModuleId) || beginnerGuideModules[0];

  return (
    <section
      id="guide"
      className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative select-none"
    >
      <span id="curriculum" className="absolute -top-24" />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">07 — BEGINNER GUIDE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4">
            BEGINNER <span className="text-gold-gradient">GUIDE.</span>
          </h2>

          <p className="max-w-2xl text-stone-300 text-xs sm:text-sm md:text-base font-light leading-relaxed font-sans">
            A beginner-friendly educational starting point. Structured around foundational market mechanics, structural order, and psychological discipline—stripping away retail illusions.
          </p>
        </div>

        {/* Desktop/Tablet: Left selector + Right expanded content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 9 Module Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5 font-mono text-xs">
            {beginnerGuideModules.map((mod) => {
              const isSelected = activeModuleId === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`p-4 sm:p-4.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-cream text-obsidian-950 border-cream shadow-xl'
                      : 'bg-obsidian-900/60 text-stone-300 border-white/[0.08] hover:border-gold/40'
                  }`}
                  data-cursor="OPEN"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[11px] font-bold shrink-0 ${
                        isSelected ? 'text-obsidian-600' : 'text-gold'
                      }`}
                    >
                      {mod.number}
                    </span>
                    <div>
                      <span className="font-bold tracking-wider block font-display text-sm">
                        {mod.title}
                      </span>
                      <span
                        className={`text-[10px] font-sans truncate block max-w-[220px] sm:max-w-xs ${
                          isSelected ? 'text-obsidian-750' : 'text-stone-400'
                        }`}
                      >
                        {mod.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isSelected
                        ? 'text-obsidian-950 translate-x-0.5'
                        : 'text-stone-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Module Educational Deep Dive */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.1] shadow-2xl relative">
              {/* Module Header Badge */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2 text-gold">
                  <BookOpen size={16} />
                  <span className="font-bold tracking-widest uppercase">
                    MODULE {activeModule.number} // CURRICULUM OVERVIEW
                  </span>
                </div>
                <span className="text-[10px] text-stone-500 tracking-widest uppercase font-semibold">
                  EDUCATIONAL
                </span>
              </div>

              {/* Module Title & Subtitle */}
              <h3 className="font-display font-black text-2xl sm:text-3xl text-cream mb-2 tracking-tight">
                {activeModule.title}
              </h3>
              <p className="font-mono text-xs text-gold/90 mb-5 uppercase tracking-wider">
                {activeModule.subtitle}
              </p>

              {/* Summary */}
              <p className="text-stone-300 font-sans text-xs sm:text-sm font-light leading-relaxed mb-8">
                {activeModule.summary}
              </p>

              {/* Core Learning Concepts List */}
              <div className="pt-6 border-t border-white/[0.08]">
                <h4 className="font-mono text-[11px] text-stone-400 uppercase tracking-widest mb-4">
                  CORE LEARNING PILLARS
                </h4>
                <div className="space-y-3 font-sans text-xs sm:text-sm">
                  {activeModule.concepts.map((concept, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/[0.06] flex items-start gap-3 text-stone-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed font-light">{concept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
