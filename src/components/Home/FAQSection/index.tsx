"use client";

import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "Which sectors does Cubicso primarily support?",
    answer:
      "Cubicso supports Heavy Engineering, Renewable Energy, Wealth Management, and Robotics-focused execution programs with sector-specific delivery models.",
  },
  {
    question: "How do you ensure project quality and safety?",
    answer:
      "Projects are governed through structured controls on safety, time, and quality, supported by documented quality and HSE policy commitments.",
  },
  {
    question: "Can Cubicso support delayed or troubled projects?",
    answer:
      "Yes. Cubicso has turnaround capability, including project audits, risk recovery plans, and execution reset to bring critical programs back on track.",
  },
  {
    question: "Do you work with public and private sector clients?",
    answer:
      "Yes. Cubicso supports a mix of public and private clients across infrastructure, industrial, and renewable delivery contexts.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14 overflow-hidden">
      <div ref={ref} className="mx-auto w-full max-w-[1860px] px-3 md:px-5">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[30px] border border-primary/12 bg-[linear-gradient(130deg,#eef8ff_0%,#ffffff_65%)] px-6 py-10 md:px-10 md:py-12"
        >
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-14 font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              FAQ
            </p>
            <h2 className="mt-4 text-30 sm:text-36 md:text-42 font-semibold text-midnight_text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-primary/12 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="text-17 font-semibold text-midnight_text">
                      {faq.question}
                    </span>
                    <Icon
                      icon={isOpen ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                      width="20"
                      height="20"
                      className="text-primary shrink-0"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-muted leading-7">{faq.answer}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
