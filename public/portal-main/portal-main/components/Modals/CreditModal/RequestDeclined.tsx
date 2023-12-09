import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleCreditRequestDeclined } from '../../../services/modals'
import Button from '../../Button'

export default function RequestDeclined() {
  const dispatch = useDispatch()

  return (
    <div className=" w-430 bg-white mt-3 p-5 rounded-lg">
      <div className="flex justify-center items-center mt-20 mb-8">
        <Image src="/decline-icon.svg" width={100} height={100} alt="close icon" />
      </div>
      <p className='text-base font-medium text-center px-14 pb-3'>Request Declined!</p>
      <p className='text-center text-lightAsh text-sm px-4' >
        A notification will be sent to your customer that this request has been declined
      </p>

      <Button
        onClick={() => dispatch(toggleCreditRequestDeclined())}
        child="Close"
        className="w-full bg-EAE px-3 py-2.5 rounded-lg text-black mt-8"
      />
    </div>
  )
}
