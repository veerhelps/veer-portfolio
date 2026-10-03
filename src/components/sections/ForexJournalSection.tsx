import React, { useState } from 'react';
import { forexJournal } from '../../data/forexJournal';
import { ForexTradeJournalEntry } from '../../types';
import { TradeModal } from '../ui/TradeModal';
import { ArrowUpRight, CheckCircle2, XCircle, FileText, Filter, SlidersHorizontal } from 'lucide-react';

export function ForexJournalSection() {
  const [selectedTrade, setSelectedTrade] = useState<ForexTradeJournalEntry | null>(null);
  const [pairFilter, setPairFilter] = useState<string>('ALL');
  const [sessionFilter, setSessionFilter] = useState<string>('ALL');
  const [directionFilter, setDirectionFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const filteredTrades = forexJournal.filter((trade) => {
    if (pairFilter !== 'ALL' && trade.pair !== pairFilter) return false;
    if (sessionFilter !== 'ALL' && trade.session !== sessionFilter) return false;
    if (directionFilter !== 'ALL' && trade.direction !== directionFilter) return false;
    if (statusFilter !== 'ALL' && trade.status !== statusFilter) return false;
    return true;
  });

  const availablePairs = ['ALL', ...Array.from(new Set(forexJournal.map((t) => t.pair)))];
  const availableSessions = ['ALL', 'LONDON', 'NEW YORK', 'OVERLAP'];

  return (
    <section id="journal" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
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
            SHOWING <span className="text-cream font-bold">{filteredTrades.length}</span> OF <span className="text-gold">{forexJournal.length} LOGS</span>
          </div>
        </div>

        {/* Minimalist Filter Bar: PAIR, SESSION, LONG/SHORT, WIN/LOSS */}
        <div className="bg-obsidian-900/80 border border-obsidian-800 p-4 rounded-2xl mb-8 flex flex-wrap items-center gap-4 text-xs font-mono backdrop-blur-xl">
          <div className="flex items-center gap-2 text-gold font-bold shrink-0">
            <SlidersHorizontal size={14} />
            <span>FILTER:</span>
          </div>

          {/* Outcome Filter */}
          <div className="flex items-center bg-obsidian-950 p-1 rounded-xl border border-obsidian-850">
            {(['ALL', 'WIN', 'LOSS'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-lg transition-all duration-150 ${
                  statusFilter === st
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                {st}
              </button>
            ))}
          </div>

          {/* Direction Filter */}
          <div className="flex items-center bg-obsidian-950 p-1 rounded-xl border border-obsidian-850">
            {(['ALL', 'LONG', 'SHORT'] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => setDirectionFilter(dir)}
                className={`px-2.5 py-1 rounded-lg transition-all duration-150 ${
                  directionFilter === dir
                    ? 'bg-cream text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                {dir}
              </button>
            ))}
          </div>

          {/* Session Filter */}
          <div className="flex items-center bg-obsidian-950 p-1 rounded-xl border border-obsidian-850 overflow-x-auto no-scrollbar">
            {availableSessions.map((sess) => (
              <button
                key={sess}
                onClick={() => setSessionFilter(sess)}
                className={`px-2.5 py-1 rounded-lg transition-all duration-150 whitespace-nowrap ${
                  sessionFilter === sess
                    ? 'bg-gold/20 text-gold border border-gold/40 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                {sess}
              </button>
            ))}
          </div>

          {/* Reset button if active */}
          {(pairFilter !== 'ALL' || sessionFilter !== 'ALL' || directionFilter !== 'ALL' || statusFilter !== 'ALL') && (
            <button
              onClick={() => {
                setPairFilter('ALL');
                setSessionFilter('ALL');
                setDirectionFilter('ALL');
                setStatusFilter('ALL');
              }}
              className="text-stone-500 hover:text-gold underline ml-auto text-[11px]"
            >
              RESET
            </button>
          )}
        </div>

        {/* Poster-Like Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrades.map((trade) => {
            const isWin = trade.status === 'WIN';
            const isLong = trade.direction === 'LONG';
            return (
              <div
                key={trade.id}
                onClick={() => setSelectedTrade(trade)}
                className="p-6 sm:p-7 rounded-3xl bg-obsidian-900/70 border border-obsidian-800 hover:border-gold/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between relative shadow-xl hover:shadow-[0_12px_36px_rgba(214,180,90,0.14)] hover:-translate-y-1 backdrop-blur-xl"
                data-cursor="VIEW"
              >
                <div>
                  {/* Top Poster Meta */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-stone-500 border-b border-obsidian-800 pb-3 mb-4">
                    <span className="text-gold font-bold tracking-wider">{trade.tradeNumber}</span>
                    <span>{trade.date}</span>
                  </div>

                  {/* Pair Name and Direction Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-cream group-hover:text-gold transition">
                      {trade.pair}
                    </h3>
                    <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                      isLong
                        ? 'bg-emerald-market/15 text-emerald-market border border-emerald-market/30'
                        : 'bg-coral-market/15 text-coral-market border border-coral-market/30'
                    }`}>
                      {trade.direction}
                    </span>
                  </div>

                  {/* Session and R:R Metadata */}
                  <div className="grid grid-cols-2 gap-2 my-4 font-mono text-xs">
                    <div className="bg-obsidian-950 p-2.5 rounded-xl border border-obsidian-850">
                      <span className="text-stone-500 block text-[9px]">SESSION</span>
                      <span className="text-stone-300 font-bold">{trade.session}</span>
                    </div>
                    <div className="bg-obsidian-950 p-2.5 rounded-xl border border-obsidian-850">
                      <span className="text-stone-500 block text-[9px]">R:R RATIO</span>
                      <span className="text-gold font-bold">{trade.rrRatio}</span>
                    </div>
                  </div>

                  {/* Thesis Snippet */}
                  <div className="mb-5">
                    <span className="font-mono text-[9px] text-stone-500 uppercase block mb-1">EXECUTION THESIS:</span>
                    <p className="text-xs text-stone-400 line-clamp-2 font-sans font-light leading-relaxed">
                      {trade.thesis}
                    </p>
                  </div>
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
                    <span>INSPECT AUDIT</span>
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
