import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import Container from "../Container";

type AppProps = {
    page: number
}
export default function FulfilmentStep4 ({page} : AppProps) {

    const router = useRouter()
    return(
        <Container
          backBtn={
          <>
          <Link href="/credit/fulfilment">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Add Fulfilmet</span>
        </>
       }
        >
        {page === 3 && (
            <div className="w-full bg-white rounded-lg p-14">
                    <div className="w-3/4 my-[150px] mx-auto flex flex-col items-center justify-center">
                        <Image src="/fly-emails.svg" alt = "email" width={120} height={120}/>
                        <div className="text-center mb-6">
                            <h2 className="font-medium text-2xl text-blackRussian">Fulfilment submitted!</h2>
                            <p className="text-lightAsh mt-2">Customer’s fulfilment has been submitted successfuly.</p>
                        </div>
                        <Button child = "Okay" className ="bg-darkGreen p-4 text-white rounded-10" onClick={() => router.push('/credit/fulfilment')}></Button>
                    </div>
            </div>
        )}
        </Container>
    )
}