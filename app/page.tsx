import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Free Kitchen Consultation GTA | MyKitchenUpgrade.ca",
  description:
    "Custom kitchen design and renovation for GTA homeowners. Get a free consultation — showroom, in-home, or online. No pressure, no obligation.",
  alternates: { canonical: "https://www.mykitchenupgrade.ca" },
};

export default function HomePage() {
  return (
    <>
      {/* ===== GET A FREE QUOTE BAR ===== */}
      <section
        id="lead"
        style={{
          position: "relative",
          background: "radial-gradient(900px 360px at 18% -40%, rgba(194,151,74,.18), transparent 60%), linear-gradient(180deg, #211d18, #16130f)",
          color: "#f3ece0",
          borderBottom: "3px solid var(--gold)",
          padding: "30px 0 32px",
        }}
      >
        <div className="wrap">
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "18px", marginBottom: "20px", flexWrap: "wrap" }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.7rem,2.6vw,2.3rem)", fontWeight: 600 }}>
              Get a Free Quote <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>&amp;</span> Consultation
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: ".86rem", color: "#c9c0b0", letterSpacing: ".02em" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 4px rgba(194,151,74,.18)", display: "inline-block" }} />
              We reply within 1 business day · No pressure, no obligation
            </div>
          </div>
          <LeadForm sourcePage="home" />
        </div>
      </section>

      {/* ===== HERO ===== */}
      <section style={{ background: "linear-gradient(180deg,var(--paper),var(--cream))", padding: "70px 0 76px", overflow: "hidden" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "center" }}>
          {/* Copy */}
          <div style={{ position: "relative", zIndex: 2, paddingRight: "18px" }}>
            <span className="eyebrow" style={{ display: "inline-block", marginBottom: "22px" }}>
              Licensed · Insured · 10-Year Warranty
            </span>
            <h1 style={{ marginBottom: "22px" }}>
              Upgrade your kitchen —<br /><em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>beautifully,</em> the right way.
            </h1>
            <p style={{ fontSize: "1.18rem", color: "var(--muted)", maxWidth: "480px", marginBottom: "30px" }}>
              Custom design and full builds for homeowners across Toronto, Mississauga, Brampton &amp; the GTA. Real ideas, honest quotes, results you&apos;ll love.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "26px", flexWrap: "wrap" }}>
              <a href="#lead" className="btn btn-ink">Get My Free Quote <span className="arrow">→</span></a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="stars" style={{ fontSize: "1.05rem" }}>★★★★★</span>
                <small style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.3 }}>
                  <b style={{ color: "var(--ink)", fontWeight: 500 }}>4.9 / 5</b> · 200+ reviews<br />Google &amp; HomeStars
                </small>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div style={{ position: "relative", zIndex: 1, margin: "-34px -40px -34px -78px" }}>
            <div
              className="hero-mask"
              style={{ position: "relative", overflow: "hidden", aspectRatio: "4/4.2" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/kitchen-hero.jpg"
                alt="Luxury cream and gold kitchen with marble backsplash"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{
              position: "absolute", right: "26px", bottom: "36px",
              background: "rgba(255,253,249,.92)", backdropFilter: "blur(6px)",
              border: "1px solid var(--line)", borderRadius: "14px", padding: "15px 20px",
              boxShadow: "var(--shadow)", display: "flex", alignItems: "center", gap: "13px",
            }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.1rem", fontWeight: 600, color: "var(--gold-deep)", lineHeight: 1 }}>200+</span>
              <small style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.35 }}>
                <b style={{ display: "block", color: "var(--ink)", fontWeight: 500, fontSize: ".92rem" }}>Dream kitchens</b>
                completed across the GTA
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONSULTATION YOUR WAY ===== */}
      <section style={{ background: "var(--cream)", padding: "92px 0" }}>
        <div className="wrap" style={{ maxWidth: "740px", textAlign: "center" }}>
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "16px" }}>No pressure. No obligation.</span>
          <h2 style={{ marginBottom: "18px" }}>
            Get a free kitchen<br />consultation — <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>your way.</em>
          </h2>
          <p style={{ fontSize: "1.15rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 30px" }}>
            Real ideas for your dream kitchen, on your terms. Choose how you&apos;d like to start:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 auto 34px", display: "grid", gap: "16px", maxWidth: "460px", textAlign: "left" }}>
            {[
              { n: "1", bold: "Visit our showroom", rest: " — see finishes, cabinetry and countertops in person." },
              { n: "2", bold: "Book an in-home visit", rest: " — we measure, listen, and design around your space." },
              { n: "3", bold: "Fill out the form", rest: " — and we'll come to you with real ideas." },
            ].map((item) => (
              <li key={item.n} style={{ display: "flex", alignItems: "flex-start", gap: "16px", color: "var(--ink-soft)", fontSize: "1.02rem" }}>
                <span style={{
                  flex: "0 0 auto", width: "34px", height: "34px", borderRadius: "50%",
                  border: "1px solid var(--gold)", color: "var(--gold-deep)",
                  display: "grid", placeItems: "center",
                  fontSize: ".9rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600,
                }}>{item.n}</span>
                <span><b style={{ color: "var(--ink)", fontWeight: 500 }}>{item.bold}</b>{item.rest}</span>
              </li>
            ))}
          </ul>
          <a href="#lead" className="btn btn-gold">Book My Free Consultation <span className="arrow">→</span></a>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section style={{ background: "var(--paper)", padding: "96px 0", borderTop: "1px solid var(--line)" }}>
        <div className="wrap">
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "54px" }}>
            <span className="eyebrow">Loved across the GTA</span>
            <h2 style={{ marginTop: "14px" }}>Homeowners who upgraded with us</h2>
          </div>

          {/* Rating bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "30px", flexWrap: "wrap",
            background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "18px",
            padding: "26px 40px", boxShadow: "var(--shadow-sm)", maxWidth: "880px", margin: "0 auto 64px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 600, lineHeight: 1, color: "var(--ink)" }}>4.9</span>
              <div>
                <div className="stars" style={{ fontSize: "1.25rem" }}>★★★★★</div>
                <div style={{ fontSize: ".9rem", color: "var(--muted)", lineHeight: 1.4 }}>Average across<br />200+ verified reviews</div>
              </div>
            </div>
            <div style={{ width: "1px", height: "48px", background: "var(--line)" }} className="hidden sm:block" />
            <div style={{ fontSize: ".82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".14em" }}>
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>Google</b> Reviews · ★ 4.9
            </div>
            <div style={{ width: "1px", height: "48px", background: "var(--line)" }} className="hidden sm:block" />
            <div style={{ fontSize: ".82rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".14em" }}>
              <b style={{ color: "var(--ink)", fontWeight: 500 }}>HomeStars</b> · ★ 4.9 · Best of Award
            </div>
          </div>

          {/* Testimonials */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px", marginBottom: "72px" }} className="tgrid-responsive">
            {[
              { init: "SC", name: "Sarah & Mark C.", loc: "Full Renovation · Mississauga", quote: "They walked us through every finish in the showroom, then designed around our actual space. The result is better than the renderings." },
              { init: "PD", name: "Priya D.", loc: "Countertops · Brampton", quote: "Honestly the no-pressure part is what sold us. Clear quote, no surprises, finished a day early. Our quartz counters are stunning." },
              { init: "JT", name: "James T.", loc: "Cabinets · Toronto", quote: "We only refaced the cabinets but they treated us like a $60k client. Financing made it easy. The kitchen feels brand new." },
            ].map((t) => (
              <div key={t.init} style={{
                background: "var(--white)", border: "1px solid var(--line)", borderRadius: "16px",
                padding: "32px 30px", boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column",
              }}>
                <div className="stars" style={{ marginBottom: "16px" }}>★★★★★</div>
                <blockquote style={{
                  margin: "0 0 22px", fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.42rem", lineHeight: 1.42, color: "var(--ink-soft)",
                }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: "13px", marginTop: "auto" }}>
                  <span style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--cream-2),#e4d6bd)",
                    color: "var(--gold-deep)", display: "grid", placeItems: "center",
                    fontWeight: 600, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem",
                  }}>{t.init}</span>
                  <div>
                    <b style={{ display: "block", fontWeight: 500, fontSize: ".95rem" }}>{t.name}</b>
                    <small style={{ color: "var(--muted)", fontSize: ".82rem" }}>{t.loc}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }} className="badges-responsive">
            {[
              {
                label: "10-Year Warranty", sub: "Workmanship guaranteed in writing",
                icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="var(--gold-deep)" /><path d="M9 12l2 2 4-4" stroke="var(--gold-deep)" /></svg>,
              },
              {
                label: "Flexible Financing", sub: "$0-down plans, fast approval",
                icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="3" y="6" width="18" height="12" rx="2" stroke="var(--gold-deep)" /><circle cx="12" cy="12" r="2.4" stroke="var(--gold-deep)" /></svg>,
              },
              {
                label: "Licensed & Insured", sub: "Fully certified GTA contractors",
                icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2l8 4v5c0 5-3.4 9-8 11-4.6-2-8-6-8-11V6l8-4z" stroke="var(--gold-deep)" /></svg>,
              },
              {
                label: "Free In-Home Visit", sub: "We come to you across the GTA",
                icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M3 10l9-7 9 7" stroke="var(--gold-deep)" /><path d="M5 9v11h14V9" stroke="var(--gold-deep)" /><path d="M9 20v-6h6v6" stroke="var(--gold-deep)" /></svg>,
              },
            ].map((b) => (
              <div key={b.label} style={{
                textAlign: "center", padding: "30px 22px",
                border: "1px solid var(--line)", borderRadius: "16px", background: "var(--cream)",
              }}>
                <span style={{
                  width: "54px", height: "54px", borderRadius: "50%", margin: "0 auto 16px",
                  display: "grid", placeItems: "center",
                  background: "var(--gold-glow)", border: "1px solid rgba(166,124,48,.3)",
                }}>{b.icon}</span>
                <b style={{ display: "block", fontWeight: 500, fontSize: "1rem", marginBottom: "5px" }}>{b.label}</b>
                <small style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.5 }}>{b.sub}</small>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "72px" }}>
            <h2 style={{ marginBottom: "10px" }}>Ready to start your upgrade?</h2>
            <p style={{ color: "var(--muted)", marginBottom: "26px" }}>It takes 30 seconds. Real ideas for your dream kitchen are one form away.</p>
            <a href="#lead" className="btn btn-ink">Start My Free Quote <span className="arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": "https://www.mykitchenupgrade.ca/#business",
        name: "MyKitchenUpgrade.ca",
        url: "https://www.mykitchenupgrade.ca",
        telephone: "+19055550199",
        email: "hello@mykitchenupgrade.ca",
        description: "Custom kitchen design and renovation for GTA homeowners. Free consultations, honest quotes, 10-year workmanship warranty.",
        priceRange: "$$",
        areaServed: ["Toronto", "Mississauga", "Brampton", "Oakville", "Burlington", "Vaughan", "Markham", "Richmond Hill", "Etobicoke", "Scarborough", "North York"],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5", worstRating: "1" },
      }) }} />
    </>
  );
}
