'use server';
import {redirect} from "next/navigation";

export type FormState = 
{
    username: string;
    password: string;
    password_confirmation: string;
    err: string;
}


function containsDigitsAndLetters(input: string): boolean {
    // Regular expression to match only letters and digits
    const regex = /^[a-zA-Z0-9]*$/;
    // Regular expression to match at least one letter
    const letterRegex = /[a-zA-Z]/;

    return regex.test(input) && letterRegex.test(input);
}


function isValidPassword(password: string): boolean {
    // Regular expression to match at least one letter, one digit, or one special character
    const regex = /^(?=.*[a-zA-Z])(?=.*\d|.*[\W_]).*$/;
    return regex.test(password);
}



const SignUp = async (prevState: FormState, formData:FormData):Promise<FormState> =>
{
    
    const data = {'username': formData.get('username') as string, 'password': formData.get('password') as string, 'password_confirmation': formData.get('password-confirmation') as string}
    
    
    if (data.username?.length < 5)
    {
        prevState.err ='Username must at least be at least 5 characters';
        return prevState;
    }
    if (!containsDigitsAndLetters(data.username))
    {
        prevState.err ='Username must contains only digits and Letters';
        return prevState;
    }
    
    if (data.password?.length < 10)
    {
        prevState.err ='Password must be at least 10 characters';
        return prevState;
    }
    
    if (data.password != data.password_confirmation)
    {
        prevState.err ="Confirmation Password doesn't matche the first Password";
        return prevState;
    }
    
    if (!isValidPassword(data.password))
    {
        prevState.err ='Password must at least has one digit or one  special character and letters';
        return prevState;  
    }

    const res = await fetch('http://127.0.0.1:8000/api/sign-up/', {
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'username': formData.get('username'), 'password': formData.get('password')}),
    
    })
    const result = await res.json()
    if (res?.status != 200)
    {
    	prevState.err = result?.Details?.Fail;
        return prevState
    };
    redirect('/login');
}

export default SignUp;
