import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Dropdown({ item }: any) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const router = useRouter()

  return (
    <div
      className={
        isListOpen ? "border-[1px] border-[#80B539] p-2 rounded-lg" : "none"
      }
    >
      <div className="flex items-center justify-between text-[#101010] font-medium">
        <Link href={item.path} className="flex items-center">
          <Image src={item.icon} alt="icon" className="mr-3" />
          {item.name}
        </Link>
        {item.subNav && isListOpen ? (
         <MdKeyboardArrowUp onClick={() => setIsListOpen(false)}/>
        ) : item.subNav ? (
           <MdKeyboardArrowDown onClick={() => setIsListOpen(!isListOpen)} />
        ) : null}
      </div>
      {isListOpen &&
        item.subNav.map((list: any, index: any) => (
          <ul key={index}>
            <li className="my-6 ml-8 text-[#101010]">
              <Link href={list.path}>{list.title}</Link>
            </li>
          </ul>
        ))}
    </div>
  );
}

