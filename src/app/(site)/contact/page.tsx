import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { companyProfile } from "@/data/companyProfile";

export const metadata: Metadata = {
  title: "Contact Us | Cubicso",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  const contactCards = [
    {
      title: "Postal Address",
      value: companyProfile.contact.postalAddress.join(", "),
      short: "AD",
      href: "",
    },
    {
      title: "Email",
      value: companyProfile.contact.email,
      short: "EM",
      href: `mailto:${companyProfile.contact.email}`,
    },
    {
      title: "Phone",
      value: companyProfile.contact.phone,
      short: "PH",
      href: `tel:${companyProfile.contact.phone}`,
    },
    {
      title: "Fax",
      value: companyProfile.contact.fax,
      short: "FX",
      href: "",
    },
    {
      title: "Physical Coordinates",
      value: companyProfile.contact.physicalAddress.join(" | "),
      short: "CO",
      href: "",
    },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Connect with Cubicso for strategic programs across Heavy Engineering, Robotics, Wealth Management, and Renewable Energy."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="relative overflow-hidden bg-[linear-gradient(152deg,#e8f3ff_0%,#eef8ff_34%,#eaf9ff_70%,#f7fbff_100%)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_15%,rgba(47,115,242,0.14),transparent_35%),radial-gradient(circle_at_86%_18%,rgba(251,191,36,0.12),transparent_32%),radial-gradient(circle_at_88%_82%,rgba(70,196,255,0.14),transparent_40%)]"></div>
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/18 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-300/22 blur-3xl"></div>

        <div className="relative mx-auto w-full max-w-[1760px] px-4 md:px-6">
          <div className="grid gap-8 rounded-[30px] border border-primary/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.92)_0%,rgba(247,251,255,0.88)_100%)] p-6 shadow-[0_20px_50px_rgba(47,115,242,0.14)] md:p-8 lg:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-13 font-semibold uppercase tracking-[0.12em] text-primary">
                  Contact Desk
                </p>
                <h2 className="mt-4 text-35 font-semibold text-midnight_text md:text-48">
                  Let us discuss your next execution program.
                </h2>
                <p className="mt-4 max-w-[820px] text-18 leading-8 text-muted">
                  Reach our team for heavy engineering delivery, renewable energy execution,
                  wealth management platforms, and robotics transformation programs.
                  We respond with a practical plan, clear scope alignment, and ownership model.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-primary/20 bg-white px-4 py-2 text-14 font-semibold text-primary">
                    Fast Response
                  </span>
                  <span className="rounded-full border border-cyan-500/22 bg-cyan-500/8 px-4 py-2 text-14 font-semibold text-cyan-700">
                    Structured Discovery
                  </span>
                  <span className="rounded-full border border-amber-500/24 bg-amber-500/10 px-4 py-2 text-14 font-semibold text-amber-700">
                    Delivery-first Planning
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-r from-primary/24 via-cyan-300/20 to-amber-300/22 blur-2xl"></div>
                <div className="relative overflow-hidden rounded-[28px] border border-white/55 shadow-[0_16px_36px_rgba(21,68,122,0.18)]">
                  <Image
                    src="/images/contact-page/contact.jpg"
                    alt="Cubicso contact"
                    width={1400}
                    height={420}
                    className="h-[290px] w-full object-cover md:h-[340px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="space-y-6">
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {contactCards.map((card) => (
                    <div
                      key={card.title}
                      className="group rounded-2xl border border-primary/15 bg-white p-5 shadow-[0_12px_28px_rgba(47,115,242,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_34px_rgba(47,115,242,0.17)]"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/16 to-cyan-400/16 text-14 font-semibold text-primary">
                          {card.short}
                        </div>
                        <h3 className="text-18 font-semibold text-midnight_text">
                          {card.title}
                        </h3>
                      </div>
                      {card.href ? (
                        <Link href={card.href} className="text-16 leading-7 text-muted transition-colors hover:text-primary">
                          {card.value}
                        </Link>
                      ) : (
                        <p className="text-16 leading-7 text-muted">{card.value}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-primary/16 bg-gradient-to-r from-[#e5f0ff] via-[#eaf6ff] to-[#f0f9ff] p-7 shadow-[0_10px_26px_rgba(47,115,242,0.12)]">
                  <h3 className="text-24 font-semibold text-midnight_text">
                    Contact Commitment
                  </h3>
                  <p className="mt-3 text-17 leading-8 text-muted">
                    Cubicso builds long-term client relationships through safe, quality-focused,
                    and transparent execution. Share your requirement and our team will align a
                    suitable engagement path with scope, timeline expectations, and delivery checkpoints.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`mailto:${companyProfile.contact.email}`}
                      className="inline-flex items-center rounded-full border border-primary/24 bg-primary/10 px-4 py-2 text-14 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Email Team
                    </Link>
                    <Link
                      href={`tel:${companyProfile.contact.phone}`}
                      className="inline-flex items-center rounded-full border border-cyan-500/24 bg-cyan-500/10 px-4 py-2 text-14 font-semibold text-cyan-700 transition-colors hover:bg-cyan-600 hover:text-white"
                    >
                      Call Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/16 bg-[linear-gradient(140deg,#ffffff_0%,#f7fbff_100%)] p-6 md:p-8 shadow-[0_14px_34px_rgba(47,115,242,0.12)]">
              <p className="inline-flex rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-12 font-semibold uppercase tracking-[0.1em] text-primary">
                Contact Forms
              </p>
              <h3 className="mt-3 text-30 font-semibold text-midnight_text">Choose your purpose</h3>
              <p className="mt-2 text-16 leading-7 text-muted">
                Use dedicated pages for project inquiries and career applications.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Link
                  href="/contact/project-inquiry"
                  className="rounded-2xl border border-primary/20 bg-white p-6 shadow-[0_10px_24px_rgba(47,115,242,0.10)] transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <h4 className="text-22 font-semibold text-midnight_text">Project Inquiry</h4>
                  <p className="mt-2 text-15 leading-7 text-muted">
                    Share your project scope, company details, and requirements.
                  </p>
                </Link>
                <Link
                  href="/contact/career"
                  className="rounded-2xl border border-cyan-500/22 bg-white p-6 shadow-[0_10px_24px_rgba(8,145,178,0.10)] transition-all hover:-translate-y-1 hover:border-cyan-500/45"
                >
                  <h4 className="text-22 font-semibold text-midnight_text">Career</h4>
                  <p className="mt-2 text-15 leading-7 text-muted">
                    Apply for roles by submitting your profile and position details.
                  </p>
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-[0_12px_30px_rgba(47,115,242,0.10)]">
              <iframe
                src="https://www.google.com/maps?q=804,+CUBICSO,+SUPREMUS+II,+Nr.+Time+Circle,+Diwalipura,+Vadodara&output=embed"
                width="100%"
                height="560"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
