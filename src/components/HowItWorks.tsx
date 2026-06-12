import React from "react";
import { ListTodo, Users, CalendarCheck, ShieldCheck, ArrowRight } from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  timeframe: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS_DATA: StepItem[] = [
  {
    num: "01",
    title: "Tell Us Your Requirements",
    timeframe: "Day 1-2",
    desc: "Outline the specific roles, qualifications (ACCA/CA/CPA), software stack, and timezone alignment your firm requires. We assist in mapping out optimized remote seat structures.",
    icon: ListTodo,
  },
  {
    num: "02",
    title: "Receive Pre-Vetted Candidates",
    timeframe: "Within 48 Hours",
    desc: "Review a curated shortlist of 2-3 premium matched candidates who have passed our rigorous accounting skill tests, communication audits, and background checks.",
    icon: Users,
  },
  {
    num: "03",
    title: "Interview & Select",
    timeframe: "Day 3-5",
    desc: "Conduct direct video interviews with chosen specialists. Assess their cultural alignment, technical agility, and systems comfort. Select the perfect team fit.",
    icon: CalendarCheck,
  },
  {
    num: "04",
    title: "Onboard & Scale",
    timeframe: "Week 2",
    desc: "We handle the cross-border compliance paper trails, hardware provisioning, secure workspaces setup, and onboarding. Your team member begins on your native platforms immediately.",
    icon: ShieldCheck,
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#081C3A] text-white relative overflow-hidden" id="how-it-works">
      {/* Background visual element */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(circle_at_center,rgba(199,163,90,0.06),transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            onboarding lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-none">
            Our Streamlined Staffing Process
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-300 font-light leading-relaxed">
            Go from initial diagnostic consultation to high-performing remote team alignment in under two weeks.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Horizontal connecting line inside desktop layout */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-[1px] bg-slate-800 z-0" />

          {STEPS_DATA.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx} 
                className="relative z-10 flex flex-col items-start p-6 bg-brand-dark/40 border border-slate-800/80 rounded-xl hover:border-brand-gold/25 transition-colors duration-300 group"
              >
                {/* Step Circle & Number */}
                <div className="flex items-center justify-between w-full mb-6 relative">
                  <div className="bg-brand-dark border-2 border-slate-700/60 p-3 rounded-xl text-brand-gold group-hover:border-brand-gold transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-4xl font-extrabold text-slate-800/80 group-hover:text-brand-gold/30 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Step Details */}
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-bold mb-1">
                  Timeline: {step.timeframe}
                </span>
                
                <h3 className="font-jakarta text-lg font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {step.title}
                </h3>
                
                <p className="font-manrope text-xs text-slate-300 leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Arrow indicator for step chain (horizontal on large screens, vertical otherwise) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-[18px] -right-[16px] z-20 items-center justify-center p-1 rounded-full bg-brand-gold text-brand-navy">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro quote */}
        <div className="mt-16 text-center">
          <p className="font-manrope text-xs text-slate-400">
            * All candidates sign comprehensive multi-jurisdictional non-disclosure agreements before scheduling interview introductions.
          </p>
        </div>

      </div>
    </section>
  );
};
