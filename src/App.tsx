import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Preloader } from './components/ui/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

import { ForexHeroSection } from './components/sections/ForexHeroSection';
import { TraderProfile } from './components/sections/TraderProfile';
import { GlobalForexMarket } from './components/sections/GlobalForexMarket';
import { CurrencyStrengthSection } from './components/sections/CurrencyStrengthSection';
import { ForexSessionsSection } from './components/sections/ForexSessionsSection';
import { LiquiditySection } from './components/sections/LiquiditySection';
import { ForexDashboardSection } from './components/sections/ForexDashboardSection';
import { CurrencyGalaxySection } from './components/sections/CurrencyGalaxySection';
import { EquityCurveSection } from './components/sections/EquityCurveSection';
import { ForexIntelligenceSection } from './components/sections/ForexIntelligenceSection';
import { PlaybookCurriculumSection } from './components/sections/PlaybookCurriculumSection';
import { MacroLayerSection } from './components/sections/MacroLayerSection';
import { ForexJournalSection } from './components/sections/ForexJournalSection';
import { ForexRadarSection } from './components/sections/ForexRadarSection';
import { PsychologySection } from './components/sections/PsychologySection';
import { MentorshipPricingSection } from './components/sections/MentorshipPricingSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { ContactSection } from './components/sections/ContactSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
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

  return (
    <div className="bg-obsidian-950 text-stone-200 min-h-screen relative font-sans selection:bg-gold/20 selection:text-gold">
      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Reticle Custom Cursor */}
      <CustomCursor />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Continuous Forex Experience */}
      <main className="relative z-10">
        <ForexHeroSection />
        <TraderProfile />
        <GlobalForexMarket />
        <CurrencyStrengthSection />
        <ForexSessionsSection />
        <LiquiditySection />
        <ForexDashboardSection />
        <CurrencyGalaxySection />
        <EquityCurveSection />
        <ForexIntelligenceSection />
        <PlaybookCurriculumSection />
        <MacroLayerSection />
        <ForexJournalSection />
        <ForexRadarSection />
        <PsychologySection />
        <MentorshipPricingSection />
        <CommunitySection />
        <ContactSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
