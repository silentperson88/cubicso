import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="pt-10 mt-14 bg-midnight_text">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-30 font-semibold text-white">Cubicso</h3>
              <p className="text-foottext mt-3 max-w-[560px]">
                Strategy and execution partner for Heavy Engineering, Robotics,
                Wealth Management, and Renewable Energy transformation programs.
              </p>
            </div>
            <div>
              <div className="flex items-start text-foottext text-16">
                <Icon
                  icon="weui:location-outlined"
                  className="w-6 h-6 mr-3 mt-1 shrink-0"
                />
                <p>
                  Address: 804, Supremus ll, Near ward No. 11 office vasna road,
                  diwalipura, vadodara-390007.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-5">
                <Link href="/" className="text-foottext hover:text-primary">
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-foottext hover:text-primary"
                >
                  Services
                </Link>
                <Link href="/contact" className="text-foottext hover:text-primary">
                  Contact
                </Link>
                <Link
                  href="/documentation#version"
                  className="text-foottext hover:text-primary"
                >
                  Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-8 mt-2">
          <p className="text-15 text-foottext">
            © 2026 Cubicso. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
