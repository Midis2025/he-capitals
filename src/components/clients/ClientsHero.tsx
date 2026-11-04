"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ClientsHero: React.FC = () => {
  return (
    <section className="relative pt-[74px] sm:pt-[76px] bg-[#071629] text-white overflow-hidden border-b border-[#1A2D4B] min-h-[325px] lg:min-h-[340px] flex items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#1E3A66]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C5A15A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      {/* Right-Side Panoramic Mountain Image: Integrated, Full-Bleed to Right Edge (Desktop) */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] xl:w-[60%] pointer-events-none select-none overflow-hidden hidden lg:block z-0">
        <Image
          src="/images/clients-hero-mountains.jpg"
          alt="Majestic alpine mountain peaks during golden sunrise"
          fill
          priority
          sizes="60vw"
          className="object-cover object-[right_center]"
        />
        {/* Seamless Multi-Stop Left Blend into Solid Navy #071629 */}
        <div className="absolute inset-y-0 left-0 w-44 xl:w-60 bg-gradient-to-r from-[#071629] via-[#071629]/80 to-transparent pointer-events-none" />
        {/* Subtle Top & Bottom Edge Blends */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#071629]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#071629]/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="site-container relative z-10 w-full py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 space-y-3 sm:space-y-3.5 max-w-[490px]"
          >
            {/* Eyebrow Label with Thin Gold Horizontal Line */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                OUR CLIENTS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-[40px] sm:text-[46px] md:text-[50px] lg:text-[52px] xl:text-[56px] leading-[1.08] tracking-[-0.02em] text-white font-normal">
              Trusted by<br />
              Leading Companies
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-[15.5px] lg:text-[16px] text-[#A0B3C6] leading-relaxed font-normal max-w-[470px] pt-0.5">
              We work with innovative companies across a range of sectors, from
              early-stage growth through to established market leaders.
            </p>
          </motion.div>

          {/* Mobile/Tablet Fallback Image Display (hidden on desktop where full-bleed is active) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden w-full pb-3"
          >
            <div className="relative w-full aspect-[21/9] sm:aspect-[16/8] rounded-xl overflow-hidden border border-[#1E365C]/50 shadow-xl bg-[#071629]">
              <Image
                src="/images/clients-hero-mountains.jpg"
                alt="Majestic alpine mountain peaks during golden sunrise"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[right_center]"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#071629] via-[#071629]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#071629]/70 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
