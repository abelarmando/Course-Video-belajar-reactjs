import { useState } from "react";
import { Products } from "../Data/Data";
import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";
import Jenis_Pembayaran from "../Fragments/Jenis_Pembayaran";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../services/function_service";

function MetodeLayouts({ id }) {
  const [checkbox, setcheckbox] = useState({});
  const [newid, setnewid] = useState();

  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [noinvoice, setnoinvoice] = useState(cart.length + 1);

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(newid);

    if (newid < 0) {
      alert("Pilih Metode Pembayaran");
    } else {
      setcart([
        ...cart,
        {
          id: noinvoice,
          invoice: `HEL/VI/${noinvoice}`,
          productnum: id - 1,
          pembayaran: checkbox[newid].value,
          paid: false,
          time: new Date().toLocaleString(),
          tenggat: new Date(
            new Date().getTime() + 60 * 60 * 1000
          ).toLocaleString(),
        },
      ]);
      setnoinvoice((prev) => prev + 1);
      window.location.href = `/bayar/${noinvoice}`;
    }
  };
  saveToLocalStorage("cart", cart);

  return (
    <div className="flex gap-4 w-full max-md:flex-col-reverse">
      <div className="md:w-[60%]">
        <form
          onSubmit={(e) => handlesubmit(e)}
          className="space-y-4"
          aria-required="true"
        >
          <Jenis_Pembayaran
            newid={newid}
            setnewid={setnewid}
            setcheckbox={setcheckbox}
            checkbox={checkbox}
          />

          <Ringkasan_Pesanan data={Products[id - 1]}>
            <button
              className={`w-full rounded-md bg-[#3ECF4C] text-white h-10 `}
            >
              Beli Sekarang
            </button>
          </Ringkasan_Pesanan>
        </form>
      </div>
      <div className="md:w-[40%]">
        <Keterangan_Course data={Products[id - 1]} />
      </div>
    </div>
  );
}

export default MetodeLayouts;
