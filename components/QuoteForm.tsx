"use client";
import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
type FormData = {
  project_type: string;
  kitchen_size: string;
  kitchen_layout: string;
  finish_level: string;
  timeline: string;
  budget_range: string;
  name: string;
  phone: string;
  email: string;
  city: string;
};

const EMPTY: FormData = {
  project_type: "", kitchen_size: "", kitchen_layout: "",
  finish_level: "", timeline: "", budget_range: "",
  name: "", phone: "", email: "", city: "",
};

// ── Option card ────────────────────────────────────────────────────────────
function OptionCard({
  label, sub, icon, selected, onClick,
}: {
  label: string; sub?: string; icon?: React.ReactNode;
  selected: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start",
        gap: "6px", padding: "18px 20px", borderRadius: "12px", textAlign: "left",
        cursor: "pointer", transition: "all .18s",
        background: selected ? "rgba(194,151,74,.10)" : "var(--white, #fff)",
        border: selected ? "2px solid var(--gold)" : "2px solid var(--line)",
        boxShadow: selected ? "0 0 0 3px rgba(194,151,74,.12)" : "none",
        width: "100%",
      }}
    >
      {icon && <span style={{ fontSize: "1.5rem", marginBottom: "2px" }}>{icon}</span>}
      <span style={{
        fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: ".95rem",
        color: selected ? "var(--gold-deep)" : "var(--ink)",
      }}>{label}</span>
      {sub && <span style={{ fontSize: ".8rem", color: "var(--muted)", lineHeight: 1.4 }}>{sub}</span>}
    </button>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────
function Progress({ step, total }: { step: number; total: number }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: ".78rem", fontFamily: "'Jost',sans-serif", textTransform: "uppercase", letterSpacing: ".14em", color: "var(--muted)" }}>
          Step {step} of {total}
        </span>
        <span style={{ fontSize: ".78rem", fontFamily: "'Jost',sans-serif", color: "var(--gold-deep)", fontWeight: 500 }}>
          {Math.round((step / total) * 100)}% complete
        </span>
      </div>
      <div style={{ height: "4px", background: "var(--line)", borderRadius: "4px", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "4px",
          background: "linear-gradient(90deg, var(--gold-deep), var(--gold-light))",
          width: `${(step / total) * 100}%`,
          transition: "width .35s ease",
        }} />
      </div>
    </div>
  );
}

// ── Result screen ──────────────────────────────────────────────────────────
function ResultScreen({ low, high, name }: { low: number; high: number; name: string }) {
  const fmt = (n: number) => n === 0 ? "Free" : "$" + n.toLocaleString("en-CA");
  const isConsult = low === 0 && high === 0;

  return (
    <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
      {/* Checkmark */}
      <div style={{
        width: "64px", height: "64px", borderRadius: "50%", margin: "0 auto 24px",
        background: "linear-gradient(135deg,var(--cream-2,#efe7d9),rgba(194,151,74,.15))",
        border: "2px solid var(--gold)", display: "grid", placeItems: "center",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold-deep)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <p style={{ fontFamily: "'Jost',sans-serif", fontSize: ".78rem", textTransform: "uppercase", letterSpacing: ".18em", color: "var(--gold-deep)", marginBottom: "10px" }}>
        Your estimate is ready
      </p>
      <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "6px" }}>
        {isConsult ? "Free Consultation" : <>{fmt(low)} – {fmt(high)}</>}
      </h2>
      <p style={{ color: "var(--muted)", fontSize: ".95rem", marginBottom: "32px" }}>
        {isConsult
          ? "Your design consultation is completely free — no obligation."
          : "This is a preliminary range based on your selections. Your exact quote follows after our free in-home visit."}
      </p>

      {/* What happens next */}
      <div style={{
        background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "16px",
        padding: "24px 28px", textAlign: "left", marginBottom: "28px",
      }}>
        <p style={{ fontWeight: 500, marginBottom: "16px", fontSize: ".95rem" }}>What happens next, {name.split(" ")[0]}:</p>
        {[
          { n: "1", text: "We review your quote request — usually within a few hours." },
          { n: "2", text: "A designer calls to confirm details and book your free in-home visit." },
          { n: "3", text: "You receive a detailed, itemized quote with no pressure to proceed." },
        ].map(item => (
          <div key={item.n} style={{ display: "flex", gap: "14px", alignItems: "flex-start", marginBottom: "12px" }}>
            <span style={{
              flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%",
              border: "1px solid var(--gold)", color: "var(--gold-deep)",
              display: "grid", placeItems: "center",
              fontSize: ".78rem", fontFamily: "'Cormorant Garamond',serif", fontWeight: 600,
            }}>{item.n}</span>
            <span style={{ fontSize: ".9rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>{item.text}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: ".84rem", color: "var(--muted)" }}>
        Questions? Call us at{" "}
        <a href="tel:+19055550199" style={{ color: "var(--gold-deep)", fontWeight: 500 }}>(905) 555-0199</a>
      </p>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);

  const TOTAL_STEPS = 5;

  function set(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }));
  }

  function canNext(): boolean {
    switch (step) {
      case 1: return !!data.project_type;
      case 2: return !!data.kitchen_size && !!data.kitchen_layout;
      case 3: return !!data.finish_level;
      case 4: return !!data.timeline && !!data.budget_range;
      case 5: return data.name.trim().length >= 2 && data.phone.replace(/\D/g,"").length >= 10 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && data.city.trim().length >= 2;
      default: return false;
    }
  }

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setResult({ low: json.estimate_low, high: json.estimate_high });
      try {
        const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
        if (g) g("event", "generate_lead", { event_category: "quote", event_label: data.project_type });
      } catch {}
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ── Render result ──────────────────────────────────────────────────────
  if (result) {
    return <ResultScreen low={result.low} high={result.high} name={data.name} />;
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: "10px",
    border: "1.5px solid var(--line)", background: "var(--white,#fff)",
    fontFamily: "'Jost',sans-serif", fontSize: ".95rem", color: "var(--ink)",
    outline: "none", boxSizing: "border-box",
  };

  return (
    <div>
      <Progress step={step} total={TOTAL_STEPS} />

      {/* ── Step 1: Project type ── */}
      {step === 1 && (
        <div>
          <h3 style={{ marginBottom: "6px", fontSize: "1.35rem" }}>What are you looking to do?</h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "24px" }}>Select the option that best describes your project.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { label: "Full Renovation", sub: "Cabinets, counters, flooring & more", icon: "🏗️" },
              { label: "Cabinets Only", sub: "New cabinetry or refacing", icon: "🚪" },
              { label: "Countertops Only", sub: "Quartz, granite or stone surfaces", icon: "🪨" },
              { label: "Design Consult", sub: "Ideas & planning — free of charge", icon: "📐" },
            ].map(o => (
              <OptionCard key={o.label} {...o} selected={data.project_type === o.label} onClick={() => set("project_type", o.label)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: Kitchen details ── */}
      {step === 2 && (
        <div>
          <h3 style={{ marginBottom: "6px", fontSize: "1.35rem" }}>Tell us about your kitchen</h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "24px" }}>Approximate size and layout help us give you a more accurate range.</p>

          <p style={{ fontWeight: 500, fontSize: ".9rem", marginBottom: "10px" }}>Kitchen size</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
            {[
              { label: "Small", sub: "Under 100 sqft" },
              { label: "Medium", sub: "100–150 sqft" },
              { label: "Large", sub: "150–200 sqft" },
              { label: "Open Concept", sub: "200+ sqft" },
            ].map(o => {
              const val = o.label === "Small" ? "Small (<100 sqft)" : o.label === "Medium" ? "Medium (100–150 sqft)" : o.label === "Large" ? "Large (150–200 sqft)" : "Open Concept (200+ sqft)";
              return <OptionCard key={o.label} label={o.label} sub={o.sub} selected={data.kitchen_size === val} onClick={() => set("kitchen_size", val)} />;
            })}
          </div>

          <p style={{ fontWeight: 500, fontSize: ".9rem", marginBottom: "10px" }}>Kitchen layout</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            {["Galley", "L-Shape", "U-Shape", "Island", "Peninsula", "Open Plan"].map(l => (
              <OptionCard key={l} label={l} selected={data.kitchen_layout === l} onClick={() => set("kitchen_layout", l)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 3: Finish level ── */}
      {step === 3 && (
        <div>
          <h3 style={{ marginBottom: "6px", fontSize: "1.35rem" }}>What finish level are you aiming for?</h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "24px" }}>This helps us understand the quality and materials you have in mind.</p>
          <div style={{ display: "grid", gap: "12px" }}>
            {[
              { label: "Standard", sub: "Solid quality, practical materials — great value for money", icon: "✦" },
              { label: "Premium", sub: "Upgraded finishes, soft-close hardware, stone countertops", icon: "✦✦" },
              { label: "Luxury", sub: "Custom cabinetry, imported stone, bespoke hardware & lighting", icon: "✦✦✦" },
            ].map(o => (
              <OptionCard key={o.label} {...o} selected={data.finish_level === o.label} onClick={() => set("finish_level", o.label)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 4: Timeline & budget ── */}
      {step === 4 && (
        <div>
          <h3 style={{ marginBottom: "6px", fontSize: "1.35rem" }}>Timeline & budget</h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "24px" }}>No commitment — this just helps us prioritize your quote.</p>

          <p style={{ fontWeight: 500, fontSize: ".9rem", marginBottom: "10px" }}>When are you looking to start?</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
            {["ASAP", "1–3 months", "3–6 months", "6–12 months"].map(t => (
              <OptionCard key={t} label={t} selected={data.timeline === t} onClick={() => set("timeline", t)} />
            ))}
          </div>

          <p style={{ fontWeight: 500, fontSize: ".9rem", marginBottom: "10px" }}>Approximate budget in mind?</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {["Under $15k", "$15k–$30k", "$30k–$60k", "$60k–$100k", "$100k+", "Not sure yet"].map(b => (
              <OptionCard key={b} label={b} selected={data.budget_range === b} onClick={() => set("budget_range", b)} />
            ))}
          </div>
        </div>
      )}

      {/* ── Step 5: Contact info ── */}
      {step === 5 && (
        <div>
          <h3 style={{ marginBottom: "6px", fontSize: "1.35rem" }}>Where should we send your quote?</h3>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "24px" }}>
            We&apos;ll call you within 1 business day — no spam, no pressure.
          </p>
          <div style={{ display: "grid", gap: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: ".8rem", fontWeight: 500, marginBottom: "6px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)" }}>Full name *</label>
                <input style={inputStyle} placeholder="Jane Smith" value={data.name} onChange={e => set("name", e.target.value)} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: ".8rem", fontWeight: 500, marginBottom: "6px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)" }}>City *</label>
                <input style={inputStyle} placeholder="Mississauga" value={data.city} onChange={e => set("city", e.target.value)} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".8rem", fontWeight: 500, marginBottom: "6px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)" }}>Phone *</label>
              <input style={inputStyle} type="tel" placeholder="(905) 555-0100" value={data.phone} onChange={e => set("phone", e.target.value)} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: ".8rem", fontWeight: 500, marginBottom: "6px", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)" }}>Email *</label>
              <input style={inputStyle} type="email" placeholder="jane@email.com" value={data.email} onChange={e => set("email", e.target.value)} />
            </div>
          </div>

          {error && (
            <p style={{ color: "#c0392b", fontSize: ".85rem", marginTop: "12px", padding: "10px 14px", background: "rgba(192,57,43,.06)", borderRadius: "8px", border: "1px solid rgba(192,57,43,.15)" }}>
              {error}
            </p>
          )}
        </div>
      )}

      {/* ── Navigation ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "32px", gap: "12px" }}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep(s => s - 1)}
            style={{
              padding: "12px 24px", borderRadius: "10px", border: "1.5px solid var(--line)",
              background: "transparent", fontFamily: "'Jost',sans-serif", fontSize: ".9rem",
              fontWeight: 500, color: "var(--ink-soft)", cursor: "pointer",
            }}
          >← Back</button>
        ) : <div />}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={() => setStep(s => s + 1)}
            disabled={!canNext()}
            className="btn btn-gold"
            style={{
              color: "#231d11", opacity: canNext() ? 1 : 0.45,
              cursor: canNext() ? "pointer" : "not-allowed",
            }}
          >
            Continue <span className="arrow">→</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canNext() || loading}
            className="btn btn-ink"
            style={{ opacity: canNext() && !loading ? 1 : 0.5, cursor: canNext() && !loading ? "pointer" : "not-allowed" }}
          >
            {loading ? "Getting your estimate…" : "Get My Estimate →"}
          </button>
        )}
      </div>
    </div>
  );
}
