import { Link } from "react-router-dom";

function Keterangan_Course({ data, hide = "hidden" }) {
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 bg-white w-full space-y-4 h-fit">
      <img
        src={data.imgproduct}
        alt="a"
        className={`${
          hide === "hidden" ? "block max-md:hidden" : "hidden"
        } w-full `}
      />
      <h6 className="text-base font-bold">{data.titlepage}</h6>
      <div className="flex justify-between items-center">
        <div className="space-x-2 flex">
          <p className="text-green-400 text-lg font-bold">{data.tagprice}</p>
          <p className="line-through text-lg text-[#3A354161]">
            {data.tagprice * 2}
          </p>
        </div>
        <p className="text-lg rounded-md bg-[#FFBD3A] px-2 py-1 text-white">
          Diskon 50%
        </p>
      </div>
      <p className={`text-blue-400 ${hide}`}>
        Penawaran spesial tersisa 2 hari lagi
      </p>

      <Link to={`/metode/${data.id}`}>
        <button
          className={`bg-[#3ECF4C] rounded-md py-2 px-6 text-white w-full ${hide}`}
        >
          Beli Sekarang
        </button>
      </Link>
      <h6 className="font-bold ">Kelas Ini Sudah Termasuk</h6>
      <ul className="grid grid-cols-2 gap-5">
        {data.courseinclude.map((item, i) => (
          <li className="flex items-center gap-2" key={i}>
            <img src={item.img} alt="" /> {item.title}
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <h6 className="font-bold">Bahasa Pengantar</h6>
        {data.courselanguage.map((item, i) => (
          <p className="flex gap-2" key={i}>
            <img src={item.img} alt="World" /> {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Keterangan_Course;
