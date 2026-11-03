"use client";

import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { WorldMap } from "@/components/ui/WorldMap";
import { GLOBAL_REGIONS } from "@/lib/constants";
import { motion } from "framer-motion";

export const GlobalReachSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0B1A30] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#244A80]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto mb-10">
          <SectionBadge number="09" label="GLOBAL REACH" light />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
            Local Understanding. Global Connections.
          </h2>
          <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed font-normal">
            Our network extends across key international markets, connecting
            businesses with investors and industry audiences worldwide.
          </p>
        </div>

        {/* World Map Component */}
        <WorldMap />

        {/* Disclaimer */}
        <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#8E9CAE] uppercase mb-10">
          ILLUSTRATIVE NETWORK REGIONS, NOT OFFICE LOCATIONS
        </div>

        {/* 4 Regions Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-6 border-t border-[#1A2D4B]">
          {GLOBAL_REGIONS.map((region) => (
            <div
              key={region.number}
              className="flex items-center justify-center gap-3 text-center"
            >
              <span className="font-serif text-sm font-medium text-[#B99A5E]">
                {region.number}
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                {region.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

