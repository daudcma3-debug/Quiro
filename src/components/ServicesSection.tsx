import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Receipt, 
  Coins, 
  ArrowUpRight, 
  Workflow, 
  TrendingUp, 
  CheckSquare, 
  UserCheck, 
  ShieldCheck, 
  Scale, 
  CoinsIcon, 
  ChevronRight,
  Database
} from "lucide-react";

interface ServiceProps {
  title: string;
  desc: string;
  deliverables: string[];
  tech: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES_DATA = {
  accounting: [
    {
      title: "Offshore Accounting Staff",
      desc: "Deploy highly skilled, dedicated full-time accountants to augment your domestic team. They integrate directly into your culture and reporting structures.",
      deliverables: ["Dedicated staff allocation", "Daily progress ledgers", "Native ERP integration"],
      tech: ["NetSuite", "Xero", "QuickBooks"],
      icon: Building2,
    },
    {
      title: "Bookkeeping Services",
      desc: "Full cloud ledger oversight, real-time transaction coding, high-volume credit/bank reconciliation, and clean digital matching designed for firm accuracy.",
      deliverables: ["Weekly bank reconciliation", "Intercompany coding", "Receipt matching"],
      tech: ["Xero", "QuickBooks", "Zoho Books"],
      icon: Receipt,
    },
    {
      title: "Financial Reporting",
      desc: "Accurate Balance Sheets, Income Statements, and Cash Flow mapping drafted precisely under GAAP or IFRS requirements for audits and investor reporting.",
      deliverables: ["IFRS/GAAP balance sheets", "Profit & Loss (P&L) statements", "SaaS metric ledgers"],
      tech: ["Fathom", "Excel", "NetSuite"],
      icon: Scale,
    },
    {
      title: "Management Accounts",
      desc: "Custom monthly or quarterly reporting packs including visual performance tracking, variance maps, gross margin splits, and cost-center breakdowns.",
      deliverables: ["Budget vs Actual Variance Mapping", "Key Performance Indicators", "Gross Margin breakdown"],
      tech: ["Microsoft Dynamics", "Xero", "SAP"],
      icon: Database,
    }
  ],
  operations: [
    {
      title: "Accounts Payable",
      desc: "Automated invoice parsing, vendor verification matching, purchase order verification, aging report management, and ready-to-pay runs creation.",
      deliverables: ["PO matching validation", "Batch run file assembly", "AP Aging reports"],
      tech: ["Bill.com", "Ramp", "Xero"],
      icon: Coins,
    },
    {
      title: "Accounts Receivable",
      desc: "Professional client invoicing, automated collection email loops, payment gateway synchronization, billing dispute resolution, and bad debt provisioning.",
      deliverables: ["Invoicing schedules", "Client payment collections", "Dunning operations"],
      tech: ["Chaser", "QuickBooks", "Stripe"],
      icon: ArrowUpRight,
    },
    {
      title: "Payroll Processing",
      desc: "Accurate employee payroll scheduling, cross-border compliance mapping, regional tax withholdings, pension/401k updates, and local payroll platform audits.",
      deliverables: ["Employee payroll schedules", "Benefits tracking", "HMRC/IRS payroll reports"],
      tech: ["Gusto", "Rippling", "Deel"],
      icon: Workflow,
    },
    {
      title: "Audit Support",
      desc: "Comprehensive lead sheet assembly, testing trace collections, historical workbook audits, tax-base reconciliations, and auditor query mapping.",
      deliverables: ["Audit trial balance files", "Audit documentation packages", "Internal control tests"],
      tech: ["AuditBoard", "SAP", "Excel"],
      icon: ShieldCheck,
    }
  ],
  advisory: [
    {
      title: "Tax Preparation Services",
      desc: "Meticulous year-end and quarterly tax package preparation. Formulates clean tax returns, multi-state sales tax logs, and corporate tax provisions.",
      deliverables: ["US corporate IRS packages", "UK corporate HMRC filings", "Sales tax reconciliations"],
      tech: ["ProConnect", "Draftable", "Drake Tax"],
      icon: CheckSquare,
    },
    {
      title: "CFO Support Services",
      desc: "Executive back-desk intelligence including advanced valuation forecasts, cap-table metrics, merger & acquisition support, and capital runway planning.",
      deliverables: ["M&A analysis sheets", "Capital runway projections", "Cap-table scenarios"],
      tech: ["Carta", "NetSuite", "Anaplan"],
      icon: UserCheck,
    },
    {
      title: "Financial Analysis",
      desc: "Deep FP&A operations. Custom unit-economic models, recurring revenue cohorts, sensitivity testing, and corporate valuation spreadsheets.",
      deliverables: ["LTV / CAC forecasts", "Sensitivity simulation tables", "Equity research reports"],
      tech: ["Anaplan", "Excel", "Tableau"],
      icon: TrendingUp,
    },
    {
      title: "Business Advisory Support",
      desc: "High-value business consulting assets, market positioning reviews, pricing strategy models, structure design books, and risk-management decks.",
      deliverables: ["Corporate risk matrices", "Pricing optimization decks", "Competitive intelligence"],
      tech: ["PowerBI", "SAP", "Excel"],
      icon: CoinsIcon,
    }
  ]
};

type CategoryType = "accounting" | "operations" | "advisory";

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("accounting");

  return (
    <section className="py-20 lg:py-28 bg-[#081C3A] text-white relative overflow-hidden" id="services">
      {/* Visual glowing geometric backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(199,163,90,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(5,18,38,0.7),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight">
              Accounting & Finance Solutions
            </h2>
            <p className="mt-4 text-slate-300 font-manrope font-light text-base sm:text-lg leading-relaxed">
              We focus 100% exclusively on financial talent, providing specialized personnel across transactional processing, regular cloud bookkeeping, tax compliance, and strategic advisory.
            </p>
          </div>

          {/* Luxury Tab Selectors */}
          <div className="mt-8 lg:mt-0 flex p-1 bg-brand-dark/85 rounded-lg border border-slate-800 gap-1 overflow-x-auto self-start">
            <button
              onClick={() => setActiveCategory("accounting")}
              className={`px-5 py-2.5 rounded-md text-xs font-jakarta font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === "accounting"
                  ? "bg-brand-gold text-brand-navy shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Core Accounting
            </button>
            <button
              onClick={() => setActiveCategory("operations")}
              className={`px-5 py-2.5 rounded-md text-xs font-jakarta font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === "operations"
                  ? "bg-brand-gold text-brand-navy shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Operations & treasury
            </button>
            <button
              onClick={() => setActiveCategory("advisory")}
              className={`px-5 py-2.5 rounded-md text-xs font-jakarta font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === "advisory"
                  ? "bg-brand-gold text-brand-navy shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Strategic Advisory
            </button>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {SERVICES_DATA[activeCategory].map((service: ServiceProps, idx: number) => {
                const IconComp = service.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-[#051226]/90 border border-slate-800/80 p-6 rounded-xl hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-300 shadow-2xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon */}
                      <div className="bg-brand-navy/60 border border-slate-800/60 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>

                      <h3 className="font-jakarta text-lg font-bold text-white mb-3 tracking-wide leading-snug group-hover:text-brand-gold transition-colors">
                        {service.title}
                      </h3>

                      <p className="font-manrope text-sm text-slate-300 leading-relaxed font-light mb-6">
                        {service.desc}
                      </p>

                      {/* Deliverables bullet lists */}
                      <div className="border-t border-slate-800/85 pt-4 mb-6">
                        <span className="text-[10px] font-manrope font-bold text-brand-gold tracking-wider uppercase block mb-3">
                          Key Deliverable Target
                        </span>
                        <ul className="space-y-2">
                          {service.deliverables.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs font-manrope text-slate-400">
                              <ChevronRight className="w-3.5 h-3.5 text-brand-gold/80 flex-shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Integrated Software expertise list */}
                    <div className="pt-4  border-t border-slate-800/80">
                      <span className="text-[9px] font-manrope text-slate-500 font-bold tracking-widest uppercase block mb-2">
                        Software Core:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-brand-navy/60 border border-slate-800 text-[10px] font-mono text-slate-300 px-2.5 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
