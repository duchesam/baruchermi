import Layout from "@/components/Layout";

export default function Options() {
  return (
    <Layout title="Options | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">Options</h1>
      <p className="mt-3 text-slate-600">We evaluate the best path based on the property and timeline.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Cash Purchase", "Fast close, simple terms."],
          ["Seller Financing", "Flexible terms that can work for both sides."],
          ["Structured / Creative Offers", "Professional structure to reduce risk and keep deals moving."],
          ["Traditional Financing", "When bank/DSCR lending is the best fit."]
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border p-6">
            <div className="font-semibold">{t}</div>
            <div className="mt-2 text-sm text-slate-600">{d}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
