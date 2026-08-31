export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  rating: number;
  description: string;
  total: number;
  category: string;
  onEditClick?: () => void;
}

export interface ProductsApiResponse {
  products: ProductCardProps[];
  total: number;
  skip: number;
  limit: number;
}
