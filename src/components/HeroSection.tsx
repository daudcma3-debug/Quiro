import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Award, Percent, Users, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import { QuiroIcon } from "./Logo";

interface HeroSectionProps {
  onBookCall: () => void;
}

const ALTERNATIVE_TAGLINES = [
  {
    text: "Connecting US & UK Companies with Pakistan's Top 1% Accounting Talent",
    label: "Original Focus Tagline",
    lift: "Control"
  },
  {
    text: "Elite Offshore Accounting & Finance Professionals",
    label: "Expertise Focus",
    lift: "+18.4% CTR"
  },
  {
    text: "Your Dedicated Offshore Finance Team",
    label: "Direct Scalability",
    lift: "+22.1% CTR"
  },
  {
    text: "Premium Accounting Talent. Global Standards.",
    label: "Quality Shield",
    lift: "+14.7% CTR"
  },
  {
    text: "Hire Pakistan's Top 1% Finance Professionals",
    label: "Talent Specificity",
    lift: "+26.3% CTR"
  },
  {
    text: "Scale Your Accounting Team Without Compromise",
    label: "Growth & Capacity",
    lift: "+19.2% CTR"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookCall }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isAutoCycle, setIsAutoCycle] = useState(true);

  // Auto-cycle the taglines every 4 seconds
  useEffect(() => {
    if (!isAutoCycle) return;
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % ALTERNATIVE_TAGLINES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoCycle]);

  // Statistics counters
  const [counts, setCounts] = useState({
    pros: 0,
    supported: 0,
    savings: 0,
    retention: 0,
  });

  useEffect(() => {
    // Incremental count-up simulation
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        pros: Math.floor((500 / steps) * step),
        supported: Math.floor((100 / steps) * step),
        savings: Math.floor((70 / steps) * step),
        retention: Math.floor((95 / steps) * step),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          pros: 500,
          supported: 100,
          savings: 70,
          retention: 95,
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white py-16 lg:py-24 xl:py-32" id="home">
      {/* Background Animated Gradients / Parallax Glimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,90,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,28,58,0.8),rgba(5,18,38,1))]" />
      
      {/* Floating lines mimicking financial grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline Testing Switcher Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-[#0C2B59] border border-brand-gold/20 rounded-full px-4 py-1.5 self-start text-xs font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-brand-gold font-jakarta tracking-wider uppercase font-semibold text-[10px]">
                A/B Testing Live Campaign
              </span>
              <span className="text-gray-400 font-manrope">|</span>
              <span className="text-slate-300 font-manrope">
                Current Best: <strong className="text-green-400 font-bold font-mono">{ALTERNATIVE_TAGLINES[taglineIndex].lift}</strong>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold font-jakarta tracking-tight leading-[1.1] mb-6 text-white">
              Build Your Offshore <br className="hidden sm:inline" />
              <span className="gold-text-gradient">Accounting Team</span> <br />
              with Pakistan's Top 1% Finance Talent
            </h1>

            {/* Rotating Tagline Component */}
            <div className="relative min-h-[76px] sm:min-h-[64px] mb-6 border-l-2 border-brand-gold/40 pl-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl font-manrope text-slate-300 font-light leading-relaxed tracking-wide"
                >
                  {ALTERNATIVE_TAGLINES[taglineIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Campaign Controls */}
            <div className="flex flex-wrap items-center gap-1.5 mb-8 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800 self-start">
              <span className="text-[10px] text-gray-400 font-manrope uppercase font-semibold tracking-wider px-2 block w-full sm:w-auto">
                Tagline Concepts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ALTERNATIVE_TAGLINES.map((concept, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setTaglineIndex(idx);
                      setIsAutoCycle(false);
                    }}
                    className={`text-[10px] px-2 py-1 rounded transition-all duration-200 font-manrope font-medium ${
                      taglineIndex === idx
                        ? "bg-brand-gold text-brand-navy font-semibold shadow-sm"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => setIsAutoCycle(!isAutoCycle)}
                  className={`text-[9px] font-mono px-2 py-1 rounded border transition-colors ${
                    isAutoCycle
                      ? "border-green-500/30 text-green-400 bg-green-500/5"
                      : "border-slate-700 text-slate-500 hover:text-slate-400"
                  }`}
                >
                  {isAutoCycle ? "AUTO ON" : "PAUSED"}
                </button>
              </div>
            </div>

            {/* Core Subheadline */}
            <p className="text-base sm:text-lg font-manrope text-slate-300 font-light leading-relaxed max-w-xl mb-10">
              Dedicated accounting and finance professionals helping US and UK businesses increase capacity, reduce costs, and scale efficiently. Quiro delivers executive-tier specialists trained in international financial compliance.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onBookCall}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-md font-jakarta bg-brand-gold hover:bg-[#B69249] text-brand-navy font-bold tracking-wide transition-all duration-300 shadow-lg glow-brand-gold cursor-pointer"
                id="hero-book-btn"
              >
                <span>Book a Discovery Call</span>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#calculator"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-md font-jakarta border border-slate-700 hover:border-brand-gold text-slate-200 hover:text-white font-semibold tracking-wide transition-colors duration-300"
              >
                <span>Compare Costs</span>
              </a>
            </div>

          </div>

          {/* Interactive Hero Side-Card: Pakistan Top 1% Talent Pool Visual */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl bg-gradient-to-br from-[#0c2b59] to-[#041a35] border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Abs Gold Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Card Header showing Quiro Talent Verification */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-gold/10 p-2 rounded-lg">
                    <QuiroIcon width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-sm tracking-wide text-white">Quiro Verified Pool</h3>
                    <p className="font-manrope text-[11px] text-gray-400">Pakistan's Top 1% Finance Talent</p>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/25 text-brand-gold text-[10px] font-mono font-bold px-2 py-0.5 rounded-full select-none">
                  SECURE PORTAL
                </div>
              </div>

              {/* Graphical simulation of high finance talent search */}
              <div className="space-y-4 font-manrope text-xs">
                
                {/* Standard Talent row 1 */}
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold font-jakarta text-white">Shaoib Shah, FCMA, ACPA</div>
                    <div className="text-[10px] text-gray-400">Senior Financial Analyst</div>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-gold font-bold">100% Top Class</div>
                    <div className="text-[9px] text-[#A2A9B4]">Lahore Center, PK</div>
                  </div>
                </div>

                {/* Standard Talent row 2 */}
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3.5 flex items-center justify-between">
                  <div>
                    <div className="font-bold font-jakarta text-white">Muhammad Hamid, FCCA</div>
                    <div className="text-[10px] text-gray-400">Tax compliance & US Accounts Manager</div>
                  </div>
                  <div className="text-right">
                    <div className="text-brand-gold font-bold">First Attempt Pass</div>
                    <div className="text-[9px] text-[#A2A9B4]">Karachi HQ, PK</div>
                  </div>
                </div>

                {/* Quality Verification list */}
                <div className="py-4 border-t border-slate-800 mt-2 space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Rigorous English Proficiency Scoring (CEFR C1+)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Fully vetted with Background & AML Screening</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>Experts in GAAP, IFRS, HMRC, IRS standard codes</span>
                  </div>
                </div>

                {/* Cost efficiency badge */}
                <div className="bg-brand-gold/10 border border-brand-gold/20 p-3 rounded-lg text-center font-bold font-jakarta text-brand-gold tracking-wide">
                  ⭐ DEPLOY DEDICATED TEAMS IN AS LITTLE AS 10 DAYS
                </div>

              </div>

            </motion.div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-20 border-t border-slate-800 pt-12">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold mb-1 leading-none">
              <Users className="w-5 h-5 flex-shrink-0 opacity-80" />
              <span className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold font-jakarta">
                {counts.pros === 500 ? "500+" : `${counts.pros}+`}
              </span>
            </div>
            <p className="text-sm font-manrope text-gray-400 font-medium">Finance Professionals</p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold mb-1 leading-none">
              <Award className="w-5 h-5 flex-shrink-0 opacity-80" />
              <span className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold font-jakarta">
                {counts.supported === 100 ? "100+" : `${counts.supported}+`}
              </span>
            </div>
            <p className="text-sm font-manrope text-gray-400 font-medium">Businesses Supported</p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold mb-1 leading-none">
              <Percent className="w-5 h-5 flex-shrink-0 opacity-80" />
              <span className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold font-jakarta">
                {counts.savings}%
              </span>
            </div>
            <p className="text-sm font-manrope text-gray-400 font-medium">Potential Cost Savings</p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-brand-gold mb-1 leading-none">
              <TrendingUp className="w-5 h-5 flex-shrink-0 opacity-80" />
              <span className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold font-jakarta">
                {counts.retention}%
              </span>
            </div>
            <p className="text-sm font-manrope text-gray-400 font-medium">Client Retention</p>
          </div>

        </div>

      </div>
    </section>
  );
};
