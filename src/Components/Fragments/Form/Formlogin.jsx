import { useEffect, useState, useRef } from "react";
import { InputForm } from "../../Elements/Input/Index";
import { getAllUsers } from "../../../services/users.function";

function FormLogin() {
  const [users, setusers] = useState([]);
  const [newlogin, setnewlogin] = useState({});
  const emailref = useRef();
  const passwordref = useRef();
  const [email, setemail] = useState();

  const handlelogin = (e) => {
    e.preventDefault();

    const log = users.find((x) => x.email === emailref.current.value);
    if (!log) return alert("Email Tidak Terdaftar");
    if (
      emailref.current.value == log.email &&
      passwordref.current.value == log.password
    ) {
      localStorage.setItem("islogin", true);
      window.location.href = "/";
    } else {
      alert("Email atau Kata Sandi Salah");
    }
  };

  useEffect(() => {
    getAllUsers((data) => {
      setusers(data);
    });
  }, []);

  return (
    <form onSubmit={handlelogin} className="w-full">
      <InputForm
        title="E-mail"
        name="email"
        ref={emailref}
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
      />

      <InputForm
        title="Kata Sandi"
        name="password"
        placeholder=""
        ref={passwordref}
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none pl-1 pr-10 py-2 h-12"
      />

      <div className="text-right mb-2">
        <a href="#">Lupa Password?</a>
      </div>

      <button className="w-full rounded-md bg-[#3ECF4C] text-white h-10">
        Masuk
      </button>
    </form>
  );
}

export default FormLogin;
