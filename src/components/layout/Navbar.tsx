import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { StatusBadge } from '../ui/StatusBadge';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'UNIVERSE', href: '#forex-market' },
    { label: 'STRENGTH', href: '#strength' },
    { label: 'SESSIONS', href: '#sessions' },
    { label: 'LIQUIDITY', href: '#liquidity' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CURRICULUM', href: '#curriculum' },
    { label: 'MACRO', href: '#macro' },
    { label: 'JOURNAL', href: '#journal' },
    { label: 'PRICING', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-obsidian-950/85 backdrop-blur-xl border-b border-gold/15 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-obsidian-900 border border-gold/40 flex items-center justify-center group-hover:border-gold transition gold-glow-sm">
            <span className="font-display font-black text-gold text-sm tracking-tighter">VX</span>
          </div>
          <div>
            <div className="font-display font-extrabold text-sm tracking-wider text-stone-100 flex items-center gap-1.5">
              VAXSA <span className="text-[10px] text-gold font-mono font-normal tracking-widest px-1.5 py-0.5 rounded bg-gold/10 border border-gold/20">FOREX</span>
            </div>
            <div className="text-[9px] font-mono text-stone-400 tracking-widest uppercase">OBSERVATORY</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5 text-[11px] font-mono tracking-widest text-stone-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-gold transition py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Terminal CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <StatusBadge label="SYSTEM ONLINE" />
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gold-gradient text-obsidian-950 font-mono font-bold text-xs hover:brightness-110 transition shadow-lg gold-glow-sm"
          >
            <span>ENTER TERMINAL</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-obsidian-900 border border-obsidian-700 text-stone-300 hover:text-gold"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-full bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold/20 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3 font-mono text-xs tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-obsidian-850 text-stone-300 hover:text-gold flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight size={14} className="text-stone-600" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <StatusBadge label="SYSTEM ONLINE" />
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-gold-gradient text-obsidian-950 font-mono font-bold text-xs"
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
