import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientsStatsStrip } from "@/components/clients/ClientsStatsStrip";
import { ClientShowcase } from "@/components/clients/ClientShowcase";
import { IndustriesSupported } from "@/components/clients/IndustriesSupported";
import { ContactFooter } from "@/components/contact/ContactFooter";

export const metadata: Metadata = {
  title: "Clients | HE Capital Markets",
  description:
    "Explore HE Capital Markets' diverse client portfolio across mining, technology, blockchain, pharmaceuticals, psychedelics, and energy sectors.",
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-[#071629] flex flex-col">
      <Navbar />
      <main className="w-full">
        <ClientsHero />
        <ClientsStatsStrip />
        <ClientShowcase />
        <IndustriesSupported />
      </main>
      <ContactFooter />
    </div>
  );
}
