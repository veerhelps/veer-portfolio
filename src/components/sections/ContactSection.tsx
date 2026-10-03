import React from 'react';
import { Mail, Globe, Send, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">SECTION 15 — PARTNERSHIPS & CONTACT</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4 break-words">
          CONTACT & <span className="text-gold-gradient">DESK INQUIRIES</span>
        </h2>

        <p className="max-w-2xl text-stone-300 text-sm sm:text-base font-light mb-12 font-sans leading-relaxed">
          Interested in Forex mentorship application, prop desk consultation, or institutional research syndication? Reach out directly through our verified communication lines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <a
            href="mailto:dharam@veer.io"
            className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-obsidian-800 hover:border-gold/50 transition-all duration-300 group flex items-start justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-gold/30 text-gold flex items-center justify-center mb-4 group-hover:border-gold transition">
                <Mail size={18} />
              </div>
              <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">DIRECT OPERATOR EMAIL</div>
              <div className="font-display font-bold text-cream group-hover:text-gold transition text-base">dharam@veer.io</div>
            </div>
            <ArrowUpRight size={16} className="text-stone-500 group-hover:text-gold transition" />
          </a>

          <a
            href="https://veer.io"
            target="_blank"
            rel="noreferrer"
            className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-obsidian-800 hover:border-gold/50 transition-all duration-300 group flex items-start justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-gold/30 text-gold flex items-center justify-center mb-4 group-hover:border-gold transition">
                <Globe size={18} />
              </div>
              <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">OFFICIAL RESEARCH PORTAL</div>
              <div className="font-display font-bold text-cream group-hover:text-gold transition text-base">veer.io</div>
            </div>
            <ArrowUpRight size={16} className="text-stone-500 group-hover:text-gold transition" />
          </a>

          <a
            href="https://telegram.org"
            target="_blank"
            rel="noreferrer"
            className="p-6 sm:p-8 rounded-2xl bg-obsidian-900/60 border border-obsidian-800 hover:border-gold/50 transition-all duration-300 group flex items-start justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-obsidian-950 border border-gold/30 text-gold flex items-center justify-center mb-4 group-hover:border-gold transition">
                <Send size={18} />
              </div>
              <div className="text-[10px] text-stone-500 uppercase tracking-wider mb-1">TELEGRAM TRADING DESK</div>
              <div className="font-display font-bold text-cream group-hover:text-gold transition text-base">@VeerForexDesk</div>
            </div>
            <ArrowUpRight size={16} className="text-stone-500 group-hover:text-gold transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
