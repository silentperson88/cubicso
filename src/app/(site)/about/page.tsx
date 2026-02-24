import HeroSub from "@/components/SharedComponents/HeroSub";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { companyProfile } from "@/data/companyProfile";

export const metadata: Metadata = {
  title: "About Us | Cubicso",
};

const AboutPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
  ];

  const aboutSections = [
    { label: "Who Are We", href: "/about/who-are-we" },
    { label: "Our Approach", href: "/about/our-approach" },
    {
      label: "Integration with Client Organisation",
      href: "/about/integration-with-client-organisation",
    },
    { label: "Policies", href: "/about/policies" },
  ];

  const approachCards = [
    {
      title: "3S Vision",
      description:
        "Service for Excellence, Satisfaction for Vendors, and Surety for Stakeholders guide our planning and execution discipline.",
    },
    {
      title: "Execution Model",
      description:
        "Delivery is governed on safety, timeline reliability, and measurable quality across every package and milestone.",
    },
    {
      title: "Client Outcomes",
      description:
        "We focus on repeatable value: lower execution risk, predictable progress, transparent governance, and long-term trust.",
    },
  ];

  const integrationSteps = [
    "Align team structure with client geography and internal governance.",
    "Embed planning and reporting cadence into client-facing reviews.",
    "Drive corrective actions early through shared project visibility.",
  ];

  const projectHighlights = [
    {
      title: "Heavy Infrastructure Delivery",
      points: [
        "Bridge and RCC execution support on large transport programs.",
        "13,600 m stone piling and 39,542 m piling delivered across major accounts.",
        "High-volume earthwork, roadwork, and structural packages under strict controls.",
      ],
      image: "/images/service/heavy%20engineering/1.jpg",
    },
    {
      title: "Renewable Energy Programs",
      points: [
        "Utility-scale solar execution with structured schedule governance.",
        "Ground-mounted and floating solar support with field-ready teams.",
        "150+ MW delivered through repeatable engineering and installation workflows.",
      ],
      image: "/images/service/renewable%20energy/rw1.png",
    },
  ];

  return (
    <>
      <HeroSub
        title="About Us"
        description="Execution-focused consulting partner for mission-critical transformation programs."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf5ff] via-[#e8f2ff] to-[#f4f9ff] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-primary/18 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
          <div className="grid items-center gap-10 rounded-[28px] border border-primary/15 bg-gradient-to-r from-[#0f2f56] via-[#12406f] to-[#1a5a90] p-6 shadow-[0_20px_50px_rgba(17,54,95,0.28)] md:p-8 lg:grid-cols-2 lg:p-10">
            <div style={{ animation: "fadeUp 0.7s ease-out both" }}>
              <p className="inline-flex rounded-full border border-white/35 bg-white/12 px-4 py-1.5 text-14 font-semibold uppercase tracking-[0.12em] text-white">
                Who We Are
              </p>
              <h2 className="mt-5 text-35 font-semibold text-white md:text-48">
                Execution-first partner across heavy engineering, renewable energy, wealth management, and robotics.
              </h2>
              <p className="mt-5 text-18 leading-8 text-blue-100/95">
                Cubicso Enterprise Private Limited has scaled from a focused subcontractor into a dependable delivery partner for complex, high-accountability programs.
                We combine project controls, engineering depth, and field discipline to consistently deliver with safety, speed, and quality.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {companyProfile.values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-white/30 bg-white/12 px-4 py-2 text-14 font-medium text-white"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative" style={{ animation: "fadeScale 0.8s ease-out both" }}>
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-primary/35 via-sky-200/25 to-transparent blur-2xl" />
              <Image
                src="/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png"
                alt="Cubicso sectors"
                width={920}
                height={620}
                className="relative h-[380px] w-full rounded-[28px] border border-white/25 object-cover"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" style={{ animation: "fadeUp 0.8s ease-out both" }}>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_10px_30px_rgba(38,95,170,0.12)]">
              <p className="text-13 uppercase tracking-[0.1em] text-primary/80">Years in operation</p>
              <p className="mt-2 text-40 font-semibold text-midnight_text">{companyProfile.yearsInBusiness}</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_10px_30px_rgba(38,95,170,0.12)]">
              <p className="text-13 uppercase tracking-[0.1em] text-primary/80">Qualified engineers</p>
              <p className="mt-2 text-40 font-semibold text-midnight_text">{companyProfile.engineers}</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_10px_30px_rgba(38,95,170,0.12)]">
              <p className="text-13 uppercase tracking-[0.1em] text-primary/80">Presence across India</p>
              <p className="mt-2 text-40 font-semibold text-midnight_text">{companyProfile.states} states</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-[0_10px_30px_rgba(38,95,170,0.12)]">
              <p className="text-13 uppercase tracking-[0.1em] text-primary/80">Solar installation</p>
              <p className="mt-2 text-40 font-semibold text-midnight_text">{companyProfile.solarCapacity}</p>
            </div>
          </div>

          <div id="our-approach" className="mt-14 scroll-mt-28" style={{ animation: "fadeUp 0.9s ease-out both" }}>
            <div className="mb-6">
              <p className="text-14 uppercase tracking-[0.12em] text-primary/80">Our Approach</p>
              <h3 className="mt-2 text-35 font-semibold text-midnight_text">Structured delivery model for complex programs</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {approachCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-primary/14 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_16px_36px_rgba(47,115,242,0.18)]"
                >
                  <p className="text-13 font-semibold uppercase tracking-[0.12em] text-primary/75">0{index + 1}</p>
                  <h4 className="mt-3 text-24 font-semibold text-midnight_text">{card.title}</h4>
                  <p className="mt-3 leading-7 text-muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="integration-with-client-organisation"
            className="mt-14 scroll-mt-28 rounded-[24px] border border-primary/16 bg-gradient-to-r from-[#dcecff] via-[#d6e8ff] to-[#cde4ff] p-7 md:p-9"
            style={{ animation: "fadeScale 0.9s ease-out both" }}
          >
            <p className="text-14 uppercase tracking-[0.12em] text-primary/80">Integration with Client Organisation</p>
            <h3 className="mt-2 text-32 font-semibold text-midnight_text">Embedded teams, aligned governance, faster outcomes</h3>
            <p className="mt-4 max-w-4xl text-18 leading-8 text-[#315574]">
              Our teams adapt to client systems, stakeholder structures, and reporting rhythms without losing execution accountability.
              This model reduces friction, increases decision velocity, and keeps delivery performance visible throughout the project lifecycle.
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {integrationSteps.map((step, index) => (
                <div key={step} className="rounded-xl border border-primary/16 bg-white/80 p-5 shadow-[0_8px_24px_rgba(53,113,188,0.12)]">
                  <p className="text-13 font-semibold uppercase tracking-[0.12em] text-primary/70">Step {index + 1}</p>
                  <p className="mt-2 leading-7 text-midnight_text">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="projects" className="mt-14 scroll-mt-28" style={{ animation: "fadeUp 1s ease-out both" }}>
            <div className="mb-6">
              <p className="text-14 uppercase tracking-[0.12em] text-primary/80">Projects</p>
              <h3 className="mt-2 text-35 font-semibold text-midnight_text">Representative delivery across infrastructure and energy</h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {projectHighlights.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-primary/14 bg-white shadow-[0_14px_34px_rgba(36,89,161,0.16)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={880}
                    height={420}
                    className="h-[240px] w-full object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-24 font-semibold text-midnight_text">{item.title}</h4>
                    <ul className="mt-4 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-muted">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span className="leading-7">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2" style={{ animation: "fadeUp 1s ease-out both" }}>
            <div id="policies" className="scroll-mt-28 rounded-2xl border border-primary/14 bg-white p-7 shadow-[0_12px_30px_rgba(34,86,152,0.14)] md:p-8">
              <p className="text-14 uppercase tracking-[0.12em] text-primary/80">Policies</p>
              <h3 className="mt-2 text-32 font-semibold text-midnight_text">Quality and HSE as operating discipline</h3>
              <p className="mt-4 leading-8 text-muted">
                Quality and HSE are not static documents. They are active control systems inside planning, execution, supervision,
                and review cycles to protect people, timelines, and project outcomes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Continuous Improvement</span>
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Compliance Focus</span>
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Safety Accountability</span>
              </div>
            </div>

            <div id="leadership" className="scroll-mt-28 rounded-2xl border border-primary/14 bg-white p-7 shadow-[0_12px_30px_rgba(34,86,152,0.14)] md:p-8">
              <p className="text-14 uppercase tracking-[0.12em] text-primary/80">Leadership</p>
              <h3 className="mt-2 text-32 font-semibold text-midnight_text">Values-led leadership with execution ownership</h3>
              <p className="mt-4 leading-8 text-muted">
                Leadership direction is anchored in ethics, transparent stakeholder communication, and measurable execution performance.
                Teams are empowered to act with urgency while maintaining standards in quality and safety.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Client Trust</span>
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Delivery Integrity</span>
                <span className="rounded-full border border-primary/20 bg-primary/7 px-4 py-2 text-14 font-semibold text-primary">Long-term Partnerships</span>
              </div>
            </div>
          </div>

          <div
            className="mt-14 rounded-[24px] border border-primary/16 bg-gradient-to-r from-[#134273] via-[#1b5288] to-[#245f98] p-7 shadow-[0_20px_40px_rgba(18,62,111,0.24)] md:p-8"
            style={{ animation: "fadeScale 1.1s ease-out both" }}
          >
            <p className="text-14 uppercase tracking-[0.12em] text-blue-100/90">Explore About Us Sections</p>
            <h3 className="mt-2 text-32 font-semibold text-white">Dive deeper into each About Us segment</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {aboutSections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-white/30 bg-white/12 px-4 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <span className="text-16 font-semibold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

