"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

interface GlobalContact {
  city: string;
  phone: string;
  telHref: string;
}

const GLOBAL_CONTACTS: GlobalContact[] = [
  { city: "VANCOUVER", phone: "+1 604-288-2651", telHref: "tel:+16042882651" },
  { city: "NEW YORK", phone: "+1 718-578-4120", telHref: "tel:+17185784120" },
  { city: "LONDON", phone: "+44 207 096 0125", telHref: "tel:+442070960125" },
  { city: "FRANKFURT", phone: "+1 270-7769-191", telHref: "tel:+12707769191" },
];

export const GlobalReachSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#071629] py-20 sm:py-24 lg:py-28 border-b border-[#1A2D4B]">
      {/* Background Panoramic London Skyline Image - Enhanced Visibility */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/ir-global-reach-london.jpg"
          alt="London Skyline across the River Thames"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle, balanced navy gradient allowing architecture to shine through recognisably */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#071629]/50 to-[#071629]/40" />
        <div className="absolute inset-0 bg-[#071629]/25" />
      </div>

      {/* 1200px max-width container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
            <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
              OUR PRESENCE
            </span>
            <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-white font-normal tracking-tight">
            Our Global Reach
          </h2>
        </div>

        {/* 4 Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0 lg:divide-x lg:divide-white/20 max-w-5xl mx-auto">
          {GLOBAL_CONTACTS.map((contact) => (
            <div
              key={contact.city}
              className="flex items-center justify-center gap-3.5 px-4 sm:px-6"
            >
              <div className="w-10 h-10 rounded-full bg-[#0D2442]/85 border border-white/25 flex items-center justify-center shrink-0 text-[#C5A15A] shadow-md">
                <Phone className="w-4 h-4 stroke-[2]" />
              </div>

              <div className="text-left">
                <span className="block text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-white">
                  {contact.city}
                </span>
                <a
                  href={contact.telHref}
                  className="text-sm sm:text-[15px] font-medium text-white/95 hover:text-[#C5A15A] transition-colors whitespace-nowrap"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

