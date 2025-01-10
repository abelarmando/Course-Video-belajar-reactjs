import Label from './Label.jsx'
import Input from './Input.jsx'

function InputForm(props){
    // const { title, class, placeholder, name } = props;
    return(
        <div className="input-box">
            <Label htmlFor={props.name}>{props.title}</Label>
            <Input type={props.name} classname={props.class} placeholder={props.placeholder} name={props.name}/>
        </div>
    )
}

export default InputForm