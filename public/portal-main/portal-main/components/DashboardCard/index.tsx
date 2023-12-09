import Image from 'next/image'

interface BoxProps {
  icon: any
  amount: string
  title: string
}

export default function DashboardCard({icon, amount, title}: BoxProps) {
  return (
    <div className='bg-white w-full px-5 py-7 rounded-lg my-10'>
      <div className='flex pb-10 items-center'>
        <Image src={icon} width={60} height={60} alt="icon" className='mr-3' />
        <span className='text-base text-darkGrey font-semibold'>{title}</span>
      </div>

      <span className='text-lg pr-2'>NGN</span> <span className='text-almostBlack text-3xl font-bold'>{amount}</span>
    </div>
  )
}
