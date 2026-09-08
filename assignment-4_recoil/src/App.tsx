import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ProductsPage } from "./pages/ProductsPage";
import { GlobalSnackbar } from "./components/Snackbar";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";

export const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
      <GlobalSnackbar />
    </RecoilRoot>
  );
};
