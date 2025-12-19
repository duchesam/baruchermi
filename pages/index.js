import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baruch-Ermi LLC | Real Estate Investment & Acquisitions</title>
        <meta
          name="description"
          content="Baruch-Ermi LLC is a real estate investment company focused on acquisitions, value-add properties, and long-term growth."
        />
        <meta name="robots" content="index,follow" />

        {/* Trust + SEO */}
        <meta name="author" content="Baruch-Ermi LLC" />
        <meta name="contact" content="admin@baruchermi.org | (904) 478-9306" />

        {/* Open Graph */}
        <meta property="og:title" content="Baruch-Ermi LLC" />
        <meta
          property="og:description"
          content="Professional real estate investment and acquisitions company."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barokgroup.org" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Baruch-Ermi LLC
          </h1>

          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Strategic Real Estate Investments • Acquisitions • Value Creation
          </p>

          <p style={{ fontSize: "1rem", opacity: 0.9 }}>
            We specialize in identifying strong real estate opportunities,
            structuring smart deals, and building long-term value for partners
            and communities.
          </p>

          <div style={{ marginTop: "2.5rem", fontSize: "0.95rem" }}>
            <div>📧 admin@baruchermi.org</div>
            <div>📞 (904) 478-9306</div>
          </div>
        </div>
      </main>
    </>
  );
}
