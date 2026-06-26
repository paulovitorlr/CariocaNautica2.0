export interface Feedback {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export interface FeedbacksSection {
  title: string;
  subtitle: string;
  items: Feedback[];
}
