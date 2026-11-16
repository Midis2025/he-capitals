import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/contact/ContactFooter";
import { ServicePageRenderer } from "@/components/services/shared/ServicePageRenderer";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Capital Market Advisory | Expert Insight and Guidance | HE Capital Markets",
  description:
    "Assisting public and private companies in effectively originating, negotiating and executing a wide range of investment banking, capital finance and strategic transactions.",
};

export default function CapitalMarketAdvisoryPage() {
  const data = SERVICES_DATA["capital-market-advisory"];

  return (
    <div className="min-h-screen bg-[#071629] flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <ServicePageRenderer data={data} />
      </main>
      <ContactFooter />
    </div>
  );
}

