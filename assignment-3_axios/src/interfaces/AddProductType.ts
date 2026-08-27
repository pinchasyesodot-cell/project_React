import type { ProductCardProps } from "./ProductCard";

export interface AddProductType {
  open: boolean;
  onClose: () => void;
  onAdd: (newProduct: ProductCardProps) => void;
}
