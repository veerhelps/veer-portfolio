import React, { useState } from 'react';
import { tradeJournal } from '../../data/tradeJournal';
import { TradeEntry } from '../../types';
import { TradeModal } from '../ui/TradeModal';
import { Calendar, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';

export function JournalSection() {
  const [selectedTrade, setSelectedTrade] = useState<TradeEntry | null>(null);

  return (
    <section id="journal" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 09 — EXECUTION LOGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              TRADING <span className="text-gold-gradient">JOURNAL</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400">
            TOTAL LOGGED TRADES: <span className="text-gold font-bold">{tradeJournal.length}</span>
          </div>
        </div>

        {/* Timeline Grid of Trade Entries */}
        <div className="space-y-4">
          {tradeJournal.map((trade) => {
            const isWin = trade.status === 'WIN';
            return (
              <div
                key={trade.id}
                onClick={() => setSelectedTrade(trade)}
                className="p-6 rounded-2xl bg-obsidian-950 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl border ${
                    isWin ? 'bg-emerald-market/10 border-emerald-market/30 text-emerald-market' : 'bg-coral-market/10 border-coral-market/30 text-coral-market'
                  }`}>
                    {isWin ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-gold mb-1">
                      <span>{trade.tradeNumber}</span>
                      <span>•</span>
                      <span>{trade.date}</span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-stone-100 group-hover:text-gold transition flex items-center gap-2">
                      {trade.asset}
                      <span className={`text-xs font-mono font-normal px-2 py-0.5 rounded ${
                        trade.type === 'LONG' ? 'bg-emerald-market/20 text-emerald-market' : 'bg-coral-market/20 text-coral-market'
                      }`}>
                        {trade.type}
                      </span>
                    </h3>

                    <p className="text-xs text-stone-400 mt-1 line-clamp-1 font-sans">
                      {trade.thesis}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8 font-mono text-xs border-t md:border-t-0 border-obsidian-850 pt-4 md:pt-0">
                  <div className="text-left md:text-right">
                    <span className="text-stone-500 block text-[10px]">RISK / REWARD</span>
                    <span className="text-stone-200 font-semibold">{trade.rrRatio}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-stone-500 block text-[10px]">P&L RESULT</span>
                    <span className={`text-lg font-bold ${isWin ? 'text-emerald-market' : 'text-coral-market'}`}>
                      {trade.pnl > 0 ? `+₹${trade.pnl.toLocaleString('en-IN')}` : `-₹${Math.abs(trade.pnl).toLocaleString('en-IN')}`}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-obsidian-900 border border-obsidian-700 flex items-center justify-center text-stone-500 group-hover:text-gold group-hover:border-gold transition">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trade Detail Overlay Modal */}
        <TradeModal trade={selectedTrade} onClose={() => setSelectedTrade(null)} />
      </div>
    </section>
  );
}
