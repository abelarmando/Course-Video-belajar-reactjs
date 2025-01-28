import { useEffect, useState } from "react";
import Bank from "../Fragments/bank";
import { Banks } from "../Data/Data";

function MetodeLayouts() {
  const [atm, setatm] = useState(Banks.filter((item) => item.type === "atm"));
  const [checkbox, setcheckbox] = useState({});
  useEffect(() => {
    setcheckbox(document.querySelectorAll("input"));
  }, []);
  const handleclick = (number) => {
    for (let i = 0; i < checkbox.length; i++) {
      if (i === number) {
        checkbox[number].checked = !checkbox[number].checked;
      } else {
        checkbox[i].checked = false;
      }
    }
  };

  return (
    <div>
      <div>
        <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white">
          <h3>Metode Pembayaran</h3>
          <form action="">
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3">
                Transfer Bank
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
                  onclick={() => handleclick(x.id)}
                />
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MetodeLayouts;
