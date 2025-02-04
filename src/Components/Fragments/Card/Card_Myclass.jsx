import Progress from "../Progress";
import { useState } from "react";
function Card_Myclass(props) {
  const [totalprogress, settotalprogress] = useState(12);
  const [progress, setProgress] = useState(1);
  const [percent, setpercent] = useState(
    Math.round((progress / totalprogress) * 100)
  );
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md">
      <div className="bg-[#E2FCD933] border-b-[1px] border-[#F1F1F1] py-4 px-5 flex items-center justify-between">
        <p>12 / 12 Module Terselesaikan</p>
        <p className="bg-[#E0FDDF] text-green-300 px-1 py-[10px] w-fit rounded-md ">
          Selesai
        </p>
      </div>
      <div className="flex gap-3 py-4 px-5">
        <img src="" alt="a" />
        <div>
          <h4>Big 4 auditor financial analyst</h4>
          <p>
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
          <div className="flex items-center gap-3">
            <img src="/images/Icon/Avatar/Avatar-1.svg" alt="a" />
            <div>
              <p>Jenna Ortega</p>
              <p>
                Senior Accountant di <span className="font-bold">Gojek</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E2FCD933] border-t-[1px] border-[#F1F1F1] py-4 px-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p>Progres Kelas: {percent}% </p>
          <Progress total={percent} />
        </div>
        <div className="flex gap-3">
          <button className="border-[1px] border-[#3ECF4C] rounded-md py-2 px-6 text-[#3ECF4C]">
            Unduh Sertifikat
          </button>
          <button className="border-[1px] border-[#3ECF4C] rounded-md py-2 px-6 bg-[#3ECF4C] text-white">
            Lihat Detail Kelas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card_Myclass;
