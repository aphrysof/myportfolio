import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleApproveCreditRequest, toggleVerifyCreditTransaction } from '../../../services/modals'
import Button from '../../Button'

export default function ApprovedRequest() {
  const dispatch = useDispatch()
  return (
    <div className=" w-430 bg-white mt-3 p-5 rounded-lg">
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => dispatch(toggleApproveCreditRequest())}
      >
        <Image src="/close-icon.svg" width={20} height={20} alt="close icon" />
      </div>
      <p className="mt-24 text-base font-medium text-center px-14 pb-10">
        Are you sure you want to approve this request?
      </p>

      <Button
        onClick={() => {
          dispatch(toggleApproveCreditRequest())
          dispatch(toggleVerifyCreditTransaction())
        }}
        child="Approve and generate voucher"
        className="w-full bg-darkGreen text-white px-3 py-2.5 rounded-lg mb-4"
      />
      <Button
        onClick={() => dispatch(toggleApproveCreditRequest())}
        child="Cancel"
        className="w-full bg-EAE px-3 py-2.5 rounded-lg text-black"
      />
    </div>
  )
}
