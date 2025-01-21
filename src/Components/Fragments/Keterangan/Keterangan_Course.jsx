function Keterangan_Course({ children }) {
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white md:w-[40%] space-y-4 h-fit">
      <h6 className="text-base font-bold">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h6>
      <div className="flex justify-between items-center">
        <div className="space-x-2 flex">
          <p className="text-green-400 text-lg font-bold">Rp 250K</p>
          <p className="line-through text-lg text-[#3A354161]">Rp 500k</p>
        </div>
        <p className="text-lg rounded-md bg-[#FFBD3A] px-2 py-1 text-white">
          Diskon 50%
        </p>
      </div>
      <p className="text-blue-400">Penawaran spesial tersisa 2 hari lagi</p>

      <button className="bg-[#3ECF4C] rounded-md py-2 px-6 text-white w-full">
        Beli Sekarang
      </button>
      <h6 className="font-bold ">Kelas Ini Sudah Termasuk</h6>
      <ul className="grid grid-cols-2 gap-5">
        <li className="flex items-center gap-2">
          <img src="./images/Icon/Icon/Kelas/File_Check.svg" alt="" /> Ujian
          Akhir
        </li>
        <li className="flex items-center gap-2">
          <img src="./images/Icon/Icon/Kelas/Video.svg" alt="" /> 49 Video
        </li>
        <li className="flex items-center gap-2">
          <img src="./images/Icon/Icon/Kelas/Book.svg" alt="" /> 7 Dokument
        </li>
        <li className="flex items-center gap-2">
          <img src="./images/Icon/Icon/Kelas/File-Certificate.svg" alt="" />{" "}
          Sertifikat
        </li>
        <li className="flex items-center gap-2">
          <img src="./images/Icon/Icon/Kelas/File_Edit.svg" alt="" /> Preset
        </li>
      </ul>

      <h6 className="font-bold">Bahasa Pengantar</h6>
      <p className="flex gap-2">
        <img src="./images/Icon/Icon/World.svg" alt="World" /> Bahasa Indonesia
      </p>
    </div>
  );
}

export default Keterangan_Course;
