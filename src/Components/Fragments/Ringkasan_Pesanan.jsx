import { useState } from "react";

function Ringkasan_Pesanan({ data, hide = "hidden", bank = {} }) {
  const [admin, setadmin] = useState(7000);
  const Rupiah = new Intl.NumberFormat("id-ID");
  console.log(bank);
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white space-y-2">
      <div className={`${hide}`}>
        <h3>Metode Pembayaran</h3>
        <div className="w-full h-fit border-[1px] border-[#F1F1F1] rounded-md flex flex-col justify-center items-center px-9 py-5 space-y-2">
          <img src={bank.imglogo} alt="" className="w-24" />
          <p className="font-bold">Bayar Melalui Virtal Account </p>
          <p className="relative">
            {bank.va} 088170000{" "}
            <span className="text-red-500 font-semibold absolute translate-x-2 -translate-y-1">
              Salin
            </span>
          </p>
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
      <div className={`${hide} flex items-center gap-2`}>
        <button className="w-full border-[1px] border-[#3ECF4C] rounded-md text-[#3ECF4C] py-2">
          Ganti Metode Pembayaran
        </button>
        <button className="w-full border-[1px] bg-[#3ECF4C] rounded-md text-white py-2">
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}

export default Ringkasan_Pesanan;
