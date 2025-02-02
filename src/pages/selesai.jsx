import Navbar from "../Components/Fragments/Navbar/Navbar";
import Progress_Bar from "../Components/Fragments/Navbar/Progress_Bar";

function Selesai() {
  return (
    <div className="h-screen border-2 border-black">
      <Navbar>
        <Progress_Bar color1="#3ECF4C" color2="#3ECF4C" />
      </Navbar>
      <div className="flex justify-center items-center h-[94.9%] ">
        <div className="text-center px-9 py-6 space-y-3 bg-white rounded-md border-[1px] border-[#F1F1F1]">
          <img src="/images/Selesai.svg" alt="" />
          <div>
            <h3>Pembayaran Berhasil!</h3>
            <p>
              Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami
              jika ada kendala.
            </p>
          </div>
          <button className="bg-[#3ECF4C] rounded-md py-2 px-6 text-white h-fit">
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selesai;
