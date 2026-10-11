import type React from "react";
import { useNavigate } from "react-router";
import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
export const HomePage = (): React.JSX.Element => {
  const navigate = useNavigate();
  const animalsList = ["dog", "cat", "bird", "lion", "elephant", "monkey"];

  return (
    <Box>
      <Typography variant="h4" align="center">
        Choose an Animal
      </Typography>
      <Grid container rowSpacing={3} sx={{ justifyContent: "center" }}>
        {animalsList.map((animal) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={animal}>
            <Card>
              <CardActionArea
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${animal}/images`);
                }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  {animal}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
