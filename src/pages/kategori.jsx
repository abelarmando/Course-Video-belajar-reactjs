import KategoriLayouts from "../Components/Layouts/KategoriLayouts";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import Navbarlogin from "../Components/Fragments/Navbar/Navbarlogin";
import Footer from "../Components/Fragments/Footer";

function Kategori() {
  return (
    <>
      <Navbar text="Kategori ">
        <Navbarlogin />
      </Navbar>
      <div className="py-16 px-[120px] ">
        <KategoriLayouts />
      </div>
      <Footer />
    </>
  );
}

export default Kategori;
