"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
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
    <section className="relative pt-[100px] sm:pt-[112px] lg:pt-[120px] pb-8 sm:pb-10 lg:pb-12 bg-white overflow-hidden border-b border-[#DFE6EF]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div
            className="lg:col-span-6 space-y-5 md:space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#C5A15A] shrink-0" />
              <span className="text-[11.5px] sm:text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                GLOBAL CAPITAL MARKETS ADVISORY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] leading-[1.08] tracking-tight text-[#071629] font-normal">
              Building Market Value Through Strategic Capital Markets{"\u00A0"}Advisory.
            </h1>

            {/* Subparagraph */}
            <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] max-w-xl font-normal">
              We help ambitious companies navigate capital markets, strengthen
              investor relationships and build lasting market visibility
              through strategic communications and financial{"\u00A0"}expertise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Button
                href="#contact"
                variant="primary"
                className="h-[48px] px-6 text-[13.5px] font-medium tracking-[0.03em]"
              >
                Discuss Your Goals
              </Button>
              <Button
                href="#services"
                variant="outline"
                className="h-[48px] px-6 text-[13.5px] font-medium tracking-[0.03em]"
              >
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Card */}
          <div className="lg:col-span-6 relative">
            {/* Hero Main Image Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[520px] rounded-lg overflow-hidden shadow-xl bg-[#0B1A30]">
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
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-[270px] sm:w-[300px] bg-[#071629]/95 backdrop-blur-md border border-[#1A2D4B] rounded p-5 text-white shadow-2xl">
                <div className="text-[11px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase border-b border-[#1A2D4B] pb-2.5 mb-3">
                  EXPERTISE, CONNECTED.
                </div>

                <div className="space-y-2 mb-4">
                  {heroServices.map((item) => (
                    <div
                      key={item.number}
                      className="flex items-center gap-3 text-[13px] text-[#E2E8F0] font-normal group cursor-pointer hover:text-[#C5A15A] transition-colors"
                    >
                      <span className="font-serif text-[#C5A15A] text-xs font-medium">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Scroll Indicator */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1A2D4B] text-[11px] text-[#8E9CAE] font-medium tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <ArrowDown className="w-3.5 h-3.5 text-[#C5A15A] animate-bounce" />
                    SCROLL TO EXPLORE
                  </span>
                  <span className="text-[#C5A15A] font-sans font-medium">01 / 12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

