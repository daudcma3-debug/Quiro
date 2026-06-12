import React from "react";
import { LayoutGrid, Laptop, CheckCircle2, ShieldCheck, Database, Layers } from "lucide-react";

interface SoftwareItem {
  name: string;
  color: string;
  textColor: string;
  bgColor: string;
  expertisePoints: string[];
  svg: React.ReactNode;
}

const SH_DATA: SoftwareItem[] = [
  {
    name: "QuickBooks",
    color: "#2CA01C",
    textColor: "text-[#2CA01C]",
    bgColor: "bg-[#2CA01C]/10",
    expertisePoints: ["ProAdvisor Certified", "Multi-Entity Consolidation", "Bank Feed Optimization"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#2CA01C" />
        <path d="M 32 40 L 50 68 L 68 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M 50 25 L 50 55" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
    )
  },
  {
    name: "Xero",
    color: "#13B5EA",
    textColor: "text-[#13B5EA]",
    bgColor: "bg-[#13B5EA]/10",
    expertisePoints: ["Certified Advisorship", "Custom API Integrations", "Bank Feed Automation"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" fill="#13B5EA" />
        <text x="50" y="58" fill="white" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">xero</text>
      </svg>
    )
  },
  {
    name: "NetSuite",
    color: "#4682B4",
    textColor: "text-[#4682B4]",
    bgColor: "bg-[#4682B4]/10",
    expertisePoints: ["Oracle ERP Architecture", "SuiteAnswers Navigation", "Advanced FP&A Automation"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#0E2F56" />
        <path d="M 30 70 L 50 30 L 70 70 Z" fill="none" stroke="#E6A817" strokeWidth="6" />
        <path d="M 40 50 L 60 50" stroke="#E6A817" strokeWidth="6" />
      </svg>
    )
  },
  {
    name: "Sage",
    color: "#007E3A",
    textColor: "text-[#007E3A]",
    bgColor: "bg-[#007E3A]/10",
    expertisePoints: ["Sage 50 & 200 Support", "UK VAT Submissions", "Robust Inventory Audits"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" fill="#007E3A" />
        <path d="M 28 50 C 28 35, 72 35, 72 50 C 72 65, 28 65, 28 50 Z" stroke="white" strokeWidth="7" fill="none" />
      </svg>
    )
  },
  {
    name: "Microsoft Dynamics",
    color: "#00A4EF",
    textColor: "text-[#00A4EF]",
    bgColor: "bg-[#00A4EF]/10",
    expertisePoints: ["Business Central Specialists", "Copilot BI Automations", "Power BI Dashboards"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <path d="M15 15 H45 V45 H15 Z" fill="#F25022" />
        <path d="M55 15 H85 V45 H55 Z" fill="#7FBA00" />
        <path d="M15 55 H45 V85 H15 Z" fill="#00A4EF" />
        <path d="M55 55 H85 V85 H55 Z" fill="#FFB900" />
      </svg>
    )
  },
  {
    name: "SAP",
    color: "#1B4F72",
    textColor: "text-[#1B4F72]",
    bgColor: "bg-[#1B4F72]/10",
    expertisePoints: ["SAP S/4HANA Ledger", "Cost-Center Classifications", "Global Ledger Mapping"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="45" ry="30" fill="#1B4F72" />
        <text x="50" y="58" fill="white" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">SAP</text>
      </svg>
    )
  },
  {
    name: "Zoho Books",
    color: "#E2574C",
    textColor: "text-[#E2574C]",
    bgColor: "bg-[#E2574C]/10",
    expertisePoints: ["CRM Ledger Syncing", "Multi-Currency Conversions", "Automated Billing Setup"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <rect x="20" y="20" width="22" height="22" fill="#E21D0E" rx="2" />
        <rect x="58" y="20" width="22" height="22" fill="#1867CE" rx="2" />
        <rect x="20" y="58" width="22" height="22" fill="#008E1A" rx="2" />
        <rect x="58" y="58" width="22" height="22" fill="#F3A900" rx="2" />
      </svg>
    )
  },
  {
    name: "FreshBooks",
    color: "#0075C9",
    textColor: "text-[#0075C9]",
    bgColor: "bg-[#0075C9]/10",
    expertisePoints: ["SME Ledger Tuning", "Client Time-Track Billing", "Revenue Reconciliation"],
    svg: (
      <svg className="w-12 h-12 inline-block" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="15" width="70" height="70" rx="10" fill="#0075C9" />
        <path d="M 30 35 L 50 35 L 50 65 L 70 65" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    )
  }
];

export const SoftwareExpertise: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF6] border-t border-slate-200" id="software">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Layout Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Agnostic Integration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-none">
            Software Competence & Integrations
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-600 font-light leading-relaxed">
            Our talent arrives fully certified and highly experienced in your current financial software landscape, rendering onboarding fast and frictionless.
          </p>
        </div>

        {/* Integration Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {SH_DATA.map((sw, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* SVG Logo Container */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div>{sw.svg}</div>
                  <h4 className="font-jakarta text-lg font-bold text-brand-navy leading-none">
                    {sw.name}
                  </h4>
                </div>

                {/* Bullets lists of specific competencies */}
                <span className="text-[9px] font-manrope font-bold text-slate-400 tracking-wider uppercase block mb-3">
                  Applied Expertise Fields
                </span>
                <ul className="space-y-2.5">
                  {sw.expertisePoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs font-manrope text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tag bottom */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-light">
                <span>Migration Ready</span>
                <span className="text-brand-gold font-bold">● Platinum Sync</span>
              </div>
            </div>
          ))}
        </div>

        {/* Support banner */}
        <div className="bg-brand-navy rounded-2xl p-8 lg:p-12 text-white border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,163,90,0.1),transparent_50%5)]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-jakarta text-2xl font-bold text-white mb-3">
                Need customized system migrations?
              </h3>
              <p className="font-manrope text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                Whether you are migrating from legacy desktop databases to fully automated cloud ledgers (like Oracle NetSuite or Sage Intacct), our team manages catalog synchronization, schema matches, and validation loops without compromising transactional logs.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="flex items-center gap-4 bg-slate-900/50 hover:bg-slate-900 border border-slate-800 p-4 rounded-xl max-w-xs transition-colors duration-200">
                <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-jakarta font-bold text-white uppercase tracking-wider">
                    Bank-Grade Safety
                  </h4>
                  <p className="text-[11px] font-manrope text-slate-400 mt-1 leading-normal">
                    Secure APIs, encrypted endpoints, and automated transaction protocols. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
