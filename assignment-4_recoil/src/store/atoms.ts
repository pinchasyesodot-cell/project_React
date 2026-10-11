import { atom } from "recoil";
import type { CartItemType, ProductCardType } from "../interfaces/ProductCardType";
import type { SnackbarType } from "../interfaces/SnackbarType";

const mockProducts: ProductCardType[] = [
  {
    id: "1", 
    name: "מחשב נייד Pro",
    price: 899,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80",
    description: "מחשב נייד חזק במיוחד לכל המשימות שלך.",
  },
  {
    id: "2",
    name: "אוזניות אלחוטיות",
    price: 150,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
    description: "אוזניות מבטלות רעשים עם איכות שמע מעולה.",
  },
  {
    id: "3",
    name: "מקלדת מכנית",
    price: 80,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80",
    description: "מקלדת נוחה להקלדה מהירה.",
  },
  {
    id: "4",
    name: "עכבר גיימינג",
    price: 50,
    image: "https://images.unsplash.com/photo-1527814050087-179f376dd0e3?auto=format&fit=crop&w=300&q=80",
    description: "עכבר מדויק עם תאורת RGB.",
  }
];

export const walletAtom = atom({
  key: "walletAtom",
  default: 1000,
});

export const productsAtom = atom<ProductCardType[]>({
  key: "productsAtom",
  default:mockProducts ,
});

export const cartAtom = atom<CartItemType[]>({
  key: "cartAtom",
  default: [],
});

export const snackbarAtom = atom<SnackbarType>({
  key: "snackbarAtom",
  default: {
    open:false,
    message:"",
    severity:"success"
  },
});
