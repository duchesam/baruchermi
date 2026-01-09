import Layout from "@/components/Layout";

export default function Services() {
  return (
    <Layout title="Services | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">Services</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {[
          ["Deal Evaluation", "Review numbers, risks, and next steps."],
          ["Offer Preparation", "Professional offer structure and communication."],
          ["Due Diligence Support", "Coordinate checks and confirm key details."],
          ["Closing Coordination", "Keep the process organized through closing."]
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
