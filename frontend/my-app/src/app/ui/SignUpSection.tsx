import Button from "./Button";

const SignUp = async (formData: FormData) =>
{
    'use server';
    const res = await fetch('http://127.0.0.1:8000/api/sign-up/', {
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({'username': formData.get('username'), 'password': formData.get('password')}),

    })
    
    console.log(await res.json())
}

const SignUpSection = () =>
{
    return (
        <form className="flex flex-col h-[20em] justify-evenly items-center " action={SignUp}>
       
            <input name='username' placeholder="Username" className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />
            <input name='password' placeholder="Password" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
            <input name='password-confirmation' placeholder="Password confirmation" className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
            <Button  name={'Sign Up'}/>
        </form>
    )
}


export default SignUpSection;