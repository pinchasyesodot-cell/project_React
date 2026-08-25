import type React from "react";
import { Routes, Route } from "react-router";
import { ProductsPage } from "./pages/ProductsPage";

export const App = (): React.JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
      </Routes>
    </>
  );
};
