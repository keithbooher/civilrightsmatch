import type { Metadata } from "next";
import Link from "next/link";
import AttorneySignupForm from "@/components/AttorneySignupForm";

export const metadata: Metadata = {
  title: "List Your Practice | RightsMatch",
  description:
    "Civil rights attorneys: claim your free listing or upgrade to a featured placement on RightsMatch. Start receiving qualified leads today.",
};

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    description: "Get discovered by people searching for civil rights attorneys in your area.",
    features: [
      "Attorney profile page",
      "Listed in state & city directories",
      "Specialties & contact info",
      "Lead contact form",
      "Basic placement",
    ],
    cta: "Claim Free Listing",
    highlighted: false,
  },
  {
    name: "Featured",
    price: "$79",
    period: "per month",
    description: "Stand out from the crowd with a premium placement and enhanced profile.",
    features: [
      "Everything in Basic",
      "Gold featured badge",
      "Priority placement in search",
      "Featured on homepage",
      "Priority listing in city pages",
      "Lead priority routing",
      "Cancel anytime",
    ],
    cta: "Get Featured",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$149",
    period: "per month",
    description: "Maximum exposure across multiple cities and practice area pages.",
    features: [
      "Everything in Featured",
      "Multi-city listings",
      "Practice area page placements",
      "Lead notification via SMS",
      "Monthly performance report",
      "Dedicated account manager",
    ],
    cta: "Go Pro",
    highlighted: false,
  },
];

export default function ClaimListingPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-[#1a1a2e] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Grow Your Civil Rights Practice
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with people across your state and city who are actively
            searching for a civil rights attorney right now. List your practice
            for free — or get featured to maximize your visibility.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-amber-400 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center text-[#1a1a2e]">
            <div>
              <div className="text-2xl md:text-3xl font-extrabold">50</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">States Covered</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold">Free</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">Basic Listing</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold">24h</div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wide">Setup Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="featured" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#1a1a2e] mb-3">
              Choose Your Plan
            </h2>
            <p className="text-gray-500">
              Start free. Upgrade when you&apos;re ready for more leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border-2 p-7 flex flex-col shadow-sm ${
                  plan.highlighted
                    ? "border-amber-400 shadow-amber-100 shadow-lg relative"
                    : "border-gray-100"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-[#1a1a2e] text-xs font-bold uppercase tracking-wider rounded-full px-4 py-1.5">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-[#1a1a2e]">{plan.price}</span>
                    {plan.period !== "forever" && (
                      <span className="text-gray-400 text-sm mb-1">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full font-bold py-3 rounded-xl text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-amber-400 hover:bg-amber-300 text-[#1a1a2e]"
                      : "bg-[#1a1a2e] hover:bg-[#2d2d4e] text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works for attorneys */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1a1a2e] text-center mb-12">
            How Listing Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                body: "Fill out your firm name, location, practice areas, bio, and contact information. Takes about 10 minutes.",
              },
              {
                step: "2",
                title: "Go Live",
                body: "Your profile is reviewed and published within 24 hours. You'll appear in state and city search results immediately.",
              },
              {
                step: "3",
                title: "Receive Leads",
                body: "Potential clients send you their contact information and case description through your profile page. You respond directly.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#1a1a2e] text-amber-400 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign-up form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-2 text-center">
              Get Started Today
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Create your free listing in minutes.
            </p>

            <AttorneySignupForm />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is the basic listing really free?",
                a: "Yes. The basic listing is completely free and includes your profile page, state and city directory placement, and a lead contact form. There is no time limit.",
              },
              {
                q: "Who sees my listing?",
                a: "Anyone searching for civil rights attorneys in your state or city on RightsMatch. We optimize each page for Google so your profile can rank in organic search results.",
              },
              {
                q: "What happens when someone contacts me?",
                a: "When a potential client fills out the contact form on your profile, you receive their name, phone number, email address, and a description of their situation directly to your email.",
              },
              {
                q: "Can I cancel my featured listing?",
                a: "Yes. Featured and Pro plans can be cancelled at any time with no penalty. Your listing will revert to the free Basic tier.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1a1a2e] py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Ready to grow your practice?</h2>
        <p className="text-gray-400 text-sm mb-6">
          Join attorneys across America on RightsMatch.
        </p>
        <Link
          href="/claim-listing"
          className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-8 py-3 rounded-xl inline-block transition-colors"
        >
          Start for Free
        </Link>
      </div>
    </div>
  );
}
