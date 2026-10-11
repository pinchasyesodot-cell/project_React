import type { ProductCardProps } from "./ProductCard";

export interface FavoritesContextType {
  favorites: ProductCardProps[];
  addFavorite: (product: ProductCardProps) => void;
  removeFavorite: (id: number) => void;
}
