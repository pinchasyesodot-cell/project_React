import React, {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { FavoritesContextType } from "../interfaces/FavoritesContextType";
import type { ProductCardProps } from "../interfaces/ProductCard";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [favorites, setFavorites] = useState<ProductCardProps[]>(() => {
    const saveFavorites = localStorage.getItem("favorites");
    if (saveFavorites) {
      return JSON.parse(saveFavorites);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const addFavorite = (product: ProductCardProps) => {
    setFavorites([...favorites, product]);
  };
  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
