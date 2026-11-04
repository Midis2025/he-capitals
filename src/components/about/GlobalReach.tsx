"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface RegionCardData {
  id: string;
  name: string;
  cities: string;
  imageSrc: string;
}

export const GlobalReach: React.FC = () => {
  const regions: RegionCardData[] = [
    {
      id: "na",
      name: "North America",
      cities: "New York & Toronto",
      imageSrc: "/images/map-north-america-2x.png",
    },
    {
      id: "eu",
      name: "Europe",
      cities: "London & Frankfurt",
      imageSrc: "/images/map-europe-2x.png",
    },
    {
      id: "asia",
      name: "Asia",
      cities: "Tokyo & Singapore",
      imageSrc: "/images/map-asia-2x.png",
    },
    {
      id: "au",
      name: "Australia",
      cities: "Sydney & Melbourne",
      imageSrc: "/images/map-australia-2x.png",
    },
    {
      id: "sa",
      name: "South America",
      cities: "São Paulo & Santiago",
      imageSrc: "/images/map-south-america-2x.png",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-[#F8FAFC] relative border-b border-[#DFE6EF] overflow-hidden">
      {/* Subtle Dotted World Globe Background in Upper-Right */}
      <div className="absolute top-0 right-0 w-[80%] sm:w-[65%] lg:w-[50%] max-w-[720px] h-[260px] sm:h-[320px] lg:h-[360px] pointer-events-none select-none opacity-65 mix-blend-multiply z-0">
        <Image
          src="/images/global-reach-dotted-globe-2x.png"
          alt=""
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>

      <div className="site-container relative z-10">
        {/* Section Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 sm:mb-14 lg:mb-16"
        >
          {/* Eyebrow: 05 GLOBAL PRESENCE */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-[13px] font-semibold text-[#C5A15A] tracking-[0.2em]">
              05
            </span>
            <span className="text-xs sm:text-[13px] font-semibold text-[#071629] tracking-[0.24em] uppercase">
              GLOBAL PRESENCE
            </span>
          </div>

          {/* Main Heading: 58-68px Serif */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] xl:text-[66px] text-[#071629] leading-[1.05] tracking-[-0.02em] font-normal">
            Our Global Reach.
          </h2>

          {/* Short Gold Underline */}
          <div className="w-14 sm:w-16 h-[2.5px] bg-[#C5A15A] mt-3.5 sm:mt-4 mb-4 sm:mb-5" />

          {/* Supporting Description: 18-21px Sans-Serif */}
          <p className="text-base sm:text-[17.5px] md:text-[19px] lg:text-[20px] text-[#536985] leading-relaxed font-normal max-w-xl">
            A truly international perspective, with experience and investor
            networks across key global{"\u00A0"}markets.
          </p>
        </motion.div>

        {/* Five Regional Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-5 lg:gap-4 xl:gap-5.5 items-stretch">
          {regions.map((reg, index) => (
            <motion.div
              key={reg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white border border-[#E5EAF0] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between shadow-sm hover:shadow-2xl hover:border-[#C5A15A]/80 hover:-translate-y-2 transition-all duration-300 group cursor-default min-h-[350px] sm:min-h-[370px] lg:min-h-[385px]"
            >
              {/* Regional Map Illustration - Large Visual Focal Point */}
              <div className="w-full h-[150px] sm:h-[165px] flex items-center justify-center relative p-1">
                <Image
                  src={reg.imageSrc}
                  alt={`${reg.name} financial network map with connections`}
                  fill
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Bottom Card Content: Divider + Region + Cities */}
              <div className="w-full flex flex-col items-center pt-3 text-center">
                {/* Short Gold Divider */}
                <div className="w-12 h-[2px] bg-[#C5A15A] mb-3.5" />

                {/* Region Heading: 28-32px Serif */}
                <h3 className="font-serif text-[23px] sm:text-[25px] md:text-[27px] lg:text-[28px] xl:text-[30px] font-normal text-[#071629] tracking-tight leading-tight">
                  {reg.name}
                </h3>

                {/* City Labels: 17-19px Sans-Serif */}
                <p className="text-[14.5px] sm:text-[15.5px] md:text-[16.5px] lg:text-[17px] text-[#536985] font-normal leading-snug mt-1.5">
                  {reg.cities}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
