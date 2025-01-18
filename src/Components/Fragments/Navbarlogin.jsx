import { Login } from "../Elements/Input/Index";
import NavbarImg from "./NavbarImg";

function Navbarlogin() {
  const islogin = localStorage.getItem("islogin");
  return islogin ? <NavbarImg /> : <Login />;
}

export default Navbarlogin;
