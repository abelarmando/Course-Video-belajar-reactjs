import { useState } from "react";
import DropdownHarga from "./Dropdown/DropdownHarga";

function FilterKelas() {
  const [DropMenu, setDropMenu] = useState(false);
  return (
    <div className="w-full flex justify-end ">
      <div className="flex gap-3 max-md:w-full max-md:justify-between">
        <div className="flex justify-between p-3 bg-white rounded-md border-[#3A35411F] border-[1px] w-32 relative">
          <p>Urutkan</p>
          <img
            src="./images/Icon/Icon/Pagination/Bold_Bottom_Vector.svg"
            alt="Arrow"
            onClick={() => setDropMenu(!DropMenu)}
            className="max-md:w-5"
          />
          {DropMenu && <DropdownHarga />}
        </div>

        <div className="flex justify-between p-3 bg-white rounded-md border-[#3A35411F] border-[1px] items-center">
          <input
            type="text"
            className="outline-none w-32"
            placeholder="Cari Kelas"
          />
          <img src="./images/Icon/Icon/Search.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default FilterKelas;
