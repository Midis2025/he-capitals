"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DFE6EF]/70 h-[80px]"
          : "bg-white border-b border-[#DFE6EF] h-[100px]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.06em] text-[#0B1A30]">
          {NAVIGATION_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-[#B99A5E] ${
                    isOpen ? "text-[#B99A5E]" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#B99A5E]" : "text-[#82909D]"
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasChildren && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[460px] pt-3 z-50"
                      >
                        <div className="bg-[#0B1A30] border border-[#1A2D4B] rounded shadow-2xl p-4 text-white">
                          <div className="text-[10px] font-semibold tracking-widest text-[#B99A5E] uppercase px-3 py-1.5 border-b border-[#1A2D4B] mb-2 flex items-center justify-between">
                            <span>{item.label} DIRECTORY</span>
                            <span className="text-[#8E9CAE]">0{item.children?.length} ITEMS</span>
                          </div>

                          <div className="grid grid-cols-1 gap-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group p-2.5 rounded hover:bg-[#152845] transition-colors flex items-start gap-3"
                              >
                                {child.number && (
                                  <span className="text-xs font-serif text-[#B99A5E] pt-0.5">
                                    {child.number}
                                  </span>
                                )}
                                <div className="flex-1">
                                  <div className="text-xs font-medium text-white group-hover:text-[#B99A5E] transition-colors flex items-center justify-between">
                                    <span>{child.title}</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#B99A5E] opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                  <p className="text-[11px] text-[#8E9CAE] line-clamp-1 mt-0.5 font-normal">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:block">
          <Button
            href="#contact"
            variant="primary"
            className="w-[194px] h-[48px] text-[13px] tracking-wide"
          >
            Discuss Your Goals
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0B1A30] hover:text-[#B99A5E] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1A30] border-t border-[#1A2D4B] text-white overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-[#1A2D4B]/60 pb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium hover:text-[#B99A5E] transition-colors"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <div className="mt-2 pl-3 space-y-1.5 border-l border-[#1A2D4B]">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[#8E9CAE] hover:text-white transition-colors py-1"
                        >
                          <span className="text-[#B99A5E] mr-1.5">{child.number}</span>
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="gold"
                  className="w-full justify-center h-12 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Discuss Your Goals
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
