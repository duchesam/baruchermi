import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>Reach out to us for inquiries or opportunities.</p>

      <div className="space-y-2">
        <p>Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p>Phone: <a className="underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></p>
      </div>
    </section>
  );
}
