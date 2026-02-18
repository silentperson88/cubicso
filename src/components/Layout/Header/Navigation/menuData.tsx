import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Heavy Engineering",
        href: "/services#heavy-engineering",
        subtitle: "Precision delivery for large-scale industrial programs.",
        image: "/images/pillars/Gemini_Generated_Image_g8tfmng8tfmng8tf.png",
      },
      {
        label: "Robotics",
        href: "/services#robotics",
        subtitle: "Automation strategy for intelligent production systems.",
        image: "/images/pillars/robotics.png",
      },
      {
        label: "Wealth Management",
        href: "/services#wealth-management",
        subtitle: "Portfolio intelligence and advisory operating models.",
        image: "/images/pillars/wealth_management.png",
      },
      {
        label: "Renewable Energy",
        href: "/services#renewable-energy",
        subtitle: "Sustainable growth roadmaps for energy enterprises.",
        image: "/images/pillars/renewable_energy.png",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
