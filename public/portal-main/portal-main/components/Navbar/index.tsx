import Image from "next/image"
import profileIcon from  '../../public/avatar.png'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {AiOutlineBell} from 'react-icons/ai'
import {useEffect, useState} from 'react'
import { useRouter } from "next/router"

export default function Navbar () {
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()
    useEffect(() => {
        if(router.pathname !== '/dashboard'){
            setShow(true);
        }else {
            setShow(false);
        }
    }, [])
    return(
        <nav className="font-body bg-white border-b-[1.5px] border-[#d1d1d1] flex justify-between items-center py-4 pl-12 pr-9 sticky top-0 z-30 ml-[310px]">
        <div className="">
        <h1 className="text-[#222222] font-medium text-2xl">Hello, $Company</h1>
        <p className="text-[#707070] font-medium text-sm">Here’s what’s going on with your account.</p>
        </div>
        {/* //TODO
        //conditionally rendering the notification component based on the route */}
        <div className="flex items-center relative">
            {show ?  <div className="inline-flex items-center border-r-2 border-[#d1d1d1]">
                <AiOutlineBell size={24}  className = "stroke-[#014342]"/> <span className="mr-10 text-[#222222] font-medium text-sm ml-[14px]">Notifications</span>
            </div> : null}
            <div className="flex items-center ml-[26px]">
         <Image src={profileIcon} alt ="profile" />
           <div className="text-xs text-[#222222] mr-4 ml-2 cursor-pointer" onClick={() => router.push('/profile')}>
                <p>Alex, Chibueyim</p>
                <p className="text-[#707070]">username@mail.com</p>
           </div>
           <MdKeyboardArrowDown className="absolute top-2 right-0"/>
            </div>
        </div>
        </nav>
    )
}