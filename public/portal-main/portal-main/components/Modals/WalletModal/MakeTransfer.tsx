import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  toggleCashoutModal,
  toggleCashoutStatus,
  toggleTransactionStatus,
  toggleTransferFundsModal,
  toggleVerifyCashout,
  toggleVerifyTransaction,
} from '../../../services/modals'
import Button from '../../Button'
import { BigInputField, SelectField } from '../../InputField'

interface VerifyTrans {
  cashout?: boolean
  status?: string
  cashoutStatus?: boolean
}

export default function TransferFundsModal() {
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
        <span className="font-medium text-lg text-buttoncolor">
          Transfer funds
        </span>
        <div
          className="cursor-pointer"
          onClick={() => dispatch(toggleTransferFundsModal())}
        >
          <Image
            src="/close-icon.svg"
            width={20}
            height={20}
            alt="close icon"
          />
        </div>
      </div>

      <SelectField
        className="w-full mt-10"
        selectBorder="border-1"
        label="Select customer"
        selectLabel="text-sm  text-selectLabel "
        selectArray={days}
      />

      <SelectField
        className="w-full mt-5"
        selectBorder="border-1"
        label="Select customer"
        selectLabel="text-sm  text-selectLabel"
        selectArray={days}
      />

      <BigInputField
        className="w-full mt-5"
        label="Amount to fund wallet"
        name="amount"
        placeholder="NGN 0.00"
        register={register}
        inputClass={"rounded-lg outline-none flex-1 px-2"}
        labelClass="text-sm text-selectLabel"
        borderClass="py-4 text-3xl"
      />

      <Button
        child="Next"
        className="bg-darkGreen mt-8 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
        onClick={() => {
          dispatch(toggleTransferFundsModal())
          dispatch(toggleVerifyTransaction())
        }}
      />
    </div>
  )
}

export const VerifyTransaction = ({ cashout }: VerifyTrans) => {
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
            !cashout && dispatch(toggleTransferFundsModal())
            cashout && dispatch(toggleVerifyCashout())

            !cashout && dispatch(toggleVerifyTransaction())
            cashout && dispatch(toggleCashoutModal())
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
            !cashout && dispatch(toggleVerifyTransaction())
            cashout && dispatch(toggleVerifyCashout())

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
          {!cashout && (
            <div className="rounded-full w-8 h-8 p-2 text-base font-semibold bg-lightPurple flex justify-center items-center mr-2 text-purple">
              AB
            </div>
          )}
          {cashout ? (
            <div className="text-buttoncolor">
              <p className="text-sm">01010338383</p>
              <p className="text-selectLabel text-xs">Bank Name</p>
            </div>
          ) : (
            <div className="text-buttoncolor">
              <p className="text-sm">Kenneth Ander</p>
              <p className="text-selectLabel text-xs">08393930303</p>
            </div>
          )}
        </div>
        <div className="w-1 bg-borderAsh h-10"></div>

        {cashout ? (
          <div className="text-buttoncolor">
            <p className="text-sm">NGN 100,000</p>
            <p className="text-selectLabel text-xs">Withdrawal Amount</p>
          </div>
        ) : (
          <div className="text-buttoncolor">
            <p className="text-sm">NGN 100,000</p>
            <p className="text-selectLabel text-xs">amount to fund</p>
          </div>
        )}
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
          !cashout && dispatch(toggleVerifyTransaction())
          !cashout && dispatch(toggleTransactionStatus())
          cashout && dispatch(toggleCashoutStatus())
          cashout && dispatch(toggleVerifyCashout())
        }}
        child="Proceed"
        className="bg-darkGreen mt-20 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
      />
    </div>
  )
}