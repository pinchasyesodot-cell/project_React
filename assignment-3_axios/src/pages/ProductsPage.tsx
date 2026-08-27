import { Alert, Box, Button, CircularProgress, Grid } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import type {
  ProductsApiResponse,
  ProductCardProps,
} from "../interfaces/ProductCard";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { useNavigate } from "react-router";
import { FilterCategory } from "../components/FilterCategory";
import { FilterPrice } from "../components/FilterPrice";
import type { FilterPriceType } from "../interfaces/FilterPriceType";

export const ProductsPage = (): React.JSX.Element => {
  const navigate = useNavigate();
  const [skip, setSkip] = useState(0);
  const [allProduct, setAllProduct] = useState<ProductCardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectPrice, setSelectPrice] = useState<FilterPriceType>("");

  const endpoint = selectCategory
    ? `/products/category/${selectCategory}?limit=20&skip=${skip}`
    : `/products?limit=20&skip=${skip}`;

  const { data, error, isLoading, refetch } =
    useFetch<ProductsApiResponse>(endpoint);

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

  useEffect(() => {
    setAllProduct([]);
    setSkip(0);
  }, [selectCategory]);

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

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          gap: 2,
        }}
      >
        <Alert color="error">Error loading data: {error}</Alert>
        <Button variant="contained" onClick={refetch}>
          Try reloading
          <RefreshIcon />
        </Button>
      </Box>
    );

  const filteredProducts = allProduct
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      if (selectPrice === "From high to low") return priceB - priceA;
      if (selectPrice === "From low to high") return priceA - priceB;
      return 0;
    });
    
  return (
    <Box
      sx={{ padding: "30px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#f5f5f5",
          py: 2,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 3,
          mb: 3,
        }}
      >
        <SearchBar onSearchChange={setSearchQuery} />
        <Button
          endIcon={<FavoriteIcon color="error" />}
          variant="contained"
          onClick={() => {
            navigate("/favorites-product");
          }}
        >
          Favorites
        </Button>
        <FilterCategory
          onSelectCategory={setSelectCategory}
          selectedCategory={selectCategory}
        ></FilterCategory>
        <FilterPrice
          filter={selectPrice}
          onSelectPrice={setSelectPrice}
        ></FilterPrice>
      </Box>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard {...product} />
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
