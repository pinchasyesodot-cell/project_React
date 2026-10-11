import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ProductsPage } from "./pages/ProductsPage";
import { GlobalSnackbar } from "./components/Snackbar";

export const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<ProductsPage />}></Route>
      </Routes>
      <GlobalSnackbar />
    </RecoilRoot>
  );
};
