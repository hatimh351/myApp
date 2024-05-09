'use client'

export const isAuth = async () =>
{
    const cookies:string[] = document.cookie.split(';');

    let cookiesObject: { [key: string]: string } = {};

    for (let i = 0; i < cookies.length; i++)
    {
        const arr = cookies[i].split('=')
        cookiesObject[arr[0].trim(), arr[1].trim()];
    }

    console.log(cookiesObject)
    // const refresh = cookies().get('refresh');
    // const access = cookies().get('access');
    // console.log(access?.value)
    // const res = await fetch('http://127.0.0.1:8000/api/verify/', {
    //     headers: {
    //         "Authorization" : `Bearer ${access?.value}`, 
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    // })
    
    // console.log(await res.json())
}