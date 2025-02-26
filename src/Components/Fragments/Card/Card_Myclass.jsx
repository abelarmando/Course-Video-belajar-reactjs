import { useNavigate } from "react-router-dom";
import Book2 from "../../Icon/Book2";
import Clock from "../../Icon/Clock";
import Progress from "../Progress";

function Card_Myclass({
  img,
  title,
  text,
  author,
  position,
  work,
  moduleprogress,
  jumlahmodule,
  imgauthor,
  id,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="border-[1px] border-[#F1F1F1] rounded-md"
      onClick={() => navigate(`/${id}/course/1/1`)}
    >
      <div className="bg-[#E2FCD933] border-b-[1px] border-[#F1F1F1] py-4 px-5 flex items-center justify-between">
        <p>
          {moduleprogress} / {jumlahmodule}{" "}
          <span className="max-md:hidden">Module Terselesaikan</span>
        </p>
        <p
          className={`bg-[#E0FDDF] text-green-300 px-1 py-[10px] w-fit rounded-md ${
            jumlahmodule == moduleprogress ? "" : "hidden"
          }`}
        >
          Selesai
        </p>
        <p
          className={`bg-[#FFF7D7CC] text-[#FFBD3A] px-1 py-[10px] w-fit rounded-md ${
            jumlahmodule > moduleprogress ? "" : "hidden"
          }`}
        >
          Sedang Berjalan
        </p>
      </div>
      <div className="md:flex gap-3 py-4 px-5 ">
        <img
          src={img}
          alt="a"
          className="w-[172px] object-cover rounded-md max-md:w-full max-md:mb-3"
        />
        <div className="space-y-3">
          <h4>{title}</h4>
          <p className="max-md:hidden">{text}</p>
          <div className="flex items-center gap-3">
            <img src={imgauthor} alt="a" />
            <div>
              <p>{author}</p>
              <p>
                {position} di <span className="font-bold">{work}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="flex gap-2 items-center">
              <Book2 />
              {jumlahmodule} Modul
            </p>
            <p className="flex gap-2 items-center">
              <Clock />
              {jumlahmodule} Modul
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#E2FCD933] border-t-[1px] border-[#F1F1F1] py-4 px-5 md:flex items-center justify-between gap-3 max-md:space-y-2">
        <div className="flex items-center gap-3">
          <p className="w-[150px] ">
            Progres Kelas: {Math.round((moduleprogress / jumlahmodule) * 100)}%
          </p>
          <div className="max-md:w-[150px]">
            <Progress
              total={Math.round((moduleprogress / jumlahmodule) * 100)}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className={`border-[1px] border-[#3ECF4C] rounded-md py-2 px-6 text-[#3ECF4C] max-md:w-full ${
              jumlahmodule > moduleprogress ? "hidden" : ""
            }`}
          >
            Unduh Sertifikat
          </button>
          <button className="border-[1px] border-[#3ECF4C] rounded-md py-2 px-6 max-md:w-full bg-[#3ECF4C] text-white">
            Lihat Detail Kelas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card_Myclass;
