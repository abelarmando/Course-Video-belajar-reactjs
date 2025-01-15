import AuthLayouts from "../Components/Layouts/AuthLayouts"
import FormLogin from "../Components/Fragments/Formlogin"

function Login() {

    return (
        <main className="flex justify-center items-center h-full w-full">
            <AuthLayouts title='Masuk Ke Akun' keterangan='Yuk, lanjutin belajarmu di videobelajar.'>
                <FormLogin/>
            </AuthLayouts>
        </main>
    )
}

export default Login