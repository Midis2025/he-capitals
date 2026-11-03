"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SERVICES_DATA, COMMUNICATION_CAPABILITIES } from "@/lib/constants";
import { motion } from "framer-motion";

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const featured = SERVICES_DATA[0];
  const otherServices = SERVICES_DATA.slice(1);

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#DFE6EF]">
          <div className="space-y-3 max-w-2xl">
            <SectionBadge number="04" label="OUR SERVICES" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
              Our Services.
            </h2>
            <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
              We bring together financial expertise, investor connections and
              strategic communications to help companies strengthen their market
              presence, attract investment and unlock new opportunities.
            </p>
          </div>

          <div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 items-start">
          {/* Left Column: Featured Card (01 Investor Relations) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-[#F1F5FB] border border-[#DFE6EF] rounded p-6 sm:p-8 space-y-6"
          >
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-medium text-[#B99A5E] block mb-3">
                {featured.number}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1A30] font-normal mb-3">
                {featured.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                {featured.description}
              </p>
            </div>

            {featured.highlight && (
              <div className="pt-4 border-t border-[#DFE6EF]">
                <p className="font-serif text-base sm:text-lg text-[#0B1A30] italic leading-snug">
                  {featured.highlight}
                </p>
              </div>
            )}

            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group"
              >
                <span>Explore Investor Relations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Other Services Stack */}
          <div className="lg:col-span-7 divide-y divide-[#DFE6EF]">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="py-4 sm:py-5 first:pt-0 last:pb-0 group cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-xs sm:text-sm font-medium text-[#B99A5E]">
                      {service.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed max-w-xl pl-6 sm:pl-7">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Strip: Connected Communication Capabilities */}
        <div className="mt-12 pt-8 border-t border-[#DFE6EF]">
          <div className="mb-4">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#244A80]">
              CONNECTED COMMUNICATION CAPABILITIES
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {COMMUNICATION_CAPABILITIES.map((cap) => (
              <Link
                key={cap}
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#F1F5FB] border border-[#DFE6EF] text-xs font-medium text-[#0B1A30] hover:border-[#B99A5E] hover:bg-white hover:text-[#B99A5E] transition-all group"
              >
                <span>{cap}</span>
                <ArrowUpRight className="w-3 h-3 text-[#B99A5E] opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

