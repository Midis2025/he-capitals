"use client";

import React from "react";
import { Search, Compass, Share2, TrendingUp } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { APPROACH_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";

export const ApproachSection: React.FC = () => {
  const icons = [Search, Compass, Share2, TrendingUp];

  return (
    <section id="approach" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-16">
          <SectionBadge number="06" label="OUR APPROACH" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
            A Strategic Approach to Every Opportunity.
          </h2>
          <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
            We combine industry knowledge, financial market experience, and
            strategic communications to create a structured approach for every
            client.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_STEPS.map((step, index) => {
            const IconComponent = icons[index % icons.length];

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="space-y-4 pt-4 border-t border-[#DFE6EF] group"
              >
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-medium text-[#B99A5E]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F1F5FB] flex items-center justify-center text-[#244A80] group-hover:bg-[#B99A5E] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs font-semibold tracking-[0.2em] text-[#0B1A30] uppercase">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
