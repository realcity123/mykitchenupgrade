"use client";
import { useState } from "react";

interface LeadFormProps {
  sourcePage?: string;
}

export default function LeadForm({ sourcePage = "home" }: LeadFormProps) {
  const [form, setForm] = useState({
    upgrade_type: "",
    budget: "",
    time_frame: "",
    city: "",
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((e) => ({ ...e, [k]: false }));
  };

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (form.name.trim().length < 2) e.name = true;
    if (form.phone.replace(/\D/g, "").length < 10) e.phone = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = true;
    if (form.city.trim().length < 2) e.city = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source_page: sourcePage }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
        ((window as unknown) as { gtag: (...a: unknown[]) => void }).gtag("event", "generate_lead", {
          event_category: "lead",
          source_page: sourcePage,
        });
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    const firstName = form.name.trim().split(" ")[0];
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{
          flex: "0 0 auto", width: "58px", height: "58px", borderRadius: "50%",
          background: "linear-gradient(135deg,var(--gold-light),var(--gold))",
          display: "grid", placeItems: "center",
          boxShadow: "0 14px 30px -12px rgba(166,124,48,.8)",
        }}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#231d11" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <h3 style={{ color: "#fff", fontSize: "1.7rem", marginBottom: "3px" }}>You&apos;re all set, {firstName}!</h3>
          <p style={{ color: "#cfc6b6", margin: 0, fontSize: ".98rem" }}>
            A kitchen specialist will reach out within one business day to book your free consultation.
          </p>
        </div>
      </div>
    );
  }

  const fieldStyle = (hasErr: boolean): React.CSSProperties => ({
    fontFamily: "'Jost', sans-serif",
    fontSize: ".98rem",
    color: "#fff",
    background: "rgba(255,255,255,.05)",
    border: `1.5px solid ${hasErr ? "#e0795c" : "rgba(220,189,128,.22)"}`,
    boxShadow: hasErr ? "0 0 0 3px rgba(224,121,92,.18)" : undefined,
    borderRadius: "11px",
    padding: "13px 15px",
    width: "100%",
    outline: "none",
    transition: "border-color .2s, box-shadow .2s, background .2s",
    WebkitAppearance: "none",
    appearance: "none" as const,
  });

  const selectStyle = (hasErr: boolean): React.CSSProperties => ({
    ...fieldStyle(hasErr),
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23dcbd80' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 15px center",
    paddingRight: "38px",
    cursor: "pointer",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: ".66rem",
    textTransform: "uppercase",
    letterSpacing: ".2em",
    color: "#b6a988",
    fontWeight: 500,
    display: "block",
    marginBottom: "7px",
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px 16px" }} className="qform-grid">
        {/* Upgrade Type */}
        <div>
          <label style={labelStyle}>Upgrade Type</label>
          <select value={form.upgrade_type} onChange={(e) => set("upgrade_type", e.target.value)} style={selectStyle(false)}>
            <option value="" disabled>Select one…</option>
            <option>Full Renovation</option>
            <option>Cabinets Only</option>
            <option>Countertop Only</option>
            <option>Not Sure Yet</option>
          </select>
        </div>
        {/* Budget */}
        <div>
          <label style={labelStyle}>Budget</label>
          <select value={form.budget} onChange={(e) => set("budget", e.target.value)} style={selectStyle(false)}>
            <option value="" disabled>Select range…</option>
            <option>$5k – $15k</option>
            <option>$15k – $30k</option>
            <option>$30k – $60k</option>
            <option>$60k+</option>
          </select>
        </div>
        {/* Time Frame */}
        <div>
          <label style={labelStyle}>Time Frame</label>
          <select value={form.time_frame} onChange={(e) => set("time_frame", e.target.value)} style={selectStyle(false)}>
            <option value="" disabled>Select timing…</option>
            <option>ASAP</option>
            <option>1 – 3 months</option>
            <option>3 – 6 months</option>
            <option>Just Exploring</option>
          </select>
        </div>
        {/* City */}
        <div>
          <label style={labelStyle}>City</label>
          <input
            type="text" placeholder="Mississauga" value={form.city} onChange={(e) => set("city", e.target.value)}
            style={{ ...fieldStyle(!!errors.city), color: "#fff" }}
          />
        </div>
        {/* Name */}
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text" placeholder="Jane Doe" value={form.name} onChange={(e) => set("name", e.target.value)}
            style={{ ...fieldStyle(!!errors.name), color: "#fff" }}
          />
        </div>
        {/* Phone */}
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel" placeholder="(416) 555-0199" value={form.phone} onChange={(e) => set("phone", e.target.value)}
            style={{ ...fieldStyle(!!errors.phone), color: "#fff" }}
          />
        </div>
        {/* Email */}
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email" placeholder="jane@email.com" value={form.email} onChange={(e) => set("email", e.target.value)}
            style={{ ...fieldStyle(!!errors.email), color: "#fff" }}
          />
        </div>
        {/* Submit */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ ...labelStyle, opacity: 0 }} aria-hidden="true">Go</label>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: ".6em",
              fontFamily: "'Jost', sans-serif", fontWeight: 500, textTransform: "uppercase",
              letterSpacing: ".16em", fontSize: ".8rem",
              background: "linear-gradient(135deg,var(--gold-light),var(--gold))",
              color: "#231d11", border: 0, borderRadius: "11px", cursor: "pointer",
              padding: "13px 18px", width: "100%", flex: 1,
              boxShadow: "0 14px 30px -14px rgba(166,124,48,.8)",
              transition: "transform .3s, box-shadow .3s",
              opacity: status === "loading" ? 0.7 : 1,
            }}
          >
            {status === "loading" ? "Sending…" : <>Get My Free Quote <span>→</span></>}
          </button>
        </div>
      </div>
      {status === "error" && (
        <p style={{ marginTop: "14px", fontSize: ".82rem", color: "#f0a78f" }}>
          Something went wrong. Please try again.
        </p>
      )}
      {Object.values(errors).some(Boolean) && (
        <p style={{ marginTop: "14px", fontSize: ".82rem", color: "#f0a78f" }}>
          Please fill in your name, a valid phone number, email and city so we can reach you.
        </p>
      )}

      <style jsx>{`
        @media (max-width: 1000px) {
          .qform-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .qform-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
