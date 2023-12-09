import { Select } from '@chakra-ui/react'
interface CustomerProps {
    title: string,
    amount: string,
    icon: any
    classname: string,
    percent: string
}

export default function CustomerCard ({title, amount, icon, classname, percent} : CustomerProps) {

    return (
    <div className={classname}>
      <div className="flex pb-7 justify-between items-center">
        <p className="text-base font-medium text-almostBlack">{title}</p>
        <Select
          placeholder="Last 7 days"
          width="120px"
          size="sm"
          fontSize={12}
          bg="#D9D9D9"
          borderRadius="5px"
        >
          <option value="Last week">Last month</option>
          <option value="This month">Last 3 months</option>
        </Select>
      </div>
      <p className="text-almostBlack text-3xl font-bold pb-4">{amount}</p>
      <div className="flex items-center">
        {icon}<p className="text-shadeBlue font-medium text-sm"><span className={percent === "10%" ? "text-deepRed mx-2" : "text-green mx-2"}> {percent}</span> vs last month</p>
        </div>
    </div>
    )
}