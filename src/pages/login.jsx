import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/Formlogin";
import Navbar from "../Components/Fragments/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen w-full">
        <AuthLayouts
          title="Masuk Ke Akun"
          keterangan="Yuk, lanjutin belajarmu di videobelajar."
        >
          <FormLogin />
        </AuthLayouts>
      </main>
    </>
  );
}

export default Login;
