export interface SegmentsSection {

  title: string;

  subtitle: string;

  items: SegmentItem[];

}

export interface SegmentItem {

  title: string;

  description: string;

  image: string;

  icon: string;

  link: string;

  button: string;

  featured?: boolean;

}