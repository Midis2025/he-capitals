"use client";

import React from "react";
import Image from "next/image";
import { BarChart3, Megaphone, Users, Target } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const OurVision: React.FC = () => {
  const visionItems = [
    {
      number: "01",
      icon: BarChart3,
      title: "CAPITAL",
      text: "To give you the utmost in opportunities, putting you within reach of institutional and private investors worldwide.",
    },
    {
      number: "02",
      icon: Megaphone,
      title: "COMMUNICATION",
      text: "To create thought-provoking campaigns that are delivered at the most opportune moments.",
    },
    {
      number: "03",
      icon: Users,
      title: "CLIENTS",
      text: "To provide you with not just the right results, but also an astute level of knowledge about how to continuously generate investment.",
    },
    {
      number: "04",
      icon: Target,
      title: "CAMPAIGN",
      text: "To work tirelessly, creatively and strategically to get you the best investors for your company in your sector.",
    },
  ];

  return (
    <section className="section-spacing bg-[#091426] text-white relative overflow-hidden border-b border-[#1A2D4B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-[#1E3A66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-[#B99A5E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Large Illuminated Globe Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            <div className="space-y-3">
              <SectionBadge number="04" label="OUR VISION" light />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-normal tracking-tight leading-[1.06]">
                Our Vision.
              </h2>
              <div className="w-16 h-[2px] bg-[#B99A5E] my-1.5" />
            </div>

            {/* Glowing 3D Digital Globe Visual */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#1E3B68] bg-[#07111F] group">
              <Image
                src="/images/about-vision-globe.jpg"
                alt="Illuminated 3D digital sphere with gold and cyan financial connection nodes"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091426]/60 via-transparent to-transparent pointer-events-none" />

              {/* Minimal caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E] bg-[#091426]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#1A2D4B]">
                  INSTITUTIONAL CAPITAL ECOSYSTEM
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Spacious Information Blocks */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            {visionItems.map((item, index) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="pb-7 sm:pb-8 border-b border-[#1A2D4B] last:border-b-0 last:pb-0 flex items-start gap-5 sm:gap-6 group"
                >
                  {/* Icon Badge */}
                  <div className="w-13 h-13 rounded-xl bg-[#11233D] border border-[#1E3B68] flex items-center justify-center shrink-0 text-[#B99A5E] group-hover:bg-[#B99A5E] group-hover:text-[#091426] transition-all duration-300 shadow-md">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Statement */}
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-serif font-bold text-[#B99A5E]">
                        {item.number}
                      </span>
                      <h3 className="text-xs sm:text-[13.5px] font-semibold tracking-[0.2em] uppercase text-white group-hover:text-[#B99A5E] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[14.5px] sm:text-[15.5px] text-[#D2DEEC] leading-[1.68] font-normal">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
