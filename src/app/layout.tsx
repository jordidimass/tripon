import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import { cn } from "@/lib/utils";
import { GlobalStickySearch } from "@/components/car/global-sticky-search";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tripon",
    template: "%s | Tripon",
  },
  description: "Tripon - Encuentra tu primer carro con confianza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
          anton.variable
        )}
      >
        <div className="relative min-h-dvh">
          <Link
            href="/"
            className="fixed left-4 top-3 z-[60] inline-flex items-center"
            aria-label="Ir al inicio"
          >
            <Image
              src="/logo.svg"
              alt="Tripon"
              width={176}
              height={52}
              className="h-10 w-[176px] sm:h-11"
            />
          </Link>
          <GlobalStickySearch />
          <div className="pt-3">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
