import {Footer, Navbar} from "@/components/index";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}