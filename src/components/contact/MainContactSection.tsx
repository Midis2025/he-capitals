"use client";

import React, { useState } from "react";
import { MapPin, Phone, Printer, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const MainContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to submit message. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        industry: "",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FB] relative border-b border-[#DFE6EF]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Head Office Details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:border-r lg:border-[#C5A15A]/30 lg:pr-10 xl:pr-14 space-y-6 sm:space-y-7"
          >
            <div>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#C5A15A] uppercase block mb-1.5">
                HEAD OFFICE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#071629] font-normal tracking-tight leading-[1.1]">
                HE Capital Markets
              </h2>
            </div>

            <div className="space-y-5 pt-1 text-sm text-[#334155]">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-white border border-[#DFE6EF] flex items-center justify-center shrink-0 text-[#C5A15A] shadow-xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 leading-relaxed text-[#1E293B]">
                  <p className="font-medium text-[#071629]">News Building,</p>
                  <p>3 London Bridge Street,</p>
                  <p>London, SE1 9SG</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-white border border-[#DFE6EF] flex items-center justify-center shrink-0 text-[#C5A15A] shadow-xs mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span className="font-medium text-[#071629]">Tel: </span>
                  <a
                    href="tel:+4402070960125"
                    className="hover:text-[#C5A15A] transition-colors text-[#334155]"
                  >
                    (+44) 0207 096 0125
                  </a>
                </div>
              </div>

              {/* Fax */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-white border border-[#DFE6EF] flex items-center justify-center shrink-0 text-[#C5A15A] shadow-xs mt-0.5">
                  <Printer className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span className="font-medium text-[#071629]">Fax: </span>
                  <a
                    href="tel:+4402033001647"
                    className="hover:text-[#C5A15A] transition-colors text-[#334155]"
                  >
                    (+44) 0203 300 1647
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-white border border-[#DFE6EF] flex items-center justify-center shrink-0 text-[#C5A15A] shadow-xs mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="leading-relaxed">
                  <span className="font-medium text-[#071629]">Email: </span>
                  <a
                    href="mailto:info@hecapitalmarkets.com"
                    className="hover:text-[#C5A15A] transition-colors font-medium text-[#071629]"
                  >
                    info@hecapitalmarkets.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Send Us a Message Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#DFE6EF] shadow-[0_10px_35px_rgba(7,22,41,0.06)] p-6 sm:p-8 lg:p-9">
              <h3 className="font-serif text-2xl sm:text-[26px] text-[#071629] font-normal mb-5">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#C5A15A] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#071629]">
                    Thank You
                  </h4>
                  <p className="text-sm text-[#526377] max-w-md mx-auto leading-relaxed">
                    Your enquiry has been received. Our advisory team will review
                    your message and reach out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-wider text-[#C5A15A] font-semibold pt-2 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-md">
                      {errorMsg}
                    </div>
                  )}

                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Telephone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Telephone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Two Dropdown Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#526377] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="">— Please choose an option —</option>
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
                        <option value="Strategic Communications">
                          Strategic Communications
                        </option>
                      </select>
                    </div>

                    <div>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#526377] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="">— Please choose an option —</option>
                        <option value="Mining">Mining</option>
                        <option value="Technology">Technology</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Psychedelics">Psychedelics</option>
                        <option value="Pharmaceuticals">Pharmaceuticals</option>
                        <option value="Cannabis">Cannabis</option>
                        <option value="Other">Other Sector</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Any Additional Information Textarea */}
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Any Additional Information"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#F8FAFC] border border-[#DFE6EF] rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 h-[46px] px-7 text-xs sm:text-[13px] font-semibold tracking-wider text-white bg-[#B99A5E] hover:bg-[#C8A96E] disabled:opacity-60 rounded-md transition-all duration-200 shadow-md shadow-[#B99A5E]/20 cursor-pointer select-none"
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "Submit Message"}
                      </span>
                      <ArrowRight className="w-4 h-4 font-bold" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
