import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandMenu } from './components/ui/CommandMenu';
import { ScrollProgressRail } from './components/ui/ScrollProgressRail';
import { Analytics } from '@vercel/analytics/react';
import { ChromaticAmbientCanvas } from './components/ui/ChromaticAmbientCanvas';

import { ForexHeroSection } from './components/sections/ForexHeroSection';
import { EditorialQuoteDivider } from './components/sections/EditorialQuoteDivider';
import { TraderProfile } from './components/sections/TraderProfile';
import { MarketArtifactSection } from './components/sections/MarketArtifactSection';
import { GlobalForexMarket } from './components/sections/GlobalForexMarket';
import { LiquiditySection } from './components/sections/LiquiditySection';
import { ForexSessionsSection } from './components/sections/ForexSessionsSection';
import { MacroLayerSection } from './components/sections/MacroLayerSection';
import { PlaybookCurriculumSection } from './components/sections/PlaybookCurriculumSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { ContactSection } from './components/sections/ContactSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { editorialQuotes } from './data/editorialQuotes';

gsap.registerPlugin(ScrollTrigger, useGSAP);

import { ThemeProvider } from './context/ThemeContext';

export function App() {
  const [loading, setLoading] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with fine-tuned inertia
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    (window as any).__lenis = lenis;

    return () => {
      delete (window as any).__lenis;
      lenis.destroy();
    };
  }, []);

  // Global / key listener for Command Menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-transparent text-cream min-h-screen relative font-sans selection:bg-gold/25 selection:text-gold overflow-x-hidden">
        {/* Dynamic Chromatic Ambient Canvas */}
        <ChromaticAmbientCanvas />

        {/* Preloader */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Reticle Custom Cursor with Contextual Badges */}
        <CustomCursor />

        {/* Vertical Scroll Progress Rail & Observatory Chapter Indicator */}
        <ScrollProgressRail />

        {/* Terminal Quick Jump Command Menu */}
        <CommandMenu
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
        />

        {/* Compact Floating Editorial Navigation */}
        <Navbar />

        {/* Main Continuous Forex Poster Sequence — 11-Step Target Architecture */}
        <main className="relative z-10">
          {/* 01 — HERO */}
          <ForexHeroSection />

          {/* EDITORIAL TRANSITION 01 */}
          <EditorialQuoteDivider
            quote={editorialQuotes.afterHero.quote}
            subtitle={editorialQuotes.afterHero.subtitle}
            accent="crimson"
            index="01"
          />

          {/* 02 — IDENTITY / ABOUT */}
          <TraderProfile />

          {/* SECTION 02 — THE MARKET ARTIFACT (BRIDGE TO INSTRUMENTS) */}
          <MarketArtifactSection />

          {/* 03 — FOREX UNIVERSE */}
          <GlobalForexMarket />

          {/* 04 — LIQUIDITY */}
          <LiquiditySection />

          {/* 05 — SESSIONS */}
          <ForexSessionsSection />

          {/* 06 — FUNDAMENTALS OF FOREX */}
          <MacroLayerSection />

          {/* 07 — BEGINNER GUIDE */}
          <PlaybookCurriculumSection />

          {/* 08 — COMMUNITY */}
          <CommunitySection />

          {/* 09 — CONTACT */}
          <ContactSection />

          {/* 10 — FINAL STATEMENT */}
          <FinalCTASection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default App;
