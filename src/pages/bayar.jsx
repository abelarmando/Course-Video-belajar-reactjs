import Navbar from "../Components/Fragments/Navbar/Navbar";
import { useParams } from "react-router-dom";
import BayarLayouts from "../Components/Layouts/BayarLayouts";
import Countdown from "../Components/Fragments/Countdown";
import { useState } from "react";
import { getFromLocalStorage } from "../services/function_service";
import Progress_Bar from "../Components/Fragments/Navbar/Progress_Bar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";

function Bayar() {
  const { id } = useParams();
  const [cart, setcart] = useState(getFromLocalStorage("cart") || []);
  const [cartpayment, setcartpayment] = useState(cart[id - 1]);
  console.log(cartpayment);

  return (
    <>
      <Navbar>
        <div className="max-md:hidden">
          <Progress_Bar color1="#3ECF4C" />
        </div>
        <div className="md:hidden z-50">
          <NavbarImg />
        </div>
      </Navbar>
      <Countdown deadline={new Date(cartpayment.tenggat).getTime()} />
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <div className="md:hidden mb-3">
          <Progress_Bar color1="#3ECF4C" />
        </div>
        <div>
          <BayarLayouts id={id} />
        </div>
      </div>
    </>
  );
}

export default Bayar;
