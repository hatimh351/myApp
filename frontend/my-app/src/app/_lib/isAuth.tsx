'use client'


export const isAuth = async () =>
{

    const cookies:string[] = document.cookie.split(';');

    let cookiesObject: { [key: string]: string } = {};

    for (let i = 0; i < cookies.length; i++)
    {
        let arr = cookies[i].split('=')
        if (arr.length == 2) 
		{
			cookiesObject[arr[0].trim()] = arr[1].trim();
   		} 
	}

    const refresh = cookiesObject['refresh'];
    const access = cookiesObject['access'];
    const res = await fetch('http://127.0.0.1:8000/api/verify/', {
        headers: {
            "Authorization" : `Bearer ${access ? access : ''}`, 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    console.log(res.status)
    if (res.status != 200)
        return (false);
    return true;
}
