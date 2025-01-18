import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function NavbarImg() {
  const [isclick, setIsclick] = useState(false);
  return (
    <div className="relative">
      <img
        src="./images/Icon/Avatar/Avatar.svg"
        alt="Profile Picture"
        onClick={() => setIsclick(!isclick)}
        className="cursor-pointer"
      />
      {isclick && <DropdownMenu />}
    </div>
  );
}

export default NavbarImg;
