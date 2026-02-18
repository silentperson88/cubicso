"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const heroSlides = [
  {
    title: "Heavy Engineering",
    image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
    description:
      "Scalable industrial solutions built for precision manufacturing, critical infrastructure, and high-performance operations.",
  },
  {
    title: "Robotics",
    image: "/images/pillars/robotics.png",
    description:
      "Intelligent automation systems that improve throughput, reduce operational friction, and enable safer workflows.",
  },
  {
    title: "Wealth Management",
    image: "/images/pillars/wealth_management.png",
    description:
      "Modern financial strategies that help protect capital, optimize portfolios, and support long-term growth decisions.",
  },
  {
    title: "Renewable Energy",
    image: "/images/pillars/renewable_energy.png",
    description:
      "Future-ready clean energy initiatives focused on sustainable generation, resilient grids, and measurable impact.",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative pt-44 mb-14 overflow-hidden">
      <div
        className="w-full h-full absolute z-0 rounded-b-[119px] -left-1/4 top-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(219,240,255,1) 0%, rgba(236,247,255,1) 32%, rgba(255,255,255,1) 72%)",
        }}
      ></div>
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl hero-orb-1"></div>
      <div className="absolute top-56 -left-20 h-56 w-56 rounded-full bg-sky_blue/25 blur-3xl hero-orb-2"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(47,115,242,0.12),transparent_45%),radial-gradient(circle_at_18%_70%,rgba(70,196,255,0.16),transparent_42%)]"></div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-center gap-y-10">
          <div className="lg:col-span-6 col-span-12">
            <p className="inline-flex items-center rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-14 font-semibold text-primary mb-5">
              Sector Focused Growth
            </p>
            <h1 className="md:text-56 sm:text-44 text-30 leading-tight text-midnight_text lg:text-start mb-7 lg:w-full w-11/12 font-semibold">
              Industry-ready solutions for
              <span className="block mt-2 bg-border md:text-50 text-36 rounded-xl lg:text-start text-primary max-w-max px-3 py-1 shadow-sm">
                {currentSlide.title}
              </span>
            </h1>
            <p className="sm:text-19 text-16 text-muted text-start lg:max-w-[95%] sm:max-w-75%">
              {currentSlide.description}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="h-11 w-11 rounded-full border border-primary/30 bg-white/90 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Icon icon="solar:alt-arrow-left-linear" width="18" height="18" className="mx-auto" />
              </button>
              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="h-11 w-11 rounded-full border border-primary/30 bg-white/90 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
              >
                <Icon icon="solar:alt-arrow-right-linear" width="18" height="18" className="mx-auto" />
              </button>
              <div className="ml-2 flex items-center gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-primary/25"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
          <div className="lg:col-span-6 col-span-12 pl-20 lg:block hidden">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-r from-primary/25 via-sky_blue/20 to-primary/20 blur-xl hero-frame"></div>
              <div className="absolute -left-6 top-20 h-24 w-24 rounded-2xl border border-white/60 bg-white/45 backdrop-blur-md hero-float-card"></div>
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                width={500}
                height={560}
                className="relative w-full max-w-[500px] h-[560px] rounded-3xl object-cover border border-primary/20 shadow-2xl"
              />
              <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-3 border border-primary/20 shadow-md">
                <p className="text-14 text-muted">Current Focus</p>
                <p className="text-18 font-semibold text-midnight_text">
                  {currentSlide.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[200%] h-24 hero-wave opacity-60"></div>
      <style jsx>{`
        .hero-orb-1 {
          animation: driftOne 11s ease-in-out infinite;
        }
        .hero-orb-2 {
          animation: driftTwo 9s ease-in-out infinite;
        }
        .hero-frame {
          animation: glowPulse 6s ease-in-out infinite;
        }
        .hero-float-card {
          animation: floatCard 5s ease-in-out infinite;
        }
        .hero-wave {
          background: radial-gradient(
              70% 130% at 25% 100%,
              rgba(47, 115, 242, 0.25) 0%,
              transparent 65%
            ),
            radial-gradient(
              70% 120% at 55% 100%,
              rgba(70, 196, 255, 0.3) 0%,
              transparent 68%
            ),
            radial-gradient(
              70% 120% at 85% 100%,
              rgba(47, 115, 242, 0.22) 0%,
              transparent 66%
            );
          animation: moveWave 14s linear infinite;
        }
        @keyframes driftOne {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-24px, 16px);
          }
        }
        @keyframes driftTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -14px);
          }
        }
        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.85;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes moveWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
