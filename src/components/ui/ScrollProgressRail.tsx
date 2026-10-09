import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface SectionMarker {
  id: string;
  num: string;
  label: string;
}

const sections: SectionMarker[] = [
  { id: 'hero', num: '01', label: 'THE CORE' },
  { id: 'about', num: '02', label: 'IDENTITY' },
  { id: 'market', num: '03', label: 'THE ARTIFACT' },
  { id: 'universe', num: '04', label: 'UNIVERSE' },
  { id: 'structure', num: '05', label: 'STRUCTURE' },
  { id: 'liquidity', num: '06', label: 'LIQUIDITY' },
  { id: 'sessions', num: '07', label: 'SESSIONS' },
  { id: 'fundamentals', num: '08', label: 'FUNDAMENTALS' },
  { id: 'guide', num: '09', label: 'BEGINNER GUIDE' },
  { id: 'community', num: '10', label: 'COMMUNITY' },
  { id: 'contact', num: '11', label: 'CONTACT' },
  { id: 'conclusion', num: '12', label: 'CONCLUSION' },
];

export function ScrollProgressRail() {
  const [activeSection, setActiveSection] = useState<SectionMarker>(sections[0]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Reveal rail once user begins scrolling out of the initial hero view
      setIsVisible(scrollY > 180);

      // Section top position helper
      const getTop = (id: string): number => {
        const el = document.getElementById(id);
        if (!el) return Infinity;
        return el.getBoundingClientRect().top + scrollY;
      };

      // 1. Identify active section based on scroll offset with navbar clearance
      const navClearance = 140;
      let currentIdx = 0;

      for (let i = 0; i < sections.length; i++) {
        const top = getTop(sections[i].id);
        if (scrollY >= top - navClearance) {
          currentIdx = i;
        }
      }

      // Bottom-of-page safeguard to activate final curriculum section
      if (totalScroll > 0 && scrollY >= totalScroll - 70) {
        currentIdx = sections.length - 1;
      }

      setActiveIdx(currentIdx);
      setActiveSection(sections[currentIdx]);

      // 2. Mathematically precise track progress:
      // Connects from center of dot 01 to center of dot 12.
      // Starts at exactly 0% at the top of hero, smoothly tracks through sections,
      // and terminates at exactly 100% at the final section.
      if (currentIdx === 0 && scrollY === 0) {
        setTrackProgress(0);
        return;
      }

      const topCurrent = getTop(sections[currentIdx].id);
      const nextSection = sections[currentIdx + 1];
      const topNext = nextSection ? getTop(nextSection.id) : document.documentElement.scrollHeight - window.innerHeight;

      const span = topNext - topCurrent;
      const traversed = scrollY - (topCurrent - navClearance);
      const inter = span > 0 ? Math.min(1, Math.max(0, traversed / span)) : 0;

      const continuousIndex = currentIdx + inter;
      const normalizedRatio = continuousIndex / (sections.length - 1);

      setTrackProgress(Math.min(1, Math.max(0, normalizedRatio)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const lenis = (window as any).__lenis;
    const target = document.getElementById(id);
    if (!target) return;

    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, { offset: -70, duration: 1.1 });
    } else {
      const y = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Observatory Scroll Rail"
      className={`fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[800] hidden xl:flex flex-col items-center select-none transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-5 pointer-events-none'
      }`}
    >
      {/* Micro-Telemetry Header Indicator */}
      <div className="font-mono text-[9px] text-stone-500 tracking-widest uppercase mb-2 flex items-center gap-1 opacity-80">
        <span className="text-gold font-bold">OBS</span>
        <span className="text-stone-700">//</span>
        <span className="text-cream font-semibold">{activeSection.num}</span>
      </div>

      {/* Rail Container: Strictly bounded coordinate space */}
      <div
        className="relative flex flex-col items-center gap-2 py-0"
        onMouseLeave={() => setHoveredId(null)}
      >
        {/*
          Architectural Guide Track & Progress Fill:
          Each button is w-7 h-7 (28px). The pip center is exactly at 14px.
          By anchoring top-[14px] and bottom-[14px], the line runs strictly
          from the center of Pip #01 to Pip #12. No stray lines ever protrude
          above or below the boundary nodes.
        */}
        <div className="absolute top-[14px] bottom-[14px] w-[1px] pointer-events-none -z-10">
          {/* Subtle architectural track guide */}
          <div className="absolute inset-0 w-[1px] bg-white/[0.08]" />
          <div className="absolute inset-0 w-[1px] bg-gradient-to-b from-gold/30 via-white/[0.12] to-gold/30" />

          {/* Dynamic filled gold progress bar */}
          <div
            className="absolute top-0 w-[2px] -left-[0.5px] bg-gradient-to-b from-gold via-cream to-gold rounded-full shadow-[0_0_10px_rgba(214,180,90,0.6)] transition-all duration-150 ease-out"
            style={{ height: `${trackProgress * 100}%` }}
          />
        </div>

        {/* 12 Observatory Nodes */}
        {sections.map((s, index) => {
          const isActive = s.id === activeSection.id;
          const isHoveredThis = hoveredId === s.id;
          const isPassed = index < activeIdx;

          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setHoveredId(s.id)}
              className="group relative flex items-center justify-center w-7 h-7 focus:outline-none cursor-pointer"
              aria-label={`Jump to Section ${s.num}: ${s.label}`}
              data-cursor="JUMP"
            >
              {/* Precision Pip Graphics */}
              {isActive ? (
                <div className="relative flex items-center justify-center">
                  {/* Outer Pulsing Ping Ring */}
                  <div className="absolute w-4 h-4 rounded-full border border-gold/40 animate-ping opacity-40 pointer-events-none" />
                  {/* Precision Reticle Ring */}
                  <div className="absolute w-3.5 h-3.5 rounded-full border border-gold/75 shadow-[0_0_8px_rgba(214,180,90,0.5)] pointer-events-none" />
                  {/* Glowing Core */}
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_#D6B45A]" />
                </div>
              ) : isPassed ? (
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold group-hover:scale-125 transition-all duration-200 shadow-[0_0_4px_rgba(214,180,90,0.25)]" />
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-stone-600/80 group-hover:bg-gold/90 group-hover:scale-125 transition-all duration-200" />
              )}

              {/* HUD Chapter Tooltip Tag */}
              <div
                className={`absolute right-8 px-2.5 py-1 rounded bg-obsidian-950/95 backdrop-blur-xl border border-gold/30 text-[10px] font-mono whitespace-nowrap pointer-events-none transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.9),0_0_12px_rgba(214,180,90,0.15)] flex items-center gap-1.5 z-20 ${
                  isHoveredThis || (!hoveredId && isActive)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2'
                }`}
              >
                <span className="text-gold font-bold">{s.num}</span>
                <span className="text-stone-600">//</span>
                <span
                  className={
                    isActive
                      ? 'text-cream font-semibold tracking-wider'
                      : 'text-stone-300 font-medium tracking-wider'
                  }
                >
                  {s.label}
                </span>

                {/* Arrow notch pointing toward pip */}
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-obsidian-950 border-r border-t border-gold/30" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Return to Core (Top) Trigger */}
      <div className="mt-2 flex flex-col items-center">
        <button
          onClick={scrollToTop}
          className="group p-1 text-stone-500 hover:text-gold transition-colors focus:outline-none flex flex-col items-center cursor-pointer"
          title="Return to Observatory Core"
          aria-label="Scroll to top of observatory"
          data-cursor="TOP"
        >
          <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          <span className="text-[8px] font-mono tracking-widest text-stone-500 group-hover:text-gold transition-colors mt-0.5">
            TOP
          </span>
        </button>
      </div>
    </aside>
  );
}
