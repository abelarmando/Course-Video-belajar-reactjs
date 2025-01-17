// import InputForm from "../Elements/Input/Index";

import { Input_nohp, InputForm } from "../Elements/Input/Index";

function FormRegister() {
  const handleregister = (e) => {
    e.preventDefault();
    console.log(e.target.password1.value);
    if (e.target.password2.value != e.target.password1.value) {
      document.getElementById("password2").style.border = "1px solid red";
      document.getElementById("password1").style.border = "1px solid red";
    } else {
      localStorage.setItem("text", e.target.text.value);
      localStorage.setItem("email", e.target.email.value);
      localStorage.setItem("number", e.target.number.value);
      localStorage.setItem("password", e.target.password1.value);
      alert("Pendaftaran Berhasil");
      window.location.href = "/login";
    }
  };
  return (
    <form onSubmit={handleregister} className="w-full">
      <InputForm
        title="Nama Lengkap"
        name="text"
        id="text"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
      />

      <InputForm
        title="E-Mail"
        name="email"
        id="email"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
      />

      <Input_nohp
        name="number"
        title="No HP"
        id="number"
        codearea={62}
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
