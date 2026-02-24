import HeroSub from "@/components/SharedComponents/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { ServiceDetail } from "@/data/serviceDetails";
import OnsiteGalleryCarousel from "@/components/Home/OnsiteGalleryCarousel";

const ServiceDetailTemplate = ({ service }: { service: ServiceDetail }) => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: `/services/${service.slug}`, text: service.title },
  ];

  return (
    <>
      <HeroSub
        title={service.title}
        description={service.shortDescription}
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 relative overflow-hidden bg-[linear-gradient(150deg,#d7e9ff_0%,#cfe4ff_24%,#e5eefc_56%,#f1f6ff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(47,115,242,0.22),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(70,196,255,0.18),transparent_36%),radial-gradient(circle_at_52%_42%,rgba(99,102,241,0.12),transparent_40%)]"></div>
        <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-primary/22 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 h-60 w-60 rounded-full bg-sky_blue/24 blur-3xl"></div>
        <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5 relative space-y-12">
          <div
            className="opacity-0 animate-[fadeScale_.65s_ease-out_forwards] grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-primary/20 bg-[linear-gradient(135deg,#f8fcff_0%,#edf6ff_46%,#f4f1ff_100%)] p-6 md:p-8 shadow-[0_20px_56px_rgba(16,45,71,0.16)]"
            style={{ animationDelay: "60ms" }}
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-[linear-gradient(120deg,#ffffff_0%,#edf7ff_100%)] px-3.5 py-1.5 text-14 text-primary font-semibold shadow-[0_8px_20px_rgba(47,115,242,0.14)]">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Service Overview
              </p>
              <h2 className="mt-4 text-38 font-semibold text-midnight_text leading-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-muted leading-8 text-17">{service.intro}</p>
              <p className="mt-5 text-14 font-semibold tracking-[0.04em] uppercase text-primary/80">
                Best Fit For
              </p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {service.whoItsFor.map((item, index) => (
                  <div
                    key={item}
                    className={`group rounded-xl border px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      index % 4 === 0
                        ? "border-[#0ea5e9]/25 bg-[linear-gradient(128deg,#ffffff_0%,#ecfeff_100%)] hover:border-[#0284c7]/40 hover:shadow-[0_12px_22px_rgba(14,165,233,0.18)]"
                        : index % 4 === 1
                        ? "border-[#6366f1]/25 bg-[linear-gradient(128deg,#ffffff_0%,#eef2ff_100%)] hover:border-[#4f46e5]/40 hover:shadow-[0_12px_22px_rgba(99,102,241,0.18)]"
                        : index % 4 === 2
                        ? "border-[#14b8a6]/25 bg-[linear-gradient(128deg,#ffffff_0%,#ecfdf5_100%)] hover:border-[#0f766e]/40 hover:shadow-[0_12px_22px_rgba(20,184,166,0.18)]"
                        : "border-[#f59e0b]/25 bg-[linear-gradient(128deg,#ffffff_0%,#fffbeb_100%)] hover:border-[#d97706]/40 hover:shadow-[0_12px_22px_rgba(245,158,11,0.18)]"
                    }`}
                  >
                    <p
                      className={`text-11 font-semibold tracking-[0.04em] uppercase ${
                        index % 4 === 0
                          ? "text-[#0284c7]"
                          : index % 4 === 1
                          ? "text-[#4f46e5]"
                          : index % 4 === 2
                          ? "text-[#0f766e]"
                          : "text-[#b45309]"
                      }`}
                    >
                      Profile {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-15 text-midnight_text font-medium leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-sky_blue/20 blur-xl"></div>
              <Image
                src={service.heroImage}
                alt={service.title}
                width={920}
                height={620}
                className="relative rounded-3xl border border-primary/15 w-full h-[420px] object-cover shadow-[0_16px_34px_rgba(16,45,71,0.14)]"
              />
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-primary/20 bg-[linear-gradient(135deg,#f8fbff_0%,#edf5ff_100%)] p-4 md:p-5 shadow-[0_16px_40px_rgba(16,45,71,0.14)]"
            style={{ animationDelay: "130ms" }}
          >
            <div className="px-2 pb-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/22 bg-[linear-gradient(120deg,#ffffff_0%,#edf8ff_100%)] px-3.5 py-1.5 text-13 font-semibold text-primary shadow-sm">
                <span className="h-2 w-2 rounded-full bg-sky_blue"></span>
                Onsite Capture Gallery
              </p>
              <h3 className="mt-3 text-28 font-semibold text-midnight_text">
                Real execution snapshots from project environments
              </h3>
            </div>
            <OnsiteGalleryCarousel
              compact
              slides={
                service.galleryImages?.length
                  ? service.galleryImages.map((image, index) => ({
                      image,
                      title: `${service.title} Capture ${index + 1}`,
                      location: `Onsite Image ${index + 1}`,
                    }))
                  : service.projectTypes.map((project, index) => ({
                      image: project.image,
                      title: project.title,
                      location: `Project Capture ${index + 1}`,
                    }))
              }
            />
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-[#0ea5e9]/24 bg-[linear-gradient(132deg,#f8fdff_0%,#e8f9ff_58%,#edf6ff_100%)] p-6 md:p-8 shadow-[0_14px_34px_rgba(14,165,233,0.18)]"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-30 font-semibold text-midnight_text">Capabilities Matrix</h3>
            <p className="mt-2 text-muted">
              Detailed capability blocks that support safe, predictable, and scalable service delivery.
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
              {service.capabilities.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-xl border px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 ${
                    index % 4 === 0
                      ? "border-[#0ea5e9]/22 bg-[linear-gradient(128deg,#ffffff_0%,#ecfeff_100%)] hover:border-[#0284c7]/40 hover:shadow-[0_10px_20px_rgba(14,165,233,0.18)]"
                      : index % 4 === 1
                      ? "border-[#6366f1]/22 bg-[linear-gradient(128deg,#ffffff_0%,#eef2ff_100%)] hover:border-[#4f46e5]/40 hover:shadow-[0_10px_20px_rgba(99,102,241,0.18)]"
                      : index % 4 === 2
                      ? "border-[#14b8a6]/22 bg-[linear-gradient(128deg,#ffffff_0%,#ecfdf5_100%)] hover:border-[#0f766e]/40 hover:shadow-[0_10px_20px_rgba(20,184,166,0.18)]"
                      : "border-[#f59e0b]/22 bg-[linear-gradient(128deg,#ffffff_0%,#fffbeb_100%)] hover:border-[#d97706]/40 hover:shadow-[0_10px_20px_rgba(245,158,11,0.18)]"
                  }`}
                >
                  <p
                    className={`text-12 font-semibold tracking-[0.04em] uppercase ${
                      index % 4 === 0
                        ? "text-[#0284c7]"
                        : index % 4 === 1
                        ? "text-[#4f46e5]"
                        : index % 4 === 2
                        ? "text-[#0f766e]"
                        : "text-[#b45309]"
                    }`}
                  >
                    Capability {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-muted leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-[#6366f1]/24 bg-[linear-gradient(132deg,#f9fbff_0%,#ebefff_58%,#f1edff_100%)] p-6 md:p-8 shadow-[0_14px_34px_rgba(99,102,241,0.20)]"
            style={{ animationDelay: "270ms" }}
          >
            <h3 className="text-30 font-semibold text-midnight_text">Project Types</h3>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {service.projectTypes.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl border border-[#6366f1]/16 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(99,102,241,0.18)]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={680}
                    height={340}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="text-20 font-semibold text-midnight_text">{project.title}</p>
                    <p className="mt-2 text-muted leading-7">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] grid lg:grid-cols-2 gap-6"
            style={{ animationDelay: "340ms" }}
          >
            <div className="rounded-2xl border border-[#14b8a6]/24 bg-[linear-gradient(128deg,#f7fffc_0%,#e7fbf5_100%)] p-6 shadow-[0_10px_24px_rgba(20,184,166,0.14)]">
              <h3 className="text-24 font-semibold text-midnight_text">Delivery Methodology</h3>
              <div className="mt-4 space-y-2.5">
                {service.methodology.map((step, index) => (
                  <p key={step} className="text-muted leading-7">
                    <span className="text-[#0f766e] font-semibold mr-2">{index + 1}.</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#f59e0b]/24 bg-[linear-gradient(128deg,#fffdf6_0%,#fff4d9_100%)] p-6 shadow-[0_10px_24px_rgba(245,158,11,0.16)]">
              <h3 className="text-24 font-semibold text-midnight_text">Tools & Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {service.toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                  className="rounded-full border border-[#f59e0b]/25 bg-[linear-gradient(120deg,#ffffff_0%,#fff8e8_100%)] px-3 py-1.5 text-13 text-midnight_text transition-all duration-300 hover:border-[#d97706]/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-[#14b8a6]/24 bg-[linear-gradient(130deg,#f8fffc_0%,#e9fdf5_100%)] p-6 md:p-8 shadow-[0_14px_32px_rgba(20,184,166,0.18)]"
            style={{ animationDelay: "410ms" }}
          >
            <h3 className="text-30 font-semibold text-midnight_text">Industry Use Cases</h3>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
              {service.useCases.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#14b8a6]/20 bg-white p-5">
                  <p className="text-20 font-semibold text-midnight_text">{item.title}</p>
                  <p className="mt-2 text-muted leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-[#f59e0b]/24 bg-[linear-gradient(130deg,#fffef8_0%,#fff2d2_100%)] p-6 md:p-8 shadow-[0_14px_32px_rgba(245,158,11,0.20)]"
            style={{ animationDelay: "480ms" }}
          >
            <h3 className="text-30 font-semibold text-midnight_text">KPI Outcomes</h3>
            <div className="grid md:grid-cols-4 gap-4 mt-5">
              {service.kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-[#f59e0b]/20 bg-white p-5">
                  <p className="text-28 font-semibold text-[#b45309]">{kpi.value}</p>
                  <p className="text-muted mt-1">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] grid lg:grid-cols-2 gap-6"
            style={{ animationDelay: "550ms" }}
          >
            <div className="rounded-2xl border border-[#6366f1]/24 bg-[linear-gradient(128deg,#f9faff_0%,#e8ecff_100%)] p-6 shadow-[0_10px_24px_rgba(99,102,241,0.16)]">
              <h3 className="text-24 font-semibold text-midnight_text">Compliance & Governance</h3>
              <div className="mt-4 space-y-2.5">
                {service.compliance.map((item) => (
                  <p key={item} className="text-muted leading-7">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#ec4899]/24 bg-[linear-gradient(128deg,#fff9fc_0%,#fdebf5_100%)] p-6 shadow-[0_10px_24px_rgba(236,72,153,0.16)]">
              <h3 className="text-24 font-semibold text-midnight_text">Team Composition</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {service.team.map((member) => (
                  <span
                    key={member}
                    className="rounded-full border border-[#ec4899]/20 bg-[linear-gradient(120deg,#ffffff_0%,#fdf1f8_100%)] px-3 py-1.5 text-13 text-midnight_text transition-all duration-300 hover:border-[#be185d]/35"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeUp_.68s_ease-out_forwards] rounded-3xl border border-[#0ea5e9]/24 bg-[linear-gradient(130deg,#f8fdff_0%,#e8f5ff_100%)] p-6 md:p-8 shadow-[0_14px_30px_rgba(14,165,233,0.18)]"
            style={{ animationDelay: "620ms" }}
          >
            <h3 className="text-30 font-semibold text-midnight_text">FAQs</h3>
            <p className="mt-2 text-muted">
              Quick answers to common questions about scope, execution, and delivery governance.
            </p>
            <div className="mt-4 space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-[#0ea5e9]/22 bg-white px-4 py-3 transition-all duration-300 hover:bg-[#f0f9ff] open:bg-[#f8fdff] open:border-[#0284c7]/30 open:shadow-[0_10px_20px_rgba(14,165,233,0.12)]"
                >
                  <summary className="cursor-pointer list-none text-midnight_text font-semibold flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-[#0284c7] text-18 leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-2 text-muted leading-7">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div
            className="opacity-0 animate-[fadeScale_.72s_ease-out_forwards] rounded-3xl border border-primary/24 bg-[linear-gradient(120deg,#0ea5e9_0%,#6366f1_52%,#14b8a6_100%)] p-7 text-center shadow-[0_16px_34px_rgba(79,70,229,0.30)]"
            style={{ animationDelay: "690ms" }}
          >
            <h3 className="text-30 font-semibold text-white">
              Plan Your {service.title} Program
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Connect with Cubicso to discuss delivery scope, execution model, and timeline feasibility.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl border border-white/35 bg-white px-5 py-2.5 text-[#312e81] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white hover:shadow-[0_12px_24px_rgba(255,255,255,0.22)]"
              >
                Book Service Consultation
              </Link>
              <Link
                href="/about/projects"
                className="rounded-xl border border-white/35 bg-white/12 px-5 py-2.5 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_12px_24px_rgba(16,45,71,0.25)]"
              >
                View Related Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailTemplate;
