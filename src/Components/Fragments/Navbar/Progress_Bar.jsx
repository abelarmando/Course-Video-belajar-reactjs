function Progress_Bar({ color1 = "#3A354161", color2 = "#3A354161" }) {
  return (
    <div className="flex items-center gap-2 justify-between w-[470px] max-md:w-full">
      <div className="flex items-center gap-2">
        <div className="rounded-full border-2 border-[#3ECF4C] h-6 w-6 flex items-center justify-center">
          <div className="rounded-full bg-[#3ECF4C] h-4 w-4"></div>
        </div>
        <p>Pilih Metode</p>
      </div>

      <div className="flex items-center gap-2 relative">
        <hr
          className={`border-2 w-20 absolute -translate-x-full bg-[${color1}] max-md:w-5`}
        />
        <div
          className={`rounded-full border-2 border-[${color1}] h-6 w-6 flex items-center justify-center`}
        >
          <div className={`rounded-full bg-[${color1}] h-4 w-4`}></div>
        </div>

        <p className="text-[#3A354161]">Bayar</p>
      </div>

      <div className="flex items-center gap-2 relative">
        <hr
          className={`border-2 w-20 absolute -translate-x-full bg-[${color1}] max-md:w-5`}
        />
        <div
          className={`rounded-full border-2 border-[${color2}] h-6 w-6 flex items-center justify-center`}
        >
          <div className={`rounded-full bg-[${color2}] h-4 w-4`}></div>
        </div>

        <p className="text-[#3A354161]">Selesai</p>
      </div>
    </div>
  );
}

export default Progress_Bar;
