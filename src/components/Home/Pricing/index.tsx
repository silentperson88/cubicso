"use client";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const plans = [
  {
    name: "Advisory Sprint",
    price: "$12K",
    period: "per engagement",
    features: [
      "Sector assessment and maturity baseline",
      "90-day transformation roadmap",
      "Leadership workshop and prioritization",
    ],
    highlighted: false,
  },
  {
    name: "Transformation Program",
    price: "$48K",
    period: "per quarter",
    features: [
      "Execution office across all selected pillars",
      "KPI framework and governance cadences",
      "Cross-functional implementation support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Partnership",
    price: "Custom",
    period: "annual model",
    features: [
      "Multi-year strategy and operating model",
      "Embedded experts for delivery oversight",
      "Executive reporting and value realization",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="overflow-hidden py-14">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1860px] px-3 md:px-5"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-midnight_text md:text-38 sm:text-30 text-24 font-semibold">
            Engagement models for
            <span className="text-primary ml-2">premium execution</span>
          </h2>
          <p className="text-17 text-muted max-w-[760px] mx-auto mt-4">
            Pick a collaboration model aligned to your ambition across Heavy
            Engineering, Robotics, Wealth Management, and Renewable Energy.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-6 mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className={`rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-primary bg-[linear-gradient(160deg,#eff8ff_0%,#ffffff_100%)] shadow-[0_16px_50px_rgba(16,45,71,0.10)]"
                  : "border-primary/15 bg-white"
              }`}
            >
              <h3 className="text-24 font-semibold text-midnight_text">
                {plan.name}
              </h3>
              <div className="mt-4">
                <p className="text-40 font-semibold text-primary">{plan.price}</p>
                <p className="text-muted text-15">{plan.period}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-muted text-16">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 block text-center text-16 py-3 rounded-xl border ${
                  plan.highlighted
                    ? "bg-primary text-white border-primary hover:bg-transparent hover:text-primary"
                    : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                }`}
              >
                Get Proposal
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
