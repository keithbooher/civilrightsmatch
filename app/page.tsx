import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import StateGrid from "@/components/StateGrid";
import AttorneyCard from "@/components/AttorneyCard";
import { attorneys } from "@/data/attorneys";

const featuredAttorneys = attorneys.filter((a) => a.featured).slice(0, 3);

const steps = [
  {
    number: "01",
    title: "Search by Location",
    description:
      "Select your state and city to find attorneys near you who specialize in civil rights and police misconduct cases.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Compare Attorneys",
    description:
      "Review attorney profiles, specialties, ratings, and see which ones offer free consultations or work on contingency.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Legal Help",
    description:
      "Contact an attorney directly through our platform. Most civil rights attorneys take cases on contingency — you pay nothing unless you win.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#1a1a2e] text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-300 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Free consultations available
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Find a{" "}
            <span className="text-amber-400">Civil Rights</span>{" "}
            Attorney
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            If your civil rights were violated — by police brutality, wrongful
            arrest, or unlawful search — you deserve an attorney who will fight
            for you. Find one today.
          </p>

          <SearchBar />

          <p className="mt-5 text-sm text-gray-400">
            Attorneys in all 50 states &middot; Most work on contingency (no fee unless you win)
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Getting connected to a civil rights attorney is simple and free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#1a1a2e] text-white rounded-xl flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-3xl font-black text-gray-100">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Attorneys */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-2">
                Featured Attorneys
              </h2>
              <p className="text-gray-500">
                Highly rated civil rights attorneys ready to take your case.
              </p>
            </div>
            <Link
              href="/attorneys/california"
              className="hidden sm:block text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              Browse all states &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAttorneys.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">
              Browse by State
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Find civil rights attorneys in every state across the country.
            </p>
          </div>

          <StateGrid />
        </div>
      </section>

      {/* Practice Areas Banner */}
      <section className="bg-gray-50 border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Practice Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Police Brutality",
              "Wrongful Arrest",
              "Excessive Force",
              "§1983 Civil Rights Claims",
              "Racial Profiling",
              "False Imprisonment",
              "Unlawful Search & Seizure",
              "Wrongful Death",
              "First Amendment Violations",
            ].map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-gray-600 rounded-full px-4 py-2 text-sm font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Attorneys */}
      <section className="py-16 md:py-20 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Are You a Civil Rights Attorney?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Reach people who need your expertise. Create a free listing or upgrade
            to a featured placement and start receiving qualified leads today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/claim-listing"
              className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg"
            >
              Claim Your Free Listing
            </Link>
            <Link
              href="/claim-listing#featured"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors"
            >
              Learn About Featured Listings
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Free basic listing &middot; Featured listings from $79/month &middot; Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
