-- MyKitchenUpgrade.ca — Supabase schema
-- Run in the Supabase SQL editor

-- ── LEADS ──────────────────────────────────────────────────────────────────
create table if not exists leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz default now(),
  name         text not null,
  phone        text not null,
  email        text not null,
  upgrade_type text,   -- Full Renovation | Cabinets Only | Countertop Only | Not Sure Yet
  budget       text,   -- $5k–$15k | $15k–$30k | $30k–$60k | $60k+
  time_frame   text,   -- ASAP | 1–3 months | 3–6 months | Just Exploring
  city         text,
  source_page  text,   -- home | kitchen-design | blog/* | contact
  status       text default 'new'  -- new | contacted | quoted | booked | closed | lost
);

create index if not exists leads_status_idx    on leads (status);
create index if not exists leads_created_at_idx on leads (created_at desc);

alter table leads enable row level security;
create policy "Service role full access" on leads
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

-- ── BLOG POSTS ─────────────────────────────────────────────────────────────
create table if not exists blog_posts (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz default now(),
  slug             text unique not null,
  title            text not null,
  content          text,
  excerpt          text,
  meta_description text,
  image            text,
  image_alt        text,
  published_at     timestamptz,
  published        boolean default false
);

create index if not exists blog_posts_slug_idx         on blog_posts (slug);
create index if not exists blog_posts_published_at_idx on blog_posts (published_at desc);

alter table blog_posts enable row level security;
create policy "Public read published posts" on blog_posts
  for select using (published = true);
create policy "Service role full access" on blog_posts
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
