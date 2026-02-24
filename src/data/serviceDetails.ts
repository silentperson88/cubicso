export type ServiceDetail = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  galleryImages?: string[];
  intro: string;
  whoItsFor: string[];
  capabilities: string[];
  projectTypes: { title: string; summary: string; image: string }[];
  methodology: string[];
  toolsAndTech: string[];
  useCases: { title: string; detail: string }[];
  kpis: { label: string; value: string }[];
  compliance: string[];
  team: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "heavy-engineering": {
    slug: "heavy-engineering",
    title: "Heavy Engineering",
    shortDescription:
      "Civil and industrial-scale execution for high-impact engineering programs.",
    heroImage: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
    galleryImages: [
      "/images/service/heavy%20engineering/1.jpg",
      "/images/service/heavy%20engineering/2.jpg",
      "/images/service/heavy%20engineering/3.jpg",
      "/images/service/heavy%20engineering/4.jpg",
      "/images/service/heavy%20engineering/5.jpg",
      "/images/service/heavy%20engineering/6.jpg",
      "/images/service/heavy%20engineering/7.jpg",
      "/images/service/heavy%20engineering/8.jpg",
      "/images/service/heavy%20engineering/9.jpg",
      "/images/service/heavy%20engineering/10.jpg",
      "/images/service/heavy%20engineering/11.jpg",
      "/images/service/heavy%20engineering/12.jpg",
      "/images/service/heavy%20engineering/13.jpg",
      "/images/service/heavy%20engineering/14.jpg",
      "/images/service/heavy%20engineering/15.jpg",
      "/images/service/heavy%20engineering/16.jpg",
      "/images/service/heavy%20engineering/17.jpg",
      "/images/service/heavy%20engineering/18.jpg",
      "/images/service/heavy%20engineering/19.jpg",
      "/images/service/heavy%20engineering/20.jpg",
      "/images/service/heavy%20engineering/21.jpg",
      "/images/service/heavy%20engineering/22.jpg",
      "/images/service/heavy%20engineering/23.jpg",
      "/images/service/heavy%20engineering/24.jpg",
      "/images/service/heavy%20engineering/25.jpg",
      "/images/service/heavy%20engineering/26.jpg",
      "/images/service/heavy%20engineering/27.jpg",
      "/images/service/heavy%20engineering/28.jpg",
      "/images/service/heavy%20engineering/29.jpg",
    ],
    intro:
      "Cubicso delivers heavy engineering scopes with field-ready planning, technical control, and milestone-driven execution across complex infrastructure and industrial environments.",
    whoItsFor: [
      "Infrastructure EPC organizations",
      "Public sector program owners",
      "Industrial clients with large civil packages",
      "Teams recovering delayed project streams",
    ],
    capabilities: [
      "Bridge and structural civil package execution",
      "Piling, soil improvement, and foundation works",
      "RCC structures and road development",
      "Site mobilization and heavy material handling",
      "EPC/BOP-aligned coordination with client teams",
      "Risk-led schedule and quality governance",
      "Field productivity and resource optimization",
      "Recovery execution for in-trouble projects",
    ],
    projectTypes: [
      {
        title: "Bridge and Link Structures",
        summary:
          "Execution support for major bridge-linked infrastructure programs with strict sequence and quality controls.",
        image: "/images/blog/blog_1.png",
      },
      {
        title: "Large-Volume Earthwork",
        summary:
          "Managed earthwork and grading scopes requiring high-capacity deployment and schedule certainty.",
        image: "/images/blog/blog_2.png",
      },
      {
        title: "RCC and Structural Corridors",
        summary:
          "Multi-kilometer RCC and structural execution with clear milestone governance.",
        image: "/images/blog/blog_4.png",
      },
    ],
    methodology: [
      "Project assessment and constructability review",
      "Scope planning and sequencing design",
      "Site mobilization and workforce onboarding",
      "Execution with daily controls and QA checks",
      "Milestone governance and risk closure",
      "Handover and performance stabilization",
    ],
    toolsAndTech: [
      "Hydra, cranes, forklifts",
      "Piling and augering machinery",
      "Site QA documentation controls",
      "Progress tracking and reporting dashboards",
      "Engineering drawings and layout validations",
      "Safety and permit governance checklists",
    ],
    useCases: [
      {
        title: "Public Infrastructure Delivery",
        detail:
          "Program execution for public infrastructure packages where schedule and quality compliance are critical.",
      },
      {
        title: "Industrial Expansion Works",
        detail:
          "Support for industrial site expansion, foundations, and structural readiness for new operations.",
      },
      {
        title: "Recovery and Turnaround",
        detail:
          "Focused execution support for delayed projects requiring rapid stabilization and milestone recovery.",
      },
    ],
    kpis: [
      { label: "Earthwork Executed", value: "241,453 cum" },
      { label: "Piling Executed", value: "39,542 m" },
      { label: "Stone Piling Scope", value: "13,600 m" },
      { label: "RCC/Structural Package", value: "2+ km" },
    ],
    compliance: [
      "Quality checkpoints across scope lifecycle",
      "HSE controls aligned to client/site requirements",
      "Documented review and escalation cadence",
      "Continuous improvement and corrective action loops",
    ],
    team: [
      "Project Manager",
      "Civil/Structural Engineers",
      "Quality Engineer",
      "HSE Lead",
      "Site Supervisor",
      "Planning Coordinator",
    ],
    faqs: [
      {
        question: "Do you handle both civil and industrial support scopes?",
        answer:
          "Yes. Heavy engineering engagements include civil packages and related industrial execution support.",
      },
      {
        question: "Can Cubicso work with existing EPC governance?",
        answer:
          "Yes. Delivery aligns with client governance standards and reporting structures.",
      },
      {
        question: "Do you support project recovery activities?",
        answer:
          "Yes. Cubicso supports audit-led execution reset for delayed or unstable project streams.",
      },
    ],
  },
  "renewable-energy": {
    slug: "renewable-energy",
    title: "Renewable Energy",
    shortDescription:
      "Utility-scale solar program delivery from engineering investigations to installation.",
    heroImage: "/images/pillars/renewable_energy.png",
    galleryImages: [
      "/images/service/renewable%20energy/rw1.png",
      "/images/service/renewable%20energy/rw2.png",
      "/images/service/renewable%20energy/rw3.png",
      "/images/service/renewable%20energy/rw4.png",
      "/images/service/renewable%20energy/rw5.png",
      "/images/service/renewable%20energy/rw6.png",
      "/images/service/renewable%20energy/rw7.png",
      "/images/service/renewable%20energy/rw8.png",
    ],
    intro:
      "Cubicso executes renewable energy programs with full site engineering investigations, terrain-aware planning, and disciplined installation management for dependable delivery.",
    whoItsFor: [
      "Utility-scale solar developers",
      "EPC and principal contractors",
      "Public and private renewable program owners",
      "Teams scaling ground-mounted or floating solar",
    ],
    capabilities: [
      "Feasibility and resource analysis",
      "Site planning and storm-water considerations",
      "Grading and leveling across complex terrain",
      "Piling/augering and foundation installation",
      "Module mounting and tracking systems",
      "Permits and approvals support",
      "Quality inspection and serialization control",
      "Schedule and cost control for multi-site programs",
    ],
    projectTypes: [
      {
        title: "Ground-Mounted Solar Fields",
        summary:
          "End-to-end execution for utility-scale ground-mounted PV installations.",
        image: "/images/blog/blog_3.png",
      },
      {
        title: "Solar Parking Structures",
        summary:
          "Space-optimized solar structures designed for terrain and usage constraints.",
        image: "/images/blog/blog_6.png",
      },
      {
        title: "Floating Solar Programs",
        summary:
          "Execution support for floating solar expansion and system deployment.",
        image: "/images/blog/blog_8.png",
      },
    ],
    methodology: [
      "Site and geological investigation",
      "Engineering and execution planning",
      "Civil and foundation preparation",
      "Mechanical and module installation",
      "Quality and safety verification",
      "Commissioning readiness and handover",
    ],
    toolsAndTech: [
      "PV, crystalline, and thin-film modules",
      "Single and dual-axis tracking systems",
      "Piling/augering machinery",
      "Engineering layout validation tools",
      "Quality serialization workflows",
      "Progress and risk control dashboards",
    ],
    useCases: [
      {
        title: "Utility Solar Expansion",
        detail:
          "Large-scale rollouts where schedule, quality, and resource coordination determine project viability.",
      },
      {
        title: "Terrain-Constrained Installations",
        detail:
          "Execution planning for uneven, constrained, or technically challenging site conditions.",
      },
      {
        title: "Multi-Site Delivery Programs",
        detail:
          "Standardized execution model across multiple project locations with central governance.",
      },
    ],
    kpis: [
      { label: "Solar Installation Delivered", value: "150+ MW" },
      { label: "Major Client Portfolio", value: "BHEL, GSECL, GNFC" },
      { label: "Program Type", value: "Utility + Floating" },
      { label: "Delivery Focus", value: "Safety, Time, Quality" },
    ],
    compliance: [
      "Quality policy aligned execution controls",
      "HSE compliance for site teams and contractors",
      "Structured installation quality checks",
      "Ongoing review and corrective action process",
    ],
    team: [
      "Program Manager",
      "Renewable Project Engineers",
      "Civil and Foundation Team",
      "Quality and HSE Leads",
      "Site Installation Supervisors",
      "Commissioning Support Coordinators",
    ],
    faqs: [
      {
        question: "Can you execute both ground and floating solar projects?",
        answer:
          "Yes. Cubicso supports both ground-mounted and floating solar execution programs.",
      },
      {
        question: "Do you perform site engineering investigations?",
        answer:
          "Yes. Full site and geological investigations are used to reduce execution risk.",
      },
      {
        question: "How do you maintain quality at scale?",
        answer:
          "Delivery includes documented quality checkpoints, module controls, and governance reviews.",
      },
    ],
  },
  "wealth-management": {
    slug: "wealth-management",
    title: "Wealth Management",
    shortDescription:
      "AI-enabled wealth operations with live market intelligence and advisor-led decision support.",
    heroImage: "/images/pillars/wealth_management.png",
    galleryImages: [
      "/images/service/wealth-management/w1.png",
      "/images/service/wealth-management/w2.png",
      "/images/service/wealth-management/w3.png",
      "/images/service/wealth-management/w4.png",
      "/images/service/wealth-management/w5.png",
      "/images/service/wealth-management/w6.png",
    ],
    intro:
      "Cubicso delivers a realistic fintech environment with AI-powered stock analysis, live stock monitoring, integrated market intelligence, and SEBI-registered advisor consultation support for confident portfolio decisions.",
    whoItsFor: [
      "Advisory and portfolio operations teams",
      "Fintech product and wealth strategy groups",
      "Firms modernizing client advisory experience",
      "Investor-focused digital wealth platforms",
    ],
    capabilities: [
      "AI-powered stock analysis for smarter recommendations",
      "Live stock price dashboard and market movement tracking",
      "Financial news integration for context-aware decisions",
      "Intelligent portfolio analytics and allocation insights",
      "Advisor workflow support in a professional corporate setting",
      "SEBI-registered advisor consultation enablement model",
      "Client reporting and review cadence design",
      "Risk-aware governance and performance monitoring framework",
    ],
    projectTypes: [
      {
        title: "AI Advisory Intelligence Setup",
        summary:
          "Implementation of AI-powered stock analysis workflows for structured advisory decisioning.",
        image: "/images/service/wealth-management/w1.png",
      },
      {
        title: "Live Market Dashboard Deployment",
        summary:
          "Building real-time stock price visibility and portfolio performance dashboards for advisory teams.",
        image: "/images/service/wealth-management/w2.png",
      },
      {
        title: "Integrated Fintech Advisory Platform",
        summary:
          "Combining financial news integration, analytics, and consultation flows in a realistic fintech environment.",
        image: "/images/service/wealth-management/w3.png",
      },
    ],
    methodology: [
      "Wealth workflow and advisory operating review",
      "AI-analysis and dashboard capability design",
      "Financial news + portfolio analytics integration",
      "Advisor consultation model alignment (SEBI-ready support)",
      "Pilot rollout in corporate operating context",
      "Performance monitoring and scale optimization",
    ],
    toolsAndTech: [
      "AI stock analysis models",
      "Live market data dashboard components",
      "Financial news feed integration framework",
      "Portfolio analytics and risk insight panels",
      "Advisory review and consultation workflow engine",
      "Governance and compliance monitoring templates",
    ],
    useCases: [
      {
        title: "AI-Assisted Investment Review",
        detail:
          "Use AI-powered stock insights to support recommendation quality and review speed.",
      },
      {
        title: "Real-Time Market Decisioning",
        detail:
          "Enable teams to act on live price shifts with dashboard-driven visibility.",
      },
      {
        title: "Advisor-Led Portfolio Optimization",
        detail:
          "Combine intelligent portfolio analytics with expert consultation in a professional corporate context.",
      },
    ],
    kpis: [
      { label: "AI Insight Utilization", value: "High" },
      { label: "Live Market Coverage", value: "Real-Time" },
      { label: "Portfolio Analytics Depth", value: "Intelligent" },
      { label: "Advisor Engagement Model", value: "SEBI-Ready" },
    ],
    compliance: [
      "Policy-aligned advisory process structure for regulated contexts",
      "Consultation workflows compatible with SEBI-registered advisor practices",
      "Documented review and escalation controls",
      "Continuous portfolio and performance monitoring standards",
    ],
    team: [
      "Wealth Program Lead",
      "Fintech Product Analyst",
      "Portfolio Intelligence Specialist",
      "Market Data Integration Engineer",
      "Advisor Operations Coordinator",
      "Compliance and Governance Consultant",
    ],
    faqs: [
      {
        question: "Does this include AI-powered stock analysis and live dashboards?",
        answer:
          "Yes. The service covers AI-driven stock analysis and live stock dashboard capability in one execution model.",
      },
      {
        question: "Can financial news integration be included in advisory workflows?",
        answer:
          "Yes. Financial news integration is part of the solution to improve context-aware portfolio decisions.",
      },
      {
        question: "Do you support SEBI-registered advisor consultation workflows?",
        answer:
          "Yes. The operating model is designed to support consultation-driven advisory processes in professional corporate settings.",
      },
    ],
  },
  robotics: {
    slug: "robotics",
    title: "Robotics",
    shortDescription:
      "Industrial automation programs covering packaging, robotics, warehouse, and IoT-enabled process systems.",
    heroImage: "/images/pillars/robotics.png",
    galleryImages: [
      "/images/service/robotics/r1.png",
      "/images/service/robotics/r2.png",
      "/images/service/robotics/r3.png",
      "/images/service/robotics/r4.png",
      "/images/service/robotics/r5.png",
      "/images/service/robotics/r6.png",
    ],
    intro:
      "Cubicso delivers end-to-end automation programs across robotic handling, packaging lines, warehouse systems, and filling/process integration. The execution model combines robotics and mechanical engineering depth with Industry 4.0 readiness for safer, faster, and more reliable operations.",
    whoItsFor: [
      "Manufacturing and operations teams",
      "Chemical, pharma, paints, agro, dairy, FMCG, automobile, and petroleum facilities",
      "Plants modernizing packaging and warehouse operations",
      "Organizations scaling robotics from pilot to multi-line rollout",
    ],
    capabilities: [
      "Packaging automation: conveyor systems, case erectors, case packers, and sealing/taping systems",
      "Integrated checkweighing, labeling, and vision-inspection stations",
      "Robotic pick-and-place cells and robotic palletizers for bags, boxes, and drums",
      "AMR deployment for autonomous intra-plant movement",
      "Warehouse automation using ASRS and smart racking systems",
      "Drum filling automation with robotic/gantry configuration",
      "IoT-enabled monitoring, analytics, and production control integration",
      "Turnkey execution from assessment, design, fabrication, installation, and stabilization",
    ],
    projectTypes: [
      {
        title: "Packaging Line Automation",
        summary:
          "End-to-end packaging automation with conveyors, case handling, sealing, checkweighing, and vision-guided quality checks.",
        image: "/images/blog/blog_4.png",
      },
      {
        title: "Robotic Material Handling and Palletizing",
        summary:
          "Deployment of pick-and-place, palletizing, and AMR-led movement to improve throughput and reduce manual handling risk.",
        image: "/images/blog/blog_6.png",
      },
      {
        title: "Warehouse and Process Automation Scale-up",
        summary:
          "ASRS, smart racking, and IoT-enabled process monitoring rollout across multiple plant zones.",
        image: "/images/blog/blog_8.png",
      },
    ],
    methodology: [
      "Discovery and line-level automation opportunity mapping",
      "Engineering design, simulation, and integration blueprint",
      "Custom fabrication and equipment integration planning",
      "Installation, commissioning, and validation on live operations",
      "Operator training and SOP handover for stable adoption",
      "Performance tuning, IoT monitoring, and multi-line scale-up",
    ],
    toolsAndTech: [
      "High-speed robotic arms and palletizing systems",
      "Vision-guided automation and AI-based inspection systems",
      "AMR navigation and fleet-control integration",
      "ASRS and smart-racking automation controls",
      "IoT dashboards with real-time production analytics",
      "Predictive maintenance monitoring and alerting workflows",
    ],
    useCases: [
      {
        title: "High-Mix Packaging Operations",
        detail:
          "Automate repetitive packaging and inspection tasks where speed, consistency, and traceability are critical.",
      },
      {
        title: "Warehouse Throughput and Retrieval Optimization",
        detail:
          "Deploy ASRS, smart storage, and AMR movement to reduce internal logistics delays and improve dispatch readiness.",
      },
      {
        title: "Process Safety and Filling Reliability",
        detail:
          "Use robotic/gantry filling and IoT supervision to improve controlled handling in safety-sensitive process environments.",
      },
    ],
    kpis: [
      { label: "Line Throughput", value: "Improved" },
      { label: "Manual Error Risk", value: "Reduced" },
      { label: "OEE Visibility", value: "Real-Time" },
      { label: "Automation Readiness", value: "Industry 4.0 Aligned" },
    ],
    compliance: [
      "Safety interlocks and operating-zone validation checks",
      "Commissioning checklists and acceptance protocols",
      "Documented SOP, maintenance, and escalation workflows",
      "Post-deployment performance and quality review cycles",
    ],
    team: [
      "Automation Program Lead",
      "Robotics and Controls Engineer",
      "Mechanical Design and Fabrication Engineer",
      "Warehouse Automation Specialist",
      "Safety and Quality Lead",
      "Deployment Supervisor",
      "After-Sales Service and Support Engineer",
    ],
    faqs: [
      {
        question: "Do you provide only robotics cells or complete turnkey automation?",
        answer:
          "Both. Cubicso supports complete turnkey automation, including packaging, robotic handling, warehouse systems, and process integration.",
      },
      {
        question: "Can you integrate with existing plant operations and global robot brands?",
        answer:
          "Yes. Solutions are designed for brownfield integration with phased deployment, global robotics compatibility, and controlled transition planning.",
      },
      {
        question: "Do you support IoT and analytics after commissioning?",
        answer:
          "Yes. We implement IoT-enabled monitoring, production dashboards, and performance review loops to sustain outcomes after go-live.",
      },
    ],
  },
};

export const serviceSlugs = Object.keys(serviceDetails);
