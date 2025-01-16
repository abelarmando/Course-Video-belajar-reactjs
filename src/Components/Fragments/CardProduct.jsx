

function CardProduct(props) {
    const {children, key} = props;
    return (
        <div className="w-96 h-fit p-5 border-[1px] border-[#F1F1F1] rounded-xl bg-white space-y-2" key={key}>
            
            {children}
                     
        </div>
    );
};

function Header(props) {
    const {img} = props;

    return(
        <img src={img} alt="produk" />
    )
}

function Body(props) {
    const {title, author, position, work, children, imgprofile} = props;
    return(
        <div>
            <h2>{title}</h2>
            <p className="line-clamp-2">{children}</p>
            <div className="flex gap-2">
                <img src={imgprofile} alt="avatar" />
                <div>
                <p>{author}</p>
                <p>{position} <span> di <b>{work}</b> </span></p>
                </div>
            </div>
        </div>
    );
};

function Footer(props) {
    const {rating, price} = props;

    return(
        <div className="flex items-center justify-between">
                <div className="flex gap-1 underline underline-offset-2">
                    <img src="./images/Rating.svg" alt="rating"/>
                    <span>{rating}</span>
                </div>
                <h2 className="text-[#3ECF4C] text-xl">{price}</h2>   
        </div>   
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct