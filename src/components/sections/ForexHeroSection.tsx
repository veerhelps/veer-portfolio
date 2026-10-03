import React, { useRef, useState } from 'react';
import { FinancialArtifact3D } from '../3d/FinancialArtifact3D';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ForexHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const crimsonAccentRef = useRef<HTMLDivElement>(null);
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
          scrub: 0.8,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          },
        },
      });

      // Name floats slightly upward with smooth scrub
      if (headlineRef.current) {
        tl.to(headlineRef.current, {
          y: -90,
          opacity: 0.35,
          ease: 'none',
        }, 0);
      }

      // Crimson peel accent slides away smoothly
      if (crimsonAccentRef.current) {
        tl.to(crimsonAccentRef.current, {
          x: 100,
          opacity: 0,
          ease: 'power2.inOut',
        }, 0);
      }

      // 3D artifact zooms slightly forward and rotates
      if (artifactWrapRef.current) {
        tl.to(artifactWrapRef.current, {
          scale: 1.1,
          x: -25,
          ease: 'none',
        }, 0);
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-[100dvh] pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-transparent flex flex-col justify-between"
    >
      {/* 3D Financial Artifact (Crisp, Metallic, Positioned to the right of text) */}
      <div
        ref={artifactWrapRef}
        className="absolute inset-0 z-0 pointer-events-none md:left-[24%] lg:left-[30%] scale-100 sm:scale-105"
      >
        <FinancialArtifact3D scrollProgress={scrollProgress} />
      </div>

      {/* Sleek Crimson Architectural Surface Layer (Reference: Burgundy & Cosmic) */}
      <div
        ref={crimsonAccentRef}
        className="absolute top-28 right-6 sm:right-16 z-[5] hidden md:flex items-center gap-3 px-4 py-2 rounded-full card-specimen-glass border border-crimson/40 text-[11px] font-mono shadow-[0_8px_25px_rgba(181,30,37,0.3)] select-none pointer-events-none"
      >
        <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
        <span className="text-cream font-bold">VOLATILITY SURFACE</span>
        <span className="text-stone-500">//</span>
        <span className="text-gold">1.0% RISK MODEL</span>
        <div className="specimen-pill-inset px-2 py-0.5 rounded-full text-[9px] text-stone-400">
          #1A0A0F
        </div>
      </div>

      {/* Floating Precision Demo Price Tickers (Liquid Frosted Glass Specimen Cards) */}
      <div className="absolute right-6 sm:right-12 lg:right-20 top-44 sm:top-52 z-10 hidden sm:flex flex-col gap-3 font-mono text-[10px] select-none pointer-events-none">
        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-cyan-electric/30 text-cream shadow-2xl hover:border-cyan-electric transition">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-electric shadow-[0_0_6px_#1EC1CB]" />
              <span className="text-cream font-bold">EUR/USD</span>
            </div>
            <span className="text-emerald-market font-bold">+0.44%</span>
          </div>
          <div className="text-stone-100 font-bold text-sm mt-1">1.0925</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>ELECTRIC CYAN</span>
            <span>#1EC1CB</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-white/10 text-cream shadow-2xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blush-pink shadow-[0_0_6px_#F6E6EA]" />
              <span className="text-cream font-bold">GBP/USD</span>
            </div>
            <span className="text-emerald-market font-bold">+0.48%</span>
          </div>
          <div className="text-stone-100 font-bold text-sm mt-1">1.2840</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>BLUSH ROSE</span>
            <span>#F6E6EA</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-white/10 text-cream shadow-2xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-vanilla-matcha shadow-[0_0_6px_#F1FEC8]" />
              <span className="text-cream font-bold">USD/JPY</span>
            </div>
            <span className="text-coral-market font-bold">-0.55%</span>
          </div>
          <div className="text-stone-100 font-bold text-sm mt-1">153.20</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>MATCHA VANILLA</span>
            <span>#F1FEC8</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-2xl card-specimen-glass border border-gold/40 text-cream shadow-2xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-opal-silver shadow-[0_0_6px_#D9DDE2]" />
              <span className="text-gold font-bold">XAU/USD</span>
            </div>
            <span className="text-gold font-bold">+0.90%</span>
          </div>
          <div className="text-cream font-bold text-sm mt-1">2,742.50</div>
          <div className="flex items-center justify-between text-[8px] text-stone-400 mt-1 pt-1 border-t border-white/5">
            <span>OPAL SILVER</span>
            <span>#D9DDE2</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetrical Editorial Hero Typography */}
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
          <div className="text-xs sm:text-sm font-mono text-gold tracking-widest uppercase mt-4 mb-4 font-semibold">
            VEER • TRADING REALITY
          </div>

          {/* Supporting Text (max width 500px, crisp line-height) */}
          <p className="max-w-[500px] text-stone-300 text-xs sm:text-base font-sans font-light leading-relaxed mb-8">
            Stop learning useless topics. VEER focuses on what is needed to understand the Forex market with deep clarity, disciplined execution and reality-based concepts.
          </p>

          {/* Compact High-Contrast CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <a
              href="#portfolio"
              className="px-5 sm:px-6 py-3 rounded-lg bg-cream text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-150 shadow-lg flex items-center gap-2 group"
            >
              <span>EXPLORE FOREX</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#curriculum"
              className="px-5 sm:px-6 py-3 rounded-lg bg-obsidian-950 border border-obsidian-700 hover:border-gold text-cream font-mono font-semibold text-xs sm:text-sm tracking-wider hover:text-gold transition duration-150 flex items-center gap-2"
            >
              <span>VIEW CURRICULUM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar & Scroll Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-obsidian-850 font-mono text-[10px] text-stone-500">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <span className="text-stone-400">SESSION: LONDON / NY OVERLAP</span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span className="hidden sm:inline text-stone-400">MAX ALLOCATION: 1.0% FIXED</span>
        </div>

        <div className="flex items-center gap-2 text-stone-400 animate-bounce">
          <span className="uppercase tracking-widest text-[9px] sm:text-[10px]">SCROLL TO ENTER OBSERVATORY</span>
          <ChevronDown size={14} className="text-gold" />
        </div>
      </div>
    </section>
  );
}
