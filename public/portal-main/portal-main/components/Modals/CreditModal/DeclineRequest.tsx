import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  toggleCreditRequestDeclined,
  toggleDeclineCreditRequest,
} from '../../../services/modals'
import Button from '../../Button'

export default function DeclineRequest() {
  const dispatch = useDispatch()

  return (
    <div className=" w-430 bg-white mt-3 p-5 rounded-lg">
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => dispatch(toggleDeclineCreditRequest())}
      >
        <Image src="/close-icon.svg" width={20} height={20} alt="close icon" />
      </div>
      <p className="mt-24 text-base font-medium text-center px-14 pb-10">
        Are you sure you want to decline this request?
      </p>

      <Button
        onClick={() => {
          dispatch(toggleDeclineCreditRequest())
          dispatch(toggleCreditRequestDeclined())
        }}
        child="Yes, decline"
        className="w-full bg-lightPink text-darkRed px-3 py-2.5 rounded-lg mb-4"
      />
      <Button
        onClick={() => {
          dispatch(toggleDeclineCreditRequest())
        }}
        child="Cancel"
        className="w-full bg-EAE px-3 py-2.5 rounded-lg text-black"
      />
    </div>
  )
}
