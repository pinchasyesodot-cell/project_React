export interface ProductCardProps {
  id: number;
  title: string;
  price: number | string;
  images: string[];
  rating: number | string;
  description: string;
  total: number;
  category: string;
  onEditClick?: () => void;
  isLocal?: boolean;
}

export interface ProductsApiResponse {
  products: ProductCardProps[];
  total: number;
  skip: number;
  limit: number;
}
