"use client";

import React from "react";
import { Handshake, TrendingUp, Globe, Gem } from "lucide-react";
import { motion } from "framer-motion";

export const ClientsStatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Handshake,
      value: "50+",
      label: "Companies Advised",
    },
    {
      icon: TrendingUp,
      value: "10+",
      label: "Industry Sectors",
    },
    {
      icon: Globe,
      value: "Global",
      label: "Investor Reach",
    },
    {
      icon: Gem,
      value: "Long-Term",
      label: "Client Partnerships",
    },
  ];

  return (
    <section className="bg-white border-b border-[#DFE6EF] relative z-20">
      <div className="site-container py-6 sm:py-7 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-3.5 sm:gap-4 md:px-6 lg:px-8 ${
                  idx < stats.length - 1
                    ? "md:border-r md:border-slate-200/90"
                    : ""
                }`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#FAF7F0] border border-[#C5A15A]/25 flex items-center justify-center shrink-0 text-[#C5A15A]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                </div>
                <div>
                  <div className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal text-[#071629] leading-tight tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#536985] font-normal leading-tight pt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

