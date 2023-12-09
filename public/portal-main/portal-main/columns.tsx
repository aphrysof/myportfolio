import Image from 'next/image'
import { GoPrimitiveDot } from 'react-icons/go'

export const COLUMNS = [
  {
    Header: 'TRANS ID',
    accessor: 'transid',
    Cell: (props: any) => (
      <span
        style={{
          fontWeight: 600,
          color: '#222222',
        }}
      >
        {props.value}
      </span>
    ),
  },
  {
    Header: 'DATE',
    accessor: 'date',
  },
  {
    Header: 'ACCOUNT NO',
    accessor: 'account_no',
  },
  {
    Header: 'TRANS.TYPE',
    accessor: 'trans_type',
  },
  {
    Header: 'AMOUNT',
    accessor: 'amount',
  },
  {
    Header: 'STATUS',
    accessor: 'status',
  },
]

export const CUSTOMER_COLUMN = [
  {
    Header: 'ID',
    accessor: 'id',
    Cell: (props: any) => (
      <span
        style={{
          fontWeight: 600,
          color: '#222222',
        }}
      >
        {props.value}
      </span>
    ),
  },
  {
    Header: 'CUSTOMER',
    accessor: 'email',
    Cell: (row: any) => (
      <span className="flex items-center justify-center">
        <span
          style={{
            width: '48px',
            height: '48px',
            background: '#e5e5e5',
            color: '#101828',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            fontWeight: 500,
            marginRight: '8px',
          }}
        >
          {row.row.original.profile ? (
            <Image
              src={row.row.original.profile}
              alt="profile"
              width={48}
              height={48}
            />
          ) : (
            `${row.row.original.first_name.charAt(
              0,
            )}${row.row.original.last_name.charAt(0)}`
          )}
        </span>
        <span className="font-normal">
          {row.row.original.first_name} {row.row.original.last_name}
          <span
            style={{
              display: 'block',
              color: '#667085',
            }}
          >
            {row.row.original.email}
          </span>
        </span>
      </span>
    ),
  },
  {
    Header: 'DATE REGISTERED',
    accessor: 'date',
    Cell: (props: any) => (
      <span
        style={{
          color: '#667085',
        }}
      >
        {props.value}
      </span>
    ),
  },
  {
    Header: 'STATUS',
    accessor: 'status',
    Cell: (val: any) => (
      <>
        {val.value === 'Verified' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#ECFDF3',
              color: '#027A48',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            <Image
              src="/Icon3.svg"
              alt="icon"
              width={12}
              height={12}
              className="mr-2"
            />
            {val.value}
          </span>
        ) : val.value === 'Rejected' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#FEF3F2',
              color: '#B42318',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            <Image
              src="/Icon1.svg"
              alt="icon"
              width={12}
              height={12}
              className="mr-2"
            />
            {val.value}
          </span>
        ) : (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F2F4F7',
              color: '#344054',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            <Image
              src="/Icon.svg"
              alt="icon"
              width={12}
              height={12}
              className="mr-2"
            />
            {val.value}
          </span>
        )}
      </>
    ),
  },
]

export const SUB_ACCOUNTS_COLUMN = [
  {
    Header: 'CUSTOMER NAME & PHONE NO.',
    accessor: 'phone_number',
    Cell: (row: any) => (
      <div className="flex items-center justify-center">
        <p
          style={{
            width: '48px',
            height: '48px',
            background: '#e5e5e5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            fontWeight: 500,
            marginRight: '8px',
          }}
        >
          {row.row.original.first_name.charAt(0)}
          {row.row.original.last_name.charAt(0)}
        </p>
        <p className="">
          {row.row.original.first_name} {row.row.original.last_name}
          <span
            style={{
              display: 'block',
              color: '#667085',
            }}
          >
            {row.row.original.phone_number}
          </span>
        </p>
      </div>
    ),
  },
  {
    Header: 'ACCOUNT NO.',
    accessor: 'account_no',
  },
  {
    Header: 'DATE CREATED',
    accessor: 'date',
  },
  {
    Header: 'WALLET BALANCE',
    accessor: (e: any) => `${e.currency} ${e.amount}`,
  },
  {
    Header: ' STATUS',
    accessor: 'status',
    Cell: (c: any) => (
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#EFF8FF',
          color: '#175CD3',
          borderRadius: '16px',
          fontWeight: 500,
          fontSize: '12px',
          padding: '4px 12px 4px 10px',
        }}
      >
        <GoPrimitiveDot />
        {c.value}
      </span>
    ),
  },
]

export const CREDIT_COLUMN = [
  {
    Header: 'CUSTOMER',
    accessor: 'email',
    Cell: (row: any) => (
      <span className="flex items-center justify-center">
        <span
          style={{
            width: '48px',
            height: '48px',
            background: '#e5e5e5',
            color: '#101828',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            fontWeight: 500,
            marginRight: '8px',
          }}
        >
          {row.row.original.profile ? (
            <Image
              src={row.row.original.profile}
              alt="profile"
              width={48}
              height={48}
            />
          ) : (
            `${row.row.original.first_name.charAt(
              0,
            )}${row.row.original.last_name.charAt(0)}`
          )}
        </span>
        <span className="font-normal">
          {row.row.original.first_name} {row.row.original.last_name}
          <span
            style={{
              display: 'block',
              color: '#667085',
            }}
          >
            {row.row.original.email}
          </span>
        </span>
      </span>
    ),
  },
  {
    Header: 'AMOUNT',
    accessor: (e: any) => `${e.currency} ${e.amount}`,
  },
  {
    Header: 'DATE REQUESTED',
    accessor: 'date',
  },
  {
    Header: 'STATUS',
    accessor: 'status',
    Cell: (val: any) => (
      <>
        {val.value === 'Approved' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#ECFDF3',
              color: '#027A48',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : val.value === 'Rejected' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#FEF3F2',
              color: '#B42318',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F2F4F7',
              color: '#344054',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        )}
      </>
    ),
  },
  {
    Header: 'REQUEST TYPE',
    accessor: 'request_type',
  },
]

export const FULFILMENT_COLUMN = [
  {
    Header: 'CUSTOMERS',
    accessor: 'phone_number',
    Cell: (row: any) => (
      <span className="flex items-center justify-center">
        <span
          style={{
            width: '48px',
            height: '48px',
            background: '#e5e5e5',
            color: '#101828',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            fontWeight: 500,
            marginRight: '8px',
          }}
        >
          {row.row.original.profile ? (
            <Image
              src={row.row.original.profile}
              alt="profile"
              width={48}
              height={48}
            />
          ) : (
            `${row.row.original.first_name.charAt(
              0,
            )}${row.row.original.last_name.charAt(0)}`
          )}
        </span>
        <span className="font-normal" style={{ color: '#101828' }}>
          {row.row.original.first_name} {row.row.original.last_name}
          <span
            style={{
              display: 'block',
              color: '#667085',
            }}
          >
            {row.row.original.phone_number}
          </span>
        </span>
      </span>
    ),
  },
  {
    Header: 'LOAN AMOUNT',
    accessor: 'amount',
    Cell: (row: any) => (
      <span className="font-medium">
        {row.row.original.currency} {row.row.original.amount}
      </span>
    ),
  },
  {
    Header: 'START - END DATE',
    accessor: 'date',
  },
  {
    Header: 'VEHICLE REG. NO',
    accessor: 'vehicle_no',
  },
  {
    Header: 'STATUS',
    accessor: 'status',
    Cell: (val: any) => (
      <>
        {val.value === 'Active' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#ECFDF3',
              color: '#027A48',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : val.value === 'Rejected' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#FEF3F2',
              color: '#B42318',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F2F4F7',
              color: '#344054',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        )}
      </>
    ),
  },
]

export const DEFAULTERS_COLUMN = [
  {
    Header: 'DRIVERS',
    accessor: 'phone_number',
    Cell: (row: any) => (
      <span className="flex items-center justify-center">
        <span
          style={{
            width: '48px',
            height: '48px',
            background: '#e5e5e5',
            color: '#101828',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px',
            fontWeight: 500,
            marginRight: '8px',
          }}
        >
          {row.row.original.profile ? (
            <Image
              src={row.row.original.profile}
              alt="profile"
              width={48}
              height={48}
            />
          ) : (
            `${row.row.original.first_name.charAt(
              0,
            )}${row.row.original.last_name.charAt(0)}`
          )}
        </span>
        <span className="font-normal" style={{ color: '#101828' }}>
          {row.row.original.first_name} {row.row.original.last_name}
          <span
            style={{
              display: 'block',
              color: '#667085',
            }}
          >
            {row.row.original.phone_number}
          </span>
        </span>
      </span>
    ),
  },
  {
    Header: 'DEFAULT AMOUNT',
    accessor: 'amount',
    Cell: (row: any) => (
      <span className="font-medium">
        {row.row.original.currency} {row.row.original.amount}
      </span>
    ),
  },
  {
    Header: 'AGEING',
    accessor: 'date',
  },
  {
    Header: 'LOAN STATUS',
    accessor: 'status',
    Cell: (val: any) => (
      <>
        {val.value === 'Active' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#ECFDF3',
              color: '#027A48',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : val.value === 'Rejected' ? (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#FEF3F2',
              color: '#B42318',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        ) : (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F2F4F7',
              color: '#344054',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
        )}
      </>
    ),
  },
]


export const RECON_COLUMN = [
  {
    Header: 'DATE',
    accessor: 'date',
  },
    {
    Header: 'TRANS ID.',
    accessor: 'trans_id',
      Cell: (props: any) => (
      <span
        style={{
          fontWeight: 500,
          color: '#101010',
        }}
      >
        {props.value}
      </span>
    ),
  },
    {
    Header: 'MATCHING ACC.',
    accessor: 'account_no',
    Cell: (row: any) => (
       <p className="text-blackRussian text-sm">
          {row.row.original.account_no}
          <span
            style={{
              display: 'block',
              color: '#667085',
              fontSize: '12px',
            }}
          >
            {row.row.original.bank_name}
          </span>
        </p>
    )
  
  },
    {
    Header: 'INVOICE TOTAL',
    accessor: 'amount',
    Cell: (row: any) => (
      <span className="text-blackRussian text-sm">
        {row.row.original.currency} {row.row.original.amount}
      </span>
    ),
  },
    {
    Header: 'COLLECTION',
    accessor: 'collection_amt',
     Cell: (row: any) => (
      <span className="text-blackRussian text-sm">
        {row.row.original.currency} {row.row.original.collection_amt}
      </span>
    ),

  },
    {
    Header: '% RECONCILED',
    accessor: 'reconciled',
    Cell: (val:any) => (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F4F3FF',
              color: '#5925DC',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
    )
  },
]
export const REPORT_COLUMN = [
  {
    Header: 'DATE',
    accessor: 'date',
  },
    {
    Header: 'TRANS ID.',
    accessor: 'trans_id',
      Cell: (props: any) => (
      <span
        style={{
          fontWeight: 500,
          color: '#101010',
        }}
      >
        {props.value}
      </span>
    ),
  },
    {
    Header: 'MATCHING ACC.',
    accessor: 'account_no',
    Cell: (row: any) => (
       <p className="text-blackRussian text-sm">
          {row.row.original.account_no}
          <span
            style={{
              display: 'block',
              color: '#667085',
              fontSize: '12px',
            }}
          >
            {row.row.original.bank_name}
          </span>
        </p>
    )
  
  },
    {
    Header: 'INVOICE TOTAL',
    accessor: 'amount',
    Cell: (row: any) => (
      <span className="text-blackRussian text-sm">
        {row.row.original.currency} {row.row.original.amount}
      </span>
    ),
  },
    {
    Header: 'STATEMENT TOTAL',
    accessor: 'statement_amt',
     Cell: (row: any) => (
      <span className="text-blackRussian text-sm">
        {row.row.original.currency} {row.row.original.statement_amt}
      </span>
    ),

  },
    {
    Header: '% RECONCILED',
    accessor: 'reconciled',
    Cell: (val:any) => (
          <span
            className="flex items-center rounded-2xl text-xs"
            style={{
              background: '#F4F3FF',
              color: '#5925DC',
              fontWeight: 500,
              padding: '4px 12px 4px 10px',
            }}
          >
            {val.value}
          </span>
    )
  },
]