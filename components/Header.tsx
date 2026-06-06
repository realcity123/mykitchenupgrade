"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { label: "Kitchen Design", href: "/kitchen-design" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // Home page — logo left, phone right, no nav
  if (path === "/") {
    return (
      <header style={{ background: "var(--paper)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "74px", gap: "20px" }}>
          <span className="brandmark" style={{ flexShrink: 1, minWidth: 0 }}>
            <span className="bm-rule" />
            <span className="bm-word">My<span className="k">Kitchen</span>Upgrade<span className="tld">.CA</span></span>
            <span className="bm-tag hidden sm:block">Bespoke Kitchen Design · GTA</span>
          </span>
          <a
            href="tel:+19055550199"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "var(--ink)", letterSpacing: ".01em", whiteSpace: "nowrap", flexShrink: 0 }}
          >(905) 555-0199</a>
        </div>
      </header>
    );
  }

  return (
    <header style={{ background: "var(--paper)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "74px", gap: "20px" }}>
        {/* Brand */}
        <Link href="/" aria-label="MyKitchenUpgrade.ca home">
          <span className="brandmark">
            <span className="bm-rule" />
            <span className="bm-word">My<span className="k">Kitchen</span>Upgrade<span className="tld">.CA</span></span>
            <span className="bm-tag">Bespoke Kitchen Design · GTA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: ".82rem",
                textTransform: "uppercase",
                letterSpacing: ".16em",
                color: path === n.href ? "var(--gold-deep)" : "var(--ink-soft)",
                position: "relative",
                padding: "4px 0",
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/quote" className="btn btn-gold" style={{ color: "#231d11" }}>
            Free Quote <span className="arrow">→</span>
          </Link>
        </nav>

        {/* Phone (desktop) */}
        <div className="hidden lg:flex items-center gap-2">
          <span style={{ fontSize: ".66rem", textTransform: "uppercase", letterSpacing: ".22em", color: "var(--muted-2)" }}>Call the studio</span>
          <a
            href="tel:+19055550199"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "var(--ink)", letterSpacing: ".01em", whiteSpace: "nowrap" }}
          >(905) 555-0199</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
          style={{ color: "var(--ink)" }}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--line)", background: "var(--paper)", paddingBottom: "16px" }}>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 28px",
                borderBottom: "1px solid var(--line)",
                fontFamily: "'Jost', sans-serif",
                fontSize: ".9rem",
                fontWeight: 500,
                color: path === n.href ? "var(--gold-deep)" : "var(--ink)",
              }}
            >
              {n.label}
            </Link>
          ))}
          <div style={{ padding: "16px 28px 0" }}>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn btn-gold" style={{ color: "#231d11", justifyContent: "center", width: "100%" }}>
              Free Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
