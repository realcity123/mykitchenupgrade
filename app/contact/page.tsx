import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us — Book Your Free Kitchen Consultation",
  description: "Get in touch with MyKitchenUpgrade.ca. Book a free consultation at our Mississauga showroom or request an in-home visit across the GTA.",
  alternates: { canonical: "https://www.mykitchenupgrade.ca/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(180deg,var(--paper),var(--cream))", padding: "74px 0 56px", textAlign: "center", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "16px" }}>Get in Touch</span>
          <h1>Book your free<br /><em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>consultation.</em></h1>
          <p style={{ maxWidth: "520px", margin: "18px auto 0", color: "var(--muted)", fontSize: "1.12rem" }}>
            Showroom visit, in-home appointment, or fill out the form — we&apos;ll reach out within one business day.
          </p>
        </div>
      </section>

      <section style={{ padding: "72px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }} className="contact-responsive">
            {/* Contact info */}
            <div>
              <h3 style={{ marginBottom: "24px" }}>Visit us</h3>
              {[
                { label: "Showroom", value: "Mississauga, ON · By appointment" },
                { label: "Phone", value: "(905) 555-0199", href: "tel:+19055550199" },
                { label: "Email", value: "hello@mykitchenupgrade.ca", href: "mailto:hello@mykitchenupgrade.ca" },
                { label: "Hours", value: "Mon–Fri 9am–6pm · Sat 10am–4pm" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: ".66rem", textTransform: "uppercase", letterSpacing: ".2em", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "4px" }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: "1.05rem", color: "var(--ink)", fontWeight: 500 }}>{item.value}</a>
                    : <div style={{ fontSize: "1.05rem", color: "var(--ink)", fontWeight: 500 }}>{item.value}</div>
                  }
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{
              background: "radial-gradient(900px 360px at 18% -40%, rgba(194,151,74,.18), transparent 60%), linear-gradient(180deg, #211d18, #16130f)",
              borderRadius: "18px", padding: "36px",
              border: "1px solid rgba(220,189,128,.15)",
            }}>
              <h3 style={{ color: "#fff", marginBottom: "6px" }}>Request a Consultation</h3>
              <p style={{ color: "#c9c0b0", fontSize: ".9rem", marginBottom: "24px" }}>We reply within 1 business day · No pressure, no obligation</p>
              <LeadForm sourcePage="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
