import React, { useState, useRef } from 'react';
import { forexPortfolioSummary } from '../../data/forexPortfolio';
import { TrendingUp, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export function EquityCurveSection() {
  const [hoveredPoint, setHoveredPoint] = useState<{ date: string; valueUsd: number; drawdownPct: number } | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const data = forexPortfolioSummary.equityCurve;
  const width = 860;
  const height = 300;
  const padding = 35;

  const minValue = 80000;
  const maxValue = 130000;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.valueUsd - minValue) / (maxValue - minValue)) * (height - padding * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  useGSAP(
    () => {
      if (!pathRef.current || !containerRef.current) return;
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="performance" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 08 — PERFORMANCE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight">
              THE EQUITY <span className="text-gold-gradient">CURVE</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-left sm:text-right text-stone-400">
            NET ALPHA: <span className="text-emerald-market font-bold">+{forexPortfolioSummary.totalReturnPct}%</span>
          </div>
        </div>

        {/* Minimalist Chart Card */}
        <div className="p-4 sm:p-8 rounded-2xl bg-obsidian-900 border border-obsidian-800 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-stone-400 mb-6">
            <span className="flex items-center gap-2 text-gold">
              <TrendingUp size={15} /> INSTITUTIONAL CAPITAL ACCUMULATION
            </span>
            {hoveredPoint ? (
              <span className="text-gold font-bold text-[11px] sm:text-xs">
                {hoveredPoint.date}: ${hoveredPoint.valueUsd.toLocaleString('en-US')} (DD: {hoveredPoint.drawdownPct}%)
              </span>
            ) : (
              <span className="text-stone-500 text-[10px] sm:text-xs">HOVER TO INSPECT MONTHLY RESOLUTION</span>
            )}
          </div>

          <div className="w-full overflow-x-auto no-scrollbar">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none min-w-[500px]">
              <defs>
                <linearGradient id="equityGradForex" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D6B45A" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#D6B45A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Minimalist Gridlines */}
              <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#1A1A1A" strokeDasharray="3 3" />
              <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#1A1A1A" strokeDasharray="3 3" />
              <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#222222" />

              {/* Filled Area */}
              <path d={areaD} fill="url(#equityGradForex)" />

              {/* Animated Drawing Path */}
              <path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke="#D6B45A"
                strokeWidth="2.5"
              />

              {/* Data Interactive Nodes */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="4.5"
                  className="fill-obsidian-950 stroke-gold hover:r-7 transition-all cursor-pointer"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredPoint(p)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* 5 Core Statistics as specified */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8 font-mono text-xs">
          <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">WIN RATE</span>
            <span className="text-emerald-market font-bold text-lg">{forexPortfolioSummary.winRatePct}%</span>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">AVG WIN</span>
            <span className="text-cream font-bold text-lg">+$1,420</span>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">AVG LOSS</span>
            <span className="text-coral-market font-bold text-lg">-$490</span>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[10px]">PROFIT FACTOR</span>
            <span className="text-gold font-bold text-lg">{forexPortfolioSummary.profitFactor}</span>
          </div>

          <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800 col-span-2 sm:col-span-1">
            <span className="text-stone-500 block text-[10px]">MAX DRAWDOWN</span>
            <span className="text-coral-market font-bold text-lg">{forexPortfolioSummary.maxDrawdownPct}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
