// import InputForm from "../Elements/Input/Index";

import { Input_nohp, InputForm  } from "../Elements/Input/Index";

function FormRegister() {

    return(
    <form action="" className='w-full'>
        <InputForm title='Nama Lengkap' name='text' placeholder='' classname='border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12'/>
        

        <InputForm title='E-Mail' name='email' placeholder='' classname='border-[#F1F1F1] rounded-md border-[1px] outline-none px-1 py-2 h-12'/>

        <Input_nohp name='text' title='No HP' codearea={62} bendera="./images/Icon/Icon/Indonesia.svg" placeholder=''/>

        <InputForm title='Kata Sandi' name='password' placeholder='' classname='border-[#F1F1F1] rounded-md border-[1px] outline-none pl-1 pr-10 py-2 h-12'/>

        <InputForm title='Kata Sandi' name='password' placeholder='' classname='border-[#F1F1F1] rounded-md border-[1px] outline-none pl-1 pr-10 py-2 h-12'/>
              
        <div className="text-right mb-2">
            <a href="#">Lupa Password?</a>
        </div>

        <button className='w-full rounded-md bg-[#3ECF4C] text-white h-10'>Masuk</button>

        
        
    </form>
    );
}

export default FormRegister