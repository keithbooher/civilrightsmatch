import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RightsMatch — Find a Civil Rights Attorney",
  description:
    "Find experienced civil rights and police misconduct attorneys by state and city. Free consultations available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 antialiased">
        {/* Navigation */}
        <header className="bg-[#1a1a2e] shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="flex items-center gap-2 text-white font-bold text-xl tracking-tight"
              >
                <span className="text-amber-400 text-2xl">⚖</span>
                RightsMatch
              </Link>

              <nav className="hidden sm:flex items-center gap-6">
                <Link
                  href="/attorneys/california"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Browse States
                </Link>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                >
                  Resources
                </Link>
                <Link
                  href="/claim-listing"
                  className="bg-amber-400 hover:bg-amber-300 text-[#1a1a2e] font-bold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  For Attorneys
                </Link>
              </nav>

              {/* Mobile menu */}
              <div className="flex sm:hidden items-center gap-3">
                <Link
                  href="/claim-listing"
                  className="bg-amber-400 text-[#1a1a2e] font-bold px-3 py-1.5 rounded-lg text-xs"
                >
                  For Attorneys
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#1a1a2e] text-gray-400 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
                  <span className="text-amber-400 text-xl">⚖</span>
                  RightsMatch
                </div>
                <p className="text-sm leading-relaxed">
                  Connecting people with civil rights attorneys across America.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  Browse Attorneys
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/attorneys/california" className="hover:text-white transition-colors">California</Link></li>
                  <li><Link href="/attorneys/new-york" className="hover:text-white transition-colors">New York</Link></li>
                  <li><Link href="/attorneys/texas" className="hover:text-white transition-colors">Texas</Link></li>
                  <li><Link href="/attorneys/florida" className="hover:text-white transition-colors">Florida</Link></li>
                  <li><Link href="/attorneys/illinois" className="hover:text-white transition-colors">Illinois</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
                  For Attorneys
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/claim-listing" className="hover:text-white transition-colors">Claim Your Listing</Link></li>
                  <li><Link href="/claim-listing" className="hover:text-white transition-colors">Featured Listings</Link></li>
                  <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 text-xs text-center">
              <p>
                &copy; {new Date().getFullYear()} RightsMatch. This site is for informational purposes only and does not constitute legal advice. Attorney listings do not constitute referrals or endorsements.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
