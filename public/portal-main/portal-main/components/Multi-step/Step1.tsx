import Image from 'next/image'
import Link from 'next/link'
import upload from '../../public/backup.png'
import Button from '../Button'
import { InputField, SelectField } from '../InputField'
import OnboardingBanner from '../OnboardingBanner'

type AppProps = {
  page: number
  handleStep: () => void
}

export default function Step1({ page, handleStep }: AppProps) {
  const days = [
    { value: '1', text: 'soleproprietorship' },
    { value: '2', text: 'partnership' },
  ]
  return (
    <>
      {page === 0 && (
        <div className="w-full flex">
          <OnboardingBanner />
          <div className="w-full px-16 pt-24 pb-11 font-body grid gap-4">
            <div className="border-b-2 border-inputBorder pb-6">
              <div className="w-full flex justify-between items-center font-medium text-[#101010]">
                <h1 className="text-2xl">
                  Business document & corporate account
                </h1>
                <p className="text-sm leading-4 font-normal text-buttonColor">
                  Step{page === 0 ? '1' : '2'} of{' '}
                  <span className="font-bold">2</span>
                </p>
              </div>
              <p className="font-medium text-buttonColor text-sm leading-4 mt-2">
                Personal info copy goes here
              </p>
            </div>
            <div className="border-b-2 border-inputBorder text-xs text-buttonColor font-medium pb-6">
              <h1 className="mt-4 mb-2">CERTIFICATE OF CO-OPERATION</h1>
              <div className="border-dashed border-2 border-ipcolor2 bg-white">
                <div className="py-11 flex flex-col items-center">
                  <Image src={upload} alt="upload" className="cursor-pointer" />
                  <p className="mt-2">Click to upload file CAC</p>
                </div>
              </div>
            </div>
            <div className="text-xs text-buttonColor font-medium mb-2 pb-6">
              <h1 className="mt-4 mb-2">ARTICLE OF ASSOCIATION</h1>
              <div className="border-dashed border-2 border-ipcolor2 bg-white">
                <div className="py-11 flex flex-col items-center">
                  <Image src={upload} alt="upload" className="cursor-pointer" />
                  <p className="mt-2">Click to upload Article of Association</p>
                </div>
              </div>
            </div>
            <p
              className="text-center text-sm font-medium text-[#555555] relative before:content-[''] before:block before:w-56 before:bg-[#d1d1d1] before:h-[1px] before:absolute before:left-0 before:top-[50%] before:-z-20
              after:content-[''] after:block after:w-56 after:bg-[#d1d1d1] after:h-[1px] after:absolute after:right-0 after:top-[50%] after:-z-20"
            >
              CORPORATE ACCCOUNT INFO
            </p>
            <SelectField
              label="BANK INSTITUTION"
              className="mb-6"
              selectArray={days}
            />

            <InputField
              label="ACCOUNT NUMBER"
              className="mb-6"
              placeholder="Enter full name"
            />
            <Button
              onClick={handleStep}
              child={page === 0 ? 'Next' : 'Submit'}
              className="w-full text-white py-3 text-center bg-darkGreen rounded-lg mt-4"
            />

            <p className="text-center text-base text-[#555555] font-normal leading-4 pt-4">
              Not ready yet?{' '}
              <Link href="/" className="text-[#101010] font-medium">
                Submit Later
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
