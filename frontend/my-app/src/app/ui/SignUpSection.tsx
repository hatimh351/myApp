import Button from "./Button";

const SignUp = async (formData: FormData) =>
{
    'use server';
    console.log(formData.get('username'), formData.get('password'), formData.get('password-confirmation'))
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