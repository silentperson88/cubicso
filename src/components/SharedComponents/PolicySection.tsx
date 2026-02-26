import Image from "next/image";
import { aboutSectionDetails, companyProfile } from "@/data/companyProfile";

const PolicySection = () => {
  const pageData = aboutSectionDetails.policies;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-[linear-gradient(155deg,#ecf4ff_0%,#f1f7ff_52%,#f8fbff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-6 h-56 w-56 rounded-full blur-3xl bg-sky-400/20"></div>
        <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full blur-3xl bg-blue-300/20"></div>
      </div>

      <div className="container relative mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border px-4 py-1.5 text-14 font-semibold border-sky-500/25 bg-sky-500/10 text-sky-700 shadow-[0_8px_24px_rgba(14,165,233,0.16)]">
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
                  className="rounded-full border px-4 py-2 text-15 font-medium border-sky-500/20 bg-white text-[#1a4860] shadow-[0_8px_20px_rgba(14,165,233,0.12)]"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl from-sky-500/25 via-blue-300/25 to-transparent"></div>
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
          <div className="rounded-2xl border border-sky-500/18 bg-white p-6 shadow-[0_14px_30px_rgba(37,137,187,0.14)]">
            <p className="inline-flex rounded-full border px-3 py-1 text-13 font-semibold uppercase tracking-[0.08em] text-sky-700 bg-sky-500/10 border-sky-500/22">
              Quality Policy
            </p>
            <p className="mt-4 leading-8 text-muted">{companyProfile.policies.quality}</p>
          </div>
          <div className="rounded-2xl border border-sky-500/18 bg-white p-6 shadow-[0_14px_30px_rgba(37,137,187,0.14)]">
            <p className="inline-flex rounded-full border px-3 py-1 text-13 font-semibold uppercase tracking-[0.08em] text-sky-700 bg-sky-500/10 border-sky-500/22">
              HSE Policy
            </p>
            <p className="mt-4 leading-8 text-muted">{companyProfile.policies.hse}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
