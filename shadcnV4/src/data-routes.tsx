import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import ProductLayouts from "./components/ui/ProductLayouts";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about/*", Component: About },
  {
    Component: ProductLayouts,
    children: [
      {
        path: "products",
        Component: Dashboard,
        children: [
          { index: true, Component: Product },
          { path: ":pid/edit/:uid?", Component: Details },
        ],
      },
    ],
  },
]);
