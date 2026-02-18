import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Cubicso",
};

const AboutPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  const pillars = [
    "Heavy Engineering",
    "Robotics",
    "Wealth Management",
    "Renewable Energy",
  ];

  return (
    <>
      <HeroSub
        title="About Cubicso"
        description="Execution-focused consulting partner for mission-critical transformation programs."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="py-16">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex rounded-full border border-primary/20 bg-[#F3FAFF] px-3 py-1 text-14 text-primary font-medium">
                Who We Are
              </p>
              <h2 className="mt-4 text-40 font-semibold text-midnight_text">
                Strategic clarity. Reliable execution.
              </h2>
              <p className="mt-4 text-muted text-17 leading-8">
                Cubicso partners with enterprise teams to design and execute
                transformation programs that create measurable business value.
                Our focus is on practical delivery, governance discipline, and
                sustained performance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-primary/20 bg-white px-4 py-2 text-15 text-midnight_text"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-sky_blue/20 blur-xl"></div>
              <Image
                src="/images/pillars/renewable_energy.png"
                alt="Cubicso sectors"
                width={720}
                height={500}
                className="relative rounded-3xl border border-primary/15 w-full h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <h3 className="text-22 font-semibold text-midnight_text">Vision</h3>
              <p className="mt-3 text-muted">
                To become the most trusted execution partner for complex
                sector-led transformation programs.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <h3 className="text-22 font-semibold text-midnight_text">Approach</h3>
              <p className="mt-3 text-muted">
                Data-led planning, disciplined governance, and delivery rhythm
                that turns strategy into outcomes.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <h3 className="text-22 font-semibold text-midnight_text">Commitment</h3>
              <p className="mt-3 text-muted">
                Transparent collaboration, measurable milestones, and long-term
                value realization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
