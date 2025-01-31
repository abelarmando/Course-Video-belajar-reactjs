import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import { useState } from "react";
import { getFromLocalStorage } from "../../services/function_service";
import { Products } from "../Data/Data";
import { Banks } from "../Data/Data";
import Cara_Pembayaran from "../Fragments/Cara_Pembayaran";

function BayarLayouts({ id }) {
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [product, setproduct] = useState(Products[cart[id - 1].productnum]);
  const [cartpayment, setcartpayment] = useState(cart[id - 1]);
  const [bank] = useState(
    Banks.find((item) => item.value == cartpayment.pembayaran)
  );

  return (
    <div className="space-y-5">
      <Ringkasan_Pesanan hide="block" data={product} bank={bank} />
      <Cara_Pembayaran databank={bank} />
    </div>
  );
}

export default BayarLayouts;
