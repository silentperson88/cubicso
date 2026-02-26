import Image from "next/image";
import { aboutSectionDetails } from "@/data/companyProfile";

const ProjectsSection = () => {
  const pageData = aboutSectionDetails.projects;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-[linear-gradient(155deg,#fff3ea_0%,#fff6ef_52%,#fffaf6_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-6 h-56 w-56 rounded-full blur-3xl bg-amber-400/18"></div>
        <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full blur-3xl bg-orange-300/22"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border px-4 py-1.5 text-14 font-semibold border-amber-500/25 bg-amber-500/12 text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.16)]">
              {pageData.badge}
            </p>
            <h2 className="mt-4 text-35 font-semibold text-midnight_text md:text-48">
              {pageData.title}
            </h2>
            <p className="mt-4 text-18 leading-8 text-muted">{pageData.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {pageData.keyPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border px-4 py-2 text-15 font-medium border-amber-500/20 bg-white text-[#5f431b] shadow-[0_8px_20px_rgba(245,158,11,0.12)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl from-amber-500/25 via-orange-300/25 to-transparent"></div>
            <Image
              src={pageData.image}
              alt={pageData.title}
              width={900}
              height={560}
              className="relative h-[370px] w-full rounded-3xl border border-white/55 object-cover shadow-[0_18px_38px_rgba(22,68,121,0.16)]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pageData.focusCards.map((card, index) => (
            <div
              key={card.title}
              className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 border-amber-500/18 bg-white shadow-[0_14px_30px_rgba(214,134,31,0.14)] hover:shadow-[0_18px_34px_rgba(214,134,31,0.20)]"
            >
              <p className="inline-flex rounded-full border px-3 py-1 text-13 font-semibold uppercase tracking-[0.08em] text-amber-700 bg-amber-500/10 border-amber-500/22">
                Focus 0{index + 1}
              </p>
              <h3 className="mt-4 text-24 font-semibold text-midnight_text">{card.title}</h3>
              <p className="mt-3 leading-7 text-muted">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border p-6 md:p-7 border-amber-500/20 bg-gradient-to-r from-[#fff8ef] via-[#fff4e8] to-[#fff9f1]">
          <p className="text-13 font-semibold uppercase tracking-[0.1em] text-midnight_text/70">
            Key Highlight
          </p>
          <p className="mt-2 text-20 font-semibold leading-8 text-midnight_text">
            {pageData.highlight}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
