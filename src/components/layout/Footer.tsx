import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-obsidian-900 bg-obsidian-950 pt-16 pb-12 text-stone-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-gold/40 flex items-center justify-center">
                <span className="font-display font-black text-gold text-xs">VX</span>
              </div>
              <span className="font-display font-bold text-cream tracking-wider text-sm">VAXSA OBSERVATORY</span>
            </div>
            <div className="font-mono text-gold text-xs font-semibold mb-3">DHARAM VEER SINGH KIRAR</div>
            <p className="text-stone-500 leading-relaxed text-xs">
              An institutional Forex trading observatory, currency research desk, and reality-based execution framework.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4">OBSERVATORY</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#hero" className="hover:text-cream transition">THE POSTER HERO</a></li>
              <li><a href="#about" className="hover:text-cream transition">OPERATOR PROFILE</a></li>
              <li><a href="#watching" className="hover:text-cream transition">THE OBSERVATORY EYE</a></li>
              <li><a href="#forex-market" className="hover:text-cream transition">FOREX UNIVERSE</a></li>
              <li><a href="#strength" className="hover:text-cream transition">CURRENCY STRENGTH</a></li>
              <li><a href="#sessions" className="hover:text-cream transition">GLOBAL SESSIONS</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4">INTEL & DESK</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#liquidity" className="hover:text-cream transition">LIQUIDITY FLOW</a></li>
              <li><a href="#portfolio" className="hover:text-cream transition">THE PORTFOLIO</a></li>
              <li><a href="#performance" className="hover:text-cream transition">THE EQUITY CURVE</a></li>
              <li><a href="#journal" className="hover:text-cream transition">TRADE JOURNAL</a></li>
              <li><a href="#macro" className="hover:text-cream transition">MACRO LAYER & RADAR</a></li>
              <li><a href="#curriculum" className="hover:text-cream transition">CURRICULUM & PRICING</a></li>
            </ul>
          </div>

          {/* Status & Latency */}
          <div className="flex flex-col justify-between items-start md:items-end font-mono">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-lg bg-obsidian-900 border border-obsidian-700 text-stone-300 font-mono text-xs flex items-center gap-2 hover:border-gold hover:text-gold transition"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={13} />
            </button>
            <div className="mt-6 md:mt-0 text-[10px] text-stone-600 text-left md:text-right">
              LATENCY: 8MS // GATEWAY: LDN-01<br />
              ENGINE: THREE.JS + GSAP 3.15<br />
              VAXSA OS: v5.2-FOREX
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="border-t border-obsidian-850 pt-8 pb-4">
          <div className="bg-obsidian-900/40 border border-obsidian-850 p-4 rounded-xl flex items-start gap-3 text-[11px] text-stone-500 leading-relaxed">
            <ShieldAlert size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-stone-400 font-semibold uppercase tracking-wider block mb-1">
                REGULATORY & MARKET RISK DISCLOSURE
              </span>
              All content published by VAXSA FOREX OBSERVATORY is strictly for educational and analytical purposes. Foreign exchange and CFD trading carries substantial financial risk and can result in losses exceeding initial capital deposits. Verify independent financial advice before committing speculative risk capital.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-obsidian-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-stone-600">
          <div>© {new Date().getFullYear()} VAXSA FOREX OBSERVATORY • DHARAM VEER SINGH KIRAR.</div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-stone-400">PRIVACY PROTOCOL</a>
            <a href="#" className="hover:text-stone-400">TERMS OF EXECUTION</a>
            <a href="#" className="hover:text-stone-400">RISK DISCLOSURE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
