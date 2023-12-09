import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  toggleCashoutStatus,
  toggleTransactionStatus,
} from '../../../services/modals'
import Button from '../../Button'

interface VerifyTrans {
  cashout?: boolean
  status?: string
  cashoutStatus?: boolean
}

export const TransferStatus = ({
  status,
  cashout,
  cashoutStatus,
}: VerifyTrans) => {
  const dispatch = useDispatch()
  return (
    <div className="w-430 bg-white mt-6 p-5 pt-7 rounded-lg ">
      {status === 'success' ? (
        <div className="mt-24 mb-36 px-5">
          <div className="flex justify-center items-center mb-2">
            <Image
              src={'/transaction-success.svg'}
              width={70}
              height={70}
              alt="success"
            />
          </div>

          <div className="text-center pt-4">
            <p className="text-xl font-semibold p-1">
              Funds successfully transferred
            </p>
            <p className="text-sm">
              Your wallet has been debited with the sum of NGN 100,000
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-24 mb-36 px-5">
          <div className="flex justify-center items-center mb-2">
            <Image
              src="/transaction-fail.svg"
              width={70}
              height={70}
              alt="success"
            />
          </div>

          <div className="text-center pt-4">
            <p className="text-xl font-semibold p-1">
              Transaction unsuccessfully
            </p>
            <p className="text-sm">Something went wrong, please try again</p>
          </div>
        </div>
      )}

      <Button
        onClick={() => {
          dispatch(toggleTransactionStatus())
        }}
        child={status === 'success' ? 'Okay' : 'Try again'}
        className="bg-darkGreen mt-20 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
      />
    </div>
  )
}

export const CashoutStatus = ({ status }: VerifyTrans) => {
  const dispatch = useDispatch()
  return (
    <div className="w-430 bg-white mt-6 p-5 pt-7 rounded-lg ">
      {status === 'success' ? (
        <div className="mt-24 mb-36 px-5">
          <div className="flex justify-center items-center mb-2">
            <Image
              src={'/cashout-success.svg'}
              width={70}
              height={70}
              alt="success"
            />
          </div>

          <div className="text-center pt-4">
            <p className="text-xl font-semibold p-1">
              Wallet debit successfully
            </p>
            <p className="text-sm">
              Your wallet has been debited with the sum of NGN 100,000
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-24 mb-36 px-5">
          <div className="flex justify-center items-center mb-2">
            <Image
              src="/transaction-fail.svg"
              width={70}
              height={70}
              alt="success"
            />
          </div>

          <div className="text-center pt-4">
            <p className="text-xl font-semibold p-1">
              Transaction unsuccessfully
            </p>
            <p className="text-sm">Something went wrong, please try again</p>
          </div>
        </div>
      )}

      <Button
        onClick={() => {
          dispatch(toggleCashoutStatus())
        }}
        child={status === 'success' ? 'Okay' : 'Try again'}
        className="bg-darkGreen mt-20 py-3 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
      />
    </div>
  )
}
