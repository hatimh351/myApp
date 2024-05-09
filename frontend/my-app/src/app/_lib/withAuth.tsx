'use client'
import { redirect } from "next/navigation";
import { isAuth } from "./isAuth"
import { useRouter } from "next/router";


export  const withAuth = (WrappedComponent: any) =>
{
    
    // const auth = await isAuth();
    return  function WithAuth(props:any)
    {

            const checkAuth = async ()=>
            {            
                const isAuth_ = await isAuth()
                return new Promise((resolve , reject) =>
                {
                    if (isAuth_)
                        resolve(true)
                    else
                        reject(false);
                })
            }

            checkAuth().catch((e)=> {
                const root = useRouter()
                root.push('/login/');
            })

        return <WrappedComponent {...props} />;
    }
}