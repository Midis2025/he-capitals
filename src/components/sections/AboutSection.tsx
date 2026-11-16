"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const tickerItems = [
    "Global Network",
    "Approximately 40 Years of Team Experience",
    "Investor Connections",
    "Strategic Expertise",
  ];

  return (
    <section id="about" className="pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 bg-white relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5"
          >
            {/* Section Badge */}
            <SectionBadge number="02" label="ABOUT HE CAPITAL MARKETS" />

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#071629] leading-[1.14] tracking-tight font-normal">
              Global Investor Relations{"\u00A0"}Specialists.
            </h2>

            {/* Subheading */}
            <p className="font-serif text-lg sm:text-xl text-[#C5A15A] italic">
              Building market value through strategic{"\u00A0"}consultation.
            </p>

            {/* Eyebrow Callout */}
            <div className="pt-1">
              <span className="text-[11.5px] sm:text-xs font-semibold tracking-[0.24em] text-[#071629] uppercase block">
                INNOVATIVE COMMUNICATIONS. STRATEGIES THAT INSPIRE INVESTMENT.
              </span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal max-w-2xl">
              <p>
                HE Capital Markets is a full service investor relations firm with
                a proven track record in helping companies optimize visibility in
                North American and international{"\u00A0"}markets.
              </p>
              <p>
                We combine strategic communications, investor outreach and
                financial market knowledge to help ambitious companies generate
                awareness, attract new investors and elevate their market{"\u00A0"}positioning.
              </p>
              <p>
                With a team bringing approximately 40 years of capital markets
                experience, we have developed an extensive network of brokers,
                funds, venture capital firms, private equity groups, high
                net-worth individuals and family offices across the US, Canada,
                Europe and{"\u00A0"}Asia.
              </p>
            </div>

            {/* Link */}
            <div className="pt-2">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.16em] uppercase text-[#071629] hover:text-[#C5A15A] transition-colors group whitespace-nowrap"
              >
                <span>ONE CONNECTED INVESTMENT LANDSCAPE</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A15A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual: Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[460px] aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/about-globe.jpg"
                alt="Global network connectivity and international capital markets reach"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Ticker / Strip */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#DFE6EF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
            {tickerItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <span className="text-[#C5A15A] text-xs">◇</span>
                <span className="text-[13px] sm:text-[14px] font-medium tracking-wide text-[#071629]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

