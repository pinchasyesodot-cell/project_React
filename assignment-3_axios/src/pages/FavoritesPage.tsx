import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProductCard } from "../components/ProductCard";

export const FavoritesPage = (): React.JSX.Element | null => {
  const context = useContext(FavoritesContext);
  if (!context) return null;
  const { favorites } = context;
  return (
    <Box
      sx={{ padding: "30px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        My Favorites <FavoriteIcon color="error" />
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="h2">No favorites added yet!</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};
