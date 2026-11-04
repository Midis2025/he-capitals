import React from "react";

interface SectionBadgeProps {
  number?: string;
  label: string;
  light?: boolean;
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  number,
  label,
  light = false,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] whitespace-nowrap ${
        light ? "text-[#B99A5E]" : "text-[#244A80]"
      } ${className}`}
    >
      {number && <span className="text-[#B99A5E] font-medium">{number}</span>}
      <span>{label}</span>
    </div>
  );
};

