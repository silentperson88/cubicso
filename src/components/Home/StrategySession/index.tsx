"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { review } from "@/app/api/data";

const Search = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="overflow-hidden py-14">
      <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <div
          ref={ref}
          className="rounded-3xl p-6 md:p-10 border border-primary/10 bg-[linear-gradient(120deg,#f2f9ff_0%,#f8fcff_52%,#ffffff_100%)]"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:px-20 px-4 pt-6"
          >
            <h2 className="text-midnight_text font-semibold md:text-38 sm:text-30 text-24">
              Get your sector transformation blueprint in
              <span className="text-primary ml-2">15 minutes</span>
            </h2>
            <p className="mt-4 text-muted text-17 max-w-[760px] mx-auto">
              Heavy Engineering, Robotics, Wealth Management, and Renewable
              Energy leaders use this first session to identify the fastest path
              to measurable outcomes.
            </p>
            <div className="max-w-[760px] mx-auto mt-7">
              <div className="bg-white shadow-md rounded-2xl overflow-hidden p-5 border border-primary/10">
                <p className="text-16 text-muted font-medium">Reach out to us</p>
                <p className="text-midnight_text text-16 mt-2 leading-7">
                  Address: 804, Supremus ll, Near ward No. 11 office vasna road,
                  diwalipura, vadodara-390007.
                </p>
                <Link
                  href="/contact"
                  className="text-17 inline-flex items-center justify-center bg-primary text-white py-3 px-8 rounded-xl border border-primary hover:text-primary hover:bg-transparent mt-5"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex items-center justify-center my-6">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon
                    icon="solar:unread-outline"
                    width="24"
                    height="24"
                    className="text-white"
                  />
                </div>
                <p className="ml-4 text-16 text-muted">
                  No obligation. Direct strategy session with a sector specialist.
                </p>
              </div>
            </div>
          </motion.div>
          {review.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="bg-white rounded-3xl py-8 md:py-12 mt-6 px-6 md:px-12 border border-primary/10 shadow-[0_14px_45px_rgba(16,45,71,0.08)]"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <p className="text-midnight_text text-17 leading-8">{item.text}</p>
                  <div className="flex items-center gap-4 mt-8">
                    
                    <div>
                      <h3 className="font-medium text-base text-midnight_text">
                        {item.name}
                      </h3>
                      <h5 className="text-muted text-base">{item.post}</h5>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-[#F7FBFF] px-5 py-5">
                  <p className="text-14 text-muted">Satisfaction Score</p>
                  <p className="text-40 font-semibold text-primary mt-1">
                    {item.appstorerating}
                    <span className="text-18 text-midnight_text"> / 5</span>
                  </p>
                  <p className="text-15 text-muted mt-2">
                    Based on executive feedback across multi-sector programs.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
