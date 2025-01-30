import Navbar from "../Components/Fragments/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getFromLocalStorage } from "../services/function_service";
import Ringkasan_Pesanan from "../Components/Fragments/Ringkasan_Pesanan";
import { Products } from "../Components/Data/Data";
import Jenis_Pembayaran from "../Components/Fragments/Jenis_Pembayaran";

function Bayar() {
  const { id } = useParams();
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [product, setproduct] = useState(Products[cart[id - 1].productnum]);

  console.log(product);

  return (
    <>
      <Navbar />
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <div>
          <Ringkasan_Pesanan data={product} hide="block" />
        </div>
      </div>
    </>
  );
}

export default Bayar;
