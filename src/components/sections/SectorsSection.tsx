"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SECTORS_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export const SectorsSection: React.FC = () => {
  const [mining, tech, blockchain, psychedelics, pharma, cannabis] = SECTORS_DATA;

  return (
    <section id="sectors" className="py-24 md:py-32 bg-[#F1F5FB] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-14">
          <SectionBadge number="05" label="SECTORS WE COVER" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
            Sectors We Cover.
          </h2>
          <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
            We work with companies across a range of investment sectors,
            tailoring each capital markets programme to the audiences and
            opportunities it needs to reach.
          </p>
        </div>

        {/* Asymmetrical Grid matching PDF Layout */}
        <div className="space-y-6">
          {/* Top Row: Mining (Big Card) + Tech & Blockchain (Stacked) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* 01 Mining (Featured Large Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 bg-white rounded border border-[#DFE6EF] overflow-hidden group hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B1A30]">
                <Image
                  src={mining.image}
                  alt={mining.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors flex items-center gap-2">
                    <span className="font-serif text-base text-[#B99A5E] font-medium">
                      {mining.number}
                    </span>
                    <span>{mining.title}</span>
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                  {mining.description}
                </p>
              </div>
            </motion.div>

            {/* Right Stack: 02 Technology & 03 Blockchain */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              {[tech, blockchain].map((sector, idx) => (
                <motion.div
                  key={sector.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="bg-white rounded border border-[#DFE6EF] overflow-hidden group hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] overflow-hidden bg-[#0B1A30]">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-serif text-lg sm:text-xl text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors flex items-center gap-2">
                        <span className="font-serif text-sm text-[#B99A5E] font-medium">
                          {sector.number}
                        </span>
                        <span>{sector.title}</span>
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                      {sector.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row: 3 Equal Cards (04 Psychedelics, 05 Pharma, 06 Cannabis) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[psychedelics, pharma, cannabis].map((sector, idx) => (
              <motion.div
                key={sector.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white rounded border border-[#DFE6EF] overflow-hidden group hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B1A30]">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg sm:text-xl text-[#0B1A30] group-hover:text-[#B99A5E] transition-colors flex items-center gap-2">
                      <span className="font-serif text-sm text-[#B99A5E] font-medium">
                        {sector.number}
                      </span>
                      <span>{sector.title}</span>
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                    {sector.description}
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
