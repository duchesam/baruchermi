import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <Layout title="Contact | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="mt-3 text-slate-600">Reach out anytime. We typically respond within 24 hours.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <div className="text-sm font-semibold">Email</div>
          <a className="mt-2 block text-sm text-slate-700 hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
        <div className="rounded-2xl border p-6">
          <div className="text-sm font-semibold">Phone</div>
          <a className="mt-2 block text-sm text-slate-700 hover:underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </div>
      </div>
    </Layout>
  );
}
