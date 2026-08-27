import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useFetch } from "../hooks/useFetch";
import type { CategoriesProps, CategoryType } from "../interfaces/CategoryType";

export const FilterCategory = ({
  onSelectCategory,
  selectedCategory,
}: CategoriesProps) => {
  const { data, error, isLoading, refetch } = useFetch<CategoryType[]>(
    "/products/categories",
  );
  if (isLoading) return <CircularProgress />;
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
        <Alert color="error">Error loading categories: {error}</Alert>
        <Button variant="contained" onClick={refetch}>
          Try reloading
          <RefreshIcon />
        </Button>
      </Box>
    );
  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Filter Category</InputLabel>
        <Select
          label="Filter Category"
          value={selectedCategory}
          onChange={(e) => {
            onSelectCategory(e.target.value as string);
          }}
        >
          <MenuItem value="" sx={{ fontStyle: "italic" }}>
            All Categories
          </MenuItem>
          {data?.map((category) => (
            <MenuItem key={category.name} value={category.slug}>
              {category.slug}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
