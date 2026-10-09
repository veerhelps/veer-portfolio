import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-obsidian-950 pt-16 pb-12 text-stone-400 font-sans text-xs select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-obsidian-900 border border-gold/40 flex items-center justify-center">
                <span className="font-display font-black text-gold text-xs">VR</span>
              </div>
              <div>
                <span className="font-display font-bold text-cream tracking-wider text-sm block">VEER</span>
                <span className="font-mono text-[9px] text-gold tracking-widest uppercase block">FOREX OBSERVATORY</span>
              </div>
            </div>
            <div className="font-mono text-gold text-xs font-semibold mb-1">DHARAM VEER SINGH KIRAR</div>
            <div className="font-mono text-[10px] text-stone-500 tracking-widest uppercase mb-3 font-semibold">TRADING REALITY</div>
            <p className="text-stone-400 leading-relaxed text-xs font-light">
              An educational and research observatory exploring the reality of global sovereign currency markets.
            </p>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4 uppercase">OBSERVATORY</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#hero" className="hover:text-cream transition">THE CORE</a></li>
              <li><a href="#about" className="hover:text-cream transition">OPERATOR PROFILE</a></li>
              <li><a href="#market" className="hover:text-cream transition">THE MARKET ARTIFACT</a></li>
              <li><a href="#universe" className="hover:text-cream transition">FOREX UNIVERSE</a></li>
              <li><a href="#liquidity" className="hover:text-cream transition">LIQUIDITY CONCEPTS</a></li>
            </ul>
          </div>

          {/* Education & Resources */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4 uppercase">EDUCATION & DESK</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#sessions" className="hover:text-cream transition">MARKET SESSIONS</a></li>
              <li><a href="#fundamentals" className="hover:text-cream transition">FUNDAMENTALS OF FOREX</a></li>
              <li><a href="#guide" className="hover:text-cream transition">BEGINNER GUIDE</a></li>
              <li><a href="#community" className="hover:text-cream transition">LEARNING COMMUNITY</a></li>
              <li><a href="#contact" className="hover:text-cream transition">CONTACT & INQUIRIES</a></li>
            </ul>
          </div>

          {/* Return To Top Action */}
          <div className="flex flex-col justify-between items-start md:items-end font-mono">
            <button
              onClick={scrollToTop}
              className="px-4 py-2.5 rounded-full bg-obsidian-900 border border-white/[0.1] text-stone-300 font-mono text-xs flex items-center gap-2 hover:border-gold hover:text-gold transition cursor-pointer"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={13} />
            </button>
            <div className="mt-6 md:mt-0 text-[10px] text-stone-500 text-left md:text-right font-light">
              OBSERVATORY BUILD // VEER v2.0<br />
              DHARAM VEER SINGH KIRAR
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="border-t border-white/[0.06] pt-8 pb-4">
          <div className="bg-obsidian-900/50 border border-white/[0.06] p-4.5 rounded-2xl flex items-start gap-3 text-[11px] text-stone-400 leading-relaxed">
            <ShieldAlert size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-stone-300 font-semibold uppercase tracking-wider block mb-1">
                REGULATORY & EDUCATIONAL DISCLOSURE
              </span>
              All content published by VEER FOREX OBSERVATORY is strictly for educational, analytical, and academic purposes. Foreign exchange and CFD trading carries substantial financial risk. Past performance or conceptual scenarios do not guarantee future market outcomes.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <div>© {new Date().getFullYear()} VEER FOREX OBSERVATORY · DHARAM VEER SINGH KIRAR. ALL RIGHTS RESERVED.</div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <span className="text-stone-600">EDUCATION · RESEARCH · DISCIPLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
