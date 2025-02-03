import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import { useState, useEffect } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../services/function_service";
import { Products } from "../Data/Data";
import { Banks } from "../Data/Data";
import Cara_Pembayaran from "../Fragments/Cara_Pembayaran";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";

function BayarLayouts({ id }) {
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [product, setproduct] = useState(Products[cart[id - 1].productnum]);
  const [cartpayment, setcartpayment] = useState(cart[id - 1]);
  const [bank] = useState(
    Banks.find((item) => item.value == cartpayment.pembayaran)
  );
  const [dif, setdiff] = useState();
  useEffect(() => {
    setdiff(new Date(cartpayment.tenggat).getTime() - new Date().getTime());
  }, [dif]);

  const handlebayar = (id) => {
    cart[id - 1].paid = true;
    saveToLocalStorage("cart", cart);
    window.location.href = `/selesai`;
  };

  return (
    <div className=" flex gap-9 max-md:flex-col-reverse">
      <div className="md:w-[60%] space-y-9">
        <Ringkasan_Pesanan hide="block" data={product} bank={bank}>
          {dif > 0 && (
            <div className="md:flex items-center gap-2 max-md:space-y-2">
              <button
                className="w-full border-[1px] border-[#3ECF4C] rounded-md text-[#3ECF4C] py-2"
                onClick={() => (window.location.href = `/ubahbayar/${id}`)}
              >
                Ganti Metode Pembayaran
              </button>
              <button
                className="w-full border-[1px] bg-[#3ECF4C] rounded-md text-white py-2"
                onClick={() => handlebayar(id)}
              >
                Bayar Sekarang
              </button>
            </div>
          )}
        </Ringkasan_Pesanan>
        <Cara_Pembayaran databank={bank} />
      </div>
      <div className="md:w-[40%]">
        <Keterangan_Course data={product} />
      </div>
    </div>
  );
}

export default BayarLayouts;
