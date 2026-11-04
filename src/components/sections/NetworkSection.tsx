"use client";

import React from "react";
import { motion } from "framer-motion";

interface ClientLogo {
  name: string;
  src: string;
  className?: string;
}

const TOP_ROW_LOGOS: ClientLogo[] = [
  { name: "ARway", src: "/images/clients/arway.webp" },
  { name: "Pan Global Resources", src: "/images/clients/pan-global-resources.webp" },
  { name: "Harfang Exploration", src: "/images/clients/harfang-exploration.webp" },
  { name: "Monumental Energy", src: "/images/clients/monumental-energy.webp" },
  { name: "Silver One Resources", src: "/images/clients/silver-one.webp" },
  { name: "West Point Gold", src: "/images/clients/west-point-gold.webp" },
  { name: "Sirios Resources", src: "/images/clients/sirios-resources.webp" },
  { name: "BULGold", src: "/images/clients/bulgold.webp" },
  { name: "Contango Silver & Gold", src: "/images/clients/contango-silver-gold.webp" },
];

const BOTTOM_ROW_LOGOS: ClientLogo[] = [
  { name: "Standard Uranium", src: "/images/clients/standard-uranium.webp" },
  { name: "AXO Metals", src: "/images/clients/axo-metals.webp" },
  { name: "Deep Sea Minerals", src: "/images/clients/deep-sea-minerals.webp" },
  { name: "Aftermath Silver", src: "/images/clients/aftermath-silver.webp" },
  { name: "GoGold Resources", src: "/images/clients/gogold-resources.webp" },
  { name: "Talisker Resources", src: "/images/clients/talisker-resources.webp" },
  { name: "IDEX Metals", src: "/images/clients/idex-metals.webp" },
  { name: "Kootenay Silver", src: "/images/clients/kootenay-silver.webp" },
  { name: "Scottie Resources", src: "/images/clients/scottie-resources.webp" },
];

export const NetworkSection: React.FC = () => {
  const topLoop = [...TOP_ROW_LOGOS, ...TOP_ROW_LOGOS, ...TOP_ROW_LOGOS];
  const bottomLoop = [...BOTTOM_ROW_LOGOS, ...BOTTOM_ROW_LOGOS, ...BOTTOM_ROW_LOGOS];

  return (
    <section id="clients" className="section-spacing bg-[#F1F5FB] relative overflow-hidden">
      <div className="site-container">
        {/* Main Framed Card Container matching the uploaded design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl md:rounded-2xl border border-[#DFE6EF] shadow-sm overflow-hidden relative"
        >
          {/* Top Row Logo Ribbon (Infinite Loop) */}
          <div className="relative border-b border-[#DFE6EF] bg-white overflow-hidden">
            {/* Fade Gradients at Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                  className="h-20 sm:h-22 md:h-24 w-[160px] sm:w-[180px] md:w-[200px] px-4 py-2 border-r border-[#DFE6EF] flex items-center justify-center shrink-0 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={client.src}
                      alt={client.name}
                      loading="lazy"
                      className="max-h-12 sm:max-h-13 md:max-h-14 w-auto max-w-[85%] object-contain object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Centered Editorial Content with subtle World Map Watermark */}
          <div className="relative py-10 sm:py-12 md:py-14 px-5 sm:px-8 text-center bg-white overflow-hidden">
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
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <div className="flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-[#B99A5E]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#244A80]">
                  CLIENTS WE HAVE WORKED WITH
                </span>
                <span className="w-8 h-[1px] bg-[#B99A5E]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0B1A30] font-normal tracking-tight">
                Trusted by Innovative Companies Worldwide
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed pt-1">
                We are proud to partner with a diverse range of forward-thinking companies across the
                resource, technology and industrial sectors, helping them connect with the right investors and
                achieve their strategic{"\u00A0"}goals.
              </p>
            </div>
          </div>

          {/* Bottom Row Logo Ribbon (Reverse Loop) */}
          <div className="relative border-t border-[#DFE6EF] bg-white overflow-hidden">
            {/* Fade Gradients at Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                  className="h-20 sm:h-22 md:h-24 w-[160px] sm:w-[180px] md:w-[200px] px-4 py-2 border-r border-[#DFE6EF] flex items-center justify-center shrink-0 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={client.src}
                      alt={client.name}
                      loading="lazy"
                      className="max-h-12 sm:max-h-13 md:max-h-14 w-auto max-w-[85%] object-contain object-center transition-transform duration-300 hover:scale-105"
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
