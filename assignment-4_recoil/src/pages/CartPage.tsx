import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { RecommendedProducts } from "../components/RecommendedProducts";

export const CartPage = () => {
  const { addToCart, cart, totalPrice, decreaseQuantity } = useCart();
  const navigate = useNavigate();
  if (cart.length === 0) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        העגלה ריקה עדיין
      </Typography>
    );
  }
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={2}>
          {cart.map((product) => (
            <Card
              elevation={2}
              sx={{ height: "100%", cursor: "pointer", display: "flex", p: 2 }}
              key={product.id}
            >
              <CardMedia
                image={product.image}
                component="img"
                height="140"
                sx={{
                  width: 150,
                  objectFit: "contain",
                  padding: "10px",
                  flexShrink: 0,
                }}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {product.description}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                  ₪ {product.price}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 1 }}>
                  ₪ {product.price * product.quantity}
                </Typography>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mt: 1 }}
                  >
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      <Add color="primary" />
                    </IconButton>
                    כמות: {product.quantity}
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        decreaseQuantity(product);
                      }}
                    >
                      <Remove color="primary" />
                    </IconButton>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <RecommendedProducts />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Card elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            סיכום הזמנה 📋
          </Typography>
          <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
            <Stack spacing={2}>
              <Typography variant="body1">סך הכל: ₪ {totalPrice}</Typography>
            </Stack>
          </CardContent>

          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/checkout")}
          >
            checkout page
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
