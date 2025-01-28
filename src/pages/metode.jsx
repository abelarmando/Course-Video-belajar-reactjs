import Navbar from "../Components/Fragments/Navbar/Navbar";
import MetodeLayouts from "../Components/Layouts/MetodeLayouts";

function Metode() {
  return (
    <>
      <Navbar />
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <MetodeLayouts />
      </div>
    </>
  );
}

export default Metode;
