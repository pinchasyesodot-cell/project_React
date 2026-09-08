import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { snackbarAtom } from "../store/atoms";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export const CheckoutPage = (): JSX.Element => {
  const setSnackbar = useSetRecoilState(snackbarAtom);
  const { setCart } = useCart();
  const navigata = useNavigate();
  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSnackbar({
          open: true,
          message: "The order was sent successfully.",
          severity: "success",
        });
        setCart([]);
        navigata("/", { replace: true });
      }}
      sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 4 }}
    >
      <Stack spacing={3}>
        <Typography variant="h5">Shipping and payment details</Typography>
        <TextField label="Full name" fullWidth required />
        <TextField label="Shipping address" fullWidth required />
        <TextField label="Email" fullWidth type="email" required />
        <Button variant="contained" type="submit">
          Order confirmation
        </Button>
      </Stack>
    </Box>
  );
};
