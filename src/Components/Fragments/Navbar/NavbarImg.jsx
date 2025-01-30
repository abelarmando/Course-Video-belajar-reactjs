import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function NavbarImg() {
  const isLogin = localStorage.getItem("islogin");
  const [isclick, setIsclick] = useState(false);
  return (
    <div className="md:relative">
      {isLogin === "true" && (
        <img
          src="/images/Icon/Avatar/Avatar.svg"
          alt="Profile Picture"
          onClick={() => setIsclick(!isclick)}
          className="cursor-pointer max-md:hidden"
        />
      )}

      <img
        src="/images/Icon/Icon/Burger.svg"
        alt="Burger"
        onClick={() => setIsclick(!isclick)}
        className=" md:hidden"
      />
      {isclick && <DropdownMenu />}
    </div>
  );
}

export default NavbarImg;
