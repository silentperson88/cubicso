import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import { buildBlogDetailHref } from "@/utils/blogNavigation";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  const { title, coverImage, type, description, excerpt, date, slug } = blog;
  const detailHref = buildBlogDetailHref(slug, {
    id: blog.id,
    slug,
    title,
    description: description || excerpt,
    type,
    coverImage,
    date,
    createdAt: blog.createdAt,
  });
  return (
    <article className="group rounded-2xl border border-primary/15 bg-white p-4 shadow-[0_10px_24px_rgba(47,115,242,0.10)] transition-all hover:-translate-y-1 hover:border-primary/30">
      <Link href={detailHref} aria-label="blog cover" className="block">
        <div className="overflow-hidden rounded-lg shrink-0 mb-4">
          <Image
            src={coverImage!}
            alt="image"
            className="transition group-hover:scale-110"
            width={380}
            height={220}
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
        </div>
      </Link>
      <div>
        <p className="text-14 font-medium text-primary">{type || "Insight"}</p>
        <div className="my-3">
          <Link
            href={detailHref}
            className="text-22 font-medium text-midnight_text dark:text-white group-hover:text-primary"
          >
            {title}
          </Link>
        </div>
        {excerpt && (
          <p
            className="text-15 leading-7 text-muted"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {excerpt}
          </p>
        )}
        <p className="text-17 font-medium text-muted leading-loose mb-0">
          {format(new Date(date), "MMM dd, yyyy")}
        </p>
        <Link
          href={detailHref}
          className="mt-3 inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-14 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Read Insight
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
