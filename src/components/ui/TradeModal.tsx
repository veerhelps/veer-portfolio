import React from 'react';
import { X, CheckCircle, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import { ForexTradeJournalEntry } from '../../types';

interface TradeModalProps {
  trade: ForexTradeJournalEntry | null;
  onClose: () => void;
}

export function TradeModal({ trade, onClose }: TradeModalProps) {
  if (!trade) return null;

  const isWin = trade.status === 'WIN';

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 bg-obsidian-950/90 backdrop-blur-xl animate-fadeIn">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-obsidian-900 border border-gold/40 rounded-2xl p-4 sm:p-8 md:p-10 text-stone-200 shadow-2xl gold-glow-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg bg-obsidian-950 border border-obsidian-800 text-stone-400 hover:text-gold hover:border-gold transition z-10"
          aria-label="Close trade details"
        >
          <X size={18} />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 sm:gap-3 mb-2 font-mono text-xs text-gold pr-10 sm:pr-0">
          <span className="font-bold">{trade.tradeNumber}</span>
          <span>•</span>
          <span>{trade.date}</span>
          <span>•</span>
          <span className="text-stone-400 uppercase">{trade.session} SESSION</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-800 pb-6 mb-6">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-cream flex items-center gap-3">
              {trade.pair}
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                trade.direction === 'LONG' ? 'bg-emerald-market/20 text-emerald-market' : 'bg-coral-market/20 text-coral-market'
              }`}>
                {trade.direction}
              </span>
            </h2>
            <div className="text-xs font-mono text-stone-400 mt-1">
              RISK:REWARD RATIO: <span className="text-gold font-bold">{trade.rrRatio}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <div className="text-left sm:text-right">
              <div className="text-[10px] text-stone-400 uppercase">NET RESULT</div>
              <div className={`text-2xl font-black ${isWin ? 'text-emerald-market' : 'text-coral-market'}`}>
                {trade.pnlUsd > 0 ? `+$${trade.pnlUsd.toLocaleString('en-US')}` : `-$${Math.abs(trade.pnlUsd).toLocaleString('en-US')}`}
                <span className="text-xs ml-1 font-normal">({trade.pnlPct > 0 ? `+${trade.pnlPct}%` : `${trade.pnlPct}%`})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Execution Coordinates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
          <div className="bg-obsidian-950 p-3.5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-[10px] mb-1">ENTRY PRICE</div>
            <div className="text-cream font-bold text-sm">{trade.entryPrice}</div>
          </div>
          <div className="bg-obsidian-950 p-3.5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-[10px] mb-1">STOP LOSS</div>
            <div className="text-coral-market font-bold text-sm">{trade.stopLoss}</div>
          </div>
          <div className="bg-obsidian-950 p-3.5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-[10px] mb-1">TARGET PRICE</div>
            <div className="text-emerald-market font-bold text-sm">{trade.targetPrice}</div>
          </div>
          <div className="bg-obsidian-950 p-3.5 rounded-xl border border-obsidian-800">
            <div className="text-stone-500 text-[10px] mb-1">EXIT PRICE</div>
            <div className="text-gold font-bold text-sm">{trade.exitPrice}</div>
          </div>
        </div>

        {/* Analytical Sections as requested: THESIS, SETUP, EXECUTION, OUTCOME, LESSON */}
        <div className="space-y-5 text-sm font-sans">
          {/* THESIS */}
          <div>
            <h3 className="text-xs font-mono text-gold tracking-wider mb-1.5 flex items-center gap-2">
              <Shield size={14} /> THESIS & MACRO DRIVER
            </h3>
            <p className="bg-obsidian-950/80 p-4 rounded-xl border border-obsidian-800 text-stone-300 leading-relaxed text-xs sm:text-sm">
              {trade.thesis}
            </p>
          </div>

          {/* SETUP & EXECUTION */}
          <div>
            <h3 className="text-xs font-mono text-gold tracking-wider mb-1.5 flex items-center gap-2">
              <TrendingUp size={14} /> SETUP & EXECUTION ARCHITECTURE
            </h3>
            <p className="bg-obsidian-950/80 p-4 rounded-xl border border-obsidian-800 text-stone-300 leading-relaxed text-xs sm:text-sm">
              {trade.setupDescription}
            </p>
          </div>

          {/* OUTCOME (Went Right / Went Wrong) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-market/5 border border-emerald-market/20 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-emerald-market font-semibold mb-1.5 flex items-center gap-2">
                <CheckCircle size={14} /> WHAT WENT RIGHT
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">{trade.wentRight}</p>
            </div>

            <div className="bg-coral-market/5 border border-coral-market/20 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-coral-market font-semibold mb-1.5 flex items-center gap-2">
                <AlertTriangle size={14} /> WHAT WENT WRONG
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed font-sans">{trade.wentWrong}</p>
            </div>
          </div>

          {/* LESSON */}
          <div className="border-t border-obsidian-800 pt-4">
            <h3 className="text-xs font-mono text-gold tracking-wider mb-1.5">LESSON & PRINCIPLE</h3>
            <div className="bg-gold/10 border border-gold/30 p-4 rounded-xl text-gold font-mono text-xs leading-relaxed">
              "{trade.lesson}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
