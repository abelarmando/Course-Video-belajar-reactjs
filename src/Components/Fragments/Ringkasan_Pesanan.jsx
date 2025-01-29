import { useState } from "react";

function Ringkasan_Pesanan({ data }) {
  const [admin, setadmin] = useState(7000);
  const Rupiah = new Intl.NumberFormat("id-ID");
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white space-y-2">
      <h3>Ringkasan Pesanan</h3>
      <div className="flex justify-between">
        <p>{data.titlepage}</p>
        <p>Rp {Rupiah.format(data.tagprice)}</p>
      </div>
      <div className="flex justify-between">
        <p>Biaya Admin</p>
        <p>Rp {Rupiah.format(admin)}</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <h4>Total Pembayran</h4>
        <p className="text-green-500">
          Rp {Rupiah.format(data.tagprice + admin)}
        </p>
      </div>
      <button className="w-full rounded-md bg-[#3ECF4C] text-white h-10">
        Beli Sekarang
      </button>
    </div>
  );
}

export default Ringkasan_Pesanan;
