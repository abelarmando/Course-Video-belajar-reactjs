import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormRegister from "../Components/Fragments/Formregister"

function Register() {

    return (
        <main className="flex justify-center items-center h-full w-full">
            <AuthLayouts title='Pendaftaran Akun' keterangan='Yuk, daftarkan akunmu sekarang juga!'>
                <FormRegister/>
            </AuthLayouts>
        </main>
    )
}

export default Register