"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Pickaxe,
  Cpu,
  Boxes,
  Pill,
  Sprout,
  Droplets,
  ArrowRight,
  ChevronUp,
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
  // Primary Featured Clients
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

interface FilterOption {
  label: string;
  value: SectorCategory;
  icon?: React.ComponentType<{ className?: string }>;
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: "All Clients", value: "All" },
  { label: "Mining", value: "Mining", icon: Pickaxe },
  { label: "Technology", value: "Technology", icon: Cpu },
  { label: "Blockchain", value: "Blockchain", icon: Boxes },
  { label: "Pharmaceuticals", value: "Pharmaceuticals", icon: Pill },
  { label: "Psychedelics", value: "Psychedelics", icon: Sprout },
  { label: "Oil & Gas", value: "Oil & Gas", icon: Droplets },
];

// Initial featured client count: exactly 15 cards (3 balanced rows of 5)
const INITIAL_FEATURED_COUNT = 15;

export const ClientShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SectorCategory>("All");
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter clients based on selected category
  const filteredClients = useMemo(() => {
    if (selectedCategory === "All") {
      return ALL_CLIENTS;
    }
    return ALL_CLIENTS.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  const isExpandable = filteredClients.length > INITIAL_FEATURED_COUNT;

  // Display initial 15 featured cards or full collection when expanded
  const displayedClients = useMemo(() => {
    if (!isExpanded && isExpandable) {
      return filteredClients.slice(0, INITIAL_FEATURED_COUNT);
    }
    return filteredClients;
  }, [filteredClients, isExpanded, isExpandable]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-[#DFE6EF]">
      {/* Delicate Alpine Mountain Silhouette Along Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[260px] sm:h-[340px] lg:h-[400px] pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/clients-hero-mountains.jpg"
          alt=""
          fill
          className="object-cover object-bottom opacity-80"
        />
        {/* Soft atmospheric gradient fade from light background down into mountain peaks */}
        <div className="absolute inset-x-0 top-0 h-44 sm:h-56 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#071629] to-transparent pointer-events-none" />
      </div>

      <div className="site-container relative z-10">
        {/* Centered Heading Composition */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          {/* Eyebrow Label with Short Horizontal Gold Line */}
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="w-6 h-[2px] bg-[#C5A15A]" />
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
              OUR CLIENTS
            </span>
          </div>

          {/* Main Serif Heading (46-54px) */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] text-[#071629] font-normal tracking-tight leading-[1.12]">
            A Diverse and Growing Client Base
          </h2>

          {/* Supporting Text (17-19px) */}
          <p className="text-sm sm:text-base md:text-[17.5px] text-[#536985] leading-relaxed max-w-2xl mx-auto pt-1 font-normal">
            We are proud to partner with a broad range of public and private
            companies across key growth industries and global markets.
          </p>
        </div>

        {/* Segmented Filter Bar Container */}
        <div className="flex justify-center mb-10 sm:mb-12 overflow-x-auto no-scrollbar py-1">
          <div className="bg-white rounded-full border border-[#DCE4EF] shadow-[0_4px_24px_rgba(7,22,41,0.06)] p-1.5 inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
            {FILTER_OPTIONS.map((opt, idx) => {
              const isActive = selectedCategory === opt.value;
              const Icon = opt.icon;

              return (
                <React.Fragment key={opt.value}>
                  <button
                    onClick={() => {
                      setSelectedCategory(opt.value);
                      setIsExpanded(false);
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                      isActive
                        ? "bg-[#071629] text-white border border-[#C5A15A] shadow-xs px-4 sm:px-5"
                        : "text-[#071629] hover:bg-slate-50 hover:text-[#C5A15A]"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75] text-[#C5A15A]`}
                      />
                    )}
                    <span>{opt.label}</span>
                  </button>

                  {/* Thin Divider Between Inactive Items */}
                  {idx < FILTER_OPTIONS.length - 1 &&
                    !isActive &&
                    selectedCategory !== FILTER_OPTIONS[idx + 1]?.value && (
                      <span className="w-[1px] h-3.5 bg-slate-200 shrink-0 hidden sm:inline-block" />
                    )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 5-Column Refined Logo Grid with Constrained, Balanced Logo Sizes */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5"
        >
          <AnimatePresence mode="popLayout">
            {displayedClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl border border-[#DCE4EF] shadow-[0_2px_8px_rgba(7,22,41,0.02)] hover:border-[#C5A15A]/60 hover:shadow-[0_8px_20px_rgba(7,22,41,0.06)] hover:-translate-y-0.5 transition-all duration-200 h-[100px] sm:h-[110px] lg:h-[116px] px-5 sm:px-6 py-4 flex items-center justify-center relative group select-none"
              >
                {/* Logo Wrapper with Controlled Max-Dimensions (Width: 120-140px, Height: 44-48px) */}
                <div className="relative w-full max-w-[125px] sm:max-w-[135px] lg:max-w-[140px] h-[40px] sm:h-[46px] lg:h-[48px] flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 135px, 140px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Functional Show All Clients / Collapse Action Button */}
        {isExpandable && (
          <div className="text-center pt-8 sm:pt-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2.5 h-[44px] px-7 rounded-full text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#071629] bg-white border border-[#C5A15A] hover:bg-[#FAF7F0] hover:shadow-md transition-all duration-200 cursor-pointer shadow-xs group"
            >
              <span>
                {isExpanded
                  ? "Show Featured Clients"
                  : selectedCategory === "All"
                  ? `Show All Clients (${filteredClients.length})`
                  : `Show All ${selectedCategory} Clients (${filteredClients.length})`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#C5A15A] transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 text-[#C5A15A] group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
