function CardProduct(props) {
  const { children, id } = props;
  return (
    <div
      className="w-full h-fit p-5 border-[1px] border-[#F1F1F1] rounded-xl bg-white max-md:space-y-3"
      key={id}
      id={id}
    >
      {children}
    </div>
  );
}

function Header(props) {
  const { img } = props;

  return (
    <img
      src={img}
      alt="produk"
      className="w-full object-cover max-md:w-[110px] max-md:h-[110px] rounded-md"
    />
  );
}

function Body(props) {
  const { title, author, position, work, children, imgprofile } = props;
  return (
    <div className="w-full space-y-3 max-md:flex max-md:flex-col max-md:justify-between md:mt-3">
      <h4>{title}</h4>
      <p className="line-clamp-2 max-md:hidden">{children}</p>
      <div className="flex gap-2">
        <img src={imgprofile} alt="avatar" className="max-sm:w-10" />
        <div>
          <p className="font-bold">{author}</p>
          <p>
            {position}
            <span className="max-md:hidden">
              di <b>{work}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer(props) {
  const { rating, price } = props;

  return (
    <div className="flex items-center justify-between max-md:col-span-2">
      <div className="flex gap-1 underline underline-offset-2">
        <img src="/images/Rating.svg" alt="rating" />
        <span>{rating}</span>
      </div>
      <h2 className="text-[#3ECF4C] text-xl">{price}</h2>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
