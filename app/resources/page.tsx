import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civil Rights Legal Resources | RightsMatch",
  description:
    "Learn about your civil rights, police misconduct laws, §1983 claims, and how to find the right attorney for your case.",
};

const articles = [
  {
    slug: "what-is-a-1983-claim",
    title: "What Is a §1983 Civil Rights Claim?",
    category: "Know Your Rights",
    excerpt:
      "42 U.S.C. § 1983 is the primary federal law that allows individuals to sue government officials — including police — for civil rights violations. Learn what it covers and how it works.",
    readTime: "5 min read",
  },
  {
    slug: "police-brutality-what-to-do",
    title: "What to Do If You Experience Police Brutality",
    category: "Know Your Rights",
    excerpt:
      "If you've been subjected to excessive force or police misconduct, the steps you take immediately after can significantly impact your ability to seek justice. Here's what to do.",
    readTime: "7 min read",
  },
  {
    slug: "wrongful-arrest-rights",
    title: "Your Rights After a Wrongful Arrest",
    category: "Know Your Rights",
    excerpt:
      "Being arrested for something you didn't do is a traumatic experience. Understanding your rights and legal options after a wrongful arrest is essential to protecting yourself.",
    readTime: "6 min read",
  },
  {
    slug: "fourth-amendment-unlawful-search",
    title: "The Fourth Amendment: Unlawful Searches and Seizures",
    category: "Constitutional Rights",
    excerpt:
      "The Fourth Amendment protects you from unreasonable searches and seizures. Learn when police can legally search you, your home, or your vehicle — and when they cannot.",
    readTime: "8 min read",
  },
  {
    slug: "racial-profiling-legal-options",
    title: "Racial Profiling: Your Legal Options",
    category: "Discrimination",
    excerpt:
      "Racial profiling by law enforcement is both unconstitutional and illegal under federal civil rights law. Find out what constitutes racial profiling and how to build a legal case.",
    readTime: "6 min read",
  },
  {
    slug: "how-to-file-civilian-complaint",
    title: "How to File a Civilian Complaint Against Police",
    category: "Taking Action",
    excerpt:
      "Filing a formal complaint is often one of the first steps in pursuing accountability for police misconduct. Learn how the process works and what to expect.",
    readTime: "5 min read",
  },
  {
    slug: "what-is-qualified-immunity",
    title: "What Is Qualified Immunity and How Does It Affect My Case?",
    category: "Legal Concepts",
    excerpt:
      "Qualified immunity is a legal doctrine that can shield police officers from personal liability. Understanding it is crucial to knowing what compensation you may be able to recover.",
    readTime: "9 min read",
  },
  {
    slug: "contingency-fee-civil-rights",
    title: "How Contingency Fees Work in Civil Rights Cases",
    category: "Working with an Attorney",
    excerpt:
      "Most civil rights attorneys handle cases on contingency — meaning you pay nothing unless they win. Learn how these agreements work and what percentage is typical.",
    readTime: "4 min read",
  },
  {
    slug: "statute-of-limitations",
    title: "Statute of Limitations for Civil Rights Claims",
    category: "Legal Concepts",
    excerpt:
      "Civil rights claims have deadlines. Waiting too long to file can permanently bar your right to seek justice. Learn the time limits that apply to your case.",
    readTime: "5 min read",
  },
];

const categories = [...new Set(articles.map((a) => a.category))];

export default function ResourcesPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#1a1a2e] text-white py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Resources</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Civil Rights Legal Resources
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Understand your rights, learn how civil rights law works, and find out
            what steps to take if your rights have been violated.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button className="bg-[#1a1a2e] text-white rounded-full px-4 py-1.5 text-sm font-medium">
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Placeholder image area */}
              <div className="h-3 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4e]" />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>

                <h2 className="text-base font-bold text-[#1a1a2e] mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <span className="text-sm font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 cursor-pointer">
                  Read Article
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key rights callout */}
        <div className="mt-14 bg-[#1a1a2e] text-white rounded-2xl p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-extrabold mb-3">
              Know Your Rights
            </h2>
            <p className="text-gray-300 mb-6">
              You have constitutional protections against police misconduct.
              The 1st, 4th, and 14th Amendments — along with 42 U.S.C. § 1983 —
              give you the right to hold officers and municipalities accountable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-amber-400 font-bold text-lg mb-1">1st Amendment</div>
                <p className="text-gray-400 text-xs">
                  Freedom of speech, press, religion, assembly, and the right to petition the government
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-amber-400 font-bold text-lg mb-1">4th Amendment</div>
                <p className="text-gray-400 text-xs">
                  Protection from unreasonable searches and seizures; requires probable cause for arrest
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-amber-400 font-bold text-lg mb-1">14th Amendment</div>
                <p className="text-gray-400 text-xs">
                  Equal protection under the law and due process rights applicable to all persons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Find attorney CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Ready to speak with a civil rights attorney about your situation?
          </p>
          <Link
            href="/"
            className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-8 py-3 rounded-xl inline-block transition-colors"
          >
            Find an Attorney Near You
          </Link>
        </div>
      </div>
    </div>
  );
}
