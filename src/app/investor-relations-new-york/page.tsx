import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegionalPageRenderer } from "@/components/regional/RegionalPageRenderer";
import { REGIONAL_PAGES_DATA } from "@/lib/regional-data";

export const metadata: Metadata = {
  title: "Expert Investor Relations New York | HE Capital Markets",
  description:
    "Ideally located in the capital of North American finance, our New York based team have access to a host of institutional investors, high net worth individuals and hedge fund managers.",
};

export default function InvestorRelationsNewYorkPage() {
  const data = REGIONAL_PAGES_DATA["investor-relations-new-york"];

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
