"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface OfficeHub {
  city: string;
  phone: string;
}

export const InternationalPresence: React.FC = () => {
  const offices: OfficeHub[] = [
    { city: "Vancouver", phone: "+1-604-288-2651" },
    { city: "New York", phone: "+1-718-578-4120" },
    { city: "London", phone: "+44 207 096 0125" },
    { city: "Frankfurt", phone: "+1-270-7769-191" },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-[#DFE6EF]">
      {/* Background World Map Visual on the Right with Smooth Blend to White/Pale-Blue */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] xl:w-[65%] pointer-events-none select-none z-0">
        <Image
          src="/images/contact-international-presence-map.jpg"
          alt="International Presence Global World Map"
          fill
          className="object-cover object-[center_center]"
          priority
        />
        {/* Gradients blending into the light background #F8FAFC */}
        <div className="absolute inset-y-0 left-0 w-44 sm:w-64 lg:w-80 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent pointer-events-none" />
      </div>

      <div className="site-container relative z-10">
        {/* Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mb-12 sm:mb-16 lg:mb-20 space-y-2.5"
        >
          {/* Eyebrow with Gold Line */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
              OUR GLOBAL REACH
            </span>
          </div>

          {/* Main Heading - Dark Navy Serif */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] text-[#071629] font-normal tracking-tight leading-[1.1]">
            International Presence
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#536985] leading-relaxed font-normal pt-0.5">
            Our team and advisor network span key financial centres across global
            markets.
          </p>
        </motion.div>

        {/* 4 Global Offices in a Clean Horizontal Row with Vertical Dividers */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 pt-6 border-t border-slate-300/80"
        >
          {offices.map((office, idx) => (
            <div
              key={office.city}
              className={`flex items-start gap-3.5 ${
                idx < offices.length - 1
                  ? "lg:border-r lg:border-slate-300/80 lg:pr-6 lg:mr-6"
                  : ""
              }`}
            >
              <div className="text-[#C5A15A] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 fill-[#C5A15A]/20" />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-serif text-lg sm:text-[19px] text-[#071629] font-medium tracking-tight">
                  {office.city}
                </h3>
                <a
                  href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs sm:text-[13.5px] text-[#475569] hover:text-[#C5A15A] transition-colors font-sans block tracking-tight"
                >
                  {office.phone}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
