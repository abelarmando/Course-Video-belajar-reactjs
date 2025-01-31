import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import { useState } from "react";
import { getFromLocalStorage } from "../../services/function_service";
import { Products } from "../Data/Data";
import { Banks } from "../Data/Data";

function BayarLayouts({ id }) {
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [product, setproduct] = useState(Products[cart[id - 1].productnum]);
  const [cartpayment, setcartpayment] = useState(cart[id - 1]);
  const [bank] = useState(
    Banks.find((item) => item.value == cartpayment.pembayaran)
  );

  return (
    <div>
      <Ringkasan_Pesanan hide="block" data={product} bank={bank} />
    </div>
  );
}

export default BayarLayouts;
