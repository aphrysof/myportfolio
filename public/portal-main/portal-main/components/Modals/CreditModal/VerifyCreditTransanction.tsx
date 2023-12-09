import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  toggleApproveCreditRequest,
  toggleCreditRequestApproved,
  toggleVerifyCreditTransaction,
} from '../../../services/modals'
import Button from '../../Button'
import { BigInputField } from '../../InputField'

export const VerifyCreditTransaction = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div className="w-430 bg-white mt-6 p-5 pt-7 rounded-lg">
      <div className="flex justify-between items-center">
        <span
          className="font-medium flex text-sm text-backText cursor-pointer"
          onClick={() => {
            dispatch(toggleVerifyCreditTransaction())
            dispatch(toggleApproveCreditRequest())
          }}
        >
          <Image
            className="mr-2"
            src="/back-icon.svg"
            width={10}
            height={10}
            alt="back-icon"
          />{' '}
          Go back
        </span>

        <Image
          src="/close-icon.svg"
          width={20}
          height={20}
          alt="close icon"
          className="cursor-pointer"
          onClick={() => {
            dispatch(toggleVerifyCreditTransaction())
          }}
        />
      </div>
      <p className="text-buttoncolor text-lg font-medium mt-3">
        Verify transaction
      </p>
      <span className="text-sm text-selectLabel">
        Enter the 6-digit OTP sent to userna**@******.com
      </span>

      <div className="flex justify-between items-center mt-7 border rounded-lg p-1 px-5 mb-10">
        <div className="flex justify-between items-center ">
          <div className="rounded-full w-8 h-8 p-2 text-base font-semibold bg-lightPurple flex justify-center items-center mr-2 text-purple">
            AB
          </div>

          <div className="text-buttoncolor">
            <p className="text-sm">01010338383</p>
            <p className="text-selectLabel text-xs">Bank Name</p>
          </div>
        </div>
        <div className="w-1 bg-borderAsh h-10"></div>

        <div className="text-buttoncolor">
          <p className="text-sm">NGN 100,000</p>
          <p className="text-selectLabel text-xs">Withdrawal Amount</p>
        </div>
      </div>

      <BigInputField
        name="otp"
        label="Enter OTP"
        register={register}
        borderClass="p-3"
        labelClass="text-sm"
        placeholder="****"
        className=""
        inputClass="rounded-lg outline-none flex-1 px-2"
      />

      <Button
        onClick={() => {
          dispatch(toggleVerifyCreditTransaction())
          dispatch(toggleCreditRequestApproved())
        }}
        child="Proceed"
        className="bg-darkGreen mt-20 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
      />
    </div>
  )
}
