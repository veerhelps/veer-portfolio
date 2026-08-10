import React from 'react';
import { Mail, Globe, Send, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SECTION 16 — CONTACT & PARTNERSHIPS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
          CONTACT & <span className="text-gold-gradient">PARTNERSHIPS</span>
        </h2>

        <p className="max-w-2xl text-stone-400 text-sm font-light mb-12">
          Interested in Forex mentorship, prop desk consultation, or institutional research partnerships? Reach out through our official channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:dharam@vaxsa.io"
            className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-obsidian-950 border border-gold/30 text-gold group-hover:scale-110 transition">
              <Mail size={20} />
            </div>
            <div>
              <div className="font-mono text-[10px] text-stone-500">DIRECT EMAIL</div>
              <div className="font-display font-bold text-stone-100 group-hover:text-gold transition text-sm">dharam@vaxsa.io</div>
            </div>
          </a>

          <a
            href="https://vaxsa.io"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-obsidian-950 border border-gold/30 text-gold group-hover:scale-110 transition">
              <Globe size={20} />
            </div>
            <div>
              <div className="font-mono text-[10px] text-stone-500">OFFICIAL PORTAL</div>
              <div className="font-display font-bold text-stone-100 group-hover:text-gold transition text-sm">vaxsa.io</div>
            </div>
          </a>

          <a
            href="https://telegram.org"
            target="_blank"
            rel="noreferrer"
            className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 group flex items-center gap-4"
          >
            <div className="p-3 rounded-xl bg-obsidian-950 border border-gold/30 text-gold group-hover:scale-110 transition">
              <Send size={20} />
            </div>
            <div>
              <div className="font-mono text-[10px] text-stone-500">TELEGRAM DESK</div>
              <div className="font-display font-bold text-stone-100 group-hover:text-gold transition text-sm">@VaxsaForexDesk</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
