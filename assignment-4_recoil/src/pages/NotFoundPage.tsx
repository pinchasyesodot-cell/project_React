import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3, color: "text.secondary" }}>
        אופס! העמוד שחיפשת לא נמצא 🕵️‍♂️
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate("/")}>
        חזרה לדף הבית
      </Button>
    </Box>
  );
};
