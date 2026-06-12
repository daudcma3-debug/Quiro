import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    q: "What makes Quiro different?",
    a: "Unlike generic outsourcing companies, virtual assistant platforms, or massive multi-sector call agencies, Quiro is hyper-specialized. We focus 100% exclusively on senior-level Accounting & Finance professionals. Our vetting standards reflect this: only candidates with proven technical accounting degrees who pass our custom diagnostic tests are admitted into the elite Top 1% pool."
  },
  {
    q: "Do you only provide accounting staff?",
    a: "Yes. To maintain exceptional talent standards, we strictly align with Accounting & Finance. We do not provide virtual support, general secretaries, data entry operators, or sales reps. We supply Bookkeepers, Tax Preparers, Audit Assistants, FP&A Analysts, Financial Controllers, and Virtual CFOs."
  },
  {
    q: "What qualifications do candidates have?",
    a: "Our personnel are highly credentialed. The pool features Chartered Accountants (CAs), ACCA Members and Affiliates, US CPA Candidates, and CFA Charterholders. They hold undergraduate or postgraduate degrees in accounting and corporate finance, accompanied by years of practical firm experience."
  },
  {
    q: "How do you ensure quality?",
    a: "We deploy an advanced 3-tier filtration process: 1) Executive English and conversational aptitude screening; 2) Proctored accounting exams on GAAP, IFRS, IRS, and HMRC rules; 3) Live-sandbox practical tests on cloud ERP software (like NetSuite or QuickBooks). Finally, you interview and hand-select them, ensuring structural alignment."
  },
  {
    q: "What time zones do your professionals work?",
    a: "We guarantee complete alignment with your location. Our remote teams are shifted to synchronize with standard US and UK working windows (including EST, CST, PST, and GMT). Your offshore staff member is active on communication channels, and fully collaborative during your primary office hours."
  },
  {
    q: "Can I hire one resource or an entire team?",
    a: "You can do both. You can begin with a single part-time bookkeeper to manage regular credit card reconciliations, or deploy an entire, ready-to-run offshore back-office department complete with AP/AR clerks, senior tax associates, and a controller."
  },
  {
    q: "How quickly can we start?",
    a: "We typically align and deploy professionals in 10 to 14 business days. Because we maintain an active bench of pre-vetted specialists in tax, reporting, and ledger control, we skip the slow traditional recruitment channels, scaling your capacity immediately."
  },
  {
    q: "What accounting software do candidates use?",
    a: "Our remote specialists are certified software experts. They have hand-on competence across QuickBooks, Xero, Oracle NetSuite, Sage, MS Dynamics Business Central, SAP, Zoho Books, and FreshBooks, along with support portals like Gusto, Rippling, and Bill.com."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF6] border-t border-slate-250" id="faqs">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-hide">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg font-manrope text-slate-600 font-light leading-relaxed">
            Everything you need to know about credentials, security protocols, time zone sync, and building your offshore accounting team.
          </p>
        </div>

        {/* Accordions list */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Accordion Trigger button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-brand-navy font-jakarta font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors cursor-pointer"
                  id={`faq-trigger-${idx}`}
                >
                  <span className="pr-4 line-clamp-1 sm:line-clamp-none">{item.q}</span>
                  <div className="bg-slate-100 p-2 rounded-full text-brand-navy flex-shrink-0 transition-all duration-300">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-navy" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 sm:p-6 bg-slate-50/50">
                    <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA card bottom */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="bg-brand-navy/5 p-3 rounded-xl text-brand-navy flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h4 className="font-jakarta text-sm sm:text-base font-bold text-brand-navy">
                Have an unlisted technical query?
              </h4>
              <p className="font-manrope text-xs text-slate-500 mt-1">
                Speak directly to our onboarding team to discuss deep customized regulatory and compliance setups.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-navy hover:bg-[#0c2b59] text-white font-jakarta text-xs font-bold tracking-wide transition-colors duration-300 whitespace-nowrap"
          >
            <span>Consult Now</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </a>
        </div>

      </div>
    </section>
  );
};
