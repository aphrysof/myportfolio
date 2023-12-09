import React from 'react'
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import Link from 'next/link';

export  default function Footer() {
    return (
        <footer className="max-w-full bg-[#1c2536] py-14 px-8">
            <div className="w-1/2 mx-auto flex justify-between items-center pb-8">
                <div className="pt-4">
                    <h5 className="font-semibold text-lg">Sofia{" "}<span className="text-purple-500">{" "}Wanjiru{" "}</span> Abdullahi</h5>
                   <p className="pt-3 text-[#a0aec0] font-bold text-base">&copy; 2023 All rights reserved</p>
                </div>
                <div className="flex space-x-6">
                <Link className="cursor-pointer" href="https://www.linkedin.com/in/sophia-waniru/" target='_blank'><GrLinkedin  size={36} /></Link>
                            <Link className="cursor-pointer" href="https://github.com/aphrysof/"  target='_blank'><BsGithub size={36} /></Link>
                </div>
            </div>
            <hr/>
            <div className="pt-12 text-center text-sm font-semibold">
                <p className="">About this website{" "}:{" "} <span className="text-[#a0aec0]">built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Netlify.</span></p>
            </div>
        </footer>
    )
}