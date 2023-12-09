import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleCreditRequestApproved } from '../../../services/modals'
import Button from '../../Button'

export default function RequestApproved() {
  const dispatch = useDispatch()
  return (
    <div className=" w-430 bg-white mt-3 p-5 rounded-lg">
      <div className="flex justify-center items-center mt-20 mb-8">
        <Image src="/approve-icon.svg" width={100} height={100} alt="close icon" />
      </div>
      <p className='text-base font-medium text-center px-14 pb-3'>Request Approved!</p>
      <p className='text-center text-lightAsh text-sm px-4' >
        A Voucher code will be sent to the customer to complete the purchase
      </p>

      <Button
        onClick={() => dispatch(toggleCreditRequestApproved())}
        child="Close"
        className="w-full bg-EAE px-3 py-2.5 rounded-lg text-black mt-8"
      />
    </div>
  )
}
