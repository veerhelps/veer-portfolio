import React, { useState, useRef } from 'react';
import { veerCurriculumModules } from '../../data/forexStrategy';
import { ChevronDown, ChevronUp, Check, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function PlaybookCurriculumSection() {
  const [activeModuleId, setActiveModuleId] = useState<string>(veerCurriculumModules[0].id);
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const activeModule = veerCurriculumModules.find((m) => m.id === activeModuleId) || veerCurriculumModules[0];

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Scroll-driven module activation
      const moduleEls = document.querySelectorAll('.curriculum-scroll-node');
      moduleEls.forEach((node, idx) => {
        ScrollTrigger.create({
          trigger: node,
          start: 'top 65%',
          end: 'bottom 65%',
          onEnter: () => setActiveModuleId(veerCurriculumModules[idx].id),
          onEnterBack: () => setActiveModuleId(veerCurriculumModules[idx].id),
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="curriculum"
      className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* DESKTOP/TABLET: Two-column chapter path + dynamic active preview */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Chapter Timeline (5 cols) */}
          <div className="col-span-5 space-y-3 relative">
            {/* Visual Chapter Rail */}
            <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-obsidian-800 -z-10" />

            {veerCurriculumModules.map((mod) => {
              const isActive = mod.id === activeModuleId;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`curriculum-scroll-node p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 ${
                    isActive
                      ? 'bg-obsidian-900 border-gold shadow-lg pl-5'
                      : 'bg-obsidian-950/60 border-obsidian-850 hover:border-obsidian-750'
                  }`}
                  data-cursor="OPEN"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-sm font-bold shrink-0 transition-colors ${
                      isActive
                        ? 'bg-gold text-obsidian-950 shadow-[0_0_12px_#D6B45A]'
                        : 'bg-obsidian-900 border border-obsidian-800 text-stone-500'
                    }`}
                  >
                    {mod.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className={`font-display font-bold text-sm sm:text-base truncate ${
                      isActive ? 'text-cream' : 'text-stone-400'
                    }`}>
                      {mod.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 truncate font-sans">
                      {mod.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Active Chapter Display (7 cols) */}
          <div className="col-span-7 sticky top-28 p-8 rounded-3xl bg-obsidian-900/90 border border-gold/40 shadow-2xl gold-glow-md backdrop-blur-2xl animate-fadeIn space-y-6">
            <div className="flex items-center justify-between border-b border-obsidian-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-gold/15 border border-gold/30 font-mono text-xs text-gold font-bold">
                  CHAPTER {activeModule.number}
                </span>
                <span className="font-mono text-xs text-stone-400">VEER OPERATOR CURRICULUM</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>

            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-cream mb-2">
                {activeModule.title}
              </h3>
              <p className="text-stone-300 font-sans text-sm font-light leading-relaxed">
                {activeModule.subtitle}
              </p>
            </div>

            {/* Topics Checklist */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] text-gold uppercase tracking-widest block font-bold">
                OPERATIONAL SPECIFICATIONS COVERED:
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {activeModule.topics.map((topic, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-obsidian-950 border border-white/5 flex items-start gap-3"
                  >
                    <Check size={16} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-stone-200 text-xs sm:text-sm font-sans">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-obsidian-850 flex items-center justify-between font-mono text-xs text-stone-500">
              <span>CONTINUOUS EVALUATION MODEL</span>
              <a
                href="#contact"
                className="text-gold hover:text-cream flex items-center gap-1.5 font-bold transition"
              >
                <span>ENROLL IN MODULE</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* MOBILE FALLBACK: Stacked Accordion */}
        <div className="lg:hidden space-y-3">
          {veerCurriculumModules.map((mod) => {
            const isExpanded = activeModuleId === mod.id;
            return (
              <div
                key={mod.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-obsidian-900 border-gold/40 shadow-xl'
                    : 'bg-obsidian-900/40 border-obsidian-850'
                }`}
              >
                <button
                  onClick={() => setActiveModuleId(isExpanded ? '' : mod.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg font-black text-gold/60 shrink-0">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold font-display text-cream">{mod.title}</h3>
                      <p className="text-xs text-stone-400 font-sans mt-0.5 truncate">{mod.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-stone-400 p-1 shrink-0">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 border-t border-obsidian-850 font-mono text-xs text-stone-300 space-y-3 animate-fadeIn">
                    <span className="text-gold font-bold tracking-wider block text-[10px]">
                      SPECIFICATIONS:
                    </span>
                    <div className="space-y-2 font-sans">
                      {mod.topics.map((t, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-stone-300 text-xs">
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
