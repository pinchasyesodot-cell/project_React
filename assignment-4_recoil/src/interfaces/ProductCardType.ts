export interface ProductCardType {
  id: number | string;
  name: string;
  price: number;
  image: string;
  description: string;
  category?: string;
  recommendedIds?: number[];
}

export interface CartItemType extends ProductCardType {
  quantity: number;
}
