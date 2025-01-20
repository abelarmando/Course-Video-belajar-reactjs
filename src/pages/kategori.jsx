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
      <div className="py-16 px-[120px] max-md:px-5 max-md:py-7">
        <div className="mb-5 space-y-2">
          <h1 className="text-3xl max-md:text-xl">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        <KategoriLayouts />
      </div>
      <Footer />
    </>
  );
}

export default Kategori;
