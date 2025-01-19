import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function NavbarImg() {
  const [isclick, setIsclick] = useState(false);
  return (
    <div className="md:relative">
      <img
        src="./images/Icon/Avatar/Avatar.svg"
        alt="Profile Picture"
        onClick={() => setIsclick(!isclick)}
        className="cursor-pointer max-md:hidden"
      />
      <img
        src="./images/Icon/Icon/Burger.svg"
        alt="Burger"
        onClick={() => setIsclick(!isclick)}
        className="hidden max-md:block"
      />
      {isclick && <DropdownMenu />}
    </div>
  );
}

export default NavbarImg;
