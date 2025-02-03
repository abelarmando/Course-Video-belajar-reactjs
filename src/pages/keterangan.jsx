import Navbar from "../Components/Fragments/Navbar/Navbar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";
import KeteranganLayouts from "../Components/Layouts/KeteranganLayouts";
import Navbarlogin from "../Components/Fragments/Navbar/Navbarlogin";
import Footer from "../Components/Fragments/Footer";
import { useParams } from "react-router-dom";

function keterangan() {
  const { category } = useParams();
  return (
    <>
      <Navbar text="Kategori">
        <NavbarImg />
        <Navbarlogin />
      </Navbar>

      <div className="px-[120px] py-16 max-md:px-5 max-md:py-7">
        <KeteranganLayouts category={category} />
      </div>
      <Footer />
    </>
  );
}

export default keterangan;
