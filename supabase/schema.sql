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

-- ── QUOTES ─────────────────────────────────────────────────────────────────
create table if not exists quotes (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz default now(),
  project_type   text not null,   -- Full Renovation | Cabinets Only | Countertops Only | Design Consult
  kitchen_size   text,            -- Small (<100 sqft) | Medium (100–150) | Large (150–200) | Open Concept (200+)
  kitchen_layout text,            -- Galley | L-Shape | U-Shape | Island | Peninsula | Open Plan
  finish_level   text,            -- Standard | Premium | Luxury
  timeline       text,            -- ASAP | 1–3 months | 3–6 months | 6–12 months
  budget_range   text,            -- Under $15k | $15k–$30k | $30k–$60k | $60k–$100k | $100k+
  name           text not null,
  phone          text not null,
  email          text not null,
  city           text not null,
  estimate_low   integer,
  estimate_high  integer,
  status         text default 'new',
  notes          text
);

create index if not exists quotes_status_idx     on quotes (status);
create index if not exists quotes_created_at_idx on quotes (created_at desc);

alter table quotes enable row level security;
create policy "Service role full access on quotes" on quotes
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
