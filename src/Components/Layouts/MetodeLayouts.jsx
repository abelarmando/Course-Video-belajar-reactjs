import { useEffect, useState } from "react";
import Bank from "../Fragments/bank";
import { Banks, Products } from "../Data/Data";
import Ringkasan_Pesanan from "../Fragments/Ringkasan_Pesanan";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";

function MetodeLayouts({ id }) {
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

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(checkbox[newid].value);
    // windows.location.href = `/bayar/${checkbox[newid].value}/${id}`;
  };

  return (
    <div className="flex gap-4 w-full max-md:flex-col-reverse">
      <div className="md:w-[60%]">
        <form
          onSubmit={(e) => handlesubmit(e)}
          className="space-y-4"
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
              {atm.map((x) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img}
                  setnewid={setnewid}
                  value={x.value}
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
              {digital.map((x) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img}
                  setnewid={setnewid}
                  value={x.value}
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
              {kredit.map((x) => (
                <Bank
                  id={x.id}
                  title={x.name}
                  img={x.img1}
                  setnewid={setnewid}
                  value={x.value}
                >
                  <img src={x.img2} alt="" /> <img src={x.img3} alt="" />
                </Bank>
              ))}
            </ul>
          </div>
          <Ringkasan_Pesanan data={Products[id - 1]} />
        </form>
      </div>
      <div className="md:w-[40%]">
        <Keterangan_Course data={Products[id - 1]} />
      </div>
    </div>
  );
}

export default MetodeLayouts;
