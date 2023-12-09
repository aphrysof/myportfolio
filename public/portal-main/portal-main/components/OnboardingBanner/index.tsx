import Image from 'next/image'
import WalletCard from '../WalletCard'

export default function OnboardingBanner() {
  return (
    <div className="w-full bg-darkGreen flex justify-center relative">
      <div className=" mt-36">
        <h1 className="text-5xl tracking-wide text-white font-semibold">
          {' '}
          <span className=" text-lightGreen">ImaliPay</span> for Business
        </h1>
        <p className="text-[#CBCBCB] text-sm leading-4 my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <WalletCard
          classname="bg-white w-80 px-5 py-1 rounded-lg my-10 z-10"
          icon="/walletBalance.svg"
          title="Wallet balance (NGN)"
          amount="29,000"
        />
      </div>

      <div className="mt-4">
        <Image
          src="/pepperMan.svg"
          alt="pepperMan"
          width={270}
          height={270}
          className="absolute bottom-96 left-32 rounded-lg"
        />
        <Image
          src="/laptopMan.svg"
          alt="pepperMan"
          width={270}
          height={270}
          className="absolute bottom-48 left-80 rounded-lg z-10"
        />
        <Image
          src="/lady.svg"
          alt="pepperMan"
          width={270}
          height={270}
          className="absolute pic_position right-24 rounded-lg z-1"
        />
      </div>
    </div>
  )
}
