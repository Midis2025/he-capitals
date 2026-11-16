"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ServiceEnquiryFormProps {
  defaultService?: string;
}

export const ServiceEnquiryForm: React.FC<ServiceEnquiryFormProps> = ({
  defaultService = "Investor Relations",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: defaultService,
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit enquiry. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: defaultService,
        industry: "",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="requirements-form"
      className="bg-white border border-[#DCE4EF] rounded-xl p-6 sm:p-7 shadow-lg shadow-[#071629]/5 text-[#071629] relative scroll-mt-24"
    >
      {/* Card Header */}
      <div className="mb-5 pb-3 border-b border-[#EEF2F6]">
        <h3 className="font-serif text-2xl sm:text-[26px] text-[#071629] font-normal tracking-tight">
          Discuss Your Requirements
        </h3>
        <p className="text-[13.5px] text-[#536985] pt-1">
          Connect with our capital markets and advisory specialists.
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#FAF8F4] border border-[#C5A15A]/40 rounded-lg p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#C5A15A]/15 text-[#C5A15A] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 stroke-[2]" />
          </div>
          <h4 className="font-serif text-xl text-[#071629]">Enquiry Submitted</h4>
          <p className="text-sm text-[#536985] leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out. A senior member of our team will review your
            requirements and contact you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold tracking-wider uppercase text-[#C5A15A] hover:underline pt-2 cursor-pointer"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-xs sm:text-[13px]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <input
                type="text"
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email Address */}
          <div>
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
            />
          </div>

          {/* Row 3: Telephone Number */}
          <div>
            <input
              type="tel"
              placeholder="Telephone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors"
            />
          </div>

          {/* Row 4: Service Dropdown */}
          <div>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors cursor-pointer"
            >
              <option value="">— Please choose a service —</option>
              <option value="Investor Relations">Investor Relations</option>
              <option value="Public Relations">Public Relations</option>
              <option value="Digital & Social Media">Digital & Social Media</option>
              <option value="Capital Markets Advisory">Capital Market Advisory</option>
              <option value="Mergers & Acquisitions">Mergers & Acquisitions</option>
              <option value="Strategic Communications">Strategic Communications</option>
            </select>
          </div>

          {/* Row 5: Sector Dropdown */}
          <div>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full h-[44px] sm:h-[46px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 text-[14px] sm:text-[14.5px] text-[#071629] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors cursor-pointer"
            >
              <option value="">— Please choose an industry sector —</option>
              <option value="Cannabis">Cannabis</option>
              <option value="Mining">Mining</option>
              <option value="Oil & Gas">Oil & Gas</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Technology">Technology</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Other">Other Sector</option>
            </select>
          </div>

          {/* Row 6: Additional Information */}
          <div>
            <textarea
              rows={5}
              placeholder="Any Additional Information"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full min-h-[120px] bg-[#F8FAFC] border border-[#DCE4EF] rounded-md px-3.5 py-3 text-[14px] sm:text-[14.5px] text-[#071629] placeholder-[#8B9BAE] focus:outline-none focus:border-[#C5A15A] focus:bg-white transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[48px] sm:h-[50px] inline-flex items-center justify-center gap-2 px-6 rounded-md bg-[#C5A15A] hover:bg-[#D4B36D] text-[#071629] font-medium text-[14px] sm:text-[14.5px] tracking-[0.02em] transition-all duration-200 shadow-md shadow-[#071629]/10 hover:shadow-lg cursor-pointer disabled:opacity-70 group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

