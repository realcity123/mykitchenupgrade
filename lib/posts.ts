import { getSupabase } from "./supabase";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  meta_description?: string;
  published_at: string;
  image?: string;
  imageAlt?: string;
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const { data, error } = await getSupabase()
      .from("blog_posts")
      .select("slug, title, excerpt, meta_description, published_at, image, image_alt")
      .eq("published", true)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return (data ?? []).map((p) => ({ ...p, imageAlt: p.image_alt }));
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const { data, error } = await getSupabase()
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error) return null;
    return { ...data, imageAlt: data.image_alt };
  } catch {
    return null;
  }
}
