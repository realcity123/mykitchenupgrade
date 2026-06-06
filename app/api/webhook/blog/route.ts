import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/*
 * Make.com → POST /api/webhook/blog
 * Headers: x-webhook-secret
 * Payload: { title, slug, content, excerpt, meta_description, published_at, image?, image_alt? }
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-webhook-secret");
  if (secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { title, slug, content, excerpt, meta_description, published_at, image, image_alt } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await getSupabase().from("blog_posts").upsert([
      {
        title, slug, content, excerpt, meta_description,
        image, image_alt,
        published_at: published_at || new Date().toISOString(),
        published: true,
      },
    ], { onConflict: "slug" });

    if (error) throw error;

    // Trigger Vercel redeploy
    const deployHook = process.env.VERCEL_DEPLOY_HOOK_URL;
    if (deployHook) await fetch(deployHook, { method: "POST" });

    return NextResponse.json({ success: true, slug });
  } catch (err: unknown) {
    console.error("Blog webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
