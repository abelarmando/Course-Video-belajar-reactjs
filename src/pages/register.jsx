import AuthLayouts from "../Layouts/AuthLayouts"
import '../CSS/Login.css'
import FormRegister from "../Components/Fragments/Formregister"

function Register() {

    return (
        <AuthLayouts title='Masuk Ke Akun' keterangan='Yuk, lanjutin belajarmu di videobelajar.'>
            <FormRegister/>
        </AuthLayouts>
    )
}

export default Register