
function Input(props) {

    const {type, classname, placeholder,name} = props;

    return(
        <input type={type} className={classname} placeholder={placeholder} name={name} required/>
    )
}

export default Input