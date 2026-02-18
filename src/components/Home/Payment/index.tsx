"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PaymentImage } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";

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
    "Robotics",
    "Wealth Management",
    "Renewable Energy",
  ];

  return (
    <section className="py-16">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div {...TopAnimation} className="text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-white px-4 py-2 text-14 font-medium text-primary shadow-sm">
            Core Expertise
          </div>
          <h2 className="mt-5 text-center font-semibold md:text-40 sm:text-30 text-24 mb-8 text-midnight_text lg:mx-40">
            Premium capabilities built around your
            <span className="text-primary"> strategic sectors</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sectorTags.map((item, index) => (
              <p
                key={index}
                className="rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-midnight_text text-15 font-medium"
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-start sm:mt-16 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 gap-6">
            {PaymentImage.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_14px_45px_rgba(16,45,71,0.08)]"
              >
                <motion.div {...bottomAnimation(index)}>
                  <div className="rounded-full mb-5">
                    <Image
                      src={item.image}
                      alt={`Brand: ${item.title}`}
                      width={80}
                      height={80}
                      className="rounded-full bg-[#F2FAFF] p-4 shadow"
                    />
                  </div>
                  <div className="pb-3">
                    <p className="text-24 font-semibold text-midnight_text">
                      {item.title}
                    </p>
                  </div>
                  <div className="mr-2">
                    <p className="text-base text-muted">
                      {item.details}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-primary text-15 font-medium">
                    Explore focus
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="14"
                      height="14"
                      className="ml-1"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
