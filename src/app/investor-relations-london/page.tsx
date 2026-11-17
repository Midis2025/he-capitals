import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegionalPageRenderer } from "@/components/regional/RegionalPageRenderer";
import { REGIONAL_PAGES_DATA } from "@/lib/regional-data";

export const metadata: Metadata = {
  title: "Investor Relations Company In London | HE Capital Markets",
  description:
    "Our UK-based team have their experienced ears to the ground right now, finding the best ways to build market value before anybody else.",
};

export default function InvestorRelationsLondonPage() {
  const data = REGIONAL_PAGES_DATA["investor-relations-london"];

  return (
    <div className="min-h-screen bg-[#071629] flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <RegionalPageRenderer data={data} />
      </main>
      <Footer />
    </div>
  );
}
