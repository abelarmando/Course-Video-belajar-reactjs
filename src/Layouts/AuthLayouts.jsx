
function AuthLayouts(props){
    const {title, keterangan, children} = props;

    return(
    <div className="card">
        <div className="form-box">
            <div className="text-masuk">
                <h1>{title}</h1>
                <p>{keterangan}</p>
            </div>
            
            {children}
           
        </div>
    </div>
    )
}

export default AuthLayouts