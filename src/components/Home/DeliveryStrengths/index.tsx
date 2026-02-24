"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const sectorCards = [
  {
    title: "Heavy Infrastructure",
    description:
      "Bridge works, piling, RCC structures, and large-scale civil execution with disciplined controls.",
    image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
  },
  {
    title: "Industrial Services",
    description:
      "EPC, BOP, turnkey design-build, structural erection, piping, and equipment installation support.",
    image: "/images/pillars/wealth_management.png",
  },
  {
    title: "Renewable Energy",
    description:
      "Utility-scale solar delivery with full engineering investigations and terrain-specific execution planning.",
    image: "/images/pillars/renewable_energy.png",
  },
  {
    title: "Project Recovery Capability",
    description:
      "Audit and turnaround support for in-trouble projects, with focused risk closure and schedule recovery.",
    image: "/images/pillars/robotics.png",
  },
];

const Method = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const topAnimation = {
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <section className="py-14 overflow-hidden">
      <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <div
          ref={ref}
          className="rounded-3xl py-12 sm:px-10 px-5 border border-primary/10 bg-[linear-gradient(120deg,#eff8ff_0%,#f7fbff_52%,#ffffff_100%)]"
        >
          <motion.div {...topAnimation} className="text-center">
            <h2 className="md:text-38 sm:text-30 text-24 text-midnight_text font-semibold">
              Four delivery strengths.
              <span className="text-primary ml-2">One execution platform.</span>
            </h2>
            <p className="xl:max-w-[55%] lg:max-w-[65%] md:max-w-[80%] text-17 mx-auto text-muted mt-4">
              Proven capability across core sectors with project controls,
              engineering depth, and safety-first execution standards.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            {sectorCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                className="rounded-2xl overflow-hidden border border-primary/10 bg-white shadow-[0_12px_36px_rgba(16,45,71,0.08)]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={620}
                  height={260}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-25 font-semibold text-midnight_text">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-muted text-16">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
