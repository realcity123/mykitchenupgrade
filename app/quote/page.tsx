import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Free Kitchen Quote Estimator | MyKitchenUpgrade.ca",
  description: "Get an instant kitchen renovation estimate in 2 minutes. Answer 5 quick questions and receive a personalised price range for your GTA kitchen project.",
  alternates: { canonical: "https://www.mykitchenupgrade.ca/quote" },
};

export default function QuotePage() {
  return (
    <>
      {/* Hero band */}
      <section style={{
        background: "radial-gradient(900px 360px at 18% -40%, rgba(194,151,74,.16), transparent 60%), linear-gradient(180deg,#211d18,#16130f)",
        color: "#f3ece0", borderBottom: "3px solid var(--gold)",
        padding: "52px 0 48px",
      }}>
        <div className="wrap" style={{ maxWidth: "640px" }}>
          <span style={{
            display: "inline-block", marginBottom: "16px",
            fontFamily: "'Jost',sans-serif", fontSize: ".72rem", fontWeight: 500,
            textTransform: "uppercase", letterSpacing: ".26em", color: "var(--gold-light)",
          }}>
            Free · No obligation · 2 minutes
          </span>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "14px" }}>
            Get your kitchen<br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>estimate instantly.</em>
          </h1>
          <p style={{ color: "#c9c0b0", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "480px" }}>
            Answer 5 quick questions and we&apos;ll give you a realistic price range for your project — then a designer will follow up to book your free in-home visit.
          </p>
        </div>
      </section>

      {/* Form card */}
      <section style={{ background: "var(--cream)", padding: "60px 0 80px", minHeight: "60vh" }}>
        <div className="wrap" style={{ maxWidth: "680px" }}>
          {/* Trust strip */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "18px", alignItems: "center",
            marginBottom: "32px", padding: "16px 20px",
            background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "12px",
          }}>
            {[
              "★★★★★  4.9 · 200+ reviews",
              "🔒  No spam, ever",
              "📞  Reply within 1 business day",
            ].map(t => (
              <span key={t} style={{ fontSize: ".8rem", color: "var(--muted)", fontFamily: "'Jost',sans-serif", letterSpacing: ".03em" }}>{t}</span>
            ))}
          </div>

          {/* Card */}
          <div style={{
            background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "20px",
            padding: "clamp(28px,5vw,48px)", boxShadow: "0 4px 32px rgba(28,26,23,.07)",
          }}>
            <QuoteForm />
          </div>

          {/* Footer note */}
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: ".82rem", marginTop: "20px", lineHeight: 1.6 }}>
            By submitting this form you agree to be contacted by a MyKitchenUpgrade.ca designer.
            We never share your information with third parties.
          </p>
        </div>
      </section>
    </>
  );
}
