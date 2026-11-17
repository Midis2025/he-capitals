"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-[#071629] text-white border-t border-[#152B4B] relative overflow-hidden">
      {/* Right Side Glowing 3D Digital Globe Graphic (Zero rectangular bounding box, perfectly transparent) */}
      <div className="hidden md:block absolute right-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden w-[360px] sm:w-[420px] lg:w-[480px] h-[250px] lg:h-[275px]">
        <img
          src="/images/footer-network-globe.png"
          alt=""
          className="w-full h-full object-contain object-right-bottom opacity-85 translate-x-4 translate-y-2"
        />
      </div>

      <div className="site-container pt-12 sm:pt-14 pb-8 sm:pb-10 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#152B4B]/80 items-start">
          {/* Brand Info with Vertical Dividing Line */}
          <div className="lg:col-span-4 relative pr-0 lg:pr-8">
            <div className="space-y-4">
              <Logo light width={180} height={48} />
              <p className="text-[14px] text-[#A0B3C6] leading-relaxed max-w-xs font-normal">
                A capital markets advisory firm that helps companies build market
                value through strategic communication, investor engagement and
                global reach.
              </p>
            </div>
            {/* Elegant Vertical Divider Line on Desktop */}
            <div className="hidden lg:block absolute right-0 top-1 bottom-1 w-px bg-[#1E3B63]/60" />
          </div>

          {/* Navigation Columns (SECTORS, SERVICES, ABOUT) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 sm:gap-8 pl-0 lg:pl-4">
            {/* Sectors */}
            <div className="space-y-3.5">
              <h4 className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C5A15A]">
                SECTORS
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-[#A0B3C6]">
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Cannabis
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Oil & Gas
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Mining
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Pharmaceuticals
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3.5">
              <h4 className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C5A15A]">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-[#A0B3C6]">
                <li>
                  <Link href="/services/investor-relations" className="hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/services/capital-market-advisory" className="hover:text-white transition-colors">
                    Capital Market Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/services/public-relations" className="hover:text-white transition-colors">
                    Public Relations
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-social-media" className="hover:text-white transition-colors">
                    Digital & Social Media
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-3.5">
              <h4 className="text-[12px] font-semibold tracking-[0.22em] uppercase text-[#C5A15A]">
                ABOUT
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-[#A0B3C6]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-white transition-colors">
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Office Locations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Spacer Column (for desktop layout spacing while globe is anchored right) */}
          <div className="hidden lg:block lg:col-span-3 pointer-events-none select-none" />
        </div>

        {/* Bottom Legal & Registration Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#71849A] gap-3">
          <div>
            <p>© 2019–2026 HE Capital Markets Ltd. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Company Registration Number: 11895029 | News Building, 3 London
              Bridge Street, London, SE1 9SG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
