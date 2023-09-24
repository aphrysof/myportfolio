import React from 'react'
import Link from "next/link";
import {GoSun} from "react-icons/go";
import {PiMoon} from "react-icons/pi";


const links = [
    {
        menuName: "Home",
        link: "#home",
        id: "home",
    },
    {
        menuName: "About",
        link: "#about",
        id: "about",
    },
    {
        menuName: "Skills",
        link: "#skills",
        id: "skills",
    },
    {
        menuName: "Projects",
        link: "#projects",
        id: "projects",
    },
    {
        menuName: "Contact",
        link: "#contact",
        id: "contact",
    },
]
export default function  Navbar () {
    return (
        <nav className="max-w-full flex items-center justify-center space-x-16 h-14 text-lg my-10">
                {
                    links && links.map((link, index) => (
                        <ul className="flex text-white text-semibold" key={index}>
                       <Link href={link.link} className="py-3 px-4 rounded-full focus:text-purple-500 focus:bg-[#0f172a] hover:bg-violet-500 hover:text-white"><li className="">{link.menuName}</li></Link>
                        </ul>
                    ))
                }
            <div className="flex space-x-12 cursor-pointer">
                <PiMoon size={24} />
            </div>

        </nav>
    )
}