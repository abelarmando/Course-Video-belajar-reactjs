import Label from './Label.jsx'
import Input from './Input.jsx'
import Button from '../Button/Button.jsx'



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

    const {name, title, children, srcbendera} = props
    return(
        <div className="input-no-hp">
            <label htmlFor={name}>{title}</label>
            <div className="no-regional">
                <div className="bendera">
                    <img src={srcbendera} alt='bendera' />
                </div>

                <Button>+{children} <img src='./images/Icon/Icon/Icon_arrow.svg' alt="panah" /></Button>
            </div>

            <input type={name} placeholder={placeholder} name={name} />
        </div>
    )
}
