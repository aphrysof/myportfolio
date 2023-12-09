import React from 'react'
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";

export  default function Footer() {
    return (
        <footer className="max-w-full bg-[#1c2536] py-14 px-8">
            <div className="w-1/2 mx-auto flex justify-between items-center pb-8">
                <div className="pt-4">
                    <h5 className="font-semibold text-lg">Sofia{" "}<span className="text-purple-500">{" "}Wanjiru{" "}</span> Abdullahi</h5>
                   <p className="pt-3 text-[#a0aec0] font-bold text-base">&copy; 2023 All rights reserved</p>
                </div>
                <div className="flex space-x-6">
                    <div className="cursor-pointer"><GrLinkedin size={24}/></div>
                   <div className="cursor-pointer"><BsGithub size={24}/></div>
                </div>
            </div>
            <hr/>
            <div className="pt-12 text-center text-sm font-semibold">
                <p className="">About this website{" "}:{" "} <span className="text-[#a0aec0]">built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Netlify.</span></p>
            </div>
        </footer>
    )
}