
function BannerHeader(){
    return(
        <div className="bg-bannerheaderImg bg-repeat bg-cover w-full h-fit rounded-xl">
            <div className="w-full h-full bg-[#000000CC] rounded-xl text-center py-20 px-36 space-y-6 text-white">
                <h1 className=" text-4xl">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </h1>

                <p>
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                </p>
                <button className="bg-[#3ECF4C] rounded-lg py-3 px-6">Temukan Video Course untuk Dipelajari!</button>
            </div>
        </div>
    );
}

export default BannerHeader