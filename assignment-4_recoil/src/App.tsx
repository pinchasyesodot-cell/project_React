import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ProductsPage } from "./pages/ProductsPage";
import { GlobalSnackbar } from "./components/Snackbar";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { CssBaseline } from "@mui/material";

export const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
      <GlobalSnackbar />
    </RecoilRoot>
  );
};
