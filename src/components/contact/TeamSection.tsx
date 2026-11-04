"use client";

import React from "react";
import { MapPin, Phone, Printer, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  company: string;
  building: string;
  address: string;
  postcode: string;
  phone: string;
  fax: string;
  email: string;
}

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Hari Patel",
      title: "Director",
      company: "HE Capital Markets",
      building: "News Building",
      address: "3 London Bridge Street, London",
      postcode: "SE1 9SG",
      phone: "(+44) 0207 096 0125",
      fax: "(+44) 0203 300 1647",
      email: "hari@hecapitalmarkets.com",
    },
    {
      name: "Sam Davey",
      title: "Managing Director",
      company: "HE Capital Markets",
      building: "News Building",
      address: "3 London Bridge Street, London",
      postcode: "SE1 9SG",
      phone: "(+44) 0207 096 0125",
      fax: "(+44) 0203 300 1647",
      email: "sam@hecapitalmarkets.com",
    },
    {
      name: "Richard Orourke",
      title: "Director Of Corporate Partnerships",
      company: "HE Capital Markets",
      building: "News Building",
      address: "3 London Bridge Street, London",
      postcode: "SE1 9SG",
      phone: "(+44) 0207 096 0125",
      fax: "(+44) 0203 300 1647",
      email: "richard@hecapitalmarkets.com",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#071629] text-white relative overflow-hidden border-b border-[#1A2D4B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] bg-[#1E3A66]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[460px] h-[460px] bg-[#C5A15A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A2D4B_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-10 sm:mb-12 lg:mb-14 space-y-2.5"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-[2px] bg-[#C5A15A] shrink-0" />
            <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase">
              DIRECT CONTACTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] text-white font-normal tracking-tight leading-[1.1]">
            Our Team
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#9CB1C9] leading-relaxed font-normal">
            Speak directly with our senior team about your specific requirements.
          </p>
        </motion.div>

        {/* 3 Equal-Width Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#0B1A30]/80 border border-[#1E365C]/80 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#C5A15A]/60 transition-all duration-300 group"
            >
              <div className="space-y-3.5">
                {/* Name & Title */}
                <div>
                  <h3 className="font-serif text-xl sm:text-[22px] text-white font-normal group-hover:text-[#C5A15A] transition-colors tracking-tight">
                    {member.name}
                  </h3>
                  <p className="font-serif italic text-sm text-[#C5A15A] mt-0.5">
                    {member.title}
                  </p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-2 text-xs sm:text-[13px] text-[#A0B3C6] leading-relaxed">
                  <MapPin className="w-4 h-4 text-[#C5A15A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{member.company}</p>
                    <p>{member.building}</p>
                    <p>
                      {member.address}, {member.postcode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                  <Phone className="w-4 h-4 text-[#C5A15A] shrink-0" />
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    Tel: {member.phone}
                  </a>
                </div>

                {/* Fax */}
                <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                  <Printer className="w-4 h-4 text-[#C5A15A] shrink-0" />
                  <span>Fax: {member.fax}</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                  <Mail className="w-4 h-4 text-[#C5A15A] shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:text-[#C5A15A] transition-colors font-medium text-white break-all"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
