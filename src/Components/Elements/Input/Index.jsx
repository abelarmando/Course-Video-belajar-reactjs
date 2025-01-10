import Label from './Label.jsx'
import Input from './Input.jsx'



export function InputForm(props){
    // const { title, class, placeholder, name } = props;
    return(
        <div className="input-box">
            <Label htmlFor={props.name}>{props.title}</Label>
            <Input type={props.name} classname={props.class} placeholder={props.placeholder} name={props.name}/>
            
            {props.name === 'password' && <img src="./images/Icon/Icon/mdi_eye-off.svg" alt="eye"/>}
        </div>
    )
}


export function Input_nohp(props){

    const {name, title, codearea, bendera, placeholder} = props;
    console.log(bendera);
    

    return(
        <div className="input-no-hp">
            <label htmlFor={name}>{title}</label>
            <div className="no-regional">
                <div className="bendera">
                    <img src={bendera} alt='bendera' />
                </div>
            
                <div className="no-hp">
                    <p>+{codearea}</p>
                    <img src="./images/Icon/Icon/Icon_arrow.svg" alt="arrow" />
                </div>
            </div>

            <input type={name} placeholder={placeholder} name={name} />
        </div>
    )
}
