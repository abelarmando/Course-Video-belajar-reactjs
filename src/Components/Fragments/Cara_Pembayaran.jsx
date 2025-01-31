import { useState } from "react";
function Cara_Pembayaran({ databank }) {
  //   console.log(databank.pembayaran.atm);
  const [pembayaran] = useState(databank.pembayaran);
  console.log(pembayaran);
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white space-y-3">
      <h3>Tata Cara Pembayaran</h3>
      <div className="border-[1px] border-[#F1F1F1] rounded-md px-5 py-4 space-y-2">
        <p className="flex justify-between font-bold">
          ATM {databank.name}
          <img
            src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
            className="rotate-180"
            alt="a"
          />
        </p>
        <ol className="list-decimal px-4 text-[#333333AD]">
          {pembayaran.atm.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="border-[1px] border-[#F1F1F1] rounded-md px-5 py-4 space-y-2">
        <p className="flex justify-between font-bold">
          Mobile Banking {databank.name}
          <img
            src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
            className="rotate-180"
            alt="a"
          />
        </p>
        <ol className="list-decimal px-4 text-[#333333AD]">
          {pembayaran.mobile.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
      <div className="border-[1px] border-[#F1F1F1] rounded-md px-5 py-4 space-y-2">
        <p className="flex justify-between font-bold">
          Internet {databank.name}
          <img
            src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
            className="rotate-180"
            alt="a"
          />
        </p>
        <ol className="list-decimal px-4 text-[#333333AD]">
          {pembayaran.internet.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Cara_Pembayaran;
