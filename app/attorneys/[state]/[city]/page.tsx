import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { states, getStateBySlug } from "@/data/states";
import {
  attorneys,
  getAttorneysByStateAndCity,
  cityToSlug,
  slugToCity,
} from "@/data/attorneys";
import AttorneyCard from "@/components/AttorneyCard";

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  for (const state of states) {
    const stateAttorneys = attorneys.filter((a) => a.state === state.slug);
    const cities = [...new Set(stateAttorneys.map((a) => a.city))];
    for (const city of cities) {
      params.push({ state: state.slug, city: cityToSlug(city) });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const stateObj = getStateBySlug(stateSlug);
  if (!stateObj) return {};
  const cityName = slugToCity(citySlug);
  return {
    title: `Civil Rights Attorneys in ${cityName}, ${stateObj.name} | RightsMatch`,
    description: `Find experienced civil rights attorneys in ${cityName}, ${stateObj.name}. Police misconduct, wrongful arrest, and §1983 specialists.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateObj = getStateBySlug(stateSlug);

  if (!stateObj) notFound();

  const cityName = slugToCity(citySlug);
  const cityAttorneys = getAttorneysByStateAndCity(stateSlug, citySlug);
  const featured = cityAttorneys.filter((a) => a.featured);
  const regular = cityAttorneys.filter((a) => !a.featured);
  const sorted = [...featured, ...regular];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#1a1a2e] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/attorneys/${stateSlug}`} className="hover:text-white">
              {stateObj.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{cityName}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Civil Rights Attorneys in {cityName}, {stateObj.name}
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Find experienced civil rights and police misconduct attorneys in{" "}
            {cityName}. Most offer free consultations and work on contingency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            {sorted.length === 0
              ? "No attorneys found in this city"
              : `Showing ${sorted.length} attorney${sorted.length !== 1 ? "s" : ""} in ${cityName}`}
          </p>
          <Link
            href={`/attorneys/${stateSlug}`}
            className="text-sm text-amber-600 hover:text-amber-700 font-medium"
          >
            &larr; All {stateObj.name} attorneys
          </Link>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚖</div>
            <h2 className="text-xl font-bold text-gray-700 mb-2">
              No attorneys listed in {cityName} yet
            </h2>
            <p className="text-gray-500 mb-4">
              Try browsing all attorneys in {stateObj.name}, or check back later.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/attorneys/${stateSlug}`}
                className="bg-[#1a1a2e] hover:bg-[#2d2d4e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                All {stateObj.name} Attorneys
              </Link>
              <Link
                href="/claim-listing"
                className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Claim Your Listing
              </Link>
            </div>
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
            Civil Rights Attorney in {cityName}?
          </h3>
          <p className="text-gray-300 mb-5 text-sm">
            Connect with people in {cityName} who need your help right now.
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
