import Navbar from "../Components/Fragments/Navbar/Navbar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";
import Progress_Bar from "../Components/Fragments/Navbar/Progress_Bar";
import MetodeLayouts from "../Components/Layouts/MetodeLayouts";
import { useParams } from "react-router-dom";

function Metode() {
  const { id } = useParams();

  return (
    <>
      <Navbar>
        <div className="max-md:hidden">
          <Progress_Bar />
        </div>
        <div className="md:hidden z-50">
          <NavbarImg />
        </div>
      </Navbar>
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <div className="md:hidden mb-3">
          <Progress_Bar />
        </div>
        <MetodeLayouts id={id} />
      </div>
    </>
  );
}

export default Metode;
