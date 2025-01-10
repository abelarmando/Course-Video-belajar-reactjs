import Button from "../Components/Elements/Button/Button";

function AuthLayouts(props){
    const {title, keterangan, children} = props;

    return(
    <div className="card">
        
            <div className="text-masuk">
                <h1>{title}</h1>
                <p>{keterangan}</p>
            </div>
            
            {children}
           
            <Button class='tombol-daftar'>Daftar</Button>
        
            <div className="atau">
            <div class="garis"></div>
                <p>atau</p>
            </div>

            
            <Button class='google'> <img src='./images/Icon/Icon/logos_google-icon.svg' alt="google"/> Masuk Dengan Google</Button>
        
    </div>
    )
}

export default AuthLayouts