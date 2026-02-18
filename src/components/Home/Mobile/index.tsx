"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { perks } from "@/app/api/data";

const Mobile = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };
  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  return (
    <section className="overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="grid md:grid-cols-12 items-center lg:gap-12 gap-6 rounded-3xl border border-primary/10 bg-white px-6 py-10 md:px-10 shadow-[0_14px_45px_rgba(16,45,71,0.08)]"
        >
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h2 className="lg:text-38 text-24 text-midnight_text font-semibold">
              Precision delivery model for
              <br />
              <span className="lg:text-38 text-24 text-primary font-semibold lg:max-w-max">
                high-impact sectors
              </span>
            </h2>
            <p className="mt-6 text-muted lg:text-17 lg:max-w-full max-w-75%">
              We align strategy, operating model, and delivery governance to
              scale transformation across engineering, robotics, wealth, and
              renewable energy programs.
            </p>
            <div className="flex flex-col gap-4 mt-10">
              {perks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-primary/10 bg-[#F6FBFF] p-4"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Icon
                      icon="solar:unread-outline"
                      width="24"
                      height="24"
                      className="text-white"
                    />
                  </div>
                  <p className="text-base text-muted">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start">
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-12 border border-primary hover:text-primary hover:bg-transparent"
              >
                Discuss Your Program
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="lg:col-span-6 col-span-12">
            <div className="lg:max-w-full max-w-75% mx-auto relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/15 to-sky_blue/20 blur-xl"></div>
              <Image
                src="/images/pillars/wealth_management.png"
                alt="image"
                width={555}
                height={634}
                className="relative rounded-3xl border border-primary/15"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
