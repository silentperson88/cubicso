import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  {
    label: "Home",
    href: "/",
    submenu: [
      {
        label: "Who Are we",
        href: "/home/who-are-we",
        subtitle: "Who we are and what drives our work.",
        image: "/images/pillars/renewable_energy.png",
      },
      {
        label: "Our Approach",
        href: "/home/our-approach",
        subtitle: "How we translate strategy into delivery outcomes.",
        image: "/images/pillars/robotics.png",
      },
      {
        label: "INTEGRATION WITH CLIENT ORGANISATION",
        href: "/home/integration-with-client-organisation",
        subtitle: "How our teams align with client operating structures.",
        image: "/images/pillars/wealth_management.png",
      },
      {
        label: "QHSE POLICY",
        href: "/home/policies",
        subtitle: "Governance, quality, and compliance principles.",
        image: "/images/pillars/renewable_energy.png",
      },
      {
        label: "Leadership",
        href: "/home/leadership",
        subtitle: "Leadership principles that guide delivery and partnerships.",
        image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Heavy Engineering",
        href: "/services/heavy-engineering",
        subtitle: "Precision delivery for large-scale industrial programs.",
        image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
      },
      {
        label: "AI Robotics and Automation",
        href: "/services/ai-robotics-and-automation",
        subtitle: "Turnkey robotics, packaging, and warehouse automation systems.",
        image: "/images/pillars/robotics.png",
      },
      {
        label: "Wealth Management",
        href: "/services/wealth-management",
        subtitle: "Portfolio intelligence and advisory operating models.",
        image: "/images/pillars/wealth_management.png",
      },
      {
        label: "Renewable Energy",
        href: "/services/renewable-energy",
        subtitle: "Sustainable growth roadmaps for energy enterprises.",
        image: "/images/pillars/renewable_energy.png",
      },
    ],
  },
  { label: "Insights", href: "/blog" },
  {
    label: "Contact",
    href: "/contact",
    submenu: [
      {
        label: "Project Inquiry",
        href: "/contact/project-inquiry",
        subtitle: "Share project scope and requirements with our delivery team.",
        image: "/images/Inquiry.png",
      },
      {
        label: "Career",
        href: "/contact/career",
        subtitle: "Apply for open roles and submit your professional profile.",
        image: "/images/career.png",
      },
    ],
  },
];

