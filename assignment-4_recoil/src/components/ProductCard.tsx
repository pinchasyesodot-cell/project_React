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
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = (card: ProductCardType): JSX.Element => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <Card
      sx={{ height: "100%", cursor: "pointer" }}
      onClick={() => {
        navigate(`/product/${card.id}`);
      }}
    >
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
          <IconButton color="primary" onClick={() => addToCart(card)}>
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
