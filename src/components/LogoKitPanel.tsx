import React, { useState } from "react";
import { 
  QuiroIcon, 
  QuiroHorizontalLogo, 
  QuiroFavicon, 
  QuiroWhiteLogo, 
  QuiroBlackLogo 
} from "./Logo";
import { Copy, Download, Check, ShieldCheck, Image, ExternalLink } from "lucide-react";

const LOGO_VARIANTS = [
  {
    id: "horizontal",
    name: "Main Horizontal Logo",
    description: "The primary brand lockup, combining our stylized geometry Q, custom lettering, and global finance staffing descriptor. Perfect for bright banners, light headers, and primary communications.",
    useCase: "Light headers, slide decks, invoicing",
    bgClass: "bg-white border border-slate-200",
    component: <QuiroHorizontalLogo width={260} height={50} />,
    rawSvg: `<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Dynamic Horizontal Lockup -->
  <!-- Icon Portion -->
  <g transform="translate(0, 4)">
    <circle cx="20" cy="20" r="16" stroke="#081C3A" stroke-width="3.5" fill="none"/>
    <circle cx="20" cy="20" r="11" stroke="#C7A35A" stroke-width="1.25" fill="none"/>
    <rect x="16.5" y="19" width="3" height="6" rx="0.5" fill="#081C3A"/>
    <rect x="21" y="14" width="3" height="11" rx="0.5" fill="#081C3A"/>
    <rect x="26.5" y="9" width="3" height="16" rx="0.5" fill="#C7A35A"/>
    <path d="M 14,24 L 21,17 L 27.5,11 L 34,9 L 33,16 L 34,9 L 27.5,10" stroke="#C7A35A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <!-- Text Portion -->
  <text x="50" y="24" fill="#081C3A" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="bold" letter-spacing="0.14em">QUIRO<tspan fill="#C7A35A">.</tspan>ONLINE</text>
  <text x="50" y="36" fill="#64748B" font-family="Manrope, sans-serif" font-size="7.5" font-weight="600" letter-spacing="0.25em">GLOBAL FINANCE STAFFING</text>
</svg>`
  },
  {
    id: "icon",
    name: "Icon Version (Q Grid)",
    description: "A geometric combination of the letter Q and an upward-trending financial bar graph. It embodies rapid financial expansion, institutional stability, and modern cloud intelligence.",
    useCase: "App launchers, social favicons, corner headers",
    bgClass: "bg-white border border-slate-200",
    component: <QuiroIcon width={90} height={90} />,
    rawSvg: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="45" cy="45" r="32" stroke="#081C3A" stroke-width="7" fill="transparent"/>
  <circle cx="45" cy="45" r="22" stroke="#C7A35A" stroke-width="2.5" fill="transparent"/>
  <rect x="38" y="43" width="6" height="12" rx="1" fill="#081C3A"/>
  <rect x="48" y="33" width="6" height="22" rx="1" fill="#081C3A"/>
  <rect x="58" y="21" width="6" height="34" rx="1" fill="#C7A35A"/>
  <path d="M 33,52 L 48,37 L 61,24 L 75,20 L 73,34 L 75,20 L 61,22" stroke="#C7A35A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  },
  {
    id: "favicon",
    name: "Favicon Version (16x16)",
    description: "A micro-scale layout optimized for small 16x16 or 32x32 browser tab profiles. Extraneous letters and details are stripped, maintaining maximum visual clarity under extremely pixelated densities.",
    useCase: "Browser addresses, utility tab icons",
    bgClass: "bg-white border border-slate-200",
    component: <QuiroFavicon width={40} height={40} />,
    rawSvg: `<svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="14" cy="14" r="10" stroke="#081C3A" stroke-width="3" fill="transparent" />
  <path d="M12,14 L18,8 M18,8 L24,8 M18,8 L18,14" stroke="#C7A35A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="18" y="18" width="4" height="8" rx="0.5" fill="#C7A35A" />
</svg>`
  },
  {
    id: "white",
    name: "White Version (Reversed)",
    description: "Designed for deep dark backgrounds (like deep blues, slate gray, and dark navy headers). Replaces deep navy components with high-luminance pure white elements to ensure crisp premium readability.",
    useCase: "Deep Navy headers, final CTA blocks, dark mode slides",
    bgClass: "bg-brand-navy p-4 rounded-lg",
    component: <QuiroWhiteLogo width={260} height={50} />,
    rawSvg: `<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 4)">
    <circle cx="20" cy="20" r="16" stroke="#FFFFFF" stroke-width="3.5" fill="none"/>
    <circle cx="20" cy="20" r="11" stroke="#C7A35A" stroke-width="1.25" fill="none"/>
    <rect x="16.5" y="19" width="3" height="6" rx="0.5" fill="#FFFFFF"/>
    <rect x="21" y="14" width="3" height="11" rx="0.5" fill="#FFFFFF"/>
    <rect x="26.5" y="9" width="3" height="16" rx="0.5" fill="#C7A35A"/>
    <path d="M 14,24 L 21,17 L 27.5,11 L 34,9 L 33,16 L 34,9 L 27.5,10" stroke="#C7A35A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="50" y="24" fill="#FFFFFF" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="bold" letter-spacing="0.14em">QUIRO<tspan fill="#C7A35A">.</tspan>ONLINE</text>
  <text x="50" y="36" fill="#94A3B8" font-family="Manrope, sans-serif" font-size="7.5" font-weight="600" letter-spacing="0.25em">GLOBAL FINANCE STAFFING</text>
</svg>`
  },
  {
    id: "black",
    name: "Black Version (Monochrome)",
    description: "An absolute classic monochrome layout rendered purely in rich black and deep corporate slate. Strips out color and accents, ensuring high accessibility and pristine printing quality.",
    useCase: "Paper layouts, print packaging, audits books, dry stamps",
    bgClass: "bg-slate-50 border border-slate-200",
    component: <QuiroBlackLogo width={260} height={50} />,
    rawSvg: `<svg width="220" height="48" viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 4)">
    <circle cx="20" cy="20" r="16" stroke="#000000" stroke-width="3.5" fill="none"/>
    <circle cx="20" cy="20" r="11" stroke="#4A5568" stroke-width="1.25" fill="none"/>
    <rect x="16.5" y="19" width="3" height="6" rx="0.5" fill="#000000"/>
    <rect x="21" y="14" width="3" height="11" rx="0.5" fill="#000000"/>
    <rect x="26.5" y="9" width="3" height="16" rx="0.5" fill="#1A202C"/>
    <path d="M 14,24 L 21,17 L 27.5,11 L 34,9 L 33,16 L 34,9 L 27.5,10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="50" y="24" fill="#000000" font-family="Plus Jakarta Sans, sans-serif" font-size="20" font-weight="bold" letter-spacing="0.14em">QUIRO<tspan fill="#1A202C">.</tspan>ONLINE</text>
  <text x="50" y="36" fill="#5A5A5A" font-family="Manrope, sans-serif" font-size="7.5" font-weight="600" letter-spacing="0.25em">GLOBAL FINANCE STAFFING</text>
</svg>`
  }
];

export const LogoKitPanel: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeVar = LOGO_VARIANTS[activeIdx];
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeVar.rawSvg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([activeVar.rawSvg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `quiro_logo_${activeVar.id}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200" id="branding-kit">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold font-jakarta tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/15 px-3 py-1 rounded inline-block mb-4">
            Corporate Assets Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-jakarta text-brand-navy tracking-tight leading-hide">
            The Quiro Logo & Corporate Kit
          </h2>
          <p className="mt-4 text-sm sm:text-base font-manrope text-slate-600 font-light leading-relaxed">
            Download our verified, pixel-perfect vector logo resources designed under precise geometric structures for consulting, accounting and high finance environments.
          </p>
        </div>

        {/* Brand Display Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Col: Switcher & Description */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-brand-gray rounded-2xl border border-slate-200">
            <div>
              <span className="text-[10px] font-bold font-jakarta tracking-[0.2em] text-[#64748B] uppercase block mb-6">
                Identity Selection Panel
              </span>

              {/* Selector list */}
              <div className="space-y-2 mb-8">
                {LOGO_VARIANTS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setCopied(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border font-jakarta text-xs font-bold tracking-wide flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      activeIdx === idx
                        ? "bg-brand-navy text-white border-brand-navy shadow-md scale-[1.02]"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <Image className="w-4 h-4 opacity-55" />
                  </button>
                ))}
              </div>

              {/* Description Block */}
              <div className="border-t border-slate-250 pt-5 space-y-4">
                <div>
                  <h4 className="text-xs font-jakarta font-bold text-brand-navy uppercase tracking-wider mb-1">
                    Guideline Description
                  </h4>
                  <p className="font-manrope text-xs text-slate-600 leading-relaxed font-light">
                    {activeVar.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-jakarta font-bold text-brand-navy uppercase tracking-wider mb-1">
                    Primary Match Environment
                  </h4>
                  <span className="bg-brand-gold/15 text-brand-gold border border-brand-gold/20 font-mono text-[10px] px-2.5 py-0.5 rounded-full inline-block font-semibold">
                    {activeVar.useCase}
                  </span>
                </div>
              </div>
            </div>

            {/* Design Shield Info */}
            <div className="mt-8 pt-4 border-t border-slate-250 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0" />
              <div>
                <h5 className="font-jakarta text-xs font-bold text-brand-navy">Enterprise Geometry Standard</h5>
                <p className="font-manrope text-[10px] text-slate-500 mt-0.5">Strict non-scaling SVGs compliant with big-4 corporate branding audits.</p>
              </div>
            </div>

          </div>

          {/* Right Col: High contrast Canvas View & Vector Source copy actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Display Canvas with variable background */}
            <div className={`rounded-t-2xl min-h-[250px] flex items-center justify-center p-8 transition-colors ${activeVar.bgClass}`}>
              <div className="transform scale-[1.1] transition-transform">{activeVar.component}</div>
            </div>

            {/* Action buttons footer */}
            <div className="bg-[#051226] text-white border-x border-b border-slate-800 p-6 rounded-b-2xl">
              
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold block mb-1">VECTOR SPECIFICATION</span>
                  <span className="text-xs text-slate-300 font-manrope font-light">Scalable formats (.SVG), crisp 1:1 asset maps</span>
                </div>

                <div className="flex gap-3">
                  {/* Copy button */}
                  <button
                    onClick={handleCopyCode}
                    className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded text-xs font-jakarta font-bold transition-all cursor-pointer ${
                      copied
                        ? "bg-green-600 text-white"
                        : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied SVG!" : "Copy SVG Source"}</span>
                  </button>

                  {/* Download button */}
                  <button
                    onClick={handleDownloadSvg}
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded text-xs font-jakarta font-bold bg-brand-gold hover:bg-[#B69249] text-brand-navy cursor-pointer transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .SVG</span>
                  </button>
                </div>
              </div>

              {/* Dynamic live XML representation visual box */}
              <div className="mt-5 bg-slate-950 p-3.5 rounded border border-slate-850 overflow-hidden relative max-h-[80px]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                <pre className="text-[10px] font-mono text-slate-500 overflow-x-auto leading-normal whitespace-pre-wrap select-all">
                  {activeVar.rawSvg}
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
