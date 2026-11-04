import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { GlobalAudience } from "@/components/about/GlobalAudience";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { OurVision } from "@/components/about/OurVision";
import { GlobalReach } from "@/components/about/GlobalReach";
import { AboutContactCTA } from "@/components/about/AboutContactCTA";

export const metadata: Metadata = {
  title: "About Us | HE Capital Markets",
  description:
    "Learn about HE Capital Markets — a strategic capital markets advisory and investor relations firm helping companies build lasting market value through global reach.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutIntroduction />
        <GlobalAudience />
        <WhyChooseUs />
        <OurVision />
        <GlobalReach />
        <AboutContactCTA />
      </main>
      <Footer />
    </div>
  );
}

