import AuthLayouts from "../Layouts/AuthLayouts"
import FormLogin from "../Components/Fragments/Formlogin"
import '../CSS/Login.css'

function Login() {

    return (
        <AuthLayouts title='Masuk Ke Akun' keterangan='Yuk, lanjutin belajarmu di videobelajar.'>
            <FormLogin/>
        </AuthLayouts>
    )
}

export default Login