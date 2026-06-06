"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      style={{ display: "flex", gap: "12px", maxWidth: "480px", margin: "0 auto" }}
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
    >
      <input
        type="email" placeholder={done ? "Subscribed — thank you!" : "your@email.com"} required={!done}
        disabled={done}
        style={{
          flex: 1, fontFamily: "'Jost', sans-serif", fontSize: "1rem", color: "#fff",
          background: "rgba(255,255,255,.06)", border: "1.5px solid rgba(220,189,128,.25)",
          borderRadius: "11px", padding: "13px 16px", outline: "none",
        }}
      />
      {!done && (
        <button type="submit" className="btn btn-gold" style={{ color: "#231d11" }}>Subscribe</button>
      )}
    </form>
  );
}
