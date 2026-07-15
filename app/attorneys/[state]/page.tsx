import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { states, getStateBySlug } from "@/data/states";
import {
  getAttorneysByState,
  getCitiesByState,
  cityToSlug,
} from "@/data/attorneys";
import AttorneyCard from "@/components/AttorneyCard";

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateObj = getStateBySlug(stateSlug);
  if (!stateObj) return {};
  return {
    title: `Civil Rights Attorneys in ${stateObj.name} | RightsMatch`,
    description: `Find experienced civil rights and police misconduct attorneys in ${stateObj.name}. Free consultations available.`,
  };
}

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;
  const stateObj = getStateBySlug(stateSlug);

  if (!stateObj) notFound();

  const allAttorneys = getAttorneysByState(stateSlug);
  const cities = getCitiesByState(stateSlug);
  const featured = allAttorneys.filter((a) => a.featured);
  const regular = allAttorneys.filter((a) => !a.featured);
  const sorted = [...featured, ...regular];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Attorneys</span>
            <span className="mx-2">/</span>
            <span className="text-white">{stateObj.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Civil Rights Attorneys in {stateObj.name}
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Find experienced civil rights and police misconduct attorneys across{" "}
            {stateObj.name}. Most offer free consultations and work on contingency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Browse by City */}
        {cities.length > 0 && (
          <div className="mb-8 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              Browse by City
            </h2>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/attorneys/${stateSlug}/${cityToSlug(city)}`}
                  className="bg-gray-50 border border-gray-200 hover:bg-[#1a1a2e] hover:text-white hover:border-[#1a1a2e] text-gray-700 rounded-lg px-4 py-1.5 text-sm font-medium transition-all"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            {sorted.length === 0
              ? "No attorneys found"
              : `Showing ${sorted.length} attorney${sorted.length !== 1 ? "s" : ""} in ${stateObj.name}`}
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚖</div>
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              No attorneys listed yet in {stateObj.name}
            </h2>
            <p className="text-gray-500 mb-6">
              Are you a civil rights attorney in {stateObj.name}? Be the first to list
              your practice.
            </p>
            <Link
              href="/claim-listing"
              className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Claim Your Listing
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((attorney) => (
              <AttorneyCard key={attorney.id} attorney={attorney} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 bg-[#1a1a2e] text-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2">
            Attorney in {stateObj.name}?
          </h3>
          <p className="text-gray-300 mb-5 text-sm">
            Get your practice in front of people searching for civil rights
            attorneys in {stateObj.name}.
          </p>
          <Link
            href="/claim-listing"
            className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            List Your Practice
          </Link>
        </div>
      </div>
    </div>
  );
}
