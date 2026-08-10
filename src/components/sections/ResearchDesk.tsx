import React, { useState } from 'react';
import { researchArticles } from '../../data/researchData';
import { ResearchArticle } from '../../types';
import { BookOpen, ArrowUpRight, Clock, Calendar } from 'lucide-react';

export function ResearchDesk() {
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);

  return (
    <section id="research" className="py-24 bg-obsidian-900 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-gold mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>SECTION 13 — RESEARCH ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 tracking-tight">
              RESEARCH <span className="text-gold-gradient">DESK</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-stone-400">
            PAPERS PUBLISHED: <span className="text-gold font-bold">{researchArticles.length}</span>
          </div>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-2xl bg-obsidian-950 border border-obsidian-800 hover:border-gold/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-stone-500 mb-3">
                  <span className="text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-bold">{article.category}</span>
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-stone-100 group-hover:text-gold transition mb-3">
                  {article.title}
                </h3>

                <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian-850 flex items-center justify-between font-mono text-xs text-stone-500">
                <span>{article.date}</span>
                <span className="text-gold flex items-center gap-1 group-hover:translate-x-1 transition">
                  READ PAPER <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-obsidian-900 border border-gold/30 rounded-2xl p-6 sm:p-8 text-stone-200 shadow-2xl">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-obsidian-800 text-stone-400 hover:text-gold"
              >
                CLOSE [✕]
              </button>

              <div className="font-mono text-xs text-gold mb-2">{selectedArticle.category} • {selectedArticle.readTime}</div>
              <h2 className="text-2xl font-bold font-display text-stone-100 mb-4">{selectedArticle.title}</h2>
              <div className="prose prose-invert max-w-none text-xs text-stone-300 whitespace-pre-line leading-relaxed font-sans bg-obsidian-950 p-6 rounded-xl border border-obsidian-800">
                {selectedArticle.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
