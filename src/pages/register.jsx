import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/Formregister";
import Navbar from "../Components/Fragments/Navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <main className="md:flex md:justify-center md:items-center h-screen w-full max-md:px-5 max-md:py-7">
        <AuthLayouts
          title="Pendaftaran Akun"
          keterangan="Yuk, daftarkan akunmu sekarang juga!"
          masuk="Register"
        >
          <FormRegister />
        </AuthLayouts>
      </main>
    </>
  );
}

export default Register;
