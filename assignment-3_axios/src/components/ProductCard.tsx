import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { ProductCardProps } from "../interfaces/ProductCard";
import type React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export const ProductCard = (
  card: ProductCardProps,
): React.JSX.Element | null => {
  const context = useContext(FavoritesContext);
  if (!context) return null;
  const { favorites, addFavorite, removeFavorite } = context;
  const isFavorites = favorites.some((favorite) => favorite.id === card.id);
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        image={card.images[0]}
        component="img"
        height="140"
        sx={{ objectFit: "contain", padding: "10px" }}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {card.description}
        </Typography>
        <Typography variant="body2">Rating: {card.rating} ⭐</Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
          ${card.price}
        </Typography>
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            if (isFavorites) {
              removeFavorite(card.id);
            } else {
              addFavorite(card);
            }
          }}
        >
          {isFavorites ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};
