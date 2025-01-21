import Course_Data from "../Data/Course_Data";
import Banner from "../Fragments/Banner";
import Course from "../Fragments/Course";
import Background_Profile from "../Fragments/Keterangan/Background_Profile";
import Deskripsi from "../Fragments/Keterangan/Deskripsi";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";
import Products from "../Data/Data";
import CardProduct from "../Fragments/CardProduct";

function DetailLayouts() {
  let cardnumber = Math.floor(Math.random() * (Products.length - 2));
  let randomcard = Products.slice(cardnumber, cardnumber + 3);
  return (
    <div className="space-y-5">
      <p>
        Beranda / Desain /{" "}
        <span className="font-[600]">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager
        </span>
      </p>
      <Banner
        img="bg-bannerheaderImg"
        class="w-full h-full bg-[#000000CC] rounded-xl pt-20 pb-16 px-24 space-y-6 text-white max-md:px-5 max-md:py-16"
      >
        <h1>
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h1>
        <p>
          Belajar bersama tutor profesional di Video Course. Kapanpun, di
          manapun.
        </p>
        <div className="flex gap-1 underline underline-offset-2">
          <img src="./images/Rating.svg" alt="rating" />
          <span>3.5 (86)</span>
        </div>
      </Banner>

      <div className="flex gap-9 w-full max-md:flex-col-reverse">
        <div className="space-y-5 md:w-[60%]">
          <Deskripsi>
            Foundations of User Experience (UX) Design adalah yang pertama dari
            rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan
            yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain
            pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
            orang dengan produk seperti situs web, aplikasi seluler, dan objek
            fisik. Desainer UX membuat interaksi sehari-hari itu dapat
            digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer
            UX tingkat pemula mungkin termasuk berempati dengan pengguna,
            menentukan poin rasa sakit mereka, memunculkan ide untuk solusi
            desain, membuat wireframe, prototipe, dan maket, dan menguji desain
            untuk mendapatkan umpan balik.
          </Deskripsi>

          <Background_Profile />
          <Course Course={Course_Data} />
        </div>
        <Keterangan_Course />
      </div>
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
