"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Pickaxe, Cpu, Boxes, Pill, Sprout, Droplets } from "lucide-react";
import { motion } from "framer-motion";

export const IndustriesSupported: React.FC = () => {
  const sectors = [
    { name: "Mining", icon: Pickaxe, href: "/#sectors" },
    { name: "Technology", icon: Cpu, href: "/#sectors" },
    { name: "Blockchain", icon: Boxes, href: "/#sectors" },
    { name: "Pharmaceuticals", icon: Pill, href: "/#sectors" },
    { name: "Psychedelics", icon: Sprout, href: "/#sectors" },
    { name: "Oil & Gas", icon: Droplets, href: "/#sectors" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#071629] text-white relative overflow-hidden border-b border-[#1A2D4B]">
      {/* Subtle Mountain Background Visual in Low Contrast */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-20 mix-blend-screen">
        <Image
          src="/images/clients-hero-mountains.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#071629]/70 to-[#071629]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071629] via-transparent to-[#071629]" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-3 sm:space-y-4 max-w-xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                SECTORS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight leading-[1.12]">
              Industries We Support
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[15.5px] text-[#9CB1C9] leading-relaxed font-normal pt-1">
              Our client companies operate across a range of high-growth sectors,
              including mining, technology, blockchain, pharmaceuticals,
              psychedelics and oil & gas.
            </p>
          </motion.div>

          {/* Right Column: 6 Sector Tiles in a 3x2 Grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {sectors.map((sec) => {
                const Icon = sec.icon;
                return (
                  <Link
                    key={sec.name}
                    href={sec.href}
                    className="bg-[#0B1A2F]/90 border border-[#1E365C]/80 rounded-xl p-5 sm:p-6 text-center flex flex-col items-center justify-center gap-3 hover:border-[#C5A15A]/70 hover:bg-[#0E223D] transition-all group aspect-[4/3] sm:aspect-[1.25/1] shadow-md shadow-[#071629]/50"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A15A] stroke-[1.5] group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#C5A15A] transition-colors tracking-wide">
                      {sec.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

