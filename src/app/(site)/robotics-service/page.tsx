import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { serviceDetails } from "@/data/serviceDetails";

export const metadata: Metadata = {
  title: "AI Robotics and Automation | Cubicso",
};

const RoboticsServicePage = () => {
  const robotics = serviceDetails.robotics;

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services/ai-robotics-and-automation", text: "AI Robotics and Automation" },
  ];

  const coreSolutions = [
    {
      title: "Packaging Automation",
      points: [
        "Conveyor Systems",
        "Case Erectors",
        "Case Packers",
        "Sealing and Taping Systems",
        "Checkweighers",
        "Labeling and Vision Inspection",
      ],
    },
    {
      title: "Robotic Automation",
      points: [
        "Pick and Place Systems",
        "Robotic Palletizers (Bag / Box / Drum)",
        "AMR (Autonomous Mobile Robots)",
        "Stretch Wrapping Systems",
      ],
    },
    {
      title: "Warehouse Automation",
      points: ["ASRS (Automated Storage and Retrieval Systems)", "Smart Racking Systems"],
    },
    {
      title: "Filling and Industrial Systems",
      points: ["Drum Filling Systems", "IoT Monitoring and Control"],
    },
  ];

  const industries = [
    "Chemicals",
    "Specialty Chemicals",
    "Pharmaceuticals",
    "Paint and Coatings",
    "Adhesives",
    "Resins",
    "Agro Chemicals",
    "Dairy and Food",
    "Distilleries",
    "Electrical Appliances",
    "FMCG",
    "Automobile",
    "Petroleum",
  ];

  const whyChooseUs = [
    "End-to-End Turnkey Automation",
    "Custom Engineered Solutions",
    "Robotics + Mechanical Expertise",
    "Industry 4.0 Ready (IoT Enabled)",
    "Strong After-Sales Support",
  ];

  const strengths = [
    "Experienced Engineering Team",
    "Custom Design and Fabrication",
    "Integration with Global Robotics",
    "Strong Installation and Service Network",
    "Scalable rollout from pilot to multi-line operations",
  ];

  const packagingSystems = [
    "Automatic Conveyor Systems",
    "Case Erector (Robotic + Gantry)",
    "Case Packer (Robotic)",
    "Flap Closure and Taping System",
    "H-Type Sealer",
    "Checkweigher",
    "Labeling Machine",
    "Vision Inspection System",
  ];

  const roboticSystems = [
    "Pick and Place Automation",
    "Robotic Palletizer (Bag / Box / Drum)",
    "Stretch Wrapping Systems",
    "AMR (Autonomous Mobile Robots)",
  ];

  const warehouseSystems = ["ASRS Systems", "Smart Racking + Storage"];
  const fillingSystems = ["Drum Filling (Robotic + Gantry)", "IoT Monitoring and Data Systems"];

  const technologyStack = [
    "IoT-enabled monitoring",
    "Real-time production analytics",
    "Predictive maintenance",
    "Smart dashboards",
    "High-speed robotic arms",
    "Vision-guided automation",
    "AI-based inspection systems",
  ];

  const projectTemplate = [
    "Client Industry",
    "Problem Statement",
    "Solution Provided",
    "Machines Installed",
    "Productivity Improvement (%)",
    "Images / Video Evidence",
  ];

  return (
    <>
      <HeroSub
        title="AI Robotics and Automation"
        description="Smart automation for smarter manufacturing with turnkey robotics, packaging, warehouse, and process systems."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="relative overflow-hidden bg-[linear-gradient(150deg,#bcc8d6_0%,#c9d4e0_30%,#d6dee8_58%,#c0ccd9_100%)] py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(30,58,138,0.16),transparent_34%),radial-gradient(circle_at_86%_22%,rgba(14,116,144,0.12),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(71,85,105,0.18),transparent_36%)]"></div>
        <div className="relative mx-auto w-full max-w-[1860px] space-y-10 px-3 md:px-5">
          <div className="relative overflow-hidden rounded-[32px] border border-white/18 bg-[linear-gradient(130deg,#0b1140_0%,#121954_48%,#0a214f_100%)] p-6 shadow-[0_22px_46px_rgba(8,12,38,0.35)] md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-35"></div>
            <div className="pointer-events-none absolute right-[-220px] top-[-160px] h-[460px] w-[460px] rounded-full bg-cyan-400/25 blur-3xl"></div>
            <div className="pointer-events-none absolute bottom-[-160px] left-[38%] h-[380px] w-[380px] rounded-full bg-indigo-500/30 blur-3xl"></div>

            <div className="relative z-10 grid items-center gap-5 lg:grid-cols-2">
              <div>
                <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1.5 text-13 font-semibold uppercase tracking-[0.12em] text-cyan-100">
                  Robotics Intelligence
                </p>
                <h1 className="mt-4 text-48 font-bold leading-[1.02] text-white sm:text-56 lg:text-[84px]">
                  FOR THE
                  <br />
                  <span className="bg-[linear-gradient(90deg,#5ea0ff_0%,#8c85ff_35%,#ff8c73_100%)] bg-clip-text text-transparent">
                    FUTURE
                  </span>
                  <br />
                  LIFE
                </h1>
                <p className="mt-5 max-w-[760px] text-20 leading-9 text-slate-100/90">
                  We are advisors, engineers, and designers solving business challenges with
                  innovative robotics, automation, and Industry 4.0 solutions.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#products"
                    className="inline-flex items-center rounded-full border border-cyan-200/40 bg-cyan-300/15 px-6 py-3 text-16 font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/25"
                  >
                    View Products
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[420px] lg:min-h-[560px] lg:-ml-8">
                <Image
                  src="/images/service/robotics/robote-shape.png"
                  alt="Robotics hero"
                  fill
                  priority
                  className="object-contain object-right mix-blend-screen drop-shadow-[0_14px_34px_rgba(57,189,248,0.35)]"
                />
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 rounded-3xl border border-slate-400/70 bg-[linear-gradient(140deg,#f5f8fc_0%,#dbe3ec_55%,#eef3f8_100%)] p-6 shadow-[0_18px_42px_rgba(15,23,42,0.22)] lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full border border-primary/22 bg-primary/10 px-4 py-1.5 text-13 font-semibold uppercase tracking-[0.12em] text-primary">
                About Us
              </p>
              <h2 className="mt-4 text-36 font-semibold leading-tight text-midnight_text">
                Smart Automation for Smarter Manufacturing
              </h2>
              <p className="mt-4 text-17 leading-8 text-muted">
                We are a leading provider of industrial automation, robotic systems, and packaging solutions
                serving diverse manufacturing sectors. Our solutions are engineered for high performance,
                reliability, safety, and scalability.
              </p>
              <p className="mt-3 text-17 leading-8 text-muted">{robotics.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl border border-[#1e3a8a] bg-[#1e3a8a] px-5 py-2.5 text-14 font-semibold text-white transition-colors hover:bg-transparent hover:text-[#1e3a8a]"
                >
                  Get a Quote
                </Link>
                <Link
                  href="#products"
                  className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2.5 text-14 font-semibold text-cyan-700 transition-colors hover:bg-cyan-600 hover:text-white"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-cyan-300/20 blur-xl"></div>
              <Image
                src={robotics.heroImage}
                alt="AI Robotics and Automation service"
                width={960}
                height={620}
                className="relative h-[380px] w-full rounded-3xl border border-primary/18 object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-violet-400/30 bg-[linear-gradient(132deg,#fff8f2_0%,#f5ecff_52%,#ecf4ff_100%)] p-6 md:p-8 shadow-[0_18px_36px_rgba(91,33,182,0.14)]">
            <p className="inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-violet-700">
              Strategic Direction
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Mission and Vision</h3>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-slate-700">
              Our long-term direction combines advanced automation thinking with execution rigor on plant floors.
            </p>
            <div className="mt-4 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-violet-400/25 bg-white/95 p-6 shadow-[0_12px_24px_rgba(91,33,182,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="inline-flex rounded-full border border-violet-400/25 bg-violet-100 px-3 py-1 text-12 font-semibold uppercase tracking-[0.08em] text-violet-700">Our Mission</p>
                <p className="mt-3 text-16 text-slate-700 leading-7">
                  To transform manufacturing through intelligent automation and robotics.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-400/30 bg-[linear-gradient(130deg,#f8fdff_0%,#e8f4ff_100%)] p-6 shadow-[0_12px_24px_rgba(3,105,161,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="inline-flex rounded-full border border-sky-400/25 bg-sky-100 px-3 py-1 text-12 font-semibold uppercase tracking-[0.08em] text-sky-700">Our Vision</p>
                <p className="mt-3 text-16 text-slate-700 leading-7">
                  To become a global leader in industrial automation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-400/30 bg-[linear-gradient(132deg,#f2fff8_0%,#dcf7ea_58%,#e8f5ff_100%)] p-6 md:p-8 shadow-[0_18px_36px_rgba(5,150,105,0.14)]">
            <p className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-emerald-700">
              Solution Portfolio
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Our Core Solutions</h3>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-slate-700">
              Integrated systems from packaging to warehouse automation, engineered for reliability, throughput, and scalability.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {coreSolutions.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-500/20 bg-white/95 p-6 shadow-[0_10px_24px_rgba(5,150,105,0.10)] transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-100 px-2.5 py-1 text-11 font-semibold uppercase tracking-[0.08em] text-emerald-700">
                    Module {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-22 font-semibold text-midnight_text">{item.title}</p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-slate-700">
                        <span className="mt-[6px] inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-100 text-[10px] text-emerald-700">+</span>
                        <span className="leading-7">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="products" className="rounded-3xl border border-amber-400/35 bg-[linear-gradient(132deg,#fff8ed_0%,#f9ecd7_58%,#f3f1ff_100%)] p-6 md:p-8 shadow-[0_18px_36px_rgba(180,83,9,0.14)]">
            <p className="inline-flex rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-amber-700">
              Product Stack
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Products and Systems</h3>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-slate-700">
              Modular building blocks designed to fit new lines, retrofits, and high-throughput production environments.
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-400/30 bg-white/95 p-6 shadow-[0_10px_24px_rgba(180,83,9,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="text-19 font-semibold text-midnight_text">Packaging Systems</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {packagingSystems.map((item) => (
                    <span key={item} className="rounded-full border border-amber-400/30 bg-amber-50 px-3.5 py-1.5 text-13 font-semibold text-amber-900">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-indigo-300/35 bg-white/95 p-6 shadow-[0_10px_24px_rgba(79,70,229,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="text-19 font-semibold text-midnight_text">Robotic Systems</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {roboticSystems.map((item) => (
                    <span key={item} className="rounded-full border border-indigo-300/35 bg-indigo-50 px-3.5 py-1.5 text-13 font-semibold text-indigo-900">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-teal-300/35 bg-white/95 p-6 shadow-[0_10px_24px_rgba(13,148,136,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="text-19 font-semibold text-midnight_text">Warehouse Automation</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {warehouseSystems.map((item) => (
                    <span key={item} className="rounded-full border border-teal-300/35 bg-teal-50 px-3.5 py-1.5 text-13 font-semibold text-teal-900">{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-rose-300/35 bg-white/95 p-6 shadow-[0_10px_24px_rgba(225,29,72,0.10)] transition-all duration-300 hover:-translate-y-1">
                <p className="text-19 font-semibold text-midnight_text">Filling and Process Systems</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {fillingSystems.map((item) => (
                    <span key={item} className="rounded-full border border-rose-300/35 bg-rose-50 px-3.5 py-1.5 text-13 font-semibold text-rose-900">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-orange-300/40 bg-[linear-gradient(130deg,#fff8f0_0%,#ffeeda_48%,#fff4ea_100%)] p-6 md:p-8 shadow-[0_18px_34px_rgba(194,65,12,0.13)]">
            <p className="inline-flex rounded-full border border-orange-400/25 bg-orange-100 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-orange-700">
              Sector Coverage
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Industries We Serve</h3>
            <p className="mt-2 max-w-3xl text-16 leading-7 text-slate-700">
              Cross-industry implementations with domain-aware automation patterns.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, index) => (
                <span key={item} className="flex items-center gap-2 rounded-xl border border-orange-300/35 bg-white/95 px-4 py-3 text-14 font-semibold text-slate-800 shadow-[0_6px_16px_rgba(194,65,12,0.08)]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">
                    {index + 1}
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-300/35 bg-[linear-gradient(130deg,#0b1933_0%,#10274f_52%,#153860_100%)] p-6 md:p-8 shadow-[0_20px_36px_rgba(2,6,23,0.38)]">
            <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-cyan-100">
              Technology Stack
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-white">Technology</h3>
            <p className="mt-2 text-16 leading-7 text-slate-200">Industry 4.0 ready solutions with robotics integration and smart analytics.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {technologyStack.map((item, index) => (
                <div key={item} className="rounded-xl border border-cyan-300/25 bg-white/10 px-4 py-3.5 text-cyan-50 shadow-[0_8px_18px_rgba(8,145,178,0.15)] backdrop-blur-sm">
                  <p className="text-11 font-semibold uppercase tracking-[0.09em] text-cyan-200">
                    Tech {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-15 leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-fuchsia-300/35 bg-[linear-gradient(130deg,#fff6fd_0%,#f5ecff_52%,#f1edff_100%)] p-6 md:p-8 shadow-[0_18px_34px_rgba(147,51,234,0.12)]">
            <p className="inline-flex rounded-full border border-fuchsia-400/25 bg-fuchsia-100 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-fuchsia-700">
              Delivery Advantage
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Why Choose Us</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <div key={item} className="rounded-2xl border border-fuchsia-300/30 bg-white/95 p-5 shadow-[0_8px_20px_rgba(147,51,234,0.10)] transition-all duration-300 hover:-translate-y-1">
                  <p className="text-12 font-semibold uppercase tracking-[0.08em] text-fuchsia-700">
                    Value {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-16 leading-7 font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-300/40 bg-[linear-gradient(128deg,#f2fff8_0%,#def7eb_100%)] p-6 shadow-[0_12px_26px_rgba(5,150,105,0.12)]">
              <h3 className="text-28 font-semibold text-midnight_text">Our Strengths</h3>
              <div className="mt-4 space-y-3">
                {strengths.map((item) => (
                  <p key={item} className="flex items-start gap-2.5 text-slate-700 leading-7">
                    <span className="mt-[6px] inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-100 text-[10px] text-emerald-700">+</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-300/40 bg-[linear-gradient(128deg,#eef8ff_0%,#dbeeff_100%)] p-6 shadow-[0_12px_26px_rgba(2,132,199,0.14)]">
              <h3 className="text-28 font-semibold text-midnight_text">Package (Packaging Systems)</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {packagingSystems.map((item) => (
                  <span key={item} className="rounded-full border border-sky-300/35 bg-white px-3.5 py-1.5 text-13 font-semibold text-sky-900 shadow-[0_6px_14px_rgba(2,132,199,0.10)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-rose-300/35 bg-[linear-gradient(132deg,#fff5f6_0%,#fdecec_50%,#f1f1ff_100%)] p-6 md:p-8 shadow-[0_18px_36px_rgba(190,24,93,0.12)]">
            <p className="inline-flex rounded-full border border-rose-400/25 bg-rose-100 px-3 py-1 text-12 font-semibold uppercase tracking-[0.09em] text-rose-700">
              Case Study Framework
            </p>
            <h3 className="mt-3 text-34 font-semibold leading-tight text-midnight_text">Projects and Case Studies</h3>
            <p className="mt-2 text-16 leading-7 text-slate-700">Every case study should capture the following structure for measurable impact reporting.</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {projectTemplate.map((item, index) => (
                <div key={item} className="rounded-xl border border-rose-300/30 bg-white/95 px-4 py-3 text-midnight_text shadow-[0_8px_18px_rgba(190,24,93,0.08)]">
                  <p className="text-11 font-semibold uppercase tracking-[0.08em] text-rose-700">Step {String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {robotics.projectTypes.map((project) => (
                <div key={project.title} className="overflow-hidden rounded-2xl border border-rose-300/30 bg-white shadow-[0_12px_26px_rgba(190,24,93,0.10)] transition-all duration-300 hover:-translate-y-1">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={720}
                    height={360}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-20 font-semibold text-midnight_text">{project.title}</p>
                    <p className="mt-2 text-muted">{project.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-[linear-gradient(132deg,#f4fbff_0%,#e9f7ff_58%,#edf4fa_100%)] p-6 md:p-8 shadow-[0_14px_34px_rgba(34,211,238,0.14)]">
            <h3 className="text-30 font-semibold text-midnight_text">Capabilities Matrix</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {robotics.capabilities.map((item, index) => (
                <div key={item} className="rounded-xl border border-cyan-400/25 bg-white p-4">
                  <p className="text-12 font-semibold uppercase tracking-[0.08em] text-cyan-700">
                    Capability {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-300/70 bg-[linear-gradient(128deg,#f5f9fc_0%,#e8eff5_100%)] p-6 shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
              <h3 className="text-24 font-semibold text-midnight_text">Delivery Methodology</h3>
              <div className="mt-4 space-y-2.5">
                {robotics.methodology.map((step, index) => (
                  <p key={step} className="text-muted leading-7">
                    <span className="mr-2 font-semibold text-slate-700">{index + 1}.</span>
                    {step}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-300/35 bg-[linear-gradient(128deg,#f7f9ff_0%,#eceffd_100%)] p-6 shadow-[0_10px_24px_rgba(79,70,229,0.12)]">
              <h3 className="text-24 font-semibold text-midnight_text">Tools and Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {robotics.toolsAndTech.map((tool) => (
                  <span key={tool} className="rounded-full border border-indigo-300/35 bg-white px-3 py-1.5 text-13 text-midnight_text">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-[linear-gradient(130deg,#f4fbff_0%,#e9f7ff_100%)] p-6 md:p-8 shadow-[0_14px_32px_rgba(34,211,238,0.14)]">
            <h3 className="text-30 font-semibold text-midnight_text">Industry Use Cases</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {robotics.useCases.map((item) => (
                <div key={item.title} className="rounded-2xl border border-cyan-400/25 bg-white p-5">
                  <p className="text-18 font-semibold text-midnight_text">{item.title}</p>
                  <p className="mt-2 text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300/70 bg-[linear-gradient(130deg,#f5f8fb_0%,#e9eff6_100%)] p-6 md:p-8 shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
            <h3 className="text-30 font-semibold text-midnight_text">KPI Outcomes</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-4">
              {robotics.kpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-slate-300/70 bg-white p-4">
                  <p className="text-24 font-semibold text-slate-700">{kpi.value}</p>
                  <p className="mt-1 text-14 text-muted">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-indigo-300/35 bg-[linear-gradient(128deg,#f7f9ff_0%,#eceffd_100%)] p-6 shadow-[0_10px_24px_rgba(79,70,229,0.12)]">
              <h3 className="text-24 font-semibold text-midnight_text">Compliance and Governance</h3>
              <div className="mt-4 space-y-2.5">
                {robotics.compliance.map((item) => (
                  <p key={item} className="text-muted">{item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-[linear-gradient(128deg,#f4fbff_0%,#e8f7ff_100%)] p-6 shadow-[0_10px_24px_rgba(34,211,238,0.12)]">
              <h3 className="text-24 font-semibold text-midnight_text">Team Composition</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {robotics.team.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-400/30 bg-white px-3 py-1.5 text-13 text-midnight_text">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-300/35 bg-[linear-gradient(132deg,#f7f9ff_0%,#edf2ff_100%)] p-6 md:p-8 shadow-[0_14px_30px_rgba(79,70,229,0.12)]">
            <h3 className="text-30 font-semibold text-midnight_text">FAQs</h3>
            <div className="mt-4 space-y-3">
              {robotics.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-primary/18 bg-white px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-midnight_text">{faq.question}</summary>
                  <p className="mt-2 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300/70 bg-[linear-gradient(135deg,#f5f8fc_0%,#e9eff6_100%)] p-6 md:p-8 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <h3 className="text-30 font-semibold text-midnight_text">Onsite Robotics Gallery</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {robotics.galleryImages?.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Robotics gallery ${index + 1}`}
                  width={760}
                  height={460}
                  className="h-52 w-full rounded-2xl border border-primary/15 object-cover"
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#1e3a8a]/35 bg-[linear-gradient(120deg,#0f172a_0%,#1e3a8a_52%,#0891b2_100%)] p-7 text-center shadow-[0_16px_34px_rgba(15,23,42,0.35)]">
            <h3 className="text-30 font-semibold text-white">
              Plan Your AI Robotics and Automation Program
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/90">
              Connect with Cubicso to discuss delivery scope, execution model, and timeline feasibility.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-xl border border-white/35 bg-white px-5 py-2.5 font-semibold text-[#1e3a8a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-white hover:shadow-[0_12px_24px_rgba(255,255,255,0.22)]"
              >
                Book Service Consultation
              </Link>
              <Link
                href="/about/projects"
                className="rounded-xl border border-white/35 bg-white/12 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_12px_24px_rgba(16,45,71,0.25)]"
              >
                View Related Projects
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default RoboticsServicePage;
