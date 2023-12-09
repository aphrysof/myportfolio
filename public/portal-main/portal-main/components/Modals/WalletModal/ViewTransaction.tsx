import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleTransactionDetail } from '../../../services/modals'

type InputProp = {
  title: string,
  value: string
}

const DisabledInput = ({ title, value }: InputProp) => {
  return (
    <div className="w-full border flex justify-between border-lightborder bg-bgFafa p-3 rounded-lg my-3">
      <span className='text-lightAsh text-sm'>{title}</span>
      <span className='text-sm'>{value}</span>
    </div>
  )
}

export default function ViewTransactionDetails() {
  const dispatch = useDispatch()
  return (
    <div className="w-450 bg-white mt-6 p-5 pt-7 rounded-lg">
      <Image
        src="/close-icon.svg"
        width={30}
        height={30}
        alt="close icon"
        className="cursor-pointer"
        onClick={() => dispatch(toggleTransactionDetail())}
      />

      <div className="flex justify-between items-center mt-7 border rounded-lg p-4 px-5 mb-10">
        <div className="flex justify-between items-center ">
          <div className="text-buttoncolor">
            <p className="text-selectLabel text-xs pb-1">Amount (NGN)</p>
            <p className="text-xl font-semibold">230,000</p>
          </div>
        </div>
        <div className="w-1 bg-borderAsh h-10"></div>
        <div className="text-buttoncolor pr-3">
          <p className="text-selectLabel text-xs pb-1">Account No</p>
          <p className="text-xl font-semibold">383398397</p>
        </div>
      </div>
      <div className=" ">
        <p className="uppercase text-sm text-backText"> transaction details</p>

        <DisabledInput title="Full name" value='John Doe' />
        <DisabledInput  title="Payment Categotory" value='Transfer'/>
        <DisabledInput  title="Phone Number" value='73838839393'/>
        <DisabledInput  title="Payment Description" value='Payment Successful'/>
        <DisabledInput title="Invoice ID" value='Jkwjwwkwww' />
        <DisabledInput title="Payment Provider ref" value='ejendldjnkjen' />
        <DisabledInput  title="Timestamp" value='2022-08-12 | 01:04pm WAT'/>

      </div>
    </div>
  )
}
