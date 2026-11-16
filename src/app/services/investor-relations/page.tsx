import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/contact/ContactFooter";
import { InvestorRelationsHero } from "@/components/services/investor-relations/InvestorRelationsHero";
import { InvestorRelationsEditorial } from "@/components/services/investor-relations/InvestorRelationsEditorial";
import { InvestorValueProposition } from "@/components/services/investor-relations/InvestorValueProposition";
import { GlobalReachSection } from "@/components/services/investor-relations/GlobalReachSection";

export const metadata: Metadata = {
  title: "Investor Relations | HE Capital Markets",
  description:
    "We combine strategic communication, market engagement and deep capital-markets expertise to build trust, enhance visibility and secure long-term value for our clients.",
};

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-[#071629] flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <InvestorRelationsHero />
        <InvestorRelationsEditorial />
        <InvestorValueProposition />
        <GlobalReachSection />
      </main>
      <ContactFooter />
    </div>
  );
}
