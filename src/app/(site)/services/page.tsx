import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Link from "next/link";
import { companyProfile } from "@/data/companyProfile";

export const metadata: Metadata = {
  title: "Services | Cubicso",
};

const ServicesPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  return (
    <>
      <HeroSub
        title="Services"
        description="Heavy Infrastructure, Industrial, and Renewable Energy execution with safety-first delivery discipline."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 relative overflow-hidden bg-[linear-gradient(155deg,#eef8ff_0%,#f7fbff_46%,#ffffff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_15%,rgba(47,115,242,0.10),transparent_35%),radial-gradient(circle_at_88%_82%,rgba(70,196,255,0.12),transparent_40%)]"></div>
        <div className="mx-auto w-full max-w-[1860px] px-3 md:px-5 relative">
          <div className="text-center">
            <p className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1.5 text-14 text-primary font-medium">
              Service Divisions
            </p>
            <h2 className="mt-4 text-40 font-semibold text-midnight_text">
              Capability built for complex execution environments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <p className="text-22 font-semibold text-midnight_text">Heavy Engineering</p>
              <p className="mt-2 text-muted">
                Civil and industrial-scale execution capability for complex programs.
              </p>
              <Link
                href="/services/heavy-engineering"
                className="mt-4 inline-flex items-center rounded-lg border border-primary/20 bg-[#eef7ff] px-4 py-2 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <p className="text-22 font-semibold text-midnight_text">Renewable Energy</p>
              <p className="mt-2 text-muted">
                Utility-scale solar delivery from planning to installation.
              </p>
              <Link
                href="/services/renewable-energy"
                className="mt-4 inline-flex items-center rounded-lg border border-primary/20 bg-[#eef7ff] px-4 py-2 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                View Details
              </Link>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm">
              <p className="text-22 font-semibold text-midnight_text">Advisory & Robotics</p>
              <p className="mt-2 text-muted">
                Wealth advisory plus turnkey robotics automation across packaging, warehouse, and process systems.
              </p>
              <div className="mt-4 flex gap-2">
                <Link
                  href="/services/wealth-management"
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-[#eef7ff] px-3 py-2 text-primary text-14 font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Wealth
                </Link>
                <Link
                  href="/services/robotics"
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-[#eef7ff] px-3 py-2 text-primary text-14 font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Robotics
                </Link>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            <div className="rounded-2xl border border-primary/15 bg-white p-7 shadow-sm">
              <h3 className="text-24 font-semibold text-midnight_text">Quality Policy</h3>
              <p className="mt-3 text-muted leading-7">{companyProfile.policies.quality}</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white p-7 shadow-sm">
              <h3 className="text-24 font-semibold text-midnight_text">HSE Policy</h3>
              <p className="mt-3 text-muted leading-7">{companyProfile.policies.hse}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
