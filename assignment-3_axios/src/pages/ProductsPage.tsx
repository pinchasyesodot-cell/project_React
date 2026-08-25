import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import type {
  ProductsApiResponse,
  ProductCardProps,
} from "../interfaces/ProductCard";
import { useEffect, useState } from "react";

export const ProductsPage = () => {
  const [skip, setSkip] = useState(0);
  const [allProduct, setAllProduct] = useState<ProductCardProps[]>([]);

  const { data, error, isLoading } = useFetch<ProductsApiResponse>(
    `/products?limit=20&skip=${skip}`,
  );
  useEffect(() => {
    if (data && data.products) {
      setAllProduct((prevProducts) => {
        const newProducts = data.products.filter(
          (newProd) =>
            !prevProducts.some((prevProd) => prevProd.id === newProd.id),
        );
        return [...prevProducts, ...newProducts];
      });
    }
  }, [data]);

  if (isLoading && allProduct.length === 0)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
        Loading data...
      </Box>
    );

  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + 20);
  };

  if (error) return <Box>Error loading data: {error}</Box>;

  return (
    <Box
      sx={{ padding: "30px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Grid container spacing={3}>
        {allProduct.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard
              total={product.total}
              id={product.id}
              description={product.description}
              images={product.images}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5, mb: 2 }}>
        {isLoading ? (
          <>
            <CircularProgress />
            Loading more products...
          </>
        ) : (
          data &&
          allProduct.length < data.total && (
            <Button variant="contained" size="large" onClick={handleLoadMore}>
              Load more products
            </Button>
          )
        )}
      </Box>
    </Box>
  );
};
