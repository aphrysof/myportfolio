import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Container from "../Container";
import { BigInputField, SelectField } from "../InputField";

  type AppProps = {
  page: number
  handleStep: () => void
  goBack: () => void
}

const tenure = [
    {
        value: '' , 
        text: 'Choose tenure'
    }
]


export default function FulfilmentStep2 ({page, handleStep, goBack}: AppProps) {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    return (
       <Container
        backBtn={
          <>
          <Link href="/credit/fulfilment">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Add Fulfilmet</span>
        </>
       }
       >
        {page === 1 && (
            <>
            <div className="w-full bg-white rounded-lg p-14">
                 <h1 className="text-2xl text-almostBlack font-medium">Add fulfilment</h1>
            <div className="flex justify-between items-center text-backText text-sm mt-2">
                <p>Register a new fulfilment for a customer</p>
                <p className="text-blackRussian font-semibold">{page + 1} <span className="text-backText">of 3</span></p>
            </div>
                <div className="flex w-full mt-12 justify-center">
                <h2 className="text-lg text-blackRussian font-medium mr-6 w-1/5 relative bottom-4">Loan Information</h2>
                <div className="border-t-2 border-tableHeadbg w-3/4">
                    <div className="flex space-x-7 mt-9 justify-end">
                     <BigInputField
                        className="w-[270px]"
                        type="number"
                        label="LOAN AMOUNT"
                        placeholder="NGN 0.00"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="loan_amt"
                        labelClass="text-lightAsh text-sm"
                    />
                     <SelectField
                        className="w-[270px]"
                        label="TENURE"
                        selectArray={tenure}
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="tenure"
                        labelClass="text-lightAsh text-sm"
                    />
                    </div>
                    <div className="flex space-x-7 mt-9 justify-end">
                        <BigInputField
                        className="w-[270px]"
                        type="number"
                        label="INITIAL DEPOSIT"
                        placeholder="NGN 0.00"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="initial_deposit"
                        labelClass="text-lightAsh text-sm"
                    />
                     <BigInputField
                        className="w-[270px]"
                        type="number"
                        label="MONTHLY REPAYMENT"
                        placeholder="NGN 0.00"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="monthly_repayment"
                        labelClass="text-lightAsh text-sm"
                    />
                    </div>
                     <div className="flex space-x-7 mt-9 justify-end">
                          <BigInputField
                        className="w-[270px]"
                        type="date"
                        label="REPAYMENT START DATE"
                        placeholder="NGN 0.00"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="rsd"
                        labelClass="text-lightAsh text-sm"
                    />
                      <BigInputField
                        className="w-[270px]"
                        type="date"
                        label="REPAYMENT END DATE"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="red"
                        labelClass="text-lightAsh text-sm"
                    />
                     </div>
                     <div className="flex space-x-7 mt-9 justify-end">
                        <BigInputField
                        className="w-[570px]"
                        type="text"
                        label="COMMENT"
                        placeholder="Add a note"
                        inputClass="rounded-lg outline-none flex-1 px-2 py-3"
                        register= {register}
                        name="comment"
                        labelClass="text-lightAsh text-sm"
                    />
                     </div>
                </div>
            </div>
            </div>
             <div className="text-right mt-8">
                 <Button child = "Go Back" className="text-blackRussian w-[90px] bg-ipcolor2 py-2 rounded-10 mr-4 font-medium" onClick={goBack}></Button>
                <Button child = "Review fulfilment" className="text-white bg-darkGreen w-[150px] py-2 rounded-10" onClick={handleStep}></Button>
            </div>
            
            </>
        )}
       </Container>
    )
}