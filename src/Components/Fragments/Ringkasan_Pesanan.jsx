import { useState } from "react";

function Ringkasan_Pesanan({ data, hide = "hidden" }) {
  const [admin, setadmin] = useState(7000);
  const Rupiah = new Intl.NumberFormat("id-ID");
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white space-y-2">
      <div className={`${hide}`}>
        <h3>Metode Pembayaran</h3>
        <div className="w-full h-12 border-[1px] border-[#F1F1F1] rounded-md flex flex-col justify-center items-center px-9 py-5">
          <img src="" alt="a" />
          <p className="font-bold">Bayar Melalui Virtal Account </p>
        </div>
      </div>
      <h3>Ringkasan Pesanan</h3>
      <div className="flex justify-between">
        <p className="font-light w-1/2 ">{data.titlepage}</p>
        <p className="">Rp {Rupiah.format(data.tagprice)}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-light">Biaya Admin</p>
        <p>Rp {Rupiah.format(admin)}</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <h4>Total Pembayran</h4>
        <p className="text-green-500">
          Rp {Rupiah.format(data.tagprice + admin)}
        </p>
      </div>
      <button
        className={`w-full rounded-md bg-[#3ECF4C] text-white h-10 ${
          hide == "hidden" ? "block" : "hidden"
        }`}
      >
        Beli Sekarang
      </button>
    </div>
  );
}

export default Ringkasan_Pesanan;
