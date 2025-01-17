import { InputForm } from "../Elements/Input/Index";

function FormLogin() {
  const handlelogin = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <form onSubmit={handlelogin} className="w-full">
      <InputForm
        title="E-mail"
        name="email"
        placeholder=""
        classname="border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12"
      />

      <InputForm
        title="Kata Sandi"
        name="password"
        placeholder=""
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
