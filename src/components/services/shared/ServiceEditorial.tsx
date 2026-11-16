"use client";

import React from "react";
import { SectorExpertiseCard } from "./SectorExpertiseCard";
import { ServiceEnquiryForm } from "./ServiceEnquiryForm";
import { ServiceSection } from "@/lib/services-data";

interface ServiceEditorialProps {
  sections: ServiceSection[];
  formServiceValue: string;
}

export const ServiceEditorial: React.FC<ServiceEditorialProps> = ({
  sections,
  formServiceValue,
}) => {
  return (
    <section className="bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-b border-[#E5EAEF] relative">
      {/* 1200px max-width container with balanced margins */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: EDITORIAL NARRATIVE & CONTENT */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-12 sm:space-y-14 lg:space-y-16">
            {sections.map((sec, idx) => (
              <React.Fragment key={sec.heading}>
                <div className="space-y-5">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
                    <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                      {sec.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2
                    className={`font-serif text-[#071629] font-normal tracking-tight ${
                      idx === 0
                        ? "text-3xl sm:text-4xl lg:text-[40px] leading-[1.16]"
                        : idx === 1
                        ? "text-2xl sm:text-3xl lg:text-[32px] leading-[1.18]"
                        : "text-2xl sm:text-3xl lg:text-[30px] leading-[1.2]"
                    }`}
                  >
                    {sec.heading}
                  </h2>

                  {/* Introductory paragraph if provided */}
                  {sec.intro && (
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-0.5">
                      {sec.intro}
                    </p>
                  )}

                  {/* Standard paragraphs */}
                  {sec.paragraphs && sec.paragraphs.length > 0 && (
                    <div className="space-y-4 text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-1">
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Bullet points */}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-3.5 pt-2">
                      {sec.bullets.map((b, bIdx) => {
                        const isObj = typeof b !== "string";
                        return (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3.5 text-[15px] lg:text-[15.5px] text-[#475569] leading-[1.6]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#C5A15A] mt-2 shrink-0 shadow-xs" />
                            {isObj ? (
                              <span>
                                <strong className="font-semibold text-[#071629]">
                                  {b.title}:{" "}
                                </strong>
                                <span>{b.text}</span>
                              </span>
                            ) : (
                              <span>{b}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Closing paragraph if provided */}
                  {sec.closing && (
                    <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-2">
                      {sec.closing}
                    </p>
                  )}
                </div>

                {/* Subtle Divider between sections */}
                {idx < sections.length - 1 && (
                  <hr className="border-t border-[#DFE6EF]" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: SECTOR EXPERTISE & ENQUIRY FORM */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 lg:sticky lg:top-28">
            <SectorExpertiseCard />
            <ServiceEnquiryForm defaultService={formServiceValue} />
          </div>
        </div>
      </div>
    </section>
  );
};

