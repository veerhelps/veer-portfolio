import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Terminal } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link tracker
      const sections = ['hero', 'about', 'forex-market', 'liquidity', 'sessions', 'portfolio', 'journal'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveHash(`#${s}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const centerLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'UNIVERSE', href: '#universe' },
    { label: 'STRENGTH', href: '#strength' },
    { label: 'SESSIONS', href: '#sessions' },
    { label: 'LIQUIDITY', href: '#liquidity' },
    { label: 'PORTFOLIO', href: '#portfolio' },
  ];

  const moreLinks = [
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'MACRO', href: '#macro' },
    { label: 'JOURNAL', href: '#journal' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'COMMUNITY', href: '#community' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[990] flex justify-center px-2.5 sm:px-6 transition-all duration-500 ease-out ${
        scrolled ? 'pt-2.5 sm:pt-4' : 'pt-4 sm:pt-7'
      }`}
    >
      <nav
        aria-label="Observatory Navigation"
        className={`w-full max-w-6xl flex items-center justify-between border transition-all duration-300 backdrop-blur-2xl ${
          scrolled
            ? 'bg-obsidian-950/90 border-obsidian-700/80 shadow-[0_8px_32px_rgba(0,0,0,0.85)] py-2 px-3 sm:px-6 rounded-xl'
            : 'bg-obsidian-900/60 border-obsidian-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)] py-2.5 sm:py-3 px-3 sm:px-7 rounded-2xl'
        }`}
      >
        {/* LEFT: VR / VEER / FOREX */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-obsidian-950 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-300 gold-glow-sm">
            <span className="font-display font-black text-gold text-xs tracking-tight">VR</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-extrabold text-xs tracking-wider text-cream">VEER</span>
              <span className="text-[9px] font-mono text-gold px-1 py-0.5 rounded bg-gold/10 border border-gold/25 tracking-widest uppercase">
                FOREX
              </span>
            </div>
            <span className="text-[8px] font-mono text-stone-500 tracking-widest uppercase mt-0.5">
              OBSERVATORY
            </span>
          </div>
        </a>

        {/* CENTER: 6 CORE LINKS + COMPACT MORE DROPDOWN */}
        <div className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-wider text-stone-400">
          {centerLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 transition-all duration-200 hover:text-cream group ${
                  isActive ? 'text-cream font-semibold' : 'text-stone-400'
                }`}
              >
                <span className="transition-transform duration-150 inline-block group-hover:-translate-y-[1px]">
                  {link.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-gradient rounded-full" />
                )}
              </a>
            );
          })}

          {/* Compact MORE Popover */}
          <div className="relative">
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              onBlur={() => setTimeout(() => setMoreMenuOpen(false), 200)}
              className="flex items-center gap-1 px-3 py-1.5 text-stone-400 hover:text-gold transition font-mono text-[11px] tracking-wider"
              aria-expanded={moreMenuOpen}
            >
              <span>MORE</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${moreMenuOpen ? 'rotate-180 text-gold' : ''}`} />
            </button>

            {moreMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 rounded-xl bg-obsidian-950/98 border border-obsidian-700 p-2 shadow-2xl backdrop-blur-3xl animate-fadeIn font-mono text-[11px] z-50">
                {moreLinks.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    onClick={() => setMoreMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-400 hover:text-gold hover:bg-obsidian-900 transition"
                  >
                    <span>{m.label}</span>
                    <ChevronRight size={12} className="opacity-50" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: SYSTEM STATUS + ENTER TERMINAL */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-md bg-obsidian-950/80 border border-obsidian-800 text-[10px] font-mono text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
            <span>SYSTEM</span>
          </div>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cream text-obsidian-950 font-mono font-bold text-xs tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-200 shadow-md"
          >
            <span>ENTER</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-obsidian-950 border border-obsidian-800 text-stone-300 hover:text-gold transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* FULL-SCREEN EDITORIAL MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9995] bg-obsidian-950/98 backdrop-blur-3xl flex flex-col justify-between p-5 sm:p-8 md:p-12 overflow-y-auto animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-obsidian-850 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/40 flex items-center justify-center">
                <span className="font-display font-black text-gold text-xs">VR</span>
              </div>
              <div>
                <span className="font-display font-bold text-cream text-sm tracking-wider">VEER FOREX</span>
                <span className="text-[9px] font-mono text-stone-500 block">OBSERVATORY</span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-obsidian-900 border border-obsidian-800 text-stone-400 hover:text-gold"
            >
              <X size={20} />
            </button>
          </div>

          {/* Links List */}
          <div className="my-auto py-6 flex flex-col space-y-3 sm:space-y-4">
            {[...centerLinks, ...moreLinks].map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between py-1 border-b border-obsidian-900 text-stone-300 hover:text-gold transition"
              >
                <span className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                  {link.label}
                </span>
                <span className="font-mono text-xs text-stone-600 group-hover:text-gold">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-obsidian-850 pt-6 flex flex-col gap-4 font-mono text-xs">
            <div className="flex items-center justify-between text-stone-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-market animate-pulse" />
                SYSTEM ONLINE
              </span>
              <span className="text-gold">DHARAM VEER SINGH KIRAR</span>
            </div>

            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl bg-gold text-obsidian-950 font-bold tracking-wider"
            >
              ENTER TERMINAL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
