import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 600);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-obsidian-950 flex flex-col items-center justify-center font-mono transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center select-none">
        {/* Sleek Minimal Emblem */}
        <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-gold/50 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(214,180,90,0.15)]">
          <span className="font-display font-black text-gold text-base tracking-tighter">VR</span>
        </div>

        <div className="text-xs font-bold text-cream tracking-[0.25em] uppercase mb-1">
          VEER FOREX OBSERVATORY
        </div>
        <div className="text-[10px] text-gold tracking-widest uppercase mb-6 font-semibold">
          DHARAM VEER SINGH KIRAR
        </div>

        {/* Minimal Thin Loading Bar */}
        <div className="w-48 h-[2px] bg-obsidian-800 rounded-full overflow-hidden">
          <div className="h-full bg-gold-gradient animate-pulse w-full" />
        </div>

        <div className="mt-6 text-[9px] text-stone-500 tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
          <span>INITIALIZING FOREX OBSERVATORY // VEER SYSTEM READY</span>
        </div>
      </div>
    </div>
  );
}
