'use server'
import { revalidatePath } from "next/cache";
import {redirect} from "next/navigation";
import { cookies } from "next/headers";
import { CgOculus } from "react-icons/cg";

type FormState = 
{
    username:string;
    password:string;
    err:string;
}

const Login = async (prevState: FormState, formData:FormData):Promise<FormState> =>
{
    
    
    
    const data = {'username': formData.get('username') as string, 'password': formData.get('password') as string}
    
    if (data.username?.length < 5)
    {
        prevState.err ='Username must at least be 5 characters';
        return prevState;
    }
    
    if (data.password?.length < 5)
    {
        prevState.err ='Password must at least be 10 characters';
        return prevState;
    }
    
    
    const req = await fetch('http://127.0.0.1:8000/api/token/', {
        body: JSON.stringify({username: formData.get('username'), password: formData.get('password')}),
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    
    const respon =  await req.json()
    if (req.status != 200)
    {
        prevState.err = respon?.detail;
        return prevState; 
    }
    
    console.log(respon?.access);
    cookies().set('refresh', respon?.refresh);
    cookies().set('access', respon?.access);
    
    return prevState
}

export default Login;