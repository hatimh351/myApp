


const CreatePost = ()=>
{

    return (
        <div className="flex w-[90%]  justify-center  mt-10">
            <form className=" h-[10em] w-[50%] flex    rounded-full  overflow-hidden ">
                <input type="text" className="pl-6 bg-gray-100 h-[100%] w-max border-none outline-none" placeholder="My Post"/>
                <button className="bg-[#663399] text-white w-[40%] rounded h-[100%] hover:opacity-75 active:opacity-50 transition ease-in-out " >Post</button>
            </form>
        </div>
    )
}


export default CreatePost