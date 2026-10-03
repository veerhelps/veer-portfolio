import React, { useRef, useState } from 'react';
import { FinancialArtifact3D } from '../3d/FinancialArtifact3D';
import { ArrowUpRight, ChevronDown, Terminal, Shield, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ForexHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const crimsonAccentRef = useRef<HTMLDivElement>(null);
  const tickerStackRef = useRef<HTMLDivElement>(null);
  const artifactWrapRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // Step 1: Hero title begins moving upward with high editorial stagger
      if (headlineRef.current) {
        tl.to(
          headlineRef.current,
          {
            y: -120,
            opacity: 0.2,
            ease: 'none',
          },
          0
        );
      }

      // Step 3: Crimson editorial layer slides away smoothly
      if (crimsonAccentRef.current) {
        tl.to(
          crimsonAccentRef.current,
          {
            x: 120,
            opacity: 0,
            ease: 'power2.inOut',
          },
          0
        );
      }

      // Market ticker stack slides slightly right and fades
      if (tickerStackRef.current) {
        tl.to(
          tickerStackRef.current,
          {
            x: 80,
            opacity: 0.1,
            ease: 'power2.inOut',
          },
          0
        );
      }

      // Step 2 & 5: 3D Currency Core moves forward toward viewer
      if (artifactWrapRef.current) {
        tl.to(
          artifactWrapRef.current,
          {
            scale: 1.25,
            x: -40,
            ease: 'none',
          },
          0
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-[105dvh] pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-transparent flex flex-col justify-between select-none"
    >
      {/* LAYER 1: Dark atmospheric background & Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-obsidian-950/40 to-obsidian-950 -z-30 pointer-events-none" />

      {/* LAYER 2: Subtle Financial Texture & Ledger Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 pointer-events-none" />
      <div className="absolute top-28 left-8 sm:left-12 font-mono text-[9px] text-stone-700 tracking-widest hidden lg:block -z-10 pointer-events-none">
        LAT: 51.5074° N, LON: 0.1278° W // LONDON INTERBANK FIXED // 400MS TICK
      </div>

      {/* LAYER 3: 3D Currency Core (Interactive with scroll walkthrough) */}
      <div
        ref={artifactWrapRef}
        className="absolute inset-0 z-0 md:left-[22%] lg:left-[28%] scale-100 sm:scale-105 transition-transform duration-75"
      >
        <FinancialArtifact3D scrollProgress={scrollProgress} />
      </div>

      {/* LAYER 4: Crimson Volatility Surface Accent (Slides away on scroll) */}
      <div
        ref={crimsonAccentRef}
        className="absolute top-28 right-6 sm:right-16 z-[5] hidden md:flex items-center gap-3 px-4 py-2 rounded-full card-specimen-glass border border-crimson/40 text-[11px] font-mono shadow-[0_8px_25px_rgba(181,30,37,0.35)] select-none pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
        <span className="text-cream font-bold">VOLATILITY SURFACE</span>
        <span className="text-stone-500">//</span>
        <span className="text-gold">1.0% RISK MODEL</span>
        <div className="specimen-pill-inset px-2 py-0.5 rounded-full text-[9px] text-stone-400">
          #1A0A0F
        </div>
      </div>

      {/* LAYER 4: Floating Market Data Annotations */}
      <div
        ref={tickerStackRef}
        className="absolute right-6 sm:right-12 lg:right-20 top-44 sm:top-52 z-10 hidden sm:flex flex-col gap-3 font-mono text-[10px] select-none pointer-events-none"
      >
        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-cyan-electric/30 text-cream shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric shadow-[0_0_6px_#1EC1CB]" />
              <span className="text-cream font-bold">EUR/USD</span>
            </div>
            <span className="text-emerald-market font-bold">+0.44%</span>
          </div>
          <div className="text-stone-100 font-bold text-sm mt-1">1.0925</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>DISPLACEMENT</span>
            <span className="text-cyan-electric">BULLISH OTE</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-white/10 text-cream shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blush-pink shadow-[0_0_6px_#F6E6EA]" />
              <span className="text-cream font-bold">GBP/USD</span>
            </div>
            <span className="text-emerald-market font-bold">+0.48%</span>
          </div>
          <div className="text-stone-100 font-bold text-sm mt-1">1.2840</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>LIQUIDITY</span>
            <span className="text-stone-300">BSL SWEPT</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-gold/40 text-cream shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_#D6B45A]" />
              <span className="text-gold font-bold">XAU/USD</span>
            </div>
            <span className="text-gold font-bold">+0.90%</span>
          </div>
          <div className="text-cream font-bold text-sm mt-1">2,742.50</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>SOVEREIGN RESERVE</span>
            <span className="text-gold">MACRO HIGH</span>
          </div>
        </div>
      </div>

      {/* LAYER 5 & 6: Main Asymmetrical Editorial Headline Typography + CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div ref={headlineRef} className="max-w-3xl text-left">
          {/* Top Label: VEER FOREX OBSERVATORY ● SYSTEM ONLINE */}
          <div className="flex items-center gap-2.5 mb-3 flex-wrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
            <span className="font-mono text-xs text-gold tracking-widest uppercase font-semibold">
              VEER FOREX OBSERVATORY
            </span>
            <span className="text-stone-600 font-mono text-xs">•</span>
            <span className="font-mono text-[11px] text-stone-400 tracking-wider uppercase">
              SYSTEM ONLINE
            </span>
            <span className="text-stone-600 font-mono text-xs hidden sm:inline">•</span>
            <span className="hidden sm:inline font-mono text-[10px] text-stone-500">
              DISCIPLINED EXECUTION ENGINE
            </span>
          </div>

          {/* Preserved Quote: "WHILE OTHERS SELL ILLUSIONS," */}
          <div className="font-mono text-xs sm:text-sm text-stone-400 tracking-widest uppercase mb-3 select-none">
            "WHILE OTHERS SELL ILLUSIONS,"
          </div>

          {/* Enormous Sharp Typography: DHARAM VEER (Cream) SINGH KIRAR (Gold) */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.75rem] font-black font-display tracking-tight leading-[0.92] select-none my-2 break-words">
            <span className="text-cream block">DHARAM VEER</span>
            <span className="text-gold-gradient block mt-1.5">SINGH KIRAR</span>
          </h1>

          {/* Subtitle: VEER • TRADING REALITY */}
          <div className="text-xs sm:text-sm font-mono text-gold tracking-widest uppercase mt-4 mb-4 font-semibold flex items-center gap-2">
            <span>VEER</span>
            <span className="text-stone-600">•</span>
            <span>TRADING REALITY</span>
          </div>

          {/* Supporting Text */}
          <p className="max-w-[520px] text-stone-300 text-xs sm:text-base font-sans font-light leading-relaxed mb-8">
            Stop learning useless retail noise. VEER reveals how institutional liquidity flows through global sovereign currencies, taught through deep analytical clarity and reality-based execution models.
          </p>

          {/* LAYER 6: Compact High-Contrast CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <a
              href="#portfolio"
              className="px-5 sm:px-6 py-3 rounded-xl bg-cream text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-150 shadow-lg flex items-center gap-2 group"
              data-cursor="OPEN"
            >
              <span>EXPLORE FOREX</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#curriculum"
              className="px-5 sm:px-6 py-3 rounded-xl bg-obsidian-950/90 border border-obsidian-750 hover:border-gold text-cream font-mono font-semibold text-xs sm:text-sm tracking-wider hover:text-gold transition duration-150 flex items-center gap-2"
              data-cursor="OPEN"
            >
              <span>VIEW CURRICULUM</span>
            </a>

            <a
              href="#watching"
              className="px-4 py-3 rounded-xl bg-obsidian-900/60 border border-white/10 hover:border-gold/40 text-stone-400 font-mono text-xs tracking-wider hover:text-cream transition duration-150 flex items-center gap-2"
              data-cursor="EXPLORE"
            >
              <span>CURRENCY CORE</span>
            </a>
          </div>
        </div>
      </div>

      {/* LAYER 7: Tiny Interaction Cues & Bottom Editorial Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-obsidian-850 font-mono text-[10px] text-stone-500">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <span className="text-stone-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
            LONDON / NY OVERLAP ACTIVE
          </span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span className="hidden sm:inline text-stone-400">MAX ALLOCATION: 1.0% FIXED</span>
          <span className="hidden md:inline text-stone-600">•</span>
          <span className="hidden md:inline text-gold">SCROLL TO ENTER OBSERVATORY</span>
        </div>

        <a
          href="#watching"
          className="flex items-center gap-2 text-stone-400 hover:text-gold transition animate-bounce"
          data-cursor="OPEN"
        >
          <span className="uppercase tracking-widest text-[9px] sm:text-[10px]">WALKTHROUGH CORE</span>
          <ChevronDown size={14} className="text-gold" />
        </a>
      </div>
    </section>
  );
}
