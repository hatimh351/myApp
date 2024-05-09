'use client'
import Button from "./Button";
import Login from "@/app/_lib/Login"
import { useFormState } from "react-dom";


const LoginSection = () =>
{
    
    const [formState, formAction ] = useFormState(Login, 
        {
            username: '',
            password: '',
            err: '',
        })
    
    return (
        <>
            {formState.err.length != 0 ? <span className="text-red-500 text-[1em]"> {formState.err} </span> : <></>}
            <form className="flex flex-col justify-center items-center" action={formAction}>

            <div className="flex flex-col h-4/5 justify-between mt-10 mb-10">
                <label className="font-bold font-sans" >Username</label>
                <input name='username' className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />

                <label className="font-bold font-sans">Password</label>
                <input name='password' className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
                <Button  name={'Login'}/>
            </div>
            </form>
        </>
    )
}


export default LoginSection;