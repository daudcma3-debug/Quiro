import React, { useState, useEffect } from "react";
import { Calculator, Sparkles, TrendingDown, RefreshCw, ChevronRight, DollarSign, Euro, CheckCircle2 } from "lucide-react";

interface RoleRate {
  id: string;
  name: string;
  localUSRatio: number; // hourly local US rate
  localUKRatio: number; // hourly local UK rate
  quiroRatio: number;  // hourly offshore rate
}

const CALCULATOR_ROLES: RoleRate[] = [
  { id: "bookkeeper", name: "Bookkeeper", localUSRatio: 45, localUKRatio: 35, quiroRatio: 15 },
  { id: "staff-accountant", name: "Staff Accountant", localUSRatio: 55, localUKRatio: 42, quiroRatio: 18 },
  { id: "senior-accountant", name: "Senior Accountant", localUSRatio: 75, localUKRatio: 58, quiroRatio: 25 },
  { id: "tax-preparer", name: "Tax Preparer & Associate", localUSRatio: 70, localUKRatio: 52, quiroRatio: 22 },
  { id: "audit-associate", name: "Audit Associate", localUSRatio: 70, localUKRatio: 55, quiroRatio: 22 },
  { id: "financial-analyst", name: "Financial & FP&A Analyst", localUSRatio: 88, localUKRatio: 68, quiroRatio: 26 },
  { id: "controller", name: "Finance Controller / Manager", localUSRatio: 115, localUKRatio: 88, quiroRatio: 34 },
  { id: "cfo", name: "Virtual CFO Support", localUSRatio: 160, localUKRatio: 125, quiroRatio: 45 },
];

export const CostCalculator: React.FC<{ onBookNow: (details: string) => void }> = ({ onBookNow }) => {
  const [selectedRole, setSelectedRole] = useState(CALCULATOR_ROLES[1]); // Default: Staff Accountant
  const [currency, setCurrency] = useState<"USD" | "GBP">("USD");
  const [staffCount, setStaffCount] = useState<number>(1);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40); // Default: 40hr/wk (Full Time)

  // Calculations
  const localRate = currency === "USD" ? selectedRole.localUSRatio : selectedRole.localUKRatio;
  const quiroRate = selectedRole.quiroRatio;

  const weeklyLocalCost = localRate * hoursPerWeek * staffCount;
  const weeklyQuiroCost = quiroRate * hoursPerWeek * staffCount;

  // Assuming 52 working weeks per year
  const annualLocalCost = weeklyLocalCost * 52;
  const annualQuiroCost = weeklyQuiroCost * 52;
  
  const annualSavings = annualLocalCost - annualQuiroCost;
  const savingsPercentage = Math.round((annualSavings / (annualLocalCost || 1)) * 100);

  const currencySymbol = currency === "USD" ? "$" : "£";

  // Pre-formatted message to pass to contact form
  const handlePrepopulateForm = () => {
    const details = `Hi, I am interested in hiring ${staffCount} Offshore ${selectedRole.name}(s) at ${hoursPerWeek} hours/week, expecting an estimated annual savings of around ${currencySymbol}${annualSavings.toLocaleString()}.`;
    onBookNow(details);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF6] border-y border-slate-200" id="calculator">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Financial Efficiency Modeling
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-hide">
            Compare Costs & Maximize Savings
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-600 font-light leading-relaxed">
            Adjust the sliders to view your projected annual margins, compared payroll expenses, and cumulative bottom-line savings.
          </p>
        </div>

        {/* Dynamic Calculator Structure - Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              
              {/* Header inside Controls */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-navy/5 p-2 rounded-lg text-brand-navy">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <h3 className="font-jakarta font-bold text-lg text-brand-navy">Calculator Settings</h3>
                </div>

                {/* Currency Switcher */}
                <div className="flex bg-brand-gray border border-slate-200 p-1 rounded-lg">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                      currency === "USD"
                        ? "bg-brand-navy text-white shadow"
                        : "text-slate-600 hover:text-brand-navy"
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency("GBP")}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                      currency === "GBP"
                        ? "bg-brand-navy text-white shadow"
                        : "text-slate-600 hover:text-brand-navy"
                    }`}
                  >
                    GBP (£)
                  </button>
                </div>
              </div>

              {/* Selector 1: Role Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-2">
                  Select Target Professional Role
                </label>
                <select
                  value={selectedRole.id}
                  onChange={(e) => {
                    const matched = CALCULATOR_ROLES.find((r) => r.id === e.target.value);
                    if (matched) setSelectedRole(matched);
                  }}
                  className="w-full bg-brand-gray border border-slate-200 text-brand-navy font-jakarta font-semibold py-3 px-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors cursor-pointer"
                  id="calc-role-select"
                >
                  {CALCULATOR_ROLES.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name} — Typical US/UK Local Cost: {currencySymbol}{currency === "USD" ? role.localUSRatio : role.localUKRatio}/hr
                    </option>
                  ))}
                </select>
              </div>

              {/* Slider 1: Number of staff */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider">
                    Staff Seat Count (Dedicated FTEs)
                  </label>
                  <span className="font-mono text-sm font-bold text-brand-navy bg-brand-navy/5 px-2.5 py-0.5 rounded-full">
                    {staffCount} {staffCount === 1 ? "Professional" : "Professionals"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  id="calc-staff-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>1 FTE</span>
                  <span>5 FTEs</span>
                  <span>10 FTEs</span>
                  <span>15+ FTEs</span>
                </div>
              </div>

              {/* Slider 2: Hours per week */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider">
                    Assigned Hours per Week
                  </label>
                  <span className="font-mono text-sm font-bold text-brand-navy bg-brand-navy/5 px-2.5 py-0.5 rounded-full">
                    {hoursPerWeek} Hours / wk
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  id="calc-hours-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>10 hrs (Part-Time Support)</span>
                  <span>20 hrs</span>
                  <span>30 hrs</span>
                  <span>40 hrs (Full-Time Dedicated)</span>
                </div>
              </div>

              {/* Benchmarking note */}
              <div className="bg-brand-gray/80 border border-slate-200/50 rounded-xl p-4 space-y-2.5">
                <h4 className="text-xs font-jakarta font-bold text-slate-700">Comparative Assumptions Breakdown</h4>
                <div className="grid grid-cols-2 gap-4 text-[11px] font-manrope text-slate-500">
                  <div>
                    <span>Local Hourly Equivalent:</span>
                    <strong className="block text-slate-700 font-bold mt-0.5">{currencySymbol}{localRate}/hr</strong>
                  </div>
                  <div>
                    <span>Quiro Remote Hourly Fixed:</span>
                    <strong className="block text-brand-gold font-bold mt-0.5">{currencySymbol}{quiroRate}/hr</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Micro-Savings Note */}
            <div className="mt-6 text-center text-xs text-slate-400 font-manrope font-light">
              * Local payroll calculators factor in average overheads, social protections, office margins, and benefits loading.
            </div>
          </div>

          {/* Savings Outcome Display Panel */}
          <div className="lg:col-span-5 bg-brand-navy text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-[#0C2B59] px-3.5 py-1.5 rounded-full inline-block mb-6">
                ⭐ Annual Cost Analysis
              </span>

              {/* Huge Savings Display */}
              <div className="mb-6">
                <span className="text-xs font-manrope text-gray-400 uppercase tracking-widest block mb-1">
                  Estimated Yearly Capital Recaptured
                </span>
                <div className="flex items-baseline gap-1 text-4xl sm:text-5xl font-extrabold font-jakarta text-white leading-none">
                  <span className="gold-text-gradient">{currencySymbol}{annualSavings.toLocaleString()}</span>
                  <span className="text-xs font-manrope text-[#A2A9B4] font-light font-mono ml-2">SAVED / YR</span>
                </div>
              </div>

              {/* Savings Details rows */}
              <div className="space-y-4 border-t border-slate-850 pt-6 mb-8 text-sm">
                
                {/* Row 1: Local */}
                <div className="flex justify-between items-center text-slate-300 font-manrope">
                  <span className="font-light">United US/UK On-site Cost:</span>
                  <span className="font-mono text-slate-400 line-through">
                    {currencySymbol}{annualLocalCost.toLocaleString()}
                  </span>
                </div>

                {/* Row 2: Quiro */}
                <div className="flex justify-between items-center text-slate-300 font-manrope">
                  <span className="font-light">Quiro Dedicated Remote Cost:</span>
                  <span className="font-mono font-bold text-white text-base">
                    {currencySymbol}{annualQuiroCost.toLocaleString()}
                  </span>
                </div>

                {/* Highlight percentage savings */}
                <div className="bg-[#0C2B59]/60 border border-brand-gold/15 rounded-xl p-4 text-center">
                  <div className="flex justify-between items-center text-brand-gold font-jakarta">
                    <span className="text-xs font-bold uppercase tracking-wider">Payroll Margin Shield:</span>
                    <strong className="text-2xl font-extrabold font-mono">-{savingsPercentage}%</strong>
                  </div>
                  <p className="text-[11px] font-manrope text-slate-300 font-light text-left mt-2 leading-relaxed">
                    By scaling with Quiro, you trim corporate overhead, matching the efficiency targets of the FTSE & Fortune 500.
                  </p>
                </div>

              </div>
            </div>

            {/* Call to action connecting to final booker */}
            <div>
              <button
                onClick={handlePrepopulateForm}
                className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-[#B69249] text-brand-navy font-jakarta font-bold py-4 rounded-xl transition-all duration-300 group shadow-lg"
                id="calc-submit-btn"
              >
                <span>Export & Pre-Fill Proposal</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-[10px] text-gray-400 font-manrope mt-3">
                Pre-fills the Book Booking Form automatically with these calculated saving variables.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
