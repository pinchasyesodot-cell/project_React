import type { ProductCardProps } from "./ProductCard";

export interface EditProductType {
  product: ProductCardProps | null;
  open: boolean;
  onClose: () => void;
  onEdit: (product: ProductCardProps) => void;
}
