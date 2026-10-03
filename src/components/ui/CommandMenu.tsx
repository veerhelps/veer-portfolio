import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, ArrowRight, CornerDownLeft, X, Shield, Globe, Layers, BarChart3, BookOpen, Clock, HeartHandshake, Eye } from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  category: string;
  targetId: string;
  icon: React.ReactNode;
  hint: string;
}

const commands: CommandItem[] = [
  { id: 'hero', title: 'OBSERVATORY HEADQUARTERS', category: 'OVERVIEW', targetId: 'hero', icon: <Terminal size={14} />, hint: 'Dharam Veer Singh Kirar' },
  { id: 'about', title: 'OPERATOR PROFILE & PHILOSOPHY', category: 'IDENTITY', targetId: 'about', icon: <Shield size={14} />, hint: 'Discipline & Statistical Reality' },
  { id: 'watching', title: 'EVERY CURRENCY HAS A STORY', category: 'CURRENCY', targetId: 'watching', icon: <Eye size={14} />, hint: 'G8 Sovereign Currency Artifact' },
  { id: 'universe', title: 'THE FOREX UNIVERSE', category: 'MARKET', targetId: 'universe', icon: <Globe size={14} />, hint: 'Majors, Crosses, & Metals Constellation' },
  { id: 'strength', title: 'CURRENCY STRENGTH MATRIX', category: 'STRENGTH', targetId: 'strength', icon: <BarChart3 size={14} />, hint: '3D Relative Power Spectrum' },
  { id: 'sessions', title: 'THE MARKET CLOCK & SESSIONS', category: 'CHRONOLOGY', targetId: 'sessions', icon: <Clock size={14} />, hint: 'London / NY Overlap & Volatility' },
  { id: 'liquidity', title: 'LIQUIDITY FLOW FIELD', category: 'ORDER FLOW', targetId: 'liquidity', icon: <Layers size={14} />, hint: 'BSL, SSL & Displacement Imbalances' },
  { id: 'portfolio', title: 'PORTFOLIO & LIVE POSITIONS', category: 'EXECUTION', targetId: 'portfolio', icon: <BarChart3 size={14} />, hint: 'Audited Metric Matrix & Floating Tiles' },
  { id: 'performance', title: 'THE EQUITY CURVE', category: 'METRICS', targetId: 'performance', icon: <BarChart3 size={14} />, hint: 'Institutional Capital Trajectory' },
  { id: 'journal', title: 'TRADE JOURNAL & CASE STUDIES', category: 'AUDIT', targetId: 'journal', icon: <BookOpen size={14} />, hint: 'Execution Thesis & Lesson Logs' },
  { id: 'macro', title: 'THE MACRO LAYER & EVENT RADAR', category: 'FUNDAMENTALS', targetId: 'macro', icon: <Globe size={14} />, hint: 'Central Banks & Scheduled Catalysts' },
  { id: 'psychology', title: 'TRADING PSYCHOLOGY', category: 'MINDSET', targetId: 'psychology', icon: <Shield size={14} />, hint: 'Discipline, Patience & Impulse Control' },
  { id: 'curriculum', title: 'VEER CURRICULUM ARCHITECTURE', category: 'EDUCATION', targetId: 'curriculum', icon: <BookOpen size={14} />, hint: '01 Foundations to 08 Psychology' },
  { id: 'contact', title: 'DESK INQUIRY & CONTACT', category: 'TERMINAL', targetId: 'contact', icon: <HeartHandshake size={14} />, hint: 'Direct Operational Communication' },
];

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.hint.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleNavigate = (targetId: string) => {
    onClose();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleNavigate(filtered[selectedIndex].targetId);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-obsidian-950/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-obsidian-900 border border-gold/40 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden gold-glow-md flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-obsidian-800 bg-obsidian-950/90">
          <Terminal size={18} className="text-gold shrink-0 animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section or keyword to jump... (e.g. Liquidity, Journal, Portfolio)"
            className="w-full bg-transparent text-cream placeholder-stone-500 font-mono text-xs sm:text-sm focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-stone-500 hover:text-stone-300 p-1"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          ) : (
            <span className="font-mono text-[10px] text-stone-500 border border-obsidian-750 px-1.5 py-0.5 rounded">
              ESC
            </span>
          )}
        </div>

        {/* Section Commands List */}
        <div className="overflow-y-auto divide-y divide-obsidian-850/60 p-2 font-mono text-xs">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-stone-500 font-mono text-xs">
              NO OBSERVATORY SECTIONS MATCHING "{query.toUpperCase()}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => handleNavigate(cmd.targetId)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-gold/15 text-cream border border-gold/40 pl-5'
                      : 'text-stone-400 hover:bg-obsidian-850/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg border ${
                      isSelected
                        ? 'bg-gold text-obsidian-950 border-gold'
                        : 'bg-obsidian-950 border-obsidian-800 text-stone-400'
                    }`}>
                      {cmd.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold tracking-wider ${isSelected ? 'text-cream' : 'text-stone-300'}`}>
                          {cmd.title}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-obsidian-950 border border-obsidian-800 text-stone-500">
                          {cmd.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500 block mt-0.5">{cmd.hint}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-stone-500">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] text-gold font-bold">
                        <span>NAVIGATE</span>
                        <CornerDownLeft size={12} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Meta */}
        <div className="px-5 py-2.5 bg-obsidian-950 border-t border-obsidian-800 flex items-center justify-between font-mono text-[10px] text-stone-500">
          <div className="flex items-center gap-3">
            <span>↑↓ NAVIGATE</span>
            <span>↵ SELECT</span>
            <span>ESC CLOSE</span>
          </div>
          <div className="text-gold/80">VEER OBSERVATORY COMMAND BUS</div>
        </div>
      </div>
    </div>
  );
}
