import React, { useState } from 'react';
import { portfolioSummary } from '../../data/portfolioData';
import { TrendingUp, ShieldCheck, Activity } from 'lucide-react';

export function PerformanceSection() {
  const [hoveredPoint, setHoveredPoint] = useState<{ date: string; value: number; drawdown: number } | null>(null);
  const data = portfolioSummary.equityCurve;

  const width = 800;
  const height = 300;
  const padding = 40;

  const minValue = 6000000;
  const maxValue = 9000000;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.value - minValue) / (maxValue - minValue)) * (height - padding * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <section id="performance" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 06 — PERFORMANCE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              THE EQUITY <span className="text-gold-gradient">CURVE</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-right text-stone-400">
            CUMULATIVE RETURN: <span className="text-emerald-market font-bold">+34.60%</span>
          </div>
        </div>

        {/* Equity Curve SVG Chart */}
        <div className="p-6 rounded-2xl bg-obsidian-900 border border-obsidian-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-4">
            <span className="flex items-center gap-2 text-gold"><TrendingUp size={14} /> NET EQUITY GROWTH (2025 - 2026)</span>
            {hoveredPoint ? (
              <span className="text-gold font-bold">
                {hoveredPoint.date}: ₹{hoveredPoint.value.toLocaleString('en-IN')} (Drawdown: {hoveredPoint.drawdown}%)
              </span>
            ) : (
              <span>HOVER TO INSPECT MONTHLY DATA</span>
            )}
          </div>

          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
              <defs>
                <linearGradient id="equityGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D6B45A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D6B45A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#1A1D1E" strokeDasharray="4 4" />
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#1A1D1E" strokeDasharray="4 4" />

              {/* Area Fill */}
              <path d={areaD} fill="url(#equityGrad)" />

              {/* Equity Line */}
              <path d={pathD} fill="none" stroke="#D6B45A" strokeWidth="2.5" />

              {/* Data Points */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="5"
                  className="fill-obsidian-950 stroke-gold hover:r-7 transition-all cursor-pointer"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredPoint(p)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* System Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8 font-mono text-xs">
          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">TOTAL TRADES</span>
            <span className="text-stone-100 font-bold text-lg">42</span>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">WIN RATE</span>
            <span className="text-emerald-market font-bold text-lg">68.4%</span>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">PROFIT FACTOR</span>
            <span className="text-gold font-bold text-lg">2.85</span>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">MAX DRAWDOWN</span>
            <span className="text-coral-market font-bold text-lg">-6.20%</span>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">AVG WIN TRADE</span>
            <span className="text-emerald-market font-bold text-lg">₹128,400</span>
          </div>

          <div className="card-dark-surface p-4 rounded-xl border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">AVG LOSS TRADE</span>
            <span className="text-coral-market font-bold text-lg">-₹41,200</span>
          </div>
        </div>
      </div>
    </section>
  );
}
