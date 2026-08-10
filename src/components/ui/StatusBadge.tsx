import React from 'react';

interface StatusBadgeProps {
  label?: string;
  online?: boolean;
}

export function StatusBadge({ label = 'MARKET OBSERVATORY ● SYSTEM ONLINE', online = true }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-obsidian-900/80 text-[11px] font-mono tracking-wider text-stone-300 backdrop-blur-md">
      <span className={`w-2 h-2 rounded-full ${online ? 'bg-emerald-market shadow-[0_0_8px_#36D39A]' : 'bg-coral-market'}`} />
      <span>{label}</span>
    </div>
  );
}
