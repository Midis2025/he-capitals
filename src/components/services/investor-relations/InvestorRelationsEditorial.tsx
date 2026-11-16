"use client";

import React from "react";
import { SectorExpertiseCard } from "./SectorExpertiseCard";
import { InvestorRequirementsForm } from "./InvestorRequirementsForm";

export const InvestorRelationsEditorial: React.FC = () => {
  const bulletPointsExperience = [
    "Simply put, we will identify the most ideal opportunities for your company and proactively help people to discover the opportunity of investing in you.",
    "Developing key messages and nurturing essential relationships will make communication between you and investors completely transparent.",
    "Working with your own management calendar, we will find the most opportune exhibitions, road shows and meetings for you to engage investors.",
    "Auditing every aspect of how your company is perceived, and making the right adjustments, we'll achieve your ideal value proposition.",
    "Also regularly engrossed in industry news and how it is reflected in the media, we'll be on hand to deal with any unanticipated changes in the market.",
    "Consistently adapting your strategy to react positively to every event, we will ensure you remain credible, prominent and attractive to investors and high net worth individuals.",
  ];

  const bulletPointsOngoing = [
    "We provide weekly reports to every client.",
    "We're always available to update you.",
  ];

  return (
    <section className="bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-b border-[#E5EAEF] relative">
      {/* 1200px max-width container with balanced margins */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: EDITORIAL NARRATIVE & STRATEGIC CONTENT */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-12 sm:space-y-14 lg:space-y-16">
            {/* 1. Main Editorial Intro: Reinventing the Way You Secure Investment */}
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
                <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                  INVESTOR RELATIONS
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#071629] font-normal tracking-tight leading-[1.16]">
                Reinventing the Way You Secure Investment
              </h2>

              {/* Editorial Copy */}
              <div className="space-y-4 text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-1">
                <p>
                  By partnering with our Investor Relations team, you will have instant and consistent
                  access to our extensive experience in controlling the flow of information between
                  your public company, and the market. With your goals at the very forefront of everything
                  we do, we will undertake a detailed analysis of your situation today, and identify the
                  right way forward and secure further investment.
                </p>
                <p>
                  HE Capital will deliver management, strategy, and implement impactful, informative
                  communications designed to appeal to your investors. Building trust, and ensuring
                  their goals become aligned with yours, we&apos;ll secure you the highest value possible.
                </p>
                <p>
                  We combine traditional and innovative communication strategies with securing positive
                  relationships in both the media and the financial sector. Continuously looking for new
                  and further opportunities, we excel in exceeding investor relations expectations.
                </p>
              </div>
            </div>

            {/* Subtle Divider */}
            <hr className="border-t border-[#DFE6EF]" />

            {/* 2. Experience and Expertise in Enhancing Value */}
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
                <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                  OUR APPROACH
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#071629] font-normal tracking-tight leading-[1.18]">
                Experience and Expertise in Enhancing Value
              </h2>

              {/* Introductory Copy */}
              <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-0.5">
                With extensive contacts including institutional investors, venture capitalists,
                fund managers and hedge fund managers, with HE Capital we open you up to an entire
                network of influential individuals and companies ready to invest right now:
              </p>

              {/* Bullet Points with Gold Markers */}
              <ul className="space-y-3.5 pt-2">
                {bulletPointsExperience.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[15px] lg:text-[15.5px] text-[#475569] leading-[1.6]">
                    <span className="w-2 h-2 rounded-full bg-[#C5A15A] mt-2 shrink-0 shadow-xs" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Divider */}
            <hr className="border-t border-[#DFE6EF]" />

            {/* 3. Ongoing Engagement: Keeping You in Touch With Your Strategy */}
            <div className="space-y-5">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
                <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                  ONGOING ENGAGEMENT
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[30px] text-[#071629] font-normal tracking-tight leading-[1.2]">
                Keeping You in Touch With Your Strategy
              </h2>

              {/* Bullet Points */}
              <ul className="space-y-3 pt-1">
                {bulletPointsOngoing.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[15px] lg:text-[15.5px] text-[#475569] leading-[1.6]">
                    <span className="w-2 h-2 rounded-full bg-[#C5A15A] mt-2 shrink-0 shadow-xs" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Closing Paragraph */}
              <p className="text-[15px] sm:text-[15.5px] lg:text-[16px] text-[#536985] leading-[1.65] font-normal pt-1">
                The final, and key part of everything we do is keeping you informed and up to date with
                progress. Along with our weekly reports process, you&apos;re welcome to call us at any
                time to discuss your Investor Relations service. Use the contact form here to get in touch.
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: SECTOR EXPERTISE & ENQUIRY FORM */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 lg:sticky lg:top-28">
            {/* 1. Sector Expertise Card */}
            <SectorExpertiseCard />

            {/* 2. Discuss Your Requirements Form Card */}
            <InvestorRequirementsForm />
          </div>
        </div>
      </div>
    </section>
  );
};
