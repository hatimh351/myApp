'use client';

import { useCookies } from 'next-client-cookies';


export const isAuth = async () =>
{
    const cookies = useCookies();
    const refresh = cookies.get('refresh');
    const access = cookies.get('access');
    const res = await fetch('http://127.0.0.1:8000/api/verify/', {
        headers: {
            "Authorization" : `Bearer ${access ? access : ''}`, 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    if (res.status != 200)
        return (false);
    return true;
}
