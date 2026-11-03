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
  width = 168,
  height = 45,
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center transition-opacity hover:opacity-90 select-none ${className}`}
      aria-label="HE Capital Markets Home"
    >
      <Image
        src={light ? "/logos/logo-white.png" : "/logos/logo.png"}
        alt="HE Capital Markets"
        width={width}
        height={height}
        priority
        className="h-auto object-contain"
        style={{ width: `${width}px`, height: "auto" }}
      />
    </Link>
  );
};
