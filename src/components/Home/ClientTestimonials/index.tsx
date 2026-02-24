"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    quote:
      "Cubicso brought structure and execution discipline to our heavy civil package. The team delivered with high safety standards and clear weekly reporting.",
    name: "Rohit Sharma",
    company: "Infrastructure EPC Client",
    role: "Project Director",
    avatar: "/images/search/profile.png",
    rating: 5,
  },
  {
    quote:
      "Their project controls and field coordination improved schedule confidence across our renewable rollout. Communication was transparent at every stage.",
    name: "Ananya Patel",
    company: "Utility-Scale Solar Client",
    role: "Program Head",
    avatar: "/images/search/profile.png",
    rating: 5,
  },
  {
    quote:
      "Cubicso's engineers quickly aligned with our internal team and helped recover delayed activities. Strong ownership and practical problem-solving.",
    name: "Karan Mehta",
    company: "Industrial Client",
    role: "Operations Lead",
    avatar: "/images/search/profile.png",
    rating: 4.9,
  },
];

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="py-14 overflow-hidden">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5 relative"
      >
        <div className="absolute -top-8 right-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute -bottom-8 left-8 h-44 w-44 rounded-full bg-[#14b8a6]/15 blur-3xl"></div>
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] border border-primary/12 bg-[linear-gradient(130deg,#eef7ff_0%,#f8f5ff_42%,#f0fdfa_76%,#ffffff_100%)] px-6 py-10 md:px-10 md:py-14 xl:px-14"
        >
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-white px-4 py-1.5 text-14 font-semibold text-[#4f46e5] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#4f46e5]"></span>
              What Clients Say About Us
            </p>
            <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
              Trusted delivery across complex programs
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-[#f59e0b]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  icon="solar:star-bold"
                  width="18"
                  height="18"
                  className={i < Math.floor(active.rating) ? "opacity-100" : "opacity-35"}
                />
              ))}
              <span className="text-16 font-semibold ml-1">{active.rating}</span>
            </div>
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-8 rounded-3xl border border-[#0ea5e9]/22 bg-[linear-gradient(140deg,#ffffff_0%,#eef2ff_40%,#ecfeff_78%,#ffffff_100%)] p-6 md:p-8 shadow-[0_16px_38px_rgba(16,45,71,0.12)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-white border border-[#14b8a6]/25 px-3 py-2 shadow-sm">
                <Icon icon="solar:quote-up-bold" width="22" height="22" className="text-[#0f766e]" />
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-[#f59e0b]/25 bg-white px-3 py-1 text-13 text-[#b45309] font-semibold">
                <Icon icon="solar:star-bold" width="14" height="14" />
                {active.rating} Rated
              </div>
            </div>
            <p className="mt-5 text-18 md:text-21 text-midnight_text leading-8">
              "{active.quote}"
            </p>
            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-[#6366f1]/20 bg-white/90 p-3">
              <img
                src={active.avatar}
                alt={active.name}
                className="h-12 w-12 rounded-full border border-[#6366f1]/25 object-cover"
              />
              <div>
                <p className="text-16 font-semibold text-midnight_text">{active.name}</p>
                <p className="text-13 text-[#4f46e5] font-medium">{active.role}</p>
                <p className="text-13 text-muted">{active.company}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-[#4f46e5]" : "w-2.5 bg-[#4f46e5]/25"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
