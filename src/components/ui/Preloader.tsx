import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);
  const steps = ['INITIALIZING MARKET OBSERVATORY', 'LOADING DATA STRUCTURE', 'CALCULATING RISK PARAMETERS', 'SYSTEM READY'];

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1100);
    const timer3 = setTimeout(() => setStep(3), 1700);
    const timer4 = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-obsidian-950 flex flex-col items-center justify-center font-mono">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Core Sphere */}
        <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center animate-pulse-slow mb-8 gold-glow-md">
          <div className="w-8 h-8 rounded-full bg-gold-gradient animate-ping opacity-60" />
        </div>

        <div className="text-xs text-stone-400 tracking-widest mb-2">VEER / MARKET OBSERVATORY</div>
        <div className="text-sm font-semibold text-gold tracking-wider h-6 transition-all duration-300">
          {steps[step]}
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-obsidian-800 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-gold-gradient transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="mt-8 text-[10px] text-stone-400 tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-market animate-pulse" />
          <span>PORTFOLIO SYSTEM OS v4.2</span>
        </div>
      </div>
    </div>
  );
}
