import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface QuoteDividerProps {
  quote: string;
  subtitle?: string;
  accent?: 'gold' | 'crimson' | 'cream';
  index?: string;
}

export function EditorialQuoteDivider({
  quote,
  subtitle,
  accent = 'gold',
  index,
}: QuoteDividerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Smooth scroll-driven entrance for the headline
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0.2, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              end: 'center 50%',
              scrub: 0.6,
            },
          }
        );
      }

      // Centered accent divider line expansion
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: 'center' },
          {
            scaleX: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              end: 'center 55%',
              scrub: 0.6,
            },
          }
        );
      }

      // Subtle parallax drift on the giant background watermark
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: -15, opacity: 0.03 },
          {
            y: 15,
            opacity: 0.07,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const accentColor = accent === 'crimson' ? '#F43F5E' : accent === 'cream' ? '#FAF7F2' : '#D6B45A';

  return (
    <section
      ref={containerRef}
      id={index ? `interstitial-${index}` : undefined}
      className="relative w-full py-24 sm:py-32 md:py-36 overflow-hidden bg-[#07070A] border-y border-white/[0.08] flex flex-col items-center justify-center text-center px-4 sm:px-6 select-none"
    >
      {/* 1. Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            accent === 'crimson'
              ? 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(225, 29, 72, 0.12) 0%, transparent 80%)'
              : 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(214, 180, 90, 0.1) 0%, transparent 80%)',
        }}
      />

      {/* 2. Giant VEER OBSERVATORY Watermark (Visible behind headline) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span
          ref={watermarkRef}
          className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-white/[0.06] whitespace-nowrap uppercase will-change-transform"
        >
          VEER OBSERVATORY
        </span>
      </div>

      {/* 3. Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Interstitial Index Label */}
        {index && (
          <div
            className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5 flex items-center gap-2 font-semibold"
            style={{ color: accentColor }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                backgroundColor: accentColor,
                boxShadow: `0 0 8px ${accentColor}`,
              }}
            />
            <span>INTERSTITIAL STATEMENT // {index}</span>
          </div>
        )}

        {/* Monumental Headline */}
        <h3
          ref={textRef}
          className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-cream uppercase tracking-tight leading-[1.05] max-w-4xl break-words"
        >
          {quote}
        </h3>

        {/* Centered Accent Bar */}
        <div
          ref={lineRef}
          className="w-16 sm:w-20 h-[2px] my-5 sm:my-6 rounded-full"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 10px ${accentColor}80`,
          }}
        />

        {/* Subtitle Statement */}
        {subtitle && (
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-stone-400 uppercase font-medium max-w-2xl px-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
