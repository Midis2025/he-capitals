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
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-12">
        {/* Top Grid: Logo + Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1A2D4B]">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo light />
            <p className="text-sm text-[#8E9CAE] leading-relaxed max-w-sm font-normal">
              Strategic capital markets advisory, investor relations, and
              communications. Connecting ambitious companies with opportunity.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* COMPANY */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8E9CAE]">
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#approach" className="hover:text-white transition-colors">
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="#clients" className="hover:text-white transition-colors">
                    Our Clients
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8E9CAE]">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Capital Markets Advisory
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Public Relations
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Digital & Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Mergers & Acquisitions
                  </Link>
                </li>
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Industries
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8E9CAE]">
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Mining
                  </Link>
                </li>
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Psychedelics
                  </Link>
                </li>
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Pharmaceuticals
                  </Link>
                </li>
                <li>
                  <Link href="#sectors" className="hover:text-white transition-colors">
                    Cannabis
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-4">
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E]">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs text-[#8E9CAE]">
                <li>
                  <Link href="#insights" className="hover:text-white transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link href="#insights" className="hover:text-white transition-colors">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-[#1A2D4B] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
              A more informed perspective.
            </h3>
            <p className="text-xs md:text-sm text-[#8E9CAE] max-w-xl">
              Receive market perspectives, company news, and updates from HE Capital
              Markets. Subscribe to our newsletter.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                required
                className="flex-1 bg-[#0E203B] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#B99A5E] hover:bg-[#A8894E] text-white px-6 py-3 rounded text-xs font-medium tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 select-none cursor-pointer whitespace-nowrap"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#B99A5E]" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1 group"
            >
              <span>X</span>
              <ArrowUpRight className="w-3 h-3 text-[#B99A5E]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

