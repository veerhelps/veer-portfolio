import React from 'react';
import { mentorshipPlans, onboardingSteps } from '../../data/mentorshipData';
import { Check, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export function MentorshipPricingSection() {
  return (
    <section id="pricing" className="py-24 bg-obsidian-950 border-t border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-gold mb-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>SECTION 14 — MENTORSHIP & ONBOARDING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-stone-100 mb-4 tracking-tight">
            MENTORSHIP <span className="text-gold-gradient">PRICING</span>
          </h2>

          <p className="text-stone-400 text-sm font-sans font-light leading-relaxed">
            Stop learning useless topics. Vaxsa provides exactly what is needed to become a consistently profitable Forex trader with deep clarity and reality-based concepts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {mentorshipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between relative ${
                plan.isPopular
                  ? 'bg-obsidian-900 border-gold shadow-2xl gold-glow-md'
                  : 'bg-obsidian-900/60 border-obsidian-800 hover:border-gold/30'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold-gradient text-obsidian-950 font-mono text-[10px] font-bold tracking-widest flex items-center gap-1 shadow-lg">
                  <Star size={12} /> MOST POPULAR MENTORSHIP
                </div>
              )}

              <div>
                <div className="font-mono text-xs text-gold font-bold mb-2">{plan.title}</div>
                <div className="font-mono text-4xl font-black text-stone-100 mb-1">
                  {plan.price}
                  <span className="text-xs text-stone-500 font-normal ml-2">{plan.billingPeriod}</span>
                </div>
                <p className="text-xs text-stone-400 font-sans mb-6 leading-relaxed">{plan.subtitle}</p>

                <ul className="space-y-3 font-mono text-xs text-stone-300 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold text-center tracking-wider transition ${
                  plan.isPopular
                    ? 'bg-gold-gradient text-obsidian-950 hover:brightness-110 shadow-lg gold-glow-sm'
                    : 'bg-obsidian-950 border border-gold/40 text-gold hover:bg-gold/10'
                }`}
              >
                APPLY FOR MENTORSHIP
              </a>
            </div>
          ))}
        </div>

        {/* Onboarding Process */}
        <div className="border-t border-obsidian-850 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl font-bold font-display text-stone-100 mb-2">ONBOARDING PROCESS</h3>
            <p className="text-xs font-mono text-stone-400">FOUR STEP EXECUTION TO JOIN THE VAXSA DESK</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
            {onboardingSteps.map((step) => (
              <div key={step.stepNumber} className="card-dark-surface p-6 rounded-2xl border border-obsidian-800">
                <div className="text-2xl font-black text-gold/40 mb-3">{step.stepNumber}</div>
                <div className="font-bold text-stone-100 mb-2">{step.title}</div>
                <p className="text-stone-400 text-xs font-sans leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
