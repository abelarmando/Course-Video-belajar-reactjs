import Book from "../Icon/Book";
import Profile from "../Icon/Profile";
import Bag from "../Icon/Bag";
import Cart_tab from "../Fragments/Cart_tab";
import MyClass_List from "../Fragments/List/MyClass_List";
import Profile_Card from "../Fragments/Card/Profile_Card";
function keteranganLayouts({ category }) {
  return (
    <div className="md:flex gap-5 max-md:space-y-6">
      <div className="md:w-fit  ">
        <h4>Daftar Pesanan</h4>
        <p>Informasi terperinci mengenai pembelian</p>
        <div className="bg-white rounded-md border-[1px] border-[#F1F1F1] p-5 space-y-6 mt-3 cursor-pointer">
          <div
            className={`flex gap-2 p-3 ${
              category === "profile" &&
              "border-[1px] border-[#FFBD3A] bg-[#FFF7D7CC] rounded-md "
            }`}
            onClick={() => (window.location.href = "/keterangan/profile")}
          >
            <Profile />
            Profile Saya
          </div>
          <div
            className={`flex gap-2 p-3 ${
              category === "myclass" &&
              "border-[1px] border-[#FFBD3A] bg-[#FFF7D7CC] rounded-md "
            }`}
            onClick={() => (window.location.href = "/keterangan/myclass")}
          >
            <Book />
            Kelas Saya
          </div>
          <div
            className={`flex gap-2 p-3 ${
              category === "pesanan" &&
              "border-[1px] border-[#FFBD3A] bg-[#FFF7D7CC] rounded-md "
            } 
            `}
            onClick={() => (window.location.href = "/keterangan/pesanan")}
          >
            <Bag />
            Pesanan Saya
          </div>
        </div>
      </div>
      {category == "pesanan" && <Cart_tab />}
      {category == "myclass" && <MyClass_List />}
      {category == "profile" && <Profile_Card />}
    </div>
  );
}

export default keteranganLayouts;
