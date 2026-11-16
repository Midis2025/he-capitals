"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ClientsHero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative pt-[76px] sm:pt-[82px] bg-[#071629] text-white overflow-hidden flex items-center min-h-[380px] lg:min-h-[440px]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#1E3A66]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C5A15A]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      {/* Right-Side Panoramic Mountain Image: Full-Bleed on Desktop */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[58%] xl:w-[62%] pointer-events-none select-none overflow-hidden hidden lg:block z-0">
        <Image
          src="/images/clients-hero-mountains.jpg"
          alt="Majestic alpine mountain peaks during golden sunrise"
          fill
          priority
          sizes="62vw"
          className="object-cover object-[right_center]"
        />
        {/* Subtle diagonal glass light streak across sky inspired by reference */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
        
        {/* Seamless Multi-Stop Left Blend into Solid Navy #071629 */}
        <div className="absolute inset-y-0 left-0 w-48 xl:w-64 bg-gradient-to-r from-[#071629] via-[#071629]/80 to-transparent pointer-events-none" />
        
        {/* Subtle Top & Bottom Edge Blends */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071629] via-[#071629]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#071629]/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="site-container relative z-10 w-full py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Editorial Text Content */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-4.5 max-w-[510px]">
            {/* Eyebrow Label with Thin Gold Horizontal Line */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                OUR CLIENTS
              </span>
            </div>

            {/* Main Heading: Serif Font */}
            <h1 className="font-serif text-[42px] sm:text-[48px] md:text-[52px] lg:text-[56px] xl:text-[58px] leading-[1.06] tracking-[-0.02em] text-white font-normal">
              Partnering with<br />
              Industry Leaders
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-[15.5px] lg:text-[16px] text-[#A0B3C6] leading-relaxed font-normal max-w-[470px] pt-1">
              We work with innovative companies across high-growth sectors, from
              early-stage companies to established market leaders.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo("portfolio")}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#C5A15A] hover:bg-[#B38E46] text-[#071629] font-medium text-sm rounded-md transition-all duration-200 shadow-md shadow-[#C5A15A]/20 hover:shadow-lg hover:shadow-[#C5A15A]/30 group cursor-pointer"
              >
                <span>Our Client Companies</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo("approach")}
                className="inline-flex items-center px-5 sm:px-6 py-3 bg-[#0A1C33]/60 hover:bg-[#0E284A]/80 text-white font-medium text-sm rounded-md border border-[#C5A15A]/60 hover:border-[#C5A15A] transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                Our Approach
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Fallback Image Display */}
          <div className="lg:hidden w-full pb-2 pt-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};
