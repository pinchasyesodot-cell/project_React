import { Box, Typography } from "@mui/material";
import type React from "react";
import { useParams } from "react-router";

export const AnimalImagPage = (): React.JSX.Element => {
  const { imagName,animal } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{ textTransform: "capitalize", md: 3 }}
      >{animal} - Full Size</Typography>
      <img src={`/${imagName}.jpg`}></img>
    </Box>
  );
};
