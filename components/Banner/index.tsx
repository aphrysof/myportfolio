import React from 'react'
import Image from "next/image";
import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {LiaDownloadSolid} from "react-icons/lia";


export default function Banner () {
    return (
        <section className="max-w-full py-24 w-[70%] mx-auto" id="#home">
            <div className="flex justify-between">
                <div className="w-[50%] mt-10">
                    <h1 className="text-4xl font-bold">Frontend Developer here! {" "}<span aria-label="a waving hand" role="img">👋</span></h1>
                    <p className="text-xl text-[#a0aec0] mt-5 leading-[36px]">My Name is {" "} <span className="text-purple-500 font-semibold">Sophia Wanjiru Abdullahi,</span> a frontend developer residing in Kenya who is passionate in developing user-centric web experiences. </p>
                    <div className="flex justify-between mt-8">
                        <div className="flex space-x-8">
                            <div className="cursor-pointer"><GrLinkedin  size={36} /></div>
                            <div className="cursor-pointer"><BsGithub size={36} /></div>
                        </div>
                        <div className="">
                            <button className="bg-purple-500 py-3 px-4 rounded-3xl flex text-white items-center space-x-4">
                                Download Resume <LiaDownloadSolid size={20}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <Image src="/mm.jpg" alt="myimage" width={400} height={400} style={{ borderRadius: "16px" }}/>
                </div>
            </div>
        </section>
    )
}