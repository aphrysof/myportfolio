import {About, Banner, Contact, Experience, Projects, Skills} from "@/components/index";

export default function Page(){
    return(
        <>
            <Banner/>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </>
    )
}