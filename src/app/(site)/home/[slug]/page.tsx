import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { aboutSectionDetails, companyProfile } from "@/data/companyProfile";

type PageTheme = {
  sectionBg: string;
  haloPrimary: string;
  haloSecondary: string;
  badgeClass: string;
  chipClass: string;
  cardClass: string;
  cardTagClass: string;
  highlightClass: string;
  ringClass: string;
};

const pageThemes: Record<string, PageTheme> = {
  "who-are-we": {
    sectionBg:
      "bg-[linear-gradient(155deg,#e8f3ff_0%,#f0f7ff_52%,#f7fbff_100%)]",
    haloPrimary: "bg-blue-400/20",
    haloSecondary: "bg-cyan-300/24",
    badgeClass:
      "border-blue-500/25 bg-blue-500/10 text-blue-700 shadow-[0_8px_24px_rgba(47,115,242,0.16)]",
    chipClass:
      "border-blue-500/20 bg-white text-[#143a5b] shadow-[0_8px_20px_rgba(47,115,242,0.12)]",
    cardClass:
      "border-blue-500/18 bg-white shadow-[0_14px_30px_rgba(44,105,185,0.14)] hover:shadow-[0_18px_34px_rgba(44,105,185,0.20)]",
    cardTagClass: "text-blue-700 bg-blue-500/10 border-blue-500/22",
    highlightClass:
      "border-blue-500/20 bg-gradient-to-r from-[#f1f7ff] via-[#e8f3ff] to-[#edf6ff]",
    ringClass: "from-blue-500/25 via-cyan-300/25 to-transparent",
  },
  "our-approach": {
    sectionBg:
      "bg-[linear-gradient(155deg,#e8fff8_0%,#edfff9_52%,#f6fffc_100%)]",
    haloPrimary: "bg-emerald-400/18",
    haloSecondary: "bg-teal-300/24",
    badgeClass:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 shadow-[0_8px_24px_rgba(16,185,129,0.16)]",
    chipClass:
      "border-emerald-500/20 bg-white text-[#14443d] shadow-[0_8px_20px_rgba(16,185,129,0.12)]",
    cardClass:
      "border-emerald-500/18 bg-white shadow-[0_14px_30px_rgba(17,145,112,0.14)] hover:shadow-[0_18px_34px_rgba(17,145,112,0.20)]",
    cardTagClass: "text-emerald-700 bg-emerald-500/10 border-emerald-500/22",
    highlightClass:
      "border-emerald-500/20 bg-gradient-to-r from-[#f0fff9] via-[#e7fff6] to-[#edfff8]",
    ringClass: "from-emerald-500/25 via-teal-300/25 to-transparent",
  },
  "integration-with-client-organisation": {
    sectionBg:
      "bg-[linear-gradient(155deg,#f2f0ff_0%,#f4f2ff_52%,#faf9ff_100%)]",
    haloPrimary: "bg-indigo-400/20",
    haloSecondary: "bg-violet-300/24",
    badgeClass:
      "border-indigo-500/25 bg-indigo-500/10 text-indigo-700 shadow-[0_8px_24px_rgba(99,102,241,0.16)]",
    chipClass:
      "border-indigo-500/20 bg-white text-[#2f2f66] shadow-[0_8px_20px_rgba(99,102,241,0.12)]",
    cardClass:
      "border-indigo-500/18 bg-white shadow-[0_14px_30px_rgba(88,92,210,0.14)] hover:shadow-[0_18px_34px_rgba(88,92,210,0.20)]",
    cardTagClass: "text-indigo-700 bg-indigo-500/10 border-indigo-500/22",
    highlightClass:
      "border-indigo-500/20 bg-gradient-to-r from-[#f7f4ff] via-[#f1eeff] to-[#f6f3ff]",
    ringClass: "from-indigo-500/25 via-violet-300/25 to-transparent",
  },
  projects: {
    sectionBg:
      "bg-[linear-gradient(155deg,#fff3ea_0%,#fff6ef_52%,#fffaf6_100%)]",
    haloPrimary: "bg-amber-400/18",
    haloSecondary: "bg-orange-300/22",
    badgeClass:
      "border-amber-500/25 bg-amber-500/12 text-amber-700 shadow-[0_8px_24px_rgba(245,158,11,0.16)]",
    chipClass:
      "border-amber-500/20 bg-white text-[#5f431b] shadow-[0_8px_20px_rgba(245,158,11,0.12)]",
    cardClass:
      "border-amber-500/18 bg-white shadow-[0_14px_30px_rgba(214,134,31,0.14)] hover:shadow-[0_18px_34px_rgba(214,134,31,0.20)]",
    cardTagClass: "text-amber-700 bg-amber-500/10 border-amber-500/22",
    highlightClass:
      "border-amber-500/20 bg-gradient-to-r from-[#fff8ef] via-[#fff4e8] to-[#fff9f1]",
    ringClass: "from-amber-500/25 via-orange-300/25 to-transparent",
  },
  policies: {
    sectionBg:
      "bg-[linear-gradient(155deg,#ecf4ff_0%,#f1f7ff_52%,#f8fbff_100%)]",
    haloPrimary: "bg-sky-400/20",
    haloSecondary: "bg-blue-300/20",
    badgeClass:
      "border-sky-500/25 bg-sky-500/10 text-sky-700 shadow-[0_8px_24px_rgba(14,165,233,0.16)]",
    chipClass:
      "border-sky-500/20 bg-white text-[#1a4860] shadow-[0_8px_20px_rgba(14,165,233,0.12)]",
    cardClass:
      "border-sky-500/18 bg-white shadow-[0_14px_30px_rgba(37,137,187,0.14)] hover:shadow-[0_18px_34px_rgba(37,137,187,0.20)]",
    cardTagClass: "text-sky-700 bg-sky-500/10 border-sky-500/22",
    highlightClass:
      "border-sky-500/20 bg-gradient-to-r from-[#f0f9ff] via-[#eaf7ff] to-[#f3faff]",
    ringClass: "from-sky-500/25 via-blue-300/25 to-transparent",
  },
  leadership: {
    sectionBg:
      "bg-[linear-gradient(155deg,#edf6ff_0%,#f2f8ff_52%,#f9fcff_100%)]",
    haloPrimary: "bg-cyan-400/18",
    haloSecondary: "bg-blue-300/24",
    badgeClass:
      "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 shadow-[0_8px_24px_rgba(6,182,212,0.16)]",
    chipClass:
      "border-cyan-500/20 bg-white text-[#16506a] shadow-[0_8px_20px_rgba(6,182,212,0.12)]",
    cardClass:
      "border-cyan-500/18 bg-white shadow-[0_14px_30px_rgba(29,142,170,0.14)] hover:shadow-[0_18px_34px_rgba(29,142,170,0.20)]",
    cardTagClass: "text-cyan-700 bg-cyan-500/10 border-cyan-500/22",
    highlightClass:
      "border-cyan-500/20 bg-gradient-to-r from-[#eefcff] via-[#e9fbff] to-[#f2fcff]",
    ringClass: "from-cyan-500/25 via-blue-300/25 to-transparent",
  },
};

const defaultTheme: PageTheme = {
  sectionBg:
    "bg-[linear-gradient(155deg,#edf5ff_0%,#f3f8ff_52%,#f9fcff_100%)]",
  haloPrimary: "bg-primary/18",
  haloSecondary: "bg-sky-300/20",
  badgeClass:
    "border-primary/25 bg-primary/10 text-primary shadow-[0_8px_24px_rgba(47,115,242,0.16)]",
  chipClass:
    "border-primary/20 bg-white text-midnight_text shadow-[0_8px_20px_rgba(47,115,242,0.12)]",
  cardClass:
    "border-primary/18 bg-white shadow-[0_14px_30px_rgba(44,105,185,0.14)] hover:shadow-[0_18px_34px_rgba(44,105,185,0.20)]",
  cardTagClass: "text-primary bg-primary/10 border-primary/22",
  highlightClass:
    "border-primary/20 bg-gradient-to-r from-[#f1f7ff] via-[#e8f3ff] to-[#edf6ff]",
  ringClass: "from-primary/25 via-sky-300/25 to-transparent",
};

const policyCommitments = [
  "Quality is a way of life and the outcome of good management discipline.",
  "The right things must be done in the right way across each execution stage.",
  "There is always a better way to deliver services through continuous improvement.",
  "Meeting client requirements is minimum performance; we aim to surpass expectations.",
];

const hseBenchmarks = [
  "Maintain a clean, safe and healthy environment for employees, contractors, customers and communities.",
  "Every employee and contractor has a duty to prevent harm to self, others and the environment.",
  "Comply with legislation, regulations and customer requirements as minimum benchmark.",
  "Regularly review policy, practices and performance to ensure ongoing improvements.",
];

const leadershipCommitments = [
  "CUBICSO has built its reputation on values, ethics and integrity.",
  "Leadership keeps safety and client satisfaction as the highest priorities.",
  "Teams are guided to deliver with quality, speed and accountability.",
  "The organization is focused on long-term client association and national value addition.",
];

const leadershipCultureBenchmarks = [
  "3S vision: Service for Excellence, Satisfaction for Vendors, Surety for Stakeholders.",
  "100+ qualified engineers working across 14 states with execution ownership.",
  "Young and talented workforce with strong field-readiness and technical depth.",
  "Transparent communication with business partners and stakeholders at every stage.",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = aboutSectionDetails[slug];

  if (!pageData) {
    return {
      title: "About Us | Cubicso",
    };
  }

  return {
    title: `${pageData.title} | Cubicso`,
  };
}

const AboutDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const pageData = aboutSectionDetails[slug];

  if (!pageData) {
    notFound();
  }

  const theme = pageThemes[slug] ?? defaultTheme;

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/", text: "Home Sections" },
    { href: `/home/${slug}`, text: pageData.title },
  ];

  return (
    <>
      <HeroSub
        title={pageData.title}
        description={pageData.heroDescription}
        breadcrumbLinks={breadcrumbLinks}
      />

      <section
        className={`relative overflow-hidden py-16 md:py-20 ${theme.sectionBg}`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute -left-10 top-6 h-56 w-56 rounded-full blur-3xl ${theme.haloPrimary}`}
          ></div>
          <div
            className={`absolute -right-10 bottom-10 h-64 w-64 rounded-full blur-3xl ${theme.haloSecondary}`}
          ></div>
        </div>

        <div className="container relative mx-auto px-4 lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div style={{ animation: "fadeUp 0.7s ease-out both" }}>
              <p
                className={`inline-flex rounded-full border px-4 py-1.5 text-14 font-semibold ${theme.badgeClass}`}
              >
                {pageData.badge}
              </p>
              <h2 className="mt-4 text-35 font-semibold text-midnight_text md:text-48">
                {pageData.title}
              </h2>
              <p className="mt-4 text-18 leading-8 text-muted">
                {pageData.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {pageData.keyPoints.map((point) => (
                  <span
                    key={point}
                    className={`rounded-full border px-4 py-2 text-15 font-medium ${theme.chipClass}`}
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative" style={{ animation: "fadeScale 0.8s ease-out both" }}>
              <div
                className={`absolute -inset-4 rounded-3xl bg-gradient-to-r blur-xl ${theme.ringClass}`}
              ></div>
              <Image
                src={pageData.image}
                alt={pageData.title}
                width={900}
                height={560}
                className="relative h-[370px] w-full rounded-3xl border border-white/55 object-cover shadow-[0_18px_38px_rgba(22,68,121,0.16)]"
              />
            </div>
          </div>

          {slug !== "policies" && slug !== "leadership" && (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {pageData.focusCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${theme.cardClass}`}
                  style={{ animation: `fadeUp ${0.85 + index * 0.08}s ease-out both` }}
                >
                  <p
                    className={`inline-flex rounded-full border px-3 py-1 text-13 font-semibold uppercase tracking-[0.08em] ${theme.cardTagClass}`}
                  >
                    Focus 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-24 font-semibold text-midnight_text">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted">{card.description}</p>
                </div>
              ))}
            </div>
          )}

          {slug === "policies" && (
            <div className="mt-10 space-y-6" style={{ animation: "fadeUp 1.1s ease-out both" }}>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-sky-500/22 bg-gradient-to-br from-[#f3f9ff] via-[#eef7ff] to-[#f7fbff] p-6 shadow-[0_14px_30px_rgba(21,120,172,0.14)] md:p-7">
                  <p className="inline-flex rounded-full border border-sky-500/25 bg-sky-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-sky-700">
                    Quality Policy
                  </p>
                  <p className="mt-4 text-16 font-semibold text-[#153650]">
                    CUBICSO will make quality a way of life.
                  </p>
                  <p className="mt-4 leading-8 text-[#31516b]">
                    {companyProfile.policies.quality}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {policyCommitments.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#20415d]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-600"></span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-cyan-500/22 bg-gradient-to-br from-[#eefffc] via-[#f0fffd] to-[#f7fffe] p-6 shadow-[0_14px_30px_rgba(9,136,128,0.14)] md:p-7">
                  <p className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-cyan-700">
                    HSE Policy
                  </p>
                  <p className="mt-4 text-16 font-semibold text-[#114446]">
                    Policy
                  </p>
                  <p className="mt-4 leading-8 text-[#24595a]">
                    {companyProfile.policies.hse}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {hseBenchmarks.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#1e4c4f]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600"></span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/16 bg-white p-6 shadow-[0_12px_28px_rgba(47,115,242,0.12)] md:p-7">
                <p className="text-13 font-semibold uppercase tracking-[0.1em] text-primary/80">
                  Policy in Execution
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Site Planning</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Risk checks, method planning, and safety controls before execution starts.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Execution Control</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Field supervision tracks quality points, compliance checks, and milestone reliability.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Review Cycle</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Regular policy reviews align team practices with legal and client requirements.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Improvement Loop</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Learnings are captured into standards to improve future project performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {slug === "leadership" && (
            <div className="mt-10 space-y-6" style={{ animation: "fadeUp 1.1s ease-out both" }}>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-cyan-500/22 bg-gradient-to-br from-[#f0fbff] via-[#ebf9ff] to-[#f6fcff] p-6 shadow-[0_14px_30px_rgba(24,138,171,0.14)] md:p-7">
                  <p className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-cyan-700">
                    Leadership Message
                  </p>
                  <p className="mt-4 text-16 font-semibold text-[#12455b]">
                    Values, ethics and integrity are the leadership foundation.
                  </p>
                  <p className="mt-4 leading-8 text-[#2e5870]">
                    Leadership communication in the company profile emphasizes safe and quality project execution, timely completion, and trusted delivery with business partners.
                    The model combines strategic intent with practical execution discipline across heavy infrastructure, industrial, and renewable energy engagements.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {leadershipCommitments.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#1f455a]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600"></span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-blue-500/22 bg-gradient-to-br from-[#eef4ff] via-[#edf3ff] to-[#f7faff] p-6 shadow-[0_14px_30px_rgba(47,115,242,0.14)] md:p-7">
                  <p className="inline-flex rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-blue-700">
                    Leadership in Practice
                  </p>
                  <p className="mt-4 text-16 font-semibold text-[#183f69]">
                    Execution capability backed by people, systems, and governance.
                  </p>
                  <p className="mt-4 leading-8 text-[#335375]">
                    Leadership aligns engineering manpower, machinery, and project controls so teams can respond to challenging opportunities without compromising safety, quality, or timelines.
                    This approach has supported repeat client trust and long-term execution partnerships.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {leadershipCultureBenchmarks.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#223f5d]">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-primary/16 bg-white p-6 shadow-[0_12px_28px_rgba(47,115,242,0.12)] md:p-7">
                <p className="text-13 font-semibold uppercase tracking-[0.1em] text-primary/80">
                  Leadership Priorities
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Safety First</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Safety remains a non-negotiable top priority across planning and site execution.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Client Satisfaction</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Leadership outcomes are measured by trust, responsiveness, and repeat engagement.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Timely Delivery</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Teams are organized for quality delivery with speed and milestone predictability.
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-[#f6faff] p-4">
                    <p className="text-14 font-semibold text-midnight_text">Long-term Association</p>
                    <p className="mt-2 text-15 leading-7 text-muted">
                      Strategic focus is durable client partnerships and sustained value creation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[linear-gradient(132deg,#ffffff_0%,#f1f9ff_54%,#e9f6ff_100%)] shadow-[0_16px_34px_rgba(35,122,172,0.16)]">
                <div className="grid items-center gap-0 lg:grid-cols-[340px_1fr]">
                  <div className="relative mx-auto my-6 h-[280px] w-[240px] overflow-hidden rounded-[28px] border border-cyan-500/28 bg-white shadow-[0_14px_32px_rgba(27,122,173,0.20)] lg:mx-6">
                    <Image
                      src="/leader.jpg"
                      alt="Anurag leadership portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 pt-0 md:p-8 md:pt-0 lg:pl-2">
                    <p className="inline-flex rounded-full border border-cyan-500/24 bg-cyan-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-cyan-700">
                      Leadership Spotlight
                    </p>
                    <h3 className="mt-3 text-32 font-semibold leading-tight text-midnight_text">
                      Leadership Direction Led by Anurag
                    </h3>
                    <p className="mt-3 text-16 leading-8 text-muted">
                      Strategic leadership is anchored in values, ethical delivery, and long-term client trust.
                      Under Anurag's direction, teams maintain a clear focus on safety, quality, and timely execution across complex programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className={`mt-8 rounded-2xl border p-6 md:p-7 ${theme.highlightClass}`}
            style={{ animation: "fadeUp 1s ease-out both" }}
          >
            <p className="text-13 font-semibold uppercase tracking-[0.1em] text-midnight_text/70">
              Key Highlight
            </p>
            <p className="mt-2 text-20 font-semibold leading-8 text-midnight_text">
              {pageData.highlight}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetailPage;
