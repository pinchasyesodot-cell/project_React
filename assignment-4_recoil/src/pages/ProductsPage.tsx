import { useRecoilValue } from "recoil";
import { productsAtom } from "../store/atoms";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import type { SortOptionType } from "../interfaces/filterType";
import { ProductFilters } from "../components/ProductFilters";

export const ProductsPage = (): JSX.Element => {
  const products = useRecoilValue(productsAtom);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectSort, setSelectSort] = useState<SortOptionType>("");
  const [filterPrice, setFilterPrice] = useState(0);

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterPrice === 0 || product.price <= filterPrice),
    )
    .sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      const nameA = a.name;
      const nameB = b.name;
      if (selectSort === "price high To Low") return priceB - priceA;
      if (selectSort === "price low To High") return priceA - priceB;
      if (selectSort === "name a To z") return nameA.localeCompare(nameB);
      if (selectSort === "name z To a") return nameB.localeCompare(nameA);
      return 0;
    });
  return (
    <Box
      sx={{ padding: "30px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <Box sx={{ mb: 4 }}>
        <Navbar />
        <ProductFilters
          filterPrice={filterPrice}
          searchQuery={searchQuery}
          setFilterPrice={setFilterPrice}
          setSearchQuery={setSearchQuery}
          setSortOption={setSelectSort}
          sortOption={selectSort}
        />
      </Box>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard {...product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
