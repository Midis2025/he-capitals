"use client";

import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

interface ClientItem {
  id: number;
  name: string;
  tag: string;
  symbol: string;
}

const CLIENTS_LIST: ClientItem[] = [
  { id: 1, name: "Pan Global", tag: "Resources", symbol: "PG" },
  { id: 2, name: "Harfang Exploration", tag: "Precious Metals", symbol: "HE" },
  { id: 3, name: "Monumental Energy", tag: "Critical Metals", symbol: "ME" },
  { id: 4, name: "Silver One", tag: "Silver Mining", symbol: "S1" },
  { id: 5, name: "West Point Gold", tag: "Gold Exploration", symbol: "WP" },
  { id: 6, name: "Sirios Resources", tag: "Mineral Exploration", symbol: "SR" },
  { id: 7, name: "BULGold", tag: "Gold Assets", symbol: "BG" },
  { id: 8, name: "Kootenay Silver", tag: "Silver Discovery", symbol: "KS" },
  { id: 9, name: "Contango Silver", tag: "Silver Development", symbol: "CS" },
  { id: 10, name: "Standard Uranium", tag: "Clean Energy", symbol: "SU" },
  { id: 11, name: "Idex", tag: "Technology & Resources", symbol: "IX" },
  { id: 12, name: "Talisker Resources", tag: "Gold Exploration", symbol: "TR" },
  { id: 13, name: "GoGold Silver & Gold", tag: "Silver & Gold", symbol: "GG" },
  { id: 14, name: "Aftermath Silver", tag: "Silver Exploration", symbol: "AS" },
  { id: 15, name: "Deep Sea Minerals", tag: "Strategic Minerals", symbol: "DM" },
  { id: 16, name: "Axo Metals", tag: "Base Metals", symbol: "AM" },
  { id: 17, name: "Scottie Resources", tag: "Gold Exploration", symbol: "SR" },
];

export const NetworkSection: React.FC = () => {
  return (
    <section id="clients" className="py-16 md:py-24 bg-[#F1F5FB] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto mb-12">
          <SectionBadge number="07" label="OUR NETWORK" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
            Trusted Clients & Partners.
          </h2>
          <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
            We work alongside a diverse group of companies and industry
            participants across our key sectors.
          </p>
        </div>

        {/* 17 Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 max-w-6xl mx-auto">
          {CLIENTS_LIST.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="bg-white border border-[#DFE6EF] rounded p-4 sm:p-5 flex flex-col items-center justify-center gap-2 hover:border-[#B99A5E]/70 hover:shadow-md transition-all duration-300 group min-h-[110px]"
            >
              {/* Monogram emblem */}
              <div className="w-8 h-8 rounded bg-[#F1F5FB] group-hover:bg-[#0B1A30] flex items-center justify-center transition-colors duration-300">
                <span className="font-serif text-xs font-semibold text-[#B99A5E] group-hover:text-white transition-colors">
                  {client.symbol}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="text-xs sm:text-[13px] font-semibold text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors leading-snug">
                {client.name}
              </h3>

              {/* Subtitle tag */}
              <span className="text-[10px] text-[#8E9CAE] font-medium tracking-wide uppercase">
                {client.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-10 text-xs text-[#8E9CAE] font-medium tracking-wide">
          Select client and partner representation across resource, energy and emerging growth sectors
        </div>
      </div>
    </section>
  );
};
