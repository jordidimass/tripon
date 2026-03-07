import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

import { AuthControls } from "@/components/auth/auth-controls"
import { HeaderSearch } from "@/components/car/header-search"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 sm:h-[72px] sm:gap-5 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center">
          <Image
            src="/logo.svg"
            alt="Tripon"
            width={140}
            height={42}
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="min-w-0 flex-1">
          <Suspense>
            <HeaderSearch />
          </Suspense>
        </div>

        <div className="flex shrink-0 items-center">
          <AuthControls />
        </div>
      </div>
    </header>
  )
}
