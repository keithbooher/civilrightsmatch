import Link from "next/link";
import { states } from "@/data/states";

export default function StateGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {states.map((state) => (
        <Link
          key={state.slug}
          href={`/attorneys/${state.slug}`}
          className="group bg-white border border-gray-200 rounded-lg px-3 py-3 text-center text-sm font-medium text-gray-700 hover:bg-[#1a1a2e] hover:text-white hover:border-[#1a1a2e] transition-all shadow-sm"
        >
          {state.name}
        </Link>
      ))}
    </div>
  );
}
