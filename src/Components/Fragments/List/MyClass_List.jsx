import Card_Myclass from "../Card/Card_Myclass";
import FilterKelas from "../FilterKelas";

function MyClass_List() {
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white space-y-3 w-full">
      <div className="md:flex items-center space-y-3 ">
        <ul
          className="flex gap-9 overflow-x-auto overflow-y-hidden h-10 w-full"
          id="kelas"
        >
          <li
            value="SemuaKelas"
            className="relative text-red-500 flex-shrink-0"
          >
            Semua Kelas
            <span className="absolute w-[50%] h-1 bg-red-500 left-0 bottom-0 top-0 translate-y-7  rounded-md "></span>
          </li>
          <li value="SedangBerjalan" className="flex-shrink-0">
            Sedang Berjalan
          </li>
          <li value="Selesai" className="flex-shrink-0">
            Selesai
          </li>
        </ul>
        <FilterKelas />
      </div>
      <Card_Myclass />
    </div>
  );
}

export default MyClass_List;
