import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/contact/ContactFooter";
import { GlobalReachSection } from "@/components/services/shared/GlobalReachSection";
import { SERVICES_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Our Services | Capital Markets Advisory & Strategic Communications | HE Capital Markets",
  description:
    "Explore HE Capital Markets' comprehensive suite of advisory services: Investor Relations, Public Relations, Digital & Social Media, and Capital Market Advisory.",
};

export default function ServicesHubPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="min-h-screen bg-[#071629] flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        {/* Hub Hero */}
        <section className="relative w-full bg-[#071629] overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 border-b border-[#1A2D4B]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
              <span className="text-[12.5px] font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
                CAPITAL MARKETS ADVISORY
              </span>
              <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-white font-normal tracking-tight leading-[1.08] mb-4">
              Our Core Services
            </h1>

            {/* Description */}
            <p className="text-[15px] sm:text-[16px] text-[#9FB3C8] leading-[1.65] font-normal max-w-2xl mx-auto">
              We combine strategic communications, deep capital-markets expertise, and global investor
              outreach to deliver measurable value and market presence for public and private companies.
            </p>
          </div>
        </section>

        {/* Services Showcase Cards */}
        <section className="bg-[#F8F6F1] py-16 sm:py-20 lg:py-24 border-b border-[#E5EAEF]">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {servicesList.map((srv, idx) => (
                <div
                  key={srv.slug}
                  className="bg-white border border-[#DCE4EF] rounded-xl overflow-hidden shadow-lg shadow-[#071629]/5 flex flex-col hover:border-[#C5A15A]/60 transition-all duration-300 hover:shadow-xl group"
                >
                  {/* Service Hero Image Card Header */}
                  <div className="relative h-56 sm:h-64 w-full bg-[#071629] overflow-hidden">
                    <Image
                      src={srv.heroImage}
                      alt={srv.heroImageAlt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#071629]/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded bg-[#071629]/80 border border-[#C5A15A]/40 text-[#C5A15A] text-xs font-semibold tracking-wider uppercase">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-[1.5px] bg-[#C5A15A] shrink-0" />
                        <span className="text-xs font-semibold tracking-wider text-[#C5A15A] uppercase">
                          {srv.subtitle}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-[28px] text-[#071629] font-normal tracking-tight group-hover:text-[#C5A15A] transition-colors">
                        {srv.title}
                      </h2>

                      <p className="text-[14.5px] sm:text-[15px] text-[#536985] leading-[1.65]">
                        {srv.heroDescription}
                      </p>

                      {/* Key highlights / bullets preview from original copy */}
                      {srv.sections[1]?.bullets && (
                        <ul className="space-y-2 pt-2">
                          {srv.sections[1].bullets.slice(0, 3).map((bullet, bIdx) => {
                            const text =
                              typeof bullet === "string"
                                ? bullet
                                : `${bullet.title}: ${bullet.text}`;
                            return (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-[13.5px] text-[#475569] leading-snug"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                                <span className="line-clamp-2">{text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${srv.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#071629] hover:bg-[#C5A15A] text-white hover:text-[#071629] text-xs sm:text-[13.5px] font-medium tracking-[0.02em] transition-all duration-200 group/btn"
                      >
                        <span>Explore {srv.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared Global Reach */}
        <GlobalReachSection />
      </main>

      <ContactFooter />
    </div>
  );
}
