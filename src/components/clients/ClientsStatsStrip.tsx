"use client";

import React from "react";
import { Handshake, BarChart3, Globe, Layers } from "lucide-react";

export const ClientsStatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Handshake,
      value: "50+",
      label: "Companies Advised",
    },
    {
      icon: BarChart3,
      value: "10+",
      label: "Industry Sectors",
    },
    {
      icon: Globe,
      value: "Global",
      label: "Investor Reach",
    },
    {
      icon: Layers,
      value: "Long-Term",
      label: "Client Partnerships",
    },
  ];

  return (
    <section className="bg-[#071629] pb-10 sm:pb-12 lg:pb-14 relative z-20">
      <div className="site-container">
        <div className="rounded-xl lg:rounded-2xl bg-[#091C34]/85 border border-[#1E3A61]/70 backdrop-blur-md shadow-2xl shadow-[#040C17]/80 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1E3A61]/60">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-5 sm:p-6 lg:p-7 flex items-center gap-4 sm:gap-4.5 justify-center md:justify-start group hover:bg-white/[0.02] transition-colors"
                >
                  {/* Gold Outline Icon */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#C5A15A]/10 border border-[#C5A15A]/25 flex items-center justify-center shrink-0 text-[#C5A15A] group-hover:border-[#C5A15A]/50 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                  </div>

                  {/* Stat Value & Label */}
                  <div>
                    <div className="font-serif text-xl sm:text-2xl lg:text-[27px] font-normal text-white leading-tight tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#A0B3C6] font-normal leading-tight pt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
