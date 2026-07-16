"use client";

import { useState } from "react";

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export default function AttorneySignupForm({ plan = "Basic" }: { plan?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      plan,
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      firmName: (form.elements.namedItem("firmName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      state: (form.elements.namedItem("state") as HTMLSelectElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      barNumber: (form.elements.namedItem("barNumber") as HTMLInputElement).value,
      yearsInPractice: (form.elements.namedItem("yearsInPractice") as HTMLInputElement).value,
      referralFee: (form.elements.namedItem("referralFee") as HTMLInputElement).value,
      specialties: (form.elements.namedItem("specialties") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at civilrightsmatch@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Application Received!</h3>
        <p className="text-gray-500 text-sm">
          We&apos;ll verify your information and reach out within 24 hours to get your listing live.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First Name</label>
          <input name="firstName" type="text" required className={inputClass} placeholder="Jane" />
        </div>
        <div>
          <label className={labelClass}>Last Name</label>
          <input name="lastName" type="text" required className={inputClass} placeholder="Smith" />
        </div>
      </div>

      {/* Firm */}
      <div>
        <label className={labelClass}>Firm Name</label>
        <input name="firmName" type="text" required className={inputClass} placeholder="Smith Civil Rights Law" />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Email Address</label>
          <input name="email" type="email" required className={inputClass} placeholder="jane@smithlaw.com" />
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input name="phone" type="tel" className={inputClass} placeholder="(555) 000-0000" />
        </div>
      </div>

      {/* Website */}
      <div>
        <label className={labelClass}>Law Firm Website</label>
        <input name="website" type="url" className={inputClass} placeholder="https://smithlawfirm.com" />
      </div>

      {/* State + City */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>State</label>
          <select name="state" required className={`${inputClass} text-gray-700`}>
            <option value="">Select state</option>
            {STATES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input name="city" type="text" required className={inputClass} placeholder="Los Angeles" />
        </div>
      </div>

      {/* Vetting fields */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wide font-semibold">Attorney Verification</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className={labelClass}>State Bar Number</label>
            <input name="barNumber" type="text" className={inputClass} placeholder="e.g. 123456" />
          </div>
          <div>
            <label className={labelClass}>Years in Practice</label>
            <input name="yearsInPractice" type="number" min="0" className={inputClass} placeholder="e.g. 8" />
          </div>
        </div>

        <div>
          <label className={labelClass}>
            Referral Fee %{" "}
            <span className="text-gray-400 font-normal">(we earn a referral fee on cases we send you)</span>
          </label>
          <input
            name="referralFee"
            type="number"
            min="0"
            max="50"
            className={inputClass}
            placeholder="e.g. 25"
          />
        </div>
      </div>

      {/* Specialties */}
      <div>
        <label className={labelClass}>Practice Areas / Specialties</label>
        <textarea
          name="specialties"
          rows={2}
          className={`${inputClass} resize-none`}
          placeholder="e.g. police brutality, wrongful arrest, §1983 civil rights claims"
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#1a1a2e] font-bold py-3 rounded-xl transition-colors"
      >
        {loading ? "Submitting..." : "Create My Free Listing"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        No credit card required. We&apos;ll verify your bar status before publishing.
      </p>
    </form>
  );
}
