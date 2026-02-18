import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="relative rounded-3xl lg:px-16 px-4 py-12 border border-primary/10 bg-[linear-gradient(125deg,#ecf7ff_0%,#f8fcff_50%,#ffffff_100%)] overflow-hidden">
          <div className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-38 sm:text-30 text-24 font-semibold text-midnight_text">
                Ready to scale across all four
                <span className="text-primary max-w-max ml-2">sectors</span>
              </h2>
              <p className="mt-6 text-base text-muted lg:max-w-full sm:max-w-75%">
                Build a single strategic engine for Heavy Engineering, Robotics,
                Wealth Management, and Renewable Energy with measurable delivery
                outcomes.
              </p>
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-12 border border-primary hover:text-primary hover:bg-transparent"
              >
                Start Enterprise Program
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/pillars/renewable_energy.png"
                alt="image"
                width={531}
                height={320}
                className="rounded-2xl border border-primary/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
