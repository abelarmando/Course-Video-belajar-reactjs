import {InputForm} from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

function FormLogin() {

    return(
    <form action="" className="login-input">
        <InputForm title='E-mail' name='email' placeholder='' class=''/>

        <InputForm title='Kata Sandi' name='password' placeholder='' class=''/>
                
        <div className="forgot-password">
            <a href="#">Lupa Password?</a>
        </div>

        <Button class='tombol-masuk'>Masuk</Button>

        
        
    </form>
    );
}

export default FormLogin