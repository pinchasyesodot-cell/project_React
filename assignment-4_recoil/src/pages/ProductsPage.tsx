import { useRecoilValue } from "recoil";
import { productsAtom } from "../store/atoms";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/Navbar";

export const ProductsPage = (): JSX.Element => {
  const product = useRecoilValue(productsAtom);
  return (
    <Box
      sx={{ padding: "30px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Navbar/>
      <Grid container spacing={3}>
        {product.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard {...product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
