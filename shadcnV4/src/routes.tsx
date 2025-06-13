import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";

export const RouteList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Dashboard />}>
            <Route index element={<Product />} />
            <Route path="detail" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
