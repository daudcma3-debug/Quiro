import React, { useState } from "react";
import { Search, UserCheck, ShieldAlert, Award, ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

interface TalentRole {
  title: string;
  experience: string;
  certs: string[];
  skills: string[];
  quiroRate: number;
  localRate: number;
  desc: string;
}

const TALENT_ROLES: TalentRole[] = [
  {
    title: "Bookkeepers",
    experience: "3-5 Years",
    certs: ["QuickBooks ProAdvisor", "Xero Certified"],
    skills: ["Ledger Management", "Bank Reconciliation", "AP/AR Processing"],
    quiroRate: 15,
    localRate: 45,
    desc: "Meticulous detail-oriented cloud professionals managing clean bank feeds, daily invoice matching, and ledger integrity."
  },
  {
    title: "Staff Accountants",
    experience: "3-6 Years",
    certs: ["ACCA Member", "CPA Candidate"],
    skills: ["General Ledger", "Month-End Close", "Depreciation Schedules"],
    quiroRate: 18,
    localRate: 55,
    desc: "Accurately post adjusting journal entries, maintain clean schedules, and execute robust month-end close procedures under GAAP/IFRS."
  },
  {
    title: "Senior Accountants",
    experience: "5-8 Years",
    certs: ["FCCA / ACA", "CPA Member"],
    skills: ["Variance Analysis", "Financial Statements Prep", "Intercompany Reconciliations"],
    quiroRate: 25,
    localRate: 75,
    desc: "Autonomous controllers of full financial boards, overseeing complex accounts consolidation, trial balances, and operational accounting."
  },
  {
    title: "Tax Preparers",
    experience: "3-5 Years",
    certs: ["IRS EA Candidate", "ACCA Cert in Tax"],
    skills: ["Form 1040/1120S", "HMRC Self-Assessment", "M-1 Adjustments"],
    quiroRate: 20,
    localRate: 65,
    desc: "Accurately prepare federal, state, and local return workbooks while ensuring proper backing-sheet audits for US/UK filings."
  },
  {
    title: "Tax Associates",
    experience: "4-7 Years",
    certs: ["Enrolled Agent (EA)", "CA Tax Specialized"],
    skills: ["Corporate Tax Provisions", "Multi-State Sales Tax", "HMRC VAT Audits"],
    quiroRate: 24,
    localRate: 80,
    desc: "Specialists in multi-state return structures, VAT compliance, corporate filing forms, and strategic tax planning workflows."
  },
  {
    title: "Audit Associates",
    experience: "3-5 Years",
    certs: ["ACCA Affiliate", "CA Finalist"],
    skills: ["Substantive Testing", "Analytical Procedures", "Internal Controls Audit"],
    quiroRate: 22,
    localRate: 70,
    desc: "Execute precise sampling, collect backing-ledger audit trails, verify internal check balances, and prepare auditor schedules."
  },
  {
    title: "Payroll Specialists",
    experience: "4-6 Years",
    certs: ["Certified Payroll Professional (CPP)"],
    skills: ["Multi-State Payroll Run", "HMRC PAYE Filing", "Benefit Contribution Audits"],
    quiroRate: 18,
    localRate: 50,
    desc: "Flawlessly schedule batch payments, sync benefits logs, handle regional payroll withholdings, and audit local employment structures."
  },
  {
    title: "Financial Analysts",
    experience: "3-6 Years",
    certs: ["CFA Level II", "ACCA Member"],
    skills: ["Financial Modeling", "Corporate Valuations", "Industry Research"],
    quiroRate: 22,
    localRate: 80,
    desc: "Draft comprehensive valuation files, compile strategic corporate board slide-decks, and track industry performance metrics."
  },
  {
    title: "FP&A Analysts",
    experience: "4-8 Years",
    certs: ["CFA Charterholder", "CIMA Specialized"],
    skills: ["Sensitivity Testing", "LTV / CAC Projections", "Dynamic Budgeting"],
    quiroRate: 28,
    localRate: 95,
    desc: "Enterprise forecasting, cash-runway scenario metrics, segment profitability breakdowns, and robust dynamic driver-based model builds."
  },
  {
    title: "Controllers",
    experience: "8-12 Years",
    certs: ["FCMA", "CPA / ACA Board Certified"],
    skills: ["SaaS KPI Boards", "Internal System Audits", "Team Leadership"],
    quiroRate: 35,
    localRate: 120,
    desc: "High-level accounting oversight, implementing tight financial control points, leading teams, and reviewing all accounts packs."
  },
  {
    title: "Finance Managers",
    experience: "7-10 Years",
    certs: ["CPA", "FCCA Board Member"],
    skills: ["Treasury Management", "Working Capital Strategy", "Entity Restructuring"],
    quiroRate: 32,
    localRate: 110,
    desc: "Ensure seamless working capital levels, design entity-wide intercompany transfer processes, and manage banking line triggers."
  },
  {
    title: "Virtual CFO Support",
    experience: "10-15+ Years",
    certs: ["ACA / CPA / MBA Finance"],
    skills: ["Strategic Advisory", "M&A Deal Modeling", "Investor Deal Rooms"],
    quiroRate: 45,
    localRate: 160,
    desc: "Fractional and virtual strategic advisorship, investor cap-table modeling, fundraise deck defense, and executive-tier guidance."
  }
];

export const TalentSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTier, setSelectedTier] = useState<"all" | "middle" | "senior">("all");

  const filteredRoles = TALENT_ROLES.filter((role) => {
    // Search Title or Skills
    const matchesSearch =
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

    // Tier filtering
    if (selectedTier === "middle") {
      return matchesSearch && role.quiroRate < 25;
    }
    if (selectedTier === "senior") {
      return matchesSearch && role.quiroRate >= 25;
    }
    return matchesSearch;
  });

  return (
    <section className="py-20 lg:py-28 bg-white relative" id="talent">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Elite Remote Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-hide">
            Talent We Provide In Days
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-600 font-light leading-relaxed">
            Every professional we place works exclusively for your firm, completely integrated into your existing systems, email platforms, and daily workflows.
          </p>
        </div>

        {/* Verified Premium Spotlight */}
        <div className="mb-16 bg-gradient-to-br from-[#0c2b59] to-[#041a35] rounded-2xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden text-white shadow-xl">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-slate-800 pb-8 mb-8">
            <div>
              <span className="text-[10px] font-bold font-jakarta tracking-[0.2em] text-brand-gold bg-brand-gold/15 px-3 py-1 rounded inline-block mb-3 uppercase">
                SPOTLIGHT: Quiro Certified Resources
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-white tracking-tight">
                Featured Elite Candidates Available Now
              </h3>
              <p className="mt-2 text-sm text-slate-350 font-manrope font-light max-w-2xl">
                These premium certified specialists are immediately available for interview and placement with US & UK accounting departments.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 bg-[#155724]/20 border border-green-500/30 text-green-400 font-mono text-[10px] px-3 py-1.5 rounded-full font-bold">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                CEFR C1 APPROVED & AML CLEAR
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Spotlight 1: Shaoib Shah */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 relative hover:border-brand-gold/40 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-jakarta text-base sm:text-lg font-bold text-white mb-0.5">Shaoib Shah, FCMA, ACPA</h4>
                  <span className="text-xs text-brand-gold font-semibold tracking-wide block">Senior Financial Analyst</span>
                </div>
                <div className="bg-brand-gold/10 text-brand-gold text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded border border-brand-gold/25">
                  Top Placed Profile
                </div>
              </div>
              <p className="text-xs text-slate-350 font-manrope font-light leading-relaxed mb-6">
                Expert in strategic financial modeling, enterprise FP&A pro formas, SaaS cohorts metrics, and global valuations. Works directly with CFO boards to design and scale complex forecasting sheets.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-slate-800/80 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">FCMA Certified</span>
                  <span className="bg-[#C7A35A]/10 text-brand-gold text-[10px] font-mono px-2 py-0.5 rounded">ACPA Fellow</span>
                  <span className="bg-slate-800/80 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">8+ Years Exp</span>
                </div>
                <div className="flex items-center justify-between mt-4 pb-1">
                  <span className="text-[10px] text-slate-400 font-medium">Standard Hours: EST / BST Aligned</span>
                  <span className="text-xs font-bold text-white font-mono">$24 / hr Flat rate</span>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Muhammad Hamid */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 relative hover:border-brand-gold/40 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h4 className="font-jakarta text-base sm:text-lg font-bold text-white mb-0.5">Muhammad Hamid, FCCA</h4>
                  <span className="text-xs text-brand-gold font-semibold tracking-wide block">Tax compliance & US Accounts Manager</span>
                </div>
                <div className="bg-green-500/10 text-green-400 text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded border border-green-500/25">
                  Pre-Vetted
                </div>
              </div>
              <p className="text-xs text-slate-350 font-manrope font-light leading-relaxed mb-6">
                Specialist in US multi-state corporate sales taxes, Federal IRS filings (Form 1040/1120S), and UK HMRC self-assessments. Leads tax structures and ensures seamless, pristine bookkeeping audits.
              </p>
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-slate-800/80 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">FCCA Chartered</span>
                  <span className="bg-[#C7A35A]/10 text-brand-gold text-[10px] font-mono px-2 py-0.5 rounded">IRS Tax Certified</span>
                  <span className="bg-slate-800/80 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">7+ Years Exp</span>
                </div>
                <div className="flex items-center justify-between mt-4 pb-1">
                  <span className="text-[10px] text-slate-400 font-medium">Standard Hours: EST / BST Aligned</span>
                  <span className="text-xs font-bold text-white font-mono">$22 / hr Flat rate</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-brand-gray p-4 rounded-xl border border-slate-200/50">
          
          {/* Search box */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search roles (e.g. Tax, FP&A, Bookkeeper)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white placeholder-slate-400 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                id="talent-search"
            />
          </div>

          {/* Tier buttons */}
          <div className="flex bg-white rounded-lg p-1 border border-slate-200 w-full md:w-auto gap-1">
            <button
              onClick={() => setSelectedTier("all")}
              className={`flex-1 md:flex-initial px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedTier === "all"
                  ? "bg-brand-navy text-white"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              All Tiers ({TALENT_ROLES.length})
            </button>
            <button
              onClick={() => setSelectedTier("middle")}
              className={`flex-1 md:flex-initial px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedTier === "middle"
                  ? "bg-brand-navy text-white"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              Finance Specialities (&lt;$25/hr)
            </button>
            <button
              onClick={() => setSelectedTier("senior")}
              className={`flex-1 md:flex-initial px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedTier === "senior"
                  ? "bg-brand-navy text-white"
                  : "text-slate-600 hover:text-brand-navy"
              }`}
            >
              Senior & CFO Lead (&ge;$25/hr)
            </button>
          </div>

        </div>

        {/* Talent Grid Display */}
        {filteredProfilesGrid(filteredRoles)}

      </div>
    </section>
  );
};

function filteredProfilesGrid(roles: TalentRole[]) {
  if (roles.length === 0) {
    return (
      <div className="text-center py-16 bg-brand-gray border border-dashed border-slate-300 rounded-xl">
        <p className="text-slate-500 font-manrope">No talent profiles match your search criteria.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-xs font-semibold text-brand-gold hover:underline"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {roles.map((role, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 p-6 flex flex-col justify-between group"
        >
          <div>
            {/* Title Block */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-jakarta text-lg font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                  {role.title}
                </h3>
                <span className="text-[10px] bg-brand-gray text-slate-500 border border-slate-200 font-mono px-2 py-0.5 rounded-full mt-1.5 inline-block">
                  Level: {role.experience}
                </span>
              </div>
              <div className="bg-brand-gold/10 text-brand-gold p-1.5 rounded-full">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Description */}
            <p className="font-manrope text-xs text-slate-600 font-light leading-relaxed mb-6">
              {role.desc}
            </p>

            {/* Certifications & Education badge rows */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="text-[10px] font-manrope font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                  Pre-Vetted Credentials
                </span>
                <div className="flex flex-wrap gap-1">
                  {role.certs.map((c, cIdx) => (
                    <span
                      key={cIdx}
                      className="bg-brand-gold/5 text-brand-gold border border-brand-gold/15 text-[10px] font-manrope font-semibold px-2 py-0.5 rounded"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills checklist */}
              <div>
                <span className="text-[10px] font-manrope font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                  Core Skills Included
                </span>
                <div className="flex flex-wrap gap-1">
                  {role.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-brand-gray text-brand-navy text-[10px] font-medium px-2 py-0.5 rounded border border-slate-200/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison Line */}
          <div className="bg-brand-gray border border-slate-200/50 p-3 rounded-lg flex items-center justify-between text-xs mt-4">
            <div>
              <span className="text-[9px] font-manrope text-slate-400 uppercase block leading-none mb-1">
                Local Cost (US/UK)
              </span>
              <strong className="text-slate-500 font-bold font-mono text-xs line-through">
                ${role.localRate}/hr
              </strong>
            </div>

            <div className="h-6 w-[1px] bg-slate-200" />

            <div>
              <span className="text-[9px] font-manrope text-brand-gold uppercase block leading-none mb-1 font-bold">
                Quiro Offshore Rate
              </span>
              <strong className="text-brand-navy font-extrabold font-mono text-sm">
                ${role.quiroRate}/hr
              </strong>
            </div>

            <div className="bg-green-500/10 text-green-600 font-mono font-bold text-[10px] px-2 py-1 rounded">
              -{Math.round(((role.localRate - role.quiroRate) / role.localRate) * 100)}%
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
