export interface FooterLink {
  label: string;
  url: string;
}

export interface Footer {
  brandName: string;
  tagline: string;
  phone: string;
  email: string;
  socialLinks: FooterLink[];
  navLinks: FooterLink[];
  copyright: string;
}
