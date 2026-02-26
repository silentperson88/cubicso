import HeroSub from "@/components/SharedComponents/HeroSub";
import ProjectInquiryWeb3Form from "@/components/Contact/ProjectInquiryWeb3Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Inquiry | Cubicso",
};

const ProjectInquiryPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
    { href: "/contact/project-inquiry", text: "Project Inquiry" },
  ];

  return (
    <>
      <HeroSub
        title="Project Inquiry"
        description="Share project details and our team will connect with the right engagement plan."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="py-16 md:py-20 bg-[linear-gradient(145deg,#e5f1ff_0%,#edf7ff_40%,#f8fbff_100%)]">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="rounded-2xl border border-primary/18 bg-[linear-gradient(145deg,#ffffff_0%,#f6faff_100%)] p-6 md:p-8 shadow-[0_18px_40px_rgba(47,115,242,0.14)]">
            <p className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-primary">
              Project Inquiry
            </p>
            <h2 className="mt-3 text-34 font-semibold text-midnight_text">Tell us about your project</h2>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-muted">
              Share your project context and requirements. Our team will review and respond with a practical next step.
            </p>
            <ProjectInquiryWeb3Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInquiryPage;
