export interface ProblemSolution {
  id: string;
  problem: { title: string; description: string; icon?: string };
  solution: { title: string; description: string };
}

export interface ProblemsSolutionsSection {
  title: string;
  subtitle: string;
  items: ProblemSolution[];
}
