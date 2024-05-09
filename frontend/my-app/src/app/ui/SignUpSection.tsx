'use client'
import Button from "./Button";
import SignUp from '@/app/_lib/SignUp'
import { useFormState } from "react-dom";




const SignUpSection = () =>
{
    const [formState, formAction ] = useFormState(SignUp, 
        {
            username: '',
            password: '',
            password_confirmation: '',
            err: '',
        })
    return (
        <>
            {formState.err.length != 0 ? <span className="text-red-500 text-[1em]"> {formState.err} </span> : <></>}
            <form className="flex flex-col h-[20em] justify-evenly items-center " action={formAction}>
            
                
                <input name='username' placeholder="Username"  className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />
                <input name='password' placeholder="Password" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
                <input name='password-confirmation' placeholder="Password confirmation" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
                <Button  name={'Sign Up'}/>
            </form>
        </>
    )
}


export default SignUpSection;