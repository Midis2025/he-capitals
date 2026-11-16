"use client";

import React from "react";
import Link from "next/link";
import {
  Sprout,
  Pickaxe,
  Flame,
  Pill,
  Cpu,
  Boxes,
  ArrowRight,
} from "lucide-react";

interface SectorLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SECTOR_LINKS: SectorLink[] = [
  { name: "Cannabis", href: "/#sectors", icon: Sprout },
  { name: "Mining", href: "/#sectors", icon: Pickaxe },
  { name: "Oil & Gas", href: "/#sectors", icon: Flame },
  { name: "Pharmaceuticals", href: "/#sectors", icon: Pill },
  { name: "Technology", href: "/#sectors", icon: Cpu },
  { name: "Blockchain", href: "/#sectors", icon: Boxes },
];

export const SectorExpertiseCard: React.FC = () => {
  return (
    <div className="bg-[#0B1D31] border border-[#1A2E4C] rounded-xl p-6 sm:p-7 shadow-xl shadow-[#040C17]/40 text-white relative overflow-hidden">
      {/* Subtle top specular accent */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A15A]/40 to-transparent pointer-events-none" />

      {/* Heading */}
      <h3 className="font-serif text-2xl sm:text-[26px] text-white font-normal tracking-tight pb-4 mb-1 border-b border-[#1A2E4C]">
        Sector Expertise
      </h3>

      {/* Sector List */}
      <div className="divide-y divide-[#162942]">
        {SECTOR_LINKS.map((sector) => {
          const Icon = sector.icon;

          return (
            <Link
              key={sector.name}
              href={sector.href}
              className="group flex items-center justify-between py-4 px-2 hover:px-3 rounded-md transition-all duration-200 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-md bg-[#10243C] border border-[#1F3A5E] flex items-center justify-center shrink-0 text-[#C5A15A] transition-colors duration-200 group-hover:border-[#C5A15A]/60">
                  <Icon className="w-[19px] h-[19px] stroke-[1.8]" />
                </div>
                <span className="text-[14.5px] sm:text-[15px] font-medium text-[#F1F5F9] transition-colors duration-200 group-hover:text-white">
                  {sector.name}
                </span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#7A8EA4] transition-all duration-200 group-hover:text-[#C5A15A] group-hover:translate-x-1" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

