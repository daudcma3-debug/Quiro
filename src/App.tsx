import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp, Briefcase, Mail, Phone, ExternalLink, Globe, ShieldAlert, CheckCircle } from "lucide-react";
import { HeroSection } from "./components/HeroSection";
import { TrustBar } from "./components/TrustBar";
import { WhyQuiro } from "./components/WhyQuiro";
import { ServicesSection } from "./components/ServicesSection";
import { TalentSection } from "./components/TalentSection";
import { SoftwareExpertise } from "./components/SoftwareExpertise";
import { HowItWorks } from "./components/HowItWorks";
import { CostCalculator } from "./components/CostCalculator";
import { CaseStudies } from "./components/CaseStudies";
import { FaqSection } from "./components/FaqSection";
import { ContactForm } from "./components/ContactForm";
import { QuiroHorizontalLogo, QuiroWhiteLogo } from "./components/Logo";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [preFilledDetails, setPreFilledDetails] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "talent">("home");

  // Router listener using window hash to power real multi-page browsing simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#/services") {
        setCurrentPage("services");
        window.scrollTo({ top: 0 });
      } else if (hash === "#/talent") {
        setCurrentPage("talent");
        window.scrollTo({ top: 0 });
      } else {
        setCurrentPage("home");
        // Deep link section support on home page
        const secId = (hash && hash.startsWith("#") && !hash.startsWith("#/")) ? hash.substring(1) : "";
        if (secId) {
          setTimeout(() => {
            const elm = document.getElementById(secId);
            if (elm) {
              elm.scrollIntoView({ behavior: "smooth" });
            }
          }, 150);
        } else {
          window.scrollTo({ top: 0 });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Monitor scroll height to trigger floating header effects & scrollTop buttons
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page: "home" | "services" | "talent", sectionId?: string) => {
    setMobileMenuOpen(false);
    if (page === "home") {
      if (sectionId) {
        if (currentPage === "home") {
          const elm = document.getElementById(sectionId);
          if (elm) {
            elm.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.hash = `#${sectionId}`;
        }
      } else {
        window.location.hash = "#/";
      }
    } else if (page === "services") {
      window.location.hash = "#/services";
    } else if (page === "talent") {
      window.location.hash = "#/talent";
    }
  };

  const handleBookDiscoveryCall = () => {
    navigateTo("home", "contact");
  };

  const handleCalculatorFormExport = (details: string) => {
    setPreFilledDetails(details);
    navigateTo("home", "contact");
  };

  return (
    <div className="relative min-h-screen bg-[#FCFAF6] text-brand-navy antialiased">
      
      {/* 1. Header Navigation Bar (Glassmorphism + Dynamic Active Status Underlines) */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md py-3.5"
            : "bg-brand-navy/15 backdrop-blur-sm lg:bg-transparent border-b border-white/5 py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo brand lockup */}
          <div className="cursor-pointer" onClick={() => navigateTo("home")}>
            {scrolled ? (
              <QuiroHorizontalLogo width={180} height={40} hideTagline={true} />
            ) : (
              <QuiroWhiteLogo width={180} height={40} hideTagline={true} />
            )}
          </div>

          {/* Desktop Navigation links - No Brand Kit */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-jakarta font-bold tracking-wider uppercase">
            <button
              onClick={() => navigateTo("home")}
              className={`hover:text-brand-gold transition-colors pb-1 cursor-pointer transition-all ${
                currentPage === "home"
                  ? "text-brand-gold border-b-2 border-brand-gold font-extrabold"
                  : scrolled
                  ? "text-slate-700"
                  : "text-white"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo("services")}
              className={`hover:text-brand-gold transition-colors pb-1 cursor-pointer transition-all ${
                currentPage === "services"
                  ? "text-brand-gold border-b-2 border-brand-gold font-extrabold"
                  : scrolled
                  ? "text-slate-700"
                  : "text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("talent")}
              className={`hover:text-brand-gold transition-colors pb-1 cursor-pointer transition-all ${
                currentPage === "talent"
                  ? "text-brand-gold border-b-2 border-brand-gold font-extrabold"
                  : scrolled
                  ? "text-slate-700"
                  : "text-white"
              }`}
            >
              Talent Pool
            </button>
            <button
              onClick={() => navigateTo("home", "calculator")}
              className={`hover:text-brand-gold transition-colors cursor-pointer ${
                scrolled ? "text-slate-700 font-semibold" : "text-white font-semibold"
              }`}
            >
              Calculator
            </button>
            <button
              onClick={() => navigateTo("home", "case-studies")}
              className={`hover:text-brand-gold transition-colors cursor-pointer ${
                scrolled ? "text-slate-700 font-semibold" : "text-white font-semibold"
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => navigateTo("home", "faqs")}
              className={`hover:text-brand-gold transition-colors cursor-pointer ${
                scrolled ? "text-slate-700 font-semibold" : "text-white font-semibold"
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Direct CTA Button Right */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleBookDiscoveryCall}
              className={`px-5 py-2.5 rounded-md font-jakarta text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "bg-brand-navy text-white hover:bg-[#0c2b59] shadow-sm"
                  : "bg-brand-gold hover:bg-[#B69249] text-brand-navy font-extrabold shadow-md"
              }`}
              id="header-cta-btn"
            >
              Discuss Staffing
            </button>
          </div>

          {/* Mobile menu hamburger toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-brand-navy" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-brand-navy" : "text-white"}`} />
            )}
          </button>

        </div>

        {/* Mobile Navigation Drawer Panel - No Brand Kit */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#051226] border-b border-slate-800 shadow-2xl p-6 flex flex-col gap-5 text-sm font-jakarta font-bold tracking-wider uppercase text-white animate-fade-in">
            <button onClick={() => navigateTo("home")} className="text-left py-2 hover:text-brand-gold">Home</button>
            <button onClick={() => navigateTo("home", "why-quiro")} className="text-left py-2 hover:text-brand-gold">Why Us</button>
            <button onClick={() => navigateTo("services")} className="text-left py-2 hover:text-brand-gold">Services</button>
            <button onClick={() => navigateTo("talent")} className="text-left py-2 hover:text-brand-gold">Talent Pool</button>
            <button onClick={() => navigateTo("home", "calculator")} className="text-left py-2 hover:text-brand-gold">Savings Calculator</button>
            <button onClick={() => navigateTo("home", "case-studies")} className="text-left py-2 hover:text-brand-gold">Case Studies</button>
            <button onClick={() => navigateTo("home", "faqs")} className="text-left py-2 hover:text-brand-gold">FAQs</button>
            
            <button
              onClick={handleBookDiscoveryCall}
              className="mt-4 w-full bg-brand-gold text-brand-navy font-bold tracking-widest text-xs uppercase py-3.5 rounded text-center shadow-lg cursor-pointer"
            >
              Discuss Staffing
            </button>
          </div>
        )}
      </header>

      {/* Primary Browseable Page View Container */}
      <main className="overflow-x-hidden min-h-[70vh]">
        
        {/* VIEW 1: HOME PAGE */}
        {currentPage === "home" && (
          <div className="animate-fade-in">
            <HeroSection onBookCall={handleBookDiscoveryCall} />
            <TrustBar />
            <WhyQuiro />
            
            {/* Elegant Sub-Page Multi-Route Showcase Promotion */}
            <section className="bg-slate-50 py-16 border-y border-slate-200">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <span className="text-[10px] font-bold font-jakarta uppercase text-brand-gold tracking-[0.2em] bg-brand-gold/15 px-3 py-1 rounded inline-block">
                    Dedicated Portals
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-brand-navy tracking-tight mt-3">
                    Deeply Filtered Staffing Verticals
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-manrope font-light text-slate-600">
                    Click to browse our high-security accounting services or search our timezone-aligned, pre-vetted Karachi & Lahore talent grids.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Services Sub-card */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold font-jakarta text-brand-gold tracking-widest uppercase block mb-1">SERVICES VERTICAL</span>
                      <h4 className="text-xl font-bold font-jakarta text-brand-navy mb-2">Offshore Finance Processes</h4>
                      <p className="text-xs text-slate-600 font-manrope font-light mb-6 leading-relaxed">
                        Explore full outsourced audit trails, tax preparation forms (Federal tax return files, state filings), month-end close protocols, and payroll runs conforming perfectly to GAAP & HMRC directives.
                      </p>
                    </div>
                    <button 
                      onClick={() => navigateTo("services")} 
                      className="text-xs font-bold font-jakarta text-brand-navy hover:text-brand-gold flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span>Explore Services Page</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>

                  {/* Talent Sub-card */}
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold font-jakarta text-brand-gold tracking-widest uppercase block mb-1">VETTED TALENT POOL</span>
                      <h4 className="text-xl font-bold font-jakarta text-brand-navy mb-2">Pakistan Top 1% Professionals</h4>
                      <p className="text-xs text-slate-600 font-manrope font-light mb-6 leading-relaxed">
                        Directly browse credentialed specialists with first-attempt passes in ACCA/CA certifications, bilingual CEFR fluency benchmarks, and comprehensive active timezone matches ready to place in days.
                      </p>
                    </div>
                    <button 
                      onClick={() => navigateTo("talent")} 
                      className="text-xs font-bold font-jakarta text-brand-navy hover:text-brand-gold flex items-center gap-1.5 cursor-pointer group"
                    >
                      <span>Browse Active Talent Hub</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <SoftwareExpertise />
            <HowItWorks />
            <CostCalculator onBookNow={handleCalculatorFormExport} />
            <CaseStudies />
            <FaqSection />
            <ContactForm preFilledDetails={preFilledDetails} />
          </div>
        )}

        {/* VIEW 2: DEDICATED SERVICES PAGE */}
        {currentPage === "services" && (
          <div className="animate-fade-in">
            {/* Services Page Header Jumbotron */}
            <div className="bg-[#051226] text-white pt-40 pb-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,163,90,0.12),transparent_50%)] pointer-events-none" />
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left relative z-10">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                  <button onClick={() => navigateTo("home")} className="text-xs text-slate-400 hover:text-brand-gold transition-colors cursor-pointer">Home</button>
                  <span className="text-xs text-slate-600">/</span>
                  <span className="text-xs text-brand-gold font-bold">Services Portal</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-jakarta tracking-tight text-white mb-4">
                  Comprehensive Offsite Finance Verticals
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-manrope font-light max-w-3xl leading-relaxed">
                  Quiro builds compliant, secure, and robust human infrastructure capabilities for enterprise corporations, accounting practices, and fast-scaling digital CFO firms in the US and UK.
                </p>
              </div>
            </div>

            {/* Render Services Section component inside context */}
            <ServicesSection />

            {/* Custom security & direct integration highlight section */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-[#64748B] uppercase block mb-3">Enterprise Standard Protocols</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-jakarta text-[#081C3A] mb-4">Robust IT & GDPR Infrastructure Compliance</h2>
                <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 font-manrope font-light leading-relaxed mb-8">
                  Security is paramount. Every Quiro professional operates within zero-trust client environments, utilizing biometric workstations, secure enterprise VPN tunnels, and strictly audited virtual machines to protect sovereign bank databases.
                </p>
                <div className="flex justify-center">
                  <button onClick={() => navigateTo("home", "contact")} className="bg-brand-navy hover:bg-[#0c2b59] text-white text-xs font-bold font-jakarta px-8 py-3.5 rounded uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md">
                    Discuss Security Specs
                  </button>
                </div>
              </div>
            </section>

            <ContactForm preFilledDetails={preFilledDetails} />
          </div>
        )}

        {/* VIEW 3: DEDICATED TALENT PAGE */}
        {currentPage === "talent" && (
          <div className="animate-fade-in">
            {/* Talent Page Header Jumbotron */}
            <div className="bg-[#051226] text-white pt-40 pb-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,163,90,0.12),transparent_50%)] pointer-events-none" />
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left relative z-10">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                  <button onClick={() => navigateTo("home")} className="text-xs text-slate-400 hover:text-brand-gold transition-colors cursor-pointer">Home</button>
                  <span className="text-xs text-slate-600">/</span>
                  <span className="text-xs text-brand-gold font-bold">Talent Hub</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-jakarta tracking-tight text-white mb-4">
                  Explore Pakistan's Top 1% Financial Talent
                </h1>
                <p className="text-sm sm:text-base text-slate-300 font-manrope font-light max-w-3xl leading-relaxed">
                  Every accounting professional in our database undergoes an intense 5-step vetting pipeline covering local tax system rules, bilingual proficiency, analytical assessments, and technical general ledger reviews.
                </p>
              </div>
            </div>

            {/* Render Talent Section (Includes featured spotlights for Shoaib Shah and Muhammad Hamid) */}
            <TalentSection />

            {/* Software Expertise section to demonstrate software capabilities */}
            <div className="border-t border-slate-200">
              <SoftwareExpertise />
            </div>

            {/* Custom Onboarding Steps Block */}
            <section className="py-20 bg-brand-gray border-y border-slate-200">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-[#64748B] uppercase block mb-3">Onboarding Roadmap</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-jakarta text-brand-navy mb-4">Deploy Integrated Teams In As Little As 10 Days</h2>
                <p className="text-slate-600 text-xs sm:text-sm font-manrope max-w-xl mx-auto mb-10 leading-relaxed font-light">We hand-select profiles, organize direct interviews, configure access profiles, and manage local employment compliance seamlessly.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                  <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="font-mono text-xs font-bold text-brand-gold block mb-2">STAGE 1</span>
                    <h5 className="font-bold text-sm text-brand-navy mb-1.5">Verify Specifications</h5>
                    <p className="text-[11px] text-slate-500 font-manrope leading-relaxed font-light">We record your required certification tiers, hours overlaps, software credentials, and general ledger frameworks.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="font-mono text-xs font-bold text-brand-gold block mb-2">STAGE 2</span>
                    <h5 className="font-bold text-sm text-brand-navy mb-1.5">Direct Video Interviews</h5>
                    <p className="text-[11px] text-slate-500 font-manrope leading-relaxed font-light">Direct 1-on-1 virtual reviews of candidates matched from our premium certified elite Lahore & Karachi talent bases.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
                    <span className="font-mono text-xs font-bold text-brand-gold block mb-2">STAGE 3</span>
                    <h5 className="font-bold text-sm text-brand-navy mb-1.5">Immediate Delivery</h5>
                    <p className="text-[11px] text-slate-500 font-manrope leading-relaxed font-light font-light">Our local compliance leads configure secure workspaces, install VPN software, and initiate daily workflow trackers.</p>
                  </div>
                </div>
              </div>
            </section>

            <ContactForm preFilledDetails={preFilledDetails} />
          </div>
        )}

      </main>

      {/* 3. Footer Section (No Brand Kit link, Correct mappings to sub-views) */}
      <footer className="bg-[#051226] border-t border-slate-850 text-slate-400 py-16" id="footer">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 border-b border-slate-800/80 pb-12 mb-10">
            
            {/* Left Col: Quiro Branding & Tagline */}
            <div className="lg:col-span-4 space-y-4">
              <QuiroWhiteLogo width={180} height={40} />
              <p className="font-manrope text-xs text-slate-400 leading-relaxed font-light max-w-sm">
                Quiro is the specialized Accounting & Finance offshore staffing partner connecting US and UK companies with Pakistan's top 1% remote financial talent. 100% compliant, secure, and time-zone matched.
              </p>
              
              {/* Regional Regulatory Compliance seal */}
              <div className="inline-flex items-center gap-1.5 bg-[#0C2B59]/60 px-3 py-1.5 rounded text-[10px] font-mono text-brand-gold font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>UK HMRC & US GAAP DIRECT COMPLIANCE REGISTERED</span>
              </div>
            </div>

            {/* Middle Col 1: Page Index navigation - Mapped to navigateTo() */}
            <div className="lg:col-span-2">
              <h4 className="font-jakarta text-xs font-bold text-white uppercase tracking-widest mb-4">
                Staffing Paths
              </h4>
              <ul className="space-y-2.5 text-xs font-manrope font-semibold">
                <li>
                  <button onClick={() => navigateTo("home")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("services")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("talent")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    Talent Pool
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("home", "why-quiro")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("home", "faqs")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    FAQs
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateTo("home", "contact")} className="hover:text-brand-gold transition-colors text-left cursor-pointer">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Middle Col 2: Services List */}
            <div className="lg:col-span-3">
              <h4 className="font-jakarta text-xs font-bold text-white uppercase tracking-widest mb-4">
                Services Scope
              </h4>
              <ul className="space-y-2 text-xs font-manrope font-light">
                <li>Offshore Accounting Staff</li>
                <li>Bookkeeping Services</li>
                <li>Tax Preparation Services</li>
                <li>Payroll Processing</li>
                <li>Accounts Payable & Receivable</li>
                <li>CFO Support Services</li>
                <li>Financial FP&A Analysis</li>
                <li>Audit Support</li>
              </ul>
            </div>

            {/* Right Col: Contact Desk */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-jakarta text-xs font-bold text-white uppercase tracking-widest mb-4">
                Corporate Address Desk
              </h4>
              <div className="space-y-3 text-xs font-manrope font-light">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <a href="tel:+966575615384" className="block hover:text-brand-gold transition-colors font-semibold">
                      +966 575615384 (KSA)
                    </a>
                    <a href="tel:+923137686937" className="block hover:text-brand-gold transition-colors font-semibold mt-1">
                      +92 3137686937 (PK)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <a href="mailto:Info@quiro.online" className="hover:text-brand-gold transition-colors font-semibold underline">
                    Info@quiro.online
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* SEO DISCOVERY TAGS GRID AS MANDATED */}
          <div className="border-b border-slate-800 pb-8 mb-8 text-left">
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-3">
              Corporate SEO Directory Index
            </span>
            <div className="flex flex-wrap gap-2 text-[10px] font-manrope font-medium text-slate-400">
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Offshore Accounting Staff</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Offshore Accountants</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Remote Finance Professionals</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Accounting Outsourcing</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Bookkeeping Services</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Tax Preparation Services</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Offshore Bookkeepers</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Accounting Staffing Solutions</span>
              <span className="bg-brand-dark px-2.5 py-1 rounded border border-slate-800">Remote Accounting Teams</span>
            </div>
          </div>

          {/* Copyright Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope font-light text-slate-500">
            <span>© 2026 Quiro.online. All Rights Reserved.</span>
            
            <div className="flex gap-4">
              <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
              <span>|</span>
              <span className="hover:text-slate-400 transition-colors">Terms of Engagement</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => navigateTo("home")}
          className="fixed bottom-6 right-6 z-50 p-3 bg-brand-gold hover:bg-[#B69249] text-brand-navy rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

    </div>
  );
}
