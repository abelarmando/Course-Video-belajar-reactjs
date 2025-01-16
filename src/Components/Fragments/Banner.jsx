
function Banner(props) {
    const {img, children} = props;
    return (
        <div className={` bg-repeat bg-cover w-full h-fit rounded-xl ${img}`}>
            <div className="w-full h-full bg-[#000000CC] rounded-xl flex flex-col items-center text-center py-20 px-72 space-y-6 text-white">
                {children}
            </div>
        </div>
    )
}
export default Banner    