import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/Form/Formlogin";
import Navbar from "../Components/Fragments/Navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <main className="md:flex justify-center items-center h-screen w-full max-md:px-5 max-md:py-7">
        <AuthLayouts
          title="Masuk Ke Akun"
          keterangan="Yuk, lanjutin belajarmu di videobelajar."
          masuk="Login"
        >
          <FormLogin />
        </AuthLayouts>
      </main>
    </>
  );
}

export default Login;
