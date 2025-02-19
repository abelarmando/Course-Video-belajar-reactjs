import { Link } from "react-router-dom";
import { forwardRef } from "react";

export const InputForm = forwardRef(
  ({ classname, placeholder, name, title, id }, ref) => {
    return (
      <div className="w-full flex flex-col relative my-2">
        <label htmlFor={name}>{title}</label>
        <input
          type={name}
          className={classname}
          placeholder={placeholder}
          name={name}
          id={id}
          ref={ref}
          required
        />

        {name === "password" && (
          <img
            src="/images/Icon/Icon/mdi_eye-off.svg"
            alt="eye"
            className="absolute right-3 top-1/2 cursor-pointer"
          />
        )}
      </div>
    );
  }
);

export function Input_nohp({ name, title, codearea, bendera, placeholder }) {
  return (
    <div className="w-full">
      <label htmlFor={name}>{title}</label>
      <div className="flex gap-4 h-12 w-full">
        <div className="flex items-center  border-[1px] border-[#F1F1F1] rounded-md w-1/2">
          <div className="bg-[#F4F5FA] h-full w-16 flex items-center justify-center rounded-s-[5px]">
            <img src={bendera} alt="bendera" />
          </div>

          <div className="flex w-3/4 justify-between px-1">
            <p>+{codearea}</p>
            <img
              src="./images/Icon/Icon/Icon_arrow.svg"
              alt="arrow"
              className="cursor-pointer"
            />
          </div>
        </div>

        <input
          type={name}
          placeholder={placeholder}
          name={name}
          className="w-full border-[1px] border-[#F1F1F1] rounded-md outline-none px-1 py-2"
        />
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div className="space-x-5 max-md:hidden">
      <Link to="/login">
        <button className="bg-[#3ECF4C] rounded-md py-3 px-7 text-white">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="bg-white rounded-md py-3 px-7 border-[1px] border-[#3ECF4C] text-[#3ECF4C]">
          Register
        </button>
      </Link>
    </div>
  );
}
