import { Banks } from "../Data/Data";
import { useEffect, useState } from "react";
import Bank from "./Bank";

function Jenis_Pembayaran({ setnewid, setcheckbox, newid, checkbox }) {
  const [digital] = useState(Banks.filter((item) => item.type === "digital"));
  const [kredit] = useState(Banks.filter((item) => item.type === "kredit"));
  const [atm] = useState(Banks.filter((item) => item.type === "atm"));
  const [atmclick, setatmclick] = useState(true);
  const [kreditclick, setkreditclick] = useState(true);
  const [bankclick, setbankclick] = useState(true);

  useEffect(() => {
    setcheckbox(document.querySelectorAll("input"));
    for (let i = 0; i < checkbox.length; i++) {
      if (i == newid) {
        checkbox[i].checked = !checkbox[i].checked;
      } else {
        checkbox[i].checked = false;
      }
    }
  }, [newid]);
  return (
    <ul className="space-y-3">
      <li
        className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3"
        onClick={() => setatmclick(!atmclick)}
      >
        <p className="font-bold">Transfer Bank</p>
        <img
          src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
          className="rotate-180"
          alt="a"
        />
      </li>
      <div className={`${atmclick ? "block" : "hidden"} space-y-3`}>
        {atm.map((x, i) => (
          <Bank
            key={i}
            id={x.id}
            title={x.name}
            img={x.img}
            setnewid={setnewid}
            value={x.value}
          />
        ))}
      </div>
      <li
        className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3"
        onClick={() => setbankclick(!bankclick)}
      >
        <p className="font-bold">E-Wallet</p>
        <img
          src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
          className="rotate-180"
          alt="a"
        />
      </li>
      <div className={`${bankclick ? "block" : "hidden"} space-y-3`}>
        {digital.map((x, i) => (
          <Bank
            key={i}
            id={x.id}
            title={x.name}
            img={x.img}
            setnewid={setnewid}
            value={x.value}
          />
        ))}
      </div>
      <li
        className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3"
        onClick={() => setkreditclick(!kreditclick)}
      >
        <p className="font-bold">Kartu Kredit/Debit</p>

        <img
          src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
          className="rotate-180"
          alt="a"
        />
      </li>
      <div className={`${kreditclick ? "block" : "hidden"} space-y-3`}>
        {kredit.map((x, i) => (
          <Bank
            key={i}
            id={x.id}
            title={x.name}
            img={x.img1}
            setnewid={setnewid}
            value={x.value}
          >
            <img src={x.img2} alt="" /> <img src={x.img3} alt="" />
          </Bank>
        ))}
      </div>
    </ul>
  );
}

export default Jenis_Pembayaran;
