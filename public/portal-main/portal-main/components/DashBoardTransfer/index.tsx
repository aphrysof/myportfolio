import React from 'react'

type TransferProp = {
  abb?: string, name?: string, email?: string, amount?: string
}

export default function DashBoardTransfer({abb, name, email, amount}: TransferProp ) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <div className="rounded-full w-14 h-14 p-4 text-lg font-semibold bg-lightPurple flex justify-center items-center mr-2 text-purple">
            {abb}
        </div>
        <div>
          <span className="flex text-lg">{name}</span>
          <span className="flex text-xs">{email}</span>
        </div>
      </div>
     
      <span className="font-bold text-lg">
        {amount}
      </span>
    </div>
  )
}
