export interface NavbarItem {
  label: string;
  target: string;
}

export interface NavbarCta {
  label: string;
  action: 'scroll' | 'link';
  target: string;
}

export interface Navbar {
  logo: string;
  logoAlt: string;
  items: NavbarItem[];
  cta: NavbarCta;
}