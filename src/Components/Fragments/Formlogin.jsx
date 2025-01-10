import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Button";

function FormLogin() {

    return(
    <form action="">
        <InputForm title='E-mail' name='email' placeholder='' class=''/>

        <InputForm title='Kata Sandi' name='password' placeholder='' class=''/>
                
        <div className="forgot-password">
            <a href="#">Lupa Password?</a>
        </div>

        <Button class='tombol-masuk'>Masuk</Button>
        <Button class='tombol-daftar'>Daftar</Button>
        
        <div className="atau">
            <div className="garis"></div>
            <p>atau</p>
        </div>

        
        <Button> <img src="img/Icon/Icon/logos_google-icon.svg" alt="google"/> Masuk Dengan Google</Button>
        
    </form>
    );
}

export default FormLogin