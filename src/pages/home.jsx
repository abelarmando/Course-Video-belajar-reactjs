import Footer from "../Components/Fragments/Footer";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";
import Navbarlogin from "../Components/Fragments/Navbar/Navbarlogin";
import BodyLayouts from "../Components/Layouts/BodyLayouts";

function Home() {
  return (
    <>
      <Navbar text="Kategori ">
        <Navbarlogin />
        <NavbarImg />
      </Navbar>
      <BodyLayouts />
      <Footer />
    </>
  );
}

export default Home;
