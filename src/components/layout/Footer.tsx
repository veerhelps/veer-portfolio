import React from 'react';
import { ArrowUp, ShieldAlert } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-obsidian-800 bg-obsidian-950 pt-16 pb-12 text-stone-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded bg-obsidian-900 border border-gold/40 flex items-center justify-center">
                <span className="font-display font-black text-gold text-xs">VX</span>
              </div>
              <span className="font-display font-bold text-stone-200 tracking-wider text-sm">VAXSA OBSERVATORY</span>
            </div>
            <div className="font-mono text-gold text-[10px] mb-3">DHARAM VEER SINGH KIRAR</div>
            <p className="text-stone-500 leading-relaxed text-xs">
              An institutional Forex trading observatory, currency research desk, and systematic process framework.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4">NAVIGATION</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#about" className="hover:text-stone-200 transition">OPERATOR PROFILE</a></li>
              <li><a href="#forex-market" className="hover:text-stone-200 transition">GLOBAL FOREX MARKET</a></li>
              <li><a href="#strength" className="hover:text-stone-200 transition">CURRENCY STRENGTH</a></li>
              <li><a href="#sessions" className="hover:text-stone-200 transition">MARKET SESSIONS</a></li>
              <li><a href="#portfolio" className="hover:text-stone-200 transition">FOREX PORTFOLIO</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs text-gold font-semibold tracking-wider mb-4">RESOURCES</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="#curriculum" className="hover:text-stone-200 transition">VAXSA CURRICULUM</a></li>
              <li><a href="#macro" className="hover:text-stone-200 transition">ECONOMIC CALENDAR</a></li>
              <li><a href="#journal" className="hover:text-stone-200 transition">TRADE JOURNAL</a></li>
              <li><a href="#pricing" className="hover:text-stone-200 transition">MENTORSHIP PRICING</a></li>
              <li><a href="#contact" className="hover:text-stone-200 transition">CONTACT & DESK</a></li>
            </ul>
          </div>

          {/* Top Button */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-lg bg-obsidian-900 border border-gold/30 text-gold font-mono text-xs flex items-center gap-2 hover:bg-gold/10 transition gold-glow-sm"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={14} />
            </button>
            <div className="mt-6 md:mt-0 font-mono text-[10px] text-stone-600 text-left md:text-right">
              LATENCY: 8ms • SERVER: LDN-01<br />
              VAXSA OS: v5.0.0-FOREX
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="border-t border-obsidian-850 pt-8 pb-4">
          <div className="bg-obsidian-900/60 border border-obsidian-800 p-4 rounded-xl flex items-start gap-3 text-[11px] text-stone-500 leading-relaxed">
            <ShieldAlert size={18} className="text-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-stone-400 font-semibold uppercase tracking-wider block mb-1">
                IMPORTANT FOREX FINANCIAL DISCLAIMER
              </span>
              Educational and informational purposes only. Nothing on this website constitutes investment, trading or financial advice. Forex trading involves substantial risk and may not be suitable for every investor. Past performance does not guarantee future results. Conduct your own research and consider consulting a qualified financial professional.
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-obsidian-900 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-stone-600">
          <div>© {new Date().getFullYear()} VAXSA FOREX OBSERVATORY. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-400">PRIVACY POLICY</a>
            <a href="#" className="hover:text-stone-400">TERMS OF EXECUTION</a>
            <a href="#" className="hover:text-stone-400">RISK DISCLOSURE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
