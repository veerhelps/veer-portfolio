import React, { useState } from 'react';
import { useTheme } from '../../context/useTheme';
import { ChevronUp, ChevronDown } from 'lucide-react';

export function ChromaticThemeBar() {
  const { activeTheme, setActiveTheme, currentSpecimen } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const themeList = [
    { key: 'dynamic', label: 'DYNAMIC', color: '#D6B45A' },
    { key: 'navy', label: 'NAVY // CYAN', color: '#1EC1CB' },
    { key: 'burgundy', label: 'BURGUNDY', color: '#B51E25' },
    { key: 'opal', label: 'OPAL SILVER', color: '#D9DDE2' },
    { key: 'cosmic', label: 'COSMIC', color: '#F1FEC8' },
    { key: 'violet', label: 'VIOLET', color: '#D2C3F6' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9990] w-[95%] max-w-4xl px-2 pointer-events-auto">
      {/* Specimen Info Drawer (Expandable) */}
      {isExpanded && (
        <div className="mb-2.5 p-4 sm:p-5 rounded-2xl card-specimen-glass border border-white/15 backdrop-blur-3xl animate-fadeIn text-xs font-mono text-stone-300 flex flex-wrap items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-3.5">
            <div
              className="w-8 h-8 rounded-xl border border-white/25 shadow-md flex items-center justify-center shrink-0 transition-colors duration-500"
              style={{ backgroundColor: currentSpecimen.hex }}
            >
              <div
                className="w-3 h-3 rounded-full transition-colors duration-500 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                style={{ backgroundColor: currentSpecimen.accentHex }}
              />
            </div>
            <div>
              <div className="font-display font-black text-sm text-cream tracking-tight flex items-center gap-2">
                <span>{currentSpecimen.name}</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-theme-accent">
                  {currentSpecimen.category}
                </span>
              </div>
              <div className="text-[11px] text-stone-400 font-sans mt-0.5">{currentSpecimen.tagline}</div>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px] border-t sm:border-t-0 sm:border-l border-white/10 pt-2 sm:pt-0 sm:pl-6">
            <div>
              <span className="text-stone-500 block text-[9px] uppercase">CMYK</span>
              <span className="text-cream font-bold">{currentSpecimen.cmyk}</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[9px] uppercase">RGB</span>
              <span className="text-cream font-bold">{currentSpecimen.rgb}</span>
            </div>
            <div>
              <span className="text-stone-500 block text-[9px] uppercase">HEX</span>
              <span className="text-theme-accent font-bold">{currentSpecimen.hex}</span>
            </div>
            <div className="hidden md:block">
              <span className="text-stone-500 block text-[9px] uppercase">REGIME</span>
              <span className="text-emerald-market font-bold">{currentSpecimen.marketRegime}</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Theme Dock */}
      <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-full card-specimen-glass border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.8)] flex items-center justify-between gap-2 sm:gap-3 backdrop-blur-3xl">
        {/* Left: Brand Badge & Specimen Trigger */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition cursor-pointer group shrink-0"
          title="Toggle Chromatic Specs Drawer"
        >
          <div
            className="w-3.5 h-3.5 rounded-full border border-white/30 transition-transform group-hover:scale-125 shrink-0"
            style={{ backgroundColor: currentSpecimen.accentHex }}
          />
          <span className="hidden sm:inline font-mono text-[10px] text-stone-300 uppercase tracking-wider group-hover:text-cream font-semibold">
            SPECTRUM
          </span>
          <span className="font-mono text-[10px] text-cream font-bold px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
            {currentSpecimen.hex}
          </span>
          {isExpanded ? (
            <ChevronDown size={14} className="text-stone-400 group-hover:text-cream" />
          ) : (
            <ChevronUp size={14} className="text-stone-400 group-hover:text-cream" />
          )}
        </button>

        {/* Center: Theme Selectors */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 font-mono text-[10px] tracking-wider">
          {themeList.map((item) => {
            const isActive = activeTheme === item.key;
            return (
              <button
                type="button"
                key={item.key}
                onClick={() => setActiveTheme(item.key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-white/20 text-cream border border-white/30 shadow-lg font-bold scale-105'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/10'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0 transition-transform"
                  style={{ backgroundColor: item.color, boxShadow: isActive ? `0 0 8px ${item.color}` : 'none' }}
                />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
