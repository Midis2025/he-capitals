"use client";

import React from "react";
import { RegionalHero } from "./RegionalHero";
import { RegionalEditorial } from "./RegionalEditorial";
import { GlobalReachSection } from "@/components/services/shared/GlobalReachSection";
import { RegionalPageData } from "@/lib/regional-data";

interface RegionalPageRendererProps {
  data: RegionalPageData;
}

export const RegionalPageRenderer: React.FC<RegionalPageRendererProps> = ({
  data,
}) => {
  return (
    <>
      <RegionalHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        description={data.heroDescription}
        imageSrc={data.heroImage}
        imageAlt={data.heroImageAlt}
        ctaText={data.ctaText}
      />
      <RegionalEditorial
        sections={data.sections}
        expertise={data.expertise}
        formServiceValue={data.formServiceValue}
      />
      <GlobalReachSection />
    </>
  );
};
