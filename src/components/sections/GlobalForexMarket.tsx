import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  universeInstruments,
  InstrumentSpecimen,
  UniverseCategory,
} from '../../data/forexUniverse';
import { InstrumentPortrait } from '../ui/InstrumentPortrait';
import { Compass, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GlobalForexMarket() {
  const [activeCategory, setActiveCategory] = useState<UniverseCategory>('ALL');
  const [selectedId, setSelectedId] = useState<string>('xauusd');

  const sectionRef = useRef<HTMLElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);

  // Filter instruments by category ('ALL', 'METAL', 'DIGITAL ASSET')
  const filteredInstruments = universeInstruments.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  // Active instrument object (safely resolved)
  const current =
    filteredInstruments.find((item) => item.id === selectedId) ||
    universeInstruments.find((item) => item.id === selectedId) ||
    filteredInstruments[0] ||
    universeInstruments[0];

  // GSAP scroll entrance animation
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.universe-label', {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '.universe-headline',
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.universe-copy',
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.universe-categories',
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.universe-nav',
          {
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .from(
          detailPanelRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.4'
        );
    },
    { scope: sectionRef }
  );

  // Bidirectional synchronization with the Market Artifact section
  useEffect(() => {
    const syncHandler = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id) {
        const match = universeInstruments.find((item) => item.id === customEvent.detail.id);
        if (match && match.id !== selectedId) {
          if (detailPanelRef.current) {
            gsap.fromTo(
              detailPanelRef.current,
              { opacity: 0.35, y: 12 },
              { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
            );
          }
          setSelectedId(match.id);
        }
      }
    };
    window.addEventListener('veer:select-specimen', syncHandler);
    return () => window.removeEventListener('veer:select-specimen', syncHandler);
  }, [selectedId]);

  // Handle instrument selection with smooth GSAP crossfade and artifact sync
  const handleSelectInstrument = (inst: InstrumentSpecimen) => {
    if (inst.id === selectedId) return;

    if (detailPanelRef.current) {
      gsap.fromTo(
        detailPanelRef.current,
        { opacity: 0.35, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    setSelectedId(inst.id);

    // Sync with Market Artifact section
    window.dispatchEvent(
      new CustomEvent('veer:select-specimen', {
        detail: { id: inst.id, symbol: inst.symbol },
      })
    );
  };

  // Handle category switch
  const handleCategoryChange = (cat: UniverseCategory) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    const newItems = universeInstruments.filter(
      (i) => cat === 'ALL' || i.category === cat
    );
    if (newItems.length > 0 && !newItems.some((i) => i.id === selectedId)) {
      handleSelectInstrument(newItems[0]);
    }
  };

  const categories: { id: UniverseCategory; label: string; count: number }[] = [
    { id: 'ALL', label: 'ALL', count: 4 },
    { id: 'METAL', label: 'METALS', count: 2 },
    { id: 'DIGITAL ASSET', label: 'DIGITAL ASSETS', count: 2 },
  ];

  return (
    <section
      ref={sectionRef}
      id="universe"
      className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* 1. Subtle World-Market Contour Visual Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 1200 600"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <path
            d="M 100 300 Q 300 150 600 300 T 1100 300"
            fill="none"
            stroke="#D6B45A"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M 150 350 Q 400 200 650 350 T 1150 350"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1"
            strokeDasharray="6 6"
          />
          <circle cx="300" cy="225" r="4" fill="#D6B45A" />
          <circle cx="600" cy="300" r="5" fill="#38BDF8" />
          <circle cx="900" cy="225" r="4" fill="#E5C56C" />
          <line x1="300" y1="225" x2="600" y2="300" stroke="#FAF7F2" strokeWidth="0.8" strokeDasharray="2 4" />
          <line x1="600" y1="300" x2="900" y2="225" stroke="#FAF7F2" strokeWidth="0.8" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* Dynamic Luminous Ambient Halo */}
      <div
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-1000"
        style={{ background: current.theme.glowRgba }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ======================================================== */}
        {/* SECTION HERO                                             */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            {/* Small Label */}
            <div className="universe-label flex items-center gap-2 font-mono text-xs text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">
                SECTION 03 — FOREX UNIVERSE
              </span>
            </div>

            {/* Monumental Editorial Headline */}
            <h2 className="universe-headline text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[0.95] text-cream">
              THE WORLD<br />
              OF CURRENCIES.
            </h2>

            {/* Supporting Copy */}
            <p className="universe-copy text-stone-300 font-sans text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Explore the critical sovereign commodity and digital scarcity relationships against the US Dollar benchmark.
            </p>

            {/* Secondary Category Marker */}
            <div className="pt-1 flex items-center gap-2 font-mono text-[10px] text-stone-400 tracking-widest uppercase">
              <span className="text-gold/90 font-medium">PRECIOUS METALS</span>
              <span>·</span>
              <span className="text-cyan-400/90 font-medium">DIGITAL ASSETS</span>
              <span>·</span>
              <span className="text-stone-400">USD BENCHMARKS</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CATEGORY SWITCHING CONTROLS                              */}
          {/* ======================================================== */}
          <div className="universe-categories flex items-center p-1.5 rounded-xl bg-obsidian-950/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gold text-obsidian-950 shadow-[0_0_16px_rgba(214,180,90,0.35)] scale-[1.02]'
                      : 'text-stone-400 hover:text-cream hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[9.5px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-obsidian-950/30 text-obsidian-950 font-extrabold'
                        : 'bg-white/[0.06] text-stone-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* EDITORIAL STORYTELLING INTERSTITIAL                      */}
        {/* ======================================================== */}
        <div className="mb-10 py-3 px-5 rounded-xl bg-obsidian-950/60 border border-white/[0.06] flex items-center justify-between text-stone-400 font-mono text-[10px] sm:text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
            <span className="text-stone-300 font-semibold uppercase">EVERY PAIR IS A RELATIONSHIP</span>
          </div>
          <span className="hidden md:inline text-stone-600">//</span>
          <span className="hidden md:inline text-stone-400">EVERY RELATIONSHIP HAS CONTEXT</span>
          <span className="hidden lg:inline text-stone-600">//</span>
          <span className="hidden lg:inline text-cream/90 font-medium">EVERY CONTEXT CHANGES HOW WE READ THE MARKET</span>
        </div>

        {/* ======================================================== */}
        {/* MASTER-DETAIL ATLAS ARCHITECTURE                         */}
        {/* Left ~35%: Instrument Roster | Right ~65%: Featured View */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ------------------------------------------------------ */}
          {/* LEFT COLUMN: Instrument Navigation (Exactly 4 items)  */}
          {/* ------------------------------------------------------ */}
          <div className="lg:col-span-4 universe-nav flex flex-col space-y-3">
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                INSTRUMENT ROSTER ({filteredInstruments.length})
              </span>
              <span className="font-mono text-[9px] text-gold uppercase tracking-wider">
                SELECT TO EXPAND
              </span>
            </div>

            {/* Instrument List Roster with Hover & Active States */}
            <div className="flex flex-col gap-3">
              {filteredInstruments.map((inst) => {
                const isSelected = inst.id === current.id;
                return (
                  <button
                    key={inst.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectInstrument(inst)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl font-mono transition-all duration-300 cursor-pointer relative overflow-hidden group border ${
                      isSelected
                        ? 'bg-obsidian-950/95 scale-[1.01]'
                        : 'bg-obsidian-950/60 border-white/[0.08] hover:border-white/20 hover:bg-obsidian-900/80 hover:translate-x-1 sm:hover:translate-x-1.5'
                    }`}
                    style={{
                      borderColor: isSelected ? inst.theme.activeBorder : undefined,
                      boxShadow: isSelected ? `0 8px 30px -6px ${inst.theme.glowRgba}` : undefined,
                    }}
                  >
                    {/* Soft dynamic accent aura on active item */}
                    {isSelected && (
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-all duration-500"
                        style={{ background: inst.theme.accentHex }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        {/* Elegant Accent Indicator */}
                        <div
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isSelected
                              ? 'h-8 opacity-100'
                              : 'h-4 bg-white/10 group-hover:h-6 group-hover:bg-white/30 group-hover:opacity-80'
                          }`}
                          style={{
                            backgroundColor: isSelected ? inst.theme.accentHex : undefined,
                            boxShadow: isSelected ? `0 0 10px ${inst.theme.accentHex}` : undefined,
                          }}
                        />

                        <div className="min-w-0">
                          {/* Symbol & Category Tag */}
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-display font-black text-lg sm:text-xl tracking-tight transition-colors duration-200 ${
                                isSelected ? 'text-cream' : 'text-stone-300 group-hover:text-cream'
                              }`}
                            >
                              {inst.symbol}
                            </span>
                            <span
                              className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold border"
                              style={{
                                backgroundColor: isSelected ? `${inst.theme.accentHex}18` : 'rgba(255,255,255,0.03)',
                                color: isSelected ? inst.theme.accentHex : '#A8A29E',
                                borderColor: isSelected ? `${inst.theme.accentHex}40` : 'rgba(255,255,255,0.08)',
                              }}
                            >
                              {inst.category}
                            </span>
                          </div>

                          {/* Subtitle Name: e.g. "Gold / US Dollar" (Fully Visible, No Truncation) */}
                          <span
                            className={`font-sans text-xs sm:text-sm font-light mt-1 block transition-colors duration-200 ${
                              isSelected ? 'text-stone-200' : 'text-stone-400 group-hover:text-stone-300'
                            }`}
                          >
                            {inst.name}
                          </span>
                        </div>
                      </div>

                      {/* Right Arrow / Selection Indicator */}
                      <div className="flex items-center gap-2 shrink-0">
                        <ArrowRight
                          size={16}
                          className={`transition-all duration-300 ${
                            isSelected
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 text-stone-500'
                          }`}
                          style={{ color: isSelected ? inst.theme.accentHex : undefined }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* RIGHT COLUMN: Featured Instrument Experience           */}
          {/* ------------------------------------------------------ */}
          <div
            ref={detailPanelRef}
            className="lg:col-span-8 p-6 sm:p-8 lg:p-10 rounded-2xl bg-obsidian-950/90 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl transition-all duration-500"
            style={{
              boxShadow: `0 24px 80px -20px ${current.theme.glowRgba}`,
              borderColor: `${current.theme.accentHex}40`,
            }}
          >
            {/* Top Bar: Symbol, Name, Category Pill */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight">
                    {current.symbol}
                  </h3>
                  <span
                    className="px-2.5 py-1 rounded font-mono text-[9px] font-bold tracking-widest uppercase border"
                    style={{
                      backgroundColor: `${current.theme.accentHex}15`,
                      color: current.theme.accentHex,
                      borderColor: `${current.theme.accentHex}40`,
                    }}
                  >
                    {current.category}
                  </span>
                </div>
                <p className="font-mono text-xs sm:text-sm text-stone-400 tracking-wider uppercase font-semibold">
                  {current.name}
                </p>
              </div>

              {/* Pair DNA Tags */}
              <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                {current.pairDNA.map((dna) => (
                  <span
                    key={dna}
                    className="font-mono text-[8.5px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-stone-300 font-medium"
                  >
                    {dna}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Exploration Grid: 4 Dimensions Left, Portrait Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
              {/* Left Column: Market Context Dimensions 4 Boxes (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-4 font-mono text-[10px] uppercase tracking-widest text-stone-400">
                  <Compass size={13} className="text-gold" />
                  <span className="font-bold text-cream">MARKET CONTEXT DIMENSIONS</span>
                </div>

                {/* 2x2 Grid of the 4 Dimension Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
                  {/* 1. Liquidity */}
                  <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                    <span className="text-stone-500 text-[9.5px] uppercase tracking-wider block font-bold mb-2">
                      LIQUIDITY
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                      {current.marketContext.liquidity}
                    </p>
                  </div>

                  {/* 2. Macro */}
                  <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                    <span className="text-stone-500 text-[9.5px] uppercase tracking-wider block font-bold mb-2">
                      MACRO
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                      {current.marketContext.macro}
                    </p>
                  </div>

                  {/* 3. Session */}
                  <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                    <span className="text-stone-500 text-[9.5px] uppercase tracking-wider block font-bold mb-2">
                      SESSION
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                      {current.marketContext.session}
                    </p>
                  </div>

                  {/* 4. Relationship */}
                  <div className="p-4 rounded-xl bg-obsidian-900/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between min-h-[140px]">
                    <span className="text-stone-500 text-[9.5px] uppercase tracking-wider block font-bold mb-2">
                      RELATIONSHIP
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-stone-300 font-light leading-relaxed">
                      {current.marketContext.relationship}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Instrument Portrait & Relationship Field (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-obsidian-900/40 border border-white/[0.06]">
                <InstrumentPortrait instrument={current} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
