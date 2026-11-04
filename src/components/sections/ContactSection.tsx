"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        service: "",
        message: "",
      });
    }, 6000);
  };

  return (
    <section id="contact" className="section-spacing bg-[#0B1A30] text-white relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <SectionBadge number="11" label="LET'S CONNECT" light />

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-[1.12] tracking-tight">
              Your Next Opportunity Starts With a Conversation.
            </h2>

            <p className="text-xs sm:text-sm md:text-[15px] text-[#8E9CAE] leading-relaxed font-normal">
              Whether you&apos;re looking to strengthen investor relationships,
              expand market visibility or explore new opportunities, our team
              is ready to understand your{"\u00A0"}objectives.
            </p>

            {/* Info Items */}
            <div className="space-y-3 pt-4 border-t border-[#1A2D4B]">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E] block">
                  Business Email
                </span>
                <span className="text-xs sm:text-sm text-[#E2E8F0] mt-0.5 block font-medium">
                  To be supplied
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E] block">
                  Phone Number
                </span>
                <span className="text-xs sm:text-sm text-[#E2E8F0] mt-0.5 block font-medium">
                  To be supplied
                </span>
              </div>

              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B99A5E] block">
                  Location
                </span>
                <span className="text-xs sm:text-sm text-[#E2E8F0] mt-0.5 block font-medium">
                  To be supplied
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 bg-[#0E203B] border border-[#1A2D4B] rounded p-6 sm:p-8 shadow-xl"
          >
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-5 sm:mb-6">
              Tell us about your goals.
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B99A5E] mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl text-white">Thank You</h4>
                <p className="text-xs sm:text-sm text-[#8E9CAE] max-w-md mx-auto">
                  Your enquiry has been received. Our advisory team will review your
                  objectives and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      placeholder="Your company"
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Business Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Include country code"
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B99A5E] transition-colors"
                    >
                      <option value="">Select industry</option>
                      <option value="Mining">Mining</option>
                      <option value="Technology">Technology</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Psychedelics">Psychedelics</option>
                      <option value="Pharmaceuticals">Pharmaceuticals</option>
                      <option value="Cannabis">Cannabis</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#E2E8F0]">
                      Service of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white focus:outline-none focus:border-[#B99A5E] transition-colors"
                    >
                      <option value="">Select service</option>
                      <option value="Investor Relations">Investor Relations</option>
                      <option value="Capital Markets Advisory">
                        Capital Markets Advisory
                      </option>
                      <option value="Public Relations">Public Relations</option>
                      <option value="Digital & Social Media">
                        Digital & Social Media
                      </option>
                      <option value="Mergers & Acquisitions">
                        Mergers & Acquisitions
                      </option>
                      <option value="Strategic Communications & Global Outreach">
                        Strategic Communications & Global Outreach
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#E2E8F0]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="What would you like to achieve?"
                    className="w-full bg-[#091426] border border-[#1A2D4B] rounded px-4 py-3 text-xs text-white placeholder-[#8E9CAE] focus:outline-none focus:border-[#B99A5E] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#B99A5E] hover:bg-[#A8894E] text-white px-8 py-3.5 rounded text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-[#B99A5E]/15 select-none whitespace-nowrap"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-[#8E9CAE] leading-relaxed pt-2">
                  By submitting this enquiry, you agree to be contacted about
                  your request. Your information will be handled in accordance
                  with our Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

