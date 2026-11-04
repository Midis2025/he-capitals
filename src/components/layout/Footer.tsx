"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#091426] text-white border-t border-[#1A2D4B]">
      <div className="site-container pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
        {/* Top Grid: Logo + Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-14 border-b border-[#1A2D4B]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <Logo light width={196} height={52} />
            <p className="text-sm text-[#A0B3C6] leading-relaxed max-w-sm font-normal">
              Strategic capital markets advisory, investor relations and
              communications. Connecting ambitious companies with{"\u00A0"}opportunity.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* COMPANY */}
            <div className="space-y-4">
              <h4 className="text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Company
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#approach" className="hover:text-white transition-colors">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/clients" className="hover:text-white transition-colors">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="space-y-4">
              <h4 className="text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Services
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Capital Markets Advisory
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
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Mergers & Acquisitions
                  </Link>
                </li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div className="space-y-4">
              <h4 className="text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Industries
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Mining
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Psychedelics
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Pharmaceuticals
                  </Link>
                </li>
                <li>
                  <Link href="/#sectors" className="hover:text-white transition-colors">
                    Cannabis
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-4">
              <h4 className="text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Resources
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A0B3C6]">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Office Locations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-10 sm:py-12 border-b border-[#1A2D4B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
              A more informed perspective.
            </h3>
            <p className="text-sm text-[#A0B3C6] max-w-xl leading-relaxed">
              Receive market perspectives, company news and updates from HE Capital
              Markets. Subscribe to our{"\u00A0"}newsletter.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                required
                className="flex-1 bg-[#0B1A30] border border-[#1E365C] rounded-md px-4 py-3 text-sm text-white placeholder-[#7E8F9F] focus:outline-none focus:border-[#B99A5E] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#B99A5E] hover:bg-[#C8A96E] text-[#091426] px-6 py-3 rounded-md text-xs font-semibold tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 select-none cursor-pointer whitespace-nowrap shadow-md"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8E9CAE] gap-4">
          <div>
            <p>© HE Capital Markets. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A5E]" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B99A5E]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
