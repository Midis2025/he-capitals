import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactHero } from "@/components/contact/ContactHero";
import { MainContactSection } from "@/components/contact/MainContactSection";
import { TeamSection } from "@/components/contact/TeamSection";
import { InternationalPresence } from "@/components/contact/InternationalPresence";
import { ContactFooter } from "@/components/contact/ContactFooter";

export const metadata: Metadata = {
  title: "Contact Us | HE Capital Markets",
  description:
    "Get in touch with HE Capital Markets. Connect directly with our senior advisory team and international office network.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#071629] flex flex-col">
      <Navbar />
      <main className="w-full">
        <ContactHero />
        <MainContactSection />
        <TeamSection />
        <InternationalPresence />
      </main>
      <ContactFooter />
    </div>
  );
}
