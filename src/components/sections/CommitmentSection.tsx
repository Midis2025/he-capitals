"use client";

import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { COMMITMENT_PILLARS } from "@/lib/constants";
import { motion } from "framer-motion";

export const CommitmentSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0B1A30] text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#244A80]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B99A5E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Mission & Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <SectionBadge number="03" label="OUR COMMITMENT" light />

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.14] tracking-tight font-normal">
              Dedicated to Helping Clients and Investors Expand Their Networks.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#8E9CAE] leading-relaxed font-normal pt-2">
              <p>
                We believe every successful business deserves the right
                connections, strategic direction, and market visibility to reach
                its full potential.
              </p>
              <p>
                We develop tailored strategies that combine investor relations,
                shareholder communications, equity financing communications,
                public relations, and digital media to support our clients
                objectives.
              </p>
              <p>
                Every company has different ambitions and challenges. Our approach
                is designed around individual business goals rather than a one
                size fits all strategy.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Numbered Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COMMITMENT_PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0E203B] border border-[#1A2D4B] rounded p-6 sm:p-8 hover:border-[#B99A5E]/50 transition-colors duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-[#B99A5E] block mb-4">
                    {pillar.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-[#B99A5E] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8E9CAE] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
