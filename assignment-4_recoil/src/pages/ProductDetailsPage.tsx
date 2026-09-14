import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productByIdSelector } from "../store/selectors";
import { useCart } from "../hooks/useCart";
import { Alert, Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = useRecoilValue(productByIdSelector(productId || ""));
  const { addToCart } = useCart();
  if (!productId || !product) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Alert color="error">המוצר לא נמצא</Alert>
      </Box>
    );
  }
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto" }}>
      <Navbar />
      <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, mt: 4, borderRadius: 3 }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                height: 400,
                backgroundColor: "#f9f9f9",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h4">{product.name}</Typography>
              <Typography variant="h5" color="primary" sx={{ my: 2 }}>
                ₪ {product.price}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {product.description}
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={(_e) => addToCart(product)}
              >
                הוסף לעגלה
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
