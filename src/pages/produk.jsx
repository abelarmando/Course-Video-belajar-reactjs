import DetailLayouts from "../Components/Layouts/DetailLayouts";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import Navbarlogin from "../Components/Fragments/Navbar/Navbarlogin";

function Produk() {
  return (
    <>
      <Navbar text="Produk ">
        <Navbarlogin />
      </Navbar>
      <div className="px-[120px] py-16 max-md:px-5 max-md:py-7">
        <DetailLayouts />
      </div>
    </>
  );
}

export default Produk;
