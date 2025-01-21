import { useEffect } from "react";
import { Login } from "../../Elements/Input/Index";
import NavbarImg from "./NavbarImg";

function Navbarlogin() {
  const islogin = localStorage.getItem("islogin");

  return islogin === "true" ? <NavbarImg /> : <Login />;
}

export default Navbarlogin;
