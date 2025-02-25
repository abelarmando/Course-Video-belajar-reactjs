import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Kategori from "./pages/kategori.jsx";
import Produk from "./pages/produk.jsx";
import Metode from "./pages/method.jsx";
import Bayar from "./pages/bayar.jsx";
import Ubah_Metode from "./pages/ubah_metode.jsx";
import Selesai from "./pages/selesai.jsx";
import Keterangan from "./pages/keterangan.jsx";
import Course from "./pages/course.jsx";
const islogin = localStorage.getItem("islogin");

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
    element: islogin === "true" ? <Metode /> : <Login />,
  },
  {
    path: "/bayar/:id",
    element: islogin === "true" ? <Bayar /> : <Login />,
  },
  {
    path: "/ubahbayar/:id",
    element: islogin === "true" ? <Ubah_Metode /> : <Login />,
  },
  {
    path: "/selesai",
    element: islogin === "true" ? <Selesai /> : <Login />,
  },
  {
    path: "/keterangan/:category",
    element: islogin === "true" ? <Keterangan /> : <Login />,
  },
  {
    path: "/:id/course/:courseid/:materiid",
    element: islogin === "true" ? <Course /> : <Login />,
  },
  {
    path: "/:id/course/:course",
    element: <Course />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
