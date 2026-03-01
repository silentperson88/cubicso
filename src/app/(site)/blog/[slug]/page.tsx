import { fetchBlogBySlug } from "@/lib/blogApi";
import markdownToHtml from "@/utils/markdownToHtml";
import { parseBlogFromSearchParam } from "@/utils/blogNavigation";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params, searchParams }: any) {
  const data = await params;
  const query = (await searchParams) || {};
  const passedPost = parseBlogFromSearchParam(query?.data, data.slug);
  const post = passedPost || (await fetchBlogBySlug(data.slug));

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      author: authorName,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };

    return metadata;
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
}

export default async function Post({ params, searchParams }: any) {
  const data = await params;
  const query = (await searchParams) || {};
  const passedPost = parseBlogFromSearchParam(query?.data, data.slug);
  const post = passedPost || (await fetchBlogBySlug(data.slug));
  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.description || "");
  const category = post.type || "Insight";
  const postDate = post.date || new Date().toISOString();
  const wordCount = (post.description || "").trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 180));

  return (
    <>
      <section className="relative z-1 overflow-hidden pb-14 pt-40 dark:bg-dark dark:bg-darkmode md:pb-16">
        <div className="absolute inset-0 -z-1 bg-[linear-gradient(135deg,#eef7ff_0%,#e6f1ff_34%,#f4fbff_68%,#ffffff_100%)] dark:bg-search"></div>
        <div className="pointer-events-none absolute -left-20 top-14 h-60 w-60 rounded-full bg-primary/18 blur-3xl"></div>
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-cyan-300/22 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl"></div>

        <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
          <div className="mx-auto max-w-[980px]">
            <div className="inline-flex items-center rounded-full border border-primary/18 bg-white/80 px-4 py-1.5 text-13 font-semibold uppercase tracking-[0.12em] text-primary">
              Field Briefing
            </div>
            <h1 className="pt-6 text-35 font-semibold leading-tight text-midnight_text md:text-50">
              {post.title}
            </h1>
            <p className="mt-4 max-w-[850px] text-18 leading-8 text-muted">
              Structured insight from live execution programs across infrastructure, energy, robotics, and advisory operations.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/22 bg-white px-4 py-2 text-14 font-semibold text-midnight_text shadow-[0_8px_20px_rgba(47,115,242,0.10)]">
                {format(new Date(postDate), "dd MMM yyyy")}
              </span>
              <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-14 font-semibold text-primary">
                {category}
              </span>
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-50 px-4 py-2 text-14 font-semibold text-cyan-700">
                {readTime} min read
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-14 dark:bg-dark dark:bg-darkmode lg:pb-20">
        <div className="container mx-auto px-4 md:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-xl)">
          <div className="mx-auto max-w-[1100px]">
            <div className="-mt-6 rounded-[28px] border border-primary/18 bg-white/95 p-3 shadow-[0_24px_56px_rgba(16,45,71,0.16)] backdrop-blur-sm md:-mt-8 md:p-4">
              <div className="h-[300px] overflow-hidden rounded-3xl md:h-[430px] lg:h-[580px]">
                <Image
                  src={post.coverImage || "/images/blog/blog_1.png"}
                  alt={post.title || "Blog cover image"}
                  width={1170}
                  height={766}
                  quality={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr]">
              <aside className="lg:sticky lg:top-28 lg:h-fit">
                <div className="rounded-2xl border border-primary/15 bg-[linear-gradient(145deg,#ffffff_0%,#f2f8ff_100%)] p-5 shadow-[0_10px_28px_rgba(47,115,242,0.10)]">
                  <p className="text-13 font-semibold uppercase tracking-[0.12em] text-primary">Article Snapshot</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-13 font-semibold uppercase tracking-[0.08em] text-muted">Category</p>
                      <p className="mt-1 text-16 font-semibold text-midnight_text">{category}</p>
                    </div>
                    <div>
                      <p className="text-13 font-semibold uppercase tracking-[0.08em] text-muted">Published</p>
                      <p className="mt-1 text-16 font-semibold text-midnight_text">
                        {format(new Date(postDate), "dd MMM yyyy")}
                      </p>
                    </div>
                    <div>
                      <p className="text-13 font-semibold uppercase tracking-[0.08em] text-muted">Read Time</p>
                      <p className="mt-1 text-16 font-semibold text-midnight_text">{readTime} min</p>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="rounded-[26px] border border-primary/12 bg-white p-6 shadow-[0_16px_40px_rgba(16,45,71,0.10)] md:p-8 lg:p-10">
                <div className="blog-details markdown text-midnight_text">
                  {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  ) : (
                    <p className="text-18 leading-8 text-muted">
                      Description is not available for this article yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
