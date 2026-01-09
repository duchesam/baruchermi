import Layout from "@/components/Layout";
import { SITE } from "@/lib/site";

export default function Disclaimer() {
  return (
    <Layout title="Disclaimer | Baruch-Ermi LLC">
      <h1 className="text-2xl font-bold">Disclaimer</h1>
      <div className="mt-4 space-y-4 text-sm text-slate-700">
        <p>
          The information on this website is for general informational purposes only and does not constitute
          legal, tax, or financial advice.
        </p>
        <p>
          Any transaction involves risk. Please conduct your own due diligence and consult qualified professionals.
        </p>
        <p>
          Questions: <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </div>
    </Layout>
  );
}
