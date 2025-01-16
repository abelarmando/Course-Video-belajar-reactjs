

function Kategori() {
    return(
        <ul className="flex gap-9 flex-nowrap">
            <li value='Semua Kelas' className="relative text-red-500"><a href="#">Semua Kelas</a> <span className="absolute w-[50%] h-1 bg-red-500 left-0 bottom-0 translate-y-2 rounded-md "></span></li>
            <li value='Pemasaran'><a href="#">Pemasaran</a></li>
            <li value='Desain'><a href="#">Desain</a></li>
            <li value='Pengembangan Diri'><a href="#">Pengembangan Diri</a></li>
            <li value='Bisnis'><a href="#">Bisnis</a></li>
        </ul>
    );
}

export default Kategori