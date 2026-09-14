import { selector, selectorFamily } from "recoil";
import { cartAtom, productsAtom } from "./atoms";

export const cartTotalQuantitySelector = selector({
  key: "cartTotalQuantitySelector",
  get: ({ get }) => {
    const cart = get(cartAtom);
    const totalQuantity = cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    return totalQuantity;
  },
});

export const cartTotalPriceSelector = selector({
  key: "cartTotalPriceSelector",
  get: ({ get }) => {
    const cart = get(cartAtom);
    const totalPrice = cart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
    return totalPrice;
  },
});

export const productByIdSelector = selectorFamily({
  key: "productByIdSelector",
  get:
    (productId: string) =>
    ({ get }) => {
      const products = get(productsAtom);
      return products.find((product) => String(product.id) === productId);
    },
});
