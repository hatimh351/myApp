'use client'
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState , useEffect} from "react";
import { useCookies } from 'next-client-cookies';

export  const withAuth = (WrappedComponent: any) =>
{
    return  function WithAuth(props:any)
    {
	    const [isLogin, setLogin] = useState(false);
            const cookies = useCookies();
            const refresh = cookies.get('refresh');
            const access = cookies.get('access');
   
	 const checkAuth = async ()=>
            {            
    		  const res = await fetch('http://127.0.0.1:8000/api/verify/', {
        	headers: {
            		"Authorization" : `Bearer ${access ? access : ''}`, 
            		'Accept': 'application/json',
            		'Content-Type': 'application/json'
        		},
    	   	})
    		if (res.status != 200)
			setLogin(true)	    
	}
	    if (isLogin)
		redirect('/login/')
	    useEffect(()=> { checkAuth()}, [])    

        return <WrappedComponent {...props} />;
    }
}
