'use client'
import Button from "./Button";
import SignUp from '@/app/lib/SignUp'
import { useFormState } from "react-dom";

type FormState = 
{
    username: string;
    password: string;
    password1: string;
    ThreIsErrors: boolean;
    errors: string[];
}

const SignUpSection = () =>
{
    const [formState, formAction ] = useFormState(SignUp, 
        {
            username: '',
            password: '',
            password1: '',
            ThreIsErrors: false,
            errors: [],
        })
    return (
        <form className="flex flex-col h-[20em] justify-evenly items-center " action={formAction}>
        
            {formState.ThreIsErrors ? <span> {formState.errors} </span> : <></>}
            
            <input name='username' placeholder="Username" className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />
            <input name='password' placeholder="Password" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
            <input name='password-confirmation' placeholder="Password confirmation" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
            <Button  name={'Sign Up'}/>
        </form>
    )
}


export default SignUpSection;