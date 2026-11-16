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
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-[13.5px] sm:text-[14px] font-medium tracking-[0.03em] transition-all duration-300 group cursor-pointer select-none whitespace-nowrap";

  const variantStyles = {
    primary:
      "bg-[#071629] text-white hover:bg-[#0B1D31] hover:shadow-lg hover:shadow-[#071629]/15 border border-transparent active:scale-[0.99]",
    secondary:
      "bg-[#F8F6F1] text-[#071629] hover:bg-[#EEF2F6] border border-[#DCE4EF] active:scale-[0.99]",
    outline:
      "bg-transparent text-[#071629] border border-[#071629]/30 hover:border-[#071629] hover:bg-[#071629]/5 active:scale-[0.99]",
    gold:
      "bg-[#C5A15A] text-[#071629] hover:bg-[#D4B36D] hover:shadow-lg hover:shadow-[#C5A15A]/25 active:scale-[0.99]",
    text:
      "bg-transparent p-0 text-[#071629] hover:text-[#C5A15A] underline-offset-4 hover:underline",
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow === "right" && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {arrow === "up-right" && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C5A15A]" />
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

