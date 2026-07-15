"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { states } from "@/data/states";

export default function SearchBar() {
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedState) return;

    const citySlug = city.trim().toLowerCase().replace(/\s+/g, "-");
    if (citySlug) {
      router.push(`/attorneys/${selectedState}/${citySlug}`);
    } else {
      router.push(`/attorneys/${selectedState}`);
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto"
    >
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-amber-400 text-sm font-medium backdrop-blur-sm"
        aria-label="Select state"
      >
        <option value="" className="text-gray-800">Select a state...</option>
        {states.map((s) => (
          <option key={s.slug} value={s.slug} className="text-gray-800">
            {s.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City (optional)"
        className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-amber-400 text-sm backdrop-blur-sm"
        aria-label="Enter city"
      />

      <button
        type="submit"
        className="px-8 py-3 bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold rounded-lg transition-colors text-sm uppercase tracking-wide shadow-lg"
      >
        Search
      </button>
    </form>
  );
}
