import { Link } from "react-router-dom";
function DropdownMenu() {
  const handlelogout = () => {
    localStorage.setItem("islogin", false);
    window.location.reload();
  };
  return (
    <ul className="absolute bg-white border-[1px] border-[#F1F1F1] rounded-md w-40  right-0 translate-y-3 max-md:w-full max-md:translate-y-7">
      <li className="border-b-[1px] border-[#F1F1F1] p-3 hidden max-md:block">
        <Link to="/kategori"> Kategori</Link>
      </li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3">Profil Saya</li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3">Kelas Saya</li>
      <li className="border-b-[1px] border-[#F1F1F1] p-3 ">Pesanan Saya</li>
      <li
        className="flex gap-2 p-3 text-red-500 cursor-pointer"
        onClick={() => handlelogout()}
      >
        Keluar
        <img src="./images/Icon/Icon/Logout.svg" alt="" className="h-6" />
      </li>
    </ul>
  );
}

export default DropdownMenu;
