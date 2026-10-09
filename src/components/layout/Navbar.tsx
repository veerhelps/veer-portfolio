import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MARKET', href: '#market' },
    { label: 'LIQUIDITY', href: '#liquidity' },
    { label: 'SESSIONS', href: '#sessions' },
    { label: 'FUNDAMENTALS', href: '#fundamentals' },
    { label: 'BEGINNER GUIDE', href: '#guide' },
    { label: 'COMMUNITY', href: '#community' },
    { label: 'CONTACT', href: '#contact' },
  ];

  // Scroll detection & section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'about', 'market', 'universe', 'liquidity', 'sessions', 'fundamentals', 'guide', 'community', 'contact'];
      for (const s of sectionIds) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveHash(s === 'universe' ? '#market' : `#${s}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll locking and Escape key for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, { offset: -65, duration: 1.1 });
    } else {
      const y = target.getBoundingClientRect().top + window.scrollY - 65;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[990] flex justify-center px-4 sm:px-6 transition-all duration-500 ease-out ${
        scrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-6'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className={`w-full max-w-6xl flex items-center justify-between border transition-all duration-300 backdrop-blur-2xl ${
          scrolled
            ? 'bg-obsidian-950/92 border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.85)] py-2.5 px-4 sm:px-6 rounded-2xl'
            : 'bg-obsidian-950/60 border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3 px-4 sm:px-6 rounded-full'
        }`}
      >
        {/* Brand Lockup: VEER FOREX OBSERVATORY */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          data-cursor="VIEW"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-obsidian-900 border border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
            <span className="font-display font-black text-gold text-xs tracking-tight">VR</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-cream">VEER</span>
              <span className="text-[8px] font-mono text-gold px-1.5 py-0.2 rounded bg-gold/10 border border-gold/25 tracking-widest uppercase">
                OBSERVATORY
              </span>
            </div>
            <span className="text-[7.5px] font-mono text-stone-500 tracking-widest uppercase mt-0.5">
              TRADING REALITY
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-0.5 font-mono text-[11px] tracking-wider text-stone-400">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`relative px-3 py-1.5 transition-colors duration-200 hover:text-cream cursor-pointer ${
                  isActive ? 'text-cream font-semibold' : 'text-stone-400'
                }`}
                data-cursor="OPEN"
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gold rounded-full shadow-[0_0_8px_#D6B45A]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Explore CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#about');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cream text-obsidian-950 font-mono font-bold text-xs tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-200 shadow-sm cursor-pointer"
            data-cursor="OPEN"
          >
            <span>EXPLORE</span>
            <ChevronRight size={13} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-obsidian-900 border border-white/[0.08] text-stone-300 hover:text-gold transition cursor-pointer"
            aria-label="Toggle navigation menu"
            data-cursor="OPEN"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Responsive Editorial Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9995] bg-obsidian-950/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-fadeIn select-none"
        >
          {/* Mobile Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-obsidian-900 border border-gold/40 flex items-center justify-center">
                <span className="font-display font-black text-gold text-xs">VR</span>
              </div>
              <div>
                <span className="font-display font-bold text-cream text-sm tracking-wider">VEER FOREX</span>
                <span className="text-[9px] font-mono text-gold block tracking-widest">OBSERVATORY</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-obsidian-900 border border-white/[0.1] text-stone-400 hover:text-cream cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="my-auto py-8 flex flex-col space-y-3 font-mono">
            {navLinks.map((link, idx) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`group flex items-baseline justify-between py-2 border-b border-white/[0.04] transition duration-200 ${
                    isActive ? 'text-gold' : 'text-stone-300 hover:text-cream'
                  }`}
                >
                  <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-stone-600 group-hover:text-gold">
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Bottom Identity & Quick Action */}
          <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4 font-mono text-xs">
            <div className="text-center text-stone-400">
              <span className="text-gold font-semibold tracking-wider">DHARAM VEER SINGH KIRAR</span>
              <span className="block text-[10px] text-stone-500 mt-0.5">TRADING REALITY</span>
            </div>

            <button
              onClick={() => scrollTo('#about')}
              className="w-full py-3.5 rounded-full bg-cream text-obsidian-950 font-bold tracking-wider text-center hover:bg-gold transition cursor-pointer"
            >
              EXPLORE OBSERVATORY
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
