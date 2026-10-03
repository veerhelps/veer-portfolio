import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Terminal, Search } from 'lucide-react';

interface NavbarProps {
  onOpenCommand?: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'watching', 'universe', 'liquidity', 'portfolio', 'performance', 'journal', 'macro', 'curriculum', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveHash(`#${s}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'MARKET', href: '#universe' },
    { label: 'LIQUIDITY', href: '#liquidity' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'JOURNAL', href: '#journal' },
  ];

  const secondaryLinks = [
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'MACRO', href: '#macro' },
    { label: 'STRENGTH', href: '#strength' },
    { label: 'SESSIONS', href: '#sessions' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[990] flex justify-center px-3 sm:px-6 transition-all duration-300 ease-out ${
        scrolled ? 'pt-2 sm:pt-3' : 'pt-4 sm:pt-6'
      }`}
    >
      <nav
        aria-label="Observatory Navigation"
        className={`w-full max-w-6xl flex items-center justify-between border transition-all duration-300 backdrop-blur-2xl ${
          scrolled
            ? 'bg-obsidian-950/92 border-obsidian-750/90 shadow-[0_12px_36px_rgba(0,0,0,0.85)] py-2 px-3 sm:px-6 rounded-xl'
            : 'bg-obsidian-900/65 border-obsidian-800/60 shadow-[0_4px_24px_rgba(0,0,0,0.45)] py-2.5 sm:py-3.5 px-3 sm:px-7 rounded-2xl'
        }`}
      >
        {/* LEFT: VEER FOREX BRAND */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0" data-cursor="VIEW">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-obsidian-950 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-300 gold-glow-sm">
            <span className="font-display font-black text-gold text-xs tracking-tight">VR</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-cream">VEER</span>
              <span className="text-[9px] font-mono text-gold px-1 py-0.5 rounded bg-gold/10 border border-gold/25 tracking-widest uppercase">
                FOREX
              </span>
            </div>
            <span className="text-[7.5px] sm:text-[8px] font-mono text-stone-500 tracking-widest uppercase mt-0.5">
              OBSERVATORY
            </span>
          </div>
        </a>

        {/* CENTER: COMPACT PRIMARY LINKS + MORE POPOVER */}
        <div className="hidden lg:flex items-center gap-1 font-mono text-[11px] tracking-wider text-stone-400">
          {primaryLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 transition-all duration-200 hover:text-cream group ${
                  isActive ? 'text-cream font-semibold' : 'text-stone-400'
                }`}
                data-cursor="OPEN"
              >
                <span className="transition-transform duration-150 inline-block group-hover:-translate-y-[1px]">
                  {link.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold rounded-full shadow-[0_0_8px_#D6B45A]" />
                )}
              </a>
            );
          })}

          {/* MORE Popover */}
          <div className="relative">
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              onBlur={() => setTimeout(() => setMoreMenuOpen(false), 200)}
              className="flex items-center gap-1 px-3 py-1.5 text-stone-400 hover:text-gold transition font-mono text-[11px] tracking-wider"
              aria-expanded={moreMenuOpen}
              data-cursor="OPEN"
            >
              <span>MORE</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${moreMenuOpen ? 'rotate-180 text-gold' : ''}`} />
            </button>

            {moreMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-obsidian-950/98 border border-obsidian-700 p-2 shadow-2xl backdrop-blur-3xl animate-fadeIn font-mono text-[11px] z-50">
                {secondaryLinks.map((m) => (
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

        {/* RIGHT: COMMAND SHORTCUT + STATUS + ENTER */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Keyboard Command Shortcut Button */}
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-950/90 border border-obsidian-800 text-stone-400 hover:text-gold hover:border-gold/40 font-mono text-[10px] transition"
              title="Open Command Menu (/)"
              data-cursor="OPEN"
            >
              <Terminal size={12} className="text-gold" />
              <span className="hidden sm:inline">CMD</span>
              <kbd className="px-1 py-0.2 rounded bg-obsidian-900 border border-obsidian-750 text-[9px] text-stone-400">
                /
              </kbd>
            </button>
          )}

          {/* ONLINE INDICATOR */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-obsidian-950/80 border border-obsidian-800 text-[10px] font-mono text-stone-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-market animate-pulse" />
            <span className="text-emerald-market font-bold">ONLINE</span>
          </div>

          {/* ENTER CTA */}
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-cream text-obsidian-950 font-mono font-bold text-xs tracking-wider hover:bg-gold hover:text-obsidian-950 transition duration-200 shadow-md"
            data-cursor="OPEN"
          >
            <span>ENTER</span>
            <ChevronRight size={13} />
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-obsidian-950 border border-obsidian-800 text-stone-300 hover:text-gold transition"
            aria-label="Toggle navigation menu"
            data-cursor="OPEN"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN EDITORIAL MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9995] bg-obsidian-950/98 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-8 md:p-12 overflow-y-auto animate-fadeIn">
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
            {[...primaryLinks, ...secondaryLinks].map((link, idx) => (
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

            <div className="grid grid-cols-2 gap-3">
              {onOpenCommand && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommand();
                  }}
                  className="py-3 rounded-xl bg-obsidian-900 border border-obsidian-800 text-stone-300 font-bold tracking-wider flex items-center justify-center gap-2"
                >
                  <Terminal size={14} className="text-gold" />
                  <span>COMMAND</span>
                </button>
              )}
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 rounded-xl bg-gold text-obsidian-950 font-bold tracking-wider text-center"
              >
                ENTER TERMINAL
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
