"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SERVICES_DATA, COMMUNICATION_CAPABILITIES } from "@/lib/constants";
import { motion } from "framer-motion";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-spacing bg-white relative">
      <div className="site-container">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#DFE6EF]">
          <div className="space-y-2.5 max-w-2xl">
            <SectionBadge number="04" label="OUR SERVICES" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
              Our Services.
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-[#5A6878] leading-relaxed font-normal">
              We bring together financial expertise, investor connections and
              strategic communications to help companies strengthen their market
              presence, attract investment and unlock new{"\u00A0"}opportunities.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group whitespace-nowrap"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services Main 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="h-full"
            >
              <Link
                href={service.href || "#contact"}
                className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A5E] rounded transition-all duration-300"
              >
                <div
                  className={`h-full border border-[#DFE6EF] rounded p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-300 group-hover:border-[#B99A5E] group-hover:shadow-sm ${
                    service.isFeatured
                      ? "bg-[#F1F5FB] hover:bg-[#EAF0F8]"
                      : "bg-white hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-2.5 sm:gap-3">
                        <span className="font-serif text-xs sm:text-sm font-semibold text-[#B99A5E] shrink-0">
                          {service.number}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl md:text-[21px] text-[#0B1A30] font-normal group-hover:text-[#B99A5E] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" />
                    </div>

                    <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal pl-5 sm:pl-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip: Connected Communication Capabilities */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#DFE6EF]">
          <div className="mb-3">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#244A80]">
              CONNECTED COMMUNICATION CAPABILITIES
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {COMMUNICATION_CAPABILITIES.map((cap) => (
              <Link
                key={cap}
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#F1F5FB] border border-[#DFE6EF] text-xs font-medium text-[#0B1A30] hover:border-[#B99A5E] hover:bg-white hover:text-[#B99A5E] transition-all group whitespace-nowrap"
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
