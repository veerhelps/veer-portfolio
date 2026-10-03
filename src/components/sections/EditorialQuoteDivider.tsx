import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface QuoteDividerProps {
  quote: string;
  subtitle?: string;
  accent?: 'gold' | 'crimson' | 'cream';
  index?: string;
}

export function EditorialQuoteDivider({ quote, subtitle, accent = 'gold', index }: QuoteDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!textRef.current || !containerRef.current) return;

      gsap.fromTo(
        textRef.current,
        { opacity: 0.15, y: 40, letterSpacing: '0.05em' },
        {
          opacity: 1,
          y: 0,
          letterSpacing: '-0.02em',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'center 45%',
            scrub: 0.8,
          },
        }
      );

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: 'left' },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'center 50%',
              scrub: 0.8,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const accentTextClass =
    accent === 'crimson' ? 'text-crimson' : accent === 'cream' ? 'text-cream' : 'text-gold';
  const accentBgClass =
    accent === 'crimson' ? 'bg-crimson/60' : accent === 'cream' ? 'bg-cream/40' : 'bg-gold/60';

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-transparent border-t border-white/[0.08] flex flex-col items-center justify-center text-center px-4 sm:px-6 select-none"
    >
      {/* Background Micro Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="font-display font-black text-8xl sm:text-9xl tracking-tighter text-white whitespace-nowrap">
          VEER OBSERVATORY
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {index && (
          <div className="font-mono text-[10px] text-stone-500 tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${accent === 'crimson' ? 'bg-crimson' : 'bg-gold'}`} />
            <span>INTERSTITIAL STATEMENT // {index}</span>
          </div>
        )}

        <h3
          ref={textRef}
          className="font-display font-black text-2xl sm:text-5xl md:text-6xl text-cream uppercase tracking-tight leading-tight max-w-4xl break-words"
        >
          {quote}
        </h3>

        <div ref={lineRef} className={`w-24 h-[1.5px] my-6 ${accentBgClass}`} />

        {subtitle && (
          <p className="font-mono text-xs sm:text-sm tracking-widest text-stone-400 uppercase">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
