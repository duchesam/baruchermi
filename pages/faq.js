import Layout from "@/components/Layout";

export default function FAQ() {
  return (
    <Layout title="FAQ | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">FAQ</h1>

      <div className="mt-6 space-y-4">
        {[
          ["What areas do you work in?", "We can work with clients across multiple markets depending on the deal."],
          ["Do you support seller financing?", "Yes. We help keep terms and documentation clear and professional."],
          ["How fast can you respond?", "Typically same day or within 24 hours."]
        ].map(([q, a]) => (
          <div key={q} className="rounded-2xl border p-6">
            <div className="font-semibold">{q}</div>
            <div className="mt-2 text-sm text-slate-600">{a}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
