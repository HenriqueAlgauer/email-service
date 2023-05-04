import { Input } from "@chakra-ui/react";
import './primary-input.css'

interface PrimaryInputProps {
    name: string,
    value: string,
    onChange : React.ChangeEventHandler<HTMLInputElement>,
    label: string
}


export default function PrimaryInput({name, value, onChange, label} : PrimaryInputProps){
    return(
        <>
        <div className='input-container'>
            <label className='label'>{label}</label>
            <Input  
                variant='filled' 
                placeholder='Digite seu e-mail' 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        </div>

        </>
    )
}