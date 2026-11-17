"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Pickaxe,
  Cpu,
  Boxes,
  Pill,
  Sprout,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type SectorCategory =
  | "All"
  | "Mining"
  | "Technology"
  | "Blockchain"
  | "Pharmaceuticals"
  | "Psychedelics"
  | "Oil & Gas";

export interface ClientItem {
  id: number;
  name: string;
  category: "Mining" | "Technology" | "Blockchain" | "Pharmaceuticals" | "Psychedelics" | "Oil & Gas";
  logo: string;
}

const ALL_CLIENTS: ClientItem[] = [
  // Primary Featured Clients (First 10 match the exact reference layout)
  { id: 1, name: "Pan Global Resources", category: "Mining", logo: "/images/clients/pan-global-resources.webp" },
  { id: 2, name: "Harfang Exploration", category: "Mining", logo: "/images/clients/harfang-exploration.webp" },
  { id: 3, name: "Monumental Energy", category: "Oil & Gas", logo: "/images/clients/monumental-energy.webp" },
  { id: 4, name: "Silver One Resources", category: "Mining", logo: "/images/clients/silver-one.webp" },
  { id: 5, name: "West Point Gold", category: "Mining", logo: "/images/clients/west-point-gold.webp" },
  { id: 6, name: "Sirios Resources", category: "Mining", logo: "/images/clients/sirios-resources.webp" },
  { id: 7, name: "BULGold", category: "Mining", logo: "/images/clients/bulgold.webp" },
  { id: 8, name: "Kootenay Silver", category: "Mining", logo: "/images/clients/kootenay-silver.webp" },
  { id: 9, name: "Contango Silver & Gold", category: "Mining", logo: "/images/clients/contango-silver-gold.webp" },
  { id: 10, name: "Standard Uranium", category: "Oil & Gas", logo: "/images/clients/standard-uranium.webp" },
  { id: 11, name: "IDEX Metals", category: "Mining", logo: "/images/clients/idex-metals.webp" },
  { id: 12, name: "Talisker Resources", category: "Mining", logo: "/images/clients/talisker-resources.webp" },
  { id: 13, name: "GoGold Resources", category: "Mining", logo: "/images/clients/gogold-resources.webp" },
  { id: 14, name: "Aftermath Silver", category: "Mining", logo: "/images/clients/aftermath-silver.webp" },
  { id: 15, name: "Deep Sea Minerals", category: "Mining", logo: "/images/clients/deep-sea-minerals.webp" },
  { id: 16, name: "AXO Metals", category: "Mining", logo: "/images/clients/axo-metals.webp" },
  { id: 17, name: "Scottie Resources", category: "Mining", logo: "/images/clients/scottie-resources.webp" },

  // Remaining Verified Portfolio Clients Across Core Growth Sectors
  { id: 18, name: "AMEX Exploration", category: "Mining", logo: "/images/clients/amex-exploration.webp" },
  { id: 19, name: "Marimaca Copper", category: "Mining", logo: "/images/clients/marimaca-copper.webp" },
  { id: 20, name: "Lomiko Metals", category: "Mining", logo: "/images/clients/lomiko-metals.webp" },
  { id: 21, name: "ARway", category: "Technology", logo: "/images/clients/arway.webp" },
  { id: 22, name: "Quantum eMotion", category: "Technology", logo: "/images/clients/quantum-emotion.webp" },
  { id: 23, name: "FansUnite", category: "Technology", logo: "/images/clients/fansunite.webp" },
  { id: 24, name: "Jackpot Digital", category: "Technology", logo: "/images/clients/jackpot-digital.webp" },
  { id: 25, name: "POET Technologies", category: "Technology", logo: "/images/clients/poet-technologies.webp" },
  { id: 26, name: "Aether Global Innovations", category: "Technology", logo: "/images/clients/aether-global-innovations.webp" },
  { id: 27, name: "Predictmedix", category: "Technology", logo: "/images/clients/predictmedix.webp" },
  { id: 28, name: "FLYHT Aerospace Solutions", category: "Technology", logo: "/images/clients/flyht.webp" },
  { id: 29, name: "Hillcrest Energy Technologies", category: "Technology", logo: "/images/clients/hillcrest-energy-technologies.webp" },
  { id: 30, name: "BlockchainK2", category: "Blockchain", logo: "/images/clients/blockchain-k2.webp" },
  { id: 31, name: "Inhibrx", category: "Pharmaceuticals", logo: "/images/clients/inhibrx.webp" },
  { id: 32, name: "RedHill Biopharma", category: "Pharmaceuticals", logo: "/images/clients/redhill-biopharma.webp" },
  { id: 33, name: "Hemostemix", category: "Pharmaceuticals", logo: "/images/clients/hemostemix.webp" },
  { id: 34, name: "Defence Therapeutics", category: "Pharmaceuticals", logo: "/images/clients/defence-therapeutics.webp" },
  { id: 35, name: "FSD Pharma", category: "Pharmaceuticals", logo: "/images/clients/fsd-pharma.webp" },
  { id: 36, name: "QBioMed", category: "Pharmaceuticals", logo: "/images/clients/q-biomed.webp" },
  { id: 37, name: "Lexaria Bioscience", category: "Pharmaceuticals", logo: "/images/clients/lexaria-bioscience.webp" },
  { id: 38, name: "Revive Therapeutics", category: "Psychedelics", logo: "/images/clients/revive-therapeutics.webp" },
  { id: 39, name: "Red Light Holland", category: "Psychedelics", logo: "/images/clients/red-light-holland.webp" },
  { id: 40, name: "PharmaTher", category: "Psychedelics", logo: "/images/clients/pharmather.webp" },
  { id: 41, name: "Psyched Wellness", category: "Psychedelics", logo: "/images/clients/psyched-wellness.webp" },
  { id: 42, name: "Manganese X Energy Corp", category: "Oil & Gas", logo: "/images/clients/manganese-x-energy.webp" },
  { id: 43, name: "F3 Uranium", category: "Oil & Gas", logo: "/images/clients/f3-uranium.webp" },
  { id: 44, name: "Independence Contract Drilling", category: "Oil & Gas", logo: "/images/clients/independence-contract-drilling.webp" },
  { id: 45, name: "Graphano Energy", category: "Oil & Gas", logo: "/images/clients/graphano-energy.webp" },
  { id: 46, name: "Strathmore Plus Uranium", category: "Oil & Gas", logo: "/images/clients/strathmore-plus.webp" },
  { id: 47, name: "Steppe Gold", category: "Mining", logo: "/images/clients/steppe-gold.webp" },
  { id: 48, name: "Silver Tiger Metals", category: "Mining", logo: "/images/clients/silver-tiger-metals.webp" },
  { id: 49, name: "TRU Precious Metals", category: "Mining", logo: "/images/clients/tru-precious-metals.webp" },
  { id: 50, name: "Defense Metals", category: "Mining", logo: "/images/clients/defense-metals.webp" },
  { id: 51, name: "FOKUS Mining", category: "Mining", logo: "/images/clients/fokus-mining.webp" },
  { id: 52, name: "Green Battery Minerals", category: "Mining", logo: "/images/clients/green-battery-minerals.webp" },
  { id: 53, name: "Lithium South Development", category: "Mining", logo: "/images/clients/lithium-south.webp" },
  { id: 54, name: "MAX Resource Corp", category: "Mining", logo: "/images/clients/max-resource.webp" },
  { id: 55, name: "The Metals Company", category: "Mining", logo: "/images/clients/the-metals-company.webp" },
  { id: 56, name: "Goldshore Resources", category: "Mining", logo: "/images/clients/goldshore-resources.webp" },
  { id: 57, name: "Southern Silver Exploration", category: "Mining", logo: "/images/clients/southern-silver.webp" },
  { id: 58, name: "USHA Resources", category: "Mining", logo: "/images/clients/usha-resources.webp" },
  { id: 59, name: "Cerrado Gold", category: "Mining", logo: "/images/clients/cerrado-gold.webp" },
  { id: 60, name: "Defiance Silver", category: "Mining", logo: "/images/clients/defiance-silver.webp" },
  { id: 61, name: "Edison Lithium", category: "Mining", logo: "/images/clients/edison-lithium.webp" },
  { id: 62, name: "Tantalex Lithium Resources", category: "Mining", logo: "/images/clients/tantalex-lithium.webp" },
  { id: 63, name: "FD Media", category: "Technology", logo: "/images/clients/unidentified-client.webp" },
];

const SECTOR_FILTERS: { label: string; value: SectorCategory; icon?: React.ComponentType<{ className?: string }> }[] = [
  { label: "All Clients", value: "All" },
  { label: "Mining", value: "Mining", icon: Pickaxe },
  { label: "Technology", value: "Technology", icon: Cpu },
  { label: "Blockchain", value: "Blockchain", icon: Boxes },
  { label: "Pharmaceuticals", value: "Pharmaceuticals", icon: Pill },
  { label: "Psychedelics", value: "Psychedelics", icon: Sprout },
  { label: "Oil & Gas", value: "Oil & Gas", icon: Flame },
];

// Helper to determine optimal high-resolution vector or retina asset
const getClientLogoSrc = (logo: string): string => {
  const filename = logo.replace(/^.*[\\/]/, "");
  const slug = filename.replace(/\.(webp|png|jpg|svg)$/, "");
  // Prefer native vector SVG where available for infinite sharpness
  const vectorSvgSlugs = ["pan-global-resources", "bulgold", "scottie-resources"];
  if (vectorSvgSlugs.includes(slug)) {
    return `/images/clients-white-card/${slug}.svg`;
  }
  return `/images/clients-white-card/${slug}.webp`;
};

export const ClientShowcase: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorCategory>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  // Filter clients by sector
  const filteredClients = useMemo(() => {
    if (selectedSector === "All") return ALL_CLIENTS;
    return ALL_CLIENTS.filter((c) => c.category === selectedSector);
  }, [selectedSector]);

  // Items per page: 10 on desktop (2 rows x 5), 6 on tablet (2 x 3), 4 on mobile (2 x 2)
  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(filteredClients.length / itemsPerPage));

  // Reset to first slide when sector changes
  const handleSectorChange = (sector: SectorCategory) => {
    setSelectedSector(sector);
    setCurrentPage(0);
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleNext, handlePrev]);

  // Current page items
  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return filteredClients.slice(start, start + itemsPerPage);
  }, [filteredClients, currentPage, itemsPerPage]);

  return (
    <section id="portfolio" className="relative w-full overflow-hidden">
      {/* ========================================================== */}
      {/* 1. UPPER SECTION: WARM OFF-WHITE EDITORIAL & WORLD MAP */}
      {/* ========================================================== */}
      <div className="bg-[#F7F5F0] pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-12 sm:pb-14 border-b border-[#E7E2D7] relative overflow-hidden">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* 1. TEXT CONTENT (Desktop & Tablet: Col 1-6 Row 1 | Mobile: Stack Item 1) */}
            <div className="md:col-span-6 md:row-start-1 space-y-3 sm:space-y-3.5 lg:space-y-4 max-w-xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[2px] bg-[#C9A45E] shrink-0" />
                <span className="text-xs font-semibold tracking-[0.24em] text-[#C9A45E] uppercase">
                  CLIENT PORTFOLIO
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[34px] lg:text-[42px] xl:text-[46px] text-[#08172A] font-normal tracking-tight leading-[1.12]">
                A Diverse and<br />
                Global Client Base
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-[15px] lg:text-[16px] text-[#536985] leading-relaxed font-normal max-w-lg pt-1">
                We are proud to partner with a broad range of public and private
                companies across key growth industries and global markets.
              </p>
            </div>

            {/* 2. WORLD MAP ILLUSTRATION (Desktop & Tablet: Col 7-12 Row 1-2 Centered | Mobile: Stack Item 2, between Text and Filters) */}
            <div className="md:col-span-6 md:col-start-7 md:row-start-1 md:row-span-2 relative flex items-center justify-center w-full my-2 sm:my-3 md:my-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[420px] lg:max-w-[580px] xl:max-w-[640px] aspect-[16/9] flex items-center justify-center">
                <Image
                  src="/images/client-portfolio-world-map.png"
                  alt="HE Capital Markets Global Network World Map"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* 3. INDUSTRY FILTER BUTTONS (Desktop & Tablet: Col 1-6 Row 2 | Mobile: Stack Item 3, beneath World Map) */}
            <div className="md:col-span-6 md:row-start-2 pt-2 sm:pt-3 md:pt-2">
              <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 md:flex-wrap scrollbar-none">
                {SECTOR_FILTERS.map((filter) => {
                  const Icon = filter.icon;
                  const isActive = selectedSector === filter.value;

                  return (
                    <button
                      key={filter.value}
                      onClick={() => handleSectorChange(filter.value)}
                      className={`shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-3 lg:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer shadow-sm ${
                        isActive
                          ? "bg-[#08172A] text-white border border-[#C9A45E] shadow-md shadow-[#08172A]/20"
                          : "bg-white text-[#08172A] border border-[#DCE4EF] hover:border-[#C9A45E]/60 hover:bg-[#FAF8F4]"
                      }`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-3.5 h-3.5 stroke-[1.8] text-[#C9A45E]`}
                        />
                      )}
                      <span>{filter.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================== */}
      {/* 3. DARK CINEMATIC CLIENT LOGO CAROUSEL SECTION */}
      {/* ========================================================== */}
      <div className="bg-[#071629] py-14 sm:py-16 lg:py-20 relative overflow-hidden border-b border-[#1A2D4B]">
        {/* Subtle geometric glass streaks inspired by reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
        <div className="absolute -top-32 right-10 w-[500px] h-[500px] bg-[#1E3A66]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

        <div className="site-container relative z-10">
          {/* Carousel Viewport Container with Left/Right Arrow Overlays */}
          <div className="relative px-0 sm:px-10 lg:px-12">
            {/* Left Circular Arrow Button (Desktop & Tablet) */}
            <button
              onClick={handlePrev}
              aria-label="Previous client logos"
              className="hidden sm:flex absolute -left-2 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#08182D]/80 hover:bg-[#0E2442] border border-white/25 hover:border-[#C5A15A] text-white items-center justify-center transition-all duration-200 shadow-xl cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Right Circular Arrow Button (Desktop & Tablet) */}
            <button
              onClick={handleNext}
              aria-label="Next client logos"
              className="hidden sm:flex absolute -right-2 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#08182D]/80 hover:bg-[#0E2442] border border-white/25 hover:border-[#C5A15A] text-white items-center justify-center transition-all duration-200 shadow-xl cursor-pointer backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* Carousel Slide Area with Framer Motion Animation */}
            <div className="overflow-hidden min-h-[220px] sm:min-h-[235px] lg:min-h-[250px] flex items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${selectedSector}-${currentPage}`}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {/* Two-Row Grid of Client Cards: 5 cols on lg, 3 on md, 2 on sm */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5">
                    {currentItems.map((client) => {
                      const logoSrc = getClientLogoSrc(client.logo);
                      
                      return (
                        <div
                          key={client.id}
                          className="group relative rounded-[10px] bg-white border border-slate-200/80 hover:border-[#C5A15A]/70 transition-all duration-300 p-3.5 sm:p-4 lg:p-5 h-[114px] sm:h-[120px] min-h-[114px] sm:min-h-[120px] flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-0.5 overflow-hidden cursor-default"
                        >
                          {/* Subtle hover gradient highlight */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A15A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                          {/* Level Logo Centering Container */}
                          <div className="relative w-full h-full flex items-center justify-center">
                            <img
                              src={logoSrc}
                              alt={`${client.name} logo`}
                              className="block max-w-[85%] max-h-[64px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Indicators & Mobile Nav Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-8 sm:pt-10">
                {/* Mobile Prev Arrow */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous client logos"
                  className="sm:hidden w-8 h-8 rounded-full bg-[#091D36] border border-white/20 active:border-[#C5A15A] text-white flex items-center justify-center shadow-md cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Circular Dots (matching approved screenshot: active gold #C5A15A, inactive deep blue) */}
                <div className="flex items-center gap-2.5">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > currentPage ? 1 : -1);
                        setCurrentPage(idx);
                      }}
                      aria-label={`Go to slide page ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentPage
                          ? "w-2.5 h-2.5 bg-[#C5A15A] ring-2 ring-[#C5A15A]/40"
                          : "w-2 h-2 bg-[#1A3358] hover:bg-[#2B4E80]"
                      }`}
                    />
                  ))}
                </div>

                {/* Mobile Next Arrow */}
                <button
                  onClick={handleNext}
                  aria-label="Next client logos"
                  className="sm:hidden w-8 h-8 rounded-full bg-[#091D36] border border-white/20 active:border-[#C5A15A] text-white flex items-center justify-center shadow-md cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
