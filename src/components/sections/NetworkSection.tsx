"use client";

import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const NetworkSection: React.FC = () => {
  const logos = [
    { id: 1, emblem: "◇", name: "AURA CAPITAL" },
    { id: 2, emblem: "△", name: "MERIDIAN" },
    { id: 3, emblem: "○", name: "NEXUS GROUP" },
    { id: 4, emblem: "⬡", name: "VANTAGE LABS" },
    { id: 5, emblem: "□", name: "ZENITH ASSETS" },
  ];

  return (
    <section id="clients" className="py-20 md:py-28 bg-[#F1F5FB] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto mb-14">
          <SectionBadge number="07" label="OUR NETWORK" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
            Trusted Clients & Partners.
          </h2>
          <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
            We work alongside a diverse group of companies and industry
            participants across our key sectors.
          </p>
        </div>

        {/* 5 Reserved Logo Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#DFE6EF] rounded p-6 sm:p-8 flex flex-col items-center justify-center gap-3 hover:border-[#B99A5E]/60 transition-colors group"
            >
              <span className="text-xl text-[#B99A5E] group-hover:scale-110 transition-transform">
                {logo.emblem}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.24em] text-[#8E9CAE] group-hover:text-[#0B1A30] transition-colors uppercase">
                LOGO RESERVED
              </span>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-8 text-xs text-[#8E9CAE] font-medium tracking-wide">
          Client logos pending supplied assets
        </div>
      </div>
    </section>
  );
};

