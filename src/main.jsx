import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Kategori from "./pages/kategori.jsx";
import Produk from "./pages/produk.jsx";
import Metode from "./pages/Metode.jsx";
import Bayar from "./pages/bayar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/kategori",
    element: <Kategori />,
  },
  {
    path: "/produk/:id",
    element: <Produk />,
  },
  {
    path: "/metode/:id",
    element: <Metode />,
  },
  {
    path: "bayar/:id",
    element: <Bayar />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
