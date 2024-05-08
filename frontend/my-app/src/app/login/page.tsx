
import LoginSection from "@/app/ui/LoginSection"
import Link from "next/link"


export default function LoginPage()
{

    return (
        <div className="flex w-[90%] items-center justify-center  ">
            <div className="rounded-md w-[80%] h-[60%]  flex flex-col  items-center justify-center shadow-2xl  overflow-hidden">
                <h1 className="mt-12 font-bold font-sans text-5xl mb-10"> Welcome Back </h1>
                <LoginSection/>
                <p className="text-gray-500 text-sm mt-3">Don't have an account ? <Link href={'/sign-up'}><span className="text-[#663399]"> Sign up </span> </Link> </p>
            </div>
        </div>
    )
}