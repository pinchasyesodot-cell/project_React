export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  rating: number;
  description: string;
}

export interface ProductsApiResponse {
  products: ProductCardProps[];
  total: number;
  skip: number;
  limit: number;
}
