import React, { useState } from 'react';
import { forexJournal } from '../../data/forexJournal';
import { ForexTradeJournalEntry } from '../../types';
import { TradeModal } from '../ui/TradeModal';
import { ArrowUpRight, CheckCircle2, XCircle, FileText } from 'lucide-react';

export function ForexJournalSection() {
  const [selectedTrade, setSelectedTrade] = useState<ForexTradeJournalEntry | null>(null);

  return (
    <section id="journal" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 09 — AUDITED JOURNAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight break-words">
              THE <span className="text-gold-gradient">JOURNAL</span>
            </h2>
            <p className="text-stone-400 font-sans text-sm font-light mt-2 max-w-xl">
              Every position logged as an empirical case study. Transparent thesis verification, risk parameters, and psychological execution audits.
            </p>
          </div>

          <div className="font-mono text-xs text-stone-400">
            TOTAL CASE STUDIES: <span className="text-cream font-bold">{forexJournal.length} LOGGED</span>
          </div>
        </div>

        {/* Poster-Like Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {forexJournal.map((trade) => {
            const isWin = trade.status === 'WIN';
            const isLong = trade.direction === 'LONG';
            return (
              <div
                key={trade.id}
                onClick={() => setSelectedTrade(trade)}
                className="p-5 sm:p-7 rounded-2xl bg-obsidian-900/70 border border-obsidian-800 hover:border-gold/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between relative shadow-xl hover:shadow-[0_8px_30px_rgba(214,180,90,0.12)]"
              >
                <div>
                  {/* Top Poster Meta */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-stone-500 border-b border-obsidian-800 pb-3 mb-4">
                    <span className="text-gold font-bold">{trade.tradeNumber}</span>
                    <span>{trade.date}</span>
                  </div>

                  {/* Pair Name and Direction Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-cream group-hover:text-gold transition">
                      {trade.pair}
                    </h3>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                      isLong ? 'bg-emerald-market/15 text-emerald-market' : 'bg-coral-market/15 text-coral-market'
                    }`}>
                      {trade.direction}
                    </span>
                  </div>

                  {/* Session and R:R Metadata */}
                  <div className="grid grid-cols-2 gap-2 my-4 font-mono text-xs">
                    <div className="bg-obsidian-950 p-2.5 rounded-lg border border-obsidian-850">
                      <span className="text-stone-500 block text-[9px]">SESSION</span>
                      <span className="text-stone-300 font-bold">{trade.session}</span>
                    </div>
                    <div className="bg-obsidian-950 p-2.5 rounded-lg border border-obsidian-850">
                      <span className="text-stone-500 block text-[9px]">R:R RATIO</span>
                      <span className="text-gold font-bold">{trade.rrRatio}</span>
                    </div>
                  </div>

                  {/* Thesis Snippet */}
                  <p className="text-xs text-stone-400 line-clamp-2 font-sans font-light leading-relaxed mb-6">
                    {trade.thesis}
                  </p>
                </div>

                {/* Bottom Result & Inspection Fragment */}
                <div className="border-t border-obsidian-850 pt-4 flex items-center justify-between font-mono">
                  <div>
                    <span className="text-stone-500 block text-[9px] uppercase">RESULT</span>
                    <span className={`text-xl font-black ${isWin ? 'text-emerald-market' : 'text-coral-market'}`}>
                      {trade.pnlUsd > 0 ? `+$${trade.pnlUsd.toLocaleString('en-US')}` : `-$${Math.abs(trade.pnlUsd).toLocaleString('en-US')}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gold group-hover:translate-x-1 transition-transform font-bold">
                    <span>INSPECT</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal View */}
        {selectedTrade && (
          <TradeModal
            trade={selectedTrade}
            onClose={() => setSelectedTrade(null)}
          />
        )}
      </div>
    </section>
  );
}
