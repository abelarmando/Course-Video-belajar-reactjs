import { Login } from "../Components/Elements/Input/Index";
import Footer from "../Components/Fragments/Footer";
import Navbar from "../Components/Fragments/Navbar";
import Navbarlogin from "../Components/Fragments/Navbarlogin";
import BodyLayouts from "../Components/Layouts/BodyLayouts";

function Home() {
  return (
    <>
      <Navbar text="Kategori ">
        <Navbarlogin />
      </Navbar>
      <BodyLayouts />
      <Footer />
    </>
  );
}

export default Home;
