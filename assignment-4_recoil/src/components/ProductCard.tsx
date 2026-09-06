import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import type { ProductCardType } from "../interfaces/ProductCardType";
import { AddShoppingCart } from "@mui/icons-material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartAtom, snackbarAtom, walletAtom } from "../store/atoms";
import {
  cartTotalPriceSelector,
  cartTotalQuantitySelector,
} from "../store/selectors";

export const ProductCard = (card: ProductCardType): JSX.Element => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const setSnackbar = useSetRecoilState(snackbarAtom);
  const totalQuantity = useRecoilValue(cartTotalQuantitySelector);
  const totalPrice = useRecoilValue(cartTotalPriceSelector);
  const walletAtomPrice = useRecoilValue(walletAtom);
  const handleAddCart = () => {
    const exisitingProductIndex = cart.findIndex((item) => item.id === card.id);

    if (totalQuantity >= 50) {
      setSnackbar({
        open: true,
        message: "You cannot add more than 50 items to your cart.",
        severity: "error",
      });
      return;
    }

    if (totalPrice + card.price > walletAtomPrice) {
      setSnackbar({
        open: true,
        message:
          "This item cannot be added to cart, There is not enough budget.",
        severity: "error",
      });
      return;
    }

    if (exisitingProductIndex === -1) {
      setCart([...cart, { ...card, quantity: 1 }]);
    } else {
      if (cart[exisitingProductIndex].quantity >= 5) {
        setSnackbar({
          open: true,
          message: "You cannot add more than 5 units of the same product.",
          severity: "error",
        });
        return;
      }

      const updateCart = cart.map((item, index) => {
        if (index === exisitingProductIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updateCart);
    }
    setSnackbar({
      open: true,
      message: "Product successfully added to cart!",
      severity: "success",
    });
  };
  return (
    <Card sx={{ height: "100%", cursor: "pointer" }}>
      <CardMedia
        image={card.image}
        component="img"
        height="140"
        sx={{ objectFit: "contain", padding: "10px" }}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {card.description}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
          ₪ {card.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Add to cart">
          <IconButton color="primary" onClick={handleAddCart}>
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
