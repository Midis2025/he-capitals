"use client";

import React from "react";
import Image from "next/image";
import { Target, Users, TrendingUp, Sprout } from "lucide-react";

export const OurApproach: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic",
      subtitle: "Positioning",
    },
    {
      icon: Users,
      title: "Investor",
      subtitle: "Engagement",
    },
    {
      icon: TrendingUp,
      title: "Market",
      subtitle: "Visibility",
    },
    {
      icon: Sprout,
      title: "Long-Term",
      subtitle: "Value Creation",
    },
  ];

  return (
    <section id="approach" className="bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-b border-[#E5EAEF] relative overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Architectural Mountain Composition with Faceted Polygon Treatment */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.14/1] drop-shadow-xl">
              {/* Subtle faceted underlay layer echoing the reference */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A15A]/15 to-[#C5A15A]/25 pointer-events-none rounded-xl"
                style={{
                  clipPath: "polygon(0 0, 93% 0, 100% 50%, 88% 100%, 0 100%)",
                  transform: "scale(1.02) translateX(4px)",
                }}
              />
              {/* Main crisp mountain photograph container */}
              <div 
                className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
                style={{
                  clipPath: "polygon(0 0, 89% 0, 100% 48%, 84% 100%, 0 100%)",
                }}
              >
                <Image
                  src="/images/clients-approach-mountains-hd.jpg"
                  alt="Alpine mountain peaks bathed in warm golden-hour sunset light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-left"
                />
                {/* Subtle warm sunset lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#071629]/20 via-transparent to-[#C5A15A]/10 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & 4 Value Propositions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                OUR APPROACH
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] leading-[1.12] text-[#071629] font-normal tracking-tight">
              More Than Advisory
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-relaxed font-normal max-w-xl">
              We build long-term relationships with companies, providing strategic
              communication, market positioning and investor engagement to drive
              lasting value.
            </p>

            {/* Four Equal Value Proposition Columns with Bare Gold Outline Icons */}
            <div className="pt-4 sm:pt-6 border-t border-[#DCE4EF]">
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DCE4EF]">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={v.title + v.subtitle}
                      className={`pt-4 sm:pt-0 pb-4 sm:pb-0 ${
                        i === 0 ? "sm:pr-5" : i === values.length - 1 ? "sm:pl-5" : "sm:px-5"
                      } flex flex-col items-start space-y-3 group`}
                    >
                      <div className="text-[#C5A15A] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                      </div>
                      <div className="pt-0.5">
                        <div className="font-semibold text-xs sm:text-[13.5px] text-[#071629] leading-snug">
                          {v.title}
                        </div>
                        <div className="font-semibold text-xs sm:text-[13.5px] text-[#071629] leading-snug">
                          {v.subtitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
