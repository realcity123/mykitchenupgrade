import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Design & Renovation Services GTA",
  description: "From full renovations to custom cabinetry and countertops — explore our kitchen design services for GTA homeowners. Free consultations across Toronto, Mississauga, Brampton.",
  alternates: { canonical: "https://www.mykitchenupgrade.ca/kitchen-design" },
};

const SERVICES = [
  { no: "01", title: "Full Renovation", desc: "A complete, top-to-bottom transformation — layout, cabinetry, counters, lighting and finishes, project-managed start to finish.", from: "From $30,000" },
  { no: "02", title: "Custom Cabinetry", desc: "New or refaced cabinets built to your space and style — soft-close everything, smart storage, and finishes that last.", from: "From $8,000" },
  { no: "03", title: "Countertops & Surfaces", desc: "Quartz, granite and natural marble, templated and installed by our own crews. Seamless seams, perfect overhangs.", from: "From $3,500" },
  { no: "04", title: "Design Consultation", desc: "Not sure where to start? Sit with a designer — in our showroom or your home — and get a clear plan, mood board and quote.", from: "Always free" },
];

const GALLERY = [
  { label: "Full Renovation · Mississauga", caption: "The Marble & Gold Galley", feature: true, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80" },
  { label: "Cabinets · Toronto", caption: "Two-Tone Shaker", img: null },
  { label: "Countertops · Oakville", caption: "Waterfall Quartz Island", img: null },
  { label: "Full Renovation · Brampton", caption: "Open-Concept Family Kitchen", wide: true, img: null },
  { label: "Design · Vaughan", caption: "Matte Black & Brass", img: null },
  { label: "Cabinets · Etobicoke", caption: "Handleless Modern", img: null },
];

const STEPS = [
  { n: "1", title: "We Visit You", desc: "In your home or our showroom, we measure, listen, and understand how you really use your kitchen." },
  { n: "2", title: "Design & Quote", desc: "You'll see a tailored design, finish samples and a clear, itemized quote — with no surprises." },
  { n: "3", title: "We Build It", desc: "Our licensed crews handle everything, keep your home tidy, and update you at every milestone." },
  { n: "4", title: "Love It", desc: "We walk through every detail together, then back it all with a 10-year workmanship warranty." },
];

export default function KitchenDesignPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ background: "linear-gradient(180deg,var(--paper),var(--cream))", padding: "78px 0 56px", textAlign: "center", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "18px" }}>Design &amp; Build · GTA</span>
          <h1 style={{ maxWidth: "880px", margin: "0 auto 18px" }}>
            Kitchens designed around <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>your</em> life.
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--muted)", fontSize: "1.15rem" }}>
            From a single countertop to a full custom renovation — explore what we do, see real GTA projects, and learn exactly how we&apos;ll bring your kitchen to life.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "92px 0" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: "14px" }}>What We Do</span>
            <h2>Four ways to upgrade</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "24px" }} className="svc-grid-responsive">
            {SERVICES.map((s) => (
              <div key={s.no} style={{
                display: "flex", gap: "24px", background: "var(--white)",
                border: "1px solid var(--line)", borderRadius: "18px", padding: "34px 32px",
                boxShadow: "var(--shadow-sm)",
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.6rem", fontWeight: 600, color: "var(--gold)", lineHeight: 1, flex: "0 0 auto", width: "54px" }}>{s.no}</span>
                <div>
                  <h3 style={{ marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ color: "var(--muted)", marginBottom: "14px", fontSize: ".98rem" }}>{s.desc}</p>
                  <span style={{ fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".16em", color: "var(--gold-deep)", fontWeight: 500 }}>{s.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "var(--ink)", padding: "92px 0" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <span className="eyebrow" style={{ color: "var(--gold-light)", display: "inline-block", marginBottom: "14px" }}>Recent Work</span>
            <h2 style={{ color: "#fff" }}>A look at our kitchens</h2>
            <p style={{ color: "#bdb4a4", maxWidth: "560px", margin: "14px auto 0" }}>
              A selection of completed projects across Toronto, Mississauga, Brampton and the GTA.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "200px", gap: "16px" }} className="g-grid-responsive">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className="g-item"
                style={{
                  borderRadius: "14px", overflow: "hidden", position: "relative",
                  gridColumn: item.feature ? "span 2" : item.wide ? "span 2" : undefined,
                  gridRow: item.feature ? "span 2" : undefined,
                }}
              >
                {item.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.img} alt={item.caption} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{
                    width: "100%", height: "100%",
                    background: "repeating-linear-gradient(45deg,#2a2520,#2a2520 13px,#221e1a 13px,#221e1a 26px)",
                    display: "grid", placeItems: "center",
                  }}>
                    <span style={{
                      fontFamily: "ui-monospace,Menlo,monospace", fontSize: ".7rem", letterSpacing: ".1em",
                      color: "#8c7c57", background: "rgba(30,26,22,.9)", padding: "5px 11px",
                      borderRadius: "7px", border: "1px solid rgba(166,124,48,.2)",
                    }}>PROJECT PHOTO</span>
                  </div>
                )}
                <div style={{
                  position: "absolute", left: 0, right: 0, bottom: 0,
                  padding: "18px 18px 14px",
                  background: "linear-gradient(transparent,rgba(15,13,11,.86))",
                  color: "#fff", fontSize: ".82rem", letterSpacing: ".04em",
                }}>
                  <b style={{ display: "block", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 500 }}>{item.caption}</b>
                  <small style={{ color: "var(--gold-light)", textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".68rem" }}>{item.label}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "92px 0", background: "var(--cream)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: "14px" }}>How It Works</span>
            <h2>Four steps to your new kitchen</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "26px" }} className="steps-responsive">
            {STEPS.map((s) => (
              <div key={s.n} style={{ position: "relative", paddingTop: "28px" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "46px", height: "2px", background: "var(--gold)" }} />
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4.6rem", fontWeight: 600, color: "transparent", WebkitTextStroke: "1.4px var(--gold)", lineHeight: .8, marginBottom: "18px" }}>{s.n}</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "10px" }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".96rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "linear-gradient(135deg,#211d18,#14110f)", color: "#f3ece0", textAlign: "center", padding: "84px 0" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: "var(--gold-light)" }}>No pressure. No obligation.</span>
          <h2 style={{ color: "#fff", marginTop: "14px", marginBottom: "14px" }}>
            Let&apos;s design <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>your</em> dream kitchen.
          </h2>
          <p style={{ color: "#c3bbab", maxWidth: "520px", margin: "0 auto 30px" }}>
            Answer four quick questions and book your free consultation — showroom, in-home, or online.
          </p>
          <a href="/#lead" className="btn btn-gold">Book My Free Consultation <span className="arrow">→</span></a>
        </div>
      </section>
    </>
  );
}
