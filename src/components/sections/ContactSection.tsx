import React from 'react';
import { Mail, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { contactConfig } from '../../data/contactConfig';

function InstagramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-transparent border-t border-white/[0.08] relative select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">09 — VERIFIED CONTACT CHANNELS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4">
            CONTACT & <span className="text-gold-gradient">INQUIRIES.</span>
          </h2>

          <p className="max-w-2xl text-stone-300 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed">
            {contactConfig.subheading}
          </p>
        </div>

        {/* 4 Clean Channel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 font-mono text-xs">
          {contactConfig.channels.map((channel) => {
            const isInstagram = channel.category === 'INSTAGRAM';
            const isTelegram = channel.category === 'TELEGRAM';
            const isDiscord = channel.category === 'DISCORD';

            return (
              <a
                key={channel.id}
                href={channel.url}
                target={channel.category === 'EMAIL' ? '_self' : '_blank'}
                rel="noreferrer"
                className="p-6 rounded-3xl bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-white/[0.08] hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between shadow-xl cursor-pointer"
                data-cursor="OPEN"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-obsidian-950 border border-white/[0.08] text-gold flex items-center justify-center group-hover:border-gold/50 transition">
                      {isInstagram ? (
                        <InstagramIcon size={20} className="text-gold" />
                      ) : isTelegram ? (
                        <Send size={20} className="text-cyan-highlight" />
                      ) : isDiscord ? (
                        <MessageSquare size={20} className="text-opal-silver" />
                      ) : (
                        <Mail size={20} className="text-cream" />
                      )}
                    </div>
                    <ArrowUpRight size={16} className="text-stone-500 group-hover:text-gold transition-colors" />
                  </div>

                  <div className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">
                    {channel.name}
                  </div>
                  <div className="font-display font-bold text-cream group-hover:text-gold transition text-lg tracking-tight mb-2">
                    {channel.handle}
                  </div>

                  <p className="text-stone-400 font-sans text-xs font-light leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.05] text-[10px] text-gold font-semibold uppercase tracking-wider flex items-center gap-1">
                  <span>CONNECT CHANNEL</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
