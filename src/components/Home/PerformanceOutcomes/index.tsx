"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const metrics = [
  { label: "Qualified Engineers", value: "100+" },
  { label: "Presence Across States", value: "14" },
  { label: "Solar Installation", value: "150+ MW" },
];

const Spend = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const anim = {
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
    transition: { duration: 0.9 },
  };

  return (
    <section className="py-14 overflow-hidden">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5"
      >
        <motion.div
          {...anim}
          className="relative rounded-[28px] xl:rounded-[34px] border border-primary/12 bg-[linear-gradient(132deg,#ffffff_0%,#f4faff_50%,#ffffff_100%)] p-6 md:p-10 xl:p-14 2xl:p-16 shadow-[0_18px_56px_rgba(16,45,71,0.11)]"
        >
          <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-sky_blue/20 blur-3xl"></div>
          <div className="grid grid-cols-12 items-center gap-8">
            <div className="lg:col-span-5 col-span-12">
              <p className="inline-flex rounded-full border border-primary/25 bg-white px-4 py-1.5 text-15 text-primary font-semibold shadow-sm">
                Performance Outcomes
              </p>
              <p className="mt-5 text-primary/80 font-semibold text-20 md:text-24 leading-tight">
                Execution Scale Backed By Proven Field Experience
              </p>
              <h2 className="mt-3 md:text-48 sm:text-36 text-30 leading-tight font-semibold text-midnight_text">
                Built to deliver in
                <span className="text-primary"> complex industries</span>
              </h2>
              <p className="mt-5 text-muted text-18 leading-8 max-w-[95%]">
                From heavy civil works to utility-scale solar, our teams execute
                with focus on safety, time, and quality. We combine engineering
                depth, disciplined planning, and field-ready coordination to
                keep programs on schedule and within control. Our delivery model
                is built to reduce execution risk, improve visibility, and
                create measurable outcomes across complex infrastructure
                environments.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 grid-cols-1 gap-4">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="group relative overflow-hidden rounded-2xl border border-primary/18 bg-[linear-gradient(140deg,#ffffff_0%,#eef8ff_100%)] px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-[0_14px_28px_rgba(47,115,242,0.16)]"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#2f73f2_0%,#46c4ff_100%)]"></div>
                    <p className="text-11 font-semibold tracking-[0.04em] text-primary/70 uppercase ml-2">
                      Metric 0{index + 1}
                    </p>
                    <p className="text-28 font-semibold text-primary mt-1 ml-2">
                      {metric.value}
                    </p>
                    <p className="text-14 text-muted ml-2">{metric.label}</p>
                    <div className="mt-3 ml-2 h-1.5 w-[78%] rounded-full bg-primary/10 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-[linear-gradient(90deg,#2f73f2_0%,#46c4ff_100%)] transition-all duration-300 group-hover:w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/25 to-sky_blue/25 blur-xl"></div>
                <Image
                  src="/images/pillars/renewable_energy.png"
                  alt="Renewable and infrastructure projects"
                  width={760}
                  height={460}
                  className="relative rounded-3xl w-full h-[380px] md:h-[500px] xl:h-[560px] object-cover border border-primary/22 shadow-[0_18px_38px_rgba(16,45,71,0.16)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Spend;
