import React from "react";
import { FileCheck, ShieldCheck, Award, TrendingUp, CheckCircle, Target, Briefcase } from "lucide-react";

const TRUST_ELEMENTS = [
  { label: "ACCA Talent", detail: "Global Accounting Association", icon: Award },
  { label: "CA Professionals", detail: "Chartered Accountants PK", icon: ShieldCheck },
  { label: "CPA Candidates", detail: "US Compliance Specialists", icon: FileCheck },
  { label: "QuickBooks Experts", detail: "Certified ProAdvisors", icon: CheckCircle },
  { label: "Xero Experts", detail: "Cloud Migration Pioneers", icon: Target },
  { label: "Tax Specialists", detail: "IRS & HMRC Filing Masters", icon: TrendingUp },
  { label: "Audit Professionals", detail: "Rigorous Financial Assurance", icon: Briefcase },
];

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#051226] border-y border-brand-gold/15 py-8 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,163,90,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro Tag above */}
        <p className="text-center font-manrope text-[11px] font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 select-none">
          Elite Verification & Software Credentials
        </p>

        {/* Ticker Grid layout - fully responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-6 gap-x-4">
          {TRUST_ELEMENTS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center p-3 rounded-lg border border-slate-800/60 bg-brand-navy/35 hover:border-brand-gold/20 hover:bg-brand-navy/60 transition-all duration-300 group"
              >
                <div className="bg-slate-900 p-2 rounded-full border border-slate-800 mb-2.5 transition-colors duration-300 group-hover:border-brand-gold/30">
                  <IconComponent className="w-4 h-4 text-brand-gold/90 group-hover:text-brand-gold" />
                </div>
                <h4 className="font-jakarta text-xs sm:text-sm font-bold text-slate-100 tracking-wide line-clamp-1">
                  {item.label}
                </h4>
                <p className="font-manrope text-[10px] text-slate-400 mt-1 line-clamp-1 font-light">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
