'use client'

import { useFormStatus } from "react-dom";


const Button = ({name}:{name:string}) =>
{
    const { pending } = useFormStatus();

    return(<button disabled={pending} type="submit"  className="bg-[#663399] text-white mt-10 w-[100%] rounded h-14 hover:opacity-75 active:opacity-50 transition ease-in-out "> 
    { pending ? name + ' ...' : name }
    
    </button>)
}
export default Button;