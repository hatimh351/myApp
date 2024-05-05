import SignUpSection from "@/app/ui/SignUpSection"



export default function SignUpPage()
{
    return (
        <div className="flex w-[90%] items-center justify-center  ">
            <div className="bg-white w-[90%] h-[600px] flex  justify-center shadow-2xl rounded-md overflow-hidden">

                <div className="rounded w-[70%] h-[100%]  flex flex-col  items-center justify-center">
                    <h1 className="mt-12 font-bold font-sans text-5xl mb-10">Join us today! </h1>
                    <SignUpSection/>
                </div>
                <div className="bg-[#663399] w-full"></div>

            </div>
        </div>
    )
}