export type AboutSectionDetail = {
  title: string;
  heroDescription: string;
  badge: string;
  intro: string;
  image: string;
  keyPoints: string[];
  focusCards: { title: string; description: string }[];
  highlight: string;
};

export const companyProfile = {
  companyName: "Cubicso Enterprise Private Limited",
  yearsInBusiness: "6+",
  engineers: "100+",
  states: "14",
  solarCapacity: "150+ MW",
  coreSectors: [
    "Heavy Infrastructure Services",
    "Industrial Services",
    "Renewable Energy Services",
  ],
  vision3s: [
    "Service for Excellence",
    "Satisfaction for Vendors",
    "Surety for Stakeholders",
  ],
  values: ["Safety", "Integrity", "Quality", "Innovation", "Teamwork"],
  missionPoints: [
    "Provide highest value to clients with a critical eye on safety, quality, and service.",
    "Grow through adoption of advancing technology and modern project tools.",
    "Continuously improve delivery capability with better techniques and controls.",
    "Create an entrepreneurial environment where individuals can pursue project excellence.",
    "Deliver projects on time while maintaining strict quality and safety standards.",
    "Build long-term client partnerships through transparent communication and execution trust.",
    "Optimize resources and field productivity to improve cost and schedule performance.",
    "Strengthen internal engineering capability for complex civil and renewable programs.",
  ],
  heavyEngineeringHighlights: [
    "Bridge construction association with Tata & Daewoo JV for Harbour Sea Link project, Navi Mumbai.",
    "Executed 13,600 m of stone piling soil improvement under BHEL for NTPC Kerala.",
    "Completed earthwork over 260 acres with approximately 241,453 cubic meters volume.",
    "Completed 39,542 m piling for clients including MAHAGENCO, BHEL, GNFC, and GSECL.",
    "Delivered 1.8 km bituminous road work for IOCL under Bharatiya Construction.",
    "Associated with NHSRCL for more than 2 km RCC and structural works with 1,000+ cubic meters concrete.",
  ],
  renewableEnergyHighlights: [
    "Utility-scale solar project execution across India with strong project control and cost management.",
    "Capabilities across ground-mounted PV and solar parking structures for varied terrain and site constraints.",
    "Installation expertise for photovoltaic, crystalline, and thin-film modules with tracking systems.",
    "Solar project services include feasibility, resource analysis, financial support, site planning, grading, piling, erection, foundation, and approvals.",
    "Full site engineering investigations and geological studies to reduce risk and improve schedule certainty.",
    "Completed 150+ MW solar installations for clients including BHEL, GSECL, GNFC, and Tata Solar Projects, with floating solar execution underway.",
  ],
  policies: {
    quality:
      "Quality is a way of life. Continuous improvement, resource optimization, and surpassing client expectations are treated as baseline commitments.",
    hse: "Cubicso is committed to a clean, safe, and healthy environment for employees, contractors, customers, and communities, with compliance to applicable legislation and ongoing HSE improvements.",
  },
  teamExperience: [
    "Flexible team model tailored to client geography, processes, systems, and resource constraints.",
    "Core delivery group includes civil, mechanical, and industrial engineers supported by in-house cost management, quality control, and administration.",
    "Experience in turnkey packaging for repetitive project needs and in recovering troubled projects through audits and corrective execution.",
  ],
  contact: {
    postalAddress: [
      "II nd Floor, Office Nos- 222-228",
      "Pramukh Bazar Complex",
      "Atladara - Bill Road",
      "Vadodara - 390012",
    ],
    physicalAddress: ['Lat: -22O16,4.213"N', 'Long: 7309,1.668"E'],
    phone: "9084923237",
    fax: "9712996007",
    email: "bcg@cubicso.com",
  },
} as const;

export const aboutSectionDetails: Record<string, AboutSectionDetail> = {
  "who-are-we": {
    title: "Who Are we",
    heroDescription:
      "Cubicso has grown from a small subcontractor into a recognized execution partner across India.",
    badge: "Who We Are",
    intro:
      "Over the last six years, Cubicso has delivered heavy civil infrastructure, industrial, and renewable energy projects for public and private sector clients through EPC, design-build, and subcontracting models.",
    image: "/images/about/Gemini_Generated_Image_8up1268up1268up1.png",
    keyPoints: ["6+ years", "100+ engineers", "14 states"],
    focusCards: [
      {
        title: "Execution Identity",
        description:
          "Cubicso is known for disciplined execution on safety, time, and quality, with repeat client engagement built through reliable delivery.",
      },
      {
        title: "3S Vision",
        description:
          "Service for Excellence, Satisfaction for Vendors, and Surety for Stakeholders guide decision-making at every project stage.",
      },
    ],
    highlight:
      "It is the way we execute projects that defines Cubicso.",
  },
  "our-approach": {
    title: "Our Approach",
    heroDescription:
      "Cubicso applies a practical project approach that blends engineering depth and delivery governance.",
    badge: "Approach",
    intro:
      "The project model is built around structured planning, risk-led execution, and continuous performance monitoring to meet critical milestones and exceed owner expectations.",
    image: "/images/about/Gemini_Generated_Image_b1bunub1bunub1bu.png",
    keyPoints: [
      "Safety, Time, Quality",
      "Project controls and cost discipline",
      "Continuous improvement mindset",
    ],
    focusCards: [
      {
        title: "Planning and Controls",
        description:
          "Formal project management includes feasibility studies, implementation planning, and risk assessments across project life cycles.",
      },
      {
        title: "Recovery Capability",
        description:
          "Cubicso has experience auditing troubled projects and driving focused recovery plans to bring execution back on track.",
      },
    ],
    highlight:
      "Approach is tailored for complex projects where clarity, cadence, and control are non-negotiable.",
  },
  "integration-with-client-organisation": {
    title: "Integration with Client Organisation",
    heroDescription:
      "Project teams integrate with client structures to maintain alignment and speed in execution.",
    badge: "Integration",
    intro:
      "Cubicso teams adjust to client geography, processes, systems, and internal constraints while preserving governance standards and clear accountability.",
    image: "/images/about/Gemini_Generated_Image_d6aq03d6aq03d6aq.png",
    keyPoints: [
      "Flexible team configuration",
      "Aligned communication and governance",
      "In-house quality and cost support",
    ],
    focusCards: [
      {
        title: "Embedded Delivery",
        description:
          "Cross-functional teams are structured to operate with client stakeholders while maintaining execution transparency and role clarity.",
      },
      {
        title: "Capability Balance",
        description:
          "Delivery planning balances client requirements with workforce capacity to sustain quality outcomes.",
      },
    ],
    highlight:
      "Integration is built to reduce friction and increase client confidence at every decision point.",
  },
  projects: {
    title: "Projects",
    heroDescription:
      "Cubicso has delivered civil, industrial, and solar programs across diverse geographies and operating contexts.",
    badge: "Projects",
    intro:
      "Representative projects span bridge works, piling, RCC and road infrastructure, industrial erection and piping, and utility-scale renewable installations.",
    image: "/images/about/Gemini_Generated_Image_kuoavskuoavskuoa.png",
    keyPoints: ["13,600 m stone piling", "39,542 m piling", "150+ MW solar"],
    focusCards: [
      {
        title: "Heavy and Civil Programs",
        description:
          "Execution across bridge construction, RCC works, road works, and large-volume earthwork for major national and industrial clients.",
      },
      {
        title: "Industrial and Solar Programs",
        description:
          "Delivery across boiler erection, piping, equipment installation, and large-scale solar project development and installation.",
      },
    ],
    highlight:
      "Projects are delivered with a clear focus on schedule confidence, technical quality, and safety outcomes.",
  },
  policies: {
    title: "Policies",
    heroDescription:
      "Quality and HSE policies are central to Cubicso's operational model.",
    badge: "Policies",
    intro:
      "Cubicso treats quality as a way of life and maintains health, safety, and environmental responsibility as core obligations to employees, contractors, clients, and communities.",
    image: "/images/about/Gemini_Generated_Image_uvliefuvliefuvli.png",
    keyPoints: [
      "Continuous improvement",
      "Regulatory and client compliance",
      "Clean, safe, healthy work environments",
    ],
    focusCards: [
      {
        title: "Quality Policy",
        description:
          "Services are continuously improved with optimized resource utilization, aiming to exceed client requirements, not merely meet them.",
      },
      {
        title: "HSE Policy",
        description:
          "All employees and contractors are responsible for preventing harm, with policy reviews and performance checks supporting ongoing improvement.",
      },
    ],
    highlight:
      "Policy execution is treated as an operational discipline, not a documentation exercise.",
  },
  leadership: {
    title: "Leadership",
    heroDescription:
      "Leadership at Cubicso emphasizes values, ethics, integrity, and long-term client partnerships.",
    badge: "Leadership",
    intro:
      "Leadership focus is on safe delivery, client satisfaction, and sustainable growth while building trust through transparent execution and accountability.",
    image: "/images/about/Gemini_Generated_Image_y57p91y57p91y57p.png",
    keyPoints: [
      "Values-led execution",
      "Client-first orientation",
      "Long-term partnership focus",
    ],
    focusCards: [
      {
        title: "Delivery Stewardship",
        description:
          "Leaders drive program discipline across safety, quality, and timelines while supporting strong field-level execution.",
      },
      {
        title: "People and Capability",
        description:
          "A young, skilled workforce is developed and organized to deliver complex projects with confidence and speed.",
      },
    ],
    highlight:
      "Leadership direction is grounded in execution credibility and measurable value for stakeholders.",
  },
};
