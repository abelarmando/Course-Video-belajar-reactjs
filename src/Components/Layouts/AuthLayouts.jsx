import { Link } from "react-router-dom";

function AuthLayouts(props) {
  const { title, keterangan, children, masuk } = props;

  return (
    <div className="bg-white rounded-md p-9 space-y-5 w-[590px] h-fit flex items-center flex-col border-[#F1F1F1] border-[1px] max-sm:w-80 max-md:w-full">
      <div className="text-center">
        <h1 className="text-2xl">{title}</h1>
        <p>{keterangan}</p>
      </div>

      {children}
      <button className="w-full  rounded-md bg-[#E2FCD9CC] text-[#3ECF4C] h-10">
        {masuk == "Login" && <Link to="/register">Daftar</Link>}
        {masuk == "Register" && <Link to="/login">Masuk</Link>}
      </button>

      <div className="w-full relative">
        <div className="w-full border-2 bg-[#F1F1F1]"></div>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-10 text-center rounded-sm">
          atau
        </p>
      </div>

      <button className="w-full  rounded-md bg-white border-2 border-[#F1F1F1] h-10 flex justify-center items-center gap-2">
        <img src="./images/Icon/Icon/logos_google-icon.svg" alt="Google" />
        <Link to="/register"> Masuk Dengan Google</Link>
      </button>
    </div>
  );
}

export default AuthLayouts;
