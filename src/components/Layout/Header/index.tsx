"use client";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3">
      <div
        className={`relative mx-auto container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) rounded-2xl border transition-all overflow-visible ${
          sticky
            ? "bg-white/92 shadow-xl border-primary/20 backdrop-blur-xl"
            : "bg-white/85 border-primary/10"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(70,196,255,0.20),rgba(47,115,242,0.10),rgba(255,255,255,0.60))]" />
        <div className="pointer-events-none absolute -top-10 -left-8 h-24 w-24 rounded-full bg-sky_blue/30 blur-2xl header-blob-a" />
        <div className="pointer-events-none absolute -bottom-12 right-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl header-blob-b" />
        <div className="flex justify-between lg:items-center xl:gap-16 lg:gap-8 px-4 py-4">
          <Logo />
          <nav className="hidden lg:flex grow items-center xl:justify-start justify-center gap-2 text-17 text-midnight_text relative z-10">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg border border-primary/30 text-primary bg-white/80"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-primary"></span>
              <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
            </button>
          </div>
        </div>
      </div>
      {navbarOpen && <div className="fixed inset-0 bg-black/30 lg:hidden" />}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 max-w-xs z-50 ${
          navbarOpen ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text">Menu</h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 gap-1">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
        </nav>
      </div>
      <style jsx>{`
        .header-blob-a {
          animation: headerFloatA 8s ease-in-out infinite;
        }
        .header-blob-b {
          animation: headerFloatB 10s ease-in-out infinite;
        }
        @keyframes headerFloatA {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(16px, 10px);
          }
        }
        @keyframes headerFloatB {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-14px, -12px);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
