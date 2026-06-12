import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  CheckCircle, 
  Database, 
  Download, 
  Trash2, 
  AlertCircle, 
  Briefcase, 
  Globe 
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  company: string;
  country: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  calcSavings?: string;
}

interface ContactFormProps {
  preFilledDetails?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preFilledDetails = "" }) => {
  // Form fields
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("United States");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Offshore Accounting Staff");
  const [message, setMessage] = useState("");
  
  // Submit handling states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // CRM submissions records
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Sync inputs with preFilledDetails if passed from the Cost Calculator
  useEffect(() => {
    if (preFilledDetails) {
      setMessage(preFilledDetails);
      setService("Offshore Accounting Staff");
      // Scroll smoothly to contact form automatically
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [preFilledDetails]);

  // Load existing leads from localStorage
  useEffect(() => {
    const storedLeads = localStorage.getItem("quiro_crm_leads");
    if (storedLeads) {
      try {
        setLeads(JSON.parse(storedLeads));
      } catch (e) {
        console.error("Failed to parse CRM leads", e);
      }
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Simple validation
    if (!name.trim() || !company.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("Please supply a valid corporate email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate server ingestion delay
    setTimeout(() => {
      const newLead: Lead = {
        id: "lead_" + Math.random().toString(36).substr(2, 9),
        name,
        company,
        country,
        email,
        service,
        message,
        timestamp: new Date().toLocaleString(),
        calcSavings: preFilledDetails ? "Cost Model Linked" : "Standard Intake"
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem("quiro_crm_leads", JSON.stringify(updatedLeads));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form fields
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  const handleDeleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem("quiro_crm_leads", JSON.stringify(updated));
  };

  const handleClearAllLeads = () => {
    if (window.confirm("Are you sure you want to clean all stored inquiries?")) {
      setLeads([]);
      localStorage.removeItem("quiro_crm_leads");
    }
  };

  const downloadCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Timestamp", "Name", "Company", "Country", "Email", "Service Needed", "Message"];
    const rows = leads.map(l => [
      l.id,
      `"${l.timestamp}"`,
      `"${l.name}"`,
      `"${l.company}"`,
      `"${l.country}"`,
      `"${l.email}"`,
      `"${l.service}"`,
      `"${l.message.replace(/"/g, '""')}"`
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "quiro_leads_audit.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      
      {/* SECTION 11 — FINAL CTA */}
      <section className="py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden" id="final-cta">
        {/* Floating background gradient circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0C2B59]/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 text-center z-10">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase block mb-4">
            Immediate Capacity Expansion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-jakarta text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            Build Your Offshore Finance Team Today
          </h2>
          <p className="text-base sm:text-lg font-manrope text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Schedule a discussion and discover how Quiro can help your firm scale efficiently. Connect with Pakistan's top 1% accounting talent under direct GMT or US timezone overlaps.
          </p>
          
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md font-jakarta bg-brand-gold hover:bg-[#B69249] text-brand-navy font-bold tracking-wide transition-all duration-300 shadow-xl cursor-pointer"
            id="cta-contact-btn"
          >
            <span>Initiate Partnerships</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SECTION 12 — CONTACT */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Contact Info & Credentials */}
            <div className="lg:col-span-5">
              
              <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
                Corporate Desks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-jakarta text-brand-navy tracking-tight mb-6">
                Consult With Our Partners
              </h2>
              <p className="text-base font-manrope text-slate-600 font-light leading-relaxed mb-8">
                Receive a prompt diagnostic breakdown. We evaluate your accounting requirements, assign specific trial accounts, and structure compliant remote seating in as little as 10 business days.
              </p>

              {/* Contact Information Lines */}
              <div className="space-y-6 mb-10">
                
                {/* Phone 1 */}
                <div className="flex items-center gap-4 bg-brand-gray p-4 rounded-xl border border-slate-200/50">
                  <div className="bg-brand-navy text-brand-gold p-3 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-manrope text-slate-400 font-bold uppercase tracking-wider">
                      Executive Desk (KSA)
                    </span>
                    <a href="tel:+966575615384" className="font-jakarta text-sm sm:text-base font-bold text-brand-navy hover:text-brand-gold transition-colors">
                      +966 575615384
                    </a>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center gap-4 bg-brand-gray p-4 rounded-xl border border-slate-200/50">
                  <div className="bg-brand-navy text-brand-gold p-3 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-manrope text-slate-400 font-bold uppercase tracking-wider">
                      Operations Center (PK)
                    </span>
                    <a href="tel:+923137686937" className="font-jakarta text-sm sm:text-base font-bold text-brand-navy hover:text-brand-gold transition-colors">
                      +92 3137686937
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 bg-brand-gray p-4 rounded-xl border border-slate-200/50">
                  <div className="bg-brand-navy text-brand-gold p-3 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-manrope text-slate-400 font-bold uppercase tracking-wider">
                      Inquiries Desk
                    </span>
                    <a href="mailto:Info@quiro.online" className="font-jakarta text-sm sm:text-base font-bold text-brand-navy hover:text-brand-gold transition-colors underline">
                      Info@quiro.online
                    </a>
                  </div>
                </div>

              </div>

              {/* Visual trust block */}
              <div className="p-5 bg-brand-navy rounded-xl text-white border border-slate-800 text-xs font-manrope">
                <span className="text-brand-gold font-bold font-jakarta tracking-wider uppercase block mb-1">
                  ● ACTIVE OPERATION WINDOW
                </span>
                <p className="text-slate-300 font-light leading-relaxed">
                  Our operational centers operate 24/7. Inquiry responses are guaranteed within two hours during active UK/US financial market trading shifts.
                </p>
              </div>

            </div>

            {/* Right Col: Interactive client Intake Form */}
            <div className="lg:col-span-7 bg-brand-gray rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
              
              <h3 className="font-jakarta font-bold text-lg sm:text-xl text-brand-navy mb-1">
                Partnership Intake Diagnostics
              </h3>
              <p className="text-xs font-manrope text-slate-500 mb-6">
                Complete our secure briefing below to pre-select candidate matching arrays. Required fields marked with *
              </p>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-800 rounded-xl p-8 text-center"
                    id="contact-success-card"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-jakarta font-bold text-lg text-brand-navy mb-2">
                      Brief Submission Recieved
                    </h3>
                    <p className="font-manrope text-sm font-light text-slate-600 max-w-sm mx-auto mb-6">
                      Thank you for contacting Quiro. A regional staffing partner has been assigned to your corporate email and will coordinate candidate resumes.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded bg-brand-navy hover:bg-[#0c2b59] text-white font-jakarta text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleFormSubmit}
                    className="space-y-4"
                    id="quiro-contact-form"
                  >
                    {/* Error container */}
                    {errorMessage && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-700 text-xs font-manrope p-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                          Consolidated Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. David Sterling, FCA"
                          className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold"
                            id="form-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                          Company / Firm Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Sterling Advisors Group"
                          className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold"
                            id="form-company"
                        />
                      </div>
                    </div>

                    {/* Row 2: Country & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                          Country of operations *
                        </label>
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold cursor-pointer"
                            id="form-country"
                        >
                          <option value="United States">United States (GAAP/IRS)</option>
                          <option value="United Kingdom">United Kingdom (IFRS/HMRC)</option>
                          <option value="Saudi Arabia">Saudi Arabia (VAT/Zakat)</option>
                          <option value="Canada">Canada</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Other Regional">Other Jurisdiction</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                          Professional Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. partner@sterlingadvisors.com"
                          className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold"
                            id="form-email"
                        />
                      </div>
                    </div>

                    {/* Dropdown: Service Needed */}
                    <div>
                      <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                        Required Service Track *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold cursor-pointer"
                          id="form-service"
                      >
                        <option value="Offshore Accounting Staff">Offshore Accounting Staff (Full-Time Dedicated)</option>
                        <option value="Bookkeeping Services">Bookkeeping Services (Regular Cloud Ledgers)</option>
                        <option value="Tax Preparation Services">Tax Preparation Services (IRS/HMRC Filing Packages)</option>
                        <option value="Payroll Processing">Payroll Processing & Compliance</option>
                        <option value="Accounts Payable / Receivable">Accounts Payable & Accounts Receivable Operations</option>
                        <option value="Financial Reporting & Boards">Financial Reporting & Board Review packs</option>
                        <option value="CFO Advisory Desk">CFO Support & Strategic Financial Analysis</option>
                        <option value="Audit Support">Audit Support & Testing Preparations</option>
                      </select>
                    </div>

                    {/* Textarea: Brief Details */}
                    <div>
                      <label className="block text-xs font-bold font-manrope text-slate-500 uppercase tracking-wider mb-1.5">
                        Operational requirements / Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your typical workload cycles, required qualifications (e.g. ACCA Finalist, CPA), and software requirements."
                        className="w-full bg-white border border-slate-300 text-brand-navy text-sm font-manrope px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand-gold resize-none"
                        id="form-message"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-navy hover:bg-[#0c2b59] text-white font-jakarta font-bold py-3.5 rounded-lg transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 shadow"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
                          <span>Verifying & Submitting Ledgers...</span>
                        </>
                      ) : (
                        <span>Deploy Consult Request</span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* REAL CRM PLATFORM LINK FOR INTEGRATED AUDITS */}
          <div className="mt-20 border-t border-slate-200 pt-8 text-center">
            <button
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-navy bg-brand-navy/5 hover:bg-brand-navy/10 px-4 py-2 rounded-lg transition-colors cursor-pointer border border-brand-navy/10"
              id="crm-toggle-btn"
            >
              <Database className="w-3.5 h-3.5 text-brand-gold" />
              <span>{showAdminPanel ? "Hide" : "Open"} Quiro CRM Live Hub ({leads.length} Saved)</span>
            </button>
            <p className="text-[10px] text-slate-400 font-manrope mt-1">
              Sandbox administration module tracking saved inquiries securely inside state local storage.
            </p>
          </div>

          {/* CRM Admin Dashboard Panel */}
          <AnimatePresence>
            {showAdminPanel && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-slate-900 text-[#A2A9B4] border border-slate-800 rounded-xl p-6 shadow-2xl font-mono text-xs">
                  
                  {/* Panel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
                    <div>
                      <h4 className="text-white font-bold leading-none text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span>QUIRO LEAD MANAGEMENT DESK (LOCAL STORAGE)</span>
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-1">
                        Securely audits incoming candidate inquiries, calculations, and message payloads.
                      </p>
                    </div>

                    {/* Actions Panel */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={downloadCSV}
                        disabled={leads.length === 0}
                        className="flex items-center gap-1 bg-brand-navy border border-slate-800 hover:border-slate-700 text-white px-2.5 py-1.5 rounded transition-all cursor-pointer text-[10px]"
                      >
                        <Download className="w-3 h-3 text-brand-gold" />
                        <span>Export CSV</span>
                      </button>
                      <button
                        onClick={handleClearAllLeads}
                        disabled={leads.length === 0}
                        className="flex items-center gap-1 bg-red-950/40 text-red-400 hover:bg-red-900 hover:text-white px-2.5 py-1.5 rounded transition-all border border-red-900/30 cursor-pointer text-[10px]"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Format Ledger</span>
                      </button>
                    </div>
                  </div>

                  {/* Leads Data Table */}
                  {leads.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                      <span>No active submissions detected in local database sandbox. Complete the form above to populate lead nodes!</span>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left whitespace-nowrap min-w-max border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10.5px]">
                            <th className="pb-3 pr-4">Timestamp</th>
                            <th className="pb-3 pr-4">Client Representative</th>
                            <th className="pb-3 pr-4">Company</th>
                            <th className="pb-3 pr-4">Scope Need</th>
                            <th className="pb-3 pr-4">Country</th>
                            <th className="pb-3 pr-4">Email</th>
                            <th className="pb-3 text-right">Operational Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-850/40 text-[11px]">
                          {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-800/30">
                              <td className="py-3.5 pr-4 text-slate-500">{lead.timestamp}</td>
                              <td className="py-3.5 pr-4 text-white font-bold">{lead.name}</td>
                              <td className="py-3.5 pr-4 text-brand-gold font-semibold">{lead.company}</td>
                              <td className="py-3.5 pr-4">
                                <span className="bg-slate-800 text-white px-2 py-0.5 rounded text-[10px]">
                                  {lead.service}
                                </span>
                              </td>
                              <td className="py-3.5 pr-4 text-slate-300">{lead.country}</td>
                              <td className="py-3.5 pr-4 text-blue-400 font-bold">{lead.email}</td>
                              <td className="py-3.5 text-right">
                                <button
                                  onClick={() => handleDeleteLead(lead.id)}
                                  className="text-red-400 hover:text-red-500 p-1 rounded hover:bg-slate-800 cursor-pointer text-[10px]"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
};
