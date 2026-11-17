"use client";

import React from "react";
import { RegionalSection, RegionalExpertise } from "@/lib/regional-data";
import { RegionalExpertiseCard } from "./RegionalExpertiseCard";
import { ServiceEnquiryForm } from "@/components/services/shared/ServiceEnquiryForm";

interface RegionalEditorialProps {
  sections: RegionalSection[];
  expertise: RegionalExpertise;
  formServiceValue: string;
}

export const RegionalEditorial: React.FC<RegionalEditorialProps> = ({
  sections,
  expertise,
  formServiceValue,
}) => {
  return (
    <section className="bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-b border-[#E5EAEF] relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: EDITORIAL NARRATIVE & ORIGINAL CONTENT */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-12 sm:space-y-14 lg:space-y-16">
            {sections.map((sec, idx) => (
              <React.Fragment key={sec.heading}>
                <div className="space-y-5">
                  {/* Eyebrow Label */}
                  {sec.eyebrow && (
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
                      <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                        {sec.eyebrow}
                      </span>
                    </div>
                  )}

                  {/* Section Heading */}
                  <h2
                    className={`font-serif text-[#071629] font-normal tracking-tight ${
                      idx === 0
                        ? "text-3xl sm:text-4xl lg:text-[38px] leading-[1.16]"
                        : "text-2xl sm:text-3xl lg:text-[32px] leading-[1.2]"
                    }`}
                  >
                    {sec.heading}
                  </h2>

                  {/* Section Intro (if present) */}
                  {sec.intro && (
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#334155] leading-[1.7] font-normal pt-0.5">
                      {sec.intro}
                    </p>
                  )}

                  {/* Standard Paragraphs */}
                  {sec.paragraphs && sec.paragraphs.length > 0 && (
                    <div className="space-y-4 text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#475569] leading-[1.72] font-normal pt-1">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Standout Callout Block (Original H4 Quote) */}
                  {sec.callout && (
                    <div className="my-6 p-6 sm:p-7 rounded-xl bg-white border-l-4 border-[#C5A15A] shadow-md border-y border-r border-[#E2E8F0] space-y-2">
                      <div className="text-[11px] font-semibold tracking-[0.2em] text-[#C5A15A] uppercase">
                        STRATEGIC PRINCIPLE
                      </div>
                      <p className="font-serif italic text-lg sm:text-[19px] lg:text-[20px] text-[#071629] leading-[1.55] font-normal">
                        &ldquo;{sec.callout}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Bullet Points */}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-3.5 pt-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3.5 text-[15px] lg:text-[15.5px] text-[#334155] leading-[1.65]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#C5A15A] mt-2 shrink-0 shadow-xs" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Closing Paragraph */}
                  {sec.closing && (
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#475569] leading-[1.7] font-normal pt-2">
                      {sec.closing}
                    </p>
                  )}
                </div>

                {/* Subtle Section Divider */}
                {idx < sections.length - 1 && (
                  <hr className="border-t border-[#DFE6EF]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: REGIONAL EXPERTISE & CONTACT ENQUIRY */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 lg:sticky lg:top-28">
            <RegionalExpertiseCard expertise={expertise} />
            <ServiceEnquiryForm defaultService={formServiceValue} />
          </div>
        </div>
      </div>
    </section>
  );
};
