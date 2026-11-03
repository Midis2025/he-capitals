import React from "react";
import Link from "next/link";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
      aria-label="HE Capital Markets Home"
    >
      {/* Monogram HE badge */}
      <div className="flex items-center">
        <span
          className={`font-serif text-2xl font-semibold tracking-wider transition-colors ${
            light ? "text-white" : "text-[#0B1A30]"
          }`}
        >
          HE
        </span>
      </div>

      {/* Vertical divider */}
      <div
        className={`w-[1px] h-6 transition-colors ${
          light ? "bg-white/20" : "bg-[#0B1A30]/20"
        }`}
      />

      {/* Stacked Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`text-[10px] font-medium tracking-[0.28em] transition-colors ${
            light ? "text-white" : "text-[#0B1A30]"
          }`}
        >
          CAPITAL
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.28em] mt-[3px] transition-colors ${
            light ? "text-[#94A3B8]" : "text-[#5A6878]"
          }`}
        >
          MARKETS
        </span>
      </div>
    </Link>
  );
};
