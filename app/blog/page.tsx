import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog & Kitchen Ideas — GTA Design Guides",
  description: "Honest guides on kitchen renovation costs, materials, cabinet refacing, countertop options and design trends for GTA homeowners.",
  alternates: { canonical: "https://www.mykitchenupgrade.ca/blog" },
};

const PLACEHOLDER_POSTS = [
  { slug: "#", title: "How much does a kitchen renovation really cost in the GTA in 2026?", excerpt: "From a $6k cabinet refresh to a $90k luxury build — here's an honest, line-by-line breakdown of what GTA homeowners are actually spending this year.", cat: "Cost & Budget", read: "8 min", date: "June 2026", featured: true },
  { slug: "#", title: "Quartz vs. granite vs. marble countertops", excerpt: "The real pros, cons and price differences of the three countertops everyone asks about.", cat: "Materials", read: "6 min", date: "May 2026" },
  { slug: "#", title: "Refacing vs. replacing cabinets", excerpt: "How to know which option saves you money — and which one is worth the splurge.", cat: "Cabinets", read: "5 min", date: "May 2026" },
  { slug: "#", title: "7 small-kitchen layouts that feel twice the size", excerpt: "Smart layout moves that make a compact GTA condo kitchen live much larger.", cat: "Layout", read: "7 min", date: "April 2026" },
  { slug: "#", title: "The 2026 finishes we can't stop installing", excerpt: "Warm woods, brushed brass and statement marble — the looks defining kitchens this year.", cat: "Trends", read: "5 min", date: "April 2026" },
  { slug: "#", title: "Financing your kitchen upgrade", excerpt: "What $0-down plans really cost, and how to budget for your renovation with confidence.", cat: "Financing", read: "4 min", date: "March 2026" },
  { slug: "#", title: "Showroom vs. in-home consultation", excerpt: "Two great ways to start your project — here's how to choose the right one for you.", cat: "Getting Started", read: "4 min", date: "March 2026" },
];

export default async function BlogPage() {
  const dbPosts = await getAllPosts();
  const featured = PLACEHOLDER_POSTS[0];
  const gridPosts = PLACEHOLDER_POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg,var(--paper),var(--cream))", padding: "74px 0 50px", textAlign: "center", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "16px" }}>The Journal</span>
          <h1>Ideas for your <em style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>dream</em> kitchen.</h1>
          <p style={{ maxWidth: "560px", margin: "14px auto 0", color: "var(--muted)", fontSize: "1.12rem" }}>
            Honest guides on cost, materials and design — from the team that builds kitchens across the GTA.
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ padding: "78px 0 96px" }}>
        <div className="wrap">
          {/* DB posts (if any) */}
          {dbPosts.length > 0 && (
            <div style={{ marginBottom: "64px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "26px" }} className="posts-responsive">
                {dbPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} style={{
                    display: "flex", flexDirection: "column", background: "var(--white)",
                    border: "1px solid var(--line)", borderRadius: "16px", overflow: "hidden",
                    boxShadow: "var(--shadow-sm)", transition: "transform .35s, box-shadow .35s",
                    color: "inherit",
                  }}>
                    <div style={{ height: "188px", overflow: "hidden" }}>
                      {p.image
                        ? <img src={p.image} alt={p.imageAlt || p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,var(--cream-2),#e4d6bd)", display: "grid", placeItems: "center", fontSize: "2.4rem" }}>🍴</div>
                      }
                    </div>
                    <div style={{ padding: "26px 26px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontSize: "1.5rem", lineHeight: 1.16, marginBottom: "10px" }}>{p.title}</h3>
                      <p style={{ color: "var(--muted)", fontSize: ".94rem", marginBottom: "18px" }}>{p.excerpt}</p>
                      <div style={{ marginTop: "auto", color: "var(--muted-2)", fontSize: ".8rem", letterSpacing: ".04em" }}>
                        {new Date(p.published_at).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Featured (placeholder) */}
          <a href={featured.slug} style={{
            display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 0,
            background: "var(--white)", border: "1px solid var(--line)", borderRadius: "20px",
            overflow: "hidden", boxShadow: "var(--shadow-sm)", marginBottom: "72px",
            transition: "box-shadow .35s, transform .35s", color: "inherit",
          }} className="feature-responsive">
            <div style={{ position: "relative", minHeight: "380px", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80"
                alt="Luxury kitchen renovation"
                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
              />
            </div>
            <div style={{ padding: "48px 46px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                <span style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".16em", color: "#fff", background: "var(--ink)", padding: "5px 11px", borderRadius: "999px" }}>Featured</span>
                <span style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".2em", color: "var(--gold-deep)", fontWeight: 500 }}>{featured.cat}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", marginBottom: "16px", lineHeight: 1.08 }}>{featured.title}</h2>
              <p style={{ color: "var(--muted)", marginBottom: "24px" }}>{featured.excerpt}</p>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "14px", color: "var(--muted)", fontSize: ".86rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: ".5em", color: "var(--gold-deep)", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".14em", fontSize: ".78rem" }}>Read the guide →</span>
                <span>· {featured.read} read · {featured.date}</span>
              </div>
            </div>
          </a>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "30px 26px" }} className="posts-responsive">
            {gridPosts.map((p, i) => (
              <a key={i} href={p.slug} style={{
                display: "flex", flexDirection: "column", background: "var(--white)",
                border: "1px solid var(--line)", borderRadius: "16px", overflow: "hidden",
                boxShadow: "var(--shadow-sm)", transition: "transform .35s, box-shadow .35s", color: "inherit",
              }}>
                <div style={{ height: "188px", background: "repeating-linear-gradient(45deg,#efe7d9,#efe7d9 13px,#e8dcc6 13px,#e8dcc6 26px)" }} />
                <div style={{ padding: "26px 26px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span style={{ fontSize: ".68rem", textTransform: "uppercase", letterSpacing: ".2em", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "12px", display: "block" }}>{p.cat}</span>
                  <h3 style={{ fontSize: "1.5rem", lineHeight: 1.16, marginBottom: "10px" }}>{p.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".94rem", marginBottom: "18px" }}>{p.excerpt}</p>
                  <div style={{ marginTop: "auto", color: "var(--muted-2)", fontSize: ".8rem", letterSpacing: ".04em" }}>{p.read} read · {p.date}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{
            marginTop: "80px", background: "linear-gradient(135deg,#211d18,#14110f)",
            borderRadius: "22px", padding: "56px", textAlign: "center", color: "#f0e9dd",
          }}>
            <span className="eyebrow" style={{ color: "var(--gold-light)" }}>Stay inspired</span>
            <h2 style={{ color: "#fff", marginTop: "12px", marginBottom: "10px" }}>
              Kitchen ideas, <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>straight to your inbox.</em>
            </h2>
            <p style={{ color: "#c3bbab", maxWidth: "480px", margin: "0 auto 28px" }}>
              Design tips, real project breakdowns and seasonal offers — about once a month, never spammy.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
