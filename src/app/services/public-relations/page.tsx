import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/contact/ContactFooter";
import { ServicePageRenderer } from "@/components/services/shared/ServicePageRenderer";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Public Relations | Enhancing Your Brand in a Global Market | HE Capital Markets",
  description:
    "With an astute level of media knowledge and intuition, our Public Relations experts know how to tell your story, ensuring it engages the right people at the most opportune times.",
};

export default function PublicRelationsPage() {
  const data = SERVICES_DATA["public-relations"];

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

