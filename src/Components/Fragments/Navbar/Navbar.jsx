import { Link } from "react-router-dom";

function Navbar(props) {
  const { text, children } = props;

  return (
    <nav className="w-full bg-white py-3 px-[120px] flex justify-between items-center gap-4 max-md:py-4 max-md:px-6">
      <div className="flex justify-between items-center w-full">
        <Link to="/">
          <img src="/images/Logo_videobelajar.svg" alt="VideoBelajar" />
        </Link>
        <div className="flex gap-4 items-center">
          <Link to="/kategori" className="max-md:hidden">
            {text}
          </Link>
          {children}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
