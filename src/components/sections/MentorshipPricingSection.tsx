import React from 'react';
import { mentorshipPlans, onboardingSteps } from '../../data/mentorshipData';
import { Check, Star, ArrowUpRight } from 'lucide-react';

export function MentorshipPricingSection() {
  return (
    <section id="pricing" className="py-28 sm:py-36 bg-transparent border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">SECTION 13 — MENTORSHIP & ONBOARDING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-cream tracking-tight mb-4 break-words">
            MENTORSHIP <span className="text-gold-gradient">PRICING</span>
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-sans font-light leading-relaxed">
            Stop learning useless topics. Vaxsa provides exactly what is needed to become a consistently profitable Forex operator with deep clarity, institutional discipline, and reality-based execution.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {mentorshipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'bg-obsidian-900 border-gold/70 shadow-2xl gold-glow-md'
                  : 'bg-obsidian-900/60 border-obsidian-800 hover:border-gold/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-gold text-obsidian-950 font-mono text-[10px] font-bold tracking-widest flex items-center gap-1.5 shadow-lg">
                  <Star size={11} className="fill-obsidian-950" />
                  <span>FLAGSHIP OPERATOR TIER</span>
                </div>
              )}

              <div>
                <div className="font-mono text-xs text-gold font-bold mb-2 uppercase tracking-wider">{plan.title}</div>
                <div className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-cream mb-1">
                  {plan.price}
                  <span className="text-xs text-stone-400 font-normal ml-2 tracking-normal uppercase">{plan.billingPeriod}</span>
                </div>
                <p className="text-xs text-stone-400 font-sans mt-2 mb-8 leading-relaxed font-light">{plan.subtitle}</p>

                <div className="w-full h-[1px] bg-obsidian-800 mb-6" />

                <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-stone-300 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={15} className="text-gold shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-mono text-xs font-bold text-center tracking-wider transition duration-200 flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-cream text-obsidian-950 hover:bg-gold hover:text-obsidian-950 shadow-xl'
                    : 'bg-obsidian-950 border border-obsidian-700 text-cream hover:text-gold hover:border-gold'
                }`}
              >
                <span>APPLY FOR MENTORSHIP</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* 4-Step Onboarding Process */}
        <div className="border-t border-obsidian-850 pt-16">
          <div className="max-w-xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-cream mb-2">ONBOARDING PROCESS</h3>
            <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">FOUR STEP EXECUTION TO JOIN THE VAXSA DESK</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            {onboardingSteps.map((step) => (
              <div key={step.stepNumber} className="p-5 sm:p-6 rounded-2xl bg-obsidian-900/60 border border-obsidian-800/80 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-gold/40 mb-3">{step.stepNumber}</div>
                  <div className="font-bold text-cream mb-2 text-sm">{step.title}</div>
                </div>
                <p className="text-stone-400 text-xs font-sans font-light leading-relaxed mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
