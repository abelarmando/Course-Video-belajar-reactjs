import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import { useState } from "react";
import { Products } from "../Data/Data";
import { Banks } from "../Data/Data";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../services/function_service";
import Jenis_Pembayaran from "../Fragments/Jenis_Pembayaran";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";

function UbahLayouts({ id }) {
  const [checkbox, setcheckbox] = useState({});
  const [newid, setnewid] = useState();
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [product, setproduct] = useState(Products[cart[id - 1].productnum]);
  const [payment, setpayment] = useState(cart[id - 1]);
  const [bankuse] = useState(
    Banks.find((item) => item.value == payment.pembayaran)
  );

  const handleclick = (e) => {
    e.preventDefault();
    if (newid < 0) {
      alert("Pilih Metode Pembayaran");
    } else {
      cart[id - 1].pembayaran = checkbox[newid].value;
      window.location.href = `/bayar/${id}`;
      saveToLocalStorage("cart", cart);
    }
  };

  return (
    <div className="flex gap-9 max-md:flex-col-reverse max-md:gap-6">
      <div className="md:w-[60%] space-y-6">
        <Ringkasan_Pesanan data={product} bank={bankuse} />
        <form action="">
          <Jenis_Pembayaran
            newid={newid}
            setnewid={setnewid}
            setcheckbox={setcheckbox}
            checkbox={checkbox}
            title="Ubah Metode Pembayaran"
          >
            <button
              className="w-full border-[1px] bg-[#3ECF4C] rounded-md text-white py-2"
              onClick={(e) => handleclick(e)}
            >
              Bayar Sekarang
            </button>
          </Jenis_Pembayaran>
        </form>
      </div>
      <div className="md:w-[40%]">
        <Keterangan_Course data={product} />
      </div>
    </div>
  );
}

export default UbahLayouts;
