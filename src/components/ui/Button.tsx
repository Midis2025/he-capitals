import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "text";
  href?: string;
  external?: boolean;
  arrow?: "right" | "up-right" | "none";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  external = false,
  arrow = "right",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-medium transition-all duration-300 group cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-[#0B1A30] text-white hover:bg-[#152845] hover:shadow-lg hover:shadow-[#0B1A30]/10 border border-transparent active:scale-[0.99]",
    secondary:
      "bg-[#F1F5FB] text-[#0B1A30] hover:bg-[#E2EAF4] border border-[#DFE6EF] active:scale-[0.99]",
    outline:
      "bg-transparent text-[#0B1A30] border border-[#0B1A30]/30 hover:border-[#0B1A30] hover:bg-[#0B1A30]/5 active:scale-[0.99]",
    gold:
      "bg-[#B99A5E] text-white hover:bg-[#A8894E] hover:shadow-lg hover:shadow-[#B99A5E]/20 active:scale-[0.99]",
    text:
      "bg-transparent p-0 text-[#0B1A30] hover:text-[#B99A5E] underline-offset-4 hover:underline",
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow === "right" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {arrow === "up-right" && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B99A5E]" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
