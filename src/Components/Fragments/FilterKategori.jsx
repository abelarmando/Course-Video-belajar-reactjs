function FilterKategori() {
  return (
    <div className="w-[600px] h-fit border-[1px] border-[#F1F1F1] p-5 rounded-md bg-white space-y-3">
      <div className="flex justify-between">
        <h3>Filter</h3>
        <p className="text-red-500">Reset</p>
      </div>
      <div className="border-[1px] border-[#F1F1F1] rounded-md px-4 py-3 space-y-2">
        <h3 className="flex gap-2 text-green-500">
          <img src="./images/Icon/Icon/Kategori/Book.svg" alt="Book" />
          Bidang Studi
        </h3>

        <ul>
          <li className="flex gap-3">
            <input type="checkbox" className="w-[18px] bg-black" />
            Pemasaran
          </li>
          <li>
            <input type="checkbox" />
            Digital & Tekonologi
          </li>
          <li>
            <input type="checkbox" />
            Pengembangan Diri
          </li>
          <li>
            <input type="checkbox" />
            Bisnis Manajemen
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterKategori;
