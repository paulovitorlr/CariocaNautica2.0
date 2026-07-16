export interface HeroCta {
  label: string;
  action: 'scroll' | 'link';
  target: string;
}

export interface Hero {
  headline: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  cta: HeroCta;
  secondaryCta: HeroCta;
}
