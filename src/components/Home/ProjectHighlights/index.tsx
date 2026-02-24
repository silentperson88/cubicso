"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "Harbour Link Civil Package",
    sector: "Heavy Engineering",
    image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
    summary:
      "Bridge-related execution support with tight schedule coordination and quality controls.",
  },
  {
    title: "Utility Solar Deployment",
    sector: "Renewable Energy",
    image: "/images/pillars/renewable_energy.png",
    summary:
      "Large-scale solar installation programs with full engineering studies and site-ready planning.",
  },
  {
    title: "Integrated Robotics and Packaging Upgrade",
    sector: "Robotics",
    image: "/images/pillars/robotics.png",
    summary:
      "Pick-and-place, palletizing, AMR movement, and vision-assisted checks combined to improve throughput and control.",
  },
];

const ProjectHighlights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5"
      >
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1.5 text-14 font-semibold text-primary">
            Project Highlights
          </p>
          <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
            Representative programs across key sectors
          </h2>
        </motion.div>

        <div className="mt-9 grid lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 38px rgba(16,45,71,0.14)",
              }}
              className="group rounded-2xl border border-primary/15 bg-white overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={420}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-12 font-semibold text-primary">
                  {project.sector}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-22 font-semibold text-midnight_text">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted leading-7">{project.summary}</p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-[#eef7ff] px-4 py-2 text-14 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  View Service Link
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
