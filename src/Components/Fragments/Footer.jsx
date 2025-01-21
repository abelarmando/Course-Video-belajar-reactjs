import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="py-16 px-32 w-full bg-white h-fit space-y-2 border-t-[1px] border-[#F1F1F1] max-md:p-5">
      <div className="flex justify-between  max-md:flex-col">
        <div className=" space-y-4 w-80">
          <img src="./images/Logo_videobelajar.svg" alt="VideoBelajar" />
          <div className="space-y-2">
            <h3 className="max-md:text-xl">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </h3>
            <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>
        </div>

        <div className="flex gap-12  max-md:flex-col max-md:gap-5 max-md:mt-4">
          <div className="space-y-4 max-md:flex max-md:justify-between max-md:items-center max-md:space-y-0 ">
            <h1 className="max-md:text-xl">Kategori</h1>
            <img
              src="./images/Icon/Icon/Vector.svg"
              alt="panah"
              className="hidden h-4 max-md:block "
            />
            <ul className="space-y-4 max-md:hidden">
              <li>
                <Link to="#">Digital & Tekonologi</Link>
              </li>
              <li>
                <Link to="#">Pemasaran</Link>
              </li>
              <li>
                <Link to="#">Manahemen Bisnis</Link>
              </li>
              <li>
                <Link to="#">Pengembangan Diri</Link>
              </li>
              <li>
                <Link to="#">Desain</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 max-md:flex max-md:justify-between max-md:items-center max-md:space-y-0">
            <h1 className="max-md:text-xl">Perusahaan</h1>
            <img
              src="./images/Icon/Icon/Vector.svg"
              alt="panah"
              className="hidden h-4 max-md:block "
            />
            <ul className="space-y-4 max-md:hidden">
              <li>
                <Link to="#">Tentang Kami</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Kebijakan Privasi</Link>
              </li>
              <li>
                <Link to="#">Ketentuan Layanan</Link>
              </li>
              <li>
                <Link to="#">Bantuan</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 max-md:flex max-md:justify-between max-md:items-center max-md:space-y-0">
            <h1 className="max-md:text-xl">Komunitas</h1>
            <img
              src="./images/Icon/Icon/Vector.svg"
              alt="panah"
              className="hidden h-4 max-md:block "
            />
            <ul className="space-y-4 max-md:hidden">
              <li>
                <Link to="#">Tips Sukses</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex md:justify-between max-md:flex-col-reverse max-md:gap-3">
        <p>©2023 Gerobak Sayur All Rights Reserved.</p>
        <ul className="flex gap-4">
          <li className="rounded-full border-2 h-9 w-9 flex items-center justify-center">
            <img src="./images/Icon/Icon/Linkedin.svg" alt="" />
          </li>
          <li className="rounded-full border-2 h-9 w-9 flex items-center justify-center">
            <img src="./images/Icon/Icon/Facebook.svg" alt="" />
          </li>
          <li className="rounded-full border-2 h-9 w-9 flex items-center justify-center">
            <img src="./images/Icon/Icon/Instagram.svg" alt="" />
          </li>
          <li className="rounded-full border-2 h-9 w-9 flex items-center justify-center">
            <img src="./images/Icon/Icon/Twitter.svg" alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
