"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type OnsiteSlide = {
  image: string;
  title: string;
  location: string;
};

const defaultSlides: OnsiteSlide[] = [
  {
    image: "/images/blog/blog_1.png",
    title: "Heavy Engineering Site Execution",
    location: "Navi Mumbai, Maharashtra",
  },
  {
    image: "/images/blog/blog_3.png",
    title: "Renewable Field Deployment",
    location: "Charanka, Gujarat",
  },
  {
    image: "/images/blog/blog_6.png",
    title: "Industrial Project Coordination",
    location: "Jamnagar, Gujarat",
  },
  {
    image: "/images/contact-page/contact.jpg",
    title: "On-Ground Delivery Team",
    location: "Vadodara, Gujarat",
  },
];

const OnsiteGalleryCarousel = ({
  slides = defaultSlides,
  compact = false,
}: {
  slides?: OnsiteSlide[];
  compact?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[activeIndex];

  return (
    <section className={`${compact ? "py-0" : "py-14"} overflow-hidden`}>
      <div ref={ref} className="mx-auto w-full max-w-[2100px] px-1 md:px-2">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] border border-primary/12 bg-[linear-gradient(140deg,#edf8ff_0%,#f6fbff_55%,#ffffff_100%)] p-3 md:p-4 shadow-[0_18px_46px_rgba(16,45,71,0.12)]"
        >
          <div className="absolute -top-8 -right-8 h-36 w-36 rounded-full bg-primary/15 blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-sky_blue/18 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[24px] border border-primary/15">
            <Image
              src={active.image}
              alt={active.title}
              width={1800}
              height={860}
              className="w-full h-[400px] sm:h-[520px] lg:h-[680px] xl:h-[760px] 2xl:h-[820px] object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent"></div>

            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnsiteGalleryCarousel;
