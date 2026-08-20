import type React from "react";
import { useNavigate, useParams } from "react-router";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
export const AnimalImagsPage = (): React.JSX.Element => {
  const { animal } = useParams();
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: "0 auto" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ textTransform: "capitalize" }}
      >
        {animal} Gallery
      </Typography>
      <ImageList cols={2} gap={16}>
        {[1, 2].map((num) => (
          <ImageListItem key={num}>
            <img
              key={num}
              src={`/${animal}${num}.jpg`}
              alt={`${animal} ${num}`}
              style={{ borderRadius: "8px", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${animal}/${animal}${num}`);
              }}
            ></img>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
