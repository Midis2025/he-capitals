"use client";

import React from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { WHY_US_POINTS } from "@/lib/constants";
import { motion } from "framer-motion";

export const WhyUsSection: React.FC = () => {
  return (
    <section className="section-spacing bg-white relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Vertical Skyscraper Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[540px] rounded overflow-hidden shadow-xl bg-[#0B1A30]">
              <Image
                src="/images/why-architecture.jpg"
                alt="Modern corporate glass architecture representing strategic clarity and advantage"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Content & Numbered Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            <SectionBadge number="10" label="WHY HE CAPITAL MARKETS" />

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal leading-[1.12] tracking-tight">
              The Right Experience. The Right Connections. A Strategic{"\u00A0"}Advantage.
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-[#5A6878] leading-relaxed font-normal">
              We combine capital markets experience, industry knowledge and
              integrated communication capabilities to help companies navigate
              complex markets and strengthen their presence within the investment{"\u00A0"}community.
            </p>

            <div className="pt-1">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#0B1A30] uppercase">
                PERSPECTIVE BUILDS POSSIBILITY.
              </span>
            </div>

            {/* 5 Numbered Items */}
            <div className="space-y-3.5 pt-3 border-t border-[#DFE6EF]">
              {WHY_US_POINTS.map((point) => (
                <div
                  key={point.number}
                  className="flex items-start gap-3.5 sm:gap-5 group"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#B99A5E] shrink-0 pt-0.5">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal mt-0.5">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

