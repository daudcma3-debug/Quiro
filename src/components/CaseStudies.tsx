import React, { useState } from "react";
import { Check, ClipboardList, Eye, ArrowRight, Award, TrendingUp, Users } from "lucide-react";

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  client: string;
  location: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  results: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "uk-accounting",
    tag: "Scale & Capacity Extension",
    title: "How Apex Partners LLP UK Reduced Staffing Costs by 60% While Expanding Capacity",
    client: "Apex Partners LLP",
    location: "London & Leeds, United Kingdom",
    metrics: [
      { value: "-60%", label: "Staffing Costs Reduction" },
      { value: "2.4x", label: "Client Capacity Growth" },
      { value: "48 Hrs", label: "Monthly accounts close SLA" }
    ],
    challenge: "Apex Partners faced high local staff attrition and soaring UK wage requests, making competitive client pricing for small-business accounting sheets unsustainable. Partner workload surged, impeding growth.",
    solution: "Quiro deployed two dedicated ACCA-Certified Remote Senior Accountants and one Associate Bookkeeper. Operating from our Lahore center on UK GMT alignment, the team handled complete ledger coding, monthly management reporting, and HMRC VAT compliance filings.",
    results: [
      "Secured immediate direct savings of £125,000 per annum in combined staff wages.",
      "Released core UK directors to spend 100% of their time on client onboarding and strategic business consultancy.",
      "Increased reporting delivery accuracy to 99.8%, with management accounts closed on the 2nd business day."
    ]
  },
  {
    id: "us-tax",
    tag: "Seasonal Volume Acceleration",
    title: "How Beacon Tax Advisors US Managed Busy Season Filing Peaks with Zero Overhead Risk",
    client: "Beacon Tax Group",
    location: "Austin, Texas & Boston, US",
    metrics: [
      { value: "5 FTEs", label: "Tax Experts Scaled" },
      { value: "0%", label: "Fixed Overhead Surge" },
      { value: "+$180k", label: "Incremental Seasonal Margin" }
    ],
    challenge: "Beacon Tax experienced overwhelming return spikes between January and April. Competing for US-based seasonal tax staff led to inflated wages and compromised return review timelines, and increased filing error risks.",
    solution: "Within 14 days, Quiro sourced a remote squadron of 5 pre-vetted corporate and individual Tax Preparers, heavily trained in US Federal tax codes (Forms 1040, 1065, 1120S) and Drake Tax software, working overlap hours on EST.",
    results: [
      "Processed over 1,450 complex corporate and individual returns with zero filing penalties.",
      "Maintained a strict initial review SLA of under 48 hours for client documents.",
      "Reduced seasonal variable labor spend by $115,000 compared to local agency recruits, protecting core partner distributions."
    ]
  }
];

export const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStudy = CASE_STUDIES[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#081C3A] text-white relative overflow-hidden" id="case-studies">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(199,163,90,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24">
          <div className="max-w-xl">
            <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
              Proven Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-hide">
              Enterprise Case Studies
            </h2>
            <p className="mt-4 text-slate-300 font-manrope font-light text-sm sm:text-base leading-relaxed">
              Skip opinion-based reviews. Examine the precise operational datasets, challenges, and margin yields delivered by Quiro remote professionals.
            </p>
          </div>

          {/* Switchers */}
          <div className="mt-8 md:mt-0 flex p-1 bg-brand-dark/85 rounded-lg border border-slate-800 gap-1 self-start">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 py-2 rounded text-xs font-jakarta font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  activeIndex === idx
                    ? "bg-brand-gold text-brand-navy shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {study.client} ({study.location.includes("United Kingdom") ? "UK" : "US"})
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Presentation */}
        <div className="bg-[#051226]/90 border border-slate-800 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Col: Core Challenge & Solution */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              <div>
                {/* Tag */}
                <span className="text-xs font-bold font-jakarta tracking-widest text-brand-gold uppercase block mb-3">
                  {activeStudy.tag}
                </span>

                {/* Big Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-jakarta text-white tracking-tight leading-snug mb-8">
                  {activeStudy.title}
                </h3>

                {/* Challenge Block */}
                <div className="mb-6">
                  <h4 className="text-xs font-jakarta font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-brand-gold" />
                    <span>The Challenge</span>
                  </h4>
                  <p className="font-manrope text-sm text-slate-300 leading-relaxed font-light">
                    {activeStudy.challenge}
                  </p>
                </div>

                {/* Solution Block */}
                <div className="mb-8">
                  <h4 className="text-xs font-jakarta font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-gold" />
                    <span>The Quiro Solution</span>
                  </h4>
                  <p className="font-manrope text-sm text-slate-300 leading-relaxed font-light">
                    {activeStudy.solution}
                  </p>
                </div>
              </div>

              {/* Client Details Footer */}
              <div className="border-t border-slate-800/80 pt-6 mt-6 flex items-center justify-between text-xs text-slate-400 font-manrope">
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Located:</span>
                  <span className="text-slate-300 font-medium">{activeStudy.location}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Compliance Scope:</span>
                  <span className="text-[#C7A35A] font-bold font-mono">100% Fully Compliant</span>
                </div>
              </div>

            </div>

            {/* Right Col: Performance Metrics & Achieved Results */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-brand-navy/60 border border-slate-800 p-6 sm:p-8 rounded-xl">
              
              {/* Highlight metrics boxes */}
              <div>
                <h4 className="text-xs font-jakarta font-bold text-brand-gold uppercase tracking-widest mb-6">
                  Key Operational Metrics
                </h4>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeStudy.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-brand-dark/80 rounded-lg p-3 border border-slate-800/85 text-center">
                      <strong className="block font-jakarta text-xl sm:text-2xl font-black text-brand-gold leading-none mb-1 shadow-sm">
                        {m.value}
                      </strong>
                      <span className="text-[9px] font-manrope text-slate-400 uppercase tracking-tight block leading-tight">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Results list */}
                <h4 className="text-xs font-jakarta font-bold text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-gold" />
                  <span>Quantifiable Results</span>
                </h4>

                <ul className="space-y-4">
                  {activeStudy.results.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <div className="bg-brand-gold/15 border border-brand-gold/25 p-0.5 rounded-full mt-0.5 flex-shrink-0 text-brand-gold">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <p className="font-manrope text-xs text-slate-300 leading-relaxed font-light">
                        {r}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Badge */}
              <div className="mt-8 border-t border-slate-800/80 pt-6 flex items-center gap-3">
                <div className="bg-yellow-500/10 p-2 rounded-lg text-brand-gold border border-brand-gold/25">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-jakarta text-xs font-bold text-white">Verified Enterprise Case</h5>
                  <p className="font-manrope text-[10px] text-slate-400 mt-0.5">Audited for compliance & accuracy. Names altered under NDA</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
