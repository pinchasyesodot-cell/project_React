export interface CategoryType {
  slug: string;
  name: string;
  url: string;
}

export interface CategoriesProps {
  onSelectCategory: (slug: string) => void;
  selectedCategory: string;
}

