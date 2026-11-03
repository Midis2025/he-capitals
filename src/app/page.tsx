import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CommitmentSection } from "@/components/sections/CommitmentSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { GlobalReachSection } from "@/components/sections/GlobalReachSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 01 Global Capital Markets Advisory (Hero) */}
        <HeroSection />

        {/* 02 About HE Capital Markets */}
        <AboutSection />

        {/* 03 Our Commitment */}
        <CommitmentSection />

        {/* 04 Our Services */}
        <ServicesSection />

        {/* 05 Sectors We Cover */}
        <SectorsSection />

        {/* 06 Our Approach */}
        <ApproachSection />

        {/* 07 Our Network (Trusted Clients & Partners) */}
        <NetworkSection />

        {/* 08 Insights & Press Releases */}
        <InsightsSection />

        {/* 09 Global Reach */}
        <GlobalReachSection />

        {/* 10 Why HE Capital Markets */}
        <WhyUsSection />

        {/* 11 Let's Connect */}
        <ContactSection />
      </main>

      {/* 12 Footer */}
      <Footer />
    </div>
  );
}
