import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Contact | Cubicso",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];

  const contactCards = [
    {
      title: "Office",
      value:
        "804, Supremus ll, Near ward No. 11 office vasna road, diwalipura, vadodara-390007.",
      icon: "weui:location-outlined",
    },
    {
      title: "Email",
      value: "info@cubicso.com",
      icon: "clarity:email-line",
    },
    {
      title: "Phone",
      value: "+91 00000 00000",
      icon: "majesticons:phone-retro-line",
    },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Connect with Cubicso for strategic programs across Heavy Engineering, Robotics, Wealth Management, and Renewable Energy."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="py-16 relative overflow-hidden bg-[linear-gradient(155deg,#eef8ff_0%,#f7fbff_46%,#ffffff_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_15%,rgba(47,115,242,0.10),transparent_35%),radial-gradient(circle_at_88%_82%,rgba(70,196,255,0.12),transparent_40%)]"></div>
        <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-sky_blue/20 blur-3xl"></div>
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-primary/15 bg-white/95 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_16px_45px_rgba(16,45,71,0.15)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-[#eef7ff] flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/15">
                    <Icon icon={card.icon} className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-22 font-semibold text-midnight_text">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted leading-7">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-primary/15 bg-white shadow-[0_10px_30px_rgba(16,45,71,0.08)]">
            <Image
              src="/images/contact-page/contact.jpg"
              alt="Cubicso contact"
              width={1400}
              height={420}
              className="w-full h-[260px] md:h-[340px] object-cover"
            />
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-primary/15 bg-white shadow-[0_10px_30px_rgba(16,45,71,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=804,+Supremus+II,+Near+Ward+No.+11+Office,+Vasna+Road,+Diwalipura,+Vadodara+390007&output=embed"
              width="100%"
              height="560"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
