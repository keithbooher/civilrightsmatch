import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { attorneys, getAttorneyBySlug } from "@/data/attorneys";
import LeadForm from "@/components/LeadForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return attorneys.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);
  if (!attorney) return {};
  return {
    title: `${attorney.name} — ${attorney.firm} | RightsMatch`,
    description: `${attorney.name} is a civil rights attorney at ${attorney.firm} in ${attorney.city}, ${attorney.stateDisplay}. Specializing in ${attorney.specialties.slice(0, 3).join(", ")}.`,
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {half && (
        <svg key="half" className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default async function AttorneyProfilePage({ params }: Props) {
  const { slug } = await params;
  const attorney = getAttorneyBySlug(slug);

  if (!attorney) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/attorneys/${attorney.state}`} className="hover:text-white">
              {attorney.stateDisplay}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{attorney.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar placeholder */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shrink-0">
              {attorney.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-extrabold">{attorney.name}</h1>
                {attorney.featured && (
                  <span className="bg-amber-400 text-[#1a1a2e] text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-lg mb-1">{attorney.firm}</p>
              <p className="text-gray-400 text-sm flex items-center gap-1.5 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {attorney.city}, {attorney.stateDisplay}
              </p>

              <div className="flex items-center gap-3">
                <StarRating rating={attorney.rating} />
                <span className="text-white font-bold">{attorney.rating.toFixed(1)}</span>
                <span className="text-gray-400 text-sm">({attorney.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick info badges */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <div className="flex flex-wrap gap-3">
                {attorney.freeConsultation && (
                  <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-2.5">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm">Free Consultation</p>
                      <p className="text-xs text-green-600">No cost to get started</p>
                    </div>
                  </div>
                )}
                {attorney.contingency && (
                  <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 rounded-lg px-4 py-2.5">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm">Contingency Fee</p>
                      <p className="text-xs text-purple-600">No fee unless you win</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">About {attorney.name}</h2>
              <p className="text-gray-600 leading-relaxed">{attorney.bio}</p>
            </div>

            {/* Specialties */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Practice Areas</h2>
              <div className="flex flex-wrap gap-2">
                {attorney.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-blue-50 border border-blue-100 text-blue-700 rounded-lg px-4 py-2 text-sm font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-4">Contact Information</h2>
              <div className="space-y-3">
                <a
                  href={`tel:${attorney.phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#1a1a2e] group"
                >
                  <div className="w-9 h-9 bg-gray-100 group-hover:bg-[#1a1a2e] group-hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">{attorney.phone}</span>
                </a>
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#1a1a2e] group"
                >
                  <div className="w-9 h-9 bg-gray-100 group-hover:bg-[#1a1a2e] group-hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">{attorney.email}</span>
                </a>
                <a
                  href={attorney.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#1a1a2e] group"
                >
                  <div className="w-9 h-9 bg-gray-100 group-hover:bg-[#1a1a2e] group-hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="font-medium">{attorney.website.replace("https://", "")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar: Lead form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">
                Contact {attorney.name.split(" ")[0]}
              </h2>
              <p className="text-sm text-gray-500 mb-5">
                Send a message and get a response within 1 business day.
              </p>
              <LeadForm
                attorneyName={attorney.name}
                attorneyEmail={attorney.email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
