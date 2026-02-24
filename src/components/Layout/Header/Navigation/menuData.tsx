import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
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
        label: "Robotics",
        href: "/services/robotics",
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
  {
    label: "About Us",
    href: "/about",
    submenu: [
      {
        label: "Who Are we",
        href: "/about/who-are-we",
        subtitle: "Who we are and what drives our work.",
        image: "/images/pillars/renewable_energy.png",
      },
      {
        label: "Our Approach",
        href: "/about/our-approach",
        subtitle: "How we translate strategy into delivery outcomes.",
        image: "/images/pillars/robotics.png",
      },
      {
        label: "INTEGRATION WITH CLIENT ORGANISATION",
        href: "/about/integration-with-client-organisation",
        subtitle: "How our teams align with client operating structures.",
        image: "/images/pillars/wealth_management.png",
      },
      {
        label: "POLICIES",
        href: "/about/policies",
        subtitle: "Governance, quality, and compliance principles.",
        image: "/images/pillars/renewable_energy.png",
      },
    ],
  },
  { label: "Projects", href: "/about/projects" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Robotics Service", href: "/robotics-service" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

