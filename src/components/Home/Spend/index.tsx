"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const metrics = [
  { label: "Delivery Acceleration", value: "3.2x" },
  { label: "Operational Visibility", value: "92%" },
  { label: "Program Reliability", value: "99.4%" },
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
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div
          {...anim}
          className="relative rounded-3xl border border-primary/10 bg-white p-8 md:p-12 shadow-[0_16px_50px_rgba(16,45,71,0.09)]"
        >
          <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="grid grid-cols-12 items-center gap-8">
            <div className="lg:col-span-5 col-span-12">
              <p className="inline-flex rounded-full border border-primary/20 bg-[#F3FAFF] px-3 py-1 text-14 text-primary font-medium">
                Performance Outcomes
              </p>
              <h2 className="mt-4 md:text-38 sm:text-30 text-24 font-semibold text-midnight_text">
                Built to deliver in
                <span className="text-primary"> complex industries</span>
              </h2>
              <p className="mt-4 text-muted text-17">
                From Heavy Engineering to Renewable Energy, our delivery model
                translates strategy into measurable execution.
              </p>
              <div className="mt-8 grid sm:grid-cols-3 grid-cols-1 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-primary/15 bg-[#F9FCFF] px-4 py-4"
                  >
                    <p className="text-26 font-semibold text-primary">
                      {metric.value}
                    </p>
                    <p className="text-14 text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-primary/20 to-sky_blue/20 blur-xl"></div>
                <Image
                  src="/images/pillars/robotics.png"
                  alt="Robotics and Industry"
                  width={760}
                  height={460}
                  className="relative rounded-3xl w-full h-[340px] md:h-[420px] object-cover border border-primary/20"
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
