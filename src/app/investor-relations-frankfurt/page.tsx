import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegionalPageRenderer } from "@/components/regional/RegionalPageRenderer";
import { REGIONAL_PAGES_DATA } from "@/lib/regional-data";

export const metadata: Metadata = {
  title: "Investor Relations Company In Frankfurt | HE Capital Markets",
  description:
    "Our Frankfurt team provide a comprehensive programme of investor relations, public relations and digital and social media designed to attract investment.",
};

export default function InvestorRelationsFrankfurtPage() {
  const data = REGIONAL_PAGES_DATA["investor-relations-frankfurt"];

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
