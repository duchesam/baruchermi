import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} | Real Estate`,
  description: "Professional real estate solutions, acquisitions, and investment opportunities.",
  metadataBase: new URL(SITE.url),
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/options", label: "Options" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/terms", label: "Terms" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              {SITE.name}
            </Link>

            <nav className="hidden gap-5 md:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="text-sm text-slate-700 hover:text-slate-900"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="text-right text-xs text-slate-600">
              <a className="block hover:underline" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
              <a className="block hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
              </div>
              <div className="flex gap-4">
                <a className="hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <a className="hover:underline" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
