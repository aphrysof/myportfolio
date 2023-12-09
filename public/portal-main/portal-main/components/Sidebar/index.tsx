import Image from "next/image";
import { menu } from "../../data";
import logo from "../../public/logo.png";
import Dropdown from '../Dropdown'
import dashboard from "../../public/space_dashboard.png";
import customer from "../../public/account_circle.png";
import recon from "../../public/stream.png";
import wallet from "../../public/wallet.png";
import credit from "../../public/payments.png"

const Menu = [
    {
        icon: dashboard,
        path: '/dashboard',
        name: 'Dashboard',
    },
    {
        icon: wallet,
        path: '/wallet',
        name: 'Wallet',
        subNav: [
            {
                title: 'Transaction',
                path: '/wallet/transactions'
            },
            {
                title: 'Sub-accounts',
                path: '/wallet/sub-accounts'
            },
        ]
    },
    {
        icon: customer,
        path: '/customers',
        name: 'Customers',
    },
    {
        icon: credit,
        path: '/credit',
        name: 'Credit',
        subNav: [
            {
                title: 'Fulfilment',
                path: '/credit/fulfilment'
            },
            {
                title: 'Defaulters',
                path: '/credit/defaulters'
            },
        ]
    },
    {
        icon: recon,
        path: '/reconciliation',
        name: 'Reconciliation'

    }
]

export default function Sidebar() {
  return (
    <div className="w-310 bg-white border-r-2 border-borderAsh pt-8 px-8 h-screen fixed top-0 left-0">
      <div className="">
        <Image src={logo} alt="logo" />
        <div className="mt-16 grid gap-10">
          <h1 className="text-[#808080] text-xs font-normal">QUICK MENU</h1>
          {Menu && Menu.map((item, index) => (
           <Dropdown key={index} item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
