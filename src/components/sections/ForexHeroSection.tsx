import React, { useRef, useEffect } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ForexHeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const supportingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ambientAuraRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle Mouse Parallax Coordinates (Restrained: max ±16px)
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 20;
      targetY = (e.clientY / innerHeight - 0.5) * 14;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (ambientAuraRef.current) {
        ambientAuraRef.current.style.transform = `translate(${currentX * 1.2}px, ${currentY * 1.2}px)`;
      }
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translate(${currentX * 0.3}px, ${currentY * 0.3}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ambient Dust Motes Canvas (2D ultra-lightweight, champagne tones)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.1 + 0.4,
      speedY: Math.random() * 0.18 + 0.06,
      speedX: (Math.random() - 0.5) * 0.1,
      alpha: Math.random() * 0.2 + 0.05,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 180, 90, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP Choreographed Entrance Animation
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        quoteRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, delay: 0.15 }
      )
        .fromTo(
          firstNameRef.current,
          { opacity: 0, y: 40, letterSpacing: '-0.06em' },
          { opacity: 1, y: 0, letterSpacing: '-0.035em', duration: 1.1 },
          '-=0.7'
        )
        .fromTo(
          lastNameRef.current,
          { opacity: 0, y: 40, letterSpacing: '-0.06em' },
          { opacity: 1, y: 0, letterSpacing: '-0.035em', duration: 1.1 },
          '-=0.85'
        )
        .fromTo(
          supportingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );

      // Subtle scroll parallax on exit
      if (headlineRef.current && containerRef.current) {
        gsap.to(headlineRef.current, {
          y: 70,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-[100dvh] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden bg-transparent flex flex-col justify-center select-none"
    >
      {/* Atmospheric Ambient Radial Light Bloom */}
      <div
        ref={ambientAuraRef}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] sm:w-[800px] h-[500px] sm:h-[650px] rounded-full blur-[150px] pointer-events-none -z-20 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(214, 180, 90, 0.08) 0%, rgba(26, 10, 15, 0.12) 50%, transparent 75%)',
        }}
      />

      {/* Ambient Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-60"
      />

      {/* Faint Architectural Hairline Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:5rem_5rem] -z-30 pointer-events-none" />

      {/* Main Viewport-Fitted Editorial Composition */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full my-auto flex flex-col justify-center">
        {/* Editorial Kicker */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-gold via-gold/60 to-transparent" />
          <span className="font-mono text-[10px] sm:text-xs text-gold uppercase tracking-[0.28em] font-semibold">
            VEER FOREX OBSERVATORY
          </span>
        </div>

        {/* Editorial Statement: "WHILE OTHERS SELL ILLUSIONS," */}
        <div className="mb-2 sm:mb-3">
          <p
            ref={quoteRef}
            className="font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl text-stone-300 font-light tracking-wide"
          >
            "While others sell illusions,"
          </p>
        </div>

        {/* Monumental Hero Identity: DHARAM VEER SINGH KIRAR */}
        <div ref={headlineRef} className="will-change-transform">
          <h1 className="font-display font-black tracking-[-0.035em] leading-[0.9] select-none text-cream text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] my-2 sm:my-3">
            <span
              ref={firstNameRef}
              className="block will-change-transform text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            >
              DHARAM VEER
            </span>
            <span
              ref={lastNameRef}
              className="block mt-1 sm:mt-2 will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-stone-300 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            >
              SINGH KIRAR
            </span>
          </h1>
        </div>

        {/* Brand Positioning: VEER · TRADING REALITY */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-[0.26em] text-gold uppercase mt-3 sm:mt-4 font-semibold">
          <span>VEER</span>
          <span className="text-stone-600">·</span>
          <span className="text-cream/90 font-medium">TRADING REALITY</span>
        </div>

        {/* Supporting Description: Clean, reality-based financial education */}
        <div ref={supportingRef} className="will-change-transform mt-3 sm:mt-4">
          <p className="max-w-xl text-stone-400 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed">
            Stop learning useless retail noise. VEER focuses on clear understanding of the Forex market, disciplined thinking, and reality-based financial education.
          </p>
        </div>

        {/* Clean Primary & Secondary CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 will-change-transform">
          <a
            href="#about"
            className="px-7 py-3 sm:py-3.5 rounded-full bg-cream text-obsidian-950 font-mono font-bold text-xs sm:text-sm tracking-wider hover:bg-gold hover:text-obsidian-950 transition-all duration-300 shadow-[0_4px_24px_rgba(250,247,242,0.18)] flex items-center gap-2 group"
            data-cursor="OPEN"
          >
            <span>EXPLORE FOREX</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#guide"
            className="px-7 py-3 sm:py-3.5 rounded-full bg-obsidian-950/70 border border-stone-800 hover:border-gold/60 text-stone-300 hover:text-cream font-mono font-medium text-xs sm:text-sm tracking-wider transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
            data-cursor="OPEN"
          >
            <span>BEGINNER GUIDE</span>
            <BookOpen size={14} className="text-gold/80 group-hover:text-gold transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
