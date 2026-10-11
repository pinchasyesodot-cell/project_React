import type React from "react";
import { useNavigate } from "react-router";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

export const Navbar = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2, width:"100%", justifyContent: "center"}}>
          <Button variant="contained" color="inherit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button variant="contained" color="inherit"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
