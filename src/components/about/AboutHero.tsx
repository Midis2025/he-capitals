"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-[108px] sm:pt-[120px] lg:pt-[134px] pb-16 sm:pb-20 lg:pb-24 bg-[#071629] text-white overflow-hidden border-b border-[#1A2D4B]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#1E3A66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#B99A5E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: 48% Width on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Label with Thin Gold Horizontal Line */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#B99A5E] shrink-0" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.24em] text-[#B99A5E] uppercase">
                ABOUT US
              </span>
            </div>

            {/* Main Heading - Exact Two-Line Composition */}
            <h1 className="font-serif text-[42px] sm:text-[54px] md:text-[64px] lg:text-[70px] xl:text-[76px] leading-[1.04] tracking-[-0.02em] text-white font-normal">
              About HE Capital<br />
              Markets.
            </h1>

            {/* Subtitle - Italic Serif */}
            <p className="font-serif italic font-light text-xl sm:text-2xl md:text-[24px] lg:text-[26px] text-[#E8F0F8] tracking-wide pt-1">
              Strategic Insight. Global Connections. Lasting Value.
            </p>

            {/* Description */}
            <p className="text-base sm:text-[16.5px] md:text-[17.5px] text-[#9CB1C9] leading-[1.65] font-normal max-w-[490px] pt-1">
              A capital markets advisory firm that helps companies build market
              value through strategic communication, investor engagement and
              global{"\u00A0"}reach.
            </p>

            {/* CTA Button */}
            <div className="pt-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 text-sm font-semibold tracking-wider text-[#071629] bg-[#C29F5C] hover:bg-[#D4B372] rounded transition-all duration-200 shadow-xl shadow-[#C29F5C]/25 group"
              >
                <span>Discuss Your Goals</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-sans text-base leading-none">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 52% Width Architectural Skyscraper Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/11] xl:aspect-[5/4] max-h-[580px] rounded-xl overflow-hidden shadow-2xl border border-[#1E365C]/80 bg-[#071629] group">
              <Image
                src="/images/about-hero-skyscrapers.jpg"
                alt="Modern glass corporate financial skyscrapers viewed from below with warm sunlight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Left-edge gradient blend into #071629 */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#071629] to-transparent pointer-events-none" />
              {/* Subtle top & bottom edge softening */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071629]/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#071629]/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
