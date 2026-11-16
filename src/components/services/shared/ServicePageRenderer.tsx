"use client";

import React from "react";
import { ServiceHero } from "./ServiceHero";
import { ServiceEditorial } from "./ServiceEditorial";
import { ServiceValueProposition } from "./ServiceValueProposition";
import { GlobalReachSection } from "./GlobalReachSection";
import { ServicePageData } from "@/lib/services-data";

interface ServicePageRendererProps {
  data: ServicePageData;
}

export const ServicePageRenderer: React.FC<ServicePageRendererProps> = ({ data }) => {
  return (
    <>
      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        description={data.heroDescription}
        imageSrc={data.heroImage}
        imageAlt={data.heroImageAlt}
        ctaText={data.ctaText}
      />
      <ServiceEditorial
        sections={data.sections}
        formServiceValue={data.formServiceValue}
      />
      {data.valueProposition && data.valueProposition.heading && (
        <ServiceValueProposition
          heading={data.valueProposition.heading}
          pillars={data.valueProposition.pillars}
        />
      )}
      <GlobalReachSection />
    </>
  );
};
