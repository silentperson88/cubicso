"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(0);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const path = usePathname();

  const hasRichSubmenu = item.submenu?.some(
    (subItem) => subItem.subtitle || subItem.image
  );
  const activeSubmenuItem = item.submenu?.[activeSubmenuIndex];

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimer();
    if (item.submenu) {
      setSubmenuOpen(true);
      setActiveSubmenuIndex(0);
    }
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setSubmenuOpen(false);
    }, 180);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-17 flex font-medium items-center px-3 py-2 rounded-full transition-colors ${
          path === item.href
            ? "text-primary bg-primary/10"
            : "text-midnight_text hover:text-primary hover:bg-primary/10"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <>
          {hasRichSubmenu ? (
            <div
              className="absolute left-0 mt-3 w-[min(92vw,780px)] rounded-2xl border border-primary/20 bg-white/95 backdrop-blur-md shadow-[0_24px_70px_rgba(16,45,71,0.20)] p-3 animate-[submenuUp_.25s_ease-out]"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-3 rounded-xl bg-[#F6FBFF] border border-primary/10 p-2">
                  {item.submenu?.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      onMouseEnter={() => setActiveSubmenuIndex(index)}
                      className={`block rounded-xl px-4 py-3 transition-all ${
                        activeSubmenuIndex === index
                          ? "bg-white shadow-sm border border-primary/20"
                          : "hover:bg-white/80"
                      }`}
                    >
                      <p className="text-midnight_text text-16 font-semibold">
                        {subItem.label}
                      </p>
                      {subItem.subtitle && (
                        <p className="text-muted text-14 mt-1">{subItem.subtitle}</p>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="col-span-3 rounded-xl overflow-hidden border border-primary/15 bg-white relative min-h-[310px]">
                  {activeSubmenuItem?.image ? (
                    <>
                      <Image
                        src={activeSubmenuItem.image}
                        alt={activeSubmenuItem.label}
                        width={420}
                        height={360}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/65 to-transparent">
                        <p className="text-white text-15 font-semibold">
                          {activeSubmenuItem.label}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted text-14">
                      Select a service
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="absolute py-2 left-0 mt-2 w-60 bg-white shadow-xl rounded-xl border border-black/5"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={handleMouseLeave}
            >
              {item.submenu?.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`block px-4 py-2 ${
                    path === subItem.href
                      ? "text-white  bg-primary"
                      : " text-midnight_text hover:bg-primary hover:text-white"
                  }`}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
          <style jsx>{`
            @keyframes submenuUp {
              from {
                opacity: 0;
                transform: translateY(8px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
          `}</style>
        </>
      )}
    </div>
  );
};

export default HeaderLink;
