import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  marketSessions,
  sessionOverlap,
  globalDayCycle,
  getTimelineLeftPercent,
  getTimelineWidthPercent,
  derivedOverlapStart,
  derivedOverlapEnd,
} from '../../data/marketSessions';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ForexSessionsSection() {
  const [selectedSessionId, setSelectedSessionId] = useState<string>('london');
  const [hoveredSessionId, setHoveredSessionId] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Live real-time UTC clock calculation (accurate, never fake)
  const [utcTime, setUtcTime] = useState<{
    hours: number;
    minutes: number;
    formatted: string;
    percentage: number;
  }>(() => {
    const now = new Date();
    const h = now.getUTCHours();
    const m = now.getUTCMinutes();
    const pct = ((h + m / 60) / 24) * 100;
    return {
      hours: h,
      minutes: m,
      formatted: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} UTC`,
      percentage: pct,
    };
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getUTCHours();
      const m = now.getUTCMinutes();
      const pct = ((h + m / 60) / 24) * 100;
      setUtcTime({
        hours: h,
        minutes: m,
        formatted: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')} UTC`,
        percentage: pct,
      });
    };

    const timer = setInterval(updateTime, 30000); // 30s interval: zero layout thrashing
    return () => clearInterval(timer);
  }, []);

  // GSAP ScrollTrigger entrance animation (no pinning, no artificial spacer)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.from('.session-header', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        })
          .from(
            '.clock-card',
            {
              opacity: 0,
              y: 25,
              duration: 0.7,
              ease: 'power3.out',
            },
            '-=0.3'
          )
          .from(
            '.session-band-item',
            {
              scaleX: 0,
              transformOrigin: 'left center',
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out',
            },
            '-=0.4'
          )
          .from(
            '.session-module',
            {
              opacity: 0,
              y: 15,
              duration: 0.5,
              stagger: 0.08,
              ease: 'power3.out',
            },
            '-=0.2'
          )
          .from(
            '.overlap-feature-card',
            {
              opacity: 0,
              y: 18,
              duration: 0.5,
              ease: 'power3.out',
            },
            '-=0.2'
          )
          .from(
            '.cycle-indicator',
            {
              opacity: 0,
              y: 10,
              duration: 0.4,
              ease: 'power3.out',
            },
            '-=0.2'
          );
      });
    },
    { scope: sectionRef }
  );

  // Active session resolution
  const activeSession =
    marketSessions.find((s) => s.id === selectedSessionId) || marketSessions[0];

  // 3-hour tick marks along 24h axis
  const hourTicks = [0, 3, 6, 9, 12, 15, 18, 21, 24];

  // Derive overlap percentage
  const overlapLeft = getTimelineLeftPercent(derivedOverlapStart);
  const overlapWidth = getTimelineWidthPercent(derivedOverlapStart, derivedOverlapEnd);

  return (
    <section
      ref={sectionRef}
      id="sessions"
      className="pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20 bg-transparent border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Subtle Background Orbital Ellipse Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <ellipse cx="600" cy="300" rx="540" ry="250" fill="none" stroke="#FAF7F2" strokeWidth="1" strokeDasharray="4 6" />
          <ellipse cx="600" cy="300" rx="360" ry="170" fill="none" stroke="#D6B45A" strokeWidth="1" />
          <ellipse cx="600" cy="300" rx="190" ry="90" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="600" y1="30" x2="600" y2="570" stroke="#FAF7F2" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="50" y1="300" x2="1150" y2="300" stroke="#FAF7F2" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ======================================================== */}
        {/* 1. HERO AREA: Compact, Deliberate, High-Impact           */}
        {/* ======================================================== */}
        <div className="session-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-3 max-w-2xl">
            {/* Small Label */}
            <div className="flex items-center gap-2 font-mono text-xs text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">
                SECTION 05 — MARKET SESSIONS
              </span>
            </div>

            {/* Monumental Headline with Accent on "A CLOCK." */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[0.98] text-cream">
              THE MARKET HAS<br />
              <span className="text-[#D6B45A] drop-shadow-[0_0_20px_rgba(214,180,90,0.25)]">
                A CLOCK.
              </span>
            </h2>

            {/* Supporting Educational Copy */}
            <p className="text-stone-300 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
              The global currency market operates through a sequence of regional sessions. Understanding when each financial centre is active helps explain how participation and liquidity move around the world.
            </p>
          </div>

          {/* Reference Timezone Badge */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-obsidian-950/80 border border-white/10 backdrop-blur-md self-start lg:self-end">
            <Clock size={15} className="text-gold shrink-0" />
            <div className="font-mono text-left">
              <span className="block text-[8.5px] uppercase tracking-widest text-stone-400 font-medium">
                REFERENCE STANDARD
              </span>
              <span className="block text-xs font-bold text-cream tracking-wider">
                COORDINATED UNIVERSAL TIME (UTC)
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. 24-HOUR GLOBAL MARKET CLOCK — VISUAL CENTERPIECE      */}
        {/* ======================================================== */}
        <div className="clock-card p-5 sm:p-6 lg:p-7 rounded-2xl bg-obsidian-950/85 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl mb-6 sm:mb-8">
          {/* Top Clock Bar: Title & Fast Interactive Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <h3 className="font-display font-black text-base sm:text-lg text-cream tracking-tight uppercase">
                24-Hour Global Market Clock
              </h3>
            </div>

            {/* Quick Session Selectors */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]">
              {marketSessions.map((session) => {
                const isSelected = selectedSessionId === session.id;
                return (
                  <button
                    key={session.id}
                    onClick={() => setSelectedSessionId(session.id)}
                    className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-white/10 text-cream scale-[1.02]'
                        : 'bg-white/[0.02] text-stone-400 hover:text-stone-200 border-white/[0.06]'
                    }`}
                    style={{
                      borderColor: isSelected ? session.accentColor : undefined,
                      color: isSelected ? session.accentColor : undefined,
                    }}
                  >
                    {session.shortName} ({String(session.startHour).padStart(2, '0')}–{String(session.endHour).padStart(2, '0')})
                  </button>
                );
              })}
              <button
                onClick={() => setSelectedSessionId('overlap')}
                className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  selectedSessionId === 'overlap'
                    ? 'bg-gold/20 text-gold border-gold/60 scale-[1.02]'
                    : 'bg-gold/[0.05] text-gold/80 hover:text-gold border-gold/20'
                }`}
              >
                OVERLAP (12–16)
              </button>
            </div>
          </div>

          {/* Timeline Horizontal Axis & Tracks */}
          <div className="overflow-x-auto pb-2 scrollbar-none">
            <div className="min-w-[580px] sm:min-w-[660px] lg:min-w-full relative" ref={timelineRef}>
              {/* 24-Hour Axis Ticks */}
              <div className="relative h-6 w-full border-b border-white/10 mb-3 font-mono text-[10px] text-stone-400">
                {hourTicks.map((hour) => {
                  const leftPct = (hour / 24) * 100;
                  return (
                    <div
                      key={hour}
                      className="absolute transform -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${leftPct}%` }}
                    >
                      <span>{String(hour).padStart(2, '0')}:00</span>
                      <div className="w-[1px] h-1.5 bg-stone-600 mt-0.5" />
                    </div>
                  );
                })}
              </div>

              {/* Vertical Guide Lines */}
              <div className="absolute top-6 bottom-0 left-0 right-0 pointer-events-none">
                {hourTicks.map((hour) => {
                  const leftPct = (hour / 24) * 100;
                  return (
                    <div
                      key={`grid-${hour}`}
                      className="absolute top-0 bottom-0 w-[1px] bg-white/[0.035]"
                      style={{ left: `${leftPct}%` }}
                    />
                  );
                })}
              </div>

              {/* Luminous Overlap Highlight Column (12:00 to 16:00 UTC) */}
              <div
                className="absolute top-6 bottom-0 pointer-events-none rounded-lg bg-gradient-to-b from-amber-500/[0.09] via-cyan-500/[0.06] to-transparent border-x border-gold/30 z-10 transition-opacity duration-300"
                style={{
                  left: `${overlapLeft}%`,
                  width: `${overlapWidth}%`,
                  opacity: selectedSessionId === 'overlap' || hoveredSessionId === 'overlap' ? 0.9 : 0.4,
                }}
              >
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded font-mono text-[7.5px] font-black uppercase tracking-wider bg-gold text-obsidian-950 whitespace-nowrap shadow-sm">
                  CONVERGENCE
                </div>
              </div>

              {/* Real-Time UTC Current Marker */}
              <div
                className="absolute top-5 bottom-0 z-30 pointer-events-none flex flex-col items-center transition-all duration-1000"
                style={{ left: `${utcTime.percentage}%` }}
              >
                <div className="px-1.5 py-0.2 rounded font-mono text-[8px] font-bold bg-cream text-obsidian-950 uppercase tracking-wider shadow-[0_0_10px_rgba(255,255,255,0.7)] whitespace-nowrap -translate-y-4">
                  CURRENT // {utcTime.formatted}
                </div>
                <div className="w-[1px] h-full bg-cream shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                <div className="w-1.5 h-1.5 rounded-full bg-cream -translate-y-0.5 shadow-[0_0_6px_#FFF]" />
              </div>

              {/* Session Bands (Proportionally Calculated) */}
              <div className="space-y-2.5 relative z-20 pt-1 pb-1">
                {/* 1. ASIAN SESSION TRACK (00:00 - 09:00 UTC) */}
                <div className="h-10 relative flex items-center">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="Asian Session 00:00 to 09:00 UTC"
                    onClick={() => setSelectedSessionId('asian')}
                    onMouseEnter={() => setHoveredSessionId('asian')}
                    onMouseLeave={() => setHoveredSessionId(null)}
                    className="session-band-item absolute h-9 rounded-lg px-3 flex items-center justify-between cursor-pointer border transition-all duration-200 group"
                    style={{
                      left: `${getTimelineLeftPercent(0)}%`,
                      width: `${getTimelineWidthPercent(0, 9)}%`,
                      backgroundColor: 'rgba(56, 189, 248, 0.12)',
                      borderColor:
                        selectedSessionId === 'asian' || hoveredSessionId === 'asian'
                          ? '#38BDF8'
                          : 'rgba(56, 189, 248, 0.35)',
                      boxShadow:
                        selectedSessionId === 'asian' || hoveredSessionId === 'asian'
                          ? '0 0 20px -4px rgba(56, 189, 248, 0.4)'
                          : 'none',
                      opacity:
                        hoveredSessionId && hoveredSessionId !== 'asian' ? 0.6 : 1,
                    }}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="font-display font-black text-xs text-cream tracking-tight truncate">
                        ASIAN SESSION
                      </span>
                    </div>
                    <span className="font-mono text-[8.5px] text-cyan-300 font-medium shrink-0 ml-1">
                      00:00 → 09:00
                    </span>
                  </div>
                </div>

                {/* 2. LONDON SESSION TRACK (07:00 - 16:00 UTC) */}
                <div className="h-10 relative flex items-center">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="London Session 07:00 to 16:00 UTC"
                    onClick={() => setSelectedSessionId('london')}
                    onMouseEnter={() => setHoveredSessionId('london')}
                    onMouseLeave={() => setHoveredSessionId(null)}
                    className="session-band-item absolute h-9 rounded-lg px-3 flex items-center justify-between cursor-pointer border transition-all duration-200 group"
                    style={{
                      left: `${getTimelineLeftPercent(7)}%`,
                      width: `${getTimelineWidthPercent(7, 16)}%`,
                      backgroundColor: 'rgba(214, 180, 90, 0.14)',
                      borderColor:
                        selectedSessionId === 'london' || hoveredSessionId === 'london'
                          ? '#D6B45A'
                          : 'rgba(214, 180, 90, 0.35)',
                      boxShadow:
                        selectedSessionId === 'london' || hoveredSessionId === 'london'
                          ? '0 0 20px -4px rgba(214, 180, 90, 0.4)'
                          : 'none',
                      opacity:
                        hoveredSessionId && hoveredSessionId !== 'london' ? 0.6 : 1,
                    }}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="font-display font-black text-xs text-cream tracking-tight truncate">
                        LONDON SESSION
                      </span>
                    </div>
                    <span className="font-mono text-[8.5px] text-gold font-medium shrink-0 ml-1">
                      07:00 → 16:00
                    </span>
                  </div>
                </div>

                {/* 3. NEW YORK SESSION TRACK (12:00 - 21:00 UTC) */}
                <div className="h-10 relative flex items-center">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="New York Session 12:00 to 21:00 UTC"
                    onClick={() => setSelectedSessionId('newyork')}
                    onMouseEnter={() => setHoveredSessionId('newyork')}
                    onMouseLeave={() => setHoveredSessionId(null)}
                    className="session-band-item absolute h-9 rounded-lg px-3 flex items-center justify-between cursor-pointer border transition-all duration-200 group"
                    style={{
                      left: `${getTimelineLeftPercent(12)}%`,
                      width: `${getTimelineWidthPercent(12, 21)}%`,
                      backgroundColor: 'rgba(244, 63, 94, 0.12)',
                      borderColor:
                        selectedSessionId === 'newyork' || hoveredSessionId === 'newyork'
                          ? '#F43F5E'
                          : 'rgba(244, 63, 94, 0.35)',
                      boxShadow:
                        selectedSessionId === 'newyork' || hoveredSessionId === 'newyork'
                          ? '0 0 20px -4px rgba(244, 63, 94, 0.4)'
                          : 'none',
                      opacity:
                        hoveredSessionId && hoveredSessionId !== 'newyork' ? 0.6 : 1,
                    }}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      <span className="font-display font-black text-xs text-cream tracking-tight truncate">
                        NEW YORK SESSION
                      </span>
                    </div>
                    <span className="font-mono text-[8.5px] text-rose-300 font-medium shrink-0 ml-1">
                      12:00 → 21:00
                    </span>
                  </div>
                </div>

                {/* 4. LONDON × NEW YORK OVERLAP STRIP (12:00 - 16:00 UTC) */}
                <div className="h-9 relative flex items-center">
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label="London and New York Overlap 12:00 to 16:00 UTC"
                    onClick={() => setSelectedSessionId('overlap')}
                    onMouseEnter={() => setHoveredSessionId('overlap')}
                    onMouseLeave={() => setHoveredSessionId(null)}
                    className="session-band-item absolute h-8 rounded-lg px-2.5 flex items-center justify-between cursor-pointer border transition-all duration-200 group"
                    style={{
                      left: `${overlapLeft}%`,
                      width: `${overlapWidth}%`,
                      background: 'linear-gradient(90deg, rgba(214,180,90,0.25) 0%, rgba(56,189,248,0.25) 100%)',
                      borderColor:
                        selectedSessionId === 'overlap' || hoveredSessionId === 'overlap'
                          ? '#D6B45A'
                          : 'rgba(214, 180, 90, 0.45)',
                      boxShadow:
                        selectedSessionId === 'overlap' || hoveredSessionId === 'overlap'
                          ? '0 0 24px -4px rgba(214, 180, 90, 0.45)'
                          : 'none',
                      opacity:
                        hoveredSessionId && hoveredSessionId !== 'overlap' ? 0.6 : 1,
                    }}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Sparkles size={11} className="text-gold shrink-0 animate-pulse" />
                      <span className="font-display font-black text-[10.5px] text-cream tracking-tight truncate">
                        OVERLAP
                      </span>
                    </div>
                    <span className="font-mono text-[8px] text-gold font-bold shrink-0 ml-1">
                      12:00 → 16:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clock Footer: Active Focus State */}
          <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-stone-400 font-mono text-[10.5px]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>
                ACTIVE FOCUS:{' '}
                <strong className="text-cream uppercase">
                  {selectedSessionId === 'overlap'
                    ? sessionOverlap.name
                    : activeSession.name}
                </strong>
              </span>
            </div>
            <span className="text-stone-400 text-[9.5px] hidden sm:inline">
              SELECT ANY REGION OR CARD TO INSPECT METRICS
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. SESSION DETAILS — COMPACT EDITORIAL MODULES (Req 10)  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6">
          {marketSessions.map((session) => {
            const isSelected = selectedSessionId === session.id;
            return (
              <div
                key={session.id}
                tabIndex={0}
                role="button"
                aria-label={`${session.name} details`}
                onClick={() => setSelectedSessionId(session.id)}
                className={`session-module p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-obsidian-950/95 scale-[1.01]'
                    : 'bg-obsidian-950/60 border-white/[0.08] hover:border-white/20 hover:bg-obsidian-900/80'
                }`}
                style={{
                  borderColor: isSelected ? session.borderColor : undefined,
                  boxShadow: isSelected
                    ? `0 8px 28px -6px ${session.glowRgba}`
                    : undefined,
                }}
              >
                <div>
                  {/* Top Bar: Short Tag + DNA Tags */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className="font-mono text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: `${session.accentColor}15`,
                        color: session.accentColor,
                        borderColor: `${session.accentColor}40`,
                      }}
                    >
                      {session.shortName}
                    </span>

                    <div className="flex items-center gap-1">
                      {session.dnaTags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[7.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.04] text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Session Title & Hours */}
                  <h3 className="font-display font-black text-lg text-cream tracking-tight mb-0.5">
                    {session.name}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] mb-2.5" style={{ color: session.accentColor }}>
                    <span>{session.timeUtc}</span>
                    <span>·</span>
                    <span className="text-stone-400 font-sans">{session.locations}</span>
                  </div>

                  {/* Description: 1-2 lines on desktop */}
                  <p className="font-sans text-xs text-stone-300 font-light leading-relaxed mb-3">
                    “{session.description}”
                  </p>
                </div>

                {/* Educational Focus Bullets */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="font-mono text-[8.5px] uppercase tracking-widest text-stone-400 block mb-1.5 font-bold">
                    EDUCATIONAL FOCUS:
                  </span>
                  <ul className="space-y-1 font-sans text-[11.5px] text-stone-300 font-light">
                    {session.educationalFocus.map((focus, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: session.accentColor }}
                        />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================================== */}
        {/* 4. SIGNATURE ELEMENT: LONDON × NEW YORK OVERLAP          */}
        {/* ======================================================== */}
        <div
          tabIndex={0}
          role="button"
          aria-label="London and New York Overlap Detailed Feature"
          onClick={() => setSelectedSessionId('overlap')}
          className={`overlap-feature-card p-5 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden ${
            selectedSessionId === 'overlap'
              ? 'bg-gradient-to-r from-obsidian-950 via-[#19140b] to-obsidian-950 border-gold/60 shadow-[0_0_36px_-8px_rgba(214,180,90,0.3)] scale-[1.005]'
              : 'bg-gradient-to-r from-obsidian-950/90 via-obsidian-900/60 to-obsidian-950 border-white/10 hover:border-gold/40'
          }`}
        >
          {/* Subtle Ambient Convergence Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none bg-gold" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left 7 Columns: Overlap Narrative */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-gold/15 text-gold border border-gold/40">
                  SIGNATURE CONVERGENCE
                </span>
                <span className="font-mono text-[10px] text-gold font-bold tracking-wider">
                  {sessionOverlap.timeUtc}
                </span>
                <span className="text-stone-500 font-mono text-xs">·</span>
                <span className="text-stone-400 font-sans text-xs">
                  {sessionOverlap.locations}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-cream tracking-tight">
                {sessionOverlap.name}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                “{sessionOverlap.description}”
              </p>

              {/* DNA Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {sessionOverlap.dnaTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-stone-300 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Visual Intersection Graphic */}
            <div className="lg:col-span-5 p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.08]">
              <span className="font-mono text-[8.5px] uppercase tracking-widest text-stone-400 block mb-2.5 font-bold">
                TRANSATLANTIC LIQUIDITY INTERSECTION
              </span>

              {/* Compact Convergence Map */}
              <div className="space-y-1.5 font-mono text-[10px] mb-3">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-gold font-bold">LONDON</span>
                  <div className="flex-1 mx-2.5 h-1.5 rounded bg-gold/35 border border-gold/40" />
                  <span className="text-[10px]">07–16 UTC</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-rose-400 font-bold">NEW YORK</span>
                  <div className="flex-1 mx-2.5 h-1.5 rounded bg-rose-500/35 border border-rose-500/40" />
                  <span className="text-[10px]">12–21 UTC</span>
                </div>
                <div className="pt-1.5 border-t border-white/[0.08] flex items-center justify-between text-cream">
                  <span className="text-gold font-black flex items-center gap-1 text-[10.5px]">
                    <Sparkles size={10} className="text-gold animate-pulse" />
                    OVERLAP
                  </span>
                  <div className="flex-1 mx-2.5 h-2.5 rounded-md bg-gradient-to-r from-gold via-cream to-cyan-400 shadow-[0_0_10px_rgba(214,180,90,0.5)]" />
                  <span className="font-bold text-gold text-[10.5px]">12–16 UTC</span>
                </div>
              </div>

              {/* Educational Focus Bullets */}
              <div className="space-y-1 font-sans text-[11px] text-stone-300 font-light pt-2 border-t border-white/[0.06]">
                {sessionOverlap.educationalFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <ArrowRight size={10} className="text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5. MICRO "DAY CYCLE" TRANSITION INTO NEXT SECTION (Req 21)*/}
        {/* ======================================================== */}
        <div className="cycle-indicator mt-8 sm:mt-10 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[10px] text-stone-400">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-gold font-bold">ASIA</span>
            <span className="text-stone-600">→</span>
            <span className="text-cream font-medium">EUROPE</span>
            <span className="text-stone-600">→</span>
            <span className="text-cream font-medium">NORTH AMERICA</span>
            <span className="text-stone-600">→</span>
            <span className="text-gold font-bold">NEXT CYCLE</span>
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-stone-400 self-start sm:self-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>24H CONTINUOUS ORDER FLOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
