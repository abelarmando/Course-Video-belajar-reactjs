import Book from "../Icon/Book";
import Profile from "../Icon/Profile";
import Bag from "../Icon/Bag";
import Cart_list from "../Fragments/Cart_list.jsx";
function keteranganLayouts({ category }) {
  console.log(typeof category, category);
  return (
    <div className="md:flex gap-5 max-md:space-y-6">
      <div className="md:w-[20%] ">
        <h4>Daftar Pesanan</h4>
        <p>Informasi terperinci mengenai pembelian</p>
        <div className="bg-white rounded-md border-[1px] border-[#F1F1F1] p-5 space-y-6 mt-3 cursor-pointer">
          <div
            className="flex gap-2 p-3"
            onClick={() => (window.location.href = "/keterangan/profile")}
          >
            <Profile />
            Profile Saya
          </div>
          <div
            className="flex gap-2 p-3"
            onClick={() => (window.location.href = "/keterangan/myclass")}
          >
            <Book />
            Kelas Saya
          </div>
          <div
            className="flex gap-2 border-[1px] border-[#FFBD3A] bg-[#FFF7D7CC] rounded-md p-3"
            onClick={() => (window.location.href = "/keterangan/pesanan")}
          >
            <Bag />
            Pesanan Saya
          </div>
        </div>
      </div>
      <div className="md:w-[80%]">{category == "pesanan" && <Cart_list />}</div>
    </div>
  );
}

export default keteranganLayouts;
