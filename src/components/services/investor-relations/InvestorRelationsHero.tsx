"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const InvestorRelationsHero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#071629] overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-[#1A2D4B]">
      {/* Background Architectural Skyscraper Image with cinematic blend */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[65%] z-0 select-none pointer-events-none">
        <Image
          src="/images/ir-hero-skyscrapers.jpg"
          alt="City of London Financial District Architecture"
          fill
          priority
          className="object-cover object-center lg:object-[center_right]"
        />
        {/* Cinematic gradient overlays blending into deep navy #071629 */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#071629] via-[#071629]/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#071629]/35 lg:bg-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071629] to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#071629] to-transparent z-10" />
      </div>

      {/* Hero Content Container - 1200px max-width */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-20">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-4 sm:space-y-5">
          {/* Gold Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
            <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
              OUR SERVICES
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-white font-normal tracking-tight leading-[1.08]">
            Investor Relations
          </h1>

          {/* Subtitle */}
          <p className="font-serif italic text-xl sm:text-2xl lg:text-[26px] text-[#C5A15A] font-normal leading-snug">
            Strategic Management and Communication
          </p>

          {/* Description */}
          <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#9FB3C8] leading-[1.65] font-normal pt-1 sm:pt-2 max-w-xl">
            We combine strategic communication, market engagement and deep capital-markets
            expertise to build trust, enhance visibility and secure long-term value for our clients.
          </p>

          {/* CTA Button */}
          <div className="pt-3 sm:pt-5">
            <Link
              href="#requirements-form"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#C5A15A] hover:bg-[#D4B36D] text-[#071629] font-medium text-xs sm:text-[13.5px] tracking-[0.03em] transition-all duration-200 shadow-lg shadow-[#071629]/40 hover:shadow-xl group"
            >
              <span>Discuss Your Goals</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
