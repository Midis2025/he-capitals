"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/Button";
import { INSIGHTS_DATA } from "@/lib/constants";
import { motion } from "framer-motion";

export const InsightsSection: React.FC = () => {
  const [featured, second, third] = INSIGHTS_DATA;

  return (
    <section id="insights" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-12">
          <SectionBadge number="08" label="INSIGHTS & PRESS RELEASES" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B1A30] font-normal tracking-tight">
            Stay Informed. Stay Connected.
          </h2>
          <p className="text-sm sm:text-base text-[#5A6878] leading-relaxed font-normal">
            Explore the latest company announcements, industry developments,
            press releases, and insights from across the markets we serve.
          </p>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#8E9CAE] uppercase pt-1">
            SAMPLE EDITORIAL NOT PUBLISHED ANNOUNCEMENTS
          </p>
        </div>

        {/* 2-Column Grid matching PDF Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Featured Large Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#F1F5FB] border border-[#DFE6EF] rounded overflow-hidden group hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            {featured.image && (
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0B1A30]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#244A80] uppercase">
                <span>{featured.category}</span>
                <span className="text-[#8E9CAE]">·</span>
                <span className="text-[#8E9CAE] font-normal lowercase first-letter:uppercase">
                  {featured.date}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1A30] font-normal group-hover:text-[#B99A5E] transition-colors">
                {featured.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                {featured.description}
              </p>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked 2 Articles */}
          <div className="lg:col-span-5 space-y-8">
            {/* Card 2: With tech image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#F1F5FB] border border-[#DFE6EF] rounded overflow-hidden group hover:shadow-xl transition-shadow"
            >
              {second.image && (
                <div className="relative w-full aspect-[21/9] overflow-hidden bg-[#0B1A30]">
                  <Image
                    src={second.image}
                    alt={second.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#244A80] uppercase">
                  <span>{second.category}</span>
                  <span className="text-[#8E9CAE]">·</span>
                  <span className="text-[#8E9CAE] font-normal lowercase first-letter:uppercase">
                    {second.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#0B1A30] font-normal group-hover:text-[#B99A5E] transition-colors">
                  {second.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                  {second.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Editorial text card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#F1F5FB] border border-[#DFE6EF] rounded p-6 sm:p-7 space-y-3 group hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#244A80] uppercase">
                <span>{third.category}</span>
                <span className="text-[#8E9CAE]">·</span>
                <span className="text-[#8E9CAE] font-normal lowercase first-letter:uppercase">
                  {third.date}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#0B1A30] font-normal group-hover:text-[#B99A5E] transition-colors">
                {third.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A6878] leading-relaxed font-normal">
                {third.description}
              </p>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#0B1A30] hover:text-[#B99A5E] transition-colors group"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Link Button */}
        <div className="mt-14 text-center">
          <Button href="#contact" variant="outline" className="px-8">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

