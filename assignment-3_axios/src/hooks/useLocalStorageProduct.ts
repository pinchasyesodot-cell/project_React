import { useEffect, useState } from "react";
import type { ProductCardProps } from "../interfaces/ProductCard";

export const useLocalStorageProduct = (initialProducts: ProductCardProps[]) => {
  const [allProduct, setAllProduct] = useState<ProductCardProps[]>(() => {
    const saved = localStorage.getItem("allProduct");
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    if (allProduct.length > 0) {
      localStorage.setItem("allProduct", JSON.stringify(allProduct));
    }
  }, [allProduct]);

  return { allProduct, setAllProduct };
};
