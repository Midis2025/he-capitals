"use client";

import React, { useState } from "react";
import { ShieldCheck, Compass, Users2, TrendingUp, ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, label: "WHY USE HE CAPITAL MARKETS" },
    { id: 1, label: "OUR PRINCIPLES" },
    { id: 2, label: "CONTACT US" },
  ];

  return (
    <section className="section-spacing bg-white relative border-b border-[#DFE6EF]">
      <div className="site-container">
        {/* Header */}
        <div className="space-y-3 max-w-2xl mb-8 sm:mb-10">
          <SectionBadge number="03" label="WHY CHOOSE HE CAPITAL MARKETS" />
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0B1A30] leading-[1.12] tracking-tight font-normal">
            Our Commitment to Your Success.
          </h2>
          <div className="w-16 h-[2px] bg-[#B99A5E] my-1" />
        </div>

        {/* Interactive 3-Tab Component */}
        <div className="border border-[#DFE6EF] rounded-xl overflow-hidden shadow-lg bg-white">
          {/* Tab Navigation Controls (Equal Width) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#DFE6EF] bg-[#F4F6F9]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 sm:py-4.5 px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer relative text-center flex items-center justify-center select-none ${
                    isActive
                      ? "bg-[#0B1A30] text-white shadow-sm"
                      : "text-[#5A6878] hover:text-[#0B1A30] hover:bg-[#E9EFF6] border-b sm:border-b-0 border-[#DFE6EF]"
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="hidden sm:block absolute bottom-0 left-0 right-0 h-[3px] bg-[#B99A5E]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="p-7 sm:p-9 md:p-12 bg-white">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="tab-0"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  {/* Left: Gold Layered Diamond Crest Icon with vertical divider */}
                  <div className="md:col-span-3 flex items-center justify-center md:border-r md:border-[#DFE6EF] md:pr-10">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#F8FAFC] border border-[#DFE6EF] flex items-center justify-center p-5 shadow-sm group hover:border-[#B99A5E] transition-colors">
                      <svg
                        viewBox="0 0 48 48"
                        className="w-14 h-14 text-[#B99A5E] stroke-current fill-none transition-transform duration-300 hover:scale-105"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 6 L40 14 L24 22 L8 14 Z" />
                        <path d="M8 22 L24 30 L40 22" />
                        <path d="M8 30 L24 38 L40 30" />
                      </svg>
                    </div>
                  </div>

                  {/* Right: Exact Content */}
                  <div className="md:col-span-9 space-y-4 text-sm sm:text-[15px] md:text-[15.5px] text-[#526377] leading-[1.7] font-normal">
                    <p>
                      We believe in building market value through strategic
                      consultation, financial marketing, brand positioning and
                      targeted investor communications. This means regular
                      contact not just with investors, but with you too. With
                      regular reports, reassurance and open-ended discussions
                      about your expectations, your own interests will always be
                      paramount in what we do.
                    </p>
                    <p>
                      Essentially, we recognise that it&apos;s not only the
                      market that can change on a daily basis, your own goals and
                      aspirations can, too. We make all of our clients feel
                      well-informed and intrinsically involved in our
                      strategies, ensuring we are always on track to deliver
                      what you want - and you&apos;ll never be in the dark about
                      what we&apos;re{"\u00A0"}doing.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="tab-1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="p-6 rounded-xl border border-[#DFE6EF] bg-[#F8FAFC] space-y-3 hover:border-[#B99A5E]/60 hover:bg-white transition-all shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center text-[#B99A5E] group-hover:bg-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                          <Compass className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-base sm:text-lg text-[#0B1A30]">
                          Strategic Guidance & Clarity
                        </h3>
                      </div>
                      <span className="text-xs font-serif font-bold text-[#B99A5E]">01</span>
                    </div>
                    <p className="text-sm text-[#526377] leading-relaxed">
                      Every strategy is crafted around your company&apos;s distinct
                      objectives, ensuring precise market positioning and lasting investor
                      interest.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-[#DFE6EF] bg-[#F8FAFC] space-y-3 hover:border-[#B99A5E]/60 hover:bg-white transition-all shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center text-[#B99A5E] group-hover:bg-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                          <Users2 className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-base sm:text-lg text-[#0B1A30]">
                          Global Investor Network
                        </h3>
                      </div>
                      <span className="text-xs font-serif font-bold text-[#B99A5E]">02</span>
                    </div>
                    <p className="text-sm text-[#526377] leading-relaxed">
                      Direct access to accredited institutional funds, family offices and
                      wealth managers across North America, Europe and Asia-Pacific.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-[#DFE6EF] bg-[#F8FAFC] space-y-3 hover:border-[#B99A5E]/60 hover:bg-white transition-all shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center text-[#B99A5E] group-hover:bg-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-base sm:text-lg text-[#0B1A30]">
                          Measurable Market Value
                        </h3>
                      </div>
                      <span className="text-xs font-serif font-bold text-[#B99A5E]">03</span>
                    </div>
                    <p className="text-sm text-[#526377] leading-relaxed">
                      Integrated investor relations, digital media and financial PR
                      designed to generate sustainable shareholder growth and liquidity.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl border border-[#DFE6EF] bg-[#F8FAFC] space-y-3 hover:border-[#B99A5E]/60 hover:bg-white transition-all shadow-sm group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white border border-[#DFE6EF] flex items-center justify-center text-[#B99A5E] group-hover:bg-[#0B1A30] group-hover:text-[#B99A5E] transition-colors">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-base sm:text-lg text-[#0B1A30]">
                          Total Transparency & Partnership
                        </h3>
                      </div>
                      <span className="text-xs font-serif font-bold text-[#B99A5E]">04</span>
                    </div>
                    <p className="text-sm text-[#526377] leading-relaxed">
                      Regular reporting, ongoing consultations and responsive advisory so
                      you always know the roadmap, execution and impact.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="tab-2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center py-4"
                >
                  <div className="md:col-span-8 space-y-3">
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                      DIRECT ADVISORY ACCESS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1A30]">
                      Start a Conversation With Our Team
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#526377] leading-relaxed">
                      Whether you are seeking to expand investor awareness, execute a
                      strategic capital markets campaign, or position your business for
                      international growth, we invite you to connect directly with our senior
                      advisors.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex items-center md:justify-end">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2.5 h-[50px] px-8 text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-white bg-[#0B1A30] hover:bg-[#152845] rounded transition-all duration-200 shadow-md group"
                    >
                      <span>Get In Touch</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B99A5E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
