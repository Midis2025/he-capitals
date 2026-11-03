import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  light?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  light = false,
  className = "",
  width = 150,
  height = 40,
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center justify-center bg-[#0B1A30] hover:bg-[#12233f] border border-[#1A2D4B] px-4 py-2 rounded shadow-sm hover:border-[#B99A5E]/70 transition-all duration-300 group select-none ${className}`}
      aria-label="HE Capital Markets Home"
    >
      <Image
        src="/logos/logo.png"
        alt="HE Capital Markets"
        width={width}
        height={height}
        priority
        className="h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ width: `${width}px`, height: "auto" }}
      />
    </Link>
  );
};
