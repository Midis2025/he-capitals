"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutContactCTA: React.FC = () => {
  return (
    <section className="section-spacing bg-[#07111F] text-white relative overflow-hidden border-t border-[#1E365C]">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-[#1E3A66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#B99A5E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12"
        >
          {/* Left Text */}
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11233D] border border-[#1E365C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B99A5E]" />
              <span className="text-[10.5px] font-semibold tracking-[0.22em] text-[#B99A5E] uppercase">
                INITIATE ENGAGEMENT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] text-white font-normal tracking-tight leading-[1.08]">
              Your Next Opportunity Starts With a Conversation.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#A0B3C6] leading-relaxed font-normal pt-1 max-w-xl">
              Let&apos;s discuss how HE Capital Markets can help your company
              strengthen its market presence and connect with the right{"\u00A0"}investors.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 pt-2 lg:pt-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 h-[54px] px-10 text-xs sm:text-[13.5px] font-semibold tracking-wider uppercase text-[#091426] bg-[#B99A5E] hover:bg-[#C8A96E] rounded transition-all duration-200 shadow-xl shadow-[#B99A5E]/25 group whitespace-nowrap"
            >
              <span>Discuss Your Goals</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
