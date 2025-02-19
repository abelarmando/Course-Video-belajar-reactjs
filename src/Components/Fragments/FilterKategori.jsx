import { useEffect, useState } from "react";
import DropdownKategori from "./Dropdown/DropdownKategori";

const FilterKategoriNama = [
  "Pemasaran",
  "Digital & Teknologi",
  "Pengembangan Diri",
  "Bisnis Manajemen",
];

const FilterKategoriDurasi = [
  "Kurang dari 4 Jam",
  "4 - 8 Jam",
  "Lebih dari 8 Jam",
];

function FilterKategori() {
  const [DropMenu1, setDropMenu1] = useState(false);
  const [DropMenu2, setDropMenu2] = useState(false);
  const [DropMenu3, setDropMenu3] = useState(false);
  useEffect(() => {}, []);

  return (
    <div className="w-[400px] h-fit border-[1px] border-[#F1F1F1] p-5 rounded-md bg-white space-y-3 max-md:w-full mb-4">
      <div className="flex justify-between ">
        <h3>Filter</h3>
        <p className="text-red-500">Reset</p>
      </div>
      <div className="border-[1px] border-[#F1F1F1] rounded-md px-4 py-3  h-fit">
        <div className="w-full flex justify-between">
          <h3 className="flex gap-2 text-green-500">
            <img src="./images/Icon/Icon/Kategori/Book.svg" alt="Book" />
            Bidang Studi
          </h3>
          <img
            src="./images/Icon/Icon/Pagination/Bottom_Vector.svg"
            alt=""
            className={DropMenu1 ? "block" : "hidden"}
            onClick={() => setDropMenu1(!DropMenu1)}
          />
          <img
            src="./images/Icon/Icon/Pagination/Up_Vector.svg"
            alt=""
            className={DropMenu1 ? "hidden" : "block"}
            onClick={() => setDropMenu1(!DropMenu1)}
          />
        </div>

        <ul className={`space-y-3 ${DropMenu1 ? "" : "mt-3"}`}>
          {FilterKategoriNama.map((item) => (
            <DropdownKategori
              text={item}
              classname="appearance-none bg-[#E2FCD9CC] w-5 h-5 rounded-md border-[1px] border-[#3ECF4C] accent-black "
              Drop={DropMenu1 ? "hidden" : "block"}
            />
          ))}
        </ul>
      </div>

      <div className="border-[1px] border-[#F1F1F1] rounded-md px-4 py-3">
        <div className="w-full flex justify-between">
          <h3 className="flex gap-2 text-green-500">
            <img src="./images/Icon/Icon/Kategori/Bag.svg" alt="Book" />
            Harga
          </h3>
          <img
            src="./images/Icon/Icon/Pagination/Bottom_Vector.svg"
            alt=""
            className={DropMenu2 ? "block" : "hidden"}
            onClick={() => setDropMenu2(!DropMenu2)}
          />
          <img
            src="./images/Icon/Icon/Pagination/Up_Vector.svg"
            alt=""
            className={DropMenu2 ? "hidden" : "block"}
            onClick={() => setDropMenu2(!DropMenu2)}
          />
        </div>

        <ul className={`space-y-3 ${DropMenu2 ? "" : "mt-3"}`}>
          {FilterKategoriNama.map((item) => (
            <DropdownKategori
              text={item}
              classname="appearance-none bg-[#E2FCD9CC] w-5 h-5 rounded-md border-[1px] border-[#3ECF4C] accent-black "
              Drop={DropMenu2 ? "hidden" : "block"}
            />
          ))}
        </ul>
      </div>

      <div className="border-[1px] border-[#F1F1F1] rounded-md px-4 py-3">
        <div className="w-full flex justify-between">
          <h3 className="flex gap-2 text-green-500">
            <img src="./images/Icon/Icon/Kategori/Clock.svg" alt="Book" />
            Duruasi
          </h3>
          <img
            src="./images/Icon/Icon/Pagination/Bottom_Vector.svg"
            alt=""
            className={DropMenu3 ? "block" : "hidden"}
            onClick={() => setDropMenu3(!DropMenu3)}
          />
          <img
            src="./images/Icon/Icon/Pagination/Up_Vector.svg"
            alt=""
            className={DropMenu3 ? "hidden" : "block"}
            onClick={() => setDropMenu3(!DropMenu3)}
          />
        </div>

        <ul className={`space-y-3 ${DropMenu3 ? "" : "mt-3"}`}>
          {FilterKategoriDurasi.map((item) => (
            <DropdownKategori
              text={item}
              classname="appearance-none bg-[#E2FCD9CC] w-5 h-5 rounded-full border-[1px] border-[#3ECF4C] accent-black "
              Drop={DropMenu3 ? "hidden" : "block"}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterKategori;
