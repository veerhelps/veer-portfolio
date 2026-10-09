import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { marketSpecimens, MarketSpecimen } from '../../data/marketArtifacts';
import { MarketArtifact3D } from '../3d/MarketArtifact3D';
import { Landmark, Coins, Gem } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MarketArtifactSection() {
  const [selectedId, setSelectedId] = useState<MarketSpecimen['id']>('xauusd');

  const sectionRef = useRef<HTMLElement>(null);

  const current =
    marketSpecimens.find((item) => item.id === selectedId) || marketSpecimens[0];

  // Bidirectional synchronization with Forex Universe section
  useEffect(() => {
    const syncHandler = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id) {
        const match = marketSpecimens.find((m) => m.id === customEvent.detail.id);
        if (match && match.id !== selectedId) {
          setSelectedId(match.id);
        }
      }
    };
    window.addEventListener('veer:select-specimen', syncHandler);
    return () => window.removeEventListener('veer:select-specimen', syncHandler);
  }, [selectedId]);

  // GSAP scroll entrance choreography
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.artifact-label', {
        opacity: 0,
        y: 15,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '.artifact-headline',
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.artifact-divider',
          {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.artifact-copy',
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.artifact-selector-rail',
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '.artifact-focus-telemetry',
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.2'
        )
        .from(
          '.artifact-stats',
          {
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.2'
        );
    },
    { scope: sectionRef }
  );

  const handleSelect = (item: MarketSpecimen) => {
    if (item.id === selectedId) return;
    setSelectedId(item.id);

    // Sync with Forex Universe section
    window.dispatchEvent(
      new CustomEvent('veer:select-specimen', {
        detail: { id: item.id, symbol: item.code },
      })
    );
  };

  // Helper icon for instrument category
  const renderInstrumentIcon = (id: MarketSpecimen['id']) => {
    switch (id) {
      case 'xauusd':
      case 'xagusd':
        return <Gem size={13} className="shrink-0" />;
      case 'btcusd':
      case 'ethusd':
        return <Coins size={13} className="shrink-0" />;
      case 'usd':
      default:
        return <Landmark size={13} className="shrink-0" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="market"
      className="py-24 sm:py-32 lg:py-36 bg-transparent border-t border-white/[0.08] relative overflow-hidden select-none"
    >
      {/* Background Luminous Radiant Ambient Glow */}
      <div
        className="absolute top-1/2 -right-20 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full blur-[140px] pointer-events-none opacity-25 transition-all duration-1000"
        style={{
          background: current.theme.ambientGradient,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ======================================================== */}
          {/* LEFT COLUMN: 50–55% Typography & Specimen Cards          */}
          {/* ======================================================== */}
          {/* LEFT COLUMN: 40–45% Typography & Clean Selector Rail     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Top Subheader Tag */}
            <div className="artifact-label flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="tracking-widest uppercase font-semibold">
                  SECTION 02 — THE MARKET ARTIFACT
                </span>
              </div>

              {/* Active Category Badge */}
              <span
                className="px-2.5 py-1 rounded font-mono text-[9px] font-bold tracking-wider uppercase border transition-colors duration-500"
                style={{
                  backgroundColor: current.theme.badgeBg,
                  color: current.theme.badgeText,
                  borderColor: `${current.theme.accentHex}40`,
                }}
              >
                {current.categoryBadge}
              </span>
            </div>

            {/* Monumental Headline */}
            <h2 className="artifact-headline text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[0.95] text-cream">
              EVERY<br />
              MARKET<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                HAS A STORY.
              </span>
            </h2>

            {/* Gold Accent Divider Bar */}
            <div className="artifact-divider w-16 h-[2px] bg-gold/50 my-1" />

            {/* Editorial Paragraph */}
            <p className="artifact-copy max-w-xl text-stone-300 text-sm sm:text-base font-sans font-light leading-relaxed">
              Fiat currency and sovereign markets are not abstract numbers on a screen. They are the living ledger of sovereign credit, central bank interest rate decisions, and geopolitical liquidity imbalances.
            </p>

            {/* Interactive Focus Selector Rail (Balanced, Sleek Layout) */}
            <div className="artifact-selector-rail pt-1">
              <span className="font-mono text-[10px] sm:text-xs text-stone-400 font-semibold tracking-widest uppercase block mb-3">
                SELECT INSTRUMENT TO FOCUS OCULUS:
              </span>

              {/* Clean, balanced pill buttons */}
              <div
                role="tablist"
                aria-label="Select instrument to focus oculus"
                className="flex flex-wrap gap-2 sm:gap-2.5"
              >
                {marketSpecimens.map((item) => {
                  const isSelected = item.id === current.id;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(item)}
                      className={`px-3.5 sm:px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                        isSelected
                          ? 'shadow-lg scale-105'
                          : 'bg-obsidian-950/70 border-white/10 text-stone-300 hover:border-white/25 hover:text-cream hover:bg-obsidian-900/80'
                      }`}
                      style={{
                        backgroundColor: isSelected ? item.theme.accentHex : undefined,
                        borderColor: isSelected ? item.theme.accentHex : undefined,
                        color: isSelected ? '#06080C' : undefined,
                        boxShadow: isSelected ? `0 0 20px ${item.theme.glowRgba}` : undefined,
                      }}
                    >
                      <span className={isSelected ? 'text-obsidian-950' : 'text-stone-400'}>
                        {renderInstrumentIcon(item.id)}
                      </span>
                      <span>{item.code}</span>
                      <span
                        className={`text-[9.5px] uppercase tracking-wider font-semibold ${
                          isSelected ? 'text-obsidian-950/90 font-black' : 'text-stone-400'
                        }`}
                      >
                        {item.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Refined Active Telemetry Readout (Pure typography, no bulky cards) */}
            <div className="artifact-focus-telemetry flex items-center gap-2.5 font-mono text-xs pt-1">
              <span
                className="w-2 h-2 rounded-full shrink-0 transition-all duration-500 animate-pulse"
                style={{
                  backgroundColor: current.theme.accentHex,
                  boxShadow: `0 0 10px ${current.theme.accentHex}`,
                }}
              />
              <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">
                ACTIVE FOCUS:
              </span>
              <span className="text-cream font-bold tracking-wide">
                {current.fullName}
              </span>
              <span className="text-stone-600">//</span>
              <span className="text-stone-400 text-[11px] font-sans font-light italic truncate max-w-sm hidden sm:inline">
                {current.tagline}
              </span>
            </div>

            {/* The Rest Two Specimen Metric Boxes: Execution Edge & Risk Per Trade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 font-mono text-xs">
              {/* Card 1: Execution Edge */}
              <div className="artifact-stats p-4 rounded-xl bg-obsidian-950/80 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 backdrop-blur-md">
                <span className="text-stone-400 text-[9px] uppercase tracking-wider block">
                  {current.stat2.label}
                </span>
                <span
                  className="font-black text-base sm:text-lg block my-1 tracking-wide transition-colors duration-500"
                  style={{ color: current.theme.accentHex }}
                >
                  {current.stat2.value}
                </span>
                <span className="text-[9px] text-stone-400 block font-light">
                  {current.stat2.sublabel}
                </span>
              </div>

              {/* Card 2: Risk Per Trade */}
              <div className="artifact-stats p-4 rounded-xl bg-obsidian-950/80 border border-white/10 flex flex-col justify-between hover:border-crimson/30 transition-all duration-300 backdrop-blur-md">
                <span className="text-stone-400 text-[9px] uppercase tracking-wider block">
                  {current.stat3.label}
                </span>
                <span className="text-crimson font-black text-base sm:text-lg block my-1 tracking-wide">
                  {current.stat3.value}
                </span>
                <span className="text-[9px] text-stone-400 block font-light">
                  {current.stat3.sublabel}
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 55–60% Refined 3D Scientific Artifact      */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full">
            <MarketArtifact3D
              items={marketSpecimens}
              selectedItem={current}
              onSelectItem={handleSelect}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
