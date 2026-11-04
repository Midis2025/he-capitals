"use client";

import React from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const GlobalAudience: React.FC = () => {
  return (
    <section className="section-spacing bg-[#F8FAFC] relative border-b border-[#DFE6EF]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: High-Contrast World Network Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-xl overflow-hidden border border-[#1E365C] shadow-2xl bg-[#091426] group">
              <Image
                src="/images/about-global-network-enhanced.jpg"
                alt="High-contrast dark navy global network map with illuminated gold and cyan capital flow arcs"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Restrained subtle edge vignette - no heavy overlay obscuring the continents */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091426]/50 via-transparent to-transparent pointer-events-none" />

              {/* Minimal caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E] bg-[#091426]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#1A2D4B]">
                  CROSS-BORDER INVESTOR REACH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Contrast Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 order-1 lg:order-2"
          >
            {/* Section Badge */}
            <SectionBadge number="02" label="GLOBAL ENGAGEMENT" />

            {/* Main Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#0B1A30] leading-[1.12] tracking-tight font-normal">
              Engaging Your Audience Globally.
            </h2>

            {/* Restrained Gold Editorial Rule */}
            <div className="w-16 h-[2px] bg-[#B99A5E] my-1.5" />

            {/* High-Contrast Paragraphs */}
            <div className="space-y-4 pt-1 text-[15px] sm:text-[16px] text-[#334155] leading-[1.75] font-normal max-w-2xl">
              <p>
                We strive to improve our results with every client and campaign,
                and regularly engross ourselves in the latest news, achievements
                and developments across the diverse range of sectors that we
                work in. By doing so, we are able to challenge expectation, push
                the boundaries of what can be achieved, and identify the right
                opportunities for our global network of clients.
              </p>
              <p>
                And with an extensive bank of contacts and institutional
                investors on hand, we’re ideally placed to put you in touch with
                the right investors. We work with public limited companies on
                the stock market in North America, Europe, Asia, Australia and
                South America and crucially, know how to tailor our campaigns to
                each{"\u00A0"}market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
