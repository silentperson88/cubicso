import Link from "next/link";
import { companyProfile } from "@/data/companyProfile";
import { Icon } from "@iconify/react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/about/projects" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Insights", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const aboutLinks = [
    { label: "Who Are We", href: "/about/who-are-we" },
    { label: "Our Approach", href: "/about/our-approach" },
    {
      label: "Client Integration",
      href: "/about/integration-with-client-organisation",
    },
    { label: "Policies", href: "/about/policies" },
  ];

  const serviceLinks = [
    { label: "Heavy Engineering", href: "/services/heavy-engineering" },
    { label: "Renewable Energy", href: "/services/renewable-energy" },
    { label: "Wealth Management", href: "/services/wealth-management" },
    { label: "Robotics", href: "/services/robotics" },
  ];

  return (
    <footer className="pt-12 mt-14 relative overflow-hidden bg-midnight_text">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(47,115,242,0.28),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(70,196,255,0.22),transparent_36%)]"></div>
      <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-sky_blue/20 blur-3xl"></div>

      <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5 relative">
        <div className="rounded-[28px] border border-white/12 bg-[linear-gradient(140deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_100%)] px-6 py-8 md:px-10 md:py-10 backdrop-blur-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-12 font-semibold tracking-[0.03em] text-white shadow-sm">
                <span className="h-2 w-2 rounded-full bg-sky_blue"></span>
                CUBICSO ENTERPRISE
              </p>
              <h3 className="text-34 font-semibold text-white mt-3">
                Cubicso
              </h3>
              <p className="text-foottext mt-3 max-w-[560px] leading-7">
                Values-led execution partner for Heavy Engineering, Renewable
                Energy, Wealth Management, and Robotics-focused programs across
                India.
              </p>
              <p className="text-foottext mt-3 max-w-[560px] leading-7">
                We deliver programs with structured governance, field-ready
                engineering, and a clear focus on safety, schedule, and quality.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {companyProfile.values.map((value, index) => (
                  <span
                    key={value}
                    className={`rounded-full border px-3 py-1 text-12 font-semibold text-white ${
                      index % 2 === 0
                        ? "border-[#46c4ff]/35 bg-[#46c4ff]/15"
                        : "border-[#818cf8]/35 bg-[#818cf8]/15"
                    }`}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-[linear-gradient(110deg,rgba(47,115,242,0.95)_0%,rgba(70,196,255,0.92)_100%)] px-5 py-2.5 text-white font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(47,115,242,0.40)]"
              >
                <Icon icon="solar:chat-round-dots-bold" width="16" height="16" />
                Start A Conversation
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <div>
                <p className="inline-flex rounded-full border border-white/18 bg-white/8 px-3 py-1 text-white text-12 font-semibold tracking-[0.03em] uppercase">
                  Navigation
                </p>
                <div className="mt-4 space-y-2.5">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-foottext hover:text-white transition-colors"
                    >
                      <Icon icon="solar:alt-arrow-right-linear" width="13" height="13" />
                      {link.label}
                    </Link>
                  ))}
                </div>
                <p className="inline-flex rounded-full border border-white/18 bg-white/8 px-3 py-1 text-white text-12 font-semibold tracking-[0.03em] uppercase mt-6">
                  Services
                </p>
                <div className="mt-3 space-y-2.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 text-foottext hover:text-white transition-colors"
                    >
                      <Icon icon="solar:alt-arrow-right-linear" width="13" height="13" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="inline-flex rounded-full border border-white/18 bg-white/8 px-3 py-1 text-white text-12 font-semibold tracking-[0.03em] uppercase">
                  About Us Sections
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2.5">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-foottext hover:text-white transition-colors"
                    >
                      <Icon icon="solar:alt-arrow-right-linear" width="13" height="13" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="inline-flex rounded-full border border-white/18 bg-white/8 px-3 py-1 text-white text-12 font-semibold tracking-[0.03em] uppercase">
                  Contact
                </p>
                <div className="mt-4 space-y-3">
                  <p className="text-foottext leading-7">
                    <span className="text-white/90 font-medium">Address:</span>{" "}
                    {companyProfile.contact.postalAddress.join(", ")}
                  </p>
                  <p className="text-foottext flex items-start gap-2">
                    <Icon icon="solar:letter-bold" width="15" height="15" className="mt-1 text-sky_blue" />
                    <a
                      href={`mailto:${companyProfile.contact.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {companyProfile.contact.email}
                    </a>
                  </p>
                  <p className="text-foottext flex items-start gap-2">
                    <Icon icon="solar:phone-bold" width="15" height="15" className="mt-1 text-sky_blue" />
                    <a
                      href={`tel:${companyProfile.contact.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {companyProfile.contact.phone}
                    </a>
                  </p>
                  <p className="text-foottext flex items-start gap-2">
                    <Icon icon="solar:printer-minimalistic-bold" width="15" height="15" className="mt-1 text-sky_blue" />
                    Fax: {companyProfile.contact.fax}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-7 mt-1">
          <p className="text-15 text-foottext">
            (c) 2026 Cubicso Enterprise Private Limited. All rights reserved.
          </p>
          <p className="text-14 text-foottext">
            Safety. Integrity. Quality. Innovation. Teamwork.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

