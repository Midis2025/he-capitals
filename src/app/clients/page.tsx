"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ClientDetail {
  id: number;
  name: string;
  category: "Mining" | "Technology" | "Energy" | "Healthcare";
  logo: string;
  description?: string;
}

const ALL_CLIENTS: ClientDetail[] = [
  // Flagship & Portfolio Clients (63 Verified Entities from Curated WebP Assets)
  { id: 1, name: "Pan Global Resources", category: "Mining", logo: "/images/clients/pan-global-resources.webp" },
  { id: 2, name: "Harfang Exploration", category: "Mining", logo: "/images/clients/harfang-exploration.webp" },
  { id: 3, name: "Monumental Energy", category: "Energy", logo: "/images/clients/monumental-energy.webp" },
  { id: 4, name: "Silver One Resources", category: "Mining", logo: "/images/clients/silver-one.webp" },
  { id: 5, name: "West Point Gold", category: "Mining", logo: "/images/clients/west-point-gold.webp" },
  { id: 6, name: "Sirios Resources", category: "Mining", logo: "/images/clients/sirios-resources.webp" },
  { id: 7, name: "Standard Uranium", category: "Energy", logo: "/images/clients/standard-uranium.webp" },
  { id: 8, name: "BULGold", category: "Mining", logo: "/images/clients/bulgold.webp" },
  { id: 9, name: "ARway", category: "Technology", logo: "/images/clients/arway.webp" },
  { id: 10, name: "Contango Silver & Gold", category: "Mining", logo: "/images/clients/contango-silver-gold.webp" },
  { id: 11, name: "AXO Metals", category: "Mining", logo: "/images/clients/axo-metals.webp" },
  { id: 12, name: "Deep Sea Minerals", category: "Mining", logo: "/images/clients/deep-sea-minerals.webp" },
  { id: 13, name: "Aftermath Silver", category: "Mining", logo: "/images/clients/aftermath-silver.webp" },
  { id: 14, name: "GoGold Resources", category: "Mining", logo: "/images/clients/gogold-resources.webp" },
  { id: 15, name: "Talisker Resources", category: "Mining", logo: "/images/clients/talisker-resources.webp" },
  { id: 16, name: "IDEX Metals", category: "Mining", logo: "/images/clients/idex-metals.webp" },
  { id: 17, name: "Kootenay Silver", category: "Mining", logo: "/images/clients/kootenay-silver.webp" },
  { id: 18, name: "Scottie Resources", category: "Mining", logo: "/images/clients/scottie-resources.webp" },
  { id: 19, name: "AMEX Exploration", category: "Mining", logo: "/images/clients/amex-exploration.webp" },
  { id: 20, name: "Marimaca Copper", category: "Mining", logo: "/images/clients/marimaca-copper.webp" },
  { id: 21, name: "Lomiko Metals", category: "Mining", logo: "/images/clients/lomiko-metals.webp" },
  { id: 22, name: "Inhibrx", category: "Healthcare", logo: "/images/clients/inhibrx.webp" },
  { id: 23, name: "RedHill Biopharma", category: "Healthcare", logo: "/images/clients/redhill-biopharma.webp" },
  { id: 24, name: "Hemostemix", category: "Healthcare", logo: "/images/clients/hemostemix.webp" },
  { id: 25, name: "Defence Therapeutics", category: "Healthcare", logo: "/images/clients/defence-therapeutics.webp" },
  { id: 26, name: "Quantum eMotion", category: "Technology", logo: "/images/clients/quantum-emotion.webp" },
  { id: 27, name: "FSD Pharma", category: "Healthcare", logo: "/images/clients/fsd-pharma.webp" },
  { id: 28, name: "FansUnite", category: "Technology", logo: "/images/clients/fansunite.webp" },
  { id: 29, name: "Manganese X Energy Corp", category: "Energy", logo: "/images/clients/manganese-x-energy.webp" },
  { id: 30, name: "QBioMed", category: "Healthcare", logo: "/images/clients/q-biomed.webp" },
  { id: 31, name: "Revive Therapeutics", category: "Healthcare", logo: "/images/clients/revive-therapeutics.webp" },
  { id: 32, name: "Steppe Gold", category: "Mining", logo: "/images/clients/steppe-gold.webp" },
  { id: 33, name: "Red Light Holland", category: "Healthcare", logo: "/images/clients/red-light-holland.webp" },
  { id: 34, name: "Silver Tiger Metals", category: "Mining", logo: "/images/clients/silver-tiger-metals.webp" },
  { id: 35, name: "TRU Precious Metals", category: "Mining", logo: "/images/clients/tru-precious-metals.webp" },
  { id: 36, name: "Defense Metals", category: "Mining", logo: "/images/clients/defense-metals.webp" },
  { id: 37, name: "FOKUS Mining", category: "Mining", logo: "/images/clients/fokus-mining.webp" },
  { id: 38, name: "Green Battery Minerals", category: "Energy", logo: "/images/clients/green-battery-minerals.webp" },
  { id: 39, name: "Jackpot Digital", category: "Technology", logo: "/images/clients/jackpot-digital.webp" },
  { id: 40, name: "Lexaria Bioscience", category: "Healthcare", logo: "/images/clients/lexaria-bioscience.webp" },
  { id: 41, name: "Lithium South Development", category: "Energy", logo: "/images/clients/lithium-south.webp" },
  { id: 42, name: "MAX Resource Corp", category: "Mining", logo: "/images/clients/max-resource.webp" },
  { id: 43, name: "PharmaTher", category: "Healthcare", logo: "/images/clients/pharmather.webp" },
  { id: 44, name: "Psyched Wellness", category: "Healthcare", logo: "/images/clients/psyched-wellness.webp" },
  { id: 45, name: "BlockchainK2", category: "Technology", logo: "/images/clients/blockchain-k2.webp" },
  { id: 46, name: "F3 Uranium", category: "Energy", logo: "/images/clients/f3-uranium.webp" },
  { id: 47, name: "The Metals Company", category: "Mining", logo: "/images/clients/the-metals-company.webp" },
  { id: 48, name: "Goldshore Resources", category: "Mining", logo: "/images/clients/goldshore-resources.webp" },
  { id: 49, name: "POET Technologies", category: "Technology", logo: "/images/clients/poet-technologies.webp" },
  { id: 50, name: "Aether Global Innovations", category: "Technology", logo: "/images/clients/aether-global-innovations.webp" },
  { id: 51, name: "Southern Silver Exploration", category: "Mining", logo: "/images/clients/southern-silver.webp" },
  { id: 52, name: "Predictmedix", category: "Healthcare", logo: "/images/clients/predictmedix.webp" },
  { id: 53, name: "Independence Contract Drilling", category: "Energy", logo: "/images/clients/independence-contract-drilling.webp" },
  { id: 54, name: "USHA Resources", category: "Mining", logo: "/images/clients/usha-resources.webp" },
  { id: 55, name: "Hillcrest Energy Technologies", category: "Energy", logo: "/images/clients/hillcrest-energy-technologies.webp" },
  { id: 56, name: "Cerrado Gold", category: "Mining", logo: "/images/clients/cerrado-gold.webp" },
  { id: 57, name: "FLYHT Aerospace Solutions", category: "Technology", logo: "/images/clients/flyht.webp" },
  { id: 58, name: "Defiance Silver", category: "Mining", logo: "/images/clients/defiance-silver.webp" },
  { id: 59, name: "Edison Lithium", category: "Energy", logo: "/images/clients/edison-lithium.webp" },
  { id: 60, name: "Graphano Energy", category: "Energy", logo: "/images/clients/graphano-energy.webp" },
  { id: 61, name: "Tantalex Lithium Resources", category: "Energy", logo: "/images/clients/tantalex-lithium.webp" },
  { id: 62, name: "Strathmore Plus Uranium", category: "Energy", logo: "/images/clients/strathmore-plus.webp" },
  { id: 63, name: "FD Media", category: "Technology", logo: "/images/clients/unidentified-client.webp" },
];

const SECTOR_CARDS = [
  { name: "Mining", image: "/images/sector-mining.jpg" },
  { name: "Technology", image: "/images/sector-technology.jpg" },
  { name: "Blockchain", image: "/images/sector-blockchain.jpg" },
  { name: "Psychedelics", image: "/images/sector-psychedelics.jpg" },
  { name: "Pharmaceuticals", image: "/images/sector-pharmaceuticals.jpg" },
  { name: "Cannabis", image: "/images/sector-cannabis.jpg" },
];

export default function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredClients =
    selectedCategory === "All"
      ? ALL_CLIENTS
      : ALL_CLIENTS.filter((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-[88px]">
        {/* 1. Hero Section */}
        <section className="relative bg-[#091426] text-white section-spacing overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091426] via-[#0B1A30]/80 to-[#091426] z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#244A80_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="site-container relative z-20 space-y-6">
            <SectionBadge number="07" label="OUR CLIENTS" light />

            <div className="max-w-3xl space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-normal tracking-tight leading-[1.08]">
                Innovative Companies. Lasting Partnerships.
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-[#8E9CAE] leading-relaxed font-normal pt-1">
                We are proud to partner with a diverse group of forward-thinking
                companies across our key sectors, helping them connect with
                market opportunity, capital and strategic{"\u00A0"}growth.
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-[#1A2D4B]">
              <div className="space-y-1">
                <span className="font-serif text-xs text-[#B99A5E] font-medium block">
                  01 CLIENTS
                </span>
                <p className="text-sm text-white font-medium">
                  Over 60+ Emerging and established market leaders
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-xs text-[#B99A5E] font-medium block">
                  02 SECTORS
                </span>
                <p className="text-sm text-white font-medium">
                  Natural resources, energy transition, healthcare and deep technology
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-xs text-[#B99A5E] font-medium block">
                  03 MARKETS
                </span>
                <p className="text-sm text-white font-medium">
                  Direct access to North American and global capital
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Sectors Strip */}
        <section className="section-spacing-compact bg-[#F1F5FB] border-b border-[#DFE6EF]">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#244A80] block mb-1">
                  ACROSS CRITICAL SECTORS
                </span>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#0B1A30] font-normal">
                  A Broad Range of Innovative Sectors
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6878] max-w-md">
                Our partnerships span the core growth sectors shaping global
                commerce and{"\u00A0"}industry.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {SECTOR_CARDS.map((sec) => (
                <div
                  key={sec.name}
                  className="group relative aspect-[4/3] rounded overflow-hidden border border-[#DFE6EF] shadow-sm cursor-pointer"
                >
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A30]/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-xs font-medium text-white group-hover:text-[#B99A5E] transition-colors">
                      {sec.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Client Directory Grid */}
        <section className="section-spacing bg-white">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DFE6EF]">
              <div className="space-y-2.5 max-w-2xl">
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#244A80] block">
                  PARTNER PORTFOLIO
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0B1A30] font-normal tracking-tight">
                  Trusted by Innovative Companies
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#5A6878] leading-relaxed font-normal">
                  We work alongside a diverse group of companies and industry
                  participants across our key sectors, providing strategic
                  advisory, market positioning and investor relations{"\u00A0"}excellence.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {["All", "Mining", "Energy", "Technology", "Healthcare"].map((cat) => {
                  const count =
                    cat === "All"
                      ? ALL_CLIENTS.length
                      : ALL_CLIENTS.filter((c) => c.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                        selectedCategory === cat
                          ? "bg-[#0B1A30] text-white shadow-sm"
                          : "bg-[#F1F5FB] text-[#0B1A30] hover:bg-[#E2EAF4]"
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          selectedCategory === cat
                            ? "bg-[#B99A5E] text-[#0B1A30] font-bold"
                            : "bg-[#DFE6EF] text-[#5A6878]"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid of All Real Logos - Standardized 270x155 WebP Assets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mt-8">
              {filteredClients.map((client, idx) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.015, 0.35) }}
                  className="bg-white border border-[#DFE6EF] rounded-lg p-3 sm:p-4 flex flex-col items-center justify-between hover:border-[#B99A5E] hover:shadow-lg transition-all duration-300 min-h-[140px] sm:min-h-[150px] group relative"
                >
                  {/* Category Pill Tag */}
                  <span className="self-end text-[9px] font-bold tracking-wider uppercase text-[#8E9CAE] group-hover:text-[#B99A5E] transition-colors">
                    {client.category}
                  </span>

                  {/* Uniform Logo Container */}
                  <div className="w-full h-18 sm:h-20 flex items-center justify-center p-1 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      loading="lazy"
                      className="max-h-12 sm:max-h-14 w-auto max-w-[90%] object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Company Name */}
                  <span
                    className="text-[11px] sm:text-xs font-semibold text-[#0B1A30] text-center mt-1 group-hover:text-[#B99A5E] transition-colors line-clamp-1 w-full px-1"
                    title={client.name}
                  >
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Statement Banner */}
        <section className="section-spacing-compact bg-[#091426] text-white text-center border-y border-[#1A2D4B]">
          <div className="site-container">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white tracking-[0.16em] uppercase font-normal max-w-4xl mx-auto leading-relaxed">
              INCREASE VALUE. INSPIRE INVESTMENT. REALISE RESULTS.
            </h2>
          </div>
        </section>

        {/* 5. Latest Client News */}
        <section className="section-spacing bg-[#F1F5FB]">
          <div className="site-container">
            <div className="flex items-end justify-between mb-8">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#244A80] block">
                  PARTNER UPDATES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0B1A30] font-normal">
                  Latest Client News
                </h2>
              </div>
              <Link
                href="/#insights"
                className="text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View All Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#DFE6EF] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center hover:shadow-xl transition-shadow">
                <div className="relative w-full sm:w-44 aspect-square rounded overflow-hidden shrink-0 bg-[#0B1A30]">
                  <Image
                    src="/images/insights-mining.jpg"
                    alt="Drilling report"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <span className="text-[10px] font-semibold tracking-wider text-[#244A80] uppercase">
                    RESOURCE SECTOR · UPDATE
                  </span>
                  <h3 className="font-serif text-xl text-[#0B1A30]">
                    Resource Discovery and High-Grade Drilling at Scale
                  </h3>
                  <p className="text-xs text-[#5A6878] leading-relaxed">
                    Client announcement detailing exploration milestones and expanded
                    drill programs across key mineral{"\u00A0"}holdings.
                  </p>
                  <Link
                    href="/#insights"
                    className="text-xs font-semibold tracking-wider text-[#B99A5E] hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-[#DFE6EF] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center hover:shadow-xl transition-shadow">
                <div className="relative w-full sm:w-44 aspect-square rounded overflow-hidden shrink-0 bg-[#0B1A30]">
                  <Image
                    src="/images/insights-tech.jpg"
                    alt="Market growth"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3 flex-1">
                  <span className="text-[10px] font-semibold tracking-wider text-[#244A80] uppercase">
                    TECHNOLOGY · EXPANSION
                  </span>
                  <h3 className="font-serif text-xl text-[#0B1A30]">
                    Commercial Expansion & Capital Markets Advisory
                  </h3>
                  <p className="text-xs text-[#5A6878] leading-relaxed">
                    Strategic financing and corporate communications supporting
                    cross-border expansion for innovative tech{"\u00A0"}innovators.
                  </p>
                  <Link
                    href="/#insights"
                    className="text-xs font-semibold tracking-wider text-[#B99A5E] hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="section-spacing bg-[#0B1A30] text-white">
          <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2.5 max-w-xl text-center md:text-left">
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B99A5E]">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
                Partner with a team that understands your vision.
              </h2>
              <p className="text-xs sm:text-sm text-[#8E9CAE]">
                Let&apos;s discuss how we can assist in reaching your capital markets{"\u00A0"}goals.
              </p>
            </div>
            <Button href="/#contact" variant="gold" className="px-7 h-11 shrink-0 whitespace-nowrap">
              Discuss Your Goals
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
