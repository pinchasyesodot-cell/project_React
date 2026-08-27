import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SortType } from "../interfaces/FilterPriceType";
import type React from "react";

export const FilterSort = ({
  filter,
  onSelectSort,
}: SortType): React.JSX.Element => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Filter Sort</InputLabel>
        <Select
          label="Filter Sort"
          value={filter}
          onChange={(e) => {
            onSelectSort(e.target.value);
          }}
        >
          <MenuItem value="" sx={{ fontStyle: "italic" }}>
            Cancellation
          </MenuItem>
          <MenuItem value="From price low to high">From price low to high</MenuItem>
          <MenuItem value="From price high to low">From price high to low</MenuItem>
          <MenuItem value="From rating low to high">From rating low to high</MenuItem>
          <MenuItem value="From rating high to low">From rating high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
