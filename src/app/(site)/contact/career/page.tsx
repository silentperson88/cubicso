import HeroSub from "@/components/SharedComponents/HeroSub";
import CareerWeb3Form from "@/components/Contact/CareerWeb3Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Application | Cubicso",
};

const CareerPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
    { href: "/contact/career", text: "Career" },
  ];

  return (
    <>
      <HeroSub
        title="Career Application"
        description="Apply for open roles and share your profile with our hiring team."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 md:py-20 bg-[linear-gradient(145deg,#e8fbff_0%,#eefcff_40%,#f8fdff_100%)]">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="rounded-2xl border border-cyan-500/22 bg-[linear-gradient(145deg,#ffffff_0%,#f3fcff_100%)] p-6 md:p-8 shadow-[0_18px_40px_rgba(8,145,178,0.14)]">
            <p className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-cyan-700">
              Career
            </p>
            <h2 className="mt-3 text-34 font-semibold text-midnight_text">Apply for a role at Cubicso</h2>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-muted">
              Share your professional profile and role preferences. We review each submission carefully.
            </p>
            <CareerWeb3Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
