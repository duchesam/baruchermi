import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";

export default function Terms() {
  return (
    <Layout title="Terms | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">Terms & Conditions</h1>
      <div className="mt-4 space-y-4 text-sm text-slate-700">
        <p>
          By using this site, you agree to use it for lawful purposes. Content may be updated at any time.
        </p>
        <p>
          Contact: <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
          • <a className="hover:underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </p>
      </div>
    </Layout>
  );
}
