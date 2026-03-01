"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BlogCard from "@/components/SharedComponents/Blog/blogCard";
import { Blog } from "@/types/blog";

const PAGE_SIZE = 50;

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const fetchingRef = useRef(false);

  const loadPage = useCallback(async (startOffset: number) => {
    if (fetchingRef.current) {
      return;
    }

    fetchingRef.current = true;
    const isInitial = startOffset === 0;

    if (isInitial) {
      setLoadingInitial(true);
    } else {
      setLoadingMore(true);
    }

    try {
      const res = await fetch(`/api/blogs?limit=${PAGE_SIZE}&offset=${startOffset}`, {
        cache: "no-store",
      });
      const data = await res.json();
      const nextPosts = Array.isArray(data?.blogs) ? data.blogs : [];

      setPosts((prev) => (isInitial ? nextPosts : [...prev, ...nextPosts]));
      setOffset(startOffset + nextPosts.length);
      setHasMore(nextPosts.length === PAGE_SIZE);
    } catch (_error) {
      if (isInitial) {
        setPosts([]);
      }
      setHasMore(false);
    } finally {
      if (isInitial) {
        setLoadingInitial(false);
      } else {
        setLoadingMore(false);
      }
      fetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    loadPage(0);
  }, [loadPage]);

  useEffect(() => {
    if (!hasMore) {
      return;
    }

    const target = sentinelRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fetchingRef.current) {
          loadPage(offset);
        }
      },
      {
        rootMargin: "600px 0px",
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMore, offset, loadPage]);

  return (
    <section
      className="relative flex flex-wrap justify-center overflow-hidden pt-10 md:pt-14 lg:pb-24 pb-10"
      id="blog"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,#e7f2ff_0%,#eef7ff_34%,#eaf9ff_68%,#f6fbff_100%)]"></div>
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-primary/16 blur-3xl"></div>
      <div className="pointer-events-none absolute right-[18%] top-24 h-64 w-64 rounded-full bg-amber-300/16 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-4 md:px-6">
        <div className="rounded-[30px] border border-primary/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.90)_0%,rgba(248,252,255,0.82)_100%)] p-6 shadow-[0_16px_40px_rgba(47,115,242,0.14)] backdrop-blur-sm md:p-8 lg:p-10 xl:p-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10">
            <div>
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-13 font-semibold uppercase tracking-[0.12em] text-primary">
                Blog / Insights
              </p>
              <h2 className="mt-3 text-35 font-semibold text-midnight_text md:text-40">
                Latest insights from field execution and delivery programs
              </h2>
              <p className="mt-3 max-w-[900px] text-17 leading-8 text-muted">
                Analysis, lessons learned, and practical frameworks across heavy engineering,
                renewable energy, wealth management, and robotics initiatives.
              </p>
            </div>
            <span className="rounded-full border border-primary/20 bg-white px-4 py-2 text-14 font-semibold text-primary">
              {loadingInitial ? "Loading..." : `${posts.length} Loaded`}
            </span>
          </div>

          <div className="grid grid-cols-12 gap-7 lg:gap-8">
            {posts.map((blog, i) => (
              <div key={blog.slug || i} className="w-full lg:col-span-4 md:col-span-6 col-span-12">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          <div ref={sentinelRef} className="mt-10 flex justify-center">
            {loadingMore && (
              <span className="rounded-full border border-primary/25 bg-white px-4 py-2 text-14 font-semibold text-primary">
                Loading more articles...
              </span>
            )}
            {!hasMore && posts.length > 0 && (
              <span className="text-14 font-medium text-muted">You have reached the end of the list.</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
