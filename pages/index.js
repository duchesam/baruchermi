import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Baruch-Ermi LLC | Home">
      <section className="rounded-3xl border bg-white p-8 md:p-12">
        <h1 className="text-3xl font-bold md:text-5xl">Baruch-Ermi LLC</h1>
        <p className="mt-3 text-slate-600">
          Strategic Real Estate Investments • Acquisitions • Value Creation
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Acquisitions", "Identify strong opportunities and act fast with a clear process."],
            ["Deal Structuring", "Smart terms and clean documentation to protect all parties."],
            ["Value Creation", "Execute improvements and strategies that build long-term value."]
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border p-6">
              <div className="font-semibold">{t}</div>
              <div className="mt-2 text-sm text-slate-600">{d}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800" href="/options">
            Explore Options
          </Link>
          <Link className="rounded-xl border px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50" href="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
