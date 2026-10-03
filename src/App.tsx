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
import { CurrencyWatchingSection } from './components/sections/CurrencyWatchingSection';
import { GlobalForexMarket } from './components/sections/GlobalForexMarket';
import { CurrencyStrengthSection } from './components/sections/CurrencyStrengthSection';
import { ForexSessionsSection } from './components/sections/ForexSessionsSection';
import { LiquiditySection } from './components/sections/LiquiditySection';
import { ForexDashboardSection } from './components/sections/ForexDashboardSection';
import { EquityCurveSection } from './components/sections/EquityCurveSection';
import { ForexJournalSection } from './components/sections/ForexJournalSection';
import { MacroLayerSection } from './components/sections/MacroLayerSection';
import { PsychologySection } from './components/sections/PsychologySection';
import { PlaybookCurriculumSection } from './components/sections/PlaybookCurriculumSection';
import { MentorshipPricingSection } from './components/sections/MentorshipPricingSection';
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

    return () => {
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
        <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

        {/* Main Continuous Forex Poster Sequence */}
        <main className="relative z-10">
          {/* HERO: Asymmetrical Poster Composition + 3D Currency Core */}
          <ForexHeroSection />

          {/* TRANSITION STATEMENT 01 */}
          <EditorialQuoteDivider
            quote={editorialQuotes.afterHero.quote}
            subtitle={editorialQuotes.afterHero.subtitle}
            accent="crimson"
            index="01"
          />

          {/* SECTION 01: IDENTITY / OPERATOR PROFILE */}
          <TraderProfile />

          {/* SECTION 02: "EVERY CURRENCY HAS A STORY" */}
          <CurrencyWatchingSection />

          {/* SECTION 03: THE FOREX UNIVERSE CONSTELLATION */}
          <GlobalForexMarket />

          {/* SECTION 04: CURRENCY STRENGTH MATRIX */}
          <CurrencyStrengthSection />

          {/* TRANSITION STATEMENT 02 */}
          <EditorialQuoteDivider
            quote={editorialQuotes.sessions.quote}
            subtitle={editorialQuotes.sessions.subtitle}
            accent="gold"
            index="02"
          />

          {/* SECTION 05: SESSIONS & 3D WORLD CLOCK */}
          <ForexSessionsSection />

          {/* SECTION 06: LIQUIDITY — SIGNATURE CRIMSON MOMENT */}
          <LiquiditySection />

          {/* SECTION 07: THE PORTFOLIO & FLOATING 3D TILES */}
          <ForexDashboardSection />

          {/* SECTION 08: THE EQUITY CURVE */}
          <EquityCurveSection />

          {/* TRANSITION STATEMENT 03 */}
          <EditorialQuoteDivider
            quote={editorialQuotes.performance.quote}
            subtitle={editorialQuotes.performance.subtitle}
            accent="gold"
            index="03"
          />

          {/* SECTION 09: THE TRADE JOURNAL & FILTER MATRIX */}
          <ForexJournalSection />

          {/* SECTION 10: THE MACRO LAYER & EVENT RADAR */}
          <MacroLayerSection />

          {/* SECTION 11: TRADING PSYCHOLOGY — HIGH TYPOGRAPHY & NEGATIVE SPACE */}
          <PsychologySection />

          {/* SECTION 12: VEER CURRICULUM ARCHITECTURE */}
          <PlaybookCurriculumSection />

          {/* SECTION 13: MENTORSHIP PRICING & ONBOARDING */}
          <MentorshipPricingSection />

          {/* SECTION 14: COMMUNITY */}
          <CommunitySection />

          {/* SECTION 15: CONTACT & DESK */}
          <ContactSection />

          {/* FINAL SCREEN: READ THE MARKET. BUILD THE PROCESS. */}
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
