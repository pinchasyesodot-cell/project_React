import { atom } from "recoil";
import type { CartItemType, ProductCardType } from "../interfaces/ProductCardType";
import type { SnackbarType } from "../interfaces/SnackbarType";

const mockProducts: ProductCardType[] = [
  {
    id: 1,
    name: "מחשב נייד Pro",
    price: 399,
    category: "electronics", 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "מחשב נייד חזק במיוחד לכל המשימות שלך",
    recommendedIds: [3, 4]
  },
  {
    id: 2,
    name: "אוזניות אלחוטיות",
    price: 299,
    category: "audio", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "אוזניות מבוטלות רעשים עם איכות שמע מעולה",
    recommendedIds: [5] 
  },
  {
    id: 3,
    name: "עכבר גיימינג RGB",
    price: 149,
    category: "peripherals",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    description: "עכבר מדויק עם תאורת RGB מתקדמת"
  },
  {
    id: 4,
    name: "תיק גב למחשב נייד",
    price: 199,
    category: "peripherals",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    description: "תיק עמיד ומרופד להגנה על המחשב"
  },
  {
    id: 5,
    name: "מעמד לאוזניות",
    price: 89,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    description: "מעמד מעוצב ויציב לשולחן העבודה"
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
