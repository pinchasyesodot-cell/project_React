import { Box, TextField } from "@mui/material";
import type React from "react";
import type { SearchBarProps } from "../interfaces/SearchBar";

export const SearchBar = ({
  onSearchChange,
}: SearchBarProps): React.JSX.Element => {
  return (
    <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
      <TextField
        label="product search..."
        variant="outlined"
        sx={{ width: "100%", maxWidth: "500px" }}
        onChange={(e) => {
          onSearchChange(e.target.value);
        }}
      />
    </Box>
  );
};
