"use client";

import React from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const AboutIntroduction: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F9FB] relative border-b border-[#DFE6EF] overflow-hidden">
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-0 right-1/4 w-[460px] h-[460px] bg-[#1E3A66]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Content (approximately 54%) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-5"
          >
            {/* Eyebrow Label with Thin Gold Accent */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs sm:text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                OUR APPROACH
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] lg:text-[45px] xl:text-[46px] text-[#071629] leading-[1.1] tracking-[-0.015em] font-normal">
              Effective Comprehensive Communications.
            </h2>

            {/* Thin Gold Divider */}
            <div className="w-16 h-[2px] bg-[#C5A15A] my-2" />

            {/* Three Editorial Paragraphs of Original Company Content */}
            <div className="space-y-4 sm:space-y-4.5 pt-1 text-[15.5px] sm:text-[16px] md:text-[16.5px] text-[#334155] leading-[1.72] font-normal max-w-2xl">
              <p>
                With the right strategy in place, there’s no limit to what your
                company can achieve. Whether it’s Investor Relations and
                Shareholder Communications, inspiring Public Relations
                programmes, Equity Financing, or Digital and Social Media
                campaigns that you require to boost your value, HE Capital
                Markets will take care of every essential aspect on your behalf.
              </p>
              <p>
                Putting you face-to-face with the right high net worth
                individuals, placing your company at the ideal expos and
                roadshows, or positioning you ideally online, we only accomplish
                our goals when you reach yours.
              </p>
              <p>
                Drawing upon our years of experience across all forms of media
                and stock-brokering, and with an in-depth knowledge of capital
                markets, our expert team is entirely dedicated to delivering
                inspiring, creative and strategic{"\u00A0"}communications.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Generated Metallic Glass Globe Visual (approximately 46%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] aspect-[3/2] rounded-xl overflow-hidden border border-[#0B1A30]/15 shadow-xl shadow-[#071629]/10 bg-[#071629] group">
              <Image
                src="/images/about-approach-globe.jpg"
                alt="Metallic glass globe with illuminated gold connection points and network lines"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />

              {/* Very subtle edge softening vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/50 via-transparent to-transparent pointer-events-none" />

              {/* Subtle architectural caption */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[9.5px] font-semibold tracking-[0.22em] uppercase text-[#E2E8F0] bg-[#071629]/85 backdrop-blur-md px-3 py-1.5 rounded border border-[#1A2D4B]">
                  GLOBAL MARKET PERSPECTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
