import React from 'react';
import { X, CheckCircle, AlertTriangle, Shield, TrendingUp, TrendingDown } from 'lucide-react';
import { TradeEntry } from '../../types';

interface TradeModalProps {
  trade: TradeEntry | null;
  onClose: () => void;
}

export function TradeModal({ trade, onClose }: TradeModalProps) {
  if (!trade) return null;

  const isWin = trade.status === 'WIN';

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-obsidian-900 border border-gold/30 rounded-2xl p-6 sm:p-8 text-stone-200 shadow-2xl gold-glow-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-obsidian-800 text-stone-400 hover:text-gold hover:bg-obsidian-700 transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2 font-mono text-xs text-gold">
          <span>{trade.tradeNumber}</span>
          <span>•</span>
          <span>{trade.date}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-obsidian-700 pb-6 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-stone-100 flex items-center gap-3">
              {trade.asset}
              <span className={`text-xs font-mono px-2.5 py-1 rounded ${
                trade.type === 'LONG' ? 'bg-emerald-market/20 text-emerald-market' : 'bg-coral-market/20 text-coral-market'
              }`}>
                {trade.type}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <div className="text-right">
              <div className="text-xs text-stone-400">P&L RESULT</div>
              <div className={`text-xl font-bold ${isWin ? 'text-emerald-market' : 'text-coral-market'}`}>
                {trade.pnl > 0 ? `+₹${trade.pnl.toLocaleString('en-IN')}` : `-₹${Math.abs(trade.pnl).toLocaleString('en-IN')}`}
                <span className="text-xs ml-1 font-normal">({trade.pnlPct > 0 ? `+${trade.pnlPct}%` : `${trade.pnlPct}%`})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trade Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 font-mono text-xs">
          <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
            <div className="text-stone-500 mb-1">ENTRY PRICE</div>
            <div className="text-stone-200 font-semibold">₹{trade.entryPrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
            <div className="text-stone-500 mb-1">STOP LOSS</div>
            <div className="text-coral-market font-semibold">₹{trade.stopLoss.toLocaleString('en-IN')}</div>
          </div>
          <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
            <div className="text-stone-500 mb-1">TARGET PRICE</div>
            <div className="text-emerald-market font-semibold">₹{trade.targetPrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="bg-obsidian-950 p-3 rounded-lg border border-obsidian-800">
            <div className="text-stone-500 mb-1">RISK / REWARD</div>
            <div className="text-gold font-semibold">{trade.rrRatio}</div>
          </div>
        </div>

        {/* Analytical Sections */}
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="text-xs font-mono text-gold tracking-wider mb-2 flex items-center gap-2">
              <Shield size={14} /> TRADE THESIS & CONTEXT
            </h3>
            <p className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800 text-stone-300 leading-relaxed">
              {trade.thesis}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono text-gold tracking-wider mb-2 flex items-center gap-2">
              <TrendingUp size={14} /> SETUP & EXECUTION QUALITY
            </h3>
            <div className="bg-obsidian-950 p-4 rounded-xl border border-obsidian-800 text-stone-300 leading-relaxed flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-stone-500">EXECUTION GRADE:</span>
                <span className="text-gold font-bold">{trade.executionQuality}</span>
              </div>
              <p>{trade.setupDescription}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-market/5 border border-emerald-market/20 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-emerald-market font-semibold mb-2 flex items-center gap-2">
                <CheckCircle size={14} /> WHAT WENT RIGHT
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">{trade.wentRight}</p>
            </div>

            <div className="bg-coral-market/5 border border-coral-market/20 p-4 rounded-xl">
              <h4 className="text-xs font-mono text-coral-market font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle size={14} /> WHAT WENT WRONG
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">{trade.wentWrong}</p>
            </div>
          </div>

          <div className="border-t border-obsidian-800 pt-4">
            <h3 className="text-xs font-mono text-gold tracking-wider mb-2">TAKEAWAY LESSON</h3>
            <div className="bg-gold/10 border border-gold/30 p-4 rounded-xl text-gold font-mono text-xs leading-relaxed">
              "{trade.lesson}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
