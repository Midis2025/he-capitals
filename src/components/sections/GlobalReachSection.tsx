"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { NETWORK_HUBS, NetworkHub } from "@/components/ui/InteractiveGlobe";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Dynamically import InteractiveGlobe with ssr: false so WebGL only runs in browser
const InteractiveGlobe = dynamic(
  () => import("@/components/ui/InteractiveGlobe").then((mod) => mod.InteractiveGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[440px] sm:min-h-[540px] flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-3 text-[#244A80]">
          <div className="w-10 h-10 rounded-full border-2 border-[#244A80]/20 border-t-[#244A80] animate-spin" />
          <span className="text-xs uppercase tracking-[0.16em]">Loading Global Network...</span>
        </div>
      </div>
    ),
  }
);

interface RegionOption {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  defaultHubId: string;
  hubs: string[];
}

const REGION_OPTIONS: RegionOption[] = [
  {
    id: "us",
    number: "01",
    name: "United States",
    subtitle: "Americas Capital Hub",
    description: "Direct connection with tier-one institutional investors, family offices and specialized sector funds in New York and major financial corridors.",
    defaultHubId: "newyork",
    hubs: ["New York"],
  },
  {
    id: "ca",
    number: "02",
    name: "Canada",
    subtitle: "Natural Resources & Growth Capital",
    description: "Deep ties with North America's premier natural resources, mining, and venture capital ecosystem in Toronto and Vancouver.",
    defaultHubId: "toronto",
    hubs: ["Toronto", "Vancouver"],
  },
  {
    id: "eu",
    number: "03",
    name: "Europe",
    subtitle: "European Financial Centre",
    description: "Comprehensive cross-border advisory spanning London, Zurich and key European investment hubs for private wealth and institutional distribution.",
    defaultHubId: "london",
    hubs: ["London", "Zurich"],
  },
  {
    id: "asia",
    number: "04",
    name: "Asia & Middle East",
    subtitle: "Asia-Pacific & Sovereign Gateways",
    description: "Access to high-growth sovereign capital, private wealth management and strategic international partners across Singapore, Hong Kong and Dubai.",
    defaultHubId: "singapore",
    hubs: ["Singapore", "Hong Kong", "Dubai"],
  },
];

export const GlobalReachSection: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState<string>("eu");
  const [activeHubId, setActiveHubId] = useState<string>("london");

  const currentRegion = REGION_OPTIONS.find((r) => r.id === activeRegionId) || REGION_OPTIONS[2];
  const currentHub = NETWORK_HUBS.find((h) => h.id === activeHubId) || NETWORK_HUBS[0];

  const handleSelectRegion = (region: RegionOption) => {
    setActiveRegionId(region.id);
    setActiveHubId(region.defaultHubId);
  };

  const handleSelectHub = (hub: NetworkHub) => {
    setActiveHubId(hub.id);
    setActiveRegionId(hub.region);
  };

  return (
    <section
      id="global-reach"
      className="section-spacing bg-white text-[#0B1A30] relative overflow-hidden border-t border-[#DFE6EF]"
    >
      <div className="site-container">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Content Column (35-40% on Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between z-10">
            <div>
              {/* Eyebrow */}
              <div className="mb-4">
                <SectionBadge number="09" label="GLOBAL REACH" />
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#0B1A30] font-normal tracking-tight leading-[1.14]">
                Local understanding.
                <span className="block mt-1 sm:mt-1.5 text-[#244A80]">
                  Global connections.
                </span>
              </h2>

              {/* Body Text without serial comma */}
              <p className="text-sm sm:text-[15px] text-[#5A6878] leading-relaxed font-normal mt-4 sm:mt-5 max-w-xl">
                We connect ambitious companies with investors, financial professionals and market
                audiences across key international markets.
              </p>

              {/* Editorial Region Selector */}
              <div className="mt-8 sm:mt-10 border-t border-[#DFE6EF]">
                {REGION_OPTIONS.map((region) => {
                  const isActive = region.id === activeRegionId;

                  return (
                    <button
                      key={region.id}
                      onClick={() => handleSelectRegion(region)}
                      className={`w-full text-left py-4 sm:py-5 border-b border-[#DFE6EF] transition-all duration-300 group flex items-start justify-between cursor-pointer focus:outline-none focus-visible:bg-[#F1F5FB] ${
                        isActive ? "bg-[#F1F5FB] pl-3 pr-2 rounded-r-md" : "hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Active Dot / Bullet */}
                        <div className="pt-1.5 flex items-center justify-center shrink-0">
                          {isActive ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-[#B99A5E] ring-4 ring-[#B99A5E]/20" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-[#CBD5E1] group-hover:bg-[#B99A5E] transition-colors" />
                          )}
                        </div>

                        <div>
                          {/* Region Name */}
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono font-medium text-[#8E9CAE]">
                              {region.number}
                            </span>
                            <span
                              className={`transition-colors duration-200 ${
                                isActive
                                  ? "font-serif text-lg sm:text-xl text-[#0B1A30] font-medium"
                                  : "text-sm sm:text-[15px] font-medium text-[#4A5568] group-hover:text-[#0B1A30]"
                              }`}
                            >
                              {region.name}
                            </span>
                          </div>

                          {/* Subtitle */}
                          <p
                            className={`text-xs mt-0.5 tracking-wide transition-colors ${
                              isActive
                                ? "text-[#244A80] font-semibold uppercase tracking-[0.12em]"
                                : "text-[#718096] group-hover:text-[#4A5568]"
                            }`}
                          >
                            {region.subtitle}
                          </p>

                          {/* Expanded Description when active */}
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 pt-2.5 border-t border-[#DFE6EF]"
                            >
                              <p className="text-xs text-[#5A6878] leading-relaxed">
                                {region.description}
                              </p>

                              {/* City Hub Chips */}
                              <div className="flex flex-wrap items-center gap-2 mt-3">
                                {region.hubs.map((hubName) => {
                                  const hubObj = NETWORK_HUBS.find(
                                    (h) => h.name.toLowerCase() === hubName.toLowerCase()
                                  );
                                  const isHubActive = hubObj?.id === activeHubId;

                                  return (
                                    <button
                                      key={hubName}
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (hubObj) handleSelectHub(hubObj);
                                      }}
                                      className={`text-[11px] px-2.5 py-1 rounded-full border transition-all ${
                                        isHubActive
                                          ? "bg-[#0B1A30] text-white border-[#0B1A30] font-medium shadow-xs"
                                          : "bg-white text-[#4A5568] border-[#DFE6EF] hover:border-[#B99A5E] hover:text-[#0B1A30]"
                                      }`}
                                    >
                                      {hubName}
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Right indicator chevron */}
                      <div className="pt-2 shrink-0">
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isActive
                              ? "rotate-90 text-[#B99A5E]"
                              : "text-[#CBD5E1] group-hover:translate-x-0.5"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Disclaimer & Guidance Note */}
            <div className="mt-8 pt-5 border-t border-[#DFE6EF] flex flex-col gap-1.5">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#244A80] uppercase">
                ILLUSTRATIVE NETWORK REGIONS · NOT OFFICE LOCATIONS
              </span>
              <span className="text-xs text-[#5A6878] tracking-wide">
                Select a centre or drag the globe to explore international connectivity.
              </span>
            </div>
          </div>

          {/* Right Globe Column (60-65% on Desktop) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Globe Card Container with very light HE blue tint / white */}
            <div className="relative w-full rounded-2xl md:rounded-3xl bg-[#F8FAFC] border border-[#DFE6EF] shadow-sm overflow-hidden h-[440px] sm:h-[500px] lg:h-[540px] flex items-center justify-center p-2 sm:p-4">
              
              {/* Interactive 3D WebGL Globe */}
              <InteractiveGlobe
                activeRegionId={activeRegionId}
                activeHubId={activeHubId}
                onSelectHub={handleSelectHub}
              />

              {/* Mobile Active Region Info Strip */}
              <div className="absolute top-4 left-4 right-4 lg:hidden pointer-events-none z-30">
                <div className="bg-white/95 backdrop-blur-md border border-[#DFE6EF] p-3 rounded-xl shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#244A80] font-semibold block">
                        Active Hub
                      </span>
                      <span className="font-serif text-sm font-medium text-[#0B1A30]">
                        {currentHub.name} · {currentHub.subtitle}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F1F5FB] text-[#244A80]">
                      {currentRegion.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
