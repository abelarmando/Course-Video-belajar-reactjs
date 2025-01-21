import CardProduct from "../Fragments/CardProduct";
import Kategori_kelas from "../Fragments/Kategori_kelas";
import Banner from "../Fragments/Banner";
import Products from "../Data/Data.jsx";

function BodyLayouts() {
  return (
    <div className="py-16 px-[120px] space-y-16 max-md:px-5">
      <Banner
        img="bg-[url('/images/Background_Image/Background_banner.jpg');]"
        class="w-full h-full bg-[#000000CC] rounded-xl flex flex-col items-center text-center py-20 px-72 space-y-6 text-white max-md:px-5 max-md:py-16"
      >
        <h1 className="text-4xl">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>

        <p>
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <button className="bg-[#3ECF4C] rounded-lg py-3 px-6">
          Temukan Video Course untuk Dipelajari!
        </button>
      </Banner>

      <div className="space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl max-md:text-2xl">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <Kategori_kelas />

        <div className="grid grid-cols-auto-fill gap-3 w-full ">
          {Products.map((product, i) => (
            <CardProduct id={product.id} key={i}>
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
              <CardProduct.Footer
                rating={product.rating}
                price={product.price}
              />
            </CardProduct>
          ))}
        </div>
      </div>

      <Banner
        img="bg-[url('/images/Background_Image/Background_footer.jpg';)]"
        class="w-full h-full bg-[#000000CC] rounded-xl flex flex-col items-center text-center py-20 px-72 space-y-6 text-white max-md:px-5 max-md:py-16"
      >
        <p>NEWSLATER</p>
        <h1 className="text-4xl">Mau Belajar Lebih Banyak?</h1>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        <div className="py-2 pl-8 pr-2 bg-white w-96 rounded-md flex justify-between gap-2 max-md:w-full">
          <input
            type="text"
            placeholder="Masukan Emailmu"
            className="outline-none text-black w-full"
          />
          <button className="bg-[#FFBD3A] p-2 rounded-md">Subscribe</button>
        </div>
      </Banner>
    </div>
  );
}

export default BodyLayouts;
