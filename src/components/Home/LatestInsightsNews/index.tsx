"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const insights = [
  {
    title: "Managing Safety and Quality in Heavy Engineering Delivery",
    date: "January 12, 2026",
    image: "/images/blog/blog_1.png",
    excerpt:
      "A practical look at field controls, governance rhythm, and execution checkpoints that reduce delivery risk.",
  },
  {
    title: "Utility-Scale Solar Programs: From Planning to Commissioning",
    date: "December 20, 2025",
    image: "/images/blog/blog_3.png",
    excerpt:
      "How engineering investigations and project controls improve speed, cost predictability, and quality in renewable execution.",
  },
  {
    title: "Execution Recovery Playbook for Delayed Programs",
    date: "November 28, 2025",
    image: "/images/blog/blog_5.png",
    excerpt:
      "Steps to stabilize troubled projects through risk audit, milestone reset, and focused stakeholder alignment.",
  },
];

const LatestInsightsNews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14">
      <div ref={ref} className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] border border-primary/12 bg-white px-6 py-10 md:px-10 md:py-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="inline-flex rounded-full border border-primary/20 bg-[#f4faff] px-4 py-1.5 text-14 font-semibold text-primary">
                Latest Insights / News
              </p>
              <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
                Insights from execution-focused programs
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-[#eef7ff] px-4 py-2 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View All Insights
            </Link>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {insights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 34px rgba(16,45,71,0.14)",
                }}
                className="group rounded-2xl overflow-hidden border border-primary/12 bg-[linear-gradient(140deg,#ffffff_0%,#f5fbff_100%)]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={380}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="text-13 text-primary font-semibold">{item.date}</p>
                  <h3 className="mt-2 text-22 font-semibold text-midnight_text">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted leading-7">{item.excerpt}</p>
                  <Link
                    href="/blog"
                    className="mt-5 inline-flex items-center gap-2 text-primary font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestInsightsNews;
