 "use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { companyProfile } from "@/data/companyProfile";

const ProfileSnapshot = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const metrics = [
    { label: "Years", value: companyProfile.yearsInBusiness, accent: "01" },
    { label: "Engineers", value: companyProfile.engineers, accent: "02" },
    { label: "Operational States", value: companyProfile.states, accent: "03" },
    { label: "Solar Installation", value: companyProfile.solarCapacity, accent: "04" },
  ];

  const missionCardThemes = [
    {
      card: "border-[#0ea5e9]/22 bg-[linear-gradient(132deg,#ffffff_0%,#ecfeff_58%,#f0f9ff_100%)] hover:border-[#0284c7]/45",
      stripe: "bg-[linear-gradient(180deg,#0ea5e9_0%,#38bdf8_45%,#2f73f2_100%)]",
      chip: "bg-[#0ea5e9]/12 text-[#0284c7]",
      title: "text-[#0284c7]",
      tag: "Execution",
    },
    {
      card: "border-[#6366f1]/22 bg-[linear-gradient(132deg,#ffffff_0%,#eef2ff_58%,#f5f3ff_100%)] hover:border-[#4f46e5]/45",
      stripe: "bg-[linear-gradient(180deg,#6366f1_0%,#818cf8_45%,#4f46e5_100%)]",
      chip: "bg-[#6366f1]/12 text-[#4f46e5]",
      title: "text-[#4f46e5]",
      tag: "Governance",
    },
    {
      card: "border-[#14b8a6]/22 bg-[linear-gradient(132deg,#ffffff_0%,#ecfdf5_58%,#f0fdfa_100%)] hover:border-[#0f766e]/45",
      stripe: "bg-[linear-gradient(180deg,#14b8a6_0%,#2dd4bf_45%,#0f766e_100%)]",
      chip: "bg-[#14b8a6]/12 text-[#0f766e]",
      title: "text-[#0f766e]",
      tag: "Improvement",
    },
    {
      card: "border-[#f59e0b]/24 bg-[linear-gradient(132deg,#ffffff_0%,#fffbeb_58%,#fef3c7_100%)] hover:border-[#d97706]/45",
      stripe: "bg-[linear-gradient(180deg,#f59e0b_0%,#fbbf24_45%,#d97706_100%)]",
      chip: "bg-[#f59e0b]/15 text-[#b45309]",
      title: "text-[#b45309]",
      tag: "Client Value",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[linear-gradient(160deg,#ecf8ff_0%,#ffffff_74%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(47,115,242,0.10),transparent_36%),radial-gradient(circle_at_88%_82%,rgba(70,196,255,0.11),transparent_38%)]"></div>
      <div className="absolute -top-8 -right-8 h-44 w-44 rounded-full bg-primary/15 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-sky_blue/20 blur-3xl"></div>
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5 relative"
      >
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/95 px-4 py-1.5 text-14 text-primary font-semibold shadow-[0_8px_20px_rgba(47,115,242,0.12)]">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            Cubicso At A Glance
          </p>
          <h2 className="mt-4 text-40 font-semibold text-midnight_text">
            Profile highlights from active project delivery
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ y: 42, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 42, opacity: 0 }}
              transition={{ duration: 0.65, delay: 0.1 + index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 44px rgba(16,45,71,0.14)",
              }}
              className="group rounded-2xl border border-primary/15 bg-white/95 p-6 shadow-sm transition-colors duration-300 hover:border-primary/40"
            >
              <p className="text-12 font-semibold text-primary/70">{metric.accent}</p>
              <p className="text-14 text-muted mt-2">{metric.label}</p>
              <p className="text-34 font-semibold text-midnight_text mt-1">
                {metric.value}
              </p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-primary/8 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#2f73f2_0%,#46c4ff_100%)]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 36, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 36, opacity: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="rounded-2xl border border-primary/15 bg-white/95 p-8 mt-8 shadow-[0_14px_36px_rgba(16,45,71,0.10)]"
        >
          <h3 className="text-26 font-semibold text-midnight_text">
            Mission Priorities
          </h3>
          <p className="mt-2 text-muted">
            The priorities guiding how Cubicso plans, executes, and sustains delivery outcomes.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {companyProfile.missionPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.32 + index * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 14px 30px rgba(16,45,71,0.12)",
                }}
                className={`group relative overflow-hidden rounded-xl border px-4 py-4 transition-colors duration-300 ${
                  missionCardThemes[index % missionCardThemes.length].card
                }`}
              >
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    missionCardThemes[index % missionCardThemes.length].stripe
                  }`}
                ></div>
                <div className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full text-12 font-semibold ${
                      missionCardThemes[index % missionCardThemes.length].chip
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className={`text-11 font-semibold tracking-[0.04em] uppercase ${
                        missionCardThemes[index % missionCardThemes.length].title
                      }`}
                    >
                      {missionCardThemes[index % missionCardThemes.length].tag}
                    </p>
                    <p className="mt-1 text-muted leading-7">{point}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSnapshot;
