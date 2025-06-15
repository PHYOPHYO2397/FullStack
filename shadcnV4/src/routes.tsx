import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import ProductLayouts from "./components/ui/ProductLayouts";

export const RouteList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about/*" element={<About />} />
          {/* Normal Layout */}
          <Route element={<ProductLayouts />}>
            {/* Nested  */}
            <Route path="products" element={<Dashboard />}>
              <Route index element={<Product />} />
              {/* Dynamic Segment */}
              <Route path=":pid/edit/:uid?" element={<Details />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
