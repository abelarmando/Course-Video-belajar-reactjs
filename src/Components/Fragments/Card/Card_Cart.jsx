function Card_Cart({ id, invoice, tenggat, title, price, img, paid, diff }) {
  const Rupiah = new Intl.NumberFormat("id-ID");

  return (
    <div
      className="border-[1px] border-[#F1F1F1] rounded-md  space-y-3"
      key={id}
    >
      <div className="bg-[#E2FCD933] py-4 px-5 flex max-md:flex-wrap justify-between md:items-center border-b-[1px] border-[#F1F1F1]">
        <div className="flex gap-3 justify-between flex-auto">
          <p className="">
            <span className="max-md:hidden">No.Invoice:</span> {invoice}
          </p>
          <p className="">
            <span className="max-md:hidden">Waktu Pembayaran:</span> {tenggat}
          </p>
        </div>

        <div className=" md:flex flex-1 md:justify-end max-md:mt-2">
          {paid && (
            <p className="text-green-500 bg-[#E0FDDF] rounded-md py-1 px-2 w-fit">
              Berhasil
            </p>
          )}
          {paid == false && diff < 0 && (
            <p className="text-red-500 bg-[#FFF7D7CC] rounded-md py-1 px-2 w-fit">
              Gagal
            </p>
          )}
          {paid == false && diff > 0 && (
            <p className="text-[#FFBD3A] bg-[#FCE3D1] rounded-md py-1 px-2 w-fit">
              Belum Bayar
            </p>
          )}
        </div>
      </div>
      <div className="pl-5 flex justify-between md:items-center max-md:flex-col ">
        <div className="flex gap-2 md:w-3/4 items-center ">
          <img
            src={img}
            alt=""
            className="w-14 object-cover rounded-md h-full max-md:h-14"
          />
          <p className="md:w-1/2 font-bold">{title}</p>
        </div>
        <div className=" w-48 flex justify-between md:px-5 max-md:mt-3">
          <div className="max-md:hidden border-l-[1px] border-[#F1F1F1]"></div>
          <div>
            <p>Harga</p>
            <p className="text-end">Rp {Rupiah.format(price)}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#E2FCD933] flex justify-between items-center py-4 px-5 border-t-[1px] border-[#F1F1F1]">
        <p>Total Pembayaran</p>
        <p className="text-green-500">Rp {Rupiah.format(price + 7000)}</p>
      </div>
    </div>
  );
}

export default Card_Cart;
