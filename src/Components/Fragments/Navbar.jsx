import { Link } from "react-router-dom";

function Navbar(props) {
  const { text, children } = props;

  return (
    <nav className="w-full bg-white py-3 px-32 flex justify-between items-center gap-4 max-md:py-4 max-md:px-6">
      <div className="flex justify-between items-center w-full">
        <img src="./images/Logo_videobelajar.svg" alt="VideoBelajar" />
        <Link to="#" className="max-md:hidden">
          {text}
        </Link>
      </div>
      {children}
    </nav>
  );
}

export default Navbar;
