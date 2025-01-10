import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";
import { Input_nohp } from "../Elements/Input/Index";

function FormLogin() {

    return(
    <form action="" className="login-input">
        <InputForm title='Nama Lengkap' name='text' placeholder='' class=''/>

        <InputForm title='E-Mail' name='email' placeholder='' class=''/>

        <Input_nohp name='number' title='No HP' children='+' srcbendera=''/>

        <InputForm title='Kata Sandi' name='password' placeholder='' class=''/>


                
        <div className="forgot-password">
            <a href="#">Lupa Password?</a>
        </div>

        <Button class='tombol-masuk'>Masuk</Button>

        
        
    </form>
    );
}

export default FormLogin