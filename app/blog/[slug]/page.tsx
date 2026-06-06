import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.meta_description || post.excerpt,
    alternates: { canonical: `https://www.mykitchenupgrade.ca/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg,var(--paper),var(--cream))", padding: "72px 0 48px", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: "780px" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: ".4em", fontSize: ".82rem", textTransform: "uppercase", letterSpacing: ".14em", color: "var(--gold-deep)", fontWeight: 500, marginBottom: "28px" }}>
            ← Back to Blog
          </Link>
          <h1 style={{ marginBottom: "18px", lineHeight: 1.08 }}>{post.title}</h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
            {new Date(post.published_at).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <article style={{ padding: "64px 0 96px" }}>
        <div className="wrap" style={{ maxWidth: "780px" }}>
          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image} alt={post.imageAlt || post.title}
              style={{ width: "100%", borderRadius: "16px", marginBottom: "48px", boxShadow: "var(--shadow)" }}
            />
          )}
          {post.content ? (
            <div
              className="prose prose-lg"
              style={{ fontFamily: "'Jost', sans-serif", color: "var(--ink-soft)", lineHeight: 1.8 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p style={{ color: "var(--muted)", fontSize: "1.1rem" }}>{post.excerpt}</p>
          )}

          {/* CTA */}
          <div style={{
            marginTop: "64px", padding: "40px 44px",
            background: "linear-gradient(135deg,#211d18,#14110f)",
            borderRadius: "18px", textAlign: "center",
          }}>
            <h3 style={{ color: "#fff", marginBottom: "10px" }}>Ready to upgrade your kitchen?</h3>
            <p style={{ color: "#c3bbab", marginBottom: "22px" }}>Book your free consultation — no pressure, no obligation.</p>
            <Link href="/#lead" className="btn btn-gold" style={{ color: "#231d11" }}>Get My Free Quote <span className="arrow">→</span></Link>
          </div>
        </div>
      </article>
    </>
  );
}
