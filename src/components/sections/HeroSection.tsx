"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const heroServices = [
    { number: "01", label: "Investor Relations" },
    { number: "02", label: "Capital Markets Advisory" },
    { number: "03", label: "Public Relations" },
    { number: "04", label: "Digital & Social Media" },
    { number: "05", label: "Mergers & Acquisitions" },
  ];

  return (
    <section className="relative pt-[120px] md:pt-[140px] pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 md:space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#244A80] uppercase">
                GLOBAL CAPITAL MARKETS ADVISORY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#0B1A30] font-normal">
              Building Market Value Through Strategic Capital Markets Advisory.
            </h1>

            {/* Subparagraph */}
            <p className="text-base sm:text-lg text-[#5A6878] leading-relaxed max-w-xl font-normal">
              We help ambitious companies navigate capital markets, strengthen
              investor relationships and build lasting market visibility
              through strategic communications and financial expertise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                href="#contact"
                variant="primary"
                className="h-[50px] px-7 text-sm tracking-wide"
              >
                Discuss Your Goals
              </Button>
              <Button
                href="#services"
                variant="outline"
                className="h-[50px] px-7 text-sm tracking-wide"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Hero Main Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-h-[660px] rounded-lg overflow-hidden shadow-2xl bg-[#0B1A30]">
              <Image
                src="/images/hero-skyscrapers.jpg"
                alt="Corporate skyscrapers reaching into the sky representing strategic market growth"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30]/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Dark Info Card (as in design) */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-[270px] sm:w-[300px] bg-[#0B1A30]/90 backdrop-blur-md border border-[#1A2D4B] rounded p-5 text-white shadow-2xl">
                <div className="text-[10px] font-semibold tracking-[0.24em] text-[#B99A5E] uppercase border-b border-[#1A2D4B] pb-2.5 mb-3">
                  EXPERTISE, CONNECTED.
                </div>

                <div className="space-y-2 mb-4">
                  {heroServices.map((item) => (
                    <div
                      key={item.number}
                      className="flex items-center gap-3 text-xs text-[#E2E8F0] font-normal group cursor-pointer hover:text-[#B99A5E] transition-colors"
                    >
                      <span className="font-serif text-[#B99A5E] text-xs font-medium">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Scroll Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1A2D4B] text-[10px] text-[#8E9CAE] font-medium tracking-wider">
                  <span className="flex items-center gap-1">
                    <ArrowDown className="w-3 h-3 text-[#B99A5E] animate-bounce" />
                    SCROLL TO EXPLORE
                  </span>
                  <span className="text-[#B99A5E] font-mono">01 / 12</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Section Divider */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
        <div className="w-full h-[1px] bg-[#DFE6EF]" />
      </div>
    </section>
  );
};

