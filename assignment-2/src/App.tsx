import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import type React from "react";
import { AnimalImagsPage } from "./pages/AnimalImagsPage";
import { AnimalImagPage } from "./pages/AnimalImagPage";
import { Navbar } from "./components/Navbar";

export const App = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:animal/images" element={<AnimalImagsPage />}></Route>
        <Route path="/:animal/:imagName" element={<AnimalImagPage />}></Route>
      </Routes>
    </>
  );
};
