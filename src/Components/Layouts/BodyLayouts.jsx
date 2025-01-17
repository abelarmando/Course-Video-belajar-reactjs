import CardProduct from "../Fragments/CardProduct";
import Kategori from "../Fragments/Kategori";
import Banner from "../Fragments/Banner";

const products = [
  {
    id: 1,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-01.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-1.svg",
  },
  {
    id: 2,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-02.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-2.svg",
  },
  {
    id: 3,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-03.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-3.svg",
  },
  {
    id: 4,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-04.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-4.svg",
  },
  {
    id: 5,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-05.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-5.svg",
  },
  {
    id: 6,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-06.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-6.svg",
  },
  {
    id: 7,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-07.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-7.svg",
  },
  {
    id: 8,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-08.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-8.svg",
  },
  {
    id: 9,
    author: "Jenna Ortega",
    title: "Big 4 Auditor Financial Analyst",
    text: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    position: "Senior Accountant",
    work: "Gojek",
    rating: "3.5 (86)",
    price: "Rp 300k",
    imgproduct: "./images/Icon/Product/Product-09.svg",
    imgprofile: "./images/Icon/Avatar/Avatar-9.svg",
  },
];
function BodyLayouts() {
  return (
    <div className="py-16 px-[120px] space-y-16">
      <Banner img="bg-bannerheaderImg">
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
          <h2 className="text-3xl">Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <Kategori />

        <div className="grid grid-cols-auto-fill gap-3 w-full ">
          {products.map((product) => (
            <CardProduct id={product.id}>
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
              <CardProduct.Footer
                rating={product.rating}
                price={product.price}
              />
            </CardProduct>
          ))}
        </div>
      </div>

      <Banner img="bg-bannerfooterImg">
        <p>NEWSLATER</p>
        <h1 className="text-4xl">Mau Belajar Lebih Banyak?</h1>
        <p>
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>

        <div className="py-2 pl-8 pr-2 bg-white w-96 rounded-md flex justify-between gap-2">
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
