import Navbar from "../Components/Fragments/Navbar/Navbar";
import MetodeLayouts from "../Components/Layouts/MetodeLayouts";
import { useParams } from "react-router-dom";

function Metode() {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <MetodeLayouts id={id} />
      </div>
    </>
  );
}

export default Metode;
