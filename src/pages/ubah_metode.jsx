import Navbar from "../Components/Fragments/Navbar/Navbar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";
import Progress_Bar from "../Components/Fragments/Navbar/Progress_Bar";
import UbahLayouts from "../Components/Layouts/UbahLayouts";
import { useParams } from "react-router-dom";

function Ubah_Metode() {
  const { id } = useParams();
  return (
    <>
      <Navbar>
        <div className="max-md:hidden">
          <Progress_Bar />
        </div>
        <div className="md:hidden">
          <NavbarImg />
        </div>
      </Navbar>
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7 space-y-9 max-md:space-y-6">
        <div className="md:hidden">
          <Progress_Bar />
        </div>
        <UbahLayouts id={id} />
      </div>
    </>
  );
}

export default Ubah_Metode;
