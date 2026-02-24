"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { companyProfile } from "@/data/companyProfile";
import { Icon } from "@iconify/react";

const OurMotto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const valueThemes = [
    {
      card: "border-[#0ea5e9]/25 bg-[linear-gradient(130deg,#ffffff_0%,#ecfeff_55%,#f0f9ff_100%)]",
      chip: "bg-[#0ea5e9]/12 text-[#0284c7]",
      arrow: "text-[#0284c7]",
    },
    {
      card: "border-[#6366f1]/25 bg-[linear-gradient(130deg,#ffffff_0%,#eef2ff_55%,#f5f3ff_100%)]",
      chip: "bg-[#6366f1]/12 text-[#4f46e5]",
      arrow: "text-[#4f46e5]",
    },
    {
      card: "border-[#14b8a6]/25 bg-[linear-gradient(130deg,#ffffff_0%,#ecfdf5_55%,#f0fdfa_100%)]",
      chip: "bg-[#14b8a6]/12 text-[#0f766e]",
      arrow: "text-[#0f766e]",
    },
    {
      card: "border-[#f59e0b]/25 bg-[linear-gradient(130deg,#ffffff_0%,#fffbeb_55%,#fef3c7_100%)]",
      chip: "bg-[#f59e0b]/15 text-[#b45309]",
      arrow: "text-[#b45309]",
    },
    {
      card: "border-[#ec4899]/25 bg-[linear-gradient(130deg,#ffffff_0%,#fdf2f8_55%,#fce7f3_100%)]",
      chip: "bg-[#ec4899]/12 text-[#be185d]",
      arrow: "text-[#be185d]",
    },
  ];

  return (
    <section className="py-14 overflow-hidden">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[30px] xl:rounded-[40px] border border-primary/12 bg-[linear-gradient(132deg,#eef7ff_0%,#f5f3ff_34%,#ecfdf5_68%,#ffffff_100%)] px-6 py-10 md:px-10 md:py-12 xl:px-14 2xl:px-18 shadow-[0_16px_44px_rgba(16,45,71,0.10)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(47,115,242,0.14),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(99,102,241,0.12),transparent_36%),radial-gradient(circle_at_82%_82%,rgba(20,184,166,0.14),transparent_38%)]"></div>
          <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-primary/18 blur-3xl"></div>
          <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[#14b8a6]/18 blur-3xl"></div>

          <div className="relative">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-4 py-1.5 text-14 font-semibold text-primary shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Our Motto
            </p>
            <h2 className="mt-4 text-32 sm:text-38 md:text-44 xl:text-48 font-semibold leading-tight text-midnight_text">
              Values That Shape Every Decision,
              <span className="block text-primary mt-1">From Planning To Project Closeout</span>
            </h2>
            <p className="mt-4 text-17 md:text-19 text-muted max-w-3xl mx-auto leading-8">
              Our motto is not a slogan. It is an operating framework that guides
              behavior, engineering judgment, and client engagement throughout the
              delivery lifecycle.
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-16 text-primary/80 font-medium">
              Flow from start to finish: each value strengthens the next.
            </p>
          </div>

          <div className="mt-8 relative">
            <div className="hidden lg:block absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[2px] bg-primary/15"></div>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={inView ? { width: "calc(100% - 5rem)", opacity: 1 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 h-[2px] bg-[linear-gradient(90deg,#0ea5e9_0%,#6366f1_25%,#14b8a6_50%,#f59e0b_75%,#ec4899_100%)]"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {companyProfile.values.map((value, index) => {
                const theme = valueThemes[index % valueThemes.length];
                return (
                  <motion.div
                    key={value}
                    initial={{ y: 28, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
                    whileHover={{ y: -5, boxShadow: "0 14px 28px rgba(16,45,71,0.12)" }}
                    className={`relative rounded-2xl border p-5 text-center transition-shadow ${theme.card}`}
                  >
                    <p className={`inline-flex rounded-full px-3 py-1 text-11 font-semibold tracking-[0.04em] uppercase ${theme.chip}`}>
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-21 font-semibold text-midnight_text">{value}</p>

                    {index < companyProfile.values.length - 1 && (
                      <div className={`hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border border-primary/15 items-center justify-center shadow-sm ${theme.arrow}`}>
                        <Icon icon="solar:alt-arrow-right-bold" width="15" height="15" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurMotto;
