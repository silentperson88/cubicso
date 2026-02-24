"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { companyProfile } from "@/data/companyProfile";

const items = [
  {
    title: "Quality Policy",
    detail: companyProfile.policies.quality,
    tag: "Quality",
  },
  {
    title: "HSE Policy",
    detail: companyProfile.policies.hse,
    tag: "Safety",
  },
  {
    title: "Execution Governance",
    detail:
      "Structured governance checkpoints, transparent reporting, and continuous review practices are used to maintain delivery control.",
    tag: "Governance",
  },
];

const CertificationsCompliance = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14">
      <div ref={ref} className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <motion.div
          initial={{ y: 26, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 26, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] border border-primary/12 bg-white px-6 py-10 md:px-10 md:py-12"
        >
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary/20 bg-[#f4faff] px-4 py-1.5 text-14 font-semibold text-primary">
              Certifications / Compliance
            </p>
            <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
              Policy-led execution standards
            </h2>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 22, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 22, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-primary/12 bg-[linear-gradient(130deg,#ffffff_0%,#f2f9ff_100%)] p-5"
              >
                <span className="inline-flex rounded-full border border-primary/20 bg-white px-3 py-1 text-12 font-semibold text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-22 font-semibold text-midnight_text">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted leading-7">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsCompliance;
