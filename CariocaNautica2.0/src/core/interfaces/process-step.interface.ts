export interface ProcessStep {
  order: number;
  title: string;
  description: string;
}

export interface ProcessSection {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}
