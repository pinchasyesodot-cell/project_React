import { selector } from "recoil";
import { cartAtom } from "./atoms";

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
