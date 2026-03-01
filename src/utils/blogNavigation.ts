export type BlogNavigationPayload = {
  id?: number;
  slug?: string;
  title?: string;
  description?: string;
  type?: string;
  coverImage?: string;
  date?: string;
  createdAt?: string;
};

const BLOG_PAYLOAD_KEY = "data";

export function buildBlogDetailHref(
  slug?: string,
  payload?: BlogNavigationPayload
): string {
  if (!slug) {
    return "/blog";
  }

  if (!payload) {
    return `/blog/${slug}`;
  }

  const normalized: BlogNavigationPayload = {
    id: payload.id,
    slug,
    title: payload.title || "",
    description: payload.description || "",
    type: payload.type || "Insight",
    coverImage: payload.coverImage || "",
    date: payload.date || new Date().toISOString(),
    createdAt: payload.createdAt,
  };

  return `/blog/${slug}?${BLOG_PAYLOAD_KEY}=${encodeURIComponent(
    JSON.stringify(normalized)
  )}`;
}

export function parseBlogFromSearchParam(
  raw: string | string[] | undefined,
  slug: string
): BlogNavigationPayload | null {
  if (!raw || Array.isArray(raw)) {
    return null;
  }

  try {
    let json = raw;
    try {
      json = decodeURIComponent(raw);
    } catch {
      json = raw;
    }

    const parsed = JSON.parse(json) as BlogNavigationPayload;
    if (!parsed || parsed.slug !== slug) {
      return null;
    }

    if (!parsed.title || !parsed.description) {
      return null;
    }

    return {
      id: parsed.id,
      slug: parsed.slug,
      title: parsed.title,
      description: parsed.description,
      type: parsed.type || "Insight",
      coverImage: parsed.coverImage || "",
      date: parsed.date || new Date().toISOString(),
      createdAt: parsed.createdAt,
    };
  } catch {
    return null;
  }
}
