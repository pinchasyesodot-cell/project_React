import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { productsAtom } from "../store/atoms";
import { useCart } from "../hooks/useCart";

export const RecommendedProducts = () => {
  const { cart, addToCart } = useCart();
  const products = useRecoilValue(productsAtom);
  const recommendedIds = cart.flatMap(
    (cartItem) => cartItem.recommendedIds || [],
  );
  const recommendedProducts = products.filter(
    (product) =>
      recommendedIds.includes(Number(product.id)) &&
      !cart.some((item) => item.id === product.id),
  );
  return (
    <>
      {recommendedProducts.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            מוצרים מומלצים עבורך 💡
          </Typography>
          <Stack spacing={2}>
            {recommendedProducts.map((product) => (
              <Card
                key={product.id}
                sx={{ display: "flex", p: 2, alignItems: "center" }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  sx={{ width: 80, height: 80, objectFit: "contain", mr: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{product.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₪ {product.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => addToCart(product)}
                >
                  הוסף לעגלה 🛒
                </Button>
              </Card>
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};
