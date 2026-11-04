"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";

export const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-[#071629] text-white border-t border-[#1A2D4B] relative overflow-hidden">
      <div className="site-container pt-12 sm:pt-14 pb-8 sm:pb-10 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#1A2D4B]/80 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light width={180} height={48} />
            <p className="text-xs sm:text-[13px] text-[#8EA2BA] leading-relaxed max-w-xs font-normal">
              A capital markets advisory firm that helps companies build market
              value through strategic communication, investor engagement and
              global reach.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 sm:gap-8">
            {/* Sectors */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-white">
                Sectors
              </h4>
              <ul className="space-y-2 text-xs text-[#8EA2BA]">
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
                    Block Chain
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
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-2 text-xs text-[#8EA2BA]">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Public Relations
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Digital & Social Media
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-white">
                About
              </h4>
              <ul className="space-y-2 text-xs text-[#8EA2BA]">
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
              </ul>
            </div>
          </div>

          {/* Right Column: Subtle World Globe Visual */}
          <div className="lg:col-span-3 flex justify-end items-center relative pointer-events-none select-none">
            <div className="relative w-36 h-36 lg:w-44 lg:h-44 opacity-35 mix-blend-screen">
              <Image
                src="/images/global-reach-bg-globe.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Legal & Registration Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#71849A] gap-3">
          <div>
            <p>© 2019-2026 HE Capital Markets Ltd. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Company Registration Number: 11959029 | News Building, 3 London
              Bridge Street, London, SE1 9SG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

