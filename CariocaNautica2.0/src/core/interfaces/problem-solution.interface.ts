export interface ProblemsSolutionsSection {

  title: string;

  subtitle: string;

  items: ProductItem[];

}

export interface ProductItem {

  id: string;

  image: string;

  rating: number;

  description: string;

  button: string;

}