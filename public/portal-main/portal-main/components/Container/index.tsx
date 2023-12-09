import Button from '../Button'
// import FilterBtn from "../FilterBtn";
import { Select } from '@chakra-ui/react'

interface ContainerProp {
  title?: string
  children: any
  backBtn?: any
  btn?: boolean
  filter?: boolean
  onClick?: any
  week?: any
  wallet?: any
}

export default function Container({
  title,
  onClick,
  children,
  backBtn,
  btn,
  filter,
  week,
  wallet,
}: ContainerProp) {
  return (
    <div onClick={onClick} className="py-16 px-14 font-inter z-10 max-h-full">
      {/* {filter && <FilterBtn />} */}
      {backBtn ? (
        <div className="tracking-wide text-almostBlack text-sm font-inter pb-10">
          {backBtn}
        </div>
      ) : (
        <div className="flex justify-between">
          <p className="tracking-wide font-medium text-titleColor text-2xl pb-8">
            {title}
          </p>

          {week && (
            <Select
              placeholder="This week"
              width="120px"
              size="sm"
              fontSize={12}
              borderColor="dashborder"
              borderRadius="5px"
            >
              <option value="Last week">Last week</option>
              <option value="This month">This month</option>
            </Select>
          )}

          {btn && (
            <Button
              child="Register"
              className="bg-darkGreen text-white px-6 h-12 pt-3 rounded-lg cursor-pointer"
            />
          )}

          {wallet && wallet}
        </div>
      )}

      {children}
    </div>
  )
}
