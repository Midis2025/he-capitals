"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

interface RegionalHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
}

export const RegionalHero: React.FC<RegionalHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText = "Discuss Your Goals",
}) => {
  return (
    <section className="relative pt-[108px] sm:pt-[120px] lg:pt-[134px] pb-16 sm:pb-20 lg:pb-24 bg-[#071629] text-white overflow-hidden border-b border-[#1A2D4B]">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#1E3A66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#B99A5E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6">
            {/* Eyebrow Label with Thin Gold Accent Rule */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                {eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[38px] sm:text-[50px] md:text-[58px] lg:text-[64px] xl:text-[70px] leading-[1.06] tracking-[-0.02em] text-white font-normal">
              {title}
            </h1>

            {/* Subtitle / Tagline */}
            <p className="font-serif italic font-light text-lg sm:text-xl md:text-[22px] lg:text-[24px] text-[#E8F0F8] tracking-wide pt-1">
              {subtitle}
            </p>

            {/* Introductory Description */}
            <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#9FB3C8] leading-[1.65] font-normal max-w-[510px] pt-1">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="#requirements-form"
                className="inline-flex items-center gap-2.5 h-[50px] px-8 text-[13.5px] font-semibold tracking-wider text-[#071629] bg-[#C5A15A] hover:bg-[#D4B36D] rounded transition-all duration-200 shadow-xl shadow-[#C5A15A]/25 group uppercase"
              >
                <span>{ctaText}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Cityscape Banner Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11] xl:aspect-[5/4] max-h-[540px] rounded-xl overflow-hidden shadow-2xl border border-[#1E365C]/80 bg-[#071629] group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gradient vignette around edges */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-28 bg-gradient-to-r from-[#071629] via-[#071629]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071629]/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#071629]/40 to-transparent pointer-events-none" />

              {/* Location Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E2E8F0] bg-[#071629]/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-[#1A2D4B]">
                  HE CAPITAL MARKETS • {eyebrow}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
