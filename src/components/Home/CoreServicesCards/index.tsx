"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PaymentImage } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Payment = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = (index: number) => ({
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 + index * 0.4 },
  });

  const sectorTags = [
    "Heavy Engineering",
    "Renewable Energy",
    "Wealth Management",
    "Robotics",
  ];

  const formatTitle = (value: string) =>
    value
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section className="py-16">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5"
      >
        <motion.div {...TopAnimation} className="text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-[linear-gradient(120deg,#ffffff_0%,#edf7ff_100%)] px-5 py-2.5 text-14 font-semibold tracking-[0.02em] text-primary shadow-[0_8px_24px_rgba(47,115,242,0.16)] ring-1 ring-primary/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            Core Expertise
          </div>
          <h2 className="mt-5 text-center font-semibold md:text-40 sm:text-30 text-24 mb-8 text-midnight_text lg:mx-40">
            Project Capabilities Shaped By
            <span className="text-primary"> Real Execution Experience</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectorTags.map((item, index) => (
              <p
                key={index}
                className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-[linear-gradient(120deg,#ffffff_0%,#eff8ff_100%)] px-4 py-2 text-midnight_text text-14 md:text-15 font-semibold shadow-[0_8px_22px_rgba(47,115,242,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:shadow-[0_12px_28px_rgba(47,115,242,0.16)]"
              >
                <span className="h-2 w-2 rounded-full bg-primary/70 transition-colors duration-300 group-hover:bg-primary"></span>
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-start sm:mt-16 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-6">
            {PaymentImage.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 45, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 45, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 42px rgba(16,45,71,0.16)",
                }}
                className="group rounded-2xl border border-primary/15 bg-[linear-gradient(150deg,#ffffff_0%,#f4faff_100%)] p-4 shadow-[0_14px_45px_rgba(16,45,71,0.08)] transition-colors duration-300 hover:border-primary/40"
              >
                <motion.div {...bottomAnimation(index)} className="rounded-xl overflow-hidden">
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-primary/15">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={420}
                      height={220}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>
                    <p className="absolute left-3 bottom-3 rounded-md bg-white/90 px-2.5 py-1 text-12 text-primary font-semibold">
                      {("badge" in item && item.badge) ? item.badge : "Core Service"}
                    </p>
                  </div>
                  <div className="pb-3">
                    <motion.p
                      initial={{ opacity: 0, x: -14 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                      transition={{ duration: 0.45, delay: 0.16 + index * 0.11 }}
                      className="text-24 font-semibold text-midnight_text"
                    >
                      {formatTitle(item.title)}
                    </motion.p>
                  </div>
                  <div className="mr-2">
                    <p className="text-base text-muted leading-7">
                      {item.details}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/25 bg-[#eef7ff] px-3.5 py-2 text-14 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Explore Focus
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-primary transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
                      <Icon
                        icon="solar:alt-arrow-right-linear"
                        width="12"
                        height="12"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
