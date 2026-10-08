export interface ProductCardType {
  id: number | string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItemType extends ProductCardType {
  quantity: number;
}
