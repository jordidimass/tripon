"use client";

import { usePathname } from "next/navigation";
import { SearchHero } from "@/components/car/search-hero";

export function GlobalStickySearch() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="pl-14 sm:pl-20">
        <SearchHero />
      </div>
    </div>
  );
}
