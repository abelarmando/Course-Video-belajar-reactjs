import DetailLayouts from "../Components/Layouts/DetailLayouts";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import Navbarlogin from "../Components/Fragments/Navbar/Navbarlogin";
import Footer from "../Components/Fragments/Footer";
import { useParams } from "react-router-dom";
import { Products } from "../Components/Data/Data.jsx";
import { useProduct } from "../../store.js";
import { useEffect, useState } from "react";

function Produk() {
  const { id } = useParams();
  const [Newdata] = useState(Products.find((item) => item.id == id));
  const findproduct = useProduct((state) => state.findproduct);

  findproduct(id);

  return (
    <>
      <Navbar text="Kategori">
        <Navbarlogin />
      </Navbar>
      <div className="px-[120px] py-16 max-md:px-5 max-md:py-7">
        <DetailLayouts newProducts={Newdata} />
      </div>
      <Footer />
    </>
  );
}

export default Produk;
