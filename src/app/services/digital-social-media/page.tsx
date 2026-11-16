import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/contact/ContactFooter";
import { ServicePageRenderer } from "@/components/services/shared/ServicePageRenderer";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Digital & Social Media | Innovative Multiplatform Communications | HE Capital Markets",
  description:
    "We merge key business objectives with essential digital platforms, delivering data-driven campaigns with high-impact messages that engage investors across the global digital ecosphere.",
};

export default function DigitalSocialMediaPage() {
  const data = SERVICES_DATA["digital-social-media"];

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

