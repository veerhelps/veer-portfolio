import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/useTheme';
import { gsap } from 'gsap';

export function ChromaticAmbientCanvas() {
  const { activeTheme, currentSpecimen } = useTheme();
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Define rich base tint and vibrant orbs for each theme
  const getThemeAtmosphere = (id: string) => {
    switch (id) {
      case 'navy':
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #0c1424 0%, #070a14 55%, #04060a 100%)',
          orb1: 'radial-gradient(circle, rgba(30, 193, 203, 0.35) 0%, rgba(28, 28, 40, 0.6) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, rgba(15, 23, 42, 0.7) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(99, 217, 232, 0.25) 0%, transparent 65%)',
        };
      case 'burgundy':
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #1e0811 0%, #12040a 55%, #070104 100%)',
          orb1: 'radial-gradient(circle, rgba(213, 43, 50, 0.35) 0%, rgba(26, 10, 15, 0.7) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(143, 17, 24, 0.4) 0%, rgba(37, 14, 23, 0.7) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(246, 230, 234, 0.2) 0%, transparent 65%)',
        };
      case 'opal':
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #141924 0%, #0d1118 55%, #05070a 100%)',
          orb1: 'radial-gradient(circle, rgba(217, 221, 226, 0.3) 0%, rgba(71, 85, 105, 0.4) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(250, 247, 242, 0.25) 0%, rgba(30, 41, 59, 0.6) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(214, 180, 90, 0.22) 0%, transparent 65%)',
        };
      case 'cosmic':
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #181226 0%, #0f0b18 55%, #06040a 100%)',
          orb1: 'radial-gradient(circle, rgba(241, 254, 200, 0.28) 0%, rgba(35, 33, 44, 0.7) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(126, 34, 206, 0.3) 0%, rgba(48, 41, 61, 0.6) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(241, 254, 200, 0.2) 0%, transparent 65%)',
        };
      case 'violet':
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #1d1033 0%, #110920 55%, #06030c 100%)',
          orb1: 'radial-gradient(circle, rgba(210, 195, 246, 0.35) 0%, rgba(54, 37, 92, 0.7) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(109, 40, 217, 0.35) 0%, rgba(40, 23, 71, 0.7) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(210, 195, 246, 0.25) 0%, transparent 65%)',
        };
      case 'dynamic':
      default:
        return {
          bgGradient: 'radial-gradient(ellipse at 50% 0%, #14121a 0%, #0b0a10 55%, #050505 100%)',
          orb1: 'radial-gradient(circle, rgba(214, 180, 90, 0.28) 0%, rgba(35, 33, 44, 0.5) 40%, transparent 70%)',
          orb2: 'radial-gradient(circle, rgba(30, 193, 203, 0.25) 0%, rgba(26, 10, 15, 0.5) 45%, transparent 70%)',
          orb3: 'radial-gradient(circle, rgba(210, 195, 246, 0.2) 0%, transparent 65%)',
        };
    }
  };

  const currentAtmosphere = getThemeAtmosphere(currentSpecimen.id);

  // Smooth floating ambient motion
  useEffect(() => {
    if (!orb1Ref.current || !orb2Ref.current || !orb3Ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(orb1Ref.current, {
        x: '+=50',
        y: '+=35',
        duration: 9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orb2Ref.current, {
        x: '-=60',
        y: '+=45',
        duration: 11,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orb3Ref.current, {
        scale: 1.2,
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-all duration-700 ease-out"
      aria-hidden="true"
    >
      {/* Full-Screen Ambient Base Gradient (Shifts with theme) */}
      <div
        ref={bgRef}
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{ background: currentAtmosphere.bgGradient }}
      />

      {/* Primary Atmospheric Aurora (Top Right) */}
      <div
        ref={orb1Ref}
        className="absolute -top-[10%] -right-[10%] w-[75vw] max-w-[950px] h-[75vw] max-h-[950px] rounded-full blur-[130px] opacity-90 transition-all duration-700 ease-out"
        style={{ background: currentAtmosphere.orb1 }}
      />

      {/* Secondary Atmospheric Aurora (Left Mid) */}
      <div
        ref={orb2Ref}
        className="absolute top-[30%] -left-[15%] w-[70vw] max-w-[900px] h-[70vw] max-h-[900px] rounded-full blur-[140px] opacity-85 transition-all duration-700 ease-out"
        style={{ background: currentAtmosphere.orb2 }}
      />

      {/* Tertiary Atmospheric Ambient Core (Bottom Center) */}
      <div
        ref={orb3Ref}
        className="absolute -bottom-[15%] left-[20%] w-[80vw] max-w-[1000px] h-[80vw] max-h-[1000px] rounded-full blur-[150px] opacity-80 transition-all duration-700 ease-out"
        style={{ background: currentAtmosphere.orb3 }}
      />
    </div>
  );
}
