import React, { useState, useEffect } from 'react';

interface SectionMarker {
  id: string;
  num: string;
  label: string;
}

const sections: SectionMarker[] = [
  { id: 'hero', num: '01', label: 'THE CORE' },
  { id: 'about', num: '02', label: 'IDENTITY' },
  { id: 'watching', num: '03', label: 'CURRENCY' },
  { id: 'universe', num: '04', label: 'UNIVERSE' },
  { id: 'strength', num: '05', label: 'STRENGTH' },
  { id: 'sessions', num: '06', label: 'SESSIONS' },
  { id: 'liquidity', num: '07', label: 'LIQUIDITY' },
  { id: 'portfolio', num: '08', label: 'PORTFOLIO' },
  { id: 'performance', num: '09', label: 'EQUITY CURVE' },
  { id: 'journal', num: '10', label: 'JOURNAL' },
  { id: 'macro', num: '11', label: 'MACRO' },
  { id: 'curriculum', num: '12', label: 'CURRICULUM' },
];

export function ScrollProgressRail() {
  const [activeSection, setActiveSection] = useState<SectionMarker>(sections[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
        setScrollProgress(progress);
      }

      // Detect active section based on midpoint of screen
      const midPoint = window.innerHeight * 0.45;
      let current = sections[0];

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midPoint && rect.bottom >= midPoint) {
            current = s;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Observatory Scroll Rail"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[800] hidden xl:flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Mode Badge: OBSERVATORY / 0X */}
      <div className="absolute -top-14 right-0 px-2.5 py-1 rounded-md bg-obsidian-950/90 border border-gold/30 text-[9px] font-mono whitespace-nowrap shadow-xl backdrop-blur-md flex items-center gap-1.5 transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
        <span className="text-stone-400 font-medium">OBSERVATORY</span>
        <span className="text-stone-600">/</span>
        <span className="text-gold font-bold">{activeSection.num}</span>
      </div>

      {/* Rail Container */}
      <div className="relative py-2 flex flex-col items-center gap-3">
        {/* Background Rail Line */}
        <div className="absolute top-0 bottom-0 w-[1px] bg-obsidian-800/80 -z-10" />

        {/* Dynamic Filled Rail Line */}
        <div
          className="absolute top-0 w-[1.5px] bg-gradient-to-b from-gold via-cream to-crimson transition-all duration-150 -z-10 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Markers */}
        {sections.map((s) => {
          const isActive = s.id === activeSection.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Jump to Section ${s.num}: ${s.label}`}
            >
              {/* Marker Pip */}
              <div
                className={`transition-all duration-200 rounded-full ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-gold border border-obsidian-950 shadow-[0_0_10px_#D6B45A] scale-125'
                    : 'w-1.5 h-1.5 bg-stone-600 hover:bg-stone-300 group-hover:scale-125'
                }`}
              />

              {/* Hover Flyout Label */}
              <div
                className={`absolute right-6 px-2.5 py-1 rounded bg-obsidian-950/95 border border-obsidian-800 text-[10px] font-mono whitespace-nowrap pointer-events-none transition-all duration-200 shadow-2xl ${
                  isActive || isHovered
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2'
                }`}
              >
                <span className="text-gold font-bold mr-1.5">{s.num}</span>
                <span className={isActive ? 'text-cream font-semibold' : 'text-stone-400'}>
                  {s.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
