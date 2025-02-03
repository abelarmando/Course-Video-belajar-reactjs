import { useState } from "react";
import { getFromLocalStorage } from "../../services/function_service";
import FilterKelas from "./FilterKelas";
import Card_Cart from "./Card/Card_Cart";
import { Products } from "../Data/Data";
import Pagination from "./Pagination";
function Cart_list() {
  const [Cart, setCart] = useState(getFromLocalStorage("cart") || []);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);

  Cart.reverse();
  const indexOfLastPost = CurrentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentCart = Cart.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white space-y-3">
      <div className="md:flex items-center space-y-3">
        <ul
          className="flex gap-9 overflow-x-auto overflow-y-hidden  h-10 w-full"
          id="kelas"
        >
          <li
            value="Semua Kelas"
            className="relative text-red-500 flex-shrink-0"
          >
            Semua Pesanan
            <span className="absolute w-[50%] h-1 bg-red-500 left-0 bottom-0 top-0 translate-y-7  rounded-md "></span>
          </li>
          <li value="Menunggu" className="flex-shrink-0">
            Menunggu
          </li>
          <li value="Berhasil" className="flex-shrink-0">
            Berhasil
          </li>
          <li value="Gagal" className="flex-shrink-0">
            Gagal
          </li>
        </ul>
        <FilterKelas />
      </div>
      {currentCart.map((item, i) => (
        <Card_Cart
          key={i}
          id={i}
          invoice={item.invoice}
          tenggat={item.tenggat}
          title={Products[item.productnum].titlepage}
          price={Products[item.productnum].tagprice}
          img={Products[item.productnum].imgproduct}
          paid={item.paid}
          diff={new Date(item.tenggat).getTime() - new Date().getTime()}
        />
      ))}
      <div>
        <Pagination
          totalPost={Cart.length}
          postsPerPage={PostsPerPage}
          setCurrentPage={setCurrentPage}
          CurrentPage={CurrentPage}
        />
      </div>
    </div>
  );
}

export default Cart_list;
