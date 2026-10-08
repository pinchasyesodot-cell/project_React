import { useRecoilState } from "recoil";
import type { SnackbarType } from "../interfaces/SnackbarType";
import { snackbarAtom } from "../store/atoms";
import { Alert, Snackbar } from "@mui/material";

export const GlobalSnackbar = (): JSX.Element => {
  const [snackbar, setStackbar] = useRecoilState<SnackbarType>(snackbarAtom);
  const hendleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") return;
    setStackbar((prev) => ({ ...prev, open: false }));
  };
  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={hendleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={hendleClose}
        severity={snackbar.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};
