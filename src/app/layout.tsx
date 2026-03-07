import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";

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
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
