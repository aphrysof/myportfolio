import Image from 'next/image'
import { useRouter } from 'next/router'
import add from '../../public/add.png'
import Button from '../Button'
import { InputField, SelectField } from '../InputField'
import OnboardingBanner from '../OnboardingBanner'

type AppProps = {
  page: number
}

export default function Step2({ page }: AppProps) {
  //always returns an object.
  const days = [
    { value: '1', text: 'soleproprietorship' },
    { value: '2', text: 'partnership' },
  ]
  const router = useRouter()
  return (
    <>
      {page === 1 && (
        <div className="w-full flex">

          <OnboardingBanner />
          <div className="w-full pt-24 pb-20 p-16 font-body grid">
            <div className="border-b-[1px] border-[#d1d1d1] pb-6">
              <div className="w-full flex justify-between items-center font-medium text-[#101010]">
                <h1 className="text-2xl leading-7">Business Director(s)</h1>
                <p className="text-sm leading-4 font-normal text-[#101010]">
                  Step {page === 1 ? '2' : 'none'} of{' '}
                  <span className="font-bold">2</span>
                </p>
              </div>
              <p className="font-medium text-[#101010] text-sm leading-4 mt-2">
                Add business director(s)
              </p>
            </div>

            <InputField
              label="DIRECTOR #1 NAME"
              className="mb-7 mt-10"
              placeholder="Enter full name"
            />

            <InputField
              label="DIRECTOR #1 PHONE NO."
              className="mb-7"
              placeholder="Enter full name"
            />

            <div className="flex space-x-4 my-2">
              <InputField
                label="DIRECTOR #1 NAME"
                className="mb-6 w-full"
                placeholder="Enter full name"
              />

              <SelectField
                label="TYPE OF BUSINESS"
                className="mb-6 w-full"
                selectArray={days}
              />
            </div>

            <SelectField
              label="VALID IDENTIFICATION DOCUMENT"
              className="mb-7 w-full"
              selectArray={days}
            />

            <InputField
              label="IDENTIFICATION NUMBER."
              className="mb-7"
              placeholder="Enter full name"
            />

            <InputField
              label="ADDRESS"
              className="mb-7"
              placeholder="Enter full name"
            />

            <div className="flex items-center pt-3 pb-10">
              <p className="text-base text-[#555555] font-normal leading-4">
                Have more than one(1) director?{' '}
              </p>
              <button className="flex items-center ml-2 text-[#014342]">
                Add director
                <Image src={add} alt="add" className="ml-2" />
              </button>
            </div>
      
            <Button
              onClick={(e: any) => {
                e.preventDefault()
                router.push('/business_form_upload/success')
              }}
              child={page === 1 ? 'Submit' : 'none'}
              className="w-full text-white py-3 text-center bg-darkGreen rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
