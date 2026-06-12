import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Target, 
  Globe, 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  ShieldAlert, 
  HeartHandshake 
} from "lucide-react";

const WHY_CARDS = [
  {
    title: "Top 1% Talent Selection",
    desc: "Our rigorous evaluation spans deep technical testing, critical thinking assessments, and practical case studies. Out of thousands of candidates, only the elite top 1% receive a placement offer.",
    icon: Sparkles,
  },
  {
    title: "Accounting & Finance Only",
    desc: "Unlike generic outsourcing companies or virtual assistant agencies, Quiro is hyper-focused. Every single candidate is a credentialed, specialized financial mind (ACCA, CA, CPA, or CFA).",
    icon: Target,
  },
  {
    title: "US & UK Market Focus",
    desc: "Our professionals are heavily schooled in GAAP, IFRS, HMRC regulations, and IRS codes. They seamlessly synchronize with the complex tax, bookkeeping, and filing standards of the US and UK.",
    icon: Globe,
  },
  {
    title: "Strong English Communication",
    desc: "English fluency is mandatory. Direct phone client interaction, written board reporting, and team-wide verbal check-ins are handled at high-end professional levels with zero friction.",
    icon: MessageSquare,
  },
  {
    title: "Time Zone Coverage",
    desc: "Our team operates on shifts designed to overlap with your standard US & UK working hours (EST, CST, PST, or GMT). Get real-time collaborative crossovers and smooth morning hand-offs.",
    icon: Clock,
  },
  {
    title: "Scalable Teams",
    desc: "Easily adjust team sizes to handle seasonal busy spikes or contract compliance pressures. Scale your remote back-office staffing model efficiently up or down without fixed overhead burdens.",
    icon: TrendingUp,
  },
  {
    title: "Data Security",
    desc: "Enterprise-tier protection including secure cloud workspaces, strict non-disclosure agreements, encrypted terminal structures, and rigid compliance auditing to protect sensitive client ledgers.",
    icon: ShieldAlert,
  },
  {
    title: "Dedicated Professionals",
    desc: "Your Quiro staffers do not multitask. They work 100% exclusively for your organization, fully integrating into your native email systems, Slack channels, internal guidelines, and corporate pulse.",
    icon: HeartHandshake,
  },
];

export const WhyQuiro: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF6]" id="why-quiro">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Our Competitive Safeguards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-tight">
            Why Leading Firms Choose Quiro
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-600 font-light leading-relaxed">
            We operate with the rigorous technical standards of big-four advisory networks and the frictionless scale of leading global Silicon Valley staffing solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-xl border border-slate-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:border-brand-gold/45"
              >
                <div>
                  <div className="bg-brand-navy/5 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6 self-start group-hover:bg-brand-navy/10 transition-colors">
                    <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                  </div>
                  <h3 className="font-jakarta text-lg font-bold text-brand-navy mb-3">
                    {card.title}
                  </h3>
                  <p className="font-manrope text-sm text-slate-600 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
                {/* Decorative clean line at bottom */}
                <div className="h-1 bg-transparent group-hover:bg-brand-gold w-0 group-hover:w-full transition-all duration-300 mt-6 rounded" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
