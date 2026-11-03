"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ClientDetail {
  id: number;
  name: string;
  category: string;
  logo: string;
  description?: string;
}

const ALL_CLIENTS: ClientDetail[] = [
  { id: 1, name: "Pan Global Resources", category: "Mining", logo: "/logos/clients/pan-global.png" },
  { id: 2, name: "Harfang Exploration", category: "Mining", logo: "/logos/clients/harfang.png" },
  { id: 3, name: "Monumental Energy", category: "Energy", logo: "/logos/clients/monumental-energy.png" },
  { id: 4, name: "Silver One Resources", category: "Mining", logo: "/logos/clients/silver-one.png" },
  { id: 5, name: "West Point Gold", category: "Mining", logo: "/logos/clients/west-point-gold.png" },
  { id: 6, name: "Sirios Resources", category: "Mining", logo: "/logos/clients/sirios-resources-logo.png" },
  { id: 7, name: "Standard Uranium", category: "Mining", logo: "/logos/clients/standard-uranium.png" },
  { id: 8, name: "BULGold", category: "Mining", logo: "/logos/clients/bulgold-logo.png" },
  { id: 9, name: "ARway", category: "Technology", logo: "/logos/clients/arway.png" },
  { id: 10, name: "Contango Silver", category: "Mining", logo: "/logos/clients/contango.jpg" },
  { id: 11, name: "AXO Metals", category: "Mining", logo: "/logos/clients/axo-metals.png" },
  { id: 12, name: "Deep Sea Minerals", category: "Mining", logo: "/logos/clients/deep-sea-minerals.png" },
  { id: 13, name: "Aftermath Silver", category: "Mining", logo: "/logos/clients/aftermath-silver.png" },
  { id: 14, name: "GoGold Silver & Gold", category: "Mining", logo: "/logos/clients/gogold.png" },
  { id: 15, name: "Talisker Resources", category: "Mining", logo: "/logos/clients/talisker.png" },
  { id: 16, name: "IDEX Metals", category: "Mining", logo: "/logos/clients/idex.png" },
  { id: 17, name: "Kootenay Silver", category: "Mining", logo: "/logos/clients/kootenay.png" },
  { id: 18, name: "Scottie Resources", category: "Mining", logo: "/logos/clients/scottie.svg" },
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

      <main className="flex-1 pt-[100px]">
        {/* 1. Hero Section */}
        <section className="relative bg-[#091426] text-white py-20 md:py-28 overflow-hidden">
          {/* Subtle background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091426] via-[#0B1A30]/80 to-[#091426] z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#244A80_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-20 space-y-8">
            <SectionBadge number="07" label="OUR CLIENTS" light />

            <div className="max-w-3xl space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.08]">
                Innovative Companies. Lasting Partnerships.
              </h1>
              <p className="text-sm sm:text-base text-[#8E9CAE] leading-relaxed font-normal pt-2">
                We are proud to partner with a diverse group of forward-thinking
                companies across our key sectors, helping them connect with
                market opportunity, capital and strategic growth.
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[#1A2D4B]">
              <div className="space-y-1">
                <span className="font-serif text-xs text-[#B99A5E] font-medium block">
                  01 CLIENTS
                </span>
                <p className="text-sm text-white font-medium">
                  Over 50+ Emerging and established market leaders
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-xs text-[#B99A5E] font-medium block">
                  02 SECTORS
                </span>
                <p className="text-sm text-white font-medium">
                  Natural resources, energy transition and deep technology
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
        <section className="py-16 bg-[#F1F5FB] border-b border-[#DFE6EF]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#244A80] block mb-1">
                  ACROSS CRITICAL SECTORS
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0B1A30] font-normal">
                  A Broad Range of Innovative Sectors
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6878] max-w-md">
                Our partnerships span the core growth sectors shaping global
                commerce and industry.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DFE6EF]">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#244A80] block">
                  PARTNER PORTFOLIO
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
                  Trusted by Innovative Companies
                </h2>
                <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
                  We work alongside a diverse group of companies and industry
                  participants across our key sectors, providing strategic
                  advisory, market positioning and investor relations excellence.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {["All", "Mining", "Technology", "Energy"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#0B1A30] text-white"
                        : "bg-[#F1F5FB] text-[#0B1A30] hover:bg-[#E2EAF4]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of All Real Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
              {filteredClients.map((client, idx) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="bg-white border border-[#DFE6EF] rounded-lg p-6 flex flex-col items-center justify-center hover:border-[#B99A5E] hover:shadow-xl transition-all duration-300 min-h-[140px] group"
                >
                  <div className="relative w-full h-16 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={180}
                      height={60}
                      unoptimized
                      className="max-h-12 w-auto max-w-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#0B1A30] text-center mt-3 group-hover:text-[#B99A5E] transition-colors line-clamp-1">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Statement Banner */}
        <section className="py-20 bg-[#091426] text-white text-center border-y border-[#1A2D4B]">
          <div className="max-w-[1440px] mx-auto px-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.16em] uppercase font-normal max-w-4xl mx-auto leading-relaxed">
              INCREASE VALUE. INSPIRE INVESTMENT. REALISE RESULTS.
            </h2>
          </div>
        </section>

        {/* 5. Latest Client News */}
        <section className="py-20 md:py-28 bg-[#F1F5FB]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-end justify-between mb-12">
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
                    drill programs across key mineral holdings.
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
                    cross-border expansion for innovative tech innovators.
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
        <section className="py-20 bg-[#0B1A30] text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#B99A5E]">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Partner with a team that understands your vision.
              </h2>
              <p className="text-xs sm:text-sm text-[#8E9CAE]">
                Let&apos;s discuss how we can assist in reaching your capital markets goals.
              </p>
            </div>
            <Button href="/#contact" variant="gold" className="px-8 h-12">
              Discuss Your Goals
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

