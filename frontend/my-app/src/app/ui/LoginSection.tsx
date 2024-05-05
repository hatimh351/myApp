import Button from "./Button";

const Login = async (formData: FormData) =>
{
    'use server';
    console.log(formData.get('username'), formData.get('password'))
    const res = await fetch('http://127.0.0.1:8000/sign-up/', {
        body: JSON.stringify({username: formData.get('username'), password: formData.get('password')}),
        method : 'POST',

    })
    console.log("here")
    
    console.log(res)
}

const LoginSection = () =>
{
    return (
        <form className="flex flex-col justify-center items-center" action={Login}>
        <div className="flex flex-col h-4/5 justify-between mt-10 mb-10">
            <label className="font-bold font-sans" >Username</label>
            <input name='username' className=" pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" />

            <label className="font-bold font-sans">Password</label>
            <input name='password' className="pl-6 bg-gray-100 h-10 border-none outline-none focus:outline-[#663399] rounded-full" type="password"/>
        </div>
            <Button  name={'Login'}/>
        </form>
    )
}


export default LoginSection;