"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClientLogo {
  name: string;
  src: string;
  className?: string;
}

const TOP_ROW_LOGOS: ClientLogo[] = [
  { name: "ARway", src: "/logos/clients/arway.png" },
  { name: "Pan Global Resources", src: "/logos/clients/pan-global.png" },
  { name: "Harfang Exploration", src: "/logos/clients/harfang.png" },
  { name: "Monumental Energy", src: "/logos/clients/monumental-energy.png" },
  { name: "Silver One Resources", src: "/logos/clients/silver-one.png" },
  { name: "West Point Gold", src: "/logos/clients/west-point-gold.png" },
  { name: "Sirios Resources", src: "/logos/clients/sirios-resources-logo.png" },
  { name: "BULGold", src: "/logos/clients/bulgold-logo.png" },
  { name: "Contango Silver", src: "/logos/clients/contango.jpg" },
];

const BOTTOM_ROW_LOGOS: ClientLogo[] = [
  { name: "Standard Uranium", src: "/logos/clients/standard-uranium.png" },
  { name: "AXO Metals", src: "/logos/clients/axo-metals.png" },
  { name: "Deep Sea Minerals", src: "/logos/clients/deep-sea-minerals.png" },
  { name: "Aftermath Silver", src: "/logos/clients/aftermath-silver.png" },
  { name: "GoGold Silver & Gold", src: "/logos/clients/gogold.png" },
  { name: "Talisker Resources", src: "/logos/clients/talisker.png" },
  { name: "IDEX Metals", src: "/logos/clients/idex.png" },
  { name: "Kootenay Silver", src: "/logos/clients/kootenay.png" },
  { name: "Scottie Resources", src: "/logos/clients/scottie.svg" },
];

export const NetworkSection: React.FC = () => {
  const topLoop = [...TOP_ROW_LOGOS, ...TOP_ROW_LOGOS, ...TOP_ROW_LOGOS];
  const bottomLoop = [...BOTTOM_ROW_LOGOS, ...BOTTOM_ROW_LOGOS, ...BOTTOM_ROW_LOGOS];

  return (
    <section id="clients" className="py-16 md:py-24 bg-[#F1F5FB] relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Framed Card Container matching the uploaded design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl md:rounded-3xl border border-[#DFE6EF] shadow-sm overflow-hidden relative"
        >
          {/* Top Row Logo Ribbon (Infinite Loop) */}
          <div className="relative border-b border-[#DFE6EF] bg-white overflow-hidden">
            {/* Fade Gradients at Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-33.333%"] }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center w-max"
            >
              {topLoop.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="h-24 sm:h-28 md:h-30 w-[170px] sm:w-[200px] md:w-[220px] px-6 py-4 border-r border-[#DFE6EF] flex items-center justify-center shrink-0 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={200}
                      height={80}
                      unoptimized
                      className="max-h-12 sm:max-h-14 md:max-h-16 w-auto max-w-[85%] object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Centered Editorial Content with subtle World Map Watermark */}
          <div className="relative py-16 sm:py-20 md:py-24 px-6 sm:px-12 text-center bg-white overflow-hidden">
            {/* Subtle World Map Silhouette Watermark in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full max-w-[900px] object-contain text-[#0B1A30] fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M150,120 Q170,100 210,110 T250,150 T280,200 T240,230 T200,210 T160,160 Z M220,250 Q240,280 230,340 T210,400 T180,360 T190,300 Z M460,110 Q500,90 540,110 T560,160 T510,180 T470,140 Z M490,200 Q530,220 540,280 T520,360 T480,340 T470,260 Z M620,100 Q700,80 780,120 T820,180 T760,220 T680,180 T630,130 Z M760,260 Q800,270 820,320 T790,360 T740,330 T750,280 Z" />
                <circle cx="200" cy="160" r="40" opacity="0.3" />
                <circle cx="210" cy="320" r="50" opacity="0.3" />
                <circle cx="510" cy="140" r="45" opacity="0.3" />
                <circle cx="505" cy="270" r="60" opacity="0.3" />
                <circle cx="720" cy="150" r="75" opacity="0.3" />
                <circle cx="780" cy="310" r="40" opacity="0.3" />
              </svg>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow with decorative lines */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#244A80] uppercase mb-4 sm:mb-5">
                <span className="w-8 sm:w-16 h-[1px] bg-[#DFE6EF]" />
                <span>CLIENTS WE HAVE WORKED WITH</span>
                <span className="w-8 sm:w-16 h-[1px] bg-[#DFE6EF]" />
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#0B1A30] font-normal tracking-tight leading-[1.12]">
                Trusted by Innovative Companies
                <span className="block mt-1 sm:mt-2">Worldwide</span>
              </h2>

              {/* Subparagraph without serial commas */}
              <p className="text-xs sm:text-sm md:text-[15px] text-[#5A6878] leading-relaxed max-w-2xl mx-auto font-normal mt-5 sm:mt-6">
                We are proud to partner with a diverse range of forward-thinking companies across the resource,
                technology and industrial sectors, helping them connect with the right investors and achieve their
                strategic goals.
              </p>
            </div>
          </div>

          {/* Bottom Row Logo Ribbon (Reverse Loop) */}
          <div className="relative border-t border-[#DFE6EF] bg-white overflow-hidden">
            {/* Fade Gradients at Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["-33.333%", "0%"] }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center w-max"
            >
              {bottomLoop.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="h-24 sm:h-28 md:h-30 w-[170px] sm:w-[200px] md:w-[220px] px-6 py-4 border-r border-[#DFE6EF] flex items-center justify-center shrink-0 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={200}
                      height={80}
                      unoptimized
                      className="max-h-12 sm:max-h-14 md:max-h-16 w-auto max-w-[85%] object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
