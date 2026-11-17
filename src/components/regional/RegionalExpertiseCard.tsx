"use client";

import React from "react";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { RegionalExpertise } from "@/lib/regional-data";

interface RegionalExpertiseCardProps {
  expertise: RegionalExpertise;
}

export const RegionalExpertiseCard: React.FC<RegionalExpertiseCardProps> = ({
  expertise,
}) => {
  return (
    <div className="bg-[#0B1D31] border border-[#1A2E4C] rounded-xl p-6 sm:p-7 shadow-xl shadow-[#040C17]/40 text-white relative overflow-hidden space-y-6">
      {/* Top gold specular accent line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A15A]/50 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="border-b border-[#1A2E4C] pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-5 h-[1.5px] bg-[#C5A15A]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C5A15A] uppercase">
            REGIONAL EXPERTISE
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-[25px] text-white font-normal tracking-tight">
          {expertise.title}
        </h3>
        {expertise.subtitle && (
          <p className="text-xs text-[#8E9CAE] font-medium tracking-wide uppercase mt-1">
            {expertise.subtitle}
          </p>
        )}
      </div>

      {/* Description */}
      {expertise.description && (
        <p className="text-[14px] text-[#A0B3C6] leading-relaxed">
          {expertise.description}
        </p>
      )}

      {/* Key Focus Highlights */}
      <div className="space-y-3">
        <h4 className="text-[11.5px] font-semibold tracking-[0.18em] text-[#C5A15A] uppercase">
          Key Capabilities
        </h4>
        <div className="space-y-2.5">
          {expertise.highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#E2E8F0] leading-snug">
              <CheckCircle2 className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Regional Office Phone */}
      <div className="p-4 rounded-lg bg-[#071629] border border-[#1A2E4C] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#10243C] border border-[#1F3A5E] flex items-center justify-center text-[#C5A15A] shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#8E9CAE]">
              {expertise.officeName} Office
            </div>
            <a
              href={expertise.telHref}
              className="text-sm font-semibold text-white hover:text-[#C5A15A] transition-colors"
            >
              {expertise.phone}
            </a>
          </div>
        </div>
        <a
          href={expertise.telHref}
          className="text-xs font-semibold text-[#C5A15A] hover:underline uppercase tracking-wider shrink-0"
        >
          Call
        </a>
      </div>

      {/* Active Sectors in Region */}
      <div className="space-y-2.5 pt-1">
        <h4 className="text-[11.5px] font-semibold tracking-[0.18em] text-[#C5A15A] uppercase">
          Specialist Sectors
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {expertise.sectors.map((sec) => (
            <Link
              key={sec}
              href="/#sectors"
              className="text-[12px] px-2.5 py-1 rounded bg-[#10243C] border border-[#1A2E4C] text-[#CBD5E1] hover:text-white hover:border-[#C5A15A]/60 transition-colors inline-flex items-center gap-1"
            >
              <span>{sec}</span>
              <ArrowRight className="w-2.5 h-2.5 text-[#C5A15A]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
