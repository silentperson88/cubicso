export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  description: string;
  type: string;
  coverImage: string;
  date: string;
  createdAt?: string;
};

const requiredEnv = ["SUPABASE_URL", "SUPABASE_ANON_KEY"] as const;

function assertSupabaseEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing env: ${missing.join(", ")}`);
  }
}

function getSupabaseHeaders() {
  assertSupabaseEnv();

  const apiKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY!;
  return {
    apikey: apiKey,
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

function baseUrl() {
  assertSupabaseEnv();
  return `${process.env.SUPABASE_URL}/rest/v1/blogs`;
}

function mapRow(row: any): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description || row.excerpt || row.content_md || "",
    type: row.type || "Insight",
    coverImage: row.cover_image_url || "",
    date: row.published_at || row.created_at || new Date().toISOString(),
    createdAt: row.created_at,
  };
}

export async function fetchBlogs(limit?: number, offset?: number): Promise<BlogPost[]> {
  const query = new URLSearchParams({
    select:
      "id,slug,title,description,type,cover_image_url,published_at,created_at",
    order: "published_at.desc",
  });

  if (limit) {
    query.set("limit", String(limit));
  }

  if (typeof offset === "number" && Number.isFinite(offset) && offset >= 0) {
    query.set("offset", String(offset));
  }

  const res = await fetch(`${baseUrl()}?${query.toString()}`, {
    headers: getSupabaseHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase read failed: ${res.status} ${text}`);
  }

  const rows = await res.json();
  return (rows || []).map(mapRow);
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  const query = new URLSearchParams({
    select:
      "id,slug,title,description,type,cover_image_url,published_at,created_at",
    slug: `eq.${slug}`,
    limit: "1",
  });

  const res = await fetch(`${baseUrl()}?${query.toString()}`, {
    headers: getSupabaseHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase read failed: ${res.status} ${text}`);
  }

  const rows = await res.json();
  if (!rows || rows.length === 0) {
    return null;
  }
  return mapRow(rows[0]);
}

type CreateBlogInput = {
  title: string;
  description: string;
  type?: string;
  coverImage: string;
  date?: string;
};

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createBlog(input: CreateBlogInput): Promise<BlogPost> {
  const slug = toSlug(input.title);
  const payload = {
    slug,
    title: input.title,
    description: input.description,
    type: input.type || "Insight",
    cover_image_url: input.coverImage,
    published_at: input.date || new Date().toISOString(),
  };

  const res = await fetch(`${baseUrl()}?select=*`, {
    method: "POST",
    headers: {
      ...getSupabaseHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Supabase create failed: ${res.status} ${text}`);
  }

  const rows = await res.json();
  return mapRow(rows[0]);
}
