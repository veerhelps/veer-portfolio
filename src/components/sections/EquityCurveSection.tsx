import React, { useState, useRef, useMemo } from 'react';
import { forexPortfolioSummary } from '../../data/forexPortfolio';
import { TrendingUp, ShieldCheck, Calendar, Activity } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

type TimeRange = '1M' | '3M' | '6M' | '1Y' | 'ALL';

export function EquityCurveSection() {
  const [timeRange, setTimeRange] = useState<TimeRange>('1Y');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const rawData = forexPortfolioSummary.equityCurve;

  // Filter data according to timeRange
  const data = useMemo(() => {
    switch (timeRange) {
      case '1M':
        return rawData.slice(-2);
      case '3M':
        return rawData.slice(-4);
      case '6M':
        return rawData.slice(-7);
      case '1Y':
      case 'ALL':
      default:
        return rawData;
    }
  }, [timeRange, rawData]);

  const width = 860;
  const height = 300;
  const paddingX = 40;
  const paddingTop = 30;
  const paddingBottom = 40;

  const values = data.map((d) => d.valueUsd);
  const minValue = Math.min(...values) * 0.96;
  const maxValue = Math.max(...values) * 1.03;

  const points = useMemo(() => {
    return data.map((d, i) => {
      const x = paddingX + (i / Math.max(1, data.length - 1)) * (width - paddingX * 2);
      const y = height - paddingBottom - ((d.valueUsd - minValue) / (maxValue - minValue)) * (height - paddingTop - paddingBottom);
      return { x, y, ...d };
    });
  }, [data, minValue, maxValue]);

  const pathD = useMemo(() => {
    return points.reduce((acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`), '');
  }, [points]);

  const areaD = useMemo(() => {
    if (points.length === 0) return '';
    return `${pathD} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;
  }, [pathD, points]);

  // Animate path on scroll
  useGSAP(
    () => {
      if (!pathRef.current || !containerRef.current) return;
      const length = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });
    },
    { scope: containerRef, dependencies: [timeRange] }
  );

  const activePoint = hoveredIndex !== null ? points[hoveredIndex] : points[points.length - 1];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * width;

    // Find closest point to mouseX
    let closestIdx = 0;
    let minDiff = Infinity;
    points.forEach((p, idx) => {
      const diff = Math.abs(p.x - mouseX);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setHoveredIndex(closestIdx);
  };

  return (
    <section
      ref={containerRef}
      id="performance"
      className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Range Switcher */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">SECTION 08 — PERFORMANCE AUDIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight break-words">
              THE EQUITY <span className="text-gold-gradient">CURVE</span>
            </h2>
            <p className="text-stone-400 font-sans text-xs sm:text-sm font-light mt-2 max-w-xl">
              Empirical return trajectory without survivorship bias. Smooth exponential capital accumulation verified across 12 monthly macro cycles.
            </p>
          </div>

          {/* Time Range Filter Switcher */}
          <div className="flex items-center gap-2 bg-obsidian-950 p-1 rounded-xl border border-obsidian-800 font-mono text-xs">
            {(['1M', '3M', '6M', '1Y', 'ALL'] as TimeRange[]).map((r) => (
              <button
                key={r}
                onClick={() => {
                  setTimeRange(r);
                  setHoveredIndex(null);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  timeRange === r
                    ? 'bg-gold text-obsidian-950 font-bold shadow'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                data-cursor="OPEN"
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Interactive Chart Card */}
        <div className="p-4 sm:p-8 rounded-3xl bg-obsidian-900/80 border border-obsidian-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Top Bar Readout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs mb-6 border-b border-obsidian-850 pb-4">
            <div className="flex items-center gap-2 text-stone-400">
              <Activity size={14} className="text-gold" />
              <span className="text-gold font-bold">ALPHA TRAJECTORY</span>
              <span className="text-stone-600">//</span>
              <span className="text-stone-400">RESOLUTION: {timeRange}</span>
            </div>

            {activePoint && (
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-stone-400">{activePoint.date}</span>
                <span className="text-gold font-bold text-sm">
                  ${activePoint.valueUsd.toLocaleString('en-US')}
                </span>
                <span className={`text-[11px] ${activePoint.drawdownPct === 0 ? 'text-emerald-market' : 'text-stone-400'}`}>
                  DD: {activePoint.drawdownPct}%
                </span>
              </div>
            )}
          </div>

          {/* SVG Chart with Hover Crosshairs */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-auto select-none min-w-[540px] cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredIndex(null)}
              data-cursor="ANALYZE"
            >
              <defs>
                <linearGradient id="equityGradForex" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D6B45A" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#D6B45A" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Minimal Gridlines */}
              <line
                x1={paddingX}
                y1={height / 2}
                x2={width - paddingX}
                y2={height / 2}
                stroke="#ffffff08"
                strokeDasharray="4 4"
              />
              <line
                x1={paddingX}
                y1={paddingTop}
                x2={width - paddingX}
                y2={paddingTop}
                stroke="#ffffff08"
                strokeDasharray="4 4"
              />
              <line
                x1={paddingX}
                y1={height - paddingBottom}
                x2={width - paddingX}
                y2={height - paddingBottom}
                stroke="#ffffff12"
              />

              {/* Filled Gradient Area */}
              <path d={areaD} fill="url(#equityGradForex)" />

              {/* Animated Drawing Path */}
              <path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke="#D6B45A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Crosshair Horizontal & Vertical Lines */}
              {activePoint && hoveredIndex !== null && (
                <g>
                  {/* Vertical Guideline */}
                  <line
                    x1={activePoint.x}
                    y1={paddingTop}
                    x2={activePoint.x}
                    y2={height - paddingBottom}
                    stroke="#D6B45A"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.6"
                  />
                  {/* Horizontal Guideline */}
                  <line
                    x1={paddingX}
                    y1={activePoint.y}
                    x2={width - paddingX}
                    y2={activePoint.y}
                    stroke="#D6B45A"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.4"
                  />
                  {/* Outer Pulsing Reticle */}
                  <circle
                    cx={activePoint.x}
                    cy={activePoint.y}
                    r="8"
                    className="stroke-gold fill-none animate-ping"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                </g>
              )}

              {/* Data Nodes */}
              {points.map((p, i) => {
                const isActive = hoveredIndex === i;
                return (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={isActive ? 6 : 4}
                    className={`transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'fill-gold stroke-obsidian-950'
                        : 'fill-obsidian-950 stroke-gold hover:fill-gold'
                    }`}
                    strokeWidth="2"
                    onMouseEnter={() => setHoveredIndex(i)}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* 4 Required Core Performance Metric Cards: RETURN, WIN RATE, MAX DD, PROFIT FACTOR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 font-mono text-xs">
          <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">TOTAL RETURN</span>
            <span className="text-xl sm:text-2xl font-black text-gold">+{forexPortfolioSummary.totalReturnPct}%</span>
            <span className="text-[9px] text-stone-500 block mt-1">NET COMPOUNDED</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">WIN RATE</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-market">{forexPortfolioSummary.winRatePct}%</span>
            <span className="text-[9px] text-stone-500 block mt-1">{forexPortfolioSummary.totalTrades} EXECUTIONS</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">MAX DRAWDOWN</span>
            <span className="text-xl sm:text-2xl font-black text-coral-market">{forexPortfolioSummary.maxDrawdownPct}%</span>
            <span className="text-[9px] text-stone-500 block mt-1">STRICT 1.0% DEFENSE</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-obsidian-900 border border-obsidian-800">
            <span className="text-stone-500 block text-[9px] sm:text-[10px] uppercase">PROFIT FACTOR</span>
            <span className="text-xl sm:text-2xl font-black text-cream">{forexPortfolioSummary.profitFactor}</span>
            <span className="text-[9px] text-stone-500 block mt-1">GROSS WIN / LOSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
