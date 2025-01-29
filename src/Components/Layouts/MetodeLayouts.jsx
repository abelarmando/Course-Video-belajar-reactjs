import { useEffect, useState } from "react";
import Bank from "../Fragments/bank";
import { Banks, Products } from "../Data/Data";
import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";

function MetodeLayouts() {
  const [atm] = useState(Banks.filter((item) => item.type === "atm"));
  const [checkbox, setcheckbox] = useState({});
  const [newid, setnewid] = useState();
  const [digital] = useState(Banks.filter((item) => item.type === "digital"));
  const [kredit] = useState(Banks.filter((item) => item.type === "kredit"));

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
    <div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-9"
          aria-required="true"
        >
          <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white ">
            <h3 className="mb-3">Metode Pembayaran</h3>

            <ul className="space-y-3">
              <li className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3">
                <p className="font-bold">Transfer Bank</p>
                <img
                  src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
                  className="rotate-180"
                  alt="a"
                />
              </li>
              {atm.map((x, i) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img}
                  key={i}
                  setnewid={setnewid}
                />
              ))}
              <li className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3">
                <p className="font-bold">E-Wallet</p>
                <img
                  src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
                  className="rotate-180"
                  alt="a"
                />
              </li>
              {digital.map((x, i) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img}
                  key={i}
                  setnewid={setnewid}
                />
              ))}
              <li className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3">
                <p className="font-bold">Kartu Kredit/Debit</p>

                <img
                  src="/images/Icon/Icon/Pagination/Bottom_Vector_Black.svg"
                  className="rotate-180"
                  alt="a"
                />
              </li>
              {kredit.map((x, i) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img1}
                  key={i}
                  setnewid={setnewid}
                >
                  <img src={x.img2} alt="" /> <img src={x.img3} alt="" />
                </Bank>
              ))}
            </ul>
          </div>
          <Ringkasan_Pesanan data={Products[0]} />
        </form>
      </div>
    </div>
  );
}

export default MetodeLayouts;
