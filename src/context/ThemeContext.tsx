import React, { createContext, useContext, useEffect, useState } from 'react';
import { chromaticThemes, ChromaticSpecimen } from '../data/chromaticThemes';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ThemeContextType {
  activeTheme: string;
  setActiveTheme: (themeKey: string) => void;
  currentSpecimen: ChromaticSpecimen;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<string>('dynamic');
  const [dynamicSectionKey, setDynamicSectionKey] = useState<string>('cosmic');

  // Track dynamic scroll sections to update theme in 'dynamic' mode
  useEffect(() => {
    if (activeTheme !== 'dynamic') return;

    const sections = [
      { id: 'hero', key: 'cosmic' },
      { id: 'about', key: 'opal' },
      { id: 'watching', key: 'navy' },
      { id: 'forex-market', key: 'navy' },
      { id: 'strength', key: 'cosmic' },
      { id: 'sessions', key: 'violet' },
      { id: 'liquidity', key: 'burgundy' },
      { id: 'portfolio', key: 'opal' },
      { id: 'performance', key: 'navy' },
      { id: 'journal', key: 'cosmic' },
      { id: 'macro', key: 'violet' },
      { id: 'psychology', key: 'burgundy' },
      { id: 'curriculum', key: 'opal' },
      { id: 'pricing', key: 'cosmic' },
      { id: 'community', key: 'navy' },
      { id: 'contact', key: 'violet' },
    ];

    const triggers: ScrollTrigger[] = [];

    const timer = setTimeout(() => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (!el) return;

        const trigger = ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setDynamicSectionKey(sec.key),
          onEnterBack: () => setDynamicSectionKey(sec.key),
        });
        triggers.push(trigger);
      });
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
    };
  }, [activeTheme]);

  // Determine effective specimen to drive CSS variables
  const effectiveKey = activeTheme === 'dynamic' ? dynamicSectionKey : activeTheme;
  const currentSpecimen = chromaticThemes[effectiveKey] || chromaticThemes.dynamic;

  // Update root CSS variables whenever effective theme changes
  useEffect(() => {
    const root = document.documentElement;

    let accentColor = currentSpecimen.accentHex;
    let primaryColor = currentSpecimen.hex;
    let gradient = `linear-gradient(135deg, #FFFFFF 0%, ${currentSpecimen.accentHex} 50%, ${currentSpecimen.hex} 100%)`;
    let glow = currentSpecimen.auraGradient.glow;
    let border = `${currentSpecimen.accentHex}40`;

    if (effectiveKey === 'navy') {
      accentColor = '#1EC1CB';
      primaryColor = '#1C1C28';
      gradient = 'linear-gradient(135deg, #C2F8FC 0%, #1EC1CB 50%, #0B646B 100%)';
      glow = 'rgba(30, 193, 203, 0.35)';
      border = 'rgba(30, 193, 203, 0.4)';
    } else if (effectiveKey === 'burgundy') {
      accentColor = '#D52B32';
      primaryColor = '#1A0A0F';
      gradient = 'linear-gradient(135deg, #FDE8EA 0%, #E53E3E 50%, #8F1118 100%)';
      glow = 'rgba(213, 43, 50, 0.35)';
      border = 'rgba(213, 43, 50, 0.4)';
    } else if (effectiveKey === 'opal') {
      accentColor = '#D9DDE2';
      primaryColor = '#12141A';
      gradient = 'linear-gradient(135deg, #FFFFFF 0%, #D9DDE2 50%, #8C96A5 100%)';
      glow = 'rgba(217, 221, 226, 0.3)';
      border = 'rgba(217, 221, 226, 0.4)';
    } else if (effectiveKey === 'cosmic') {
      accentColor = '#F1FEC8';
      primaryColor = '#23212C';
      gradient = 'linear-gradient(135deg, #FFFFFF 0%, #F1FEC8 50%, #A8B868 100%)';
      glow = 'rgba(241, 254, 200, 0.3)';
      border = 'rgba(241, 254, 200, 0.35)';
    } else if (effectiveKey === 'violet') {
      accentColor = '#D2C3F6';
      primaryColor = '#36255C';
      gradient = 'linear-gradient(135deg, #F3EEFE 0%, #D2C3F6 50%, #6E44BA 100%)';
      glow = 'rgba(210, 195, 246, 0.35)';
      border = 'rgba(210, 195, 246, 0.4)';
    }

    root.style.setProperty('--theme-accent', accentColor);
    root.style.setProperty('--theme-primary', primaryColor);
    root.style.setProperty('--theme-gradient', gradient);
    root.style.setProperty('--theme-glow', glow);
    root.style.setProperty('--theme-border', border);
    root.setAttribute('data-theme', activeTheme);
  }, [effectiveKey, activeTheme, currentSpecimen]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme, currentSpecimen }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
