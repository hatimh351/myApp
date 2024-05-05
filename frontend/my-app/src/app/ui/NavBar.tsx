import { IoHomeOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import SideBarIcon from "./SideBarIcon";
import Link from 'next/link'

const NavBar = ():React.ReactNode =>
{
    return (
        <div className="flex left-0  h-screen bg-[#663399] items-center w-[90px] justify-center">
            <div className="fixed  h-[50%]  flex flex-col  text-white items-center justify-around">
                <Link href={'/'}> <SideBarIcon icon={<IoHomeOutline size={'2.5em'} />}/> </Link>
                <Link href={'/login'}> <SideBarIcon icon={<IoMdLogIn size={'2.5em'} />} /> </Link>
                <Link href={'/logout'}> <SideBarIcon icon={<RiLogoutCircleLine size={'2.5em'} />} /> </Link>
            </div>
        </div>
    )
}


export default NavBar;