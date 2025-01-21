function Kategori_kelas() {
  return (
    <ul className="flex gap-9 overflow-x-auto overflow-y-hidden h-8">
      <li value="Semua Kelas" className="relative text-red-500 flex-shrink-0">
        <a href="#">Semua Kelas</a>
        <span className="absolute w-[50%] h-1 bg-red-500 left-0 bottom-0 top-0 translate-y-7  rounded-md "></span>
      </li>
      <li value="Pemasaran" className="flex-shrink-0">
        <a href="#">Pemasaran</a>
      </li>
      <li value="Desain" className="flex-shrink-0">
        <a href="#">Desain</a>
      </li>
      <li value="Pengembangan Diri" className="flex-shrink-0">
        <a href="#">Pengembangan Diri</a>
      </li>
      <li value="Bisnis" className="flex-shrink-0">
        <a href="#">Bisnis</a>
      </li>
    </ul>
  );
}

export default Kategori_kelas;
