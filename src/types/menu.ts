export type SubmenuItem = {
  label: string;
  href: string;
  subtitle?: string;
  image?: string;
};
  
export type HeaderItem = {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
};
