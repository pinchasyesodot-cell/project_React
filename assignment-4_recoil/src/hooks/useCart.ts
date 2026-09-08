import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  type SetterOrUpdater,
} from "recoil";
import { cartAtom, snackbarAtom, walletAtom } from "../store/atoms";
import {
  cartTotalPriceSelector,
  cartTotalQuantitySelector,
} from "../store/selectors";
import type {
  CartItemType,
  ProductCardType,
} from "../interfaces/ProductCardType";
import type { SnackbarType } from "../interfaces/SnackbarType";

export const useCart = (): {
  decreaseQuantity: (product: CartItemType) => void;
  addToCart: (product: ProductCardType) => void;
  cart: CartItemType[];
  setCart: SetterOrUpdater<CartItemType[]>;
  totalPrice: number;
  totalQuantity: number;
  setSnackbar: SetterOrUpdater<SnackbarType>;
  walletAtomPrice: number;
} => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const totalQuantity = useRecoilValue(cartTotalQuantitySelector);
  const totalPrice = useRecoilValue(cartTotalPriceSelector);
  const setSnackbar = useSetRecoilState(snackbarAtom);
  const walletAtomPrice = useRecoilValue(walletAtom);

  const existingIndex = (product: ProductCardType): number => {
    const exisitingProductIndex = cart.findIndex(
      (item) => item.id === product.id,
    );
    return exisitingProductIndex;
  };

  const addToCart = (product: ProductCardType) => {
    const returenExisitingIndex = existingIndex(product);

    if (totalQuantity >= 50) {
      setSnackbar({
        open: true,
        message: "You cannot add more than 50 items to your cart.",
        severity: "error",
      });
      return;
    }
    if (totalPrice + product.price > walletAtomPrice) {
      setSnackbar({
        open: true,
        message:
          "This item cannot be added to cart, There is not enough budget.",
        severity: "error",
      });
      return;
    }
    if (returenExisitingIndex === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
      return;
    } else {
      if (cart[returenExisitingIndex].quantity >= 5) {
        setSnackbar({
          open: true,
          message: "You cannot add more than 5 units of the same product.",
          severity: "error",
        });
        return;
      }
    }

    const updateCart = cart.map((item, index) => {
      if (index === returenExisitingIndex) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updateCart);
    setSnackbar({
      open: true,
      message: "Product successfully added to cart!",
      severity: "success",
    });
  };

  const decreaseQuantity = (product: CartItemType) => {
    const returenExisitingIndex = existingIndex(product);
    if (cart[returenExisitingIndex].quantity > 1) {
      const updateQuantity = cart.map((item, index) => {
        if (index === returenExisitingIndex) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updateQuantity);
      setSnackbar({
        open: true,
        message: "The product has been successfully updated to the cart!",
        severity: "success",
      });
    } else {
      const removeProductInCart = cart.filter((item) => item.id !== product.id);
      setCart(removeProductInCart);
      setSnackbar({
        open: true,
        message: "Product removed from cart successfully!",
        severity: "success",
      });
    }
  };
  return {
    decreaseQuantity,
    addToCart,
    cart,
    setCart,
    totalPrice,
    totalQuantity,
    setSnackbar,
    walletAtomPrice,
  };
};
