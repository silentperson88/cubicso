"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { BeneifitImage } from "@/app/api/data";

const Benefit = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselSlides = [
    {
      image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
      title: "Heavy Engineering Delivery",
    },
    {
      image: "/images/pillars/renewable_energy.png",
      title: "Renewable Execution Programs",
    },
    {
      image: "/images/pillars/wealth_management.png",
      title: "Wealth Management Solutions",
    },
    {
      image: "/images/pillars/robotics.png",
      title: "Robotics and Automation",
    },
  ];

  const cardThemes = [
    {
      card: "border-[#0ea5e9]/20 bg-[linear-gradient(132deg,#ffffff_0%,#ecfeff_58%,#f0f9ff_100%)] hover:border-[#0284c7]/40",
      stripe: "bg-[linear-gradient(180deg,#0ea5e9_0%,#38bdf8_45%,#2f73f2_100%)]",
      iconWrap: "border-[#0ea5e9]/25",
      title: "text-[#0284c7]",
    },
    {
      card: "border-[#6366f1]/20 bg-[linear-gradient(132deg,#ffffff_0%,#eef2ff_58%,#f5f3ff_100%)] hover:border-[#4f46e5]/40",
      stripe: "bg-[linear-gradient(180deg,#6366f1_0%,#818cf8_45%,#4f46e5_100%)]",
      iconWrap: "border-[#6366f1]/25",
      title: "text-[#4f46e5]",
    },
    {
      card: "border-[#14b8a6]/20 bg-[linear-gradient(132deg,#ffffff_0%,#ecfdf5_58%,#f0fdfa_100%)] hover:border-[#0f766e]/40",
      stripe: "bg-[linear-gradient(180deg,#14b8a6_0%,#2dd4bf_45%,#0f766e_100%)]",
      iconWrap: "border-[#14b8a6]/25",
      title: "text-[#0f766e]",
    },
    {
      card: "border-[#f59e0b]/25 bg-[linear-gradient(132deg,#ffffff_0%,#fffbeb_58%,#fef3c7_100%)] hover:border-[#d97706]/45",
      stripe: "bg-[linear-gradient(180deg,#f59e0b_0%,#fbbf24_45%,#d97706_100%)]",
      iconWrap: "border-[#f59e0b]/30",
      title: "text-[#b45309]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

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
    <section className="py-14 overflow-x-hidden">
      <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <div
          ref={ref}
          className="relative bg-[linear-gradient(120deg,#edf7ff_0%,#f6fbff_48%,#ffffff_100%)] rounded-[28px] xl:rounded-[34px] 2xl:rounded-[40px] py-10 md:py-16 xl:py-20 2xl:py-24 px-5 sm:px-10 xl:px-14 2xl:px-20 border border-primary/12 overflow-hidden shadow-[0_20px_60px_rgba(16,45,71,0.10)]"
        >
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-sky_blue/18 blur-3xl"></div>
          <motion.div {...TopAnimation} className="items-start text-center">
            <h2 className="font-bold md:text-38 sm:text-30 text-24 text-midnight_text">
              Why enterprises choose
              <span className="bg-border rounded-lg text-primary max-w-max ml-2 px-2">
                Cubicso
              </span>
              <br />
              for sector transformation.
            </h2>
          </motion.div>

          <motion.div {...leftAnimation} className="mt-12">
            <div className="relative rounded-2xl xl:rounded-3xl border border-primary/20 bg-white p-3 xl:p-4 shadow-[0_18px_48px_rgba(16,45,71,0.12)] overflow-hidden">
              <Image
                src={carouselSlides[activeSlide].image}
                alt={carouselSlides[activeSlide].title}
                width={1280}
                height={640}
                className="rounded-xl xl:rounded-2xl w-full h-[300px] sm:h-[420px] lg:h-[560px] xl:h-[640px] 2xl:h-[700px] object-cover transition-all duration-500"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-b-xl bg-gradient-to-t from-black/65 to-transparent p-5">
                <p className="text-white text-15 sm:text-18 font-semibold">
                  {carouselSlides[activeSlide].title}
                </p>
              </div>
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-12 font-semibold text-primary shadow">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Multi-Sector Showcase
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/55"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 mt-10 items-start">
            <motion.div {...rightAnimation} className="lg:col-span-4">
              <p className="sm:text-25 text-18 text-midnight_text font-semibold">
                Built for Heavy Engineering, Renewable Energy, Wealth
                Management, and Robotics-focused execution programs.
              </p>
              <p className="mt-4 text-muted leading-7">
                We combine technical depth and governance discipline to deliver
                safe, quality-focused outcomes with long-term client trust.
              </p>
              <div className="flex items-center lg:justify-start justify-center">
                <Link
                  href="/contact"
                  className="text-17 flex gap-3 items-center bg-primary text-white py-3 px-8 rounded-lg mt-8 border border-primary hover:text-primary hover:bg-transparent transition-colors"
                >
                  Book Strategy Session
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
              </div>
            </motion.div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {BeneifitImage.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 + index * 0.08 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 18px 34px rgba(16,45,71,0.14)",
                  }}
                  className={`group relative overflow-hidden rounded-2xl border p-5 shadow-[0_10px_24px_rgba(16,45,71,0.10)] transition-colors duration-300 ${
                    cardThemes[index % cardThemes.length].card
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${
                      cardThemes[index % cardThemes.length].stripe
                    }`}
                  ></div>
                  <div className="flex items-start gap-3 pl-1">
                    <div
                      className={`rounded-xl border bg-white/90 p-2.5 shadow-sm ${
                        cardThemes[index % cardThemes.length].iconWrap
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt="Trusted brand"
                        width={100}
                        height={100}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <p
                        className={`text-12 font-semibold tracking-[0.03em] uppercase ${
                          cardThemes[index % cardThemes.length].title
                        }`}
                      >
                        {item.title}
                      </p>
                      <p className="mt-1 text-16 text-midnight_text leading-7">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
