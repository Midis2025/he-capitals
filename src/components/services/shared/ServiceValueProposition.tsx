"use client";

import React from "react";
import {
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
  Newspaper,
  Award,
  Network,
  BarChart,
  Globe,
  Briefcase,
  Coins,
  Scale,
} from "lucide-react";
import { ValuePillar } from "@/lib/services-data";

interface ServiceValuePropositionProps {
  heading: string;
  pillars: ValuePillar[];
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  target: Target,
  users: Users,
  trendingUp: TrendingUp,
  shieldCheck: ShieldCheck,
  newspaper: Newspaper,
  award: Award,
  network: Network,
  barChart: BarChart,
  globe: Globe,
  briefcase: Briefcase,
  coins: Coins,
  scale: Scale,
};

export const ServiceValueProposition: React.FC<ServiceValuePropositionProps> = ({
  heading,
  pillars,
}) => {
  return (
    <section className="bg-[#071629] py-14 sm:py-16 lg:py-20 border-b border-[#1A2D4B] relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E3A66]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 1200px max-width container */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight leading-[1.14]">
            {heading}
          </h2>
        </div>

        {/* 3 Pillars Grid with Fine Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#1A2D4B]">
          {pillars.map((pillar) => {
            const Icon = ICON_MAP[pillar.iconName] || Target;

            return (
              <div
                key={pillar.title}
                className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 space-y-3.5"
              >
                {/* Gold Outline Icon in Subtle Round Badge - 64px badge / 28px icon */}
                <div className="w-16 h-16 rounded-full bg-[#0E2442] border border-[#C5A15A]/35 flex items-center justify-center text-[#C5A15A] mb-1 shadow-lg shadow-[#040C17]/50">
                  <Icon className="w-7 h-7 stroke-[1.7]" />
                </div>

                {/* Pillar Heading */}
                <h3 className="font-serif text-[20px] sm:text-[21px] text-white font-normal tracking-tight">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[14.5px] text-[#A0B3C8] leading-[1.6] max-w-xs">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

