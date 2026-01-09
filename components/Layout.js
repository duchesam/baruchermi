import Head from "next/head";
import Link from "next/link";
import { SITE } from "@/lib/site";

const NavItem = ({ href, label }) => (
  <Link className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100" href={href}>
    {label}
  </Link>
);

export default function Layout({ title, description, children }) {
  const t = title || `${SITE.name} | Real Estate`;
  const d = description || "Professional real estate solutions: acquisitions, options, services, and support.";
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content={d} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE.url} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                BE
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">{SITE.name}</div>
                <div className="text-xs text-slate-500 leading-tight">{SITE.domain}</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavItem href="/" label="Home" />
              <NavItem href="/about" label="About" />
              <NavItem href="/options" label="Options" />
              <NavItem href="/services" label="Services" />
              <NavItem href="/contact" label="Contact" />
              <NavItem href="/faq" label="FAQ" />
              <NavItem href="/disclaimer" label="Disclaimer" />
              <NavItem href="/terms" label="Terms" />
            </nav>

            <div className="text-right text-xs text-slate-600">
              <a className="block hover:underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              <a className="block hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
            <div className="flex flex-wrap gap-2">
              <NavItem href="/about" label="About" />
              <NavItem href="/options" label="Options" />
              <NavItem href="/services" label="Services" />
              <NavItem href="/contact" label="Contact" />
              <NavItem href="/faq" label="FAQ" />
              <NavItem href="/disclaimer" label="Disclaimer" />
              <NavItem href="/terms" label="Terms" />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        <footer className="border-t bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
              <div className="flex gap-4">
                <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <a className="hover:underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
