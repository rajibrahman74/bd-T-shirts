import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import Home from "./components/Home/Home";
import Main from "./components/Layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tshirts.json")
      },
      {
        path: "orders",
        element: <OrderReview/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);