import React from "react";

export interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// 1. Icon Version
export const QuiroIcon: React.FC<LogoProps> = ({ className = "", width = 48, height = 48 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A7" />
          <stop offset="50%" stopColor="#C7A35A" />
          <stop offset="100%" stopColor="#9C7E41" />
        </linearGradient>
        <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#081C3A" />
          <stop offset="100%" stopColor="#051226" />
        </linearGradient>
      </defs>
      
      {/* Outer Circle of Q (High-end geometric arc) */}
      <circle
        cx="45"
        cy="45"
        r="32"
        stroke="url(#navyGradient)"
        strokeWidth="7"
        fill="transparent"
      />
      
      {/* Inner Elegant Arch Ring */}
      <circle
        cx="45"
        cy="45"
        r="22"
        stroke="url(#goldGradient)"
        strokeWidth="2.5"
        strokeDasharray="140 30"
        fill="transparent"
      />

      {/* Upward Growth Element - Climbing Bars acting as the tail of the Q */}
      {/* Bar 1: Low */}
      <rect
        x="38"
        y="43"
        width="6"
        height="12"
        rx="1"
        fill="url(#navyGradient)"
      />
      {/* Bar 2: Medium */}
      <rect
        x="48"
        y="33"
        width="6"
        height="22"
        rx="1"
        fill="url(#navyGradient)"
      />
      {/* Bar 3: High, extending into upward arrow representing finance */}
      <rect
        x="58"
        y="21"
        width="6"
        height="34"
        rx="1"
        fill="url(#goldGradient)"
      />
      
      {/* Trendline Arrow pointing up and right */}
      <path
        d="M 33,52 L 48,37 L 61,24 L 75,20 L 73,34 L 75,20 L 61,22"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// 2. Main Horizontal Logo
export const QuiroHorizontalLogo: React.FC<LogoProps & { hideTagline?: boolean }> = ({
  className = "",
  width = "220",
  height = "48",
  hideTagline = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <QuiroIcon width={40} height={40} />
      <div className="flex flex-col justify-center select-none">
        <span className="text-2xl font-bold font-jakarta tracking-[0.14em] text-brand-navy leading-none">
          QUIRO<span className="text-brand-gold">.</span>ONLINE
        </span>
        {!hideTagline && (
          <span className="text-[8.5px] font-manrope font-semibold tracking-[0.25em] text-[#64748B] mt-1 uppercase">
            Global Finance Staffing
          </span>
        )}
      </div>
    </div>
  );
};

// 3. Favicon (Ultra small icon version, optimized for tiny containers)
export const QuiroFavicon: React.FC<LogoProps> = ({ className = "", width = 16, height = 16 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldFav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8D5A7" />
          <stop offset="100%" stopColor="#C7A35A" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="10" stroke="#081C3A" strokeWidth="3" fill="transparent" />
      <path d="M12,14 L18,8 M18,8 L24,8 M18,8 L18,14" stroke="url(#goldFav)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="18" width="4" height="8" rx="0.5" fill="url(#goldFav)" />
    </svg>
  );
};

// 4. White (Reversed) Version
export const QuiroWhiteLogo: React.FC<LogoProps & { hideTagline?: boolean }> = ({
  className = "",
  width = "220",
  height = "48",
  hideTagline = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon portion using white gradient and gold */}
      <svg
        width={40}
        height={40}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whiteSolid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="goldGradientWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A7" />
            <stop offset="100%" stopColor="#C7A35A" />
          </linearGradient>
        </defs>
        <circle cx="45" cy="45" r="32" stroke="url(#whiteSolid)" strokeWidth="7" fill="transparent" />
        <circle cx="45" cy="45" r="22" stroke="url(#goldGradientWhite)" strokeWidth="2.5" fill="transparent" />
        <rect x="38" y="43" width="6" height="12" rx="1" fill="url(#whiteSolid)" />
        <rect x="48" y="33" width="6" height="22" rx="1" fill="url(#whiteSolid)" />
        <rect x="58" y="21" width="6" height="34" rx="1" fill="url(#goldGradientWhite)" />
        <path
          d="M 33,52 L 48,37 L 61,24 L 75,20 L 73,34 L 75,20 L 61,22"
          stroke="url(#goldGradientWhite)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col justify-center select-none">
        <span className="text-2xl font-bold font-jakarta tracking-[0.14em] text-white leading-none">
          QUIRO<span className="text-brand-gold">.</span>ONLINE
        </span>
        {!hideTagline && (
          <span className="text-[8.5px] font-manrope font-semibold tracking-[0.25em] text-gray-400 mt-1 uppercase">
            Global Finance Staffing
          </span>
        )}
      </div>
    </div>
  );
};

// 5. Black Version
export const QuiroBlackLogo: React.FC<LogoProps & { hideTagline?: boolean }> = ({
  className = "",
  width = "220",
  height = "48",
  hideTagline = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon portion using purely deep tones */}
      <svg
        width={40}
        height={40}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="45" cy="45" r="32" stroke="#000000" strokeWidth="7" fill="transparent" />
        <circle cx="45" cy="45" r="22" stroke="#4A5568" strokeWidth="2.5" fill="transparent" />
        <rect x="38" y="43" width="6" height="12" rx="1" fill="#000000" />
        <rect x="48" y="33" width="6" height="22" rx="1" fill="#000000" />
        <rect x="58" y="21" width="6" height="34" rx="1" fill="#1A202C" />
        <path
          d="M 33,52 L 48,37 L 61,24 L 75,20 L 73,34 L 75,20 L 61,22"
          stroke="#000000"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col justify-center select-none">
        <span className="text-2xl font-bold font-jakarta tracking-[0.14em] text-black leading-none">
          QUIRO<span className="text-[#1A202C]">.</span>ONLINE
        </span>
        {!hideTagline && (
          <span className="text-[8.5px] font-manrope font-semibold tracking-[0.25em] text-gray-600 mt-1 uppercase">
            Global Finance Staffing
          </span>
        )}
      </div>
    </div>
  );
};
