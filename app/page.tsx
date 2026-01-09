import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="rounded-xl bg-[url('/real-estate.jpg')] bg-cover bg-center p-12 text-white">
        <div className="max-w-xl bg-black/60 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">{SITE.name}</h1>
          <p className="mt-4 text-lg">
            Strategic real estate solutions, acquisitions, and investment opportunities.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/contact" className="rounded bg-white px-4 py-2 text-black font-medium">
              Contact Us
            </Link>
            <Link href="/services" className="rounded border px-4 py-2">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Property Acquisition</h3>
          <p className="mt-2 text-sm text-slate-600">
            Identifying and securing high-value residential and commercial assets.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Investment Strategy</h3>
          <p className="mt-2 text-sm text-slate-600">
            Data-driven analysis for long-term growth and stability.
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold">Consulting</h3>
          <p className="mt-2 text-sm text-slate-600">
            End-to-end advisory services tailored to your goals.
          </p>
        </div>
      </div>
    </section>
  );
}
