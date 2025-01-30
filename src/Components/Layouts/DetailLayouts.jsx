// import Course_Data from "../Data/Course_Data";
import Banner from "../Fragments/Banner";
import Course from "../Fragments/Course";
import Card_Profile from "../Fragments/Keterangan/Card_Profile";
import Deskripsi from "../Fragments/Keterangan/Deskripsi";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";
import { Products } from "../Data/Data";
import CardProduct from "../Fragments/CardProduct";

function DetailLayouts({ newProducts }) {
  const newdata = Products.filter((item) => item.id !== newProducts.id);
  let cardnumber = Math.floor(Math.random() * (Products.length - 3));
  let randomcard = newdata.slice(cardnumber, cardnumber + 3);
  return (
    <div className="space-y-5">
      <p>
        Beranda / Desain /{" "}
        <span className="font-[600]">{newProducts.titlepage}</span>
      </p>
      <Banner
        img="bg-bannerheaderImg"
        class="w-full h-full bg-[#000000CC] rounded-xl pt-20 pb-16 px-24 space-y-6 text-white max-md:px-5 max-md:py-16"
      >
        <h1>{newProducts.titlepage}</h1>
        <p>{newProducts.textpage}</p>
        <div className="flex gap-1 underline underline-offset-2">
          <img src="/images/Rating.svg" alt="rating" />
          <span>{newProducts.rating}</span>
        </div>
      </Banner>

      <div className="flex gap-9 w-full max-md:flex-col-reverse">
        <div className="space-y-5 md:w-[60%]">
          <Deskripsi>{newProducts.description}</Deskripsi>

          <Card_Profile
            Data={newProducts.background}
            title="Belajar bersama Tutor Profeisonal"
          />
          <Course Course={newProducts.course} />
          <Card_Profile Data={newProducts.review} title="Rating dan Review" />
        </div>
        <div className="md:w-[40%]">
          <Keterangan_Course data={newProducts} hide="block" />
        </div>
      </div>
      <h3>Video Pembelajaran Terkait Lainnya</h3>
      <p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
        {randomcard.map((product) => (
          <CardProduct id={product.id}>
            <div className=" max-md:flex max-md:gap-3">
              <CardProduct.Header img={product.imgproduct} />
              <CardProduct.Body
                title={product.title}
                author={product.author}
                position={product.position}
                work={product.work}
                imgprofile={product.imgprofile}
              >
                {product.text}
              </CardProduct.Body>
            </div>
            <CardProduct.Footer rating={product.rating} price={product.price} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
}

export default DetailLayouts;
