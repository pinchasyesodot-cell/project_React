import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { ProductCardProps } from "../interfaces/ProductCard";
import type React from "react";

export const ProductCard = (card: ProductCardProps): React.JSX.Element => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        image={card.images[0]}
        component="img"
        height="140"
        sx={{ objectFit: 'contain', padding: '10px'}}

      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{card.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{card.description}</Typography>
        <Typography variant="body2">Rating: {card.rating} ⭐</Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1 }}>${card.price}</Typography>
      </CardContent>
    </Card>
  );
};
