import Banner from "../Fragments/Banner";
import Background_Profile from "../Fragments/Keterangan/Background_Profile";
import Deskripsi from "../Fragments/Keterangan/Deskripsi";
import Keterangan_Course from "../Fragments/Keterangan/Keterangan_Course";

function DetailLayouts() {
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

      <div className="flex gap-9 w-full">
        <div className="space-y-5 w-[60%]">
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
        </div>
        <Keterangan_Course />
      </div>
    </div>
  );
}

export default DetailLayouts;
