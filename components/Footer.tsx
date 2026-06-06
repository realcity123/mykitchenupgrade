import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#cfc7b8", padding: "72px 0 40px" }}>
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "48px" }}>
        <div>
          <span className="brandmark on-dark" style={{ marginBottom: "22px", alignItems: "flex-start", display: "inline-flex" }}>
            <span className="bm-rule" />
            <span className="bm-word">My<span className="k">Kitchen</span>Upgrade<span className="tld">.CA</span></span>
            <span className="bm-tag">Bespoke Kitchen Design · GTA</span>
          </span>
          <p style={{ fontSize: ".95rem", color: "#a59c8d", lineHeight: 1.7 }}>
            Designing and building dream kitchens across Toronto, Mississauga, Brampton and the Greater Toronto Area. Real ideas, honest quotes, beautiful results.
          </p>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".22em", fontWeight: 500, marginBottom: "18px", margin: "0 0 18px" }}>
            Explore
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { label: "Free Quote", href: "/#lead" },
              { label: "Kitchen Design", href: "/kitchen-design" },
              { label: "Blog & Ideas", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", color: "#b8b0a1", fontSize: ".95rem", padding: "5px 0", transition: "color .25s" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".22em", fontWeight: 500, margin: "0 0 18px" }}>
            Visit / Contact
          </h4>
          <p style={{ fontSize: ".95rem", color: "#a59c8d", lineHeight: 1.7, margin: "0 0 10px" }}>
            Showroom — Mississauga, ON<br />By appointment across the GTA
          </p>
          <a href="tel:+19055550199" style={{ display: "block", color: "#b8b0a1", fontSize: ".95rem", padding: "5px 0" }}>(905) 555-0199</a>
          <a href="mailto:hello@mykitchenupgrade.ca" style={{ display: "block", color: "#b8b0a1", fontSize: ".95rem", padding: "5px 0" }}>hello@mykitchenupgrade.ca</a>
        </div>
      </div>

      <div className="wrap" style={{ borderTop: "1px solid rgba(255,255,255,.1)", marginTop: "48px", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: ".8rem", color: "#857d6f", letterSpacing: ".04em" }}>
        <span>© 2026 <span style={{ color: "var(--gold-light)" }}>MyKitchenUpgrade.ca</span> — All rights reserved.</span>
        <span>Licensed &amp; Insured · Serving the Greater Toronto Area</span>
      </div>
    </footer>
  );
}
