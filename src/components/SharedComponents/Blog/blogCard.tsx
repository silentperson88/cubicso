import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const getToneClasses = (type?: string) => {
  const value = (type || "").toLowerCase();

  if (value.includes("news")) {
    return {
      card: "border-cyan-500/20 hover:border-cyan-500/35 hover:shadow-[0_16px_34px_rgba(6,182,212,0.20)]",
      overlay: "from-[#0b4b56]/70 via-[#0b4b56]/25",
      badge: "border-cyan-100/55 bg-cyan-200/20 text-cyan-50",
      button: "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500 hover:text-white",
    };
  }

  if (value.includes("project") || value.includes("field")) {
    return {
      card: "border-amber-500/20 hover:border-amber-500/35 hover:shadow-[0_16px_34px_rgba(245,158,11,0.22)]",
      overlay: "from-[#5a3b0b]/72 via-[#5a3b0b]/26",
      badge: "border-amber-100/55 bg-amber-200/20 text-amber-50",
      button: "border-amber-500/25 bg-amber-500/10 text-amber-700 hover:bg-amber-500 hover:text-white",
    };
  }

  if (value.includes("heavy engineering")) {
    return {
      card: "border-slate-500/22 hover:border-slate-500/40 hover:shadow-[0_16px_34px_rgba(51,65,85,0.24)]",
      overlay: "from-[#1f2937]/74 via-[#1f2937]/26",
      badge: "border-slate-100/55 bg-slate-300/22 text-slate-50",
      button: "border-slate-600/30 bg-slate-600/10 text-slate-700 hover:bg-slate-700 hover:text-white",
    };
  }

  if (value.includes("renewable energy")) {
    return {
      card: "border-emerald-500/22 hover:border-emerald-500/40 hover:shadow-[0_16px_34px_rgba(16,185,129,0.22)]",
      overlay: "from-[#065f46]/72 via-[#065f46]/26",
      badge: "border-emerald-100/55 bg-emerald-300/20 text-emerald-50",
      button: "border-emerald-600/28 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-600 hover:text-white",
    };
  }

  if (value.includes("wealth management")) {
    return {
      card: "border-indigo-500/22 hover:border-indigo-500/40 hover:shadow-[0_16px_34px_rgba(99,102,241,0.24)]",
      overlay: "from-[#3730a3]/72 via-[#3730a3]/26",
      badge: "border-indigo-100/55 bg-indigo-300/20 text-indigo-50",
      button: "border-indigo-600/28 bg-indigo-500/10 text-indigo-700 hover:bg-indigo-600 hover:text-white",
    };
  }

  if (value.includes("robotics")) {
    return {
      card: "border-fuchsia-500/22 hover:border-fuchsia-500/40 hover:shadow-[0_16px_34px_rgba(217,70,239,0.24)]",
      overlay: "from-[#86198f]/72 via-[#86198f]/26",
      badge: "border-fuchsia-100/55 bg-fuchsia-300/20 text-fuchsia-50",
      button: "border-fuchsia-600/28 bg-fuchsia-500/10 text-fuchsia-700 hover:bg-fuchsia-600 hover:text-white",
    };
  }

  return {
    card: "border-primary/15 hover:border-primary/30 hover:shadow-[0_16px_34px_rgba(47,115,242,0.18)]",
    overlay: "from-[#0c2f54]/70 via-[#0c2f54]/25",
    badge: "border-white/45 bg-white/20 text-white",
    button: "border-primary/22 bg-primary/8 text-primary hover:bg-primary hover:text-white",
  };
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, type, excerpt, date, slug } = blog;
  const tone = getToneClasses(type);
  return (
    <article className={`group h-full overflow-hidden rounded-2xl border bg-white shadow-[0_12px_30px_rgba(47,115,242,0.12)] transition-all duration-300 hover:-translate-y-1 ${tone.card}`}>
      <Link href={`/blog/${slug}`} aria-label="blog cover" className="block">
        <div className="relative h-[240px] overflow-hidden">
          <Image
            src={coverImage!}
            alt={title || "Blog image"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            width={540}
            height={300}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${tone.overlay} to-transparent`}></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
            <span className={`rounded-full border px-3 py-1 text-13 font-semibold backdrop-blur-sm ${tone.badge}`}>
              {type || "Insight"}
            </span>
            <span className="rounded-full border border-white/45 bg-white/20 px-3 py-1 text-12 font-medium text-white backdrop-blur-sm">
              {format(new Date(date), "MMM dd, yyyy")}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div>
          <Link
            href={`/blog/${slug}`}
            className="text-22 font-semibold leading-8 text-midnight_text transition-colors group-hover:text-primary"
          >
            {title}
          </Link>
        </div>
        {excerpt && <p className="mt-3 text-16 leading-7 text-muted">{excerpt}</p>}
        <div className="mt-5">
          <Link
            href={`/blog/${slug}`}
            className={`inline-flex items-center rounded-full border px-4 py-2 text-14 font-semibold transition-colors ${tone.button}`}
          >
            Read Insight
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
