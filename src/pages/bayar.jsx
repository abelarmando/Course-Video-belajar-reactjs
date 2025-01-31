import Navbar from "../Components/Fragments/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Ringkasan_Pesanan from "../Components/Fragments/Ringkasan_Pesanan";
import BayarLayouts from "../Components/Layouts/BayarLayouts";

function Bayar() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <BayarLayouts id={id} />
      </div>
    </>
  );
}

export default Bayar;
