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
      className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] whitespace-nowrap text-[#C5A15A] ${className}`}
    >
      {number ? (
        <span className="text-[#C5A15A] font-semibold">{number}</span>
      ) : (
        <span className="w-6 h-[2px] bg-[#C5A15A] shrink-0" />
      )}
      <span>{label}</span>
    </div>
  );
};
