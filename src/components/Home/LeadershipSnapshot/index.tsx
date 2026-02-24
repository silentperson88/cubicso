"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const leaders = [
  {
    name: "Executive Leadership",
    role: "Strategic Direction",
    image: "/images/search/profile.png",
    summary:
      "Defines long-term growth priorities and ensures delivery decisions align with values, ethics, and client outcomes.",
  },
  {
    name: "Program Leadership",
    role: "Execution Governance",
    image: "/images/search/profile.png",
    summary:
      "Leads milestone control, risk closure, and cross-functional alignment to maintain quality, schedule, and safety.",
  },
  {
    name: "Engineering Leadership",
    role: "Technical Excellence",
    image: "/images/search/profile.png",
    summary:
      "Drives engineering rigor, field readiness, and continuous improvement across heavy and renewable programs.",
  },
];

const LeadershipSnapshot = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14">
      <div ref={ref} className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <motion.div
          initial={{ y: 26, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 26, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] border border-primary/12 bg-[linear-gradient(130deg,#eef8ff_0%,#ffffff_64%)] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1.5 text-14 font-semibold text-primary">
              Leadership
            </p>
            <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
              Leadership that drives execution confidence
            </h2>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ y: 24, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-primary/12 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={54}
                    height={54}
                    className="rounded-full border border-primary/15"
                  />
                  <div>
                    <p className="text-18 font-semibold text-midnight_text">{leader.name}</p>
                    <p className="text-13 text-primary font-medium">{leader.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-muted leading-7">{leader.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSnapshot;
