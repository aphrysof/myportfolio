import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  toggleCashoutModal,
  toggleVerifyCashout,
} from '../../../services/modals'
import Button from '../../Button'
import { BigInputField } from '../../InputField'

export default function Cashout() {
  const dispatch = useDispatch()
  const days = [
    { value: '1', text: 'soleproprietorship' },
    { value: '2', text: 'partnership' },
  ]

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div className=" w-430 bg-white mt-5 p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="font-medium text-lg text-buttoncolor">Cashout</span>
        <div
          className="cursor-pointer"
          onClick={() => {
            dispatch(toggleCashoutModal())
          }}
        >
          <Image
            src="/close-icon.svg"
            width={20}
            height={20}
            alt="close icon"
          />
        </div>
      </div>

      <BigInputField
        name="bank"
        label="Selected bank"
        register={register}
        borderClass="p-3"
        labelClass="text-sm"
        className="mt-10 mb-4"
        value="0100290202 - Orji Azubike"
      />

      <BigInputField
        name="balance"
        label="Wallet balance"
        register={register}
        borderClass="p-3"
        labelClass="text-sm"
        className=""
        value="NGN 2,090,420"
      />

      <BigInputField
        className="w-full mt-5"
        label="Amount to fund wallet"
        name="amount"
        placeholder="NGN 0.00"
        register={register}
        labelClass="text-sm text-selectLabel"
        borderClass="py-4 text-3xl"
      />

      <Button
        child="Next"
        className="bg-darkGreen mt-8 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
        onClick={() => {
          dispatch(toggleCashoutModal())
          dispatch(toggleVerifyCashout())
        }}
      />
    </div>
  )
}
