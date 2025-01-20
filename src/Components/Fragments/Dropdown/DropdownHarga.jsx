function DropdownHarga() {
  return (
    <ul className="absolute bg-white rounded-md border-[1px] border-[#F1F1F1] top-0 translate-y-14 w-40 md:right-0 translate-x-0 max-md:left-0">
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">
        Harga Rendah
      </li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">
        Harga Tinggi
      </li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">A to Z</li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">X to A</li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">
        Rating Tertingi
      </li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 w-full">
        Rating Terendah
      </li>
    </ul>
  );
}

export default DropdownHarga;
