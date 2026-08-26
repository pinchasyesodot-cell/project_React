import type React from "react";
import { Routes, Route } from "react-router";
import { ProductsPage } from "./pages/ProductsPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FavoritesPage } from "./pages/FavoritesPage";

export const App = (): React.JSX.Element => {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/favorites-product" element={<FavoritesPage />}></Route>
      </Routes>
    </FavoritesProvider>
  );
};
