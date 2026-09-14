import { Box, MenuItem, Stack, TextField } from "@mui/material";
import type {
  ProductFiltersProps,
  SortOptionType,
} from "../interfaces/filterType";

export const ProductFilters = ({
  searchQuery,
  setSearchQuery,
  filterPrice,
  setFilterPrice,
  sortOption,
  setSortOption,
}: ProductFiltersProps): JSX.Element => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <TextField
          label="search by name"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <TextField
          label="search by price"
          value={filterPrice === 0 ? "" : filterPrice}
          type="number"
          onChange={(e) => {
            setFilterPrice(Number(e.target.value));
          }}
        />
        <TextField
          sx={{ minWidth: 180 }}
          select
          label="sort"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value as SortOptionType);
          }}
        >
          <MenuItem value="">sort</MenuItem>
          <MenuItem value="price low To High">price - low to high</MenuItem>
          <MenuItem value="price high To Low">price - high to low</MenuItem>
          <MenuItem value="name a To z">name - a to z</MenuItem>
          <MenuItem value="name z To a">name - z to a</MenuItem>
        </TextField>
      </Stack>
    </Box>
  );
};
