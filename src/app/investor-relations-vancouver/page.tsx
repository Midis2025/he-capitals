import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegionalPageRenderer } from "@/components/regional/RegionalPageRenderer";
import { REGIONAL_PAGES_DATA } from "@/lib/regional-data";

export const metadata: Metadata = {
  title: "Specialist Investor Relations Vancouver | HE Capital Markets",
  description:
    "HE Capital is a full service investor relations specialist, providing communications programmes and consultancy for listed companied from our offices in Vancouver.",
};

export default function InvestorRelationsVancouverPage() {
  const data = REGIONAL_PAGES_DATA["investor-relations-vancouver"];

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
