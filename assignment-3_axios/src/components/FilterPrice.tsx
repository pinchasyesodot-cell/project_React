import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { PriceType } from "../interfaces/FilterPriceType";
import type React from "react";

export const FilterPrice = ({
  filter,
  onSelectPrice,
}: PriceType): React.JSX.Element => {
  return (
    <Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Filter Price</InputLabel>
        <Select
          label="Filter Category"
          value={filter}
          onChange={(e) => {
            onSelectPrice(e.target.value);
          }}
        >
          <MenuItem value="" sx={{ fontStyle: "italic" }}>
            Cancellation
          </MenuItem>
          <MenuItem value="From low to high">From low to high</MenuItem>
          <MenuItem value="From high to low">From high to low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
