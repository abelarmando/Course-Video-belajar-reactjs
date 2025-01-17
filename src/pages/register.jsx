import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/Formregister";
import Navbar from "../Components/Fragments/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen w-full">
        <AuthLayouts
          title="Pendaftaran Akun"
          keterangan="Yuk, daftarkan akunmu sekarang juga!"
        >
          <FormRegister />
        </AuthLayouts>
      </main>
    </>
  );
}

export default Register;
