// import InputForm from "../Elements/Input/Index";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../../services/function_service";
import { Input_nohp, InputForm } from "../../Elements/Input/Index";
import { getAllUsers, postuser } from "../../../services/users.function";

function FormRegister() {
  const [input, setinput] = useState({});
  const [user, setuser] = useState();
  const [inpemail, setinpemail] = useState();
  const [codeareanum] = useState(62);
  // const codearea = document.getElementById("codearea");
  // console.log(codearea);

  const handleregister = (e) => {
    e.preventDefault();

    if (user.find((x) => x.email == inpemail))
      return alert("email sudah terdaftar");

    if (e.target.password2.value != e.target.password1.value) {
      document.getElementById("password2").style.border = "1px solid red";
      document.getElementById("password1").style.border = "1px solid red";
    } else {
      setinput({
        name: e.target.text.value,
        email: e.target.email.value,
        handphone: { number: e.target.number.value, code: codeareanum },
        password: e.target.password1.value,
        mycart: [],
        myclass: [],
      });

      alert("Pendaftaran Berhasil");
      window.location.href = "/login";
    }
  };
  useEffect(() => {
    postuser(input);
  }, [input]);

  useEffect(() => {
    getAllUsers((data) => {
      setuser(data);
    });
  }, []);
  return (
    <form onSubmit={handleregister} className="w-full">
      <InputForm
        title="Nama Lengkap"
        name="text"
        id="text"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
      />

      <div className="w-full flex flex-col relative my-2">
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          className="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
          name="email"
          id="email"
          required
          onChange={(e) => setinpemail(e.target.value)}
        />
      </div>

      <Input_nohp
        name="number"
        title="No HP"
        id="number"
        codearea={codeareanum}
        bendera="./images/Icon/Icon/Indonesia.svg"
        placeholder=""
      />

      <InputForm
        title="Kata Sandi"
        name="password"
        id="password1"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none pl-1 pr-10 py-2 h-12"
      />

      <InputForm
        title="Kata Sandi"
        name="password"
        id="password2"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none pl-1 pr-10 py-2 h-12"
      />

      <div className="text-right mb-2">
        <a href="#">Lupa Password?</a>
      </div>

      <button className="w-full rounded-md bg-[#3ECF4C] text-white h-10">
        Daftar
      </button>
    </form>
  );
}

export default FormRegister;
