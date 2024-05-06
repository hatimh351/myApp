'use client'
import Button from "./Button";
import {redirect} from "next/navigation";
import Login from "@/app/lib/Login"
import { useState } from "react";



const LoginSection = () =>
{
    const [err, setError] = useState([]); 
    
    return (
        <form className="flex flex-col justify-center items-center" action={async (FormData) => 
        {
            if (FormData.get('username')?.length < 5)
                setError(['gggg']);
            await Login(FormData);
        }}>
        {err.length != 0 ?<p> {err[0]} </p> : <></>}
        <div className="flex flex-col h-4/5 justify-between mt-10 mb-10">
            <label className="font-bold font-sans" >Username</label>
            <input name='username' className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />

            <label className="font-bold font-sans">Password</label>
            <input name='password' className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
            <Button  name={'Login'}/>
        </div>
        </form>
    )
}


export default LoginSection;