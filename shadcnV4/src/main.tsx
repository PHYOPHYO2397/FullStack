import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { RouteList } from "./routes";
// import { RouterProvider } from "react-router";
// import { router } from "./data-routes";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouteList /> */}
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
);
