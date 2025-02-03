import Navbar from "../Components/Fragments/Navbar/Navbar";
import NavbarImg from "../Components/Fragments/Navbar/NavbarImg";
import Progress_Bar from "../Components/Fragments/Navbar/Progress_Bar";

function Selesai() {
  return (
    <div className="h-screen ">
      <Navbar>
        <div className="max-md:hidden">
          <Progress_Bar color1="#3ECF4C" color2="#3ECF4C" />
        </div>
        <div className="md:hidden z-50">
          <NavbarImg />
        </div>
      </Navbar>
      <div className="md:flex  justify-center items-center h-[94.9%] max-md:px-7 max-md:py-8">
        <div className="md:hidden mb-3 w-full">
          <Progress_Bar color1="#3ECF4C" color2="#3ECF4C" />
        </div>
        <div className="flex flex-col items-center justify-center px-9 pt-6 pb-16 h-fit space-y-3 bg-white rounded-md border-[1px] border-[#F1F1F1]">
          <img src="/images/Selesai.svg" alt="" />
          <div className="text-center">
            <h3>Pembayaran Berhasil!</h3>
            <p>
              Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami
              jika ada kendala.
            </p>
          </div>
          <button
            className="bg-[#3ECF4C] rounded-md py-2 px-6 text-white h-fit w-fit"
            onClick={() => (window.location.href = "/keterangan/pesanan")}
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selesai;
