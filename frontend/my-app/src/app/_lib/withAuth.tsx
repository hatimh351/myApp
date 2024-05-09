'use client'
import { isAuth } from "./isAuth"
import { useEffect } from "react"


export  const WithAuth =  (WrappedComponent: any) =>
{
    
    return function WithAuth(props:any)
    {
        useEffect(()=> 
        {
            isAuth();
        })
        return <WrappedComponent {...props} />;
    }
}