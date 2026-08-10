import React from 'react';
import { economicCalendarEvents } from '../../data/economicCalendar';
import { Calendar, Radio, AlertTriangle } from 'lucide-react';

export function MacroLayerSection() {
  return (
    <section id="macro" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 11 — MACRO ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              THE MACRO <span className="text-gold-gradient">LAYER</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400 flex items-center gap-2">
            <Radio size={14} className="text-emerald-market animate-pulse" />
            <span>EVENT RADAR ACTIVE</span>
          </div>
        </div>

        {/* Economic Events Table */}
        <div className="overflow-x-auto rounded-2xl border border-obsidian-800 bg-obsidian-950/80 backdrop-blur-md shadow-2xl font-mono text-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-obsidian-800 text-stone-400 bg-obsidian-900/90">
                <th className="py-4 px-6 font-semibold">DATE & TIME</th>
                <th className="py-4 px-6 font-semibold">CURRENCY</th>
                <th className="py-4 px-6 font-semibold">IMPORTANCE</th>
                <th className="py-4 px-6 font-semibold">ECONOMIC EVENT</th>
                <th className="py-4 px-6 font-semibold text-right">PREVIOUS</th>
                <th className="py-4 px-6 font-semibold text-right">FORECAST</th>
                <th className="py-4 px-6 font-semibold text-right">ACTUAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-850">
              {economicCalendarEvents.map((evt) => (
                <tr key={evt.id} className="hover:bg-obsidian-900/60 transition">
                  <td className="py-4 px-6 text-gold font-bold">
                    {evt.date} • {evt.timeUtc}
                  </td>
                  <td className="py-4 px-6 font-bold text-stone-200">{evt.currency}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      evt.importance === 'HIGH' ? 'bg-coral-market/20 text-coral-market border border-coral-market/30' : 'bg-gold/20 text-gold'
                    }`}>
                      {evt.importance} IMPACT
                    </span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-stone-100">{evt.title}</td>
                  <td className="py-4 px-6 text-right text-stone-400">{evt.previous}</td>
                  <td className="py-4 px-6 text-right text-stone-400">{evt.forecast}</td>
                  <td className="py-4 px-6 text-right font-bold text-emerald-market">{evt.actual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
