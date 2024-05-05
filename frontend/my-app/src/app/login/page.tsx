
import LoginSection from "@/app/ui/LoginSection"
import Link from "next/link"


export default function LoginPage()
{
    return (
        <div className="flex w-[90%] items-center justify-center  ">
            <div className="bg-white w-[90%] h-[600px] flex  justify-center shadow-2xl rounded-md overflow-hidden">

                <div className="rounded w-[70%] h-[100%]  flex flex-col  items-center justify-center">
                    <h1 className="mt-12 font-bold font-sans text-5xl mb-10"> Welcome Back </h1>
                    <LoginSection/>
                    <p className="text-gray-500 text-sm mt-3">Don't have an account ? <Link href={'/sign-up'}><span className="text-[#663399]"> Sign up </span> </Link> </p>
                </div>
                <div className="bg-[#663399] w-full"></div>

            </div>
        </div>
    )
}